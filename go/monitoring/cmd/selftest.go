package main

import (
	"context"
	"encoding/json"
	"flag"
	"fmt"
	"net/http"
	"os"
	"os/exec"
	"path/filepath"
	"runtime"
	"time"

	"github.com/NathanBaulch/EnphaseOpenAPI/monitoring"
	"golang.org/x/oauth2"
)

var (
	apiKey       = flag.String("api_key", "", "")
	clientID     = flag.String("client_id", "", "")
	clientSecret = flag.String("client_secret", "", "")
)

func main() {
	flag.Parse()

	ctx := context.WithValue(context.Background(), monitoring.ContextAPIKeys, map[string]monitoring.APIKey{"ApiKey": {Key: *apiKey}})
	cfg := monitoring.NewConfiguration()
	cfg.Debug = true
	cfg.RateLimit(10, time.Minute)
	cli := monitoring.NewAPIClient(cfg)

	if _, _, err := cli.SystemDetailsApi.GetSystems(ctx).Page(1).Execute(); err == nil {
		panic("systems: expected error")
	} else if oerr, ok := err.(*monitoring.GenericOpenAPIError); !ok {
		handleError(err)
	} else if mdl, ok := oerr.Model().(monitoring.ClientError); !ok || mdl.Code != 401 {
		handleError(err)
	}

	oauthcfg := &oauth2.Config{
		ClientID:     *clientID,
		ClientSecret: *clientSecret,
		Endpoint: oauth2.Endpoint{
			AuthURL:  "https://api.enphaseenergy.com/oauth/authorize",
			TokenURL: "https://api.enphaseenergy.com/oauth/token",
		},
		RedirectURL: "https://api.enphaseenergy.com/oauth/redirect_uri",
	}

	dir, err := os.UserHomeDir()
	if err != nil {
		panic(err)
	}
	path := filepath.Join(dir, ".enphaseopenapi")

	tok := &oauth2.Token{}
	if f, err := os.Open(path); err != nil {
		if !os.IsNotExist(err) {
			panic(err)
		}
	} else {
		if err := json.NewDecoder(f).Decode(tok); err != nil {
			panic(err)
		}
		_ = f.Close()
	}
	if !tok.Valid() {
		if err := openBrowser(oauthcfg.AuthCodeURL("")); err != nil {
			panic(err)
		}
		print("Enter authorization code: ")
		var code string
		if _, err := fmt.Scanln(&code); err != nil {
			panic(err)
		}
		tok, err = oauthcfg.Exchange(ctx, code)
		if err != nil {
			panic(err)
		}
		if f, err := os.Create(path); err != nil {
			panic(err)
		} else {
			if err := json.NewEncoder(f).Encode(tok); err != nil {
				panic(err)
			}
			_ = f.Close()
		}
	}

	ctx = context.WithValue(ctx, monitoring.ContextOAuth2, oauthcfg.TokenSource(ctx, tok))

	startDate := time.Now().Add(-31 * 24 * time.Hour).Format("2006-01-02")
	endDate := time.Now().Add(-25 * 24 * time.Hour).Format("2006-01-02")
	futureDate := time.Now().Add(24 * time.Hour).Format("2006-01-02")
	startAt := time.Now().Add(-7 * 24 * time.Hour).Unix()
	endAt := time.Now().Add(-24 * time.Hour).Unix()

	page := int32(1)
	for {
		if mdl, res, err := cli.SystemDetailsApi.GetSystems(ctx).Page(page).Execute(); checkResponse(mdl, res, err) {
			for _, sys := range mdl.Systems {
				pn := monitoring.PublicNameFromDisplayString(sys.PublicName)
				req := cli.SystemDetailsApi.SearchSystems(ctx).Size(1).
					Params(monitoring.SearchSystemsRequest{System: monitoring.SearchSystemsRequestSystem{
						Ids:            []int32{sys.SystemId},
						Name:           sys.Name,
						PublicName:     pn,
						Statuses:       []monitoring.SystemStatusEnum{*sys.Status},
						ConnectionType: sys.ConnectionType,
					}})
				if mdl, res, err := req.Execute(); checkResponse(mdl, res, err) {
					if len(mdl.Systems) != 1 {
						panic("search: expected one result")
					}
				}

				checkResponse(cli.SystemDetailsApi.GetSystem(ctx, sys.SystemId).Execute())
				checkResponse(cli.SystemDetailsApi.GetSystemSummary(ctx, sys.SystemId).Execute())

				var serNum string

				if mdl, res, err := cli.SystemDetailsApi.GetSystemDevices(ctx, sys.SystemId).Execute(); checkResponse(mdl, res, err) {
					devices := *mdl.Devices
					for _, dev := range devices["gateways"] {
						serNum = *dev.SerialNumber
						checkResponse(cli.SystemDetailsApi.RetrieveSystemId(ctx).SerialNum(serNum).Execute())
						break
					}
					for _, dev := range devices["micros"] {
						if checkResponse(cli.DeviceLevelProductionMonitoringApi.GetSystemMicroDeviceTelemetry(ctx, sys.SystemId, *dev.SerialNumber).Execute()) {
							checkResponse(cli.DeviceLevelProductionMonitoringApi.GetSystemMicroDeviceTelemetry(ctx, sys.SystemId, *dev.SerialNumber).StartAt(startAt).Granularity(monitoring.TELEMETRYGRANULARITYENUM_WEEK).Execute())
						}
						break
					}
					for _, dev := range devices["acbs"] {
						if checkResponse(cli.DeviceLevelProductionMonitoringApi.GetSystemAcbDeviceTelemetry(ctx, sys.SystemId, *dev.SerialNumber).Execute()) {
							checkResponse(cli.DeviceLevelProductionMonitoringApi.GetSystemAcbDeviceTelemetry(ctx, sys.SystemId, *dev.SerialNumber).StartAt(startAt).Granularity(monitoring.TELEMETRYGRANULARITYENUM_WEEK).Execute())
						}
						break
					}
					for _, dev := range devices["encharges"] {
						if checkResponse(cli.DeviceLevelProductionMonitoringApi.GetSystemEnchargeDeviceTelemetry(ctx, sys.SystemId, *dev.SerialNumber).Execute()) {
							checkResponse(cli.DeviceLevelProductionMonitoringApi.GetSystemEnchargeDeviceTelemetry(ctx, sys.SystemId, *dev.SerialNumber).StartAt(startAt).Granularity(monitoring.TELEMETRYGRANULARITYENUM_WEEK).Execute())
						}
						break
					}
				}

				checkResponse(cli.SiteLevelProductionMonitoringApi.GetSystemProductionMeterReadings(ctx, sys.SystemId).Execute())
				checkResponse(cli.SiteLevelProductionMonitoringApi.GetSystemProductionMeterReadings(ctx, sys.SystemId).EndAt(endAt).Execute())
				checkResponse(cli.SiteLevelProductionMonitoringApi.GetSystemRgmStats(ctx, sys.SystemId).Execute())
				checkResponse(cli.SiteLevelProductionMonitoringApi.GetSystemRgmStats(ctx, sys.SystemId).StartAt(startAt).EndAt(endAt).Execute())

				checkResponse(cli.SiteLevelConsumptionMonitoringApi.GetSystemConsumptionLifetime(ctx, sys.SystemId).Execute())
				checkResponse(cli.SiteLevelConsumptionMonitoringApi.GetSystemConsumptionLifetime(ctx, sys.SystemId).StartDate(startDate).EndDate(endDate).Execute())
				if _, _, err := cli.SiteLevelConsumptionMonitoringApi.GetSystemConsumptionLifetime(ctx, sys.SystemId).StartDate(futureDate).Execute(); err == nil {
					panic("consumption_lifetime: expected error")
				} else if oerr, ok := err.(*monitoring.GenericOpenAPIError); !ok {
					handleError(err)
				} else if mdl, ok := oerr.Model().(monitoring.ClientError); !ok || mdl.Code != 422 || mdl.Details != "Requested date is in the future" {
					handleError(err)
				}

				checkResponse(cli.SiteLevelProductionMonitoringApi.GetSystemEnergyLifetime(ctx, sys.SystemId).Execute())
				checkResponse(cli.SiteLevelProductionMonitoringApi.GetSystemEnergyLifetime(ctx, sys.SystemId).StartDate(startDate).EndDate(endDate).Production("all").Execute())
				if _, _, err := cli.SiteLevelProductionMonitoringApi.GetSystemEnergyLifetime(ctx, sys.SystemId).StartDate(futureDate).Execute(); err == nil {
					panic("energy_lifetime: expected error")
				} else if oerr, ok := err.(*monitoring.GenericOpenAPIError); !ok {
					handleError(err)
				} else if mdl, ok := oerr.Model().(monitoring.ClientError); !ok || mdl.Code != 422 || mdl.Details != "Requested date is in the future" {
					handleError(err)
				}

				checkResponse(cli.SiteLevelConsumptionMonitoringApi.GetSystemBatteryLifetime(ctx, sys.SystemId).Execute())
				checkResponse(cli.SiteLevelConsumptionMonitoringApi.GetSystemBatteryLifetime(ctx, sys.SystemId).StartDate(startDate).EndDate(endDate).Execute())
				if _, _, err := cli.SiteLevelConsumptionMonitoringApi.GetSystemBatteryLifetime(ctx, sys.SystemId).StartDate(futureDate).Execute(); err == nil {
					panic("battery_lifetime: expected error")
				} else if oerr, ok := err.(*monitoring.GenericOpenAPIError); !ok {
					handleError(err)
				} else if mdl, ok := oerr.Model().(monitoring.ClientError); !ok || mdl.Code != 422 || mdl.Details != "Requested date is in the future" {
					handleError(err)
				}

				checkResponse(cli.SiteLevelConsumptionMonitoringApi.GetSystemEnergyImportLifetime(ctx, sys.SystemId).Execute())
				checkResponse(cli.SiteLevelConsumptionMonitoringApi.GetSystemEnergyImportLifetime(ctx, sys.SystemId).StartDate(startDate).EndDate(endDate).Execute())
				if _, _, err := cli.SiteLevelConsumptionMonitoringApi.GetSystemEnergyImportLifetime(ctx, sys.SystemId).StartDate(futureDate).Execute(); err == nil {
					panic("energy_import_lifetime: expected error")
				} else if oerr, ok := err.(*monitoring.GenericOpenAPIError); !ok {
					handleError(err)
				} else if mdl, ok := oerr.Model().(monitoring.ClientError); !ok || mdl.Code != 422 || mdl.Details != "Requested date is in the future" {
					handleError(err)
				}

				checkResponse(cli.SiteLevelConsumptionMonitoringApi.GetSystemEnergyExportLifetime(ctx, sys.SystemId).Execute())
				checkResponse(cli.SiteLevelConsumptionMonitoringApi.GetSystemEnergyExportLifetime(ctx, sys.SystemId).StartDate(startDate).EndDate(endDate).Execute())
				if _, _, err := cli.SiteLevelConsumptionMonitoringApi.GetSystemEnergyExportLifetime(ctx, sys.SystemId).StartDate(futureDate).Execute(); err == nil {
					panic("energy_export_lifetime: expected error")
				} else if oerr, ok := err.(*monitoring.GenericOpenAPIError); !ok {
					handleError(err)
				} else if mdl, ok := oerr.Model().(monitoring.ClientError); !ok || mdl.Code != 422 || mdl.Details != "Requested date is in the future" {
					handleError(err)
				}

				checkResponse(cli.SystemDetailsApi.GetInvertersSummaryByEnvoyOrSite(ctx).SiteId(sys.SystemId).Execute())
				if serNum != "" {
					checkResponse(cli.SystemDetailsApi.GetInvertersSummaryByEnvoyOrSite(ctx).EnvoySerialNumber(serNum).Execute())
				}
				if _, _, err := cli.SystemDetailsApi.GetInvertersSummaryByEnvoyOrSite(ctx).SiteId(-1).Execute(); err == nil {
					panic("inverters_summary_by_envoy_or_site: expected error")
				} else if oerr, ok := err.(*monitoring.GenericOpenAPIError); !ok {
					handleError(err)
				} else if mdl, ok := oerr.Model().(monitoring.ClientError); !ok || mdl.Code != 422 || mdl.Details != "Couldn't find Site with 'id'=-1" {
					handleError(err)
				}

				checkResponse(cli.SiteLevelProductionMonitoringApi.GetSystemProductionMicroTelemetry(ctx, sys.SystemId).Execute())
				checkResponse(cli.SiteLevelProductionMonitoringApi.GetSystemProductionMicroTelemetry(ctx, sys.SystemId).StartAt(startAt).Granularity(monitoring.TELEMETRYGRANULARITYENUM_WEEK).Execute())
				checkResponse(cli.SiteLevelProductionMonitoringApi.GetSystemProductionMeterTelemetry(ctx, sys.SystemId).Execute())
				checkResponse(cli.SiteLevelProductionMonitoringApi.GetSystemProductionMeterTelemetry(ctx, sys.SystemId).StartAt(startAt).Granularity(monitoring.TELEMETRYGRANULARITYENUM_WEEK).Execute())
				checkResponse(cli.SiteLevelConsumptionMonitoringApi.GetSystemBatteryTelemetry(ctx, sys.SystemId).Execute())
				checkResponse(cli.SiteLevelConsumptionMonitoringApi.GetSystemBatteryTelemetry(ctx, sys.SystemId).StartAt(startAt).Granularity(monitoring.TELEMETRYGRANULARITYENUM_WEEK).Execute())
				checkResponse(cli.SiteLevelConsumptionMonitoringApi.GetSystemConsumptionMeterTelemetry(ctx, sys.SystemId).Execute())
				checkResponse(cli.SiteLevelConsumptionMonitoringApi.GetSystemConsumptionMeterTelemetry(ctx, sys.SystemId).StartAt(startAt).Granularity(monitoring.TELEMETRYGRANULARITYENUM_WEEK).Execute())
				checkResponse(cli.SystemConfigurationsApi.GetSystemBatterySettings(ctx, sys.SystemId).Execute())
				checkResponse(cli.SystemConfigurationsApi.GetSystemStormGuardSettings(ctx, sys.SystemId).Execute())
				checkResponse(cli.SystemConfigurationsApi.GetSystemLoadControlSettings(ctx, sys.SystemId).Execute())
				checkResponse(cli.SiteLevelConsumptionMonitoringApi.GetSystemEnergyImportTelemetry(ctx, sys.SystemId).Execute())
				checkResponse(cli.SiteLevelConsumptionMonitoringApi.GetSystemEnergyImportTelemetry(ctx, sys.SystemId).StartAt(startAt).Granularity(monitoring.TELEMETRYGRANULARITYENUM_WEEK).Execute())
				checkResponse(cli.SiteLevelConsumptionMonitoringApi.GetSystemEnergyExportTelemetry(ctx, sys.SystemId).Execute())
				checkResponse(cli.SiteLevelConsumptionMonitoringApi.GetSystemEnergyExportTelemetry(ctx, sys.SystemId).StartAt(startAt).Granularity(monitoring.TELEMETRYGRANULARITYENUM_WEEK).Execute())
			}

			if mdl.Count < mdl.Size {
				break
			}
		}

		page++
	}
}

func openBrowser(url string) error {
	switch runtime.GOOS {
	case "linux":
		return exec.Command("xdg-open", url).Start()
	case "windows":
		return exec.Command("rundll32", "url.dll,FileProtocolHandler", url).Start()
	case "darwin":
		return exec.Command("open", url).Start()
	default:
		return fmt.Errorf("unsupported platform")
	}
}

func checkResponse(mdl interface{}, res *http.Response, err error) bool {
	if err != nil {
		if oerr, ok := err.(*monitoring.GenericOpenAPIError); !ok {
			handleError(err)
		} else if mdl, ok := oerr.Model().(monitoring.ClientError); !ok || mdl.Code != 401 {
			handleError(err)
		} else {
			fmt.Printf("WARN: %s\n", mdl.Details)
		}
		return false
	} else {
		checkUnknownFields(&mdl, res)
		return true
	}
}

func handleError(err error) {
	if err, ok := err.(*monitoring.GenericOpenAPIError); ok && err.Model() != nil {
		x, _ := json.Marshal(err.Model())
		panic(string(x))
	}
	panic(err)
}

func checkUnknownFields(mdl interface{}, res *http.Response) {
	dec := json.NewDecoder(res.Body)
	dec.DisallowUnknownFields()
	if err := dec.Decode(mdl); err != nil {
		panic(err)
	}
}

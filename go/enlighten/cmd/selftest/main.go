package main

import (
	"context"
	"encoding/json"
	"flag"
	"net/http"
	"time"

	"github.com/NathanBaulch/EnphaseOpenAPI"
)

var (
	apiKey = flag.String("api_key", "", "")
	userID = flag.String("user_id", "", "")
)

func main() {
	flag.Parse()
	ctx := context.WithValue(context.Background(), enlighten.ContextAPIKeys, map[string]enlighten.APIKey{"ApiKey": {Key: *apiKey}})
	cfg := enlighten.NewConfiguration()
	cfg.Debug = true
	cfg.RateLimit(10, time.Minute)
	api := enlighten.NewAPIClient(cfg).DefaultApi

	startDate := time.Now().Add(-31 * 24 * time.Hour).Format("2006-01-02")
	endDate := time.Now().Add(-25 * 24 * time.Hour).Format("2006-01-02")
	startAt := time.Now().Add(-7 * 24 * time.Hour).Unix()
	endAt := time.Now().Add(-24 * time.Hour).Unix()

	if _, _, err := api.Systems(ctx).UserId("dummy").Execute(); err == nil {
		panic("systems: expected error")
	} else if oerr, ok := err.(enlighten.GenericOpenAPIError); !ok {
		handleError(err)
	} else if mdl, ok := oerr.Model().(enlighten.ClientError); !ok || mdl.Reason != "401" {
		handleError(err)
	}

	var next *string
	for {
		req := api.Systems(ctx).UserId(*userID)
		if next != nil {
			req.Next(*next)
		}
		if mdl, res, err := req.Execute(); err != nil {
			handleError(err)
		} else {
			checkUnknownFields(&mdl, res)

			for _, sys := range mdl.Systems {
				req := api.Systems(ctx).UserId(*userID).Limit(1).SystemId(sys.SystemId).Status(sys.Meta.Status).ConnectionType(sys.ConnectionType)
				if sys.SystemName != "" {
					req.SystemName(sys.SystemName)
				}
				if sys.Reference != nil {
					req.Reference(*sys.Reference)
				}
				if mdl, res, err := req.Execute(); err != nil {
					handleError(err)
				} else {
					if len(mdl.Systems) != 1 {
						panic("systems: expected one result")
					}
					checkUnknownFields(&mdl, res)
				}

				if mdl, res, err := api.InvertersSummaryByEnvoyOrSite(ctx).UserId(*userID).SiteId(sys.SystemId).Execute(); err != nil {
					handleError(err)
				} else {
					checkUnknownFields(&mdl, res)
				}
				if _, _, err := api.InvertersSummaryByEnvoyOrSite(ctx).UserId(*userID).SiteId(-1).Execute(); err == nil {
					panic("inverters_summary_by_envoy_or_site: expected error")
				} else if oerr, ok := err.(enlighten.GenericOpenAPIError); !ok {
					handleError(err)
				} else if mdl, ok := oerr.Model().(enlighten.UnprocessableEntityError); !ok || mdl.Message == nil || *mdl.Message != "Couldn't find Site with 'id'=-1" {
					handleError(err)
				}

				if mdl, res, err := api.EnergyLifetime(ctx, sys.SystemId).UserId(*userID).Execute(); err != nil {
					handleError(err)
				} else {
					checkUnknownFields(&mdl, res)
				}

				if mdl, res, err := api.EnergyLifetime(ctx, sys.SystemId).UserId(*userID).StartDate(startDate).EndDate(endDate).Production("all").Execute(); err != nil {
					handleError(err)
				} else {
					checkUnknownFields(&mdl, res)
				}
				if _, _, err := api.EnergyLifetime(ctx, sys.SystemId).UserId(*userID).StartDate(time.Now().Format("2006-01-02")).Execute(); err == nil {
					panic("energy_lifetime: expected error")
				} else if oerr, ok := err.(enlighten.GenericOpenAPIError); !ok {
					handleError(err)
				} else if mdl, ok := oerr.Model().(enlighten.UnprocessableEntityError); !ok || mdl.Reason == nil || *mdl.Reason != "Requested date range is invalid for this system" {
					handleError(err)
				}

				if mdl, res, err := api.Envoys(ctx, sys.SystemId).UserId(*userID).Execute(); err != nil {
					handleError(err)
				} else {
					checkUnknownFields(&mdl, res)
					for _, env := range mdl.Envoys {
						if mdl, res, err := api.SearchSystemId(ctx).UserId(*userID).SerialNum(env.SerialNumber).Execute(); err != nil {
							handleError(err)
						} else {
							checkUnknownFields(&mdl, res)
						}
						if _, _, err := api.SearchSystemId(ctx).UserId(*userID).SerialNum("dummy").Execute(); err == nil {
							panic("search_system_id: expected error")
						} else if oerr, ok := err.(enlighten.GenericOpenAPIError); !ok {
							handleError(err)
						} else if mdl, ok := oerr.Model().(enlighten.NotFoundError); !ok || mdl.Reason != "404" {
							handleError(err)
						}
					}
				}

				if mdl, res, err := api.Inventory(ctx, sys.SystemId).UserId(*userID).Execute(); err != nil {
					handleError(err)
				} else {
					checkUnknownFields(&mdl, res)
				}

				if mdl, res, err := api.MonthlyProduction(ctx, sys.SystemId).UserId(*userID).StartDate(startDate).Execute(); err != nil {
					handleError(err)
				} else {
					checkUnknownFields(&mdl, res)
				}

				if mdl, res, err := api.ProductionMeterReadings(ctx, sys.SystemId).UserId(*userID).Execute(); err != nil {
					handleError(err)
				} else {
					checkUnknownFields(&mdl, res)
				}

				if mdl, res, err := api.ProductionMeterReadings(ctx, sys.SystemId).UserId(*userID).EndAt(endAt).Execute(); err != nil {
					handleError(err)
				} else {
					checkUnknownFields(&mdl, res)
				}

				if mdl, res, err := api.RgmStats(ctx, sys.SystemId).UserId(*userID).Execute(); err != nil {
					handleError(err)
				} else {
					checkUnknownFields(&mdl, res)
				}

				if mdl, res, err := api.RgmStats(ctx, sys.SystemId).UserId(*userID).StartAt(startAt).EndAt(endAt).Execute(); err != nil {
					handleError(err)
				} else {
					checkUnknownFields(&mdl, res)
				}

				if mdl, res, err := api.Stats(ctx, sys.SystemId).UserId(*userID).Execute(); err != nil {
					handleError(err)
				} else {
					checkUnknownFields(&mdl, res)
				}

				if mdl, res, err := api.Stats(ctx, sys.SystemId).UserId(*userID).StartAt(startAt).EndAt(endAt).Execute(); err != nil {
					handleError(err)
				} else {
					checkUnknownFields(&mdl, res)
				}

				if mdl, res, err := api.ConsumptionLifetime(ctx, sys.SystemId).UserId(*userID).Execute(); err != nil {
					handleError(err)
				} else {
					checkUnknownFields(&mdl, res)
				}

				if mdl, res, err := api.ConsumptionLifetime(ctx, sys.SystemId).UserId(*userID).StartDate(startDate).EndDate(endDate).Execute(); err != nil {
					handleError(err)
				} else {
					checkUnknownFields(&mdl, res)
				}

				if mdl, res, err := api.ConsumptionStats(ctx, sys.SystemId).UserId(*userID).Execute(); err != nil {
					handleError(err)
				} else {
					checkUnknownFields(&mdl, res)
				}

				if mdl, res, err := api.ConsumptionStats(ctx, sys.SystemId).UserId(*userID).StartAt(startAt).EndAt(endAt).Execute(); err != nil {
					handleError(err)
				} else {
					checkUnknownFields(&mdl, res)
				}

				if mdl, res, err := api.Summary(ctx, sys.SystemId).UserId(*userID).Execute(); err != nil {
					handleError(err)
				} else {
					checkUnknownFields(&mdl, res)
				}

				if mdl, res, err := api.Summary(ctx, sys.SystemId).UserId(*userID).SummaryDate(startDate).Execute(); err != nil {
					handleError(err)
				} else {
					checkUnknownFields(&mdl, res)
				}
			}

			if next = mdl.Next; next == nil {
				break
			}
		}
	}
}

func handleError(err error) {
	if err, ok := err.(enlighten.GenericOpenAPIError); ok && err.Model() != nil {
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

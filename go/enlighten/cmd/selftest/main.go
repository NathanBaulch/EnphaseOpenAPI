package main

import (
	"context"
	"encoding/json"
	"flag"
	"net/http"
	"time"

	"github.com/NathanBaulch/EnphaseOpenAPI"
	"golang.org/x/time/rate"
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
	api := enlighten.NewAPIClient(cfg).DefaultApi
	WithRateLimit(cfg.HTTPClient, rate.NewLimiter(rate.Every(time.Minute), 10))

	startDate := time.Now().Add(-31 * 24 * time.Hour).Format("2006-01-02")
	endDate := time.Now().Add(-25 * 24 * time.Hour).Format("2006-01-02")
	startAt := time.Now().Add(-7 * 24 * time.Hour).Unix()
	endAt := time.Now().Add(-24 * time.Hour).Unix()

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

func WithRateLimit(c *http.Client, r *rate.Limiter) {
	t := c.Transport
	if t == nil {
		t = http.DefaultTransport
	}
	c.Transport = &rateLimitTransport{RoundTripper: t, r: r}
}

type rateLimitTransport struct {
	http.RoundTripper
	r *rate.Limiter
}

func (t *rateLimitTransport) RoundTrip(req *http.Request) (*http.Response, error) {
	_ = t.r.Wait(req.Context())
	return t.RoundTripper.RoundTrip(req)
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

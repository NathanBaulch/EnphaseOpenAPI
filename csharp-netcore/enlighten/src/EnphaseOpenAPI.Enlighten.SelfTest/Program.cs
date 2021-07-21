using System;
using CommandLine;
using EnphaseOpenAPI.Enlighten.Api;
using EnphaseOpenAPI.Enlighten.Client;
using Newtonsoft.Json;

namespace EnphaseOpenAPI.Enlighten.SelfTest
{
    public class Options
    {
        [Option("api_key")]
        public string ApiKey { get; set; }

        [Option("user_id")]
        public string UserId { get; set; }
    }

    public static class Program
    {
        public static void Main(string[] args)
        {
            var cfg = new Configuration();
            var uid = "";
            Parser.Default.ParseArguments<Options>(args).WithParsed(opts =>
            {
                if (opts.ApiKey != null)
                {
                    cfg.ApiKey.Add("key", opts.ApiKey);
                }

                uid = opts.UserId;
            });
            var api = new DefaultApi(cfg);
            api.FixExceptions();
            api.Debug();
            api.RateLimit(10, TimeSpan.FromMinutes(1));

            var startAt = DateTimeOffset.Now.AddDays(-7).ToUnixTimeSeconds();
            var endAt = DateTimeOffset.Now.AddDays(-1).ToUnixTimeSeconds();

            string next = null;
            while (true)
            {
                var res = api.SystemsWithHttpInfo(uid, next);
                CheckUnknownFields(res);

                foreach (var sys in res.Data.Systems)
                {
                    var res2 = api.SystemsWithHttpInfo(uid, limit: 1, systemId: sys.SystemId, systemName: sys.SystemName, status: sys.Meta.Status, reference: sys.Reference,
                        connectionType: sys.ConnectionType);
                    CheckUnknownFields(res2);
                    if (res2.Data.Systems.Count != 1)
                    {
                        throw new Exception("systems: expected one result");
                    }

                    CheckUnknownFields(api.InvertersSummaryByEnvoyOrSiteWithHttpInfo(uid, sys.SystemId));
                    CheckUnknownFields(api.EnergyLifetimeWithHttpInfo(uid, sys.SystemId));
                    CheckUnknownFields(api.EnergyLifetimeWithHttpInfo(uid, sys.SystemId, DateTimeOffset.Now.AddMonths(-1), DateTimeOffset.Now.AddMonths(-1).AddDays(7)));

                    var res3 = api.EnvoysWithHttpInfo(uid, sys.SystemId);
                    CheckUnknownFields(res3);
                    CheckUnknownFields(api.EnvoysWithHttpInfo(uid, sys.SystemId));
                    foreach (var env in res3.Data.Envoys)
                    {
                        CheckUnknownFields(api.SearchSystemIdWithHttpInfo(uid, env.SerialNumber));
                    }

                    CheckUnknownFields(api.InventoryWithHttpInfo(uid, sys.SystemId));
                    CheckUnknownFields(api.MonthlyProductionWithHttpInfo(uid, sys.SystemId, DateTimeOffset.Now.AddMonths(-1)));
                    CheckUnknownFields(api.ProductionMeterReadingsWithHttpInfo(uid, sys.SystemId));
                    CheckUnknownFields(api.ProductionMeterReadingsWithHttpInfo(uid, sys.SystemId, endAt));
                    CheckUnknownFields(api.RgmStatsWithHttpInfo(uid, sys.SystemId));
                    CheckUnknownFields(api.RgmStatsWithHttpInfo(uid, sys.SystemId, startAt, endAt));
                    CheckUnknownFields(api.StatsWithHttpInfo(uid, sys.SystemId));
                    CheckUnknownFields(api.StatsWithHttpInfo(uid, sys.SystemId, startAt, endAt));
                    CheckUnknownFields(api.ConsumptionLifetimeWithHttpInfo(uid, sys.SystemId));
                    CheckUnknownFields(api.ConsumptionLifetimeWithHttpInfo(uid, sys.SystemId, DateTimeOffset.Now.AddMonths(-1), DateTimeOffset.Now.AddMonths(-1).AddDays(7)));
                    CheckUnknownFields(api.ConsumptionStatsWithHttpInfo(uid, sys.SystemId));
                    CheckUnknownFields(api.ConsumptionStatsWithHttpInfo(uid, sys.SystemId, startAt, endAt));
                    CheckUnknownFields(api.SummaryWithHttpInfo(uid, sys.SystemId));
                    CheckUnknownFields(api.SummaryWithHttpInfo(uid, sys.SystemId, DateTimeOffset.Now.AddMonths(-1)));
                }

                if ((next = res.Data.Next) == null)
                {
                    break;
                }
            }
        }

        private static void CheckUnknownFields<T>(ApiResponse<T> res)
        {
            JsonConvert.DeserializeObject<T>(res.RawContent, new JsonSerializerSettings {MissingMemberHandling = MissingMemberHandling.Error});
        }
    }
}
using System;
using CommandLine;
using EnphaseOpenAPI.Enlighten.Api;
using EnphaseOpenAPI.Enlighten.Client;
using EnphaseOpenAPI.Enlighten.Model;
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
            var cli = new ApiClient();
            cli.Debug();
            cli.RateLimit(10, TimeSpan.FromMinutes(1));
            var api = new DefaultApi(cli, cli, cfg);
            api.FixExceptions();

            var startAt = DateTimeOffset.Now.AddDays(-7).ToUnixTimeSeconds();
            var endAt = DateTimeOffset.Now.AddDays(-1).ToUnixTimeSeconds();

            try
            {
                api.Systems("dummy");
                throw new Exception("systems: expected client error");
            }
            catch (ApiException e) when (e.ErrorContent is ClientError { Reason: "401", Message: { Count: 1 } } notFound &&
                                         notFound.Message[0] == "Not authorized to access requested resource")
            {
            }

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
                    try
                    {
                        api.InvertersSummaryByEnvoyOrSite(uid, -1);
                        throw new Exception("inverters_summary_by_envoy_or_site: expected unprocessable entity error");
                    }
                    catch (ApiException e) when ((e.ErrorContent as UnprocessableEntityError)?.Message == "Couldn't find Site with 'id'=-1")
                    {
                    }

                    CheckUnknownFields(api.EnergyLifetimeWithHttpInfo(uid, sys.SystemId));
                    CheckUnknownFields(api.EnergyLifetimeWithHttpInfo(uid, sys.SystemId, DateTimeOffset.Now.AddMonths(-1), DateTimeOffset.Now.AddMonths(-1).AddDays(7)));
                    try
                    {
                        api.EnergyLifetime(uid, sys.SystemId, DateTimeOffset.Now);
                        throw new Exception("energy_lifetime: expected unprocessable entity error");
                    }
                    catch (ApiException e) when ((e.ErrorContent as UnprocessableEntityError)?.Reason == "Requested date range is invalid for this system")
                    {
                    }

                    var res3 = api.EnvoysWithHttpInfo(uid, sys.SystemId);
                    CheckUnknownFields(res3);
                    CheckUnknownFields(api.EnvoysWithHttpInfo(uid, sys.SystemId));
                    foreach (var env in res3.Data.Envoys)
                    {
                        CheckUnknownFields(api.SearchSystemIdWithHttpInfo(uid, env.SerialNumber));
                        try
                        {
                            api.SearchSystemId(uid, "dummy");
                            throw new Exception("search_system_id: expected not found error");
                        }
                        catch (ApiException e) when (e.ErrorContent is NotFoundError { Reason: "404", ErrorMessages: { Count: 1 } } notFound &&
                                                     notFound.ErrorMessages[0] == "Envoy not found with this serial number")
                        {
                        }
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
                    try
                    {
                        api.Summary(uid, 0);
                        throw new Exception("summary: expected not found error");
                    }
                    catch (ApiException e) when (e.ErrorContent is NotFoundError { Reason: "404", Message: { Count: 1 } } notFound &&
                                                 notFound.Message[0] == "Couldn't find Site with 'id'=0")
                    {
                    }
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
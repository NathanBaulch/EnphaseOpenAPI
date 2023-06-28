using System;
using System.Diagnostics;
using System.IO;
using System.Runtime.InteropServices;
using System.Threading.Tasks;
using CommandLine;
using EnphaseOpenAPI.Monitoring.Api;
using EnphaseOpenAPI.Monitoring.Client;
using EnphaseOpenAPI.Monitoring.Client.Auth;
using EnphaseOpenAPI.Monitoring.Model;
using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;
using RestSharp.Authenticators;
using RestSharp.Authenticators.OAuth2;

// NATO
namespace EnphaseOpenAPI.Monitoring.SelfTest
{
    public class Options
    {
        [Option("api_key")] public string ApiKey { get; set; }

        [Option("client_id")] public string ClientId { get; set; }

        [Option("client_secret")] public string ClientSecret { get; set; }
    }

    public static class Program
    {
        public static void Main(string[] args)
        {
            var cfg = new Configuration
            {
                OAuthTokenUrl = "https://api.enphaseenergy.com/oauth/token",
                OAuthFlow = OAuthFlow.APPLICATION
            };
            Parser.Default.ParseArguments<Options>(args).WithParsed(opts =>
            {
                if (opts.ApiKey != null)
                {
                    cfg.AddApiKey("key", opts.ApiKey);
                }

                cfg.OAuthClientId = opts.ClientId;
                cfg.OAuthClientSecret = opts.ClientSecret;
            });
            var cli = new ApiClient();
            cli.Debug();
            cli.RateLimit(10, TimeSpan.FromMinutes(1));
            var api = new SystemDetailsApi(cli, cli, cfg);
            api.FixExceptions();

            var startAt = DateTimeOffset.Now.AddDays(-7).ToUnixTimeSeconds();
            var endAt = DateTimeOffset.Now.AddDays(-1).ToUnixTimeSeconds();

            try
            {
                api.GetSystems(0);
                throw new Exception("systems: expected client error");
            }
            catch (ApiException e)
            {
                if (e.ErrorContent is not ClientError { Code: 401 })
                {
                    throw;
                }
            }

            var dir = Environment.GetFolderPath(Environment.SpecialFolder.UserProfile);
            var path = Path.Combine(dir, ".enphaseopenapi");
            var tok = JsonConvert.DeserializeObject<SavedAuthToken>(File.ReadAllText(path));
            if (tok == null || !tok.IsValid())
            {
                OpenUrl(OAuth2.AuthCodeURL(cfg));
                Console.Write("Enter authorization code: ");
                var code = Console.ReadLine();
                var tokResp = OAuth2.Exchange(cfg, cli.SerializerSettings, code);
                tok = new SavedAuthToken
                {
                    TokenType = tokResp.TokenType,
                    AccessToken = tokResp.AccessToken,
                    RefreshToken = tokResp.RefreshToken,
                    Expiry = DateTimeOffset.UtcNow.AddSeconds(tokResp.ExpiresIn)
                };
                File.WriteAllText(path, JsonConvert.SerializeObject(tok));
            }

            cfg.AccessToken = tok.AccessToken;

            var page = 1;
            while (true)
            {
                var res = api.GetSystemsWithHttpInfo(page, 10);
                CheckUnknownFields(res);

                foreach (var sys in res.Data.Systems)
                {
                    // var res2 = api.GetSystemsWithHttpInfo(uid, limit: 1, systemId: sys.SystemId, systemName: sys.SystemName, status: sys.Meta.Status, reference: sys.Reference,
                    //     connectionType: sys.ConnectionType);
                    // CheckUnknownFields(res2);
                    // if (res2.Data.Systems.Count != 1)
                    // {
                    //     throw new Exception("systems: expected one result");
                    // }
                    //
                    // CheckUnknownFields(api.GetInvertersSummaryByEnvoyOrSiteWithHttpInfo(uid, sys.SystemId));
                    // try
                    // {
                    //     api.GetInvertersSummaryByEnvoyOrSite(uid, -1);
                    //     throw new Exception("inverters_summary_by_envoy_or_site: expected unprocessable entity error");
                    // }
                    // catch (ApiException e) when ((e.ErrorContent as UnprocessableEntityError)?.Message == "Couldn't find Site with 'id'=-1")
                    // {
                    // }
                    //
                    // CheckUnknownFields(api.GetEnergyLifetimeWithHttpInfo(uid, sys.SystemId));
                    // CheckUnknownFields(api.GetEnergyLifetimeWithHttpInfo(uid, sys.SystemId, DateTimeOffset.Now.AddMonths(-1), DateTimeOffset.Now.AddMonths(-1).AddDays(7)));
                    // try
                    // {
                    //     api.GetEnergyLifetime(uid, sys.SystemId, DateTimeOffset.Now);
                    //     throw new Exception("energy_lifetime: expected unprocessable entity error");
                    // }
                    // catch (ApiException e) when ((e.ErrorContent as UnprocessableEntityError)?.Reason == "Requested date range is invalid for this system")
                    // {
                    // }
                    //
                    // var res3 = api.GetEnvoysWithHttpInfo(uid, sys.SystemId);
                    // CheckUnknownFields(res3);
                    // CheckUnknownFields(api.GetEnvoysWithHttpInfo(uid, sys.SystemId));
                    // foreach (var env in res3.Data.Envoys)
                    // {
                    //     CheckUnknownFields(api.GetSearchSystemIdWithHttpInfo(uid, env.SerialNumber));
                    //     try
                    //     {
                    //         api.SearchSystems(uid, "dummy");
                    //         throw new Exception("search_system_id: expected not found error");
                    //     }
                    //     catch (ApiException e) when (e.ErrorContent is NotFoundError { Reason: "404", ErrorMessages: { Count: 1 } } notFound &&
                    //                                  notFound.ErrorMessages[0] == "Envoy not found with this serial number")
                    //     {
                    //     }
                    // }
                    //
                    // CheckUnknownFields(api.GetInventoryWithHttpInfo(uid, sys.SystemId));
                    // CheckUnknownFields(api.GetMonthlyProductionWithHttpInfo(uid, sys.SystemId, DateTimeOffset.Now.AddMonths(-1)));
                    // CheckUnknownFields(api.GetProductionMeterReadingsWithHttpInfo(uid, sys.SystemId));
                    // CheckUnknownFields(api.GetProductionMeterReadingsWithHttpInfo(uid, sys.SystemId, endAt));
                    // CheckUnknownFields(api.GetRgmStatsWithHttpInfo(uid, sys.SystemId));
                    // CheckUnknownFields(api.GetRgmStatsWithHttpInfo(uid, sys.SystemId, startAt, endAt));
                    // CheckUnknownFields(api.GetStatsWithHttpInfo(uid, sys.SystemId));
                    // CheckUnknownFields(api.GetStatsWithHttpInfo(uid, sys.SystemId, startAt, endAt));
                    // CheckUnknownFields(api.GetConsumptionLifetimeWithHttpInfo(uid, sys.SystemId));
                    // CheckUnknownFields(api.GetConsumptionLifetimeWithHttpInfo(uid, sys.SystemId, DateTimeOffset.Now.AddMonths(-1), DateTimeOffset.Now.AddMonths(-1).AddDays(7)));
                    // CheckUnknownFields(api.GetConsumptionStatsWithHttpInfo(uid, sys.SystemId));
                    // CheckUnknownFields(api.GetConsumptionStatsWithHttpInfo(uid, sys.SystemId, startAt, endAt));
                    // CheckUnknownFields(api.GetSummaryWithHttpInfo(uid, sys.SystemId));
                    // CheckUnknownFields(api.GetSummaryWithHttpInfo(uid, sys.SystemId, DateTimeOffset.Now.AddMonths(-1)));
                    // try
                    // {
                    //     api.GetSummary(uid, 0);
                    //     throw new Exception("summary: expected not found error");
                    // }
                    // catch (ApiException e) when (e.ErrorContent is NotFoundError { Reason: "404", Message: { Count: 1 } } notFound &&
                    //                              notFound.Message[0] == "Couldn't find Site with 'id'=0")
                    // {
                    // }
                }

                // if ((next = res.Data.Next) == null)
                // {
                //     break;
                // }
                break;
            }
        }

        private static void OpenUrl(string url)
        {
            try
            {
                Process.Start(url);
            }
            catch
            {
                if (RuntimeInformation.IsOSPlatform(OSPlatform.Windows))
                {
                    url = url.Replace("&", "^&");
                    Process.Start(new ProcessStartInfo(url) { UseShellExecute = true });
                }
                else if (RuntimeInformation.IsOSPlatform(OSPlatform.Linux))
                {
                    Process.Start("xdg-open", url);
                }
                else if (RuntimeInformation.IsOSPlatform(OSPlatform.OSX))
                {
                    Process.Start("open", url);
                }
                else
                {
                    throw;
                }
            }
        }

        private static void CheckUnknownFields<T>(ApiResponse<T> res)
        {
            JsonConvert.DeserializeObject<T>(res.RawContent, new JsonSerializerSettings { MissingMemberHandling = MissingMemberHandling.Error });
        }

        private class SavedAuthToken
        {
            [JsonProperty("token_type")] public string TokenType { get; set; }
            [JsonProperty("access_token")] public string AccessToken { get; set; }
            [JsonProperty("refresh_token")] public string RefreshToken { get; set; }
            [JsonProperty("expiry")] public DateTimeOffset Expiry { get; set; }

            public bool IsValid()
            {
                return Expiry > DateTimeOffset.UtcNow;
            }
        }
    }
}
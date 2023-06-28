using System.Threading.Tasks;
using Newtonsoft.Json;
using RestSharp;
using RestSharp.Authenticators;

namespace EnphaseOpenAPI.Monitoring.Client.Auth
{
    public class OAuth2
    {
        public static string AuthorizeUrl = "https://api.enphaseenergy.com/oauth/authorize";
        public static string RedirectUrl = "https://api.enphaseenergy.com/oauth/redirect_uri";

        public static string AuthCodeURL(Configuration cfg)
        {
            return new RestClient(AuthorizeUrl).BuildUri(
                new RestRequest()
                    .AddParameter("response_type", "code")
                    .AddParameter("client_id", cfg.OAuthClientId)
                    .AddParameter("redirect_url", RedirectUrl)
            ).ToString();
        }

        public static TokenResponse Exchange(Configuration cfg, JsonSerializerSettings serializerSettings, string code)
        {
            return ExchangeAsync(cfg, serializerSettings, code).Result;
        }

        public static async Task<TokenResponse> ExchangeAsync(Configuration cfg, JsonSerializerSettings serializerSettings, string code)
        {
            var client = new RestClient(cfg.OAuthTokenUrl)
                .UseSerializer(() => new CustomJsonCodec(serializerSettings, cfg))
                .UseAuthenticator(new HttpBasicAuthenticator(cfg.OAuthClientId, cfg.OAuthClientSecret));
            var request = new RestRequest()
                .AddParameter("grant_type", "authorization_code")
                .AddParameter("code", code)
                .AddParameter("redirect_url", RedirectUrl);
            return await client.PostAsync<TokenResponse>(request);
        }
    }
}
using System;
using System.Net;
using EnphaseOpenAPI.Monitoring.Client;
using EnphaseOpenAPI.Monitoring.Model;
using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;

namespace EnphaseOpenAPI.Monitoring.Api
{
    public partial class DeviceLevelProductionMonitoringApi
    {
        /// <summary>
        /// Attach an exception factory that deserializes error models.
        /// </summary>
        public void FixExceptions()
        {
            _exceptionFactory = Exceptions.Factory;
        }
    }

    public partial class SiteLevelConsumptionMonitoringApi
    {
        /// <summary>
        /// Attach an exception factory that deserializes error models.
        /// </summary>
        public void FixExceptions()
        {
            _exceptionFactory = Exceptions.Factory;
        }
    }

    public partial class SiteLevelProductionMonitoringApi
    {
        /// <summary>
        /// Attach an exception factory that deserializes error models.
        /// </summary>
        public void FixExceptions()
        {
            _exceptionFactory = Exceptions.Factory;
        }
    }

    public partial class StreamingApi
    {
        /// <summary>
        /// Attach an exception factory that deserializes error models.
        /// </summary>
        public void FixExceptions()
        {
            _exceptionFactory = Exceptions.Factory;
        }
    }

    public partial class SystemConfigurationsApi
    {
        /// <summary>
        /// Attach an exception factory that deserializes error models.
        /// </summary>
        public void FixExceptions()
        {
            _exceptionFactory = Exceptions.Factory;
        }
    }

    public partial class SystemDetailsApi
    {
        /// <summary>
        /// Attach an exception factory that deserializes error models.
        /// </summary>
        public void FixExceptions()
        {
            _exceptionFactory = Exceptions.Factory;
        }
    }

    internal static class Exceptions
    {
        internal static Exception Factory(string methodName, IApiResponse response)
        {
            object content;
            string message;
            var settings = new JsonSerializerSettings
            {
                ConstructorHandling = ConstructorHandling.AllowNonPublicDefaultConstructor,
                ContractResolver = new DefaultContractResolver { NamingStrategy = new CamelCaseNamingStrategy() }
            };

            if (methodName == nameof(StreamingApi.StreamSystemLiveData))
            {
                var err = JsonConvert.DeserializeObject<StreamSystemLiveDataError>(response.RawContent, settings);
                content = err;
                message = err.Error.Message;
            }
            else if (response.StatusCode >= HttpStatusCode.InternalServerError)
            {
                if (response.StatusCode == HttpStatusCode.NotImplemented)
                {
                    var notImplementedError = JsonConvert.DeserializeObject<NotImplementedError>(response.RawContent, settings);
                    content = notImplementedError;
                    message = notImplementedError.Message;
                }
                else
                {
                    var internalServerError = JsonConvert.DeserializeObject<InternalServerError>(response.RawContent, settings);
                    content = internalServerError;
                    message = internalServerError.Reason;
                }
            }
            else if (response.StatusCode >= HttpStatusCode.BadRequest)
            {
                switch (response.StatusCode)
                {
                    case HttpStatusCode.MethodNotAllowed:
                        var methodNotAllowedError = JsonConvert.DeserializeObject<MethodNotAllowedError>(response.RawContent, settings);
                        content = methodNotAllowedError;
                        message = methodNotAllowedError.Reason;
                        break;
                    case (HttpStatusCode)429:
                        var tooManyRequestsError = JsonConvert.DeserializeObject<TooManyRequestsError>(response.RawContent, settings);
                        content = tooManyRequestsError;
                        message = tooManyRequestsError.Message;
                        break;
                    default:
                        var clientError = JsonConvert.DeserializeObject<ClientError>(response.RawContent, settings);
                        content = clientError;
                        message = clientError.Message;
                        break;
                }
            }
            else if (!string.IsNullOrEmpty(response.ErrorText))
            {
                throw new ApiException(0, response.ErrorText);
            }
            else
            {
                return null;
            }

            return new ApiException((int)response.StatusCode, $"Error calling {methodName}: {message}", content, response.Headers);
        }
    }
}
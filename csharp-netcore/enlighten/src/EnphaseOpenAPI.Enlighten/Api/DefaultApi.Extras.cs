using System.Net;
using EnphaseOpenAPI.Enlighten.Client;
using EnphaseOpenAPI.Enlighten.Model;
using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;

namespace EnphaseOpenAPI.Enlighten.Api
{
    public partial class DefaultApi
    {
        /// <summary>
        /// Attach an exception factory that deserializes error models.
        /// </summary>
        public void FixExceptions()
        {
            _exceptionFactory = (methodName, response) =>
            {
                object content;
                var message = "unknown";
                var settings = new JsonSerializerSettings
                {
                    ConstructorHandling = ConstructorHandling.AllowNonPublicDefaultConstructor,
                    ContractResolver = new DefaultContractResolver {NamingStrategy = new CamelCaseNamingStrategy()}
                };
                if (response.StatusCode >= HttpStatusCode.InternalServerError)
                {
                    var serverError = JsonConvert.DeserializeObject<ServerError>(response.RawContent, settings);
                    content = serverError;
                    if (serverError != null && serverError.ErrorMessages.Count > 0)
                    {
                        message = serverError.ErrorMessages[0];
                    }
                }
                else if (response.StatusCode >= HttpStatusCode.BadRequest)
                {
                    switch (response.StatusCode)
                    {
                        case HttpStatusCode.NotFound:
                            var notFoundError = JsonConvert.DeserializeObject<NotFoundError>(response.RawContent, settings);
                            content = notFoundError;
                            if (notFoundError != null && notFoundError.ErrorMessages.Count > 0)
                            {
                                message = notFoundError.ErrorMessages[0];
                            }

                            break;
                        case HttpStatusCode.Conflict:
                            var conflictError = JsonConvert.DeserializeObject<ConflictError>(response.RawContent, settings);
                            content = conflictError;
                            if (conflictError != null && conflictError.Message.Count > 0)
                            {
                                message = conflictError.Message[0];
                            }

                            break;
                        case (HttpStatusCode) 422:
                            var unprocessableEntityError = JsonConvert.DeserializeObject<UnprocessableEntityError>(response.RawContent, settings);
                            content = unprocessableEntityError;
                            if (unprocessableEntityError != null)
                            {
                                if (!string.IsNullOrEmpty(unprocessableEntityError.Message))
                                {
                                    message = unprocessableEntityError.Message;
                                }
                                else if (!string.IsNullOrEmpty(unprocessableEntityError.Reason))
                                {
                                    message = unprocessableEntityError.Reason;
                                }
                                else if (unprocessableEntityError.ErrorMessages.Count > 0)
                                {
                                    message = unprocessableEntityError.ErrorMessages[0];
                                }
                            }

                            break;
                        default:
                            var clientError = JsonConvert.DeserializeObject<ClientError>(response.RawContent, settings);
                            content = clientError;
                            if (clientError != null && clientError.Message.Count > 0)
                            {
                                message = clientError.Message[0];
                            }

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

                return new ApiException((int) response.StatusCode, $"Error calling {methodName}: {message}", content, response.Headers);
            };
        }
    }
}
/*
 * The Enphase Commissioning API
 *
 * Commissioning API can be used to create and update activations on a site, manage companies and users, update Tariff, etc.
 *
 * The version of the OpenAPI document: 4.0
 * Generated by: https://github.com/openapitools/openapi-generator.git
 */


using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Linq;
using System.Net;
using System.Net.Mime;
using EnphaseOpenAPI.Commissioning.Client;
using EnphaseOpenAPI.Commissioning.Client.Auth;
using EnphaseOpenAPI.Commissioning.Model;

namespace EnphaseOpenAPI.Commissioning.Api
{

    /// <summary>
    /// Represents a collection of functions to interact with the API endpoints
    /// </summary>
    public interface ITariffApiSync : IApiAccessor
    {
        #region Synchronous Operations
        /// <summary>
        /// Get tariff for a system
        /// </summary>
        /// <remarks>
        /// Get tariff for a system.
        /// </remarks>
        /// <exception cref="EnphaseOpenAPI.Commissioning.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="systemId">Unique numeric ID of the system.</param>
        /// <param name="operationIndex">Index associated with the operation.</param>
        /// <returns>TariffSettings</returns>
        TariffSettings GetSystemTariffSettings(int systemId, int operationIndex = 0);

        /// <summary>
        /// Get tariff for a system
        /// </summary>
        /// <remarks>
        /// Get tariff for a system.
        /// </remarks>
        /// <exception cref="EnphaseOpenAPI.Commissioning.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="systemId">Unique numeric ID of the system.</param>
        /// <param name="operationIndex">Index associated with the operation.</param>
        /// <returns>ApiResponse of TariffSettings</returns>
        ApiResponse<TariffSettings> GetSystemTariffSettingsWithHttpInfo(int systemId, int operationIndex = 0);
        /// <summary>
        /// Update tariff for a system
        /// </summary>
        /// <exception cref="EnphaseOpenAPI.Commissioning.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="systemId">Unique numeric ID of the system.</param>
        /// <param name="_params"> (optional)</param>
        /// <param name="operationIndex">Index associated with the operation.</param>
        /// <returns>UpdateSystemTariffSettingsResponse</returns>
        UpdateSystemTariffSettingsResponse UpdateSystemTariffSettings(int systemId, TariffSettings? _params = default(TariffSettings?), int operationIndex = 0);

        /// <summary>
        /// Update tariff for a system
        /// </summary>
        /// <remarks>
        /// 
        /// </remarks>
        /// <exception cref="EnphaseOpenAPI.Commissioning.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="systemId">Unique numeric ID of the system.</param>
        /// <param name="_params"> (optional)</param>
        /// <param name="operationIndex">Index associated with the operation.</param>
        /// <returns>ApiResponse of UpdateSystemTariffSettingsResponse</returns>
        ApiResponse<UpdateSystemTariffSettingsResponse> UpdateSystemTariffSettingsWithHttpInfo(int systemId, TariffSettings? _params = default(TariffSettings?), int operationIndex = 0);
        #endregion Synchronous Operations
    }

    /// <summary>
    /// Represents a collection of functions to interact with the API endpoints
    /// </summary>
    public interface ITariffApiAsync : IApiAccessor
    {
        #region Asynchronous Operations
        /// <summary>
        /// Get tariff for a system
        /// </summary>
        /// <remarks>
        /// Get tariff for a system.
        /// </remarks>
        /// <exception cref="EnphaseOpenAPI.Commissioning.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="systemId">Unique numeric ID of the system.</param>
        /// <param name="operationIndex">Index associated with the operation.</param>
        /// <param name="cancellationToken">Cancellation Token to cancel the request.</param>
        /// <returns>Task of TariffSettings</returns>
        System.Threading.Tasks.Task<TariffSettings> GetSystemTariffSettingsAsync(int systemId, int operationIndex = 0, System.Threading.CancellationToken cancellationToken = default(System.Threading.CancellationToken));

        /// <summary>
        /// Get tariff for a system
        /// </summary>
        /// <remarks>
        /// Get tariff for a system.
        /// </remarks>
        /// <exception cref="EnphaseOpenAPI.Commissioning.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="systemId">Unique numeric ID of the system.</param>
        /// <param name="operationIndex">Index associated with the operation.</param>
        /// <param name="cancellationToken">Cancellation Token to cancel the request.</param>
        /// <returns>Task of ApiResponse (TariffSettings)</returns>
        System.Threading.Tasks.Task<ApiResponse<TariffSettings>> GetSystemTariffSettingsWithHttpInfoAsync(int systemId, int operationIndex = 0, System.Threading.CancellationToken cancellationToken = default(System.Threading.CancellationToken));
        /// <summary>
        /// Update tariff for a system
        /// </summary>
        /// <remarks>
        /// 
        /// </remarks>
        /// <exception cref="EnphaseOpenAPI.Commissioning.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="systemId">Unique numeric ID of the system.</param>
        /// <param name="_params"> (optional)</param>
        /// <param name="operationIndex">Index associated with the operation.</param>
        /// <param name="cancellationToken">Cancellation Token to cancel the request.</param>
        /// <returns>Task of UpdateSystemTariffSettingsResponse</returns>
        System.Threading.Tasks.Task<UpdateSystemTariffSettingsResponse> UpdateSystemTariffSettingsAsync(int systemId, TariffSettings? _params = default(TariffSettings?), int operationIndex = 0, System.Threading.CancellationToken cancellationToken = default(System.Threading.CancellationToken));

        /// <summary>
        /// Update tariff for a system
        /// </summary>
        /// <remarks>
        /// 
        /// </remarks>
        /// <exception cref="EnphaseOpenAPI.Commissioning.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="systemId">Unique numeric ID of the system.</param>
        /// <param name="_params"> (optional)</param>
        /// <param name="operationIndex">Index associated with the operation.</param>
        /// <param name="cancellationToken">Cancellation Token to cancel the request.</param>
        /// <returns>Task of ApiResponse (UpdateSystemTariffSettingsResponse)</returns>
        System.Threading.Tasks.Task<ApiResponse<UpdateSystemTariffSettingsResponse>> UpdateSystemTariffSettingsWithHttpInfoAsync(int systemId, TariffSettings? _params = default(TariffSettings?), int operationIndex = 0, System.Threading.CancellationToken cancellationToken = default(System.Threading.CancellationToken));
        #endregion Asynchronous Operations
    }

    /// <summary>
    /// Represents a collection of functions to interact with the API endpoints
    /// </summary>
    public interface ITariffApi : ITariffApiSync, ITariffApiAsync
    {

    }

    /// <summary>
    /// Represents a collection of functions to interact with the API endpoints
    /// </summary>
    public partial class TariffApi : ITariffApi
    {
        private EnphaseOpenAPI.Commissioning.Client.ExceptionFactory _exceptionFactory = (name, response) => null;

        /// <summary>
        /// Initializes a new instance of the <see cref="TariffApi"/> class.
        /// </summary>
        /// <returns></returns>
        public TariffApi() : this((string)null)
        {
        }

        /// <summary>
        /// Initializes a new instance of the <see cref="TariffApi"/> class.
        /// </summary>
        /// <returns></returns>
        public TariffApi(string basePath)
        {
            this.Configuration = EnphaseOpenAPI.Commissioning.Client.Configuration.MergeConfigurations(
                EnphaseOpenAPI.Commissioning.Client.GlobalConfiguration.Instance,
                new EnphaseOpenAPI.Commissioning.Client.Configuration { BasePath = basePath }
            );
            this.Client = new EnphaseOpenAPI.Commissioning.Client.ApiClient(this.Configuration.BasePath);
            this.AsynchronousClient = new EnphaseOpenAPI.Commissioning.Client.ApiClient(this.Configuration.BasePath);
            this.ExceptionFactory = EnphaseOpenAPI.Commissioning.Client.Configuration.DefaultExceptionFactory;
        }

        /// <summary>
        /// Initializes a new instance of the <see cref="TariffApi"/> class
        /// using Configuration object
        /// </summary>
        /// <param name="configuration">An instance of Configuration</param>
        /// <returns></returns>
        public TariffApi(EnphaseOpenAPI.Commissioning.Client.Configuration configuration)
        {
            if (configuration == null) throw new ArgumentNullException("configuration");

            this.Configuration = EnphaseOpenAPI.Commissioning.Client.Configuration.MergeConfigurations(
                EnphaseOpenAPI.Commissioning.Client.GlobalConfiguration.Instance,
                configuration
            );
            this.Client = new EnphaseOpenAPI.Commissioning.Client.ApiClient(this.Configuration.BasePath);
            this.AsynchronousClient = new EnphaseOpenAPI.Commissioning.Client.ApiClient(this.Configuration.BasePath);
            ExceptionFactory = EnphaseOpenAPI.Commissioning.Client.Configuration.DefaultExceptionFactory;
        }

        /// <summary>
        /// Initializes a new instance of the <see cref="TariffApi"/> class
        /// using a Configuration object and client instance.
        /// </summary>
        /// <param name="client">The client interface for synchronous API access.</param>
        /// <param name="asyncClient">The client interface for asynchronous API access.</param>
        /// <param name="configuration">The configuration object.</param>
        public TariffApi(EnphaseOpenAPI.Commissioning.Client.ISynchronousClient client, EnphaseOpenAPI.Commissioning.Client.IAsynchronousClient asyncClient, EnphaseOpenAPI.Commissioning.Client.IReadableConfiguration configuration)
        {
            if (client == null) throw new ArgumentNullException("client");
            if (asyncClient == null) throw new ArgumentNullException("asyncClient");
            if (configuration == null) throw new ArgumentNullException("configuration");

            this.Client = client;
            this.AsynchronousClient = asyncClient;
            this.Configuration = configuration;
            this.ExceptionFactory = EnphaseOpenAPI.Commissioning.Client.Configuration.DefaultExceptionFactory;
        }

        /// <summary>
        /// The client for accessing this underlying API asynchronously.
        /// </summary>
        public EnphaseOpenAPI.Commissioning.Client.IAsynchronousClient AsynchronousClient { get; set; }

        /// <summary>
        /// The client for accessing this underlying API synchronously.
        /// </summary>
        public EnphaseOpenAPI.Commissioning.Client.ISynchronousClient Client { get; set; }

        /// <summary>
        /// Gets the base path of the API client.
        /// </summary>
        /// <value>The base path</value>
        public string GetBasePath()
        {
            return this.Configuration.BasePath;
        }

        /// <summary>
        /// Gets or sets the configuration object
        /// </summary>
        /// <value>An instance of the Configuration</value>
        public EnphaseOpenAPI.Commissioning.Client.IReadableConfiguration Configuration { get; set; }

        /// <summary>
        /// Provides a factory method hook for the creation of exceptions.
        /// </summary>
        public EnphaseOpenAPI.Commissioning.Client.ExceptionFactory ExceptionFactory
        {
            get
            {
                if (_exceptionFactory != null && _exceptionFactory.GetInvocationList().Length > 1)
                {
                    throw new InvalidOperationException("Multicast delegate for ExceptionFactory is unsupported.");
                }
                return _exceptionFactory;
            }
            set { _exceptionFactory = value; }
        }

        /// <summary>
        /// Get tariff for a system Get tariff for a system.
        /// </summary>
        /// <exception cref="EnphaseOpenAPI.Commissioning.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="systemId">Unique numeric ID of the system.</param>
        /// <param name="operationIndex">Index associated with the operation.</param>
        /// <returns>TariffSettings</returns>
        public TariffSettings GetSystemTariffSettings(int systemId, int operationIndex = 0)
        {
            EnphaseOpenAPI.Commissioning.Client.ApiResponse<TariffSettings> localVarResponse = GetSystemTariffSettingsWithHttpInfo(systemId);
            return localVarResponse.Data;
        }

        /// <summary>
        /// Get tariff for a system Get tariff for a system.
        /// </summary>
        /// <exception cref="EnphaseOpenAPI.Commissioning.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="systemId">Unique numeric ID of the system.</param>
        /// <param name="operationIndex">Index associated with the operation.</param>
        /// <returns>ApiResponse of TariffSettings</returns>
        public EnphaseOpenAPI.Commissioning.Client.ApiResponse<TariffSettings> GetSystemTariffSettingsWithHttpInfo(int systemId, int operationIndex = 0)
        {
            EnphaseOpenAPI.Commissioning.Client.RequestOptions localVarRequestOptions = new EnphaseOpenAPI.Commissioning.Client.RequestOptions();

            string[] _contentTypes = new string[] {
            };

            // to determine the Accept header
            string[] _accepts = new string[] {
                "application/json"
            };

            var localVarContentType = EnphaseOpenAPI.Commissioning.Client.ClientUtils.SelectHeaderContentType(_contentTypes);
            if (localVarContentType != null)
            {
                localVarRequestOptions.HeaderParameters.Add("Content-Type", localVarContentType);
            }

            var localVarAccept = EnphaseOpenAPI.Commissioning.Client.ClientUtils.SelectHeaderAccept(_accepts);
            if (localVarAccept != null)
            {
                localVarRequestOptions.HeaderParameters.Add("Accept", localVarAccept);
            }

            localVarRequestOptions.PathParameters.Add("system_id", EnphaseOpenAPI.Commissioning.Client.ClientUtils.ParameterToString(systemId)); // path parameter

            localVarRequestOptions.Operation = "TariffApi.GetSystemTariffSettings";
            localVarRequestOptions.OperationIndex = operationIndex;

            // authentication (OAuth2) required
            // oauth required
            if (!localVarRequestOptions.HeaderParameters.ContainsKey("Authorization"))
            {
                if (!string.IsNullOrEmpty(this.Configuration.AccessToken))
                {
                    localVarRequestOptions.HeaderParameters.Add("Authorization", "Bearer " + this.Configuration.AccessToken);
                }
                else if (!string.IsNullOrEmpty(this.Configuration.OAuthTokenUrl) &&
                         !string.IsNullOrEmpty(this.Configuration.OAuthClientId) &&
                         !string.IsNullOrEmpty(this.Configuration.OAuthClientSecret) &&
                         this.Configuration.OAuthFlow != null)
                {
                    localVarRequestOptions.OAuth = true;
                }
            }
            // authentication (ApiKey) required
            if (!string.IsNullOrEmpty(this.Configuration.GetApiKeyWithPrefix("key")))
            {
                localVarRequestOptions.QueryParameters.Add(EnphaseOpenAPI.Commissioning.Client.ClientUtils.ParameterToMultiMap("", "key", this.Configuration.GetApiKeyWithPrefix("key")));
            }

            // make the HTTP request
            var localVarResponse = this.Client.Get<TariffSettings>("/systems/config/{system_id}/tariff", localVarRequestOptions, this.Configuration);
            if (this.ExceptionFactory != null)
            {
                Exception _exception = this.ExceptionFactory("GetSystemTariffSettings", localVarResponse);
                if (_exception != null)
                {
                    throw _exception;
                }
            }

            return localVarResponse;
        }

        /// <summary>
        /// Get tariff for a system Get tariff for a system.
        /// </summary>
        /// <exception cref="EnphaseOpenAPI.Commissioning.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="systemId">Unique numeric ID of the system.</param>
        /// <param name="operationIndex">Index associated with the operation.</param>
        /// <param name="cancellationToken">Cancellation Token to cancel the request.</param>
        /// <returns>Task of TariffSettings</returns>
        public async System.Threading.Tasks.Task<TariffSettings> GetSystemTariffSettingsAsync(int systemId, int operationIndex = 0, System.Threading.CancellationToken cancellationToken = default(System.Threading.CancellationToken))
        {
            EnphaseOpenAPI.Commissioning.Client.ApiResponse<TariffSettings> localVarResponse = await GetSystemTariffSettingsWithHttpInfoAsync(systemId, operationIndex, cancellationToken).ConfigureAwait(false);
            return localVarResponse.Data;
        }

        /// <summary>
        /// Get tariff for a system Get tariff for a system.
        /// </summary>
        /// <exception cref="EnphaseOpenAPI.Commissioning.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="systemId">Unique numeric ID of the system.</param>
        /// <param name="operationIndex">Index associated with the operation.</param>
        /// <param name="cancellationToken">Cancellation Token to cancel the request.</param>
        /// <returns>Task of ApiResponse (TariffSettings)</returns>
        public async System.Threading.Tasks.Task<EnphaseOpenAPI.Commissioning.Client.ApiResponse<TariffSettings>> GetSystemTariffSettingsWithHttpInfoAsync(int systemId, int operationIndex = 0, System.Threading.CancellationToken cancellationToken = default(System.Threading.CancellationToken))
        {

            EnphaseOpenAPI.Commissioning.Client.RequestOptions localVarRequestOptions = new EnphaseOpenAPI.Commissioning.Client.RequestOptions();

            string[] _contentTypes = new string[] {
            };

            // to determine the Accept header
            string[] _accepts = new string[] {
                "application/json"
            };

            var localVarContentType = EnphaseOpenAPI.Commissioning.Client.ClientUtils.SelectHeaderContentType(_contentTypes);
            if (localVarContentType != null)
            {
                localVarRequestOptions.HeaderParameters.Add("Content-Type", localVarContentType);
            }

            var localVarAccept = EnphaseOpenAPI.Commissioning.Client.ClientUtils.SelectHeaderAccept(_accepts);
            if (localVarAccept != null)
            {
                localVarRequestOptions.HeaderParameters.Add("Accept", localVarAccept);
            }

            localVarRequestOptions.PathParameters.Add("system_id", EnphaseOpenAPI.Commissioning.Client.ClientUtils.ParameterToString(systemId)); // path parameter

            localVarRequestOptions.Operation = "TariffApi.GetSystemTariffSettings";
            localVarRequestOptions.OperationIndex = operationIndex;

            // authentication (OAuth2) required
            // oauth required
            if (!localVarRequestOptions.HeaderParameters.ContainsKey("Authorization"))
            {
                if (!string.IsNullOrEmpty(this.Configuration.AccessToken))
                {
                    localVarRequestOptions.HeaderParameters.Add("Authorization", "Bearer " + this.Configuration.AccessToken);
                }
                else if (!string.IsNullOrEmpty(this.Configuration.OAuthTokenUrl) &&
                         !string.IsNullOrEmpty(this.Configuration.OAuthClientId) &&
                         !string.IsNullOrEmpty(this.Configuration.OAuthClientSecret) &&
                         this.Configuration.OAuthFlow != null)
                {
                    localVarRequestOptions.OAuth = true;
                }
            }
            // authentication (ApiKey) required
            if (!string.IsNullOrEmpty(this.Configuration.GetApiKeyWithPrefix("key")))
            {
                localVarRequestOptions.QueryParameters.Add(EnphaseOpenAPI.Commissioning.Client.ClientUtils.ParameterToMultiMap("", "key", this.Configuration.GetApiKeyWithPrefix("key")));
            }

            // make the HTTP request
            var localVarResponse = await this.AsynchronousClient.GetAsync<TariffSettings>("/systems/config/{system_id}/tariff", localVarRequestOptions, this.Configuration, cancellationToken).ConfigureAwait(false);

            if (this.ExceptionFactory != null)
            {
                Exception _exception = this.ExceptionFactory("GetSystemTariffSettings", localVarResponse);
                if (_exception != null)
                {
                    throw _exception;
                }
            }

            return localVarResponse;
        }

        /// <summary>
        /// Update tariff for a system 
        /// </summary>
        /// <exception cref="EnphaseOpenAPI.Commissioning.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="systemId">Unique numeric ID of the system.</param>
        /// <param name="_params"> (optional)</param>
        /// <param name="operationIndex">Index associated with the operation.</param>
        /// <returns>UpdateSystemTariffSettingsResponse</returns>
        public UpdateSystemTariffSettingsResponse UpdateSystemTariffSettings(int systemId, TariffSettings? _params = default(TariffSettings?), int operationIndex = 0)
        {
            EnphaseOpenAPI.Commissioning.Client.ApiResponse<UpdateSystemTariffSettingsResponse> localVarResponse = UpdateSystemTariffSettingsWithHttpInfo(systemId, _params);
            return localVarResponse.Data;
        }

        /// <summary>
        /// Update tariff for a system 
        /// </summary>
        /// <exception cref="EnphaseOpenAPI.Commissioning.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="systemId">Unique numeric ID of the system.</param>
        /// <param name="_params"> (optional)</param>
        /// <param name="operationIndex">Index associated with the operation.</param>
        /// <returns>ApiResponse of UpdateSystemTariffSettingsResponse</returns>
        public EnphaseOpenAPI.Commissioning.Client.ApiResponse<UpdateSystemTariffSettingsResponse> UpdateSystemTariffSettingsWithHttpInfo(int systemId, TariffSettings? _params = default(TariffSettings?), int operationIndex = 0)
        {
            EnphaseOpenAPI.Commissioning.Client.RequestOptions localVarRequestOptions = new EnphaseOpenAPI.Commissioning.Client.RequestOptions();

            string[] _contentTypes = new string[] {
                "application/text"
            };

            // to determine the Accept header
            string[] _accepts = new string[] {
                "application/json"
            };

            var localVarContentType = EnphaseOpenAPI.Commissioning.Client.ClientUtils.SelectHeaderContentType(_contentTypes);
            if (localVarContentType != null)
            {
                localVarRequestOptions.HeaderParameters.Add("Content-Type", localVarContentType);
            }

            var localVarAccept = EnphaseOpenAPI.Commissioning.Client.ClientUtils.SelectHeaderAccept(_accepts);
            if (localVarAccept != null)
            {
                localVarRequestOptions.HeaderParameters.Add("Accept", localVarAccept);
            }

            localVarRequestOptions.PathParameters.Add("system_id", EnphaseOpenAPI.Commissioning.Client.ClientUtils.ParameterToString(systemId)); // path parameter
            localVarRequestOptions.Data = _params;

            localVarRequestOptions.Operation = "TariffApi.UpdateSystemTariffSettings";
            localVarRequestOptions.OperationIndex = operationIndex;

            // authentication (OAuth2) required
            // oauth required
            if (!localVarRequestOptions.HeaderParameters.ContainsKey("Authorization"))
            {
                if (!string.IsNullOrEmpty(this.Configuration.AccessToken))
                {
                    localVarRequestOptions.HeaderParameters.Add("Authorization", "Bearer " + this.Configuration.AccessToken);
                }
                else if (!string.IsNullOrEmpty(this.Configuration.OAuthTokenUrl) &&
                         !string.IsNullOrEmpty(this.Configuration.OAuthClientId) &&
                         !string.IsNullOrEmpty(this.Configuration.OAuthClientSecret) &&
                         this.Configuration.OAuthFlow != null)
                {
                    localVarRequestOptions.OAuth = true;
                }
            }
            // authentication (ApiKey) required
            if (!string.IsNullOrEmpty(this.Configuration.GetApiKeyWithPrefix("key")))
            {
                localVarRequestOptions.QueryParameters.Add(EnphaseOpenAPI.Commissioning.Client.ClientUtils.ParameterToMultiMap("", "key", this.Configuration.GetApiKeyWithPrefix("key")));
            }

            // make the HTTP request
            var localVarResponse = this.Client.Put<UpdateSystemTariffSettingsResponse>("/systems/config/{system_id}/tariff", localVarRequestOptions, this.Configuration);
            if (this.ExceptionFactory != null)
            {
                Exception _exception = this.ExceptionFactory("UpdateSystemTariffSettings", localVarResponse);
                if (_exception != null)
                {
                    throw _exception;
                }
            }

            return localVarResponse;
        }

        /// <summary>
        /// Update tariff for a system 
        /// </summary>
        /// <exception cref="EnphaseOpenAPI.Commissioning.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="systemId">Unique numeric ID of the system.</param>
        /// <param name="_params"> (optional)</param>
        /// <param name="operationIndex">Index associated with the operation.</param>
        /// <param name="cancellationToken">Cancellation Token to cancel the request.</param>
        /// <returns>Task of UpdateSystemTariffSettingsResponse</returns>
        public async System.Threading.Tasks.Task<UpdateSystemTariffSettingsResponse> UpdateSystemTariffSettingsAsync(int systemId, TariffSettings? _params = default(TariffSettings?), int operationIndex = 0, System.Threading.CancellationToken cancellationToken = default(System.Threading.CancellationToken))
        {
            EnphaseOpenAPI.Commissioning.Client.ApiResponse<UpdateSystemTariffSettingsResponse> localVarResponse = await UpdateSystemTariffSettingsWithHttpInfoAsync(systemId, _params, operationIndex, cancellationToken).ConfigureAwait(false);
            return localVarResponse.Data;
        }

        /// <summary>
        /// Update tariff for a system 
        /// </summary>
        /// <exception cref="EnphaseOpenAPI.Commissioning.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="systemId">Unique numeric ID of the system.</param>
        /// <param name="_params"> (optional)</param>
        /// <param name="operationIndex">Index associated with the operation.</param>
        /// <param name="cancellationToken">Cancellation Token to cancel the request.</param>
        /// <returns>Task of ApiResponse (UpdateSystemTariffSettingsResponse)</returns>
        public async System.Threading.Tasks.Task<EnphaseOpenAPI.Commissioning.Client.ApiResponse<UpdateSystemTariffSettingsResponse>> UpdateSystemTariffSettingsWithHttpInfoAsync(int systemId, TariffSettings? _params = default(TariffSettings?), int operationIndex = 0, System.Threading.CancellationToken cancellationToken = default(System.Threading.CancellationToken))
        {

            EnphaseOpenAPI.Commissioning.Client.RequestOptions localVarRequestOptions = new EnphaseOpenAPI.Commissioning.Client.RequestOptions();

            string[] _contentTypes = new string[] {
                "application/text"
            };

            // to determine the Accept header
            string[] _accepts = new string[] {
                "application/json"
            };

            var localVarContentType = EnphaseOpenAPI.Commissioning.Client.ClientUtils.SelectHeaderContentType(_contentTypes);
            if (localVarContentType != null)
            {
                localVarRequestOptions.HeaderParameters.Add("Content-Type", localVarContentType);
            }

            var localVarAccept = EnphaseOpenAPI.Commissioning.Client.ClientUtils.SelectHeaderAccept(_accepts);
            if (localVarAccept != null)
            {
                localVarRequestOptions.HeaderParameters.Add("Accept", localVarAccept);
            }

            localVarRequestOptions.PathParameters.Add("system_id", EnphaseOpenAPI.Commissioning.Client.ClientUtils.ParameterToString(systemId)); // path parameter
            localVarRequestOptions.Data = _params;

            localVarRequestOptions.Operation = "TariffApi.UpdateSystemTariffSettings";
            localVarRequestOptions.OperationIndex = operationIndex;

            // authentication (OAuth2) required
            // oauth required
            if (!localVarRequestOptions.HeaderParameters.ContainsKey("Authorization"))
            {
                if (!string.IsNullOrEmpty(this.Configuration.AccessToken))
                {
                    localVarRequestOptions.HeaderParameters.Add("Authorization", "Bearer " + this.Configuration.AccessToken);
                }
                else if (!string.IsNullOrEmpty(this.Configuration.OAuthTokenUrl) &&
                         !string.IsNullOrEmpty(this.Configuration.OAuthClientId) &&
                         !string.IsNullOrEmpty(this.Configuration.OAuthClientSecret) &&
                         this.Configuration.OAuthFlow != null)
                {
                    localVarRequestOptions.OAuth = true;
                }
            }
            // authentication (ApiKey) required
            if (!string.IsNullOrEmpty(this.Configuration.GetApiKeyWithPrefix("key")))
            {
                localVarRequestOptions.QueryParameters.Add(EnphaseOpenAPI.Commissioning.Client.ClientUtils.ParameterToMultiMap("", "key", this.Configuration.GetApiKeyWithPrefix("key")));
            }

            // make the HTTP request
            var localVarResponse = await this.AsynchronousClient.PutAsync<UpdateSystemTariffSettingsResponse>("/systems/config/{system_id}/tariff", localVarRequestOptions, this.Configuration, cancellationToken).ConfigureAwait(false);

            if (this.ExceptionFactory != null)
            {
                Exception _exception = this.ExceptionFactory("UpdateSystemTariffSettings", localVarResponse);
                if (_exception != null)
                {
                    throw _exception;
                }
            }

            return localVarResponse;
        }

    }
}

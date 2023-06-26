# The Enphase Commissioning API Bash client

## Overview

This is a Bash client script for accessing The Enphase Commissioning API service.

The script uses cURL underneath for making all REST calls.

## Usage

```shell
# Make sure the script has executable rights
$ chmod u+x 

# Print the list of operations available on the service
$ ./ -h

# Print the service description
$ ./ --about

# Print detailed information about specific operation
$ ./ <operationId> -h

# Make GET request
./ --host http://<hostname>:<port> --accept xml <operationId> <queryParam1>=<value1> <header_key1>:<header_value2>

# Make GET request using arbitrary curl options (must be passed before <operationId>) to an SSL service using username:password
 -k -sS --tlsv1.2 --host https://<hostname> -u <user>:<password> --accept xml <operationId> <queryParam1>=<value1> <header_key1>:<header_value2>

# Make POST request
$ echo '<body_content>' |  --host <hostname> --content-type json <operationId> -

# Make POST request with simple JSON content, e.g.:
# {
#   "key1": "value1",
#   "key2": "value2",
#   "key3": 23
# }
$ echo '<body_content>' |  --host <hostname> --content-type json <operationId> key1==value1 key2=value2 key3:=23 -

# Make POST request with form data
$  --host <hostname> <operationId> key1:=value1 key2:=value2 key3:=23

# Preview the cURL command without actually executing it
$  --host http://<hostname>:<port> --dry-run <operationid>

```

## Docker image

You can easily create a Docker image containing a preconfigured environment
for using the REST Bash client including working autocompletion and short
welcome message with basic instructions, using the generated Dockerfile:

```shell
docker build -t my-rest-client .
docker run -it my-rest-client
```

By default you will be logged into a Zsh environment which has much more
advanced auto completion, but you can switch to Bash, where basic autocompletion
is also available.

## Shell completion

### Bash

The generated bash-completion script can be either directly loaded to the current Bash session using:

```shell
source .bash-completion
```

Alternatively, the script can be copied to the `/etc/bash-completion.d` (or on OSX with Homebrew to `/usr/local/etc/bash-completion.d`):

```shell
sudo cp .bash-completion /etc/bash-completion.d/
```

#### OS X

On OSX you might need to install bash-completion using Homebrew:

```shell
brew install bash-completion
```

and add the following to the `~/.bashrc`:

```shell
if [ -f $(brew --prefix)/etc/bash_completion ]; then
  . $(brew --prefix)/etc/bash_completion
fi
```

### Zsh

In Zsh, the generated `_` Zsh completion file must be copied to one of the folders under `$FPATH` variable.

## Documentation for API Endpoints

All URIs are relative to */api/v4*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*ActivationsApi* | [**createPartnerActivation**](docs/ActivationsApi.md#createpartneractivation) | **POST** /partner/activations | Create new activation
*ActivationsApi* | [**deleteActivation**](docs/ActivationsApi.md#deleteactivation) | **DELETE** /activations/{id} | Delete an activation by ID
*ActivationsApi* | [**getActivationOpsProductionMode**](docs/ActivationsApi.md#getactivationopsproductionmode) | **GET** /activations/{activation_id}/ops/production_mode | Get production mode
*ActivationsApi* | [**getPartnerActivation**](docs/ActivationsApi.md#getpartneractivation) | **GET** /partner/activations/{id} | Retrieves an Activation by ID
*ActivationsApi* | [**getPartnerActivations**](docs/ActivationsApi.md#getpartneractivations) | **GET** /partner/activations | List of Activations
*ActivationsApi* | [**grantActivationUserAccess**](docs/ActivationsApi.md#grantactivationuseraccess) | **POST** /activations/{activation_id}/users/{user_id} | Grant Access
*ActivationsApi* | [**revokeActivationUserAccess**](docs/ActivationsApi.md#revokeactivationuseraccess) | **DELETE** /activations/{activation_id}/users/{user_id} | Revoke Access
*ActivationsApi* | [**setActivationOpsProductionMode**](docs/ActivationsApi.md#setactivationopsproductionmode) | **POST** /activations/{activation_id}/ops/production_mode | Set production mode
*ActivationsApi* | [**updatePartnerActivation**](docs/ActivationsApi.md#updatepartneractivation) | **PUT** /partner/activations/{id} | Update an activation.
*ArraysApi* | [**deleteSystemArray**](docs/ArraysApi.md#deletesystemarray) | **DELETE** /systems/{system_id}/arrays/{id} | Delete an array by ID
*ArraysApi* | [**getSystemArray**](docs/ArraysApi.md#getsystemarray) | **GET** /systems/{system_id}/arrays/{id} | Fetch array details by ID
*ArraysApi* | [**getSystemArrays**](docs/ArraysApi.md#getsystemarrays) | **GET** /systems/{system_id}/arrays | Fetch particular system Array details
*ArraysApi* | [**updateSystemArray**](docs/ArraysApi.md#updatesystemarray) | **PUT** /systems/{system_id}/arrays/{id} | Update particular system array details
*ArraysApi* | [**updateSystemArrays**](docs/ArraysApi.md#updatesystemarrays) | **PUT** /systems/{system_id}/arrays | Update all arrays for system
*CompaniesApi* | [**createCompanyUser**](docs/CompaniesApi.md#createcompanyuser) | **POST** /companies/{company_id}/users | Create company user
*CompaniesApi* | [**getCompanyUser**](docs/CompaniesApi.md#getcompanyuser) | **GET** /companies/{company_id}/users/{user_id} | Returns the requested user
*CompaniesApi* | [**getCompanyUsers**](docs/CompaniesApi.md#getcompanyusers) | **GET** /companies/{company_id}/users | Get all users with in a company
*CompaniesApi* | [**getSelfCompanyBranches**](docs/CompaniesApi.md#getselfcompanybranches) | **GET** /companies/self/branches | User&#39;s company and its branches
*CompaniesApi* | [**updateCompanyUser**](docs/CompaniesApi.md#updatecompanyuser) | **PUT** /companies/{company_id}/users/{user_id} | Update company user
*EstimateApi* | [**getActivationEstimate**](docs/EstimateApi.md#getactivationestimate) | **GET** /activations/{activation_id}/estimate | Returns the estimate for this system.
*EstimateApi* | [**updateActivationEstimate**](docs/EstimateApi.md#updateactivationestimate) | **PUT** /activations/{activation_id}/estimate | Update the estimate for this system.
*GridProfilesApi* | [**getGridProfiles**](docs/GridProfilesApi.md#getgridprofiles) | **GET** /grid_profiles | Lists the available profiles
*HomeOwnerApi* | [**createUser**](docs/HomeOwnerApi.md#createuser) | **POST** /users | Create Home owner
*MetersApi* | [**getSystemMeter**](docs/MetersApi.md#getsystemmeter) | **GET** /systems/{system_id}/meters/{serial_number} | Returns the requested meter detail.
*MetersApi* | [**setActivationMeterStatus**](docs/MetersApi.md#setactivationmeterstatus) | **POST** /activations/{activation_id}/meters/{serial_number}/meter_control | Enable or Disable the meters.
*MetersApi* | [**updateSystemMeter**](docs/MetersApi.md#updatesystemmeter) | **PUT** /systems/{system_id}/meters/{serial_number} | Update the operational date of a meter by serial number.
*PvManufacturersApi* | [**getPvManufacturers**](docs/PvManufacturersApi.md#getpvmanufacturers) | **GET** /pv_manufacturers | Returns PV module manufacturers
*PvModelsApi* | [**getPvManufacturerModels**](docs/PvModelsApi.md#getpvmanufacturermodels) | **GET** /pv_manufacturers/{pv_manufacturer_id}/pv_models | Returns PV module manufacturers
*TariffApi* | [**getSystemTariffSettings**](docs/TariffApi.md#getsystemtariffsettings) | **GET** /systems/config/{system_id}/tariff | Get tariff for a system
*TariffApi* | [**updateSystemTariffSettings**](docs/TariffApi.md#updatesystemtariffsettings) | **PUT** /systems/config/{system_id}/tariff | Update tariff for a system
*UsersApi* | [**getActivationUser**](docs/UsersApi.md#getactivationuser) | **GET** /activations/{activation_id}/users/{user_id} | Returns the requested user
*UsersApi* | [**getSelfUser**](docs/UsersApi.md#getselfuser) | **GET** /users/self | Return the current logged in user detail
*UsersApi* | [**getUser**](docs/UsersApi.md#getuser) | **GET** /users/{user_id} | Returns the requested user
*UsersApi* | [**searchUsers**](docs/UsersApi.md#searchusers) | **GET** /users/search | Search user
*UsersApi* | [**updateActivationUser**](docs/UsersApi.md#updateactivationuser) | **PUT** /activations/{activation_id}/users/{user_id} | Update user
*UsersApi* | [**updateUser**](docs/UsersApi.md#updateuser) | **PUT** /users/{user_id} | Update user


## Documentation For Models

 - [Address](docs/Address.md)
 - [Array](docs/Array.md)
 - [ArrayModulesInner](docs/ArrayModulesInner.md)
 - [ArrayParams](docs/ArrayParams.md)
 - [ArrayParamsModulesInner](docs/ArrayParamsModulesInner.md)
 - [Arrays](docs/Arrays.md)
 - [ArraysInventoryDetailsInner](docs/ArraysInventoryDetailsInner.md)
 - [ArraysLayersInner](docs/ArraysLayersInner.md)
 - [Company](docs/Company.md)
 - [CompanyRoleEnum](docs/CompanyRoleEnum.md)
 - [CreateCompanyUserRequest](docs/CreateCompanyUserRequest.md)
 - [CreateUserRequest](docs/CreateUserRequest.md)
 - [DeleteActivationResponse](docs/DeleteActivationResponse.md)
 - [DeleteSystemArrayResponse](docs/DeleteSystemArrayResponse.md)
 - [GetActivationOpsProductionModeResponse](docs/GetActivationOpsProductionModeResponse.md)
 - [GetCompanyUsersResponse](docs/GetCompanyUsersResponse.md)
 - [GetCompanyUsersResponseUsersInner](docs/GetCompanyUsersResponseUsersInner.md)
 - [GetGridProfilesResponse](docs/GetGridProfilesResponse.md)
 - [GetGridProfilesResponseGridProfilesInner](docs/GetGridProfilesResponseGridProfilesInner.md)
 - [GetPartnerActivationsResponse](docs/GetPartnerActivationsResponse.md)
 - [GetPartnerActivationsResponseSystemsInner](docs/GetPartnerActivationsResponseSystemsInner.md)
 - [GetPvManufacturerModelsResponse](docs/GetPvManufacturerModelsResponse.md)
 - [GetPvManufacturerModelsResponsePvManufacturers](docs/GetPvManufacturerModelsResponsePvManufacturers.md)
 - [GetPvManufacturersResponse](docs/GetPvManufacturersResponse.md)
 - [GetSelfCompanyBranchesResponse](docs/GetSelfCompanyBranchesResponse.md)
 - [GetSelfCompanyBranchesResponseBranchesInner](docs/GetSelfCompanyBranchesResponseBranchesInner.md)
 - [GetSystemMeterResponse](docs/GetSystemMeterResponse.md)
 - [GrantActivationUserAccessResponse](docs/GrantActivationUserAccessResponse.md)
 - [RevokeActivationUserAccessResponse](docs/RevokeActivationUserAccessResponse.md)
 - [SearchUsersResponse](docs/SearchUsersResponse.md)
 - [ServerError](docs/ServerError.md)
 - [SetActivationMeterStatusRequest](docs/SetActivationMeterStatusRequest.md)
 - [SetActivationMeterStatusResponse](docs/SetActivationMeterStatusResponse.md)
 - [SetActivationOpsProductionModeRequest](docs/SetActivationOpsProductionModeRequest.md)
 - [SetActivationOpsProductionModeResponse](docs/SetActivationOpsProductionModeResponse.md)
 - [System](docs/System.md)
 - [SystemArrayTypeEnum](docs/SystemArrayTypeEnum.md)
 - [SystemAttachmentTypeEnum](docs/SystemAttachmentTypeEnum.md)
 - [SystemEnchargeInner](docs/SystemEnchargeInner.md)
 - [SystemEnpowerInner](docs/SystemEnpowerInner.md)
 - [SystemEstimate](docs/SystemEstimate.md)
 - [SystemExpandEnum](docs/SystemExpandEnum.md)
 - [SystemHost](docs/SystemHost.md)
 - [SystemHostCompany](docs/SystemHostCompany.md)
 - [SystemInternetConnectionEnum](docs/SystemInternetConnectionEnum.md)
 - [SystemMeterStatusEnum](docs/SystemMeterStatusEnum.md)
 - [SystemOwner](docs/SystemOwner.md)
 - [SystemOwnerCompany](docs/SystemOwnerCompany.md)
 - [SystemParams](docs/SystemParams.md)
 - [SystemParamsAddress](docs/SystemParamsAddress.md)
 - [SystemParamsEnchargeInner](docs/SystemParamsEnchargeInner.md)
 - [SystemParamsEnpowerInner](docs/SystemParamsEnpowerInner.md)
 - [SystemProductionModeEnum](docs/SystemProductionModeEnum.md)
 - [SystemSourceEnum](docs/SystemSourceEnum.md)
 - [SystemStageEnum](docs/SystemStageEnum.md)
 - [SystemTypeEnum](docs/SystemTypeEnum.md)
 - [TariffSeasonsInner](docs/TariffSeasonsInner.md)
 - [TariffSeasonsInnerDaysInner](docs/TariffSeasonsInnerDaysInner.md)
 - [TariffSeasonsInnerDaysInnerPeriodsInner](docs/TariffSeasonsInnerDaysInnerPeriodsInner.md)
 - [TariffSettings](docs/TariffSettings.md)
 - [TariffSettingsTariff](docs/TariffSettingsTariff.md)
 - [TariffSettingsTariffCurrencyType](docs/TariffSettingsTariffCurrencyType.md)
 - [TariffSettingsTariffSingleRate](docs/TariffSettingsTariffSingleRate.md)
 - [TooManyRequestsError](docs/TooManyRequestsError.md)
 - [UnprocessableEntityError](docs/UnprocessableEntityError.md)
 - [UpdateActivationEstimateRequest](docs/UpdateActivationEstimateRequest.md)
 - [UpdateCompanyUserRequest](docs/UpdateCompanyUserRequest.md)
 - [UpdateSystemArraysRequest](docs/UpdateSystemArraysRequest.md)
 - [UpdateSystemMeterResponse](docs/UpdateSystemMeterResponse.md)
 - [UpdateSystemTariffSettingsResponse](docs/UpdateSystemTariffSettingsResponse.md)
 - [UpdateSystemTariffSettingsResponseTask](docs/UpdateSystemTariffSettingsResponseTask.md)
 - [User](docs/User.md)
 - [UserExpandEnum](docs/UserExpandEnum.md)
 - [UserParams](docs/UserParams.md)
 - [UserRoleEnum](docs/UserRoleEnum.md)


## Documentation For Authorization


## OAuth2


- **Type**: OAuth
- **Flow**: accessCode
- **Authorization URL**: https://api.enphaseenergy.com/oauth/authorize
- **Token URL**: https://api.enphaseenergy.com/oauth/token
- **Scopes**: N/A

## ApiKey


- **Type**: API key
- **API key parameter name**: key
- **Location**: URL query string


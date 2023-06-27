# commissioning

Commissioning API can be used to create and update activations on a site, manage companies and users, update Tariff, etc.


## Installation & Usage

### Requirements

PHP 7.4 and later.
Should also work with PHP 8.0.

### Composer

To install the bindings via [Composer](https://getcomposer.org/), add the following to `composer.json`:

```json
{
  "repositories": [
    {
      "type": "vcs",
      "url": "https://github.com/NathanBaulch/EnphaseOpenAPI.git"
    }
  ],
  "require": {
    "NathanBaulch/EnphaseOpenAPI": "*@dev"
  }
}
```

Then run `composer install`

### Manual Installation

Download the files and include `autoload.php`:

```php
<?php
require_once('/path/to/commissioning/vendor/autoload.php');
```

## Getting Started

Please follow the [installation procedure](#installation--usage) and then run the following:

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



// Configure OAuth2 access token for authorization: OAuth2
$config = EnphaseOpenAPI\Commissioning\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');

// Configure API key authorization: ApiKey
$config = EnphaseOpenAPI\Commissioning\Configuration::getDefaultConfiguration()->setApiKey('key', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = EnphaseOpenAPI\Commissioning\Configuration::getDefaultConfiguration()->setApiKeyPrefix('key', 'Bearer');


$apiInstance = new EnphaseOpenAPI\Commissioning\Api\ActivationsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$params = new \EnphaseOpenAPI\Commissioning\Model\SystemParams(); // \EnphaseOpenAPI\Commissioning\Model\SystemParams

try {
    $result = $apiInstance->createPartnerActivation($params);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ActivationsApi->createPartnerActivation: ', $e->getMessage(), PHP_EOL;
}

```

## API Endpoints

All URIs are relative to *https://api.enphaseenergy.com/api/v4*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*ActivationsApi* | [**createPartnerActivation**](docs/Api/ActivationsApi.md#createpartneractivation) | **POST** /partner/activations | Create new activation
*ActivationsApi* | [**deleteActivation**](docs/Api/ActivationsApi.md#deleteactivation) | **DELETE** /partner/activations/{activation_id} | Delete an activation by ID
*ActivationsApi* | [**getActivationOpsProductionMode**](docs/Api/ActivationsApi.md#getactivationopsproductionmode) | **GET** /activations/{activation_id}/ops/production_mode | Get production mode
*ActivationsApi* | [**getPartnerActivation**](docs/Api/ActivationsApi.md#getpartneractivation) | **GET** /partner/activations/{activation_id} | Retrieves an Activation by ID
*ActivationsApi* | [**getPartnerActivations**](docs/Api/ActivationsApi.md#getpartneractivations) | **GET** /partner/activations | List of Activations
*ActivationsApi* | [**grantActivationUserAccess**](docs/Api/ActivationsApi.md#grantactivationuseraccess) | **POST** /activations/{activation_id}/users/{user_id} | Grant Access
*ActivationsApi* | [**revokeActivationUserAccess**](docs/Api/ActivationsApi.md#revokeactivationuseraccess) | **DELETE** /activations/{activation_id}/users/{user_id} | Revoke Access
*ActivationsApi* | [**setActivationOpsProductionMode**](docs/Api/ActivationsApi.md#setactivationopsproductionmode) | **POST** /activations/{activation_id}/ops/production_mode | Set production mode
*ActivationsApi* | [**updatePartnerActivation**](docs/Api/ActivationsApi.md#updatepartneractivation) | **PUT** /partner/activations/{activation_id} | Update an activation.
*ArraysApi* | [**deleteSystemArray**](docs/Api/ArraysApi.md#deletesystemarray) | **DELETE** /partner/systems/{system_id}/arrays/{array_id} | Delete an array by ID
*ArraysApi* | [**getSystemArray**](docs/Api/ArraysApi.md#getsystemarray) | **GET** /partner/systems/{system_id}/arrays/{array_id} | Fetch array details by ID
*ArraysApi* | [**getSystemArrays**](docs/Api/ArraysApi.md#getsystemarrays) | **GET** /partner/systems/{system_id}/arrays | Fetch particular system Array details
*ArraysApi* | [**updateSystemArray**](docs/Api/ArraysApi.md#updatesystemarray) | **PUT** /partner/systems/{system_id}/arrays/{array_id} | Update particular system array details
*ArraysApi* | [**updateSystemArrays**](docs/Api/ArraysApi.md#updatesystemarrays) | **PUT** /partner/systems/{system_id}/arrays | Update all arrays for system
*CompaniesApi* | [**createCompanyUser**](docs/Api/CompaniesApi.md#createcompanyuser) | **POST** /companies/{company_id}/users | Create company user
*CompaniesApi* | [**getCompanyUser**](docs/Api/CompaniesApi.md#getcompanyuser) | **GET** /companies/{company_id}/users/{user_id} | Returns the requested user
*CompaniesApi* | [**getCompanyUsers**](docs/Api/CompaniesApi.md#getcompanyusers) | **GET** /companies/{company_id}/users | Get all users with in a company
*CompaniesApi* | [**getSelfCompanyAuthorizedSubcontractors**](docs/Api/CompaniesApi.md#getselfcompanyauthorizedsubcontractors) | **GET** /companies/self/authorized_subcontractors | User&#39;s company and its authorized subcontractors.
*CompaniesApi* | [**getSelfCompanyBranches**](docs/Api/CompaniesApi.md#getselfcompanybranches) | **GET** /companies/self/branches | User&#39;s company and its branches
*CompaniesApi* | [**updateCompanyUser**](docs/Api/CompaniesApi.md#updatecompanyuser) | **PUT** /companies/{company_id}/users/{user_id} | Update company user
*EstimateApi* | [**getActivationEstimate**](docs/Api/EstimateApi.md#getactivationestimate) | **GET** /activations/{activation_id}/estimate | Returns the estimate for this system.
*EstimateApi* | [**updateActivationEstimate**](docs/Api/EstimateApi.md#updateactivationestimate) | **PUT** /activations/{activation_id}/estimate | Update the estimate for this system.
*GridProfilesApi* | [**getGridProfiles**](docs/Api/GridProfilesApi.md#getgridprofiles) | **GET** /partner/grid_profiles | Lists the available profiles
*HomeOwnerApi* | [**createUser**](docs/Api/HomeOwnerApi.md#createuser) | **POST** /users | Create Home owner
*MetersApi* | [**getSystemMeter**](docs/Api/MetersApi.md#getsystemmeter) | **GET** /systems/{system_id}/meters/{serial_number} | Returns the requested meter detail.
*MetersApi* | [**setActivationMeterStatus**](docs/Api/MetersApi.md#setactivationmeterstatus) | **POST** /activations/{activation_id}/meters/{serial_number}/meter_control | Enable or Disable the meters.
*MetersApi* | [**updateSystemMeter**](docs/Api/MetersApi.md#updatesystemmeter) | **PUT** /systems/{system_id}/meters/{serial_number} | Update the operational date of a meter by serial number.
*PvManufacturersApi* | [**getPvManufacturers**](docs/Api/PvManufacturersApi.md#getpvmanufacturers) | **GET** /pv_manufacturers | Returns PV module manufacturers
*PvModelsApi* | [**getPvManufacturerModels**](docs/Api/PvModelsApi.md#getpvmanufacturermodels) | **GET** /pv_manufacturers/{pv_manufacturer_id}/pv_models | Returns PV module manufacturers
*TariffApi* | [**getSystemTariffSettings**](docs/Api/TariffApi.md#getsystemtariffsettings) | **GET** /systems/config/{system_id}/tariff | Get tariff for a system
*TariffApi* | [**updateSystemTariffSettings**](docs/Api/TariffApi.md#updatesystemtariffsettings) | **PUT** /systems/config/{system_id}/tariff | Update tariff for a system
*UsersApi* | [**getActivationUser**](docs/Api/UsersApi.md#getactivationuser) | **GET** /activations/{activation_id}/users/{user_id} | Returns the requested user
*UsersApi* | [**getSelfUser**](docs/Api/UsersApi.md#getselfuser) | **GET** /partner/users/self | Return the current logged in user detail
*UsersApi* | [**getUser**](docs/Api/UsersApi.md#getuser) | **GET** /partner/users/{user_id} | Returns the requested user
*UsersApi* | [**searchUsers**](docs/Api/UsersApi.md#searchusers) | **GET** /users/search | Search user
*UsersApi* | [**updateActivationUser**](docs/Api/UsersApi.md#updateactivationuser) | **PUT** /activations/{activation_id}/users/{user_id} | Update user
*UsersApi* | [**updateUser**](docs/Api/UsersApi.md#updateuser) | **PUT** /users/{user_id} | Update user

## Models

- [Activation](docs/Model/Activation.md)
- [ActivationEnchargeInner](docs/Model/ActivationEnchargeInner.md)
- [ActivationEnpowerInner](docs/Model/ActivationEnpowerInner.md)
- [ActivationHost](docs/Model/ActivationHost.md)
- [ActivationHostCompany](docs/Model/ActivationHostCompany.md)
- [ActivationOwner](docs/Model/ActivationOwner.md)
- [ActivationOwnerCompany](docs/Model/ActivationOwnerCompany.md)
- [Address](docs/Model/Address.md)
- [ArrayParams](docs/Model/ArrayParams.md)
- [ArrayParamsModulesInner](docs/Model/ArrayParamsModulesInner.md)
- [Company](docs/Model/Company.md)
- [CompanyRoleEnum](docs/Model/CompanyRoleEnum.md)
- [CreateCompanyUserRequest](docs/Model/CreateCompanyUserRequest.md)
- [CreateUserRequest](docs/Model/CreateUserRequest.md)
- [DeleteActivationResponse](docs/Model/DeleteActivationResponse.md)
- [DeleteSystemArrayResponse](docs/Model/DeleteSystemArrayResponse.md)
- [GetActivationOpsProductionModeResponse](docs/Model/GetActivationOpsProductionModeResponse.md)
- [GetCompanyUsersResponse](docs/Model/GetCompanyUsersResponse.md)
- [GetCompanyUsersResponseUsersInner](docs/Model/GetCompanyUsersResponseUsersInner.md)
- [GetGridProfilesResponse](docs/Model/GetGridProfilesResponse.md)
- [GetGridProfilesResponseGridProfilesInner](docs/Model/GetGridProfilesResponseGridProfilesInner.md)
- [GetPartnerActivationsResponse](docs/Model/GetPartnerActivationsResponse.md)
- [GetPartnerActivationsResponseSystemsInner](docs/Model/GetPartnerActivationsResponseSystemsInner.md)
- [GetPartnerActivationsResponseSystemsInnerAuthorizedSubcontractorsInner](docs/Model/GetPartnerActivationsResponseSystemsInnerAuthorizedSubcontractorsInner.md)
- [GetPvManufacturerModelsResponse](docs/Model/GetPvManufacturerModelsResponse.md)
- [GetPvManufacturerModelsResponsePvManufacturers](docs/Model/GetPvManufacturerModelsResponsePvManufacturers.md)
- [GetPvManufacturersResponse](docs/Model/GetPvManufacturersResponse.md)
- [GetSelfCompanyAuthorizedSubcontractorsResponse](docs/Model/GetSelfCompanyAuthorizedSubcontractorsResponse.md)
- [GetSelfCompanyAuthorizedSubcontractorsResponseAuthorizedSubcontractorsInner](docs/Model/GetSelfCompanyAuthorizedSubcontractorsResponseAuthorizedSubcontractorsInner.md)
- [GetSelfCompanyBranchesResponse](docs/Model/GetSelfCompanyBranchesResponse.md)
- [GetSelfCompanyBranchesResponseBranchesInner](docs/Model/GetSelfCompanyBranchesResponseBranchesInner.md)
- [GetSystemMeterResponse](docs/Model/GetSystemMeterResponse.md)
- [GrantActivationUserAccessResponse](docs/Model/GrantActivationUserAccessResponse.md)
- [RevokeActivationUserAccessResponse](docs/Model/RevokeActivationUserAccessResponse.md)
- [SearchUsersResponse](docs/Model/SearchUsersResponse.md)
- [ServerError](docs/Model/ServerError.md)
- [SetActivationMeterStatusRequest](docs/Model/SetActivationMeterStatusRequest.md)
- [SetActivationMeterStatusResponse](docs/Model/SetActivationMeterStatusResponse.md)
- [SetActivationOpsProductionModeRequest](docs/Model/SetActivationOpsProductionModeRequest.md)
- [SetActivationOpsProductionModeResponse](docs/Model/SetActivationOpsProductionModeResponse.md)
- [SystemArray](docs/Model/SystemArray.md)
- [SystemArrayModulesInner](docs/Model/SystemArrayModulesInner.md)
- [SystemArrayTypeEnum](docs/Model/SystemArrayTypeEnum.md)
- [SystemArrays](docs/Model/SystemArrays.md)
- [SystemArraysInventoryDetailsInner](docs/Model/SystemArraysInventoryDetailsInner.md)
- [SystemArraysLayersInner](docs/Model/SystemArraysLayersInner.md)
- [SystemAttachmentTypeEnum](docs/Model/SystemAttachmentTypeEnum.md)
- [SystemEstimate](docs/Model/SystemEstimate.md)
- [SystemExpandEnum](docs/Model/SystemExpandEnum.md)
- [SystemInternetConnectionEnum](docs/Model/SystemInternetConnectionEnum.md)
- [SystemMeterStatusEnum](docs/Model/SystemMeterStatusEnum.md)
- [SystemParams](docs/Model/SystemParams.md)
- [SystemParamsAddress](docs/Model/SystemParamsAddress.md)
- [SystemParamsEnchargeInner](docs/Model/SystemParamsEnchargeInner.md)
- [SystemParamsEnpowerInner](docs/Model/SystemParamsEnpowerInner.md)
- [SystemProductionModeEnum](docs/Model/SystemProductionModeEnum.md)
- [SystemSourceEnum](docs/Model/SystemSourceEnum.md)
- [SystemStageEnum](docs/Model/SystemStageEnum.md)
- [SystemTypeEnum](docs/Model/SystemTypeEnum.md)
- [TariffSeasonsInner](docs/Model/TariffSeasonsInner.md)
- [TariffSeasonsInnerDaysInner](docs/Model/TariffSeasonsInnerDaysInner.md)
- [TariffSeasonsInnerDaysInnerPeriodsInner](docs/Model/TariffSeasonsInnerDaysInnerPeriodsInner.md)
- [TariffSettings](docs/Model/TariffSettings.md)
- [TariffSettingsTariff](docs/Model/TariffSettingsTariff.md)
- [TariffSettingsTariffCurrencyType](docs/Model/TariffSettingsTariffCurrencyType.md)
- [TariffSettingsTariffSingleRate](docs/Model/TariffSettingsTariffSingleRate.md)
- [TooManyRequestsError](docs/Model/TooManyRequestsError.md)
- [UnprocessableEntityError](docs/Model/UnprocessableEntityError.md)
- [UpdateActivationEstimateRequest](docs/Model/UpdateActivationEstimateRequest.md)
- [UpdateCompanyUserRequest](docs/Model/UpdateCompanyUserRequest.md)
- [UpdateSystemArraysRequest](docs/Model/UpdateSystemArraysRequest.md)
- [UpdateSystemMeterResponse](docs/Model/UpdateSystemMeterResponse.md)
- [UpdateSystemTariffSettingsResponse](docs/Model/UpdateSystemTariffSettingsResponse.md)
- [UpdateSystemTariffSettingsResponseTask](docs/Model/UpdateSystemTariffSettingsResponseTask.md)
- [User](docs/Model/User.md)
- [UserExpandEnum](docs/Model/UserExpandEnum.md)
- [UserParams](docs/Model/UserParams.md)
- [UserRoleEnum](docs/Model/UserRoleEnum.md)

## Authorization

Authentication schemes defined for the API:
### OAuth2

- **Type**: `OAuth`
- **Flow**: `accessCode`
- **Authorization URL**: `https://api.enphaseenergy.com/oauth/authorize`
- **Scopes**: N/A

### ApiKey

- **Type**: API key
- **API key parameter name**: key
- **Location**: URL query string


## Tests

To run the tests, use:

```bash
composer install
vendor/bin/phpunit
```

## Author



## About this package

This PHP package is automatically generated by the [OpenAPI Generator](https://openapi-generator.tech) project:

- API version: `4.0`
- Build package: `org.openapitools.codegen.languages.PhpClientCodegen`

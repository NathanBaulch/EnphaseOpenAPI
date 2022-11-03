# enlighten

The Enlighten Systems API is a JSON-based API that provides access to performance data for a PV system. By using the Enlighten Systems API, you agree to the Enphase Energy API License Agreement.

Please note that the Enlighten Systems API does not provide performance data at a panel or microinverter level.


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
require_once('/path/to/enlighten/vendor/autoload.php');
```

## Getting Started

Please follow the [installation procedure](#installation--usage) and then run the following:

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



// Configure API key authorization: ApiKey
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setApiKey('key', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setApiKeyPrefix('key', 'Bearer');


$apiInstance = new OpenAPI\Client\Api\DefaultApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$user_id = 4d6a51330a; // string
$system_id = 66; // int
$start_date = Fri Jul 01 10:00:00 AEST 2016; // \DateTime | The date on which to start the time series. Defaults to the system's operational date.
$end_date = Sun Jul 31 10:00:00 AEST 2016; // \DateTime | The last date to include in the time series. Defaults to yesterday or the last day the system reported, whichever is earlier.

try {
    $result = $apiInstance->consumptionLifetime($user_id, $system_id, $start_date, $end_date);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling DefaultApi->consumptionLifetime: ', $e->getMessage(), PHP_EOL;
}

```

## API Endpoints

All URIs are relative to *https://api.enphaseenergy.com/api/v2*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*DefaultApi* | [**consumptionLifetime**](docs/Api/DefaultApi.md#consumptionlifetime) | **GET** /systems/{system_id}/consumption_lifetime | 
*DefaultApi* | [**consumptionStats**](docs/Api/DefaultApi.md#consumptionstats) | **GET** /systems/{system_id}/consumption_stats | 
*DefaultApi* | [**energyLifetime**](docs/Api/DefaultApi.md#energylifetime) | **GET** /systems/{system_id}/energy_lifetime | 
*DefaultApi* | [**envoys**](docs/Api/DefaultApi.md#envoys) | **GET** /systems/{system_id}/envoys | 
*DefaultApi* | [**inventory**](docs/Api/DefaultApi.md#inventory) | **GET** /systems/{system_id}/inventory | 
*DefaultApi* | [**invertersSummaryByEnvoyOrSite**](docs/Api/DefaultApi.md#inverterssummarybyenvoyorsite) | **GET** /systems/inverters_summary_by_envoy_or_site | 
*DefaultApi* | [**monthlyProduction**](docs/Api/DefaultApi.md#monthlyproduction) | **GET** /systems/{system_id}/monthly_production | 
*DefaultApi* | [**productionMeterReadings**](docs/Api/DefaultApi.md#productionmeterreadings) | **GET** /systems/{system_id}/production_meter_readings | 
*DefaultApi* | [**rgmStats**](docs/Api/DefaultApi.md#rgmstats) | **GET** /systems/{system_id}/rgm_stats | 
*DefaultApi* | [**searchSystemId**](docs/Api/DefaultApi.md#searchsystemid) | **GET** /systems/search_system_id | 
*DefaultApi* | [**stats**](docs/Api/DefaultApi.md#stats) | **GET** /systems/{system_id}/stats | 
*DefaultApi* | [**summary**](docs/Api/DefaultApi.md#summary) | **GET** /systems/{system_id}/summary | 
*DefaultApi* | [**systems**](docs/Api/DefaultApi.md#systems) | **GET** /systems | 

## Models

- [ClientError](docs/Model/ClientError.md)
- [ConflictError](docs/Model/ConflictError.md)
- [ConnectionType](docs/Model/ConnectionType.md)
- [ConsumptionLifetimeResponse](docs/Model/ConsumptionLifetimeResponse.md)
- [ConsumptionStatsResponse](docs/Model/ConsumptionStatsResponse.md)
- [ConsumptionStatsResponseIntervalsInner](docs/Model/ConsumptionStatsResponseIntervalsInner.md)
- [EnergyLifetimeResponse](docs/Model/EnergyLifetimeResponse.md)
- [EnvoysResponse](docs/Model/EnvoysResponse.md)
- [EnvoysResponseEnvoysInner](docs/Model/EnvoysResponseEnvoysInner.md)
- [InventoryResponse](docs/Model/InventoryResponse.md)
- [InventoryResponseEnvoysInner](docs/Model/InventoryResponseEnvoysInner.md)
- [InventoryResponseMetersInner](docs/Model/InventoryResponseMetersInner.md)
- [InvertersSummaryByEnvoyOrSiteResponse](docs/Model/InvertersSummaryByEnvoyOrSiteResponse.md)
- [InvertersSummaryByEnvoyOrSiteResponseMicroInvertersInner](docs/Model/InvertersSummaryByEnvoyOrSiteResponseMicroInvertersInner.md)
- [InvertersSummaryByEnvoyOrSiteResponseMicroInvertersInnerEnergy](docs/Model/InvertersSummaryByEnvoyOrSiteResponseMicroInvertersInnerEnergy.md)
- [InvertersSummaryByEnvoyOrSiteResponseMicroInvertersInnerPowerProduced](docs/Model/InvertersSummaryByEnvoyOrSiteResponseMicroInvertersInnerPowerProduced.md)
- [Meta](docs/Model/Meta.md)
- [MonthlyProductionResponse](docs/Model/MonthlyProductionResponse.md)
- [MonthlyProductionResponseMeterReadingsInner](docs/Model/MonthlyProductionResponseMeterReadingsInner.md)
- [NotFoundError](docs/Model/NotFoundError.md)
- [ProductionMeterReadingsResponse](docs/Model/ProductionMeterReadingsResponse.md)
- [ProductionMeterReadingsResponseMeterReadingsInner](docs/Model/ProductionMeterReadingsResponseMeterReadingsInner.md)
- [RgmStatsResponse](docs/Model/RgmStatsResponse.md)
- [RgmStatsResponseIntervalsInner](docs/Model/RgmStatsResponseIntervalsInner.md)
- [RgmStatsResponseMeterIntervalsInner](docs/Model/RgmStatsResponseMeterIntervalsInner.md)
- [RgmStatsResponseMeterIntervalsInnerIntervalsInner](docs/Model/RgmStatsResponseMeterIntervalsInnerIntervalsInner.md)
- [SearchSystemIdResponse](docs/Model/SearchSystemIdResponse.md)
- [ServerError](docs/Model/ServerError.md)
- [StatsResponse](docs/Model/StatsResponse.md)
- [StatsResponseIntervalsInner](docs/Model/StatsResponseIntervalsInner.md)
- [Status](docs/Model/Status.md)
- [SummaryResponse](docs/Model/SummaryResponse.md)
- [SystemsResponse](docs/Model/SystemsResponse.md)
- [SystemsResponseSystemsInner](docs/Model/SystemsResponseSystemsInner.md)
- [UnprocessableEntityError](docs/Model/UnprocessableEntityError.md)

## Authorization

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

- API version: `2.0`
- Build package: `org.openapitools.codegen.languages.PhpClientCodegen`

# monitoring

Monitoring API can be used to fetch system details on a site, system-level production and consumption data, and device-level production data.


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
require_once('/path/to/monitoring/vendor/autoload.php');
```

## Getting Started

Please follow the [installation procedure](#installation--usage) and then run the following:

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');

// Configure API key authorization: ApiKey
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setApiKey('key', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setApiKeyPrefix('key', 'Bearer');


$apiInstance = new OpenAPI\Client\Api\DeviceLevelProductionMonitoringApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$system_id = 56; // int | Unique numeric ID of the system.
$serial_no = 'serial_no_example'; // string | Serial number of the acb.
$start_at = 56; // int | Start time for fetching the telemetry data in Epoch time format. Alternatively one can use start_date in place of start_at for passing the start date as string in YYYY-MM-DD format. By default start_at will appear in response. If start_date parameter is passed in the url then start_date field will appear in response.
$granularity = new \OpenAPI\Client\Model\TelemetryGranularityEnum(); // TelemetryGranularityEnum | Granularity of the telemetry data. Default is 'day'.

try {
    $result = $apiInstance->getSystemAcbDeviceTelemetry($system_id, $serial_no, $start_at, $granularity);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling DeviceLevelProductionMonitoringApi->getSystemAcbDeviceTelemetry: ', $e->getMessage(), PHP_EOL;
}

```

## API Endpoints

All URIs are relative to *https://api.enphaseenergy.com/api/v4*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*DeviceLevelProductionMonitoringApi* | [**getSystemAcbDeviceTelemetry**](docs/Api/DeviceLevelProductionMonitoringApi.md#getsystemacbdevicetelemetry) | **GET** /systems/{system_id}/devices/acbs/{serial_no}/telemetry | Retrieves telemetry for single ACB
*DeviceLevelProductionMonitoringApi* | [**getSystemEnchargeDeviceTelemetry**](docs/Api/DeviceLevelProductionMonitoringApi.md#getsystemenchargedevicetelemetry) | **GET** /systems/{system_id}/devices/encharges/{serial_no}/telemetry | Retrieves telemetry for single Encharge
*DeviceLevelProductionMonitoringApi* | [**getSystemMicroDeviceTelemetry**](docs/Api/DeviceLevelProductionMonitoringApi.md#getsystemmicrodevicetelemetry) | **GET** /systems/{system_id}/devices/micros/{serial_no}/telemetry | Retrieves telemetry for single micro/pcu
*SiteLevelConsumptionMonitoringApi* | [**getSystemBatteryLifetime**](docs/Api/SiteLevelConsumptionMonitoringApi.md#getsystembatterylifetime) | **GET** /systems/{system_id}/battery_lifetime | battery_lifetime
*SiteLevelConsumptionMonitoringApi* | [**getSystemBatteryTelemetry**](docs/Api/SiteLevelConsumptionMonitoringApi.md#getsystembatterytelemetry) | **GET** /systems/{system_id}/telemetry/battery | Retrieves telemetry for all batteries for a system
*SiteLevelConsumptionMonitoringApi* | [**getSystemConsumptionLifetime**](docs/Api/SiteLevelConsumptionMonitoringApi.md#getsystemconsumptionlifetime) | **GET** /systems/{system_id}/consumption_lifetime | consumption_lifetime
*SiteLevelConsumptionMonitoringApi* | [**getSystemConsumptionMeterTelemetry**](docs/Api/SiteLevelConsumptionMonitoringApi.md#getsystemconsumptionmetertelemetry) | **GET** /systems/{system_id}/telemetry/consumption_meter | Retrieves telemetry for all consumption meters for a system
*SiteLevelConsumptionMonitoringApi* | [**getSystemEnergyExportLifetime**](docs/Api/SiteLevelConsumptionMonitoringApi.md#getsystemenergyexportlifetime) | **GET** /systems/{system_id}/energy_export_lifetime | export_lifetime
*SiteLevelConsumptionMonitoringApi* | [**getSystemEnergyExportTelemetry**](docs/Api/SiteLevelConsumptionMonitoringApi.md#getsystemenergyexporttelemetry) | **GET** /systems/{system_id}/energy_export_telemetry | Retrieves energy exported to grid in regular intervals
*SiteLevelConsumptionMonitoringApi* | [**getSystemEnergyImportLifetime**](docs/Api/SiteLevelConsumptionMonitoringApi.md#getsystemenergyimportlifetime) | **GET** /systems/{system_id}/energy_import_lifetime | import_lifetime
*SiteLevelConsumptionMonitoringApi* | [**getSystemEnergyImportTelemetry**](docs/Api/SiteLevelConsumptionMonitoringApi.md#getsystemenergyimporttelemetry) | **GET** /systems/{system_id}/energy_import_telemetry | Retrieves energy imported from grid in regular intervals
*SiteLevelProductionMonitoringApi* | [**getSystemEnergyLifetime**](docs/Api/SiteLevelProductionMonitoringApi.md#getsystemenergylifetime) | **GET** /systems/{system_id}/energy_lifetime | energy_lifetime
*SiteLevelProductionMonitoringApi* | [**getSystemProductionMeterReadings**](docs/Api/SiteLevelProductionMonitoringApi.md#getsystemproductionmeterreadings) | **GET** /systems/{system_id}/production_meter_readings | production_meter_readings
*SiteLevelProductionMonitoringApi* | [**getSystemProductionMeterTelemetry**](docs/Api/SiteLevelProductionMonitoringApi.md#getsystemproductionmetertelemetry) | **GET** /systems/{system_id}/telemetry/production_meter | Retrieves telemetry for all production meters for a system
*SiteLevelProductionMonitoringApi* | [**getSystemProductionMicroTelemetry**](docs/Api/SiteLevelProductionMonitoringApi.md#getsystemproductionmicrotelemetry) | **GET** /systems/{system_id}/telemetry/production_micro | Retrieves telemetry for all production micros for a system
*SiteLevelProductionMonitoringApi* | [**getSystemRgmStats**](docs/Api/SiteLevelProductionMonitoringApi.md#getsystemrgmstats) | **GET** /systems/{system_id}/rgm_stats | rgm_stats
*SystemConfigurationsApi* | [**getSystemBatterySettings**](docs/Api/SystemConfigurationsApi.md#getsystembatterysettings) | **GET** /systems/config/{system_id}/battery_settings | Returns the current battery settings of a system
*SystemConfigurationsApi* | [**getSystemGridStatusSettings**](docs/Api/SystemConfigurationsApi.md#getsystemgridstatussettings) | **GET** /systems/config/{system_id}/grid_status | Returns the current grid status settings of a system
*SystemConfigurationsApi* | [**getSystemLoadControlSettings**](docs/Api/SystemConfigurationsApi.md#getsystemloadcontrolsettings) | **GET** /systems/config/{system_id}/load_control | Returns the current load control settings of a system
*SystemConfigurationsApi* | [**getSystemStormGuardSettings**](docs/Api/SystemConfigurationsApi.md#getsystemstormguardsettings) | **GET** /systems/config/{system_id}/storm_guard | Returns the current storm guard settings of a system
*SystemDetailsApi* | [**getInvertersSummaryByEnvoyOrSite**](docs/Api/SystemDetailsApi.md#getinverterssummarybyenvoyorsite) | **GET** /systems/inverters_summary_by_envoy_or_site | inverters_summary_by_envoy_or_site
*SystemDetailsApi* | [**getSystem**](docs/Api/SystemDetailsApi.md#getsystem) | **GET** /systems/{system_id} | Retrieves a System by ID
*SystemDetailsApi* | [**getSystemDevices**](docs/Api/SystemDetailsApi.md#getsystemdevices) | **GET** /systems/{system_id}/devices | Retrieves devices for a given system
*SystemDetailsApi* | [**getSystemSummary**](docs/Api/SystemDetailsApi.md#getsystemsummary) | **GET** /systems/{system_id}/summary | Retrieves a system summary
*SystemDetailsApi* | [**getSystems**](docs/Api/SystemDetailsApi.md#getsystems) | **GET** /systems | Fetch systems
*SystemDetailsApi* | [**retrieveSystemId**](docs/Api/SystemDetailsApi.md#retrievesystemid) | **GET** /systems/retrieve_system_id | Retrieve system for a given envoy serial number
*SystemDetailsApi* | [**searchSystems**](docs/Api/SystemDetailsApi.md#searchsystems) | **POST** /systems/search | Search and filter systems

## Models

- [BatteryDeviceTelemetry](docs/Model/BatteryDeviceTelemetry.md)
- [BatteryDeviceTelemetryIntervalsInner](docs/Model/BatteryDeviceTelemetryIntervalsInner.md)
- [BatteryDeviceTelemetryIntervalsInnerCharge](docs/Model/BatteryDeviceTelemetryIntervalsInnerCharge.md)
- [BatteryDeviceTelemetryIntervalsInnerDischarge](docs/Model/BatteryDeviceTelemetryIntervalsInnerDischarge.md)
- [BatteryDeviceTelemetryIntervalsInnerSoc](docs/Model/BatteryDeviceTelemetryIntervalsInnerSoc.md)
- [ClientError](docs/Model/ClientError.md)
- [DataTemporarilyUnavailableError](docs/Model/DataTemporarilyUnavailableError.md)
- [GetInvertersSummaryByEnvoyOrSiteResponseInner](docs/Model/GetInvertersSummaryByEnvoyOrSiteResponseInner.md)
- [GetInvertersSummaryByEnvoyOrSiteResponseInnerMicroInvertersInner](docs/Model/GetInvertersSummaryByEnvoyOrSiteResponseInnerMicroInvertersInner.md)
- [GetInvertersSummaryByEnvoyOrSiteResponseInnerMicroInvertersInnerEnergy](docs/Model/GetInvertersSummaryByEnvoyOrSiteResponseInnerMicroInvertersInnerEnergy.md)
- [GetInvertersSummaryByEnvoyOrSiteResponseInnerMicroInvertersInnerPowerProduced](docs/Model/GetInvertersSummaryByEnvoyOrSiteResponseInnerMicroInvertersInnerPowerProduced.md)
- [GetSystemBatteryLifetimeResponse](docs/Model/GetSystemBatteryLifetimeResponse.md)
- [GetSystemBatterySettingsResponse](docs/Model/GetSystemBatterySettingsResponse.md)
- [GetSystemBatteryTelemetryResponse](docs/Model/GetSystemBatteryTelemetryResponse.md)
- [GetSystemBatteryTelemetryResponseIntervalsInner](docs/Model/GetSystemBatteryTelemetryResponseIntervalsInner.md)
- [GetSystemBatteryTelemetryResponseIntervalsInnerCharge](docs/Model/GetSystemBatteryTelemetryResponseIntervalsInnerCharge.md)
- [GetSystemBatteryTelemetryResponseIntervalsInnerDischarge](docs/Model/GetSystemBatteryTelemetryResponseIntervalsInnerDischarge.md)
- [GetSystemBatteryTelemetryResponseIntervalsInnerSoc](docs/Model/GetSystemBatteryTelemetryResponseIntervalsInnerSoc.md)
- [GetSystemConsumptionLifetimeResponse](docs/Model/GetSystemConsumptionLifetimeResponse.md)
- [GetSystemConsumptionMeterTelemetryResponse](docs/Model/GetSystemConsumptionMeterTelemetryResponse.md)
- [GetSystemConsumptionMeterTelemetryResponseIntervalsInner](docs/Model/GetSystemConsumptionMeterTelemetryResponseIntervalsInner.md)
- [GetSystemDevicesResponse](docs/Model/GetSystemDevicesResponse.md)
- [GetSystemDevicesResponseDevicesValueInner](docs/Model/GetSystemDevicesResponseDevicesValueInner.md)
- [GetSystemDevicesResponseDevicesValueInnerCellularModem](docs/Model/GetSystemDevicesResponseDevicesValueInnerCellularModem.md)
- [GetSystemEnergyExportLifetimeResponse](docs/Model/GetSystemEnergyExportLifetimeResponse.md)
- [GetSystemEnergyExportTelemetryResponse](docs/Model/GetSystemEnergyExportTelemetryResponse.md)
- [GetSystemEnergyExportTelemetryResponseIntervalsInnerInner](docs/Model/GetSystemEnergyExportTelemetryResponseIntervalsInnerInner.md)
- [GetSystemEnergyImportLifetimeResponse](docs/Model/GetSystemEnergyImportLifetimeResponse.md)
- [GetSystemEnergyImportTelemetryResponse](docs/Model/GetSystemEnergyImportTelemetryResponse.md)
- [GetSystemEnergyImportTelemetryResponseIntervalsInnerInner](docs/Model/GetSystemEnergyImportTelemetryResponseIntervalsInnerInner.md)
- [GetSystemEnergyLifetimeResponse](docs/Model/GetSystemEnergyLifetimeResponse.md)
- [GetSystemGridStatusSettingsResponse](docs/Model/GetSystemGridStatusSettingsResponse.md)
- [GetSystemLoadControlSettingsResponse](docs/Model/GetSystemLoadControlSettingsResponse.md)
- [GetSystemLoadControlSettingsResponseLoadControlDataInner](docs/Model/GetSystemLoadControlSettingsResponseLoadControlDataInner.md)
- [GetSystemMicroDeviceTelemetryResponse](docs/Model/GetSystemMicroDeviceTelemetryResponse.md)
- [GetSystemMicroDeviceTelemetryResponseIntervalsInner](docs/Model/GetSystemMicroDeviceTelemetryResponseIntervalsInner.md)
- [GetSystemProductionMeterReadingsResponse](docs/Model/GetSystemProductionMeterReadingsResponse.md)
- [GetSystemProductionMeterReadingsResponseMeterReadingsInner](docs/Model/GetSystemProductionMeterReadingsResponseMeterReadingsInner.md)
- [GetSystemProductionMeterTelemetryResponse](docs/Model/GetSystemProductionMeterTelemetryResponse.md)
- [GetSystemProductionMeterTelemetryResponseIntervalsInner](docs/Model/GetSystemProductionMeterTelemetryResponseIntervalsInner.md)
- [GetSystemProductionMicroTelemetryResponse](docs/Model/GetSystemProductionMicroTelemetryResponse.md)
- [GetSystemProductionMicroTelemetryResponseIntervalsInner](docs/Model/GetSystemProductionMicroTelemetryResponseIntervalsInner.md)
- [GetSystemRgmStatsResponse](docs/Model/GetSystemRgmStatsResponse.md)
- [GetSystemRgmStatsResponseIntervalsInner](docs/Model/GetSystemRgmStatsResponseIntervalsInner.md)
- [GetSystemRgmStatsResponseMeterIntervalsInner](docs/Model/GetSystemRgmStatsResponseMeterIntervalsInner.md)
- [GetSystemRgmStatsResponseMeterIntervalsInnerIntervalsInner](docs/Model/GetSystemRgmStatsResponseMeterIntervalsInnerIntervalsInner.md)
- [GetSystemStormGuardSettingsResponse](docs/Model/GetSystemStormGuardSettingsResponse.md)
- [GetSystemSummaryResponse](docs/Model/GetSystemSummaryResponse.md)
- [GetSystems500Response](docs/Model/GetSystems500Response.md)
- [GetSystemsResponse](docs/Model/GetSystemsResponse.md)
- [InternalServerError](docs/Model/InternalServerError.md)
- [Meta](docs/Model/Meta.md)
- [MethodNotAllowedError](docs/Model/MethodNotAllowedError.md)
- [NotImplementedError](docs/Model/NotImplementedError.md)
- [RetrieveSystemIdResponse](docs/Model/RetrieveSystemIdResponse.md)
- [SearchSystemsRequest](docs/Model/SearchSystemsRequest.md)
- [SearchSystemsRequestSystem](docs/Model/SearchSystemsRequestSystem.md)
- [SearchSystemsResponse](docs/Model/SearchSystemsResponse.md)
- [System](docs/Model/System.md)
- [SystemAddress](docs/Model/SystemAddress.md)
- [SystemAttachmentTypeEnum](docs/Model/SystemAttachmentTypeEnum.md)
- [SystemConnectionTypeEnum](docs/Model/SystemConnectionTypeEnum.md)
- [SystemEnergyLifetimeProductionEnum](docs/Model/SystemEnergyLifetimeProductionEnum.md)
- [SystemPublicNameEnum](docs/Model/SystemPublicNameEnum.md)
- [SystemSortByEnum](docs/Model/SystemSortByEnum.md)
- [SystemStatusEnum](docs/Model/SystemStatusEnum.md)
- [TelemetryGranularityEnum](docs/Model/TelemetryGranularityEnum.md)
- [TooManyRequestsError](docs/Model/TooManyRequestsError.md)

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

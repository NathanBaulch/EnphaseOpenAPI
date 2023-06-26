# The Enphase Monitoring API Bash client

## Overview

This is a Bash client script for accessing The Enphase Monitoring API service.

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
*DeviceLevelProductionMonitoringApi* | [**getSystemAcbDeviceTelemetry**](docs/DeviceLevelProductionMonitoringApi.md#getsystemacbdevicetelemetry) | **GET** /systems/{system_id}/devices/acbs/{serial_no}/telemetry | Retrieves telemetry for single ACB
*DeviceLevelProductionMonitoringApi* | [**getSystemEnchargeDeviceTelemetry**](docs/DeviceLevelProductionMonitoringApi.md#getsystemenchargedevicetelemetry) | **GET** /systems/{system_id}/devices/encharges/{serial_no}/telemetry | Retrieves telemetry for single Encharge
*DeviceLevelProductionMonitoringApi* | [**getSystemMicroDeviceTelemetry**](docs/DeviceLevelProductionMonitoringApi.md#getsystemmicrodevicetelemetry) | **GET** /systems/{system_id}/devices/micros/{serial_no}/telemetry | Retrieves telemetry for single micro/pcu
*SiteLevelConsumptionMonitoringApi* | [**getSystemBatteryLifetime**](docs/SiteLevelConsumptionMonitoringApi.md#getsystembatterylifetime) | **GET** /systems/{system_id}/battery_lifetime | battery_lifetime
*SiteLevelConsumptionMonitoringApi* | [**getSystemBatteryTelemetry**](docs/SiteLevelConsumptionMonitoringApi.md#getsystembatterytelemetry) | **GET** /systems/{system_id}/telemetry/battery | Retrieves telemetry for all batteries for a system
*SiteLevelConsumptionMonitoringApi* | [**getSystemConsumptionLifetime**](docs/SiteLevelConsumptionMonitoringApi.md#getsystemconsumptionlifetime) | **GET** /systems/{system_id}/consumption_lifetime | consumption_lifetime
*SiteLevelConsumptionMonitoringApi* | [**getSystemConsumptionMeterTelemetry**](docs/SiteLevelConsumptionMonitoringApi.md#getsystemconsumptionmetertelemetry) | **GET** /systems/{system_id}/telemetry/consumption_meter | Retrieves telemetry for all consumption meters for a system
*SiteLevelConsumptionMonitoringApi* | [**getSystemEnergyExportLifetime**](docs/SiteLevelConsumptionMonitoringApi.md#getsystemenergyexportlifetime) | **GET** /systems/{system_id}/energy_export_lifetime | export_lifetime
*SiteLevelConsumptionMonitoringApi* | [**getSystemEnergyExportTelemetry**](docs/SiteLevelConsumptionMonitoringApi.md#getsystemenergyexporttelemetry) | **GET** /systems/{system_id}/energy_export_telemetry | Retrieves energy exported to grid in regular intervals
*SiteLevelConsumptionMonitoringApi* | [**getSystemEnergyImportLifetime**](docs/SiteLevelConsumptionMonitoringApi.md#getsystemenergyimportlifetime) | **GET** /systems/{system_id}/energy_import_lifetime | import_lifetime
*SiteLevelConsumptionMonitoringApi* | [**getSystemEnergyImportTelemetry**](docs/SiteLevelConsumptionMonitoringApi.md#getsystemenergyimporttelemetry) | **GET** /systems/{system_id}/energy_import_telemetry | Retrieves energy imported from grid in regular intervals
*SiteLevelProductionMonitoringApi* | [**getSystemEnergyLifetime**](docs/SiteLevelProductionMonitoringApi.md#getsystemenergylifetime) | **GET** /systems/{system_id}/energy_lifetime | energy_lifetime
*SiteLevelProductionMonitoringApi* | [**getSystemProductionMeterReadings**](docs/SiteLevelProductionMonitoringApi.md#getsystemproductionmeterreadings) | **GET** /systems/{system_id}/production_meter_readings | production_meter_readings
*SiteLevelProductionMonitoringApi* | [**getSystemProductionMeterTelemetry**](docs/SiteLevelProductionMonitoringApi.md#getsystemproductionmetertelemetry) | **GET** /systems/{system_id}/telemetry/production_meter | Retrieves telemetry for all production meters for a system
*SiteLevelProductionMonitoringApi* | [**getSystemProductionMicroTelemetry**](docs/SiteLevelProductionMonitoringApi.md#getsystemproductionmicrotelemetry) | **GET** /systems/{system_id}/telemetry/production_micro | Retrieves telemetry for all production micros for a system
*SiteLevelProductionMonitoringApi* | [**getSystemRgmStats**](docs/SiteLevelProductionMonitoringApi.md#getsystemrgmstats) | **GET** /systems/{system_id}/rgm_stats | rgm_stats
*SystemConfigurationsApi* | [**getSystemBatterySettings**](docs/SystemConfigurationsApi.md#getsystembatterysettings) | **GET** /systems/config/{system_id}/battery_settings | Returns the current battery settings of a system
*SystemConfigurationsApi* | [**getSystemGridStatusSettings**](docs/SystemConfigurationsApi.md#getsystemgridstatussettings) | **GET** /systems/config/{system_id}/grid_status | Returns the current grid status settings of a system
*SystemConfigurationsApi* | [**getSystemLoadControlSettings**](docs/SystemConfigurationsApi.md#getsystemloadcontrolsettings) | **GET** /systems/config/{system_id}/load_control | Returns the current load control settings of a system
*SystemConfigurationsApi* | [**getSystemStormGuardSettings**](docs/SystemConfigurationsApi.md#getsystemstormguardsettings) | **GET** /systems/config/{system_id}/storm_guard | Returns the current storm guard settings of a system
*SystemDetailsApi* | [**getInvertersSummaryByEnvoyOrSite**](docs/SystemDetailsApi.md#getinverterssummarybyenvoyorsite) | **GET** /systems/inverters_summary_by_envoy_or_site | inverters_summary_by_envoy_or_site
*SystemDetailsApi* | [**getSystem**](docs/SystemDetailsApi.md#getsystem) | **GET** /systems/{system_id} | Retrieves a System by ID
*SystemDetailsApi* | [**getSystemDevices**](docs/SystemDetailsApi.md#getsystemdevices) | **GET** /systems/{system_id}/devices | Retrieves devices for a given system
*SystemDetailsApi* | [**getSystemSummary**](docs/SystemDetailsApi.md#getsystemsummary) | **GET** /systems/{system_id}/summary | Retrieves a system summary
*SystemDetailsApi* | [**getSystems**](docs/SystemDetailsApi.md#getsystems) | **GET** /systems | Fetch systems
*SystemDetailsApi* | [**retrieveSystemId**](docs/SystemDetailsApi.md#retrievesystemid) | **GET** /systems/retrieve_system_id | Retrieve system for a given envoy serial number
*SystemDetailsApi* | [**searchSystems**](docs/SystemDetailsApi.md#searchsystems) | **POST** /systems/search | Search and filter systems


## Documentation For Models

 - [BatteryDeviceTelemetry](docs/BatteryDeviceTelemetry.md)
 - [BatteryDeviceTelemetryIntervalsInner](docs/BatteryDeviceTelemetryIntervalsInner.md)
 - [BatteryDeviceTelemetryIntervalsInnerCharge](docs/BatteryDeviceTelemetryIntervalsInnerCharge.md)
 - [BatteryDeviceTelemetryIntervalsInnerDischarge](docs/BatteryDeviceTelemetryIntervalsInnerDischarge.md)
 - [BatteryDeviceTelemetryIntervalsInnerSoc](docs/BatteryDeviceTelemetryIntervalsInnerSoc.md)
 - [ClientError](docs/ClientError.md)
 - [DataTemporarilyUnavailableError](docs/DataTemporarilyUnavailableError.md)
 - [GetInvertersSummaryByEnvoyOrSiteResponseInner](docs/GetInvertersSummaryByEnvoyOrSiteResponseInner.md)
 - [GetInvertersSummaryByEnvoyOrSiteResponseInnerMicroInvertersInner](docs/GetInvertersSummaryByEnvoyOrSiteResponseInnerMicroInvertersInner.md)
 - [GetInvertersSummaryByEnvoyOrSiteResponseInnerMicroInvertersInnerEnergy](docs/GetInvertersSummaryByEnvoyOrSiteResponseInnerMicroInvertersInnerEnergy.md)
 - [GetInvertersSummaryByEnvoyOrSiteResponseInnerMicroInvertersInnerPowerProduced](docs/GetInvertersSummaryByEnvoyOrSiteResponseInnerMicroInvertersInnerPowerProduced.md)
 - [GetSystemBatteryLifetimeResponse](docs/GetSystemBatteryLifetimeResponse.md)
 - [GetSystemBatterySettingsResponse](docs/GetSystemBatterySettingsResponse.md)
 - [GetSystemBatteryTelemetryResponse](docs/GetSystemBatteryTelemetryResponse.md)
 - [GetSystemBatteryTelemetryResponseIntervalsInner](docs/GetSystemBatteryTelemetryResponseIntervalsInner.md)
 - [GetSystemBatteryTelemetryResponseIntervalsInnerCharge](docs/GetSystemBatteryTelemetryResponseIntervalsInnerCharge.md)
 - [GetSystemBatteryTelemetryResponseIntervalsInnerDischarge](docs/GetSystemBatteryTelemetryResponseIntervalsInnerDischarge.md)
 - [GetSystemBatteryTelemetryResponseIntervalsInnerSoc](docs/GetSystemBatteryTelemetryResponseIntervalsInnerSoc.md)
 - [GetSystemConsumptionLifetimeResponse](docs/GetSystemConsumptionLifetimeResponse.md)
 - [GetSystemConsumptionMeterTelemetryResponse](docs/GetSystemConsumptionMeterTelemetryResponse.md)
 - [GetSystemConsumptionMeterTelemetryResponseIntervalsInner](docs/GetSystemConsumptionMeterTelemetryResponseIntervalsInner.md)
 - [GetSystemDevicesResponse](docs/GetSystemDevicesResponse.md)
 - [GetSystemDevicesResponseDevicesValueInner](docs/GetSystemDevicesResponseDevicesValueInner.md)
 - [GetSystemDevicesResponseDevicesValueInnerCellularModem](docs/GetSystemDevicesResponseDevicesValueInnerCellularModem.md)
 - [GetSystemEnergyExportLifetimeResponse](docs/GetSystemEnergyExportLifetimeResponse.md)
 - [GetSystemEnergyExportTelemetryResponse](docs/GetSystemEnergyExportTelemetryResponse.md)
 - [GetSystemEnergyExportTelemetryResponseIntervalsInnerInner](docs/GetSystemEnergyExportTelemetryResponseIntervalsInnerInner.md)
 - [GetSystemEnergyImportLifetimeResponse](docs/GetSystemEnergyImportLifetimeResponse.md)
 - [GetSystemEnergyImportTelemetryResponse](docs/GetSystemEnergyImportTelemetryResponse.md)
 - [GetSystemEnergyImportTelemetryResponseIntervalsInnerInner](docs/GetSystemEnergyImportTelemetryResponseIntervalsInnerInner.md)
 - [GetSystemEnergyLifetimeResponse](docs/GetSystemEnergyLifetimeResponse.md)
 - [GetSystemGridStatusSettingsResponse](docs/GetSystemGridStatusSettingsResponse.md)
 - [GetSystemLoadControlSettingsResponse](docs/GetSystemLoadControlSettingsResponse.md)
 - [GetSystemLoadControlSettingsResponseLoadControlDataInner](docs/GetSystemLoadControlSettingsResponseLoadControlDataInner.md)
 - [GetSystemMicroDeviceTelemetryResponse](docs/GetSystemMicroDeviceTelemetryResponse.md)
 - [GetSystemMicroDeviceTelemetryResponseIntervalsInner](docs/GetSystemMicroDeviceTelemetryResponseIntervalsInner.md)
 - [GetSystemProductionMeterReadingsResponse](docs/GetSystemProductionMeterReadingsResponse.md)
 - [GetSystemProductionMeterReadingsResponseMeterReadingsInner](docs/GetSystemProductionMeterReadingsResponseMeterReadingsInner.md)
 - [GetSystemProductionMeterTelemetryResponse](docs/GetSystemProductionMeterTelemetryResponse.md)
 - [GetSystemProductionMeterTelemetryResponseIntervalsInner](docs/GetSystemProductionMeterTelemetryResponseIntervalsInner.md)
 - [GetSystemProductionMicroTelemetryResponse](docs/GetSystemProductionMicroTelemetryResponse.md)
 - [GetSystemProductionMicroTelemetryResponseIntervalsInner](docs/GetSystemProductionMicroTelemetryResponseIntervalsInner.md)
 - [GetSystemRgmStatsResponse](docs/GetSystemRgmStatsResponse.md)
 - [GetSystemRgmStatsResponseIntervalsInner](docs/GetSystemRgmStatsResponseIntervalsInner.md)
 - [GetSystemRgmStatsResponseMeterIntervalsInner](docs/GetSystemRgmStatsResponseMeterIntervalsInner.md)
 - [GetSystemRgmStatsResponseMeterIntervalsInnerIntervalsInner](docs/GetSystemRgmStatsResponseMeterIntervalsInnerIntervalsInner.md)
 - [GetSystemStormGuardSettingsResponse](docs/GetSystemStormGuardSettingsResponse.md)
 - [GetSystemSummaryResponse](docs/GetSystemSummaryResponse.md)
 - [GetSystems500Response](docs/GetSystems500Response.md)
 - [GetSystemsResponse](docs/GetSystemsResponse.md)
 - [InternalServerError](docs/InternalServerError.md)
 - [Meta](docs/Meta.md)
 - [MethodNotAllowedError](docs/MethodNotAllowedError.md)
 - [NotImplementedError](docs/NotImplementedError.md)
 - [RetrieveSystemIdResponse](docs/RetrieveSystemIdResponse.md)
 - [SearchSystemsRequest](docs/SearchSystemsRequest.md)
 - [SearchSystemsRequestSystem](docs/SearchSystemsRequestSystem.md)
 - [SearchSystemsResponse](docs/SearchSystemsResponse.md)
 - [System](docs/System.md)
 - [SystemAddress](docs/SystemAddress.md)
 - [SystemAttachmentTypeEnum](docs/SystemAttachmentTypeEnum.md)
 - [SystemConnectionTypeEnum](docs/SystemConnectionTypeEnum.md)
 - [SystemEnergyLifetimeProductionEnum](docs/SystemEnergyLifetimeProductionEnum.md)
 - [SystemPublicNameEnum](docs/SystemPublicNameEnum.md)
 - [SystemSortByEnum](docs/SystemSortByEnum.md)
 - [SystemStatusEnum](docs/SystemStatusEnum.md)
 - [TelemetryGranularityEnum](docs/TelemetryGranularityEnum.md)
 - [TooManyRequestsError](docs/TooManyRequestsError.md)


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


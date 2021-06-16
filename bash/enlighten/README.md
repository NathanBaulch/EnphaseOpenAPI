# The Enlighten Systems API Bash client

## Overview

This is a Bash client script for accessing The Enlighten Systems API service.

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

All URIs are relative to */api/v2*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*DefaultApi* | [**consumptionLifetime**](docs/DefaultApi.md#consumptionlifetime) | **GET** /systems/{system_id}/consumption_lifetime | 
*DefaultApi* | [**consumptionStats**](docs/DefaultApi.md#consumptionstats) | **GET** /systems/{system_id}/consumption_stats | 
*DefaultApi* | [**energyLifetime**](docs/DefaultApi.md#energylifetime) | **GET** /systems/{system_id}/energy_lifetime | 
*DefaultApi* | [**envoys**](docs/DefaultApi.md#envoys) | **GET** /systems/{system_id}/envoys | 
*DefaultApi* | [**inventory**](docs/DefaultApi.md#inventory) | **GET** /systems/{system_id}/inventory | 
*DefaultApi* | [**invertersSummaryByEnvoyOrSite**](docs/DefaultApi.md#inverterssummarybyenvoyorsite) | **GET** /systems/inverters_summary_by_envoy_or_site | 
*DefaultApi* | [**monthlyProduction**](docs/DefaultApi.md#monthlyproduction) | **GET** /systems/{system_id}/monthly_production | 
*DefaultApi* | [**productionMeterReadings**](docs/DefaultApi.md#productionmeterreadings) | **GET** /systems/{system_id}/production_meter_readings | 
*DefaultApi* | [**rgmStats**](docs/DefaultApi.md#rgmstats) | **GET** /systems/{system_id}/rgm_stats | 
*DefaultApi* | [**searchSystemId**](docs/DefaultApi.md#searchsystemid) | **GET** /systems/search_system_id | 
*DefaultApi* | [**stats**](docs/DefaultApi.md#stats) | **GET** /systems/{system_id}/stats | 
*DefaultApi* | [**summary**](docs/DefaultApi.md#summary) | **GET** /systems/{system_id}/summary | 
*DefaultApi* | [**systems**](docs/DefaultApi.md#systems) | **GET** /systems | 


## Documentation For Models

 - [ClientError](docs/ClientError.md)
 - [ConflictError](docs/ConflictError.md)
 - [ConnectionType](docs/ConnectionType.md)
 - [ConsumptionLifetime](docs/ConsumptionLifetime.md)
 - [ConsumptionStats](docs/ConsumptionStats.md)
 - [ConsumptionStatsIntervals](docs/ConsumptionStatsIntervals.md)
 - [EnergyLifetime](docs/EnergyLifetime.md)
 - [Envoys](docs/Envoys.md)
 - [EnvoysEnvoys](docs/EnvoysEnvoys.md)
 - [Inventory](docs/Inventory.md)
 - [InventoryEnvoys](docs/InventoryEnvoys.md)
 - [InventoryMeters](docs/InventoryMeters.md)
 - [InvertersSummaryByEnvoyOrSite](docs/InvertersSummaryByEnvoyOrSite.md)
 - [InvertersSummaryByEnvoyOrSiteEnergy](docs/InvertersSummaryByEnvoyOrSiteEnergy.md)
 - [InvertersSummaryByEnvoyOrSiteMicroInverters](docs/InvertersSummaryByEnvoyOrSiteMicroInverters.md)
 - [Meta](docs/Meta.md)
 - [MonthlyProduction](docs/MonthlyProduction.md)
 - [MonthlyProductionMeterReadings](docs/MonthlyProductionMeterReadings.md)
 - [ProductionMeterReadings](docs/ProductionMeterReadings.md)
 - [ProductionMeterReadingsMeterReadings](docs/ProductionMeterReadingsMeterReadings.md)
 - [RgmStats](docs/RgmStats.md)
 - [RgmStatsIntervals](docs/RgmStatsIntervals.md)
 - [RgmStatsIntervals1](docs/RgmStatsIntervals1.md)
 - [RgmStatsMeterIntervals](docs/RgmStatsMeterIntervals.md)
 - [SearchSystemId](docs/SearchSystemId.md)
 - [ServerError](docs/ServerError.md)
 - [Stats](docs/Stats.md)
 - [StatsIntervals](docs/StatsIntervals.md)
 - [Status](docs/Status.md)
 - [Summary](docs/Summary.md)
 - [Systems](docs/Systems.md)
 - [SystemsSystems](docs/SystemsSystems.md)


## Documentation For Authorization


## ApiKey


- **Type**: API key
- **API key parameter name**: key
- **Location**: URL query string


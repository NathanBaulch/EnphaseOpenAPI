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

 - [ConnectionType](docs/ConnectionType.md)
 - [InlineResponse200](docs/InlineResponse200.md)
 - [InlineResponse2001](docs/InlineResponse2001.md)
 - [InlineResponse20010](docs/InlineResponse20010.md)
 - [InlineResponse20010Intervals](docs/InlineResponse20010Intervals.md)
 - [InlineResponse20011](docs/InlineResponse20011.md)
 - [InlineResponse20012](docs/InlineResponse20012.md)
 - [InlineResponse2001Envoys](docs/InlineResponse2001Envoys.md)
 - [InlineResponse2002](docs/InlineResponse2002.md)
 - [InlineResponse2002Systems](docs/InlineResponse2002Systems.md)
 - [InlineResponse2003](docs/InlineResponse2003.md)
 - [InlineResponse2003Envoys](docs/InlineResponse2003Envoys.md)
 - [InlineResponse2003Meters](docs/InlineResponse2003Meters.md)
 - [InlineResponse2004](docs/InlineResponse2004.md)
 - [InlineResponse2004Energy](docs/InlineResponse2004Energy.md)
 - [InlineResponse2004MicroInverters](docs/InlineResponse2004MicroInverters.md)
 - [InlineResponse2005](docs/InlineResponse2005.md)
 - [InlineResponse2005MeterReadings](docs/InlineResponse2005MeterReadings.md)
 - [InlineResponse2006](docs/InlineResponse2006.md)
 - [InlineResponse2006MeterReadings](docs/InlineResponse2006MeterReadings.md)
 - [InlineResponse2007](docs/InlineResponse2007.md)
 - [InlineResponse2007Intervals](docs/InlineResponse2007Intervals.md)
 - [InlineResponse2007Intervals1](docs/InlineResponse2007Intervals1.md)
 - [InlineResponse2007MeterIntervals](docs/InlineResponse2007MeterIntervals.md)
 - [InlineResponse2008](docs/InlineResponse2008.md)
 - [InlineResponse2008Intervals](docs/InlineResponse2008Intervals.md)
 - [InlineResponse2009](docs/InlineResponse2009.md)
 - [InlineResponse409](docs/InlineResponse409.md)
 - [InlineResponse4XX](docs/InlineResponse4XX.md)
 - [InlineResponse5XX](docs/InlineResponse5XX.md)
 - [Meta](docs/Meta.md)
 - [Status](docs/Status.md)


## Documentation For Authorization


## ApiKey


- **Type**: API key
- **API key parameter name**: key
- **Location**: URL query string


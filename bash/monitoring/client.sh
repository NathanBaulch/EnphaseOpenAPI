#!/usr/bin/env bash

# !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
# !
# ! Note:
# !
# ! THIS SCRIPT HAS BEEN AUTOMATICALLY GENERATED USING
# ! openapi-generator (https://openapi-generator.tech)
# ! FROM OPENAPI SPECIFICATION IN JSON.
# !
# !
# !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

#
# This is a Bash client for The Enphase Monitoring API.
#
# LICENSE:
# https://enphase.com/api-license-agreement-v4
#
# CONTACT:
# 
#
# MORE INFORMATION:
# 
#

# For improved pattern matching in case statements
shopt -s extglob

###############################################################################
#
# Make sure Bash is at least in version 4.3
#
###############################################################################
if ! ( (("${BASH_VERSION:0:1}" == "4")) && (("${BASH_VERSION:2:1}" >= "3")) ) \
  && ! (("${BASH_VERSION:0:1}" >= "5")); then
    echo ""
    echo "Sorry - your Bash version is ${BASH_VERSION}"
    echo ""
    echo "You need at least Bash 4.3 to run this script."
    echo ""
    exit 1
fi

###############################################################################
#
# Global variables
#
###############################################################################

##
# The filename of this script for help messages
script_name=$(basename "$0")

##
# Map for headers passed after operation as KEY:VALUE
declare -A header_arguments


##
# Map for operation parameters passed after operation as PARAMETER=VALUE
# These will be mapped to appropriate path or query parameters
# The values in operation_parameters are arrays, so that multiple values
# can be provided for the same parameter if allowed by API specification
declare -A operation_parameters

##
# Declare colors with autodetection if output is terminal
if [ -t 1 ]; then
    RED="$(tput setaf 1)"
    GREEN="$(tput setaf 2)"
    YELLOW="$(tput setaf 3)"
    BLUE="$(tput setaf 4)"
    MAGENTA="$(tput setaf 5)"
    CYAN="$(tput setaf 6)"
    WHITE="$(tput setaf 7)"
    BOLD="$(tput bold)"
    OFF="$(tput sgr0)"
else
    RED=""
    GREEN=""
    YELLOW=""
    BLUE=""
    MAGENTA=""
    CYAN=""
    WHITE=""
    BOLD=""
    OFF=""
fi

declare -a result_color_table=( "$WHITE" "$WHITE" "$GREEN" "$YELLOW" "$WHITE" "$MAGENTA" "$WHITE" )

##
# This array stores the minimum number of required occurrences for parameter
# 0 - optional
# 1 - required
declare -A operation_parameters_minimum_occurrences
operation_parameters_minimum_occurrences["getSystemAcbDeviceTelemetry:::system_id"]=1
operation_parameters_minimum_occurrences["getSystemAcbDeviceTelemetry:::serial_no"]=1
operation_parameters_minimum_occurrences["getSystemAcbDeviceTelemetry:::start_at"]=0
operation_parameters_minimum_occurrences["getSystemAcbDeviceTelemetry:::granularity"]=0
operation_parameters_minimum_occurrences["getSystemEnchargeDeviceTelemetry:::system_id"]=1
operation_parameters_minimum_occurrences["getSystemEnchargeDeviceTelemetry:::serial_no"]=1
operation_parameters_minimum_occurrences["getSystemEnchargeDeviceTelemetry:::start_at"]=0
operation_parameters_minimum_occurrences["getSystemEnchargeDeviceTelemetry:::granularity"]=0
operation_parameters_minimum_occurrences["getSystemMicroDeviceTelemetry:::system_id"]=1
operation_parameters_minimum_occurrences["getSystemMicroDeviceTelemetry:::serial_no"]=1
operation_parameters_minimum_occurrences["getSystemMicroDeviceTelemetry:::start_at"]=0
operation_parameters_minimum_occurrences["getSystemMicroDeviceTelemetry:::granularity"]=0
operation_parameters_minimum_occurrences["getSystemBatteryLifetime:::system_id"]=1
operation_parameters_minimum_occurrences["getSystemBatteryLifetime:::start_date"]=0
operation_parameters_minimum_occurrences["getSystemBatteryLifetime:::end_date"]=0
operation_parameters_minimum_occurrences["getSystemBatteryTelemetry:::system_id"]=1
operation_parameters_minimum_occurrences["getSystemBatteryTelemetry:::start_at"]=0
operation_parameters_minimum_occurrences["getSystemBatteryTelemetry:::granularity"]=0
operation_parameters_minimum_occurrences["getSystemConsumptionLifetime:::system_id"]=1
operation_parameters_minimum_occurrences["getSystemConsumptionLifetime:::start_date"]=0
operation_parameters_minimum_occurrences["getSystemConsumptionLifetime:::end_date"]=0
operation_parameters_minimum_occurrences["getSystemConsumptionMeterTelemetry:::system_id"]=1
operation_parameters_minimum_occurrences["getSystemConsumptionMeterTelemetry:::start_at"]=0
operation_parameters_minimum_occurrences["getSystemConsumptionMeterTelemetry:::granularity"]=0
operation_parameters_minimum_occurrences["getSystemEnergyExportLifetime:::system_id"]=1
operation_parameters_minimum_occurrences["getSystemEnergyExportLifetime:::start_date"]=0
operation_parameters_minimum_occurrences["getSystemEnergyExportLifetime:::end_date"]=0
operation_parameters_minimum_occurrences["getSystemEnergyExportTelemetry:::system_id"]=1
operation_parameters_minimum_occurrences["getSystemEnergyExportTelemetry:::start_at"]=0
operation_parameters_minimum_occurrences["getSystemEnergyExportTelemetry:::granularity"]=0
operation_parameters_minimum_occurrences["getSystemEnergyImportLifetime:::system_id"]=1
operation_parameters_minimum_occurrences["getSystemEnergyImportLifetime:::start_date"]=0
operation_parameters_minimum_occurrences["getSystemEnergyImportLifetime:::end_date"]=0
operation_parameters_minimum_occurrences["getSystemEnergyImportTelemetry:::system_id"]=1
operation_parameters_minimum_occurrences["getSystemEnergyImportTelemetry:::start_at"]=0
operation_parameters_minimum_occurrences["getSystemEnergyImportTelemetry:::granularity"]=0
operation_parameters_minimum_occurrences["getSystemEnergyLifetime:::system_id"]=1
operation_parameters_minimum_occurrences["getSystemEnergyLifetime:::start_date"]=0
operation_parameters_minimum_occurrences["getSystemEnergyLifetime:::end_date"]=0
operation_parameters_minimum_occurrences["getSystemEnergyLifetime:::production"]=0
operation_parameters_minimum_occurrences["getSystemProductionMeterReadings:::system_id"]=1
operation_parameters_minimum_occurrences["getSystemProductionMeterReadings:::end_at"]=0
operation_parameters_minimum_occurrences["getSystemProductionMeterTelemetry:::system_id"]=1
operation_parameters_minimum_occurrences["getSystemProductionMeterTelemetry:::start_at"]=0
operation_parameters_minimum_occurrences["getSystemProductionMeterTelemetry:::granularity"]=0
operation_parameters_minimum_occurrences["getSystemProductionMicroTelemetry:::system_id"]=1
operation_parameters_minimum_occurrences["getSystemProductionMicroTelemetry:::start_at"]=0
operation_parameters_minimum_occurrences["getSystemProductionMicroTelemetry:::granularity"]=0
operation_parameters_minimum_occurrences["getSystemRgmStats:::system_id"]=1
operation_parameters_minimum_occurrences["getSystemRgmStats:::start_at"]=0
operation_parameters_minimum_occurrences["getSystemRgmStats:::end_at"]=0
operation_parameters_minimum_occurrences["streamSystemLiveData:::system_id"]=1
operation_parameters_minimum_occurrences["streamSystemLiveData:::duration"]=0
operation_parameters_minimum_occurrences["getSystemBatterySettings:::system_id"]=1
operation_parameters_minimum_occurrences["getSystemGridStatusSettings:::system_id"]=1
operation_parameters_minimum_occurrences["getSystemLoadControlSettings:::system_id"]=1
operation_parameters_minimum_occurrences["getSystemStormGuardSettings:::system_id"]=1
operation_parameters_minimum_occurrences["updateSystemBatterySettings:::system_id"]=1
operation_parameters_minimum_occurrences["updateSystemBatterySettings:::battery_settings"]=0
operation_parameters_minimum_occurrences["updateSystemLoadControlSettings:::system_id"]=1
operation_parameters_minimum_occurrences["updateSystemLoadControlSettings:::UpdateSystemLoadControlSettingsRequest"]=0
operation_parameters_minimum_occurrences["updateSystemStormGuardSettings:::system_id"]=1
operation_parameters_minimum_occurrences["updateSystemStormGuardSettings:::storm_guard"]=0
operation_parameters_minimum_occurrences["getInvertersSummaryByEnvoyOrSite:::site_id"]=0
operation_parameters_minimum_occurrences["getInvertersSummaryByEnvoyOrSite:::envoy_serial_number"]=0
operation_parameters_minimum_occurrences["getSystem:::system_id"]=1
operation_parameters_minimum_occurrences["getSystemDevices:::system_id"]=1
operation_parameters_minimum_occurrences["getSystemSummary:::system_id"]=1
operation_parameters_minimum_occurrences["getSystems:::page"]=0
operation_parameters_minimum_occurrences["getSystems:::size"]=0
operation_parameters_minimum_occurrences["getSystems:::sort_by"]=0
operation_parameters_minimum_occurrences["retrieveSystemId:::serial_num"]=1
operation_parameters_minimum_occurrences["searchSystems:::page"]=0
operation_parameters_minimum_occurrences["searchSystems:::size"]=0
operation_parameters_minimum_occurrences["searchSystems:::params"]=0

##
# This array stores the maximum number of allowed occurrences for parameter
# 1 - single value
# 2 - 2 values
# N - N values
# 0 - unlimited
declare -A operation_parameters_maximum_occurrences
operation_parameters_maximum_occurrences["getSystemAcbDeviceTelemetry:::system_id"]=0
operation_parameters_maximum_occurrences["getSystemAcbDeviceTelemetry:::serial_no"]=0
operation_parameters_maximum_occurrences["getSystemAcbDeviceTelemetry:::start_at"]=0
operation_parameters_maximum_occurrences["getSystemAcbDeviceTelemetry:::granularity"]=0
operation_parameters_maximum_occurrences["getSystemEnchargeDeviceTelemetry:::system_id"]=0
operation_parameters_maximum_occurrences["getSystemEnchargeDeviceTelemetry:::serial_no"]=0
operation_parameters_maximum_occurrences["getSystemEnchargeDeviceTelemetry:::start_at"]=0
operation_parameters_maximum_occurrences["getSystemEnchargeDeviceTelemetry:::granularity"]=0
operation_parameters_maximum_occurrences["getSystemMicroDeviceTelemetry:::system_id"]=0
operation_parameters_maximum_occurrences["getSystemMicroDeviceTelemetry:::serial_no"]=0
operation_parameters_maximum_occurrences["getSystemMicroDeviceTelemetry:::start_at"]=0
operation_parameters_maximum_occurrences["getSystemMicroDeviceTelemetry:::granularity"]=0
operation_parameters_maximum_occurrences["getSystemBatteryLifetime:::system_id"]=0
operation_parameters_maximum_occurrences["getSystemBatteryLifetime:::start_date"]=0
operation_parameters_maximum_occurrences["getSystemBatteryLifetime:::end_date"]=0
operation_parameters_maximum_occurrences["getSystemBatteryTelemetry:::system_id"]=0
operation_parameters_maximum_occurrences["getSystemBatteryTelemetry:::start_at"]=0
operation_parameters_maximum_occurrences["getSystemBatteryTelemetry:::granularity"]=0
operation_parameters_maximum_occurrences["getSystemConsumptionLifetime:::system_id"]=0
operation_parameters_maximum_occurrences["getSystemConsumptionLifetime:::start_date"]=0
operation_parameters_maximum_occurrences["getSystemConsumptionLifetime:::end_date"]=0
operation_parameters_maximum_occurrences["getSystemConsumptionMeterTelemetry:::system_id"]=0
operation_parameters_maximum_occurrences["getSystemConsumptionMeterTelemetry:::start_at"]=0
operation_parameters_maximum_occurrences["getSystemConsumptionMeterTelemetry:::granularity"]=0
operation_parameters_maximum_occurrences["getSystemEnergyExportLifetime:::system_id"]=0
operation_parameters_maximum_occurrences["getSystemEnergyExportLifetime:::start_date"]=0
operation_parameters_maximum_occurrences["getSystemEnergyExportLifetime:::end_date"]=0
operation_parameters_maximum_occurrences["getSystemEnergyExportTelemetry:::system_id"]=0
operation_parameters_maximum_occurrences["getSystemEnergyExportTelemetry:::start_at"]=0
operation_parameters_maximum_occurrences["getSystemEnergyExportTelemetry:::granularity"]=0
operation_parameters_maximum_occurrences["getSystemEnergyImportLifetime:::system_id"]=0
operation_parameters_maximum_occurrences["getSystemEnergyImportLifetime:::start_date"]=0
operation_parameters_maximum_occurrences["getSystemEnergyImportLifetime:::end_date"]=0
operation_parameters_maximum_occurrences["getSystemEnergyImportTelemetry:::system_id"]=0
operation_parameters_maximum_occurrences["getSystemEnergyImportTelemetry:::start_at"]=0
operation_parameters_maximum_occurrences["getSystemEnergyImportTelemetry:::granularity"]=0
operation_parameters_maximum_occurrences["getSystemEnergyLifetime:::system_id"]=0
operation_parameters_maximum_occurrences["getSystemEnergyLifetime:::start_date"]=0
operation_parameters_maximum_occurrences["getSystemEnergyLifetime:::end_date"]=0
operation_parameters_maximum_occurrences["getSystemEnergyLifetime:::production"]=0
operation_parameters_maximum_occurrences["getSystemProductionMeterReadings:::system_id"]=0
operation_parameters_maximum_occurrences["getSystemProductionMeterReadings:::end_at"]=0
operation_parameters_maximum_occurrences["getSystemProductionMeterTelemetry:::system_id"]=0
operation_parameters_maximum_occurrences["getSystemProductionMeterTelemetry:::start_at"]=0
operation_parameters_maximum_occurrences["getSystemProductionMeterTelemetry:::granularity"]=0
operation_parameters_maximum_occurrences["getSystemProductionMicroTelemetry:::system_id"]=0
operation_parameters_maximum_occurrences["getSystemProductionMicroTelemetry:::start_at"]=0
operation_parameters_maximum_occurrences["getSystemProductionMicroTelemetry:::granularity"]=0
operation_parameters_maximum_occurrences["getSystemRgmStats:::system_id"]=0
operation_parameters_maximum_occurrences["getSystemRgmStats:::start_at"]=0
operation_parameters_maximum_occurrences["getSystemRgmStats:::end_at"]=0
operation_parameters_maximum_occurrences["streamSystemLiveData:::system_id"]=0
operation_parameters_maximum_occurrences["streamSystemLiveData:::duration"]=0
operation_parameters_maximum_occurrences["getSystemBatterySettings:::system_id"]=0
operation_parameters_maximum_occurrences["getSystemGridStatusSettings:::system_id"]=0
operation_parameters_maximum_occurrences["getSystemLoadControlSettings:::system_id"]=0
operation_parameters_maximum_occurrences["getSystemStormGuardSettings:::system_id"]=0
operation_parameters_maximum_occurrences["updateSystemBatterySettings:::system_id"]=0
operation_parameters_maximum_occurrences["updateSystemBatterySettings:::battery_settings"]=0
operation_parameters_maximum_occurrences["updateSystemLoadControlSettings:::system_id"]=0
operation_parameters_maximum_occurrences["updateSystemLoadControlSettings:::UpdateSystemLoadControlSettingsRequest"]=0
operation_parameters_maximum_occurrences["updateSystemStormGuardSettings:::system_id"]=0
operation_parameters_maximum_occurrences["updateSystemStormGuardSettings:::storm_guard"]=0
operation_parameters_maximum_occurrences["getInvertersSummaryByEnvoyOrSite:::site_id"]=0
operation_parameters_maximum_occurrences["getInvertersSummaryByEnvoyOrSite:::envoy_serial_number"]=0
operation_parameters_maximum_occurrences["getSystem:::system_id"]=0
operation_parameters_maximum_occurrences["getSystemDevices:::system_id"]=0
operation_parameters_maximum_occurrences["getSystemSummary:::system_id"]=0
operation_parameters_maximum_occurrences["getSystems:::page"]=0
operation_parameters_maximum_occurrences["getSystems:::size"]=0
operation_parameters_maximum_occurrences["getSystems:::sort_by"]=0
operation_parameters_maximum_occurrences["retrieveSystemId:::serial_num"]=0
operation_parameters_maximum_occurrences["searchSystems:::page"]=0
operation_parameters_maximum_occurrences["searchSystems:::size"]=0
operation_parameters_maximum_occurrences["searchSystems:::params"]=0

##
# The type of collection for specifying multiple values for parameter:
# - multi, csv, ssv, tsv
declare -A operation_parameters_collection_type
operation_parameters_collection_type["getSystemAcbDeviceTelemetry:::system_id"]=""
operation_parameters_collection_type["getSystemAcbDeviceTelemetry:::serial_no"]=""
operation_parameters_collection_type["getSystemAcbDeviceTelemetry:::start_at"]=""
operation_parameters_collection_type["getSystemAcbDeviceTelemetry:::granularity"]=""
operation_parameters_collection_type["getSystemEnchargeDeviceTelemetry:::system_id"]=""
operation_parameters_collection_type["getSystemEnchargeDeviceTelemetry:::serial_no"]=""
operation_parameters_collection_type["getSystemEnchargeDeviceTelemetry:::start_at"]=""
operation_parameters_collection_type["getSystemEnchargeDeviceTelemetry:::granularity"]=""
operation_parameters_collection_type["getSystemMicroDeviceTelemetry:::system_id"]=""
operation_parameters_collection_type["getSystemMicroDeviceTelemetry:::serial_no"]=""
operation_parameters_collection_type["getSystemMicroDeviceTelemetry:::start_at"]=""
operation_parameters_collection_type["getSystemMicroDeviceTelemetry:::granularity"]=""
operation_parameters_collection_type["getSystemBatteryLifetime:::system_id"]=""
operation_parameters_collection_type["getSystemBatteryLifetime:::start_date"]=""
operation_parameters_collection_type["getSystemBatteryLifetime:::end_date"]=""
operation_parameters_collection_type["getSystemBatteryTelemetry:::system_id"]=""
operation_parameters_collection_type["getSystemBatteryTelemetry:::start_at"]=""
operation_parameters_collection_type["getSystemBatteryTelemetry:::granularity"]=""
operation_parameters_collection_type["getSystemConsumptionLifetime:::system_id"]=""
operation_parameters_collection_type["getSystemConsumptionLifetime:::start_date"]=""
operation_parameters_collection_type["getSystemConsumptionLifetime:::end_date"]=""
operation_parameters_collection_type["getSystemConsumptionMeterTelemetry:::system_id"]=""
operation_parameters_collection_type["getSystemConsumptionMeterTelemetry:::start_at"]=""
operation_parameters_collection_type["getSystemConsumptionMeterTelemetry:::granularity"]=""
operation_parameters_collection_type["getSystemEnergyExportLifetime:::system_id"]=""
operation_parameters_collection_type["getSystemEnergyExportLifetime:::start_date"]=""
operation_parameters_collection_type["getSystemEnergyExportLifetime:::end_date"]=""
operation_parameters_collection_type["getSystemEnergyExportTelemetry:::system_id"]=""
operation_parameters_collection_type["getSystemEnergyExportTelemetry:::start_at"]=""
operation_parameters_collection_type["getSystemEnergyExportTelemetry:::granularity"]=""
operation_parameters_collection_type["getSystemEnergyImportLifetime:::system_id"]=""
operation_parameters_collection_type["getSystemEnergyImportLifetime:::start_date"]=""
operation_parameters_collection_type["getSystemEnergyImportLifetime:::end_date"]=""
operation_parameters_collection_type["getSystemEnergyImportTelemetry:::system_id"]=""
operation_parameters_collection_type["getSystemEnergyImportTelemetry:::start_at"]=""
operation_parameters_collection_type["getSystemEnergyImportTelemetry:::granularity"]=""
operation_parameters_collection_type["getSystemEnergyLifetime:::system_id"]=""
operation_parameters_collection_type["getSystemEnergyLifetime:::start_date"]=""
operation_parameters_collection_type["getSystemEnergyLifetime:::end_date"]=""
operation_parameters_collection_type["getSystemEnergyLifetime:::production"]=""
operation_parameters_collection_type["getSystemProductionMeterReadings:::system_id"]=""
operation_parameters_collection_type["getSystemProductionMeterReadings:::end_at"]=""
operation_parameters_collection_type["getSystemProductionMeterTelemetry:::system_id"]=""
operation_parameters_collection_type["getSystemProductionMeterTelemetry:::start_at"]=""
operation_parameters_collection_type["getSystemProductionMeterTelemetry:::granularity"]=""
operation_parameters_collection_type["getSystemProductionMicroTelemetry:::system_id"]=""
operation_parameters_collection_type["getSystemProductionMicroTelemetry:::start_at"]=""
operation_parameters_collection_type["getSystemProductionMicroTelemetry:::granularity"]=""
operation_parameters_collection_type["getSystemRgmStats:::system_id"]=""
operation_parameters_collection_type["getSystemRgmStats:::start_at"]=""
operation_parameters_collection_type["getSystemRgmStats:::end_at"]=""
operation_parameters_collection_type["streamSystemLiveData:::system_id"]=""
operation_parameters_collection_type["streamSystemLiveData:::duration"]=""
operation_parameters_collection_type["getSystemBatterySettings:::system_id"]=""
operation_parameters_collection_type["getSystemGridStatusSettings:::system_id"]=""
operation_parameters_collection_type["getSystemLoadControlSettings:::system_id"]=""
operation_parameters_collection_type["getSystemStormGuardSettings:::system_id"]=""
operation_parameters_collection_type["updateSystemBatterySettings:::system_id"]=""
operation_parameters_collection_type["updateSystemBatterySettings:::battery_settings"]=""
operation_parameters_collection_type["updateSystemLoadControlSettings:::system_id"]=""
operation_parameters_collection_type["updateSystemLoadControlSettings:::UpdateSystemLoadControlSettingsRequest"]=""
operation_parameters_collection_type["updateSystemStormGuardSettings:::system_id"]=""
operation_parameters_collection_type["updateSystemStormGuardSettings:::storm_guard"]=""
operation_parameters_collection_type["getInvertersSummaryByEnvoyOrSite:::site_id"]=""
operation_parameters_collection_type["getInvertersSummaryByEnvoyOrSite:::envoy_serial_number"]=""
operation_parameters_collection_type["getSystem:::system_id"]=""
operation_parameters_collection_type["getSystemDevices:::system_id"]=""
operation_parameters_collection_type["getSystemSummary:::system_id"]=""
operation_parameters_collection_type["getSystems:::page"]=""
operation_parameters_collection_type["getSystems:::size"]=""
operation_parameters_collection_type["getSystems:::sort_by"]=""
operation_parameters_collection_type["retrieveSystemId:::serial_num"]=""
operation_parameters_collection_type["searchSystems:::page"]=""
operation_parameters_collection_type["searchSystems:::size"]=""
operation_parameters_collection_type["searchSystems:::params"]=""


##
# Map for body parameters passed after operation as
# PARAMETER==STRING_VALUE or PARAMETER:=NUMERIC_VALUE
# These will be mapped to top level json keys ( { "PARAMETER": "VALUE" })
declare -A body_parameters

##
# These arguments will be directly passed to cURL
curl_arguments=""

##
# The host for making the request
host=""

##
# The user credentials for basic authentication
basic_auth_credential=""


##
# If true, the script will only output the actual cURL command that would be
# used
print_curl=false

##
# The operation ID passed on the command line
operation=""

##
# The provided Accept header value
header_accept=""

##
# The provided Content-type header value
header_content_type=""

##
# If there is any body content on the stdin pass it to the body of the request
body_content_temp_file=""

##
# If this variable is set to true, the request will be performed even
# if parameters for required query, header or body values are not provided
# (path parameters are still required).
force=false

##
# Declare some mime types abbreviations for easier content-type and accepts
# headers specification
declare -A mime_type_abbreviations
# text/*
mime_type_abbreviations["text"]="text/plain"
mime_type_abbreviations["html"]="text/html"
mime_type_abbreviations["md"]="text/x-markdown"
mime_type_abbreviations["csv"]="text/csv"
mime_type_abbreviations["css"]="text/css"
mime_type_abbreviations["rtf"]="text/rtf"
# application/*
mime_type_abbreviations["json"]="application/json"
mime_type_abbreviations["xml"]="application/xml"
mime_type_abbreviations["yaml"]="application/yaml"
mime_type_abbreviations["js"]="application/javascript"
mime_type_abbreviations["bin"]="application/octet-stream"
mime_type_abbreviations["rdf"]="application/rdf+xml"
# image/*
mime_type_abbreviations["jpg"]="image/jpeg"
mime_type_abbreviations["png"]="image/png"
mime_type_abbreviations["gif"]="image/gif"
mime_type_abbreviations["bmp"]="image/bmp"
mime_type_abbreviations["tiff"]="image/tiff"


##############################################################################
#
# Escape special URL characters
# Based on table at http://www.w3schools.com/tags/ref_urlencode.asp
#
##############################################################################
url_escape() {
    local raw_url="$1"

    value=$(sed -e 's/ /%20/g' \
       -e 's/!/%21/g' \
       -e 's/"/%22/g' \
       -e 's/#/%23/g' \
       -e 's/\&/%26/g' \
       -e 's/'\''/%28/g' \
       -e 's/(/%28/g' \
       -e 's/)/%29/g' \
       -e 's/:/%3A/g' \
       -e 's/\\t/%09/g' \
       -e 's/?/%3F/g' <<<"$raw_url");

    echo "$value"
}

##############################################################################
#
# Lookup the mime type abbreviation in the mime_type_abbreviations array.
# If not present assume the user provided a valid mime type
#
##############################################################################
lookup_mime_type() {
    local mime_type="$1"

    if [[ ${mime_type_abbreviations[$mime_type]} ]]; then
        echo "${mime_type_abbreviations[$mime_type]}"
    else
        echo "$mime_type"
    fi
}

##############################################################################
#
# Converts an associative array into a list of cURL header
# arguments (-H "KEY: VALUE")
#
##############################################################################
header_arguments_to_curl() {
    local headers_curl=""

    for key in "${!header_arguments[@]}"; do
        headers_curl+="-H \"${key}: ${header_arguments[${key}]}\" "
    done
    headers_curl+=" "

    echo "${headers_curl}"
}

##############################################################################
#
# Converts an associative array into a simple JSON with keys as top
# level object attributes
#
# \todo Add conversion of more complex attributes using paths
#
##############################################################################
body_parameters_to_json() {
    local body_json="-d '{"
    local count=0
    for key in "${!body_parameters[@]}"; do
        if [[ $((count++)) -gt 0 ]]; then
            body_json+=", "
        fi
        body_json+="\"${key}\": ${body_parameters[${key}]}"
    done
    body_json+="}'"

    if [[ "${#body_parameters[@]}" -eq 0 ]]; then
        echo ""
    else
        echo "${body_json}"
    fi
}

##############################################################################
#
# Converts an associative array into form urlencoded string
#
##############################################################################
body_parameters_to_form_urlencoded() {
    local body_form_urlencoded="-d '"
    local count=0
    for key in "${!body_parameters[@]}"; do
        if [[ $((count++)) -gt 0 ]]; then
            body_form_urlencoded+="&"
        fi
        body_form_urlencoded+="${key}=${body_parameters[${key}]}"
    done
    body_form_urlencoded+="'"

    if [[ "${#body_parameters[@]}" -eq 0 ]]; then
        echo ""
    else
        echo "${body_form_urlencoded}"
    fi
}

##############################################################################
#
# Helper method for showing error because for example echo in
# build_request_path() is evaluated as part of command line not printed on
# output. Anyway better idea for resource clean up ;-).
#
##############################################################################
ERROR_MSG=""
function finish {
    if [[ -n "$ERROR_MSG" ]]; then
        echo >&2 "${OFF}${RED}$ERROR_MSG"
        echo >&2 "${OFF}Check usage: '${script_name} --help'"
    fi
}
trap finish EXIT


##############################################################################
#
# Validate and build request path including query parameters
#
##############################################################################
build_request_path() {
    local path_template=$1
    local -n path_params=$2
    local -n query_params=$3


    #
    # Check input parameters count against minimum and maximum required
    #
    if [[ "$force" = false ]]; then
        local was_error=""
        for qparam in "${query_params[@]}" "${path_params[@]}"; do
            local parameter_values
            mapfile -t parameter_values < <(sed -e 's/'":::"'/\n/g' <<<"${operation_parameters[$qparam]}")

            #
            # Check if the number of provided values is not less than minimum required
            #
            if [[ ${#parameter_values[@]} -lt ${operation_parameters_minimum_occurrences["${operation}:::${qparam}"]} ]]; then
                echo "ERROR: Too few values provided for '${qparam}' parameter."
                was_error=true
            fi

            #
            # Check if the number of provided values is not more than maximum
            #
            if [[ ${operation_parameters_maximum_occurrences["${operation}:::${qparam}"]} -gt 0 \
                  && ${#parameter_values[@]} -gt ${operation_parameters_maximum_occurrences["${operation}:::${qparam}"]} ]]; then
                echo "ERROR: Too many values provided for '${qparam}' parameter"
                was_error=true
            fi
        done
        if [[ -n "$was_error" ]]; then
            exit 1
        fi
    fi

    # First replace all path parameters in the path
    for pparam in "${path_params[@]}"; do
        local path_regex="(.*)(\\{$pparam\\})(.*)"
        if [[ $path_template =~ $path_regex ]]; then
            path_template=${BASH_REMATCH[1]}${operation_parameters[$pparam]}${BASH_REMATCH[3]}
        fi
    done

    local query_request_part=""

    for qparam in "${query_params[@]}"; do
        if [[ "${operation_parameters[$qparam]}" == "" ]]; then
            continue
        fi

        # Get the array of parameter values
        local parameter_value=""
        local parameter_values
        mapfile -t parameter_values < <(sed -e 's/'":::"'/\n/g' <<<"${operation_parameters[$qparam]}")


        if [[ ${qparam} == "key" ]]; then
            if [[ -n "${parameter_values[*]}" ]]; then
                parameter_value+="${qparam}=${parameter_values}"
            else
                echo "Missing ApiKey!!! You have to provide on command line option 'key=...'"
                exit 1
            fi
            continue
        fi

        #
        # Append parameters without specific cardinality
        #
        local collection_type="${operation_parameters_collection_type["${operation}:::${qparam}"]}"
        if [[ "${collection_type}" == "" ]]; then
            local vcount=0
            for qvalue in "${parameter_values[@]}"; do
                if [[ $((vcount++)) -gt 0 ]]; then
                    parameter_value+="&"
                fi
                parameter_value+="${qparam}=${qvalue}"
            done
        #
        # Append parameters specified as 'multi' collections i.e. param=value1&param=value2&...
        #
        elif [[ "${collection_type}" == "multi" ]]; then
            local vcount=0
            for qvalue in "${parameter_values[@]}"; do
                if [[ $((vcount++)) -gt 0 ]]; then
                    parameter_value+="&"
                fi
                parameter_value+="${qparam}=${qvalue}"
            done
        #
        # Append parameters specified as 'csv' collections i.e. param=value1,value2,...
        #
        elif [[ "${collection_type}" == "csv" ]]; then
            parameter_value+="${qparam}="
            local vcount=0
            for qvalue in "${parameter_values[@]}"; do
                if [[ $((vcount++)) -gt 0 ]]; then
                    parameter_value+=","
                fi
                parameter_value+="${qvalue}"
            done
        #
        # Append parameters specified as 'ssv' collections i.e. param="value1 value2 ..."
        #
        elif [[ "${collection_type}" == "ssv" ]]; then
            parameter_value+="${qparam}="
            local vcount=0
            for qvalue in "${parameter_values[@]}"; do
                if [[ $((vcount++)) -gt 0 ]]; then
                    parameter_value+=" "
                fi
                parameter_value+="${qvalue}"
            done
        #
        # Append parameters specified as 'tsv' collections i.e. param="value1\tvalue2\t..."
        #
        elif [[ "${collection_type}" == "tsv" ]]; then
            parameter_value+="${qparam}="
            local vcount=0
            for qvalue in "${parameter_values[@]}"; do
                if [[ $((vcount++)) -gt 0 ]]; then
                    parameter_value+="\\t"
                fi
                parameter_value+="${qvalue}"
            done
        else
            echo "Unsupported collection format \"${collection_type}\""
            exit 1
        fi

        if [[ -n "${parameter_value}" ]]; then
            if [[ -n "${query_request_part}" ]]; then
                query_request_part+="&"
            fi
            query_request_part+="${parameter_value}"
        fi

    done


    # Now append query parameters - if any
    if [[ -n "${query_request_part}" ]]; then
        path_template+="?${query_request_part}"
    fi

    echo "$path_template"
}



###############################################################################
#
# Print main help message
#
###############################################################################
print_help() {
cat <<EOF

${BOLD}${WHITE}The Enphase Monitoring API command line client (API version 4.0)${OFF}

${BOLD}${WHITE}Usage${OFF}

  ${GREEN}${script_name}${OFF} [-h|--help] [-V|--version] [--about] [${RED}<curl-options>${OFF}]
           [-ac|--accept ${GREEN}<mime-type>${OFF}] [-ct,--content-type ${GREEN}<mime-type>${OFF}]
           [--host ${CYAN}<url>${OFF}] [--dry-run] [-nc|--no-colors] ${YELLOW}<operation>${OFF} [-h|--help]
           [${BLUE}<headers>${OFF}] [${MAGENTA}<parameters>${OFF}] [${MAGENTA}<body-parameters>${OFF}]

  - ${CYAN}<url>${OFF} - endpoint of the REST service without basepath

  - ${RED}<curl-options>${OFF} - any valid cURL options can be passed before ${YELLOW}<operation>${OFF}
  - ${GREEN}<mime-type>${OFF} - either full mime-type or one of supported abbreviations:
                   (text, html, md, csv, css, rtf, json, xml, yaml, js, bin,
                    rdf, jpg, png, gif, bmp, tiff)
  - ${BLUE}<headers>${OFF} - HTTP headers can be passed in the form ${YELLOW}HEADER${OFF}:${BLUE}VALUE${OFF}
  - ${MAGENTA}<parameters>${OFF} - REST operation parameters can be passed in the following
                   forms:
                   * ${YELLOW}KEY${OFF}=${BLUE}VALUE${OFF} - path or query parameters
  - ${MAGENTA}<body-parameters>${OFF} - simple JSON body content (first level only) can be build
                        using the following arguments:
                        * ${YELLOW}KEY${OFF}==${BLUE}VALUE${OFF} - body parameters which will be added to body
                                      JSON as '{ ..., "${YELLOW}KEY${OFF}": "${BLUE}VALUE${OFF}", ... }'
                        * ${YELLOW}KEY${OFF}:=${BLUE}VALUE${OFF} - body parameters which will be added to body
                                      JSON as '{ ..., "${YELLOW}KEY${OFF}": ${BLUE}VALUE${OFF}, ... }'

EOF
    echo -e "${BOLD}${WHITE}Authentication methods${OFF}"
    echo -e ""
    echo -e "  - ${MAGENTA}OAuth2 (flow: accessCode)${OFF}"
    echo -e "      Authorization URL: "
    echo -e "        * https://api.enphaseenergy.com/oauth/authorize"
    echo -e "      Token URL: "
    echo -e "        * https://api.enphaseenergy.com/oauth/token"
    echo -e "      Scopes:"
    echo -e "  - ${BLUE}Api-key${OFF} - add '${RED}key=<api-key>${OFF}' after ${YELLOW}<operation>${OFF}"
    
    echo ""
    echo -e "${BOLD}${WHITE}Operations (grouped by tags)${OFF}"
    echo ""
    echo -e "${BOLD}${WHITE}[deviceLevelProductionMonitoring]${OFF}"
read -r -d '' ops <<EOF
  ${CYAN}getSystemAcbDeviceTelemetry${OFF};Retrieves telemetry for single ACB (AUTH) (AUTH)
  ${CYAN}getSystemEnchargeDeviceTelemetry${OFF};Retrieves telemetry for single Encharge (AUTH) (AUTH)
  ${CYAN}getSystemMicroDeviceTelemetry${OFF};Retrieves telemetry for single micro/pcu (AUTH) (AUTH)
EOF
echo "  $ops" | column -t -s ';'
    echo ""
    echo -e "${BOLD}${WHITE}[siteLevelConsumptionMonitoring]${OFF}"
read -r -d '' ops <<EOF
  ${CYAN}getSystemBatteryLifetime${OFF};battery_lifetime (AUTH) (AUTH)
  ${CYAN}getSystemBatteryTelemetry${OFF};Retrieves telemetry for all batteries for a system (AUTH) (AUTH)
  ${CYAN}getSystemConsumptionLifetime${OFF};consumption_lifetime (AUTH) (AUTH)
  ${CYAN}getSystemConsumptionMeterTelemetry${OFF};Retrieves telemetry for all consumption meters for a system (AUTH) (AUTH)
  ${CYAN}getSystemEnergyExportLifetime${OFF};export_lifetime (AUTH) (AUTH)
  ${CYAN}getSystemEnergyExportTelemetry${OFF};Retrieves energy exported to grid in regular intervals (AUTH) (AUTH)
  ${CYAN}getSystemEnergyImportLifetime${OFF};import_lifetime (AUTH) (AUTH)
  ${CYAN}getSystemEnergyImportTelemetry${OFF};Retrieves energy imported from grid in regular intervals (AUTH) (AUTH)
EOF
echo "  $ops" | column -t -s ';'
    echo ""
    echo -e "${BOLD}${WHITE}[siteLevelProductionMonitoring]${OFF}"
read -r -d '' ops <<EOF
  ${CYAN}getSystemEnergyLifetime${OFF};energy_lifetime (AUTH) (AUTH)
  ${CYAN}getSystemProductionMeterReadings${OFF};production_meter_readings (AUTH) (AUTH)
  ${CYAN}getSystemProductionMeterTelemetry${OFF};Retrieves telemetry for all production meters for a system (AUTH) (AUTH)
  ${CYAN}getSystemProductionMicroTelemetry${OFF};Retrieves telemetry for all production micros for a system (AUTH) (AUTH)
  ${CYAN}getSystemRgmStats${OFF};rgm_stats (AUTH) (AUTH)
EOF
echo "  $ops" | column -t -s ';'
    echo ""
    echo -e "${BOLD}${WHITE}[streaming]${OFF}"
read -r -d '' ops <<EOF
  ${CYAN}streamSystemLiveData${OFF};Site Level Live Status (AUTH) (AUTH)
EOF
echo "  $ops" | column -t -s ';'
    echo ""
    echo -e "${BOLD}${WHITE}[systemConfigurations]${OFF}"
read -r -d '' ops <<EOF
  ${CYAN}getSystemBatterySettings${OFF};Returns the current battery settings of a system (AUTH) (AUTH)
  ${CYAN}getSystemGridStatusSettings${OFF};Returns the current grid status of a system. (AUTH) (AUTH)
  ${CYAN}getSystemLoadControlSettings${OFF};Returns the current load control settings of a system (AUTH) (AUTH)
  ${CYAN}getSystemStormGuardSettings${OFF};Returns the current storm guard settings of a system (AUTH) (AUTH)
  ${CYAN}updateSystemBatterySettings${OFF};Updates the current battery settings of a system (AUTH) (AUTH)
  ${CYAN}updateSystemLoadControlSettings${OFF};Updates the current load control settings of a system (AUTH) (AUTH)
  ${CYAN}updateSystemStormGuardSettings${OFF};Updates the current storm guard settings of a system (AUTH) (AUTH)
EOF
echo "  $ops" | column -t -s ';'
    echo ""
    echo -e "${BOLD}${WHITE}[systemDetails]${OFF}"
read -r -d '' ops <<EOF
  ${CYAN}getInvertersSummaryByEnvoyOrSite${OFF};inverters_summary_by_envoy_or_site (AUTH) (AUTH)
  ${CYAN}getSystem${OFF};Retrieves a System by ID (AUTH) (AUTH)
  ${CYAN}getSystemDevices${OFF};Retrieves devices for a given system (AUTH) (AUTH)
  ${CYAN}getSystemSummary${OFF};Retrieves a system summary (AUTH) (AUTH)
  ${CYAN}getSystems${OFF};Fetch systems (AUTH) (AUTH)
  ${CYAN}retrieveSystemId${OFF};Retrieve system for a given envoy serial number (AUTH) (AUTH)
  ${CYAN}searchSystems${OFF};Search and filter systems (AUTH) (AUTH)
EOF
echo "  $ops" | column -t -s ';'
    echo ""
    echo -e "${BOLD}${WHITE}Options${OFF}"
    echo -e "  -h,--help\\t\\t\\t\\tPrint this help"
    echo -e "  -V,--version\\t\\t\\t\\tPrint API version"
    echo -e "  --about\\t\\t\\t\\tPrint the information about service"
    echo -e "  --host ${CYAN}<url>${OFF}\\t\\t\\t\\tSpecify the host URL "
echo -e "              \\t\\t\\t\\t(e.g. 'https://api.enphaseenergy.com')"

    echo -e "  --force\\t\\t\\t\\tForce command invocation in spite of missing"
    echo -e "         \\t\\t\\t\\trequired parameters or wrong content type"
    echo -e "  --dry-run\\t\\t\\t\\tPrint out the cURL command without"
    echo -e "           \\t\\t\\t\\texecuting it"
    echo -e "  -nc,--no-colors\\t\\t\\tEnforce print without colors, otherwise autodetected"
    echo -e "  -ac,--accept ${YELLOW}<mime-type>${OFF}\\t\\tSet the 'Accept' header in the request"
    echo -e "  -ct,--content-type ${YELLOW}<mime-type>${OFF}\\tSet the 'Content-type' header in "
    echo -e "                                \\tthe request"
    echo ""
}


##############################################################################
#
# Print REST service description
#
##############################################################################
print_about() {
    echo ""
    echo -e "${BOLD}${WHITE}The Enphase Monitoring API command line client (API version 4.0)${OFF}"
    echo ""
    echo -e "License: Enphase Energy API License Agreement."
    echo -e "Contact: "
    echo ""
read -r -d '' appdescription <<EOF

Monitoring API can be used to fetch system details on a site, system-level production and consumption data, and device-level production data.
EOF
echo "$appdescription" | paste -sd' ' | fold -sw 80
}


##############################################################################
#
# Print REST api version
#
##############################################################################
print_version() {
    echo ""
    echo -e "${BOLD}The Enphase Monitoring API command line client (API version 4.0)${OFF}"
    echo ""
}

##############################################################################
#
# Print help for getSystemAcbDeviceTelemetry operation
#
##############################################################################
print_getSystemAcbDeviceTelemetry_help() {
    echo ""
    echo -e "${BOLD}${WHITE}getSystemAcbDeviceTelemetry - Retrieves telemetry for single ACB${OFF}${BLUE}(AUTH - OAuth2)${OFF}${BLUE}(AUTH - QUERY)${OFF}" | paste -sd' ' | fold -sw 80 | sed '2,$s/^/    /'
    echo -e ""
    echo -e "Retrieves telemetry for single ACB.
If no start_at is specified, defaults to midnight today, in the timezone of the system.
If the start_at specified is earlier than the system's first reported date, then midnight of the system's first reported date is considered as start_at.
The end_at is calculated as the minimum of the time of the request and (start time + granularity).
The meaning of granularity is as follows:

If granularity is 15mins, maximum 1 interval will appear in response.
If granularity is day, maximum 96 intervals, and if granularity is week, maximum 672 intervals, will appear in response where each interval is of 15 mins duration.

The requested start date must be within 2 years from current date.
By default start_at will appear in response. If start_date parameter is passed in the url then start_date field will appear in response.
By default end_at will appear in response. If end_date parameter is passed in the url then end_date field will appear in response." | paste -sd' ' | fold -sw 80
    echo -e ""
    echo -e "${BOLD}${WHITE}Parameters${OFF}"
    echo -e "  * ${GREEN}system_id${OFF} ${BLUE}[integer]${OFF} ${RED}(required)${OFF} ${CYAN}(default: null)${OFF} - Unique numeric ID of the system. ${YELLOW}Specify as: system_id=value${OFF}" | paste -sd' ' | fold -sw 80 | sed '2,$s/^/    /'
    echo -e "  * ${GREEN}serial_no${OFF} ${BLUE}[string]${OFF} ${RED}(required)${OFF} ${CYAN}(default: null)${OFF} - Serial number of the acb. ${YELLOW}Specify as: serial_no=value${OFF}" | paste -sd' ' | fold -sw 80 | sed '2,$s/^/    /'
    echo -e "  * ${GREEN}start_at${OFF} ${BLUE}[integer]${OFF} ${CYAN}(default: null)${OFF} - Start time for fetching the telemetry data in Epoch time format. Alternatively one can use start_date in place of start_at for passing the start date as string in YYYY-MM-DD format. By default start_at will appear in response. If start_date parameter is passed in the url then start_date field will appear in response.${YELLOW} Specify as: start_at=value${OFF}" \
        | paste -sd' ' | fold -sw 80 | sed '2,$s/^/    /'
    echo -e "  * ${GREEN}granularity${OFF} ${BLUE}[TelemetryGranularityEnum]${OFF} ${CYAN}(default: null)${OFF} - Granularity of the telemetry data. Default is 'day'.${YELLOW} Specify as: granularity=value${OFF}" \
        | paste -sd' ' | fold -sw 80 | sed '2,$s/^/    /'
    echo ""
    echo -e "${BOLD}${WHITE}Responses${OFF}"
    code=200
    echo -e "${result_color_table[${code:0:1}]}  200;Telemetry for the ACB.${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=401
    echo -e "${result_color_table[${code:0:1}]}  401;Unauthorized${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=403
    echo -e "${result_color_table[${code:0:1}]}  403;Forbidden${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=404
    echo -e "${result_color_table[${code:0:1}]}  404;Not Found${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=405
    echo -e "${result_color_table[${code:0:1}]}  405;Method Not Allowed${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=422
    echo -e "${result_color_table[${code:0:1}]}  422;Unprocessable Entity${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=429
    echo -e "${result_color_table[${code:0:1}]}  429;Too Many Requests${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=500
    echo -e "${result_color_table[${code:0:1}]}  500;Internal Server Error${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=501
    echo -e "${result_color_table[${code:0:1}]}  501;Not Implemented${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
}
##############################################################################
#
# Print help for getSystemEnchargeDeviceTelemetry operation
#
##############################################################################
print_getSystemEnchargeDeviceTelemetry_help() {
    echo ""
    echo -e "${BOLD}${WHITE}getSystemEnchargeDeviceTelemetry - Retrieves telemetry for single Encharge${OFF}${BLUE}(AUTH - OAuth2)${OFF}${BLUE}(AUTH - QUERY)${OFF}" | paste -sd' ' | fold -sw 80 | sed '2,$s/^/    /'
    echo -e ""
    echo -e "Retrieves telemetry for single Encharge.
If no start_at is specified, defaults to midnight today, in the timezone of the system.
If the start_at specified is earlier than the system's first reported date, then midnight of the system's first reported date is considered as start_at.
The end_at is calculated as the minimum of the time of the request and (start time + granularity).
The meaning of granularity is as follows:

If granularity is 15mins, maximum 1 interval will appear in response.
If granularity is day, maximum 96 intervals, and if granularity is week, maximum 672 intervals, will appear in response where each interval is of 15 mins duration.

The requested start date must be within 2 years from current date.
By default start_at will appear in response. If start_date parameter is passed in the url then start_date field will appear in response.
By default end_at will appear in response. If end_date parameter is passed in the url then end_date field will appear in response." | paste -sd' ' | fold -sw 80
    echo -e ""
    echo -e "${BOLD}${WHITE}Parameters${OFF}"
    echo -e "  * ${GREEN}system_id${OFF} ${BLUE}[integer]${OFF} ${RED}(required)${OFF} ${CYAN}(default: null)${OFF} - Unique numeric ID of the system. ${YELLOW}Specify as: system_id=value${OFF}" | paste -sd' ' | fold -sw 80 | sed '2,$s/^/    /'
    echo -e "  * ${GREEN}serial_no${OFF} ${BLUE}[string]${OFF} ${RED}(required)${OFF} ${CYAN}(default: null)${OFF} - Serial number of the Encharge. ${YELLOW}Specify as: serial_no=value${OFF}" | paste -sd' ' | fold -sw 80 | sed '2,$s/^/    /'
    echo -e "  * ${GREEN}start_at${OFF} ${BLUE}[integer]${OFF} ${CYAN}(default: null)${OFF} - Start time for fetching the telemetry data in Epoch time format. Alternatively one can use start_date in place of start_at for passing the start date as string in YYYY-MM-DD format. By default start_at will appear in response. If start_date parameter is passed in the url then start_date field will appear in response.${YELLOW} Specify as: start_at=value${OFF}" \
        | paste -sd' ' | fold -sw 80 | sed '2,$s/^/    /'
    echo -e "  * ${GREEN}granularity${OFF} ${BLUE}[TelemetryGranularityEnum]${OFF} ${CYAN}(default: null)${OFF} - Granularity of the telemetry data. Default is 'day'.${YELLOW} Specify as: granularity=value${OFF}" \
        | paste -sd' ' | fold -sw 80 | sed '2,$s/^/    /'
    echo ""
    echo -e "${BOLD}${WHITE}Responses${OFF}"
    code=200
    echo -e "${result_color_table[${code:0:1}]}  200;Telemetry for the Encharge.${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=401
    echo -e "${result_color_table[${code:0:1}]}  401;Unauthorized${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=403
    echo -e "${result_color_table[${code:0:1}]}  403;Forbidden${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=404
    echo -e "${result_color_table[${code:0:1}]}  404;Not Found${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=405
    echo -e "${result_color_table[${code:0:1}]}  405;Method Not Allowed${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=422
    echo -e "${result_color_table[${code:0:1}]}  422;Unprocessable Entity${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=429
    echo -e "${result_color_table[${code:0:1}]}  429;Too Many Requests${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=500
    echo -e "${result_color_table[${code:0:1}]}  500;Internal Server Error${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=501
    echo -e "${result_color_table[${code:0:1}]}  501;Not Implemented${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
}
##############################################################################
#
# Print help for getSystemMicroDeviceTelemetry operation
#
##############################################################################
print_getSystemMicroDeviceTelemetry_help() {
    echo ""
    echo -e "${BOLD}${WHITE}getSystemMicroDeviceTelemetry - Retrieves telemetry for single micro/pcu${OFF}${BLUE}(AUTH - OAuth2)${OFF}${BLUE}(AUTH - QUERY)${OFF}" | paste -sd' ' | fold -sw 80 | sed '2,$s/^/    /'
    echo -e ""
    echo -e "Retrieves telemetry for single micro/pcu.
If no start_at is specified, defaults to midnight today, in the timezone of the system.
If the start_at specified is earlier than the system's first reported date, then midnight of the system's first reported date is considered as start_at.
The end_at is calculated as the minimum of the time of the request and (start time + granularity).
The meaning of granularity is as follows:

If granularity is 15mins, maximum 3 intervals will appear in response. If granularity is day, maximum 288 intervals will appear in response where each interval is of 5 mins duration.

The requested start date must be within 2 years from current date.
By default start_at will appear in response. If start_date parameter is passed in the url then start_date field will appear in response.
By default end_at will appear in response. If end_date parameter is passed in the url then end_date field will appear in response." | paste -sd' ' | fold -sw 80
    echo -e ""
    echo -e "${BOLD}${WHITE}Parameters${OFF}"
    echo -e "  * ${GREEN}system_id${OFF} ${BLUE}[integer]${OFF} ${RED}(required)${OFF} ${CYAN}(default: null)${OFF} - Unique numeric ID of the system. ${YELLOW}Specify as: system_id=value${OFF}" | paste -sd' ' | fold -sw 80 | sed '2,$s/^/    /'
    echo -e "  * ${GREEN}serial_no${OFF} ${BLUE}[string]${OFF} ${RED}(required)${OFF} ${CYAN}(default: null)${OFF} - Serial number of the individual solar Microinverter. ${YELLOW}Specify as: serial_no=value${OFF}" | paste -sd' ' | fold -sw 80 | sed '2,$s/^/    /'
    echo -e "  * ${GREEN}start_at${OFF} ${BLUE}[integer]${OFF} ${CYAN}(default: null)${OFF} - Start time for fetching the telemetry data in Epoch time format. Alternatively one can use start_date in place of start_at for passing the start date as string in YYYY-MM-DD format. By default start_at will appear in response. If start_date parameter is passed in the url then start_date field will appear in response.${YELLOW} Specify as: start_at=value${OFF}" \
        | paste -sd' ' | fold -sw 80 | sed '2,$s/^/    /'
    echo -e "  * ${GREEN}granularity${OFF} ${BLUE}[TelemetryGranularityEnum]${OFF} ${CYAN}(default: null)${OFF} - Granularity of the telemetry data. Default is 'day'.${YELLOW} Specify as: granularity=value${OFF}" \
        | paste -sd' ' | fold -sw 80 | sed '2,$s/^/    /'
    echo ""
    echo -e "${BOLD}${WHITE}Responses${OFF}"
    code=200
    echo -e "${result_color_table[${code:0:1}]}  200;Telemetry for micro.${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=401
    echo -e "${result_color_table[${code:0:1}]}  401;Unauthorized${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=403
    echo -e "${result_color_table[${code:0:1}]}  403;Forbidden${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=404
    echo -e "${result_color_table[${code:0:1}]}  404;Not Found${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=405
    echo -e "${result_color_table[${code:0:1}]}  405;Method Not Allowed${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=422
    echo -e "${result_color_table[${code:0:1}]}  422;Unprocessable Entity${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=429
    echo -e "${result_color_table[${code:0:1}]}  429;Too Many Requests${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=500
    echo -e "${result_color_table[${code:0:1}]}  500;Internal Server Error${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=501
    echo -e "${result_color_table[${code:0:1}]}  501;Not Implemented${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
}
##############################################################################
#
# Print help for getSystemBatteryLifetime operation
#
##############################################################################
print_getSystemBatteryLifetime_help() {
    echo ""
    echo -e "${BOLD}${WHITE}getSystemBatteryLifetime - battery_lifetime${OFF}${BLUE}(AUTH - OAuth2)${OFF}${BLUE}(AUTH - QUERY)${OFF}" | paste -sd' ' | fold -sw 80 | sed '2,$s/^/    /'
    echo -e ""
    echo -e "Returns a daily time series of energy charged into the batteries and energy discharged from the batteries for a system over its lifetime. All measurements are in Watt hours. The time series includes one entry for each day from the start_date to the end_date with no gaps in the time series. If the response includes trailing zeroes, such as [909, 4970, 0, 0, 0], then no energy has been charged/discharged for the last days in the series." | paste -sd' ' | fold -sw 80
    echo -e ""
    echo -e "${BOLD}${WHITE}Parameters${OFF}"
    echo -e "  * ${GREEN}system_id${OFF} ${BLUE}[integer]${OFF} ${RED}(required)${OFF} ${CYAN}(default: null)${OFF} - Unique numeric ID of the system. ${YELLOW}Specify as: system_id=value${OFF}" | paste -sd' ' | fold -sw 80 | sed '2,$s/^/    /'
    echo -e "  * ${GREEN}start_date${OFF} ${BLUE}[string]${OFF} ${CYAN}(default: null)${OFF} - Requested start date of the time series data. Defaults to the system's operational date. If the start_date is earlier than the system's operational_date, then the response data begins with the system operational_date as start_date. Pass as string in YYYY-MM-DD format.${YELLOW} Specify as: start_date=value${OFF}" \
        | paste -sd' ' | fold -sw 80 | sed '2,$s/^/    /'
    echo -e "  * ${GREEN}end_date${OFF} ${BLUE}[string]${OFF} ${CYAN}(default: null)${OFF} - End date of the time series data. Defaults to yesterday. If the end_date is later than yesterday, then the response data ends with yesterday as end_date. Pass as string in YYYY-MM-DD format.${YELLOW} Specify as: end_date=value${OFF}" \
        | paste -sd' ' | fold -sw 80 | sed '2,$s/^/    /'
    echo ""
    echo -e "${BOLD}${WHITE}Responses${OFF}"
    code=200
    echo -e "${result_color_table[${code:0:1}]}  200;battery_lifetime${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=401
    echo -e "${result_color_table[${code:0:1}]}  401;Unauthorized${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=403
    echo -e "${result_color_table[${code:0:1}]}  403;Forbidden${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=404
    echo -e "${result_color_table[${code:0:1}]}  404;Not Found${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=405
    echo -e "${result_color_table[${code:0:1}]}  405;Method Not Allowed${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=422
    echo -e "${result_color_table[${code:0:1}]}  422;Unprocessable Entity${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=429
    echo -e "${result_color_table[${code:0:1}]}  429;Too Many Requests${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=500
    echo -e "${result_color_table[${code:0:1}]}  500;Internal Server Error${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=501
    echo -e "${result_color_table[${code:0:1}]}  501;Not Implemented${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
}
##############################################################################
#
# Print help for getSystemBatteryTelemetry operation
#
##############################################################################
print_getSystemBatteryTelemetry_help() {
    echo ""
    echo -e "${BOLD}${WHITE}getSystemBatteryTelemetry - Retrieves telemetry for all batteries for a system${OFF}${BLUE}(AUTH - OAuth2)${OFF}${BLUE}(AUTH - QUERY)${OFF}" | paste -sd' ' | fold -sw 80 | sed '2,$s/^/    /'
    echo -e ""
    echo -e "Retrieves telemetry for all the batteries of a system.
If no start_at is specified, defaults to midnight today, in the timezone of the system.
If the start_at specified is earlier than the system's first reported date, then midnight of the system's first reported date is considered as start_at.
The end_at is calculated as the minimum of the time of the request and (start time + granularity).
The meaning of granularity is as follows:

If granularity is 15mins, maximum 1 interval will appear in response.
If granularity is day, maximum 96 intervals, and if granularity is week, maximum 672 intervals, will appear in response where each interval is of 15 mins duration.

The requested start date must be within 2 years from current date.
By default start_at will appear in response. If start_date parameter is passed in the url then start_date field will appear in response.
By default end_at will appear in response. If end_date parameter is passed in the url then end_date field will appear in response." | paste -sd' ' | fold -sw 80
    echo -e ""
    echo -e "${BOLD}${WHITE}Parameters${OFF}"
    echo -e "  * ${GREEN}system_id${OFF} ${BLUE}[integer]${OFF} ${RED}(required)${OFF} ${CYAN}(default: null)${OFF} - Unique numeric ID of the system. ${YELLOW}Specify as: system_id=value${OFF}" | paste -sd' ' | fold -sw 80 | sed '2,$s/^/    /'
    echo -e "  * ${GREEN}start_at${OFF} ${BLUE}[integer]${OFF} ${CYAN}(default: null)${OFF} - Start time for fetching the telemetry data in Epoch time format. Alternatively one can use start_date in place of start_at for passing the start date as string in YYYY-MM-DD format. By default start_at will appear in response. If start_date parameter is passed in the url then start_date field will appear in response.${YELLOW} Specify as: start_at=value${OFF}" \
        | paste -sd' ' | fold -sw 80 | sed '2,$s/^/    /'
    echo -e "  * ${GREEN}granularity${OFF} ${BLUE}[TelemetryGranularityEnum]${OFF} ${CYAN}(default: null)${OFF} - Granularity of the telemetry data. Default is 'day'.${YELLOW} Specify as: granularity=value${OFF}" \
        | paste -sd' ' | fold -sw 80 | sed '2,$s/^/    /'
    echo ""
    echo -e "${BOLD}${WHITE}Responses${OFF}"
    code=200
    echo -e "${result_color_table[${code:0:1}]}  200;Telemetry for batteries.${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=401
    echo -e "${result_color_table[${code:0:1}]}  401;Unauthorized${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=403
    echo -e "${result_color_table[${code:0:1}]}  403;Forbidden${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=404
    echo -e "${result_color_table[${code:0:1}]}  404;Not Found${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=405
    echo -e "${result_color_table[${code:0:1}]}  405;Method Not Allowed${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=422
    echo -e "${result_color_table[${code:0:1}]}  422;Unprocessable Entity${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=429
    echo -e "${result_color_table[${code:0:1}]}  429;Too Many Requests${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=500
    echo -e "${result_color_table[${code:0:1}]}  500;Internal Server Error${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=501
    echo -e "${result_color_table[${code:0:1}]}  501;Not Implemented${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
}
##############################################################################
#
# Print help for getSystemConsumptionLifetime operation
#
##############################################################################
print_getSystemConsumptionLifetime_help() {
    echo ""
    echo -e "${BOLD}${WHITE}getSystemConsumptionLifetime - consumption_lifetime${OFF}${BLUE}(AUTH - OAuth2)${OFF}${BLUE}(AUTH - QUERY)${OFF}" | paste -sd' ' | fold -sw 80 | sed '2,$s/^/    /'
    echo -e ""
    echo -e "Returns a daily time series of energy consumption as measured by the consumption meter installed on the specified system. All measurements are in Watt hours.
The time series includes one entry for each day from the start_date to the end_date. There are no gaps in the time series.
If the response includes trailing zeroes, such as [909, 4970, 0, 0, 0], then no data has been reported for the last three days." | paste -sd' ' | fold -sw 80
    echo -e ""
    echo -e "${BOLD}${WHITE}Parameters${OFF}"
    echo -e "  * ${GREEN}system_id${OFF} ${BLUE}[integer]${OFF} ${RED}(required)${OFF} ${CYAN}(default: null)${OFF} - Unique numeric ID of the system. ${YELLOW}Specify as: system_id=value${OFF}" | paste -sd' ' | fold -sw 80 | sed '2,$s/^/    /'
    echo -e "  * ${GREEN}start_date${OFF} ${BLUE}[string]${OFF} ${CYAN}(default: null)${OFF} - Requested start date of the time series data. Defaults to the system's operational date. If the start_date is earlier than the system's operational_date, then the response data begins with the system operational_date as start_date. Pass as string in YYYY-MM-DD format.${YELLOW} Specify as: start_date=value${OFF}" \
        | paste -sd' ' | fold -sw 80 | sed '2,$s/^/    /'
    echo -e "  * ${GREEN}end_date${OFF} ${BLUE}[string]${OFF} ${CYAN}(default: null)${OFF} - End date of the time series data. Defaults to yesterday. If the end_date is later than yesterday, then the response data ends with yesterday as end_date. Pass as string in YYYY-MM-DD format.${YELLOW} Specify as: end_date=value${OFF}" \
        | paste -sd' ' | fold -sw 80 | sed '2,$s/^/    /'
    echo ""
    echo -e "${BOLD}${WHITE}Responses${OFF}"
    code=200
    echo -e "${result_color_table[${code:0:1}]}  200;consumption_lifetime${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=401
    echo -e "${result_color_table[${code:0:1}]}  401;Unauthorized${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=403
    echo -e "${result_color_table[${code:0:1}]}  403;Forbidden${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=404
    echo -e "${result_color_table[${code:0:1}]}  404;Not Found${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=405
    echo -e "${result_color_table[${code:0:1}]}  405;Method Not Allowed${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=422
    echo -e "${result_color_table[${code:0:1}]}  422;Unprocessable Entity${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=429
    echo -e "${result_color_table[${code:0:1}]}  429;Too Many Requests${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=500
    echo -e "${result_color_table[${code:0:1}]}  500;Internal Server Error${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=501
    echo -e "${result_color_table[${code:0:1}]}  501;Not Implemented${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
}
##############################################################################
#
# Print help for getSystemConsumptionMeterTelemetry operation
#
##############################################################################
print_getSystemConsumptionMeterTelemetry_help() {
    echo ""
    echo -e "${BOLD}${WHITE}getSystemConsumptionMeterTelemetry - Retrieves telemetry for all consumption meters for a system${OFF}${BLUE}(AUTH - OAuth2)${OFF}${BLUE}(AUTH - QUERY)${OFF}" | paste -sd' ' | fold -sw 80 | sed '2,$s/^/    /'
    echo -e ""
    echo -e "Retrieves telemetry for all the consumption meters of a system.
If the start_at specified is earlier than the system's first reported date, then midnight of the system's first reported date is considered as start_at.
The end_at is calculated as the minimum of the time of the request and (start time + granularity).
The meaning of granularity is as follows:

If granularity is 15mins, maximum 1 interval will appear in response.
If granularity is day, maximum 96 intervals, and if granularity is week, maximum 672 intervals, will appear in response where each interval is of 15 mins duration.

The requested start date must be within 2 years from current date.
By default start_at will appear in response. If start_date parameter is passed in the url then start_date field will appear in response.
By default end_at will appear in response. If end_date parameter is passed in the url then end_date field will appear in response." | paste -sd' ' | fold -sw 80
    echo -e ""
    echo -e "${BOLD}${WHITE}Parameters${OFF}"
    echo -e "  * ${GREEN}system_id${OFF} ${BLUE}[integer]${OFF} ${RED}(required)${OFF} ${CYAN}(default: null)${OFF} - Unique numeric ID of the system. ${YELLOW}Specify as: system_id=value${OFF}" | paste -sd' ' | fold -sw 80 | sed '2,$s/^/    /'
    echo -e "  * ${GREEN}start_at${OFF} ${BLUE}[integer]${OFF} ${CYAN}(default: null)${OFF} - Requested start time for telemetry data in Epoch time format. Alternatively one can use start_date in place of start_at for passing the start date as string in YYYY-MM-DD format. If no start_at is specified, defaults to midnight today, in the timezone of the system. If the start_at specified is earlier than the system's first reported date, then the system first reported date is considered as start_at. By default start_at will appear in response. If start_date parameter is passed in the url then start_date field will appear in response.${YELLOW} Specify as: start_at=value${OFF}" \
        | paste -sd' ' | fold -sw 80 | sed '2,$s/^/    /'
    echo -e "  * ${GREEN}granularity${OFF} ${BLUE}[TelemetryGranularityEnum]${OFF} ${CYAN}(default: null)${OFF} - Granularity of the telemetry data. Default is 'day'.${YELLOW} Specify as: granularity=value${OFF}" \
        | paste -sd' ' | fold -sw 80 | sed '2,$s/^/    /'
    echo ""
    echo -e "${BOLD}${WHITE}Responses${OFF}"
    code=200
    echo -e "${result_color_table[${code:0:1}]}  200;Telemetry for all consumption meters.${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=401
    echo -e "${result_color_table[${code:0:1}]}  401;Unauthorized${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=403
    echo -e "${result_color_table[${code:0:1}]}  403;Forbidden${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=404
    echo -e "${result_color_table[${code:0:1}]}  404;Not Found${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=405
    echo -e "${result_color_table[${code:0:1}]}  405;Method Not Allowed${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=422
    echo -e "${result_color_table[${code:0:1}]}  422;Unprocessable Entity${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=429
    echo -e "${result_color_table[${code:0:1}]}  429;Too Many Requests${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=500
    echo -e "${result_color_table[${code:0:1}]}  500;Internal Server Error${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=501
    echo -e "${result_color_table[${code:0:1}]}  501;Not Implemented${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
}
##############################################################################
#
# Print help for getSystemEnergyExportLifetime operation
#
##############################################################################
print_getSystemEnergyExportLifetime_help() {
    echo ""
    echo -e "${BOLD}${WHITE}getSystemEnergyExportLifetime - export_lifetime${OFF}${BLUE}(AUTH - OAuth2)${OFF}${BLUE}(AUTH - QUERY)${OFF}" | paste -sd' ' | fold -sw 80 | sed '2,$s/^/    /'
    echo -e ""
    echo -e "Returns a daily time series of energy exported to the grid by the system over its lifetime. All measurements are in Watt-hours. The time series includes one entry for each day from the start_date to the end_date with no gaps in the time series. If the response contains trailing zeroes, such as [909, 4970, 0, 0, 0], then no energy has been exported for the last days in the series." | paste -sd' ' | fold -sw 80
    echo -e ""
    echo -e "${BOLD}${WHITE}Parameters${OFF}"
    echo -e "  * ${GREEN}system_id${OFF} ${BLUE}[integer]${OFF} ${RED}(required)${OFF} ${CYAN}(default: null)${OFF} - Unique numeric ID of the system. ${YELLOW}Specify as: system_id=value${OFF}" | paste -sd' ' | fold -sw 80 | sed '2,$s/^/    /'
    echo -e "  * ${GREEN}start_date${OFF} ${BLUE}[string]${OFF} ${CYAN}(default: null)${OFF} - Requested start date of the time series data. Defaults to the system's operational date. If the start_date is earlier than the system's operational_date, then the response data begins with the system operational_date as start_date. Pass as string in YYYY-MM-DD format.${YELLOW} Specify as: start_date=value${OFF}" \
        | paste -sd' ' | fold -sw 80 | sed '2,$s/^/    /'
    echo -e "  * ${GREEN}end_date${OFF} ${BLUE}[string]${OFF} ${CYAN}(default: null)${OFF} - End date of the time series data. Defaults to yesterday. If the end_date is later than yesterday, then the response data ends with yesterday as end_date. Pass as string in YYYY-MM-DD format.${YELLOW} Specify as: end_date=value${OFF}" \
        | paste -sd' ' | fold -sw 80 | sed '2,$s/^/    /'
    echo ""
    echo -e "${BOLD}${WHITE}Responses${OFF}"
    code=200
    echo -e "${result_color_table[${code:0:1}]}  200;export_lifetime${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=401
    echo -e "${result_color_table[${code:0:1}]}  401;Unauthorized${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=403
    echo -e "${result_color_table[${code:0:1}]}  403;Forbidden${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=404
    echo -e "${result_color_table[${code:0:1}]}  404;Not Found${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=405
    echo -e "${result_color_table[${code:0:1}]}  405;Method Not Allowed${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=422
    echo -e "${result_color_table[${code:0:1}]}  422;Unprocessable Entity${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=429
    echo -e "${result_color_table[${code:0:1}]}  429;Too Many Requests${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=500
    echo -e "${result_color_table[${code:0:1}]}  500;Internal Server Error${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=501
    echo -e "${result_color_table[${code:0:1}]}  501;Not Implemented${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
}
##############################################################################
#
# Print help for getSystemEnergyExportTelemetry operation
#
##############################################################################
print_getSystemEnergyExportTelemetry_help() {
    echo ""
    echo -e "${BOLD}${WHITE}getSystemEnergyExportTelemetry - Retrieves energy exported to grid in regular intervals${OFF}${BLUE}(AUTH - OAuth2)${OFF}${BLUE}(AUTH - QUERY)${OFF}" | paste -sd' ' | fold -sw 80 | sed '2,$s/^/    /'
    echo -e ""
    echo -e "Retrieves energy exported to grid in regular intervals. If no start_at is specified, defaults to midnight today, in the timezone of the system.
If the start_at specified is earlier than the system's first reported date, then midnight of the system's first reported date is considered as start_at.
The end_at is calculated as the minimum of the time of the request and (start time + granularity).
The meaning of granularity is as follows:

If granularity is 15mins, maximum 1 intervals will appear in response. If granularity is day, maximum 96 intervals will appear in response where each interval is of 15 mins duration.

The requested start date must be within 2 years from current date." | paste -sd' ' | fold -sw 80
    echo -e ""
    echo -e "${BOLD}${WHITE}Parameters${OFF}"
    echo -e "  * ${GREEN}system_id${OFF} ${BLUE}[integer]${OFF} ${RED}(required)${OFF} ${CYAN}(default: null)${OFF} - Unique numeric ID of the system. ${YELLOW}Specify as: system_id=value${OFF}" | paste -sd' ' | fold -sw 80 | sed '2,$s/^/    /'
    echo -e "  * ${GREEN}start_at${OFF} ${BLUE}[integer]${OFF} ${CYAN}(default: null)${OFF} - Start time for fetching the telemetry data in Epoch time format. Alternatively one can use start_date in place of start_at for passing the start date as string in YYYY-MM-DD format. By default start_at will appear in response. If start_date parameter is passed in the url then start_date field will appear in response.${YELLOW} Specify as: start_at=value${OFF}" \
        | paste -sd' ' | fold -sw 80 | sed '2,$s/^/    /'
    echo -e "  * ${GREEN}granularity${OFF} ${BLUE}[TelemetryGranularityEnum]${OFF} ${CYAN}(default: null)${OFF} - Granularity of the telemetry data. Default is 'day'.${YELLOW} Specify as: granularity=value${OFF}" \
        | paste -sd' ' | fold -sw 80 | sed '2,$s/^/    /'
    echo ""
    echo -e "${BOLD}${WHITE}Responses${OFF}"
    code=200
    echo -e "${result_color_table[${code:0:1}]}  200;Energy export telemetry in intervals.${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=401
    echo -e "${result_color_table[${code:0:1}]}  401;Unauthorized${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=403
    echo -e "${result_color_table[${code:0:1}]}  403;Forbidden${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=404
    echo -e "${result_color_table[${code:0:1}]}  404;Not Found${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=405
    echo -e "${result_color_table[${code:0:1}]}  405;Method Not Allowed${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=422
    echo -e "${result_color_table[${code:0:1}]}  422;Unprocessable Entity${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=429
    echo -e "${result_color_table[${code:0:1}]}  429;Too Many Requests${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=500
    echo -e "${result_color_table[${code:0:1}]}  500;Internal Server Error${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=501
    echo -e "${result_color_table[${code:0:1}]}  501;Not Implemented${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
}
##############################################################################
#
# Print help for getSystemEnergyImportLifetime operation
#
##############################################################################
print_getSystemEnergyImportLifetime_help() {
    echo ""
    echo -e "${BOLD}${WHITE}getSystemEnergyImportLifetime - import_lifetime${OFF}${BLUE}(AUTH - OAuth2)${OFF}${BLUE}(AUTH - QUERY)${OFF}" | paste -sd' ' | fold -sw 80 | sed '2,$s/^/    /'
    echo -e ""
    echo -e "Returns a daily time series of energy imported to the grid by the system over its lifetime. All measurements are in Watt hours. The time series includes one entry for each day from the start_date to the end_date with no gaps in the time series. If the response contains trailing zeroes, such as [909, 4970, 0, 0, 0], then no energy has been imported for the last days in the series." | paste -sd' ' | fold -sw 80
    echo -e ""
    echo -e "${BOLD}${WHITE}Parameters${OFF}"
    echo -e "  * ${GREEN}system_id${OFF} ${BLUE}[integer]${OFF} ${RED}(required)${OFF} ${CYAN}(default: null)${OFF} - Unique numeric ID of the system. ${YELLOW}Specify as: system_id=value${OFF}" | paste -sd' ' | fold -sw 80 | sed '2,$s/^/    /'
    echo -e "  * ${GREEN}start_date${OFF} ${BLUE}[string]${OFF} ${CYAN}(default: null)${OFF} - Requested start date of the time series data. Defaults to the system's operational date. If the start_date is earlier than the system's operational_date, then the response data begins with the system operational_date as start_date. Pass as string in YYYY-MM-DD format.${YELLOW} Specify as: start_date=value${OFF}" \
        | paste -sd' ' | fold -sw 80 | sed '2,$s/^/    /'
    echo -e "  * ${GREEN}end_date${OFF} ${BLUE}[string]${OFF} ${CYAN}(default: null)${OFF} - End date of the time series data. Defaults to yesterday. If the end_date is later than yesterday, then the response data ends with yesterday as end_date. Pass as string in YYYY-MM-DD format.${YELLOW} Specify as: end_date=value${OFF}" \
        | paste -sd' ' | fold -sw 80 | sed '2,$s/^/    /'
    echo ""
    echo -e "${BOLD}${WHITE}Responses${OFF}"
    code=200
    echo -e "${result_color_table[${code:0:1}]}  200;import_lifetime${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=401
    echo -e "${result_color_table[${code:0:1}]}  401;Unauthorized${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=403
    echo -e "${result_color_table[${code:0:1}]}  403;Forbidden${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=404
    echo -e "${result_color_table[${code:0:1}]}  404;Not Found${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=405
    echo -e "${result_color_table[${code:0:1}]}  405;Method Not Allowed${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=422
    echo -e "${result_color_table[${code:0:1}]}  422;Unprocessable Entity${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=429
    echo -e "${result_color_table[${code:0:1}]}  429;Too Many Requests${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=500
    echo -e "${result_color_table[${code:0:1}]}  500;Internal Server Error${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=501
    echo -e "${result_color_table[${code:0:1}]}  501;Not Implemented${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
}
##############################################################################
#
# Print help for getSystemEnergyImportTelemetry operation
#
##############################################################################
print_getSystemEnergyImportTelemetry_help() {
    echo ""
    echo -e "${BOLD}${WHITE}getSystemEnergyImportTelemetry - Retrieves energy imported from grid in regular intervals${OFF}${BLUE}(AUTH - OAuth2)${OFF}${BLUE}(AUTH - QUERY)${OFF}" | paste -sd' ' | fold -sw 80 | sed '2,$s/^/    /'
    echo -e ""
    echo -e "Retrieves energy imported from grid in regular intervals.
If no start_at is specified, defaults to midnight today, in the timezone of the system.
If the start_at specified is earlier than the system's first reported date, then midnight of the system's first reported date is considered as start_at.
The end_at is calculated as the minimum of the time of the request and (start time + granularity).
The meaning of granularity is as follows:

If granularity is 15mins, maximum 1 intervals will appear in response. If granularity is day, maximum 96 intervals will appear in response where each interval is of 15 mins duration.

The requested start date must be within 2 years from current date." | paste -sd' ' | fold -sw 80
    echo -e ""
    echo -e "${BOLD}${WHITE}Parameters${OFF}"
    echo -e "  * ${GREEN}system_id${OFF} ${BLUE}[integer]${OFF} ${RED}(required)${OFF} ${CYAN}(default: null)${OFF} - Unique numeric ID of the system. ${YELLOW}Specify as: system_id=value${OFF}" | paste -sd' ' | fold -sw 80 | sed '2,$s/^/    /'
    echo -e "  * ${GREEN}start_at${OFF} ${BLUE}[integer]${OFF} ${CYAN}(default: null)${OFF} - Start time for fetching the telemetry data in Epoch time format. Alternatively one can use start_date in place of start_at for passing the start date as string in YYYY-MM-DD format. By default start_at will appear in response. If start_date parameter is passed in the url then start_date field will appear in response.${YELLOW} Specify as: start_at=value${OFF}" \
        | paste -sd' ' | fold -sw 80 | sed '2,$s/^/    /'
    echo -e "  * ${GREEN}granularity${OFF} ${BLUE}[TelemetryGranularityEnum]${OFF} ${CYAN}(default: null)${OFF} - Granularity of the telemetry data. Default is 'day'.${YELLOW} Specify as: granularity=value${OFF}" \
        | paste -sd' ' | fold -sw 80 | sed '2,$s/^/    /'
    echo ""
    echo -e "${BOLD}${WHITE}Responses${OFF}"
    code=200
    echo -e "${result_color_table[${code:0:1}]}  200;Energy import telemetry in intervals.${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=401
    echo -e "${result_color_table[${code:0:1}]}  401;Unauthorized${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=403
    echo -e "${result_color_table[${code:0:1}]}  403;Forbidden${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=404
    echo -e "${result_color_table[${code:0:1}]}  404;Not Found${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=405
    echo -e "${result_color_table[${code:0:1}]}  405;Method Not Allowed${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=422
    echo -e "${result_color_table[${code:0:1}]}  422;Unprocessable Entity${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=429
    echo -e "${result_color_table[${code:0:1}]}  429;Too Many Requests${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=500
    echo -e "${result_color_table[${code:0:1}]}  500;Internal Server Error${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=501
    echo -e "${result_color_table[${code:0:1}]}  501;Not Implemented${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
}
##############################################################################
#
# Print help for getSystemEnergyLifetime operation
#
##############################################################################
print_getSystemEnergyLifetime_help() {
    echo ""
    echo -e "${BOLD}${WHITE}getSystemEnergyLifetime - energy_lifetime${OFF}${BLUE}(AUTH - OAuth2)${OFF}${BLUE}(AUTH - QUERY)${OFF}" | paste -sd' ' | fold -sw 80 | sed '2,$s/^/    /'
    echo -e ""
    echo -e "Returns a daily time series of energy produced by the system over its lifetime. All measurements are in Watt hours.
The time series includes one entry for each day from the start_date to the end_date with no gaps in the time series.
If the response includes trailing zeroes, such as [909, 4970, 0, 0, 0], then no energy has been reported for the last days in the series.
If the system has a meter, the time series includes data as measured by the microinverters until the first full day after the meter has been installed.
Later, it switches to using the data as measured by the meter. This is called the \"merged time series\".
The attribute 'meter_start_date' indicates the time when the meter measurements begin to be used.
You can retrieve the complete time series from the meter and from the microinverters by adding the parameter production=all to the request." | paste -sd' ' | fold -sw 80
    echo -e ""
    echo -e "${BOLD}${WHITE}Parameters${OFF}"
    echo -e "  * ${GREEN}system_id${OFF} ${BLUE}[integer]${OFF} ${RED}(required)${OFF} ${CYAN}(default: null)${OFF} - Unique numeric ID of the system. ${YELLOW}Specify as: system_id=value${OFF}" | paste -sd' ' | fold -sw 80 | sed '2,$s/^/    /'
    echo -e "  * ${GREEN}start_date${OFF} ${BLUE}[string]${OFF} ${CYAN}(default: null)${OFF} - Start date of the time series data. Defaults to the system's operational date. If the start_date is earlier than the system's operational_date, then the response data begins with the system operational_date as start_date. Pass as string in YYYY-MM-DD format.${YELLOW} Specify as: start_date=value${OFF}" \
        | paste -sd' ' | fold -sw 80 | sed '2,$s/^/    /'
    echo -e "  * ${GREEN}end_date${OFF} ${BLUE}[string]${OFF} ${CYAN}(default: null)${OFF} - End date of the time series data. Defaults to yesterday. If the end_date is later than yesterday, then the response data ends with yesterday as end_date. Pass as string in YYYY-MM-DD format.${YELLOW} Specify as: end_date=value${OFF}" \
        | paste -sd' ' | fold -sw 80 | sed '2,$s/^/    /'
    echo -e "  * ${GREEN}production${OFF} ${BLUE}[SystemEnergyLifetimeProductionEnum]${OFF} ${CYAN}(default: null)${OFF} - When 'all', returns the merged time series plus the time series as reported by the microinverters and the meter on the system. Other values are ignored.${YELLOW} Specify as: production=value${OFF}" \
        | paste -sd' ' | fold -sw 80 | sed '2,$s/^/    /'
    echo ""
    echo -e "${BOLD}${WHITE}Responses${OFF}"
    code=200
    echo -e "${result_color_table[${code:0:1}]}  200;When the query parameters include \"production=all\", returns meter and microinverter-measured time series.${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=401
    echo -e "${result_color_table[${code:0:1}]}  401;Unauthorized${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=403
    echo -e "${result_color_table[${code:0:1}]}  403;Forbidden${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=404
    echo -e "${result_color_table[${code:0:1}]}  404;Not Found${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=405
    echo -e "${result_color_table[${code:0:1}]}  405;Method Not Allowed${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=422
    echo -e "${result_color_table[${code:0:1}]}  422;Unprocessable Entity${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=429
    echo -e "${result_color_table[${code:0:1}]}  429;Too Many Requests${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=500
    echo -e "${result_color_table[${code:0:1}]}  500;Internal Server Error${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=501
    echo -e "${result_color_table[${code:0:1}]}  501;Not Implemented${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
}
##############################################################################
#
# Print help for getSystemProductionMeterReadings operation
#
##############################################################################
print_getSystemProductionMeterReadings_help() {
    echo ""
    echo -e "${BOLD}${WHITE}getSystemProductionMeterReadings - production_meter_readings${OFF}${BLUE}(AUTH - OAuth2)${OFF}${BLUE}(AUTH - QUERY)${OFF}" | paste -sd' ' | fold -sw 80 | sed '2,$s/^/    /'
    echo -e ""
    echo -e "Returns the last known reading of each production meter on the system as of the requested time, regardless of whether the meter is currently in service or retired.
Read_at is the time at which the reading was taken, and is always less than or equal to the requested end_at. Commonly, the reading will be within 30 minutes of the requested end_at.
However, larger deltas can occur and do not necessarily mean there is a problem with the meter or the system.
Systems that are configured to report infrequently can show large deltas on all meters, especially when end_at is close to the current time.
Meters that have been retired from a system will show an end_at that doesn't change, and that eventually is far away from the current time." | paste -sd' ' | fold -sw 80
    echo -e ""
    echo -e "${BOLD}${WHITE}Parameters${OFF}"
    echo -e "  * ${GREEN}system_id${OFF} ${BLUE}[integer]${OFF} ${RED}(required)${OFF} ${CYAN}(default: null)${OFF} - Unique numeric ID of the system. ${YELLOW}Specify as: system_id=value${OFF}" | paste -sd' ' | fold -sw 80 | sed '2,$s/^/    /'
    echo -e "  * ${GREEN}end_at${OFF} ${BLUE}[integer]${OFF} ${CYAN}(default: null)${OFF} - End of reporting period in Unix epoch time. If no end is specified, defaults to the time of the request. If the end is later than the last reported interval the response data ends with the last reported interval.${YELLOW} Specify as: end_at=value${OFF}" \
        | paste -sd' ' | fold -sw 80 | sed '2,$s/^/    /'
    echo ""
    echo -e "${BOLD}${WHITE}Responses${OFF}"
    code=200
    echo -e "${result_color_table[${code:0:1}]}  200;production_meter_readings${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=401
    echo -e "${result_color_table[${code:0:1}]}  401;Unauthorized${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=403
    echo -e "${result_color_table[${code:0:1}]}  403;Forbidden${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=404
    echo -e "${result_color_table[${code:0:1}]}  404;Not Found${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=405
    echo -e "${result_color_table[${code:0:1}]}  405;Method Not Allowed${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=422
    echo -e "${result_color_table[${code:0:1}]}  422;Unprocessable Entity${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=429
    echo -e "${result_color_table[${code:0:1}]}  429;Too Many Requests${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=500
    echo -e "${result_color_table[${code:0:1}]}  500;Internal Server Error${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=501
    echo -e "${result_color_table[${code:0:1}]}  501;Not Implemented${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
}
##############################################################################
#
# Print help for getSystemProductionMeterTelemetry operation
#
##############################################################################
print_getSystemProductionMeterTelemetry_help() {
    echo ""
    echo -e "${BOLD}${WHITE}getSystemProductionMeterTelemetry - Retrieves telemetry for all production meters for a system${OFF}${BLUE}(AUTH - OAuth2)${OFF}${BLUE}(AUTH - QUERY)${OFF}" | paste -sd' ' | fold -sw 80 | sed '2,$s/^/    /'
    echo -e ""
    echo -e "Retrieves telemetry for all the production meters of a system.
If no start_at is specified, defaults to midnight today, in the timezone of the system.
If the start_at specified is earlier than the system's first reported date, then midnight of the system's first reported date is considered as start_at.
The end_at is calculated as the minimum of the time of the request and (start time + granularity).
The meaning of granularity is as follows:

If granularity is 15mins, maximum 1 interval will appear in response.
If granularity is day, maximum 96 intervals, and if granularity is week, maximum 672 intervals, will appear in response where each interval is of 15 mins duration.

The requested start date must be within 2 years from current date.
By default start_at will appear in response. If start_date parameter is passed in the url then start_date field will appear in response.
By default end_at will appear in response. If end_date parameter is passed in the url then end_date field will appear in response." | paste -sd' ' | fold -sw 80
    echo -e ""
    echo -e "${BOLD}${WHITE}Parameters${OFF}"
    echo -e "  * ${GREEN}system_id${OFF} ${BLUE}[integer]${OFF} ${RED}(required)${OFF} ${CYAN}(default: null)${OFF} - Unique numeric ID of the system. ${YELLOW}Specify as: system_id=value${OFF}" | paste -sd' ' | fold -sw 80 | sed '2,$s/^/    /'
    echo -e "  * ${GREEN}start_at${OFF} ${BLUE}[integer]${OFF} ${CYAN}(default: null)${OFF} - Start time for fetching the telemetry data in Epoch time format. Alternatively one can use start_date in place of start_at for passing the start date as string in YYYY-MM-DD format. By default start_at will appear in response. If start_date parameter is passed in the url then start_date field will appear in response.${YELLOW} Specify as: start_at=value${OFF}" \
        | paste -sd' ' | fold -sw 80 | sed '2,$s/^/    /'
    echo -e "  * ${GREEN}granularity${OFF} ${BLUE}[TelemetryGranularityEnum]${OFF} ${CYAN}(default: null)${OFF} - Granularity of the telemetry data. Default is 'day'.${YELLOW} Specify as: granularity=value${OFF}" \
        | paste -sd' ' | fold -sw 80 | sed '2,$s/^/    /'
    echo ""
    echo -e "${BOLD}${WHITE}Responses${OFF}"
    code=200
    echo -e "${result_color_table[${code:0:1}]}  200;Telemetry for all production meters.${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=401
    echo -e "${result_color_table[${code:0:1}]}  401;Unauthorized${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=403
    echo -e "${result_color_table[${code:0:1}]}  403;Forbidden${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=404
    echo -e "${result_color_table[${code:0:1}]}  404;Not Found${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=405
    echo -e "${result_color_table[${code:0:1}]}  405;Method Not Allowed${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=422
    echo -e "${result_color_table[${code:0:1}]}  422;Unprocessable Entity${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=429
    echo -e "${result_color_table[${code:0:1}]}  429;Too Many Requests${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=500
    echo -e "${result_color_table[${code:0:1}]}  500;Internal Server Error${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=501
    echo -e "${result_color_table[${code:0:1}]}  501;Not Implemented${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
}
##############################################################################
#
# Print help for getSystemProductionMicroTelemetry operation
#
##############################################################################
print_getSystemProductionMicroTelemetry_help() {
    echo ""
    echo -e "${BOLD}${WHITE}getSystemProductionMicroTelemetry - Retrieves telemetry for all production micros for a system${OFF}${BLUE}(AUTH - OAuth2)${OFF}${BLUE}(AUTH - QUERY)${OFF}" | paste -sd' ' | fold -sw 80 | sed '2,$s/^/    /'
    echo -e ""
    echo -e "Retrieves telemetry for all the production micros of a system.
If no start_at is specified, defaults to midnight today, in the timezone of the system.
If the start_at specified is earlier than the system's first reported date, then midnight of the system's first reported date is considered as start_at.
The end_at is calculated as the minimum of the time of the request and (start time + granularity).
The meaning of granularity is as follows:

If granularity is 15mins, maximum 3 intervals will appear in response. If granularity is day, maximum 288 intervals will appear in response where each interval is of 5 mins duration.

The requested start date must be within 2 years from current date.
By default start_at will appear in response. If start_date parameter is passed in the url then start_date field will appear in response.
By default end_at will appear in response. If end_date parameter is passed in the url then end_date field will appear in response." | paste -sd' ' | fold -sw 80
    echo -e ""
    echo -e "${BOLD}${WHITE}Parameters${OFF}"
    echo -e "  * ${GREEN}system_id${OFF} ${BLUE}[integer]${OFF} ${RED}(required)${OFF} ${CYAN}(default: null)${OFF} - Unique numeric ID of the system. ${YELLOW}Specify as: system_id=value${OFF}" | paste -sd' ' | fold -sw 80 | sed '2,$s/^/    /'
    echo -e "  * ${GREEN}start_at${OFF} ${BLUE}[integer]${OFF} ${CYAN}(default: null)${OFF} - Start time for fetching the telemetry data in Epoch time format. Alternatively one can use start_date in place of start_at for passing the start date as string in YYYY-MM-DD format. By default start_at will appear in response. If start_date parameter is passed in the url then start_date field will appear in response.${YELLOW} Specify as: start_at=value${OFF}" \
        | paste -sd' ' | fold -sw 80 | sed '2,$s/^/    /'
    echo -e "  * ${GREEN}granularity${OFF} ${BLUE}[TelemetryGranularityEnum]${OFF} ${CYAN}(default: null)${OFF} - Granularity of the telemetry data. Default is 'day'.${YELLOW} Specify as: granularity=value${OFF}" \
        | paste -sd' ' | fold -sw 80 | sed '2,$s/^/    /'
    echo ""
    echo -e "${BOLD}${WHITE}Responses${OFF}"
    code=200
    echo -e "${result_color_table[${code:0:1}]}  200;Telemetry for all production micros.${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=401
    echo -e "${result_color_table[${code:0:1}]}  401;Unauthorized${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=403
    echo -e "${result_color_table[${code:0:1}]}  403;Forbidden${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=404
    echo -e "${result_color_table[${code:0:1}]}  404;Not Found${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=405
    echo -e "${result_color_table[${code:0:1}]}  405;Method Not Allowed${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=422
    echo -e "${result_color_table[${code:0:1}]}  422;Unprocessable Entity${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=429
    echo -e "${result_color_table[${code:0:1}]}  429;Too Many Requests${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=500
    echo -e "${result_color_table[${code:0:1}]}  500;Internal Server Error${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=501
    echo -e "${result_color_table[${code:0:1}]}  501;Not Implemented${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
}
##############################################################################
#
# Print help for getSystemRgmStats operation
#
##############################################################################
print_getSystemRgmStats_help() {
    echo ""
    echo -e "${BOLD}${WHITE}getSystemRgmStats - rgm_stats${OFF}${BLUE}(AUTH - OAuth2)${OFF}${BLUE}(AUTH - QUERY)${OFF}" | paste -sd' ' | fold -sw 80 | sed '2,$s/^/    /'
    echo -e ""
    echo -e "Returns performance statistics as measured by the revenue-grade meters installed on the specified system. If the total duration requested is more than one week, returns one week of intervals.
Intervals are 15 minutes in length and start at the top of the hour.
Requests for times that do not fall on the 15-minute marks are rounded down.
For example, a request for 08:01, 08:08, 08:11, or 08:14 (in epoch format) is treated as a request for 08:00 (in epoch format). Intervals are listed by their end times in epoch format.
The requested date range in one API hit cannot be more than 7 days and the requested start at must be within 2 years from current time.
If the start_at specified is earlier than the system's first reported date, then midnight of the system's first reported date is considered as start_at." | paste -sd' ' | fold -sw 80
    echo -e ""
    echo -e "${BOLD}${WHITE}Parameters${OFF}"
    echo -e "  * ${GREEN}system_id${OFF} ${BLUE}[integer]${OFF} ${RED}(required)${OFF} ${CYAN}(default: null)${OFF} - Unique numeric ID of the system. ${YELLOW}Specify as: system_id=value${OFF}" | paste -sd' ' | fold -sw 80 | sed '2,$s/^/    /'
    echo -e "  * ${GREEN}start_at${OFF} ${BLUE}[integer]${OFF} ${CYAN}(default: null)${OFF} - Start of period to report on in Unix epoch time. If no start is specified, the assumed start is midnight today, in the timezone of the system. If the start is earlier than one year ago, the response includes an empty intervals list. If the start is earlier than the system's operational_date, the response data begins at midnight of the first reported interval date.${YELLOW} Specify as: start_at=value${OFF}" \
        | paste -sd' ' | fold -sw 80 | sed '2,$s/^/    /'
    echo -e "  * ${GREEN}end_at${OFF} ${BLUE}[integer]${OFF} ${CYAN}(default: null)${OFF} - End of reporting period in Unix epoch time. If no end is specified, default to the time of the request or (start time + 1 week), whichever is earlier. If the end is later than the last reported interval the response data ends with the last reported interval.${YELLOW} Specify as: end_at=value${OFF}" \
        | paste -sd' ' | fold -sw 80 | sed '2,$s/^/    /'
    echo ""
    echo -e "${BOLD}${WHITE}Responses${OFF}"
    code=200
    echo -e "${result_color_table[${code:0:1}]}  200;rgm_stats${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=401
    echo -e "${result_color_table[${code:0:1}]}  401;Unauthorized${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=403
    echo -e "${result_color_table[${code:0:1}]}  403;Forbidden${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=404
    echo -e "${result_color_table[${code:0:1}]}  404;Not Found${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=405
    echo -e "${result_color_table[${code:0:1}]}  405;Method Not Allowed${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=422
    echo -e "${result_color_table[${code:0:1}]}  422;Unprocessable Entity${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=429
    echo -e "${result_color_table[${code:0:1}]}  429;Too Many Requests${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=500
    echo -e "${result_color_table[${code:0:1}]}  500;Internal Server Error${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=501
    echo -e "${result_color_table[${code:0:1}]}  501;Not Implemented${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
}
##############################################################################
#
# Print help for streamSystemLiveData operation
#
##############################################################################
print_streamSystemLiveData_help() {
    echo ""
    echo -e "${BOLD}${WHITE}streamSystemLiveData - Site Level Live Status${OFF}${BLUE}(AUTH - OAuth2)${OFF}${BLUE}(AUTH - QUERY)${OFF}" | paste -sd' ' | fold -sw 80 | sed '2,$s/^/    /'
    echo -e ""
    echo -e "API users can get real time live status data on demand for a given system.
User can retrieve real time power for PV Production, Grid Import/Export, Consumption, Battery Charge/Discharge, and Generator.
Users can also retrieve Grid Status, Battery Mode, and Battery State of Charge.
User will receive the stream for a duration of 30 seconds by default and can configure the time in seconds by passing 'duration' as a header parameter with a minimum value of 30 and maximum value of 300." | paste -sd' ' | fold -sw 80
    echo -e ""
    echo -e "${BOLD}${WHITE}Parameters${OFF}"
    echo -e "  * ${GREEN}system_id${OFF} ${BLUE}[integer]${OFF} ${RED}(required)${OFF} ${CYAN}(default: null)${OFF} - Unique numeric ID of the system. ${YELLOW}Specify as: system_id=value${OFF}" | paste -sd' ' | fold -sw 80 | sed '2,$s/^/    /'
    echo -e "  * ${GREEN}duration${OFF} ${BLUE}[integer]${OFF} ${CYAN}(default: null)${OFF} - Duration of the stream in seconds. Default=30, Min=30, Max=300, e.g=30. ${YELLOW}Specify as: duration:value${OFF}" | paste -sd' ' | fold -sw 80 | sed '2,$s/^/    /'
    echo ""
    echo -e "${BOLD}${WHITE}Responses${OFF}"
    code=200
    echo -e "${result_color_table[${code:0:1}]}  200;successful operation${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=401
    echo -e "${result_color_table[${code:0:1}]}  401;User will get 401 in the below cases. Response content type is application/json. NOT_AUTHENTICATED - API key is missing UNAUTHORIZED - Access token is invalid UNAUTHORIZED - Access token has expired NOT_AUTHENTICATED - API Key is invalid UNAUTHORIZED - Application is not authorized to access the requested resource${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=403
    echo -e "${result_color_table[${code:0:1}]}  403;User is not authorized. Response content type is application/json.${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=429
    echo -e "${result_color_table[${code:0:1}]}  429;Too Many Requests. Response content type is application/json.${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=461
    echo -e "${result_color_table[${code:0:1}]}  461;Duration is less than 30 seconds. Response content type is application/json.${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=462
    echo -e "${result_color_table[${code:0:1}]}  462;Duration is greater then 300 seconds. Response content type is application/json.${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=463
    echo -e "${result_color_table[${code:0:1}]}  463;Duration is not integer. Response content type is application/json.${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=466
    echo -e "${result_color_table[${code:0:1}]}  466;Envoy must be active and envoy version must be at least 6.0.0. Response content type is application/json.${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=468
    echo -e "${result_color_table[${code:0:1}]}  468;System ID does not exist. Response content type is application/json.${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=472
    echo -e "${result_color_table[${code:0:1}]}  472;For Ensemble sites, live stream will be supported in the following cases:
If site has an active battery or active system controller, then site must have active production meter and active consumption meter.
Otherwise, site must have active production meter. Response content type is application/json.${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=550
    echo -e "${result_color_table[${code:0:1}]}  550;Service unreachable. Response content type is application/json.${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=551
    echo -e "${result_color_table[${code:0:1}]}  551;Service unreachable. Response content type is application/json.${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=552
    echo -e "${result_color_table[${code:0:1}]}  552;Unable to connect. Response content type is application/json.${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
}
##############################################################################
#
# Print help for getSystemBatterySettings operation
#
##############################################################################
print_getSystemBatterySettings_help() {
    echo ""
    echo -e "${BOLD}${WHITE}getSystemBatterySettings - Returns the current battery settings of a system${OFF}${BLUE}(AUTH - OAuth2)${OFF}${BLUE}(AUTH - QUERY)${OFF}" | paste -sd' ' | fold -sw 80 | sed '2,$s/^/    /'
    echo -e ""
    echo -e "Returns the current battery settings of a system." | paste -sd' ' | fold -sw 80
    echo -e ""
    echo -e "${BOLD}${WHITE}Parameters${OFF}"
    echo -e "  * ${GREEN}system_id${OFF} ${BLUE}[integer]${OFF} ${RED}(required)${OFF} ${CYAN}(default: null)${OFF} - Unique numeric ID of the system. ${YELLOW}Specify as: system_id=value${OFF}" | paste -sd' ' | fold -sw 80 | sed '2,$s/^/    /'
    echo ""
    echo -e "${BOLD}${WHITE}Responses${OFF}"
    code=200
    echo -e "${result_color_table[${code:0:1}]}  200;battery_settings${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=401
    echo -e "${result_color_table[${code:0:1}]}  401;Unauthorized${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=403
    echo -e "${result_color_table[${code:0:1}]}  403;Forbidden${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=404
    echo -e "${result_color_table[${code:0:1}]}  404;Not Found${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=405
    echo -e "${result_color_table[${code:0:1}]}  405;Method Not Allowed${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=422
    echo -e "${result_color_table[${code:0:1}]}  422;Unprocessable Entity${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=429
    echo -e "${result_color_table[${code:0:1}]}  429;Too Many Requests${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=500
    echo -e "${result_color_table[${code:0:1}]}  500;Internal Server Error${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=501
    echo -e "${result_color_table[${code:0:1}]}  501;Not Implemented${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
}
##############################################################################
#
# Print help for getSystemGridStatusSettings operation
#
##############################################################################
print_getSystemGridStatusSettings_help() {
    echo ""
    echo -e "${BOLD}${WHITE}getSystemGridStatusSettings - Returns the current grid status of a system.${OFF}${BLUE}(AUTH - OAuth2)${OFF}${BLUE}(AUTH - QUERY)${OFF}" | paste -sd' ' | fold -sw 80 | sed '2,$s/^/    /'
    echo -e ""
    echo -e "Returns the current grid status of a system.
Please note that the status returned in the response is not real-time and is updated only after the IQ Gateway sends a new report to the Enphase cloud." | paste -sd' ' | fold -sw 80
    echo -e ""
    echo -e "${BOLD}${WHITE}Parameters${OFF}"
    echo -e "  * ${GREEN}system_id${OFF} ${BLUE}[integer]${OFF} ${RED}(required)${OFF} ${CYAN}(default: null)${OFF} - Unique numeric ID of the system. ${YELLOW}Specify as: system_id=value${OFF}" | paste -sd' ' | fold -sw 80 | sed '2,$s/^/    /'
    echo ""
    echo -e "${BOLD}${WHITE}Responses${OFF}"
    code=200
    echo -e "${result_color_table[${code:0:1}]}  200;grid_status${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=401
    echo -e "${result_color_table[${code:0:1}]}  401;Unauthorized${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=403
    echo -e "${result_color_table[${code:0:1}]}  403;Forbidden${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=404
    echo -e "${result_color_table[${code:0:1}]}  404;Not Found${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=405
    echo -e "${result_color_table[${code:0:1}]}  405;Method Not Allowed${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=422
    echo -e "${result_color_table[${code:0:1}]}  422;Unprocessable Entity${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=429
    echo -e "${result_color_table[${code:0:1}]}  429;Too Many Requests${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=500
    echo -e "${result_color_table[${code:0:1}]}  500;Internal Server Error${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=501
    echo -e "${result_color_table[${code:0:1}]}  501;Not Implemented${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
}
##############################################################################
#
# Print help for getSystemLoadControlSettings operation
#
##############################################################################
print_getSystemLoadControlSettings_help() {
    echo ""
    echo -e "${BOLD}${WHITE}getSystemLoadControlSettings - Returns the current load control settings of a system${OFF}${BLUE}(AUTH - OAuth2)${OFF}${BLUE}(AUTH - QUERY)${OFF}" | paste -sd' ' | fold -sw 80 | sed '2,$s/^/    /'
    echo -e ""
    echo -e "Returns the current load control settings of a system." | paste -sd' ' | fold -sw 80
    echo -e ""
    echo -e "${BOLD}${WHITE}Parameters${OFF}"
    echo -e "  * ${GREEN}system_id${OFF} ${BLUE}[integer]${OFF} ${RED}(required)${OFF} ${CYAN}(default: null)${OFF} - Unique numeric ID of the system. ${YELLOW}Specify as: system_id=value${OFF}" | paste -sd' ' | fold -sw 80 | sed '2,$s/^/    /'
    echo ""
    echo -e "${BOLD}${WHITE}Responses${OFF}"
    code=200
    echo -e "${result_color_table[${code:0:1}]}  200;load_control${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=401
    echo -e "${result_color_table[${code:0:1}]}  401;Unauthorized${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=403
    echo -e "${result_color_table[${code:0:1}]}  403;Forbidden${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=404
    echo -e "${result_color_table[${code:0:1}]}  404;Not Found${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=405
    echo -e "${result_color_table[${code:0:1}]}  405;Method Not Allowed${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=429
    echo -e "${result_color_table[${code:0:1}]}  429;Too Many Requests${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=500
    echo -e "${result_color_table[${code:0:1}]}  500;Internal Server Error${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=501
    echo -e "${result_color_table[${code:0:1}]}  501;Not Implemented${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
}
##############################################################################
#
# Print help for getSystemStormGuardSettings operation
#
##############################################################################
print_getSystemStormGuardSettings_help() {
    echo ""
    echo -e "${BOLD}${WHITE}getSystemStormGuardSettings - Returns the current storm guard settings of a system${OFF}${BLUE}(AUTH - OAuth2)${OFF}${BLUE}(AUTH - QUERY)${OFF}" | paste -sd' ' | fold -sw 80 | sed '2,$s/^/    /'
    echo -e ""
    echo -e "Returns the current storm guard settings of a system." | paste -sd' ' | fold -sw 80
    echo -e ""
    echo -e "${BOLD}${WHITE}Parameters${OFF}"
    echo -e "  * ${GREEN}system_id${OFF} ${BLUE}[integer]${OFF} ${RED}(required)${OFF} ${CYAN}(default: null)${OFF} - Unique numeric ID of the system. ${YELLOW}Specify as: system_id=value${OFF}" | paste -sd' ' | fold -sw 80 | sed '2,$s/^/    /'
    echo ""
    echo -e "${BOLD}${WHITE}Responses${OFF}"
    code=200
    echo -e "${result_color_table[${code:0:1}]}  200;storm_guard${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=401
    echo -e "${result_color_table[${code:0:1}]}  401;Unauthorized${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=403
    echo -e "${result_color_table[${code:0:1}]}  403;Forbidden${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=404
    echo -e "${result_color_table[${code:0:1}]}  404;Not Found${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=405
    echo -e "${result_color_table[${code:0:1}]}  405;Method Not Allowed${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=422
    echo -e "${result_color_table[${code:0:1}]}  422;Unprocessable Entity${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=429
    echo -e "${result_color_table[${code:0:1}]}  429;Too Many Requests${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=500
    echo -e "${result_color_table[${code:0:1}]}  500;Internal Server Error${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=501
    echo -e "${result_color_table[${code:0:1}]}  501;Not Implemented${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
}
##############################################################################
#
# Print help for updateSystemBatterySettings operation
#
##############################################################################
print_updateSystemBatterySettings_help() {
    echo ""
    echo -e "${BOLD}${WHITE}updateSystemBatterySettings - Updates the current battery settings of a system${OFF}${BLUE}(AUTH - OAuth2)${OFF}${BLUE}(AUTH - QUERY)${OFF}" | paste -sd' ' | fold -sw 80 | sed '2,$s/^/    /'
    echo -e ""
    echo -e "Updates the current battery settings of a system." | paste -sd' ' | fold -sw 80
    echo -e ""
    echo -e "${BOLD}${WHITE}Parameters${OFF}"
    echo -e "  * ${GREEN}system_id${OFF} ${BLUE}[integer]${OFF} ${RED}(required)${OFF} ${CYAN}(default: null)${OFF} - Unique numeric ID of the system. ${YELLOW}Specify as: system_id=value${OFF}" | paste -sd' ' | fold -sw 80 | sed '2,$s/^/    /'
    echo -e "  * ${GREEN}body${OFF} ${BLUE}[application/json]${OFF}${OFF} - " | paste -sd' ' | fold -sw 80 | sed '2,$s/^/    /'
    echo -e ""
    echo ""
    echo -e "${BOLD}${WHITE}Responses${OFF}"
    code=200
    echo -e "${result_color_table[${code:0:1}]}  200;OK${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=401
    echo -e "${result_color_table[${code:0:1}]}  401;Unauthorized${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=403
    echo -e "${result_color_table[${code:0:1}]}  403;Forbidden${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=404
    echo -e "${result_color_table[${code:0:1}]}  404;Not Found${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=405
    echo -e "${result_color_table[${code:0:1}]}  405;Method Not Allowed${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=422
    echo -e "${result_color_table[${code:0:1}]}  422;Unprocessable Entity${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=429
    echo -e "${result_color_table[${code:0:1}]}  429;Too Many Requests${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=500
    echo -e "${result_color_table[${code:0:1}]}  500;Internal Server Error${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=501
    echo -e "${result_color_table[${code:0:1}]}  501;Not Implemented${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
}
##############################################################################
#
# Print help for updateSystemLoadControlSettings operation
#
##############################################################################
print_updateSystemLoadControlSettings_help() {
    echo ""
    echo -e "${BOLD}${WHITE}updateSystemLoadControlSettings - Updates the current load control settings of a system${OFF}${BLUE}(AUTH - OAuth2)${OFF}${BLUE}(AUTH - QUERY)${OFF}" | paste -sd' ' | fold -sw 80 | sed '2,$s/^/    /'
    echo -e ""
    echo -e "Updates the current load control settings of a system." | paste -sd' ' | fold -sw 80
    echo -e ""
    echo -e "${BOLD}${WHITE}Parameters${OFF}"
    echo -e "  * ${GREEN}system_id${OFF} ${BLUE}[integer]${OFF} ${RED}(required)${OFF} ${CYAN}(default: null)${OFF} - Unique numeric ID of the system. ${YELLOW}Specify as: system_id=value${OFF}" | paste -sd' ' | fold -sw 80 | sed '2,$s/^/    /'
    echo -e "  * ${GREEN}body${OFF} ${BLUE}[application/json]${OFF}${OFF} - " | paste -sd' ' | fold -sw 80 | sed '2,$s/^/    /'
    echo -e ""
    echo ""
    echo -e "${BOLD}${WHITE}Responses${OFF}"
    code=200
    echo -e "${result_color_table[${code:0:1}]}  200;load_control${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=401
    echo -e "${result_color_table[${code:0:1}]}  401;Unauthorized${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=403
    echo -e "${result_color_table[${code:0:1}]}  403;Forbidden${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=404
    echo -e "${result_color_table[${code:0:1}]}  404;Not Found${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=405
    echo -e "${result_color_table[${code:0:1}]}  405;Method Not Allowed${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=429
    echo -e "${result_color_table[${code:0:1}]}  429;Too Many Requests${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=500
    echo -e "${result_color_table[${code:0:1}]}  500;Internal Server Error${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=501
    echo -e "${result_color_table[${code:0:1}]}  501;Not Implemented${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
}
##############################################################################
#
# Print help for updateSystemStormGuardSettings operation
#
##############################################################################
print_updateSystemStormGuardSettings_help() {
    echo ""
    echo -e "${BOLD}${WHITE}updateSystemStormGuardSettings - Updates the current storm guard settings of a system${OFF}${BLUE}(AUTH - OAuth2)${OFF}${BLUE}(AUTH - QUERY)${OFF}" | paste -sd' ' | fold -sw 80 | sed '2,$s/^/    /'
    echo -e ""
    echo -e "Updates the current storm guard status of a system." | paste -sd' ' | fold -sw 80
    echo -e ""
    echo -e "${BOLD}${WHITE}Parameters${OFF}"
    echo -e "  * ${GREEN}system_id${OFF} ${BLUE}[integer]${OFF} ${RED}(required)${OFF} ${CYAN}(default: null)${OFF} - Unique numeric ID of the system. ${YELLOW}Specify as: system_id=value${OFF}" | paste -sd' ' | fold -sw 80 | sed '2,$s/^/    /'
    echo -e "  * ${GREEN}body${OFF} ${BLUE}[application/json]${OFF}${OFF} - " | paste -sd' ' | fold -sw 80 | sed '2,$s/^/    /'
    echo -e ""
    echo ""
    echo -e "${BOLD}${WHITE}Responses${OFF}"
    code=200
    echo -e "${result_color_table[${code:0:1}]}  200;storm_guard${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=401
    echo -e "${result_color_table[${code:0:1}]}  401;Unauthorized${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=403
    echo -e "${result_color_table[${code:0:1}]}  403;Forbidden${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=404
    echo -e "${result_color_table[${code:0:1}]}  404;Not Found${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=405
    echo -e "${result_color_table[${code:0:1}]}  405;Method Not Allowed${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=422
    echo -e "${result_color_table[${code:0:1}]}  422;Unprocessable Entity${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=429
    echo -e "${result_color_table[${code:0:1}]}  429;Too Many Requests${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=500
    echo -e "${result_color_table[${code:0:1}]}  500;Internal Server Error${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=501
    echo -e "${result_color_table[${code:0:1}]}  501;Not Implemented${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
}
##############################################################################
#
# Print help for getInvertersSummaryByEnvoyOrSite operation
#
##############################################################################
print_getInvertersSummaryByEnvoyOrSite_help() {
    echo ""
    echo -e "${BOLD}${WHITE}getInvertersSummaryByEnvoyOrSite - inverters_summary_by_envoy_or_site${OFF}${BLUE}(AUTH - OAuth2)${OFF}${BLUE}(AUTH - QUERY)${OFF}" | paste -sd' ' | fold -sw 80 | sed '2,$s/^/    /'
    echo -e ""
    echo -e "Returns the microinverters summary based on the specified active envoy serial number or system." | paste -sd' ' | fold -sw 80
    echo -e ""
    echo -e "${BOLD}${WHITE}Parameters${OFF}"
    echo -e "  * ${GREEN}site_id${OFF} ${BLUE}[integer]${OFF} ${CYAN}(default: null)${OFF} - Site ID. The response will contain only those microinverters reporting to one of the active envoys of the given site.${YELLOW} Specify as: site_id=value${OFF}" \
        | paste -sd' ' | fold -sw 80 | sed '2,$s/^/    /'
    echo -e "  * ${GREEN}envoy_serial_number${OFF} ${BLUE}[string]${OFF} ${CYAN}(default: null)${OFF} - Active envoy serial number. Only microinverters reporting to the given active envoy will be present in the response.${YELLOW} Specify as: envoy_serial_number=value${OFF}" \
        | paste -sd' ' | fold -sw 80 | sed '2,$s/^/    /'
    echo ""
    echo -e "${BOLD}${WHITE}Responses${OFF}"
    code=200
    echo -e "${result_color_table[${code:0:1}]}  200;inverters_summary_by_envoy_or_site${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=401
    echo -e "${result_color_table[${code:0:1}]}  401;Unauthorized${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=405
    echo -e "${result_color_table[${code:0:1}]}  405;Method Not Allowed${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=422
    echo -e "${result_color_table[${code:0:1}]}  422;Unprocessable Entity${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=429
    echo -e "${result_color_table[${code:0:1}]}  429;Too Many Requests${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=500
    echo -e "${result_color_table[${code:0:1}]}  500;Internal Server Error${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=501
    echo -e "${result_color_table[${code:0:1}]}  501;Not Implemented${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
}
##############################################################################
#
# Print help for getSystem operation
#
##############################################################################
print_getSystem_help() {
    echo ""
    echo -e "${BOLD}${WHITE}getSystem - Retrieves a System by ID${OFF}${BLUE}(AUTH - OAuth2)${OFF}${BLUE}(AUTH - QUERY)${OFF}" | paste -sd' ' | fold -sw 80 | sed '2,$s/^/    /'
    echo -e ""
    echo -e "Retrieves a system by ID." | paste -sd' ' | fold -sw 80
    echo -e ""
    echo -e "${BOLD}${WHITE}Parameters${OFF}"
    echo -e "  * ${GREEN}system_id${OFF} ${BLUE}[integer]${OFF} ${RED}(required)${OFF} ${CYAN}(default: null)${OFF} - Unique numeric ID of the system. ${YELLOW}Specify as: system_id=value${OFF}" | paste -sd' ' | fold -sw 80 | sed '2,$s/^/    /'
    echo ""
    echo -e "${BOLD}${WHITE}Responses${OFF}"
    code=200
    echo -e "${result_color_table[${code:0:1}]}  200;System fetched.${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=401
    echo -e "${result_color_table[${code:0:1}]}  401;Unauthorized${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=403
    echo -e "${result_color_table[${code:0:1}]}  403;Forbidden${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=404
    echo -e "${result_color_table[${code:0:1}]}  404;Not Found${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=405
    echo -e "${result_color_table[${code:0:1}]}  405;Method Not Allowed${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=429
    echo -e "${result_color_table[${code:0:1}]}  429;Too Many Requests${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=500
    echo -e "${result_color_table[${code:0:1}]}  500;Internal Server Error${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=501
    echo -e "${result_color_table[${code:0:1}]}  501;Not Implemented${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
}
##############################################################################
#
# Print help for getSystemDevices operation
#
##############################################################################
print_getSystemDevices_help() {
    echo ""
    echo -e "${BOLD}${WHITE}getSystemDevices - Retrieves devices for a given system${OFF}${BLUE}(AUTH - OAuth2)${OFF}${BLUE}(AUTH - QUERY)${OFF}" | paste -sd' ' | fold -sw 80 | sed '2,$s/^/    /'
    echo -e ""
    echo -e "Retrieves devices for a given system. Only devices that are active will be returned in the response." | paste -sd' ' | fold -sw 80
    echo -e ""
    echo -e "${BOLD}${WHITE}Parameters${OFF}"
    echo -e "  * ${GREEN}system_id${OFF} ${BLUE}[integer]${OFF} ${RED}(required)${OFF} ${CYAN}(default: null)${OFF} - Unique numeric ID of the system. ${YELLOW}Specify as: system_id=value${OFF}" | paste -sd' ' | fold -sw 80 | sed '2,$s/^/    /'
    echo ""
    echo -e "${BOLD}${WHITE}Responses${OFF}"
    code=200
    echo -e "${result_color_table[${code:0:1}]}  200;List of devices.${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=401
    echo -e "${result_color_table[${code:0:1}]}  401;Unauthorized${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=403
    echo -e "${result_color_table[${code:0:1}]}  403;Forbidden${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=404
    echo -e "${result_color_table[${code:0:1}]}  404;Not Found${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=405
    echo -e "${result_color_table[${code:0:1}]}  405;Method Not Allowed${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=429
    echo -e "${result_color_table[${code:0:1}]}  429;Too Many Requests${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=500
    echo -e "${result_color_table[${code:0:1}]}  500;Internal Server Error${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=501
    echo -e "${result_color_table[${code:0:1}]}  501;Not Implemented${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
}
##############################################################################
#
# Print help for getSystemSummary operation
#
##############################################################################
print_getSystemSummary_help() {
    echo ""
    echo -e "${BOLD}${WHITE}getSystemSummary - Retrieves a system summary${OFF}${BLUE}(AUTH - OAuth2)${OFF}${BLUE}(AUTH - QUERY)${OFF}" | paste -sd' ' | fold -sw 80 | sed '2,$s/^/    /'
    echo -e ""
    echo -e "Returns system summary based on the specified system ID." | paste -sd' ' | fold -sw 80
    echo -e ""
    echo -e "${BOLD}${WHITE}Parameters${OFF}"
    echo -e "  * ${GREEN}system_id${OFF} ${BLUE}[integer]${OFF} ${RED}(required)${OFF} ${CYAN}(default: null)${OFF} - Unique numeric ID of the system. ${YELLOW}Specify as: system_id=value${OFF}" | paste -sd' ' | fold -sw 80 | sed '2,$s/^/    /'
    echo ""
    echo -e "${BOLD}${WHITE}Responses${OFF}"
    code=200
    echo -e "${result_color_table[${code:0:1}]}  200;System summary fetched.${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=401
    echo -e "${result_color_table[${code:0:1}]}  401;Unauthorized${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=403
    echo -e "${result_color_table[${code:0:1}]}  403;Forbidden${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=404
    echo -e "${result_color_table[${code:0:1}]}  404;Not Found${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=405
    echo -e "${result_color_table[${code:0:1}]}  405;Method Not Allowed${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=429
    echo -e "${result_color_table[${code:0:1}]}  429;Too Many Requests${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=500
    echo -e "${result_color_table[${code:0:1}]}  500;Internal Server Error${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=501
    echo -e "${result_color_table[${code:0:1}]}  501;Not Implemented${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
}
##############################################################################
#
# Print help for getSystems operation
#
##############################################################################
print_getSystems_help() {
    echo ""
    echo -e "${BOLD}${WHITE}getSystems - Fetch systems${OFF}${BLUE}(AUTH - OAuth2)${OFF}${BLUE}(AUTH - QUERY)${OFF}" | paste -sd' ' | fold -sw 80 | sed '2,$s/^/    /'
    echo -e ""
    echo -e "Returns a list of systems for which the user can make API requests. By default, systems are returned in batches of 10. The maximum size is 100." | paste -sd' ' | fold -sw 80
    echo -e ""
    echo -e "${BOLD}${WHITE}Parameters${OFF}"
    echo -e "  * ${GREEN}page${OFF} ${BLUE}[integer]${OFF} ${CYAN}(default: null)${OFF} - Page to be returned. Default=1, Min=1. For example, if page is set to 2, 2nd page is returned.${YELLOW} Specify as: page=value${OFF}" \
        | paste -sd' ' | fold -sw 80 | sed '2,$s/^/    /'
    echo -e "  * ${GREEN}size${OFF} ${BLUE}[integer]${OFF} ${CYAN}(default: null)${OFF} - Maximum number of records shown per page. Default=10, Min=1, Max=100.  For example, if set to 5, 5 records are shown per page.${YELLOW} Specify as: size=value${OFF}" \
        | paste -sd' ' | fold -sw 80 | sed '2,$s/^/    /'
    echo -e "  * ${GREEN}sort_by${OFF} ${BLUE}[SystemSortByEnum]${OFF} ${CYAN}(default: null)${OFF} - Returns list of systems sorted by <sort_by> field. To get ASC order sorted list, user sort_by = <key>. To get DESC order sorted list, use sort_by = (-)<key>. Current sort keys supported are id, name, and last_report_date. By default the list is sorted by decreasing system ID.${YELLOW} Specify as: sort_by=value${OFF}" \
        | paste -sd' ' | fold -sw 80 | sed '2,$s/^/    /'
    echo ""
    echo -e "${BOLD}${WHITE}Responses${OFF}"
    code=200
    echo -e "${result_color_table[${code:0:1}]}  200;List of systems.${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=401
    echo -e "${result_color_table[${code:0:1}]}  401;Unauthorized${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=405
    echo -e "${result_color_table[${code:0:1}]}  405;Method Not Allowed${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=422
    echo -e "${result_color_table[${code:0:1}]}  422;Unprocessable Entity${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=429
    echo -e "${result_color_table[${code:0:1}]}  429;Too Many Requests${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=500
    echo -e "${result_color_table[${code:0:1}]}  500;Internal Server Error${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=501
    echo -e "${result_color_table[${code:0:1}]}  501;Not Implemented${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
}
##############################################################################
#
# Print help for retrieveSystemId operation
#
##############################################################################
print_retrieveSystemId_help() {
    echo ""
    echo -e "${BOLD}${WHITE}retrieveSystemId - Retrieve system for a given envoy serial number${OFF}${BLUE}(AUTH - OAuth2)${OFF}${BLUE}(AUTH - QUERY)${OFF}" | paste -sd' ' | fold -sw 80 | sed '2,$s/^/    /'
    echo -e ""
    echo -e "Get system ID by passing envoy serial number. If the serial number of a retired envoy is passed in the request param, a 404 Not Found response will be returned." | paste -sd' ' | fold -sw 80
    echo -e ""
    echo -e "${BOLD}${WHITE}Parameters${OFF}"
    echo -e "  * ${GREEN}serial_num${OFF} ${BLUE}[string]${OFF} ${RED}(required)${OFF} ${CYAN}(default: null)${OFF} - Envoy serial number.${YELLOW} Specify as: serial_num=value${OFF}" \
        | paste -sd' ' | fold -sw 80 | sed '2,$s/^/    /'
    echo ""
    echo -e "${BOLD}${WHITE}Responses${OFF}"
    code=200
    echo -e "${result_color_table[${code:0:1}]}  200;retrieve_system_id${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=401
    echo -e "${result_color_table[${code:0:1}]}  401;Unauthorized${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=404
    echo -e "${result_color_table[${code:0:1}]}  404;Not Found${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=405
    echo -e "${result_color_table[${code:0:1}]}  405;Method Not Allowed${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=422
    echo -e "${result_color_table[${code:0:1}]}  422;Unprocessable Entity${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=429
    echo -e "${result_color_table[${code:0:1}]}  429;Too Many Requests${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=500
    echo -e "${result_color_table[${code:0:1}]}  500;Internal Server Error${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=501
    echo -e "${result_color_table[${code:0:1}]}  501;Not Implemented${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
}
##############################################################################
#
# Print help for searchSystems operation
#
##############################################################################
print_searchSystems_help() {
    echo ""
    echo -e "${BOLD}${WHITE}searchSystems - Search and filter systems${OFF}${BLUE}(AUTH - OAuth2)${OFF}${BLUE}(AUTH - QUERY)${OFF}" | paste -sd' ' | fold -sw 80 | sed '2,$s/^/    /'
    echo -e ""
    echo -e "Search and filter systems. Provide only valid values in request parameters. Empty and invalid values will be ignored. Invalid keys will be rejected." | paste -sd' ' | fold -sw 80
    echo -e ""
    echo -e "${BOLD}${WHITE}Parameters${OFF}"
    echo -e "  * ${GREEN}page${OFF} ${BLUE}[integer]${OFF} ${CYAN}(default: null)${OFF} - Page to be returned. Default=1, Min=1, e.g=2.${YELLOW} Specify as: page=value${OFF}" \
        | paste -sd' ' | fold -sw 80 | sed '2,$s/^/    /'
    echo -e "  * ${GREEN}size${OFF} ${BLUE}[integer]${OFF} ${CYAN}(default: null)${OFF} - Maximum number of records shown per page. Default=10, Min=1, Max=1000, e.g=5.${YELLOW} Specify as: size=value${OFF}" \
        | paste -sd' ' | fold -sw 80 | sed '2,$s/^/    /'
    echo -e "  * ${GREEN}body${OFF} ${BLUE}[application/json]${OFF}${OFF} - " | paste -sd' ' | fold -sw 80 | sed '2,$s/^/    /'
    echo -e ""
    echo ""
    echo -e "${BOLD}${WHITE}Responses${OFF}"
    code=200
    echo -e "${result_color_table[${code:0:1}]}  200;List of systems.${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=401
    echo -e "${result_color_table[${code:0:1}]}  401;Unauthorized${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=404
    echo -e "${result_color_table[${code:0:1}]}  404;Not Found${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=422
    echo -e "${result_color_table[${code:0:1}]}  422;Unprocessable Entity${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=429
    echo -e "${result_color_table[${code:0:1}]}  429;Too Many Requests${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=500
    echo -e "${result_color_table[${code:0:1}]}  500;Internal Server Error${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=501
    echo -e "${result_color_table[${code:0:1}]}  501;Not Implemented${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
}


##############################################################################
#
# Call getSystemAcbDeviceTelemetry operation
#
##############################################################################
call_getSystemAcbDeviceTelemetry() {
    # ignore error about 'path_parameter_names' being unused; passed by reference
    # shellcheck disable=SC2034
    local path_parameter_names=(system_id serial_no)
    # ignore error about 'query_parameter_names' being unused; passed by reference
    # shellcheck disable=SC2034
    local query_parameter_names=(start_at granularity   key )
    local path

    if ! path=$(build_request_path "/api/v4/systems/{system_id}/devices/acbs/{serial_no}/telemetry" path_parameter_names query_parameter_names); then
        ERROR_MSG=$path
        exit 1
    fi
    local method="GET"
    local headers_curl
    headers_curl=$(header_arguments_to_curl)
    if [[ -n $header_accept ]]; then
        headers_curl="${headers_curl} -H 'Accept: ${header_accept}'"
    fi

    local basic_auth_option=""
    if [[ -n $basic_auth_credential ]]; then
        basic_auth_option="-u ${basic_auth_credential}"
    fi
    if [[ "$print_curl" = true ]]; then
        echo "curl -d '' ${basic_auth_option} ${curl_arguments} ${headers_curl} -X ${method} \"${host}${path}\""
    else
        eval "curl -d '' ${basic_auth_option} ${curl_arguments} ${headers_curl} -X ${method} \"${host}${path}\""
    fi
}

##############################################################################
#
# Call getSystemEnchargeDeviceTelemetry operation
#
##############################################################################
call_getSystemEnchargeDeviceTelemetry() {
    # ignore error about 'path_parameter_names' being unused; passed by reference
    # shellcheck disable=SC2034
    local path_parameter_names=(system_id serial_no)
    # ignore error about 'query_parameter_names' being unused; passed by reference
    # shellcheck disable=SC2034
    local query_parameter_names=(start_at granularity   key )
    local path

    if ! path=$(build_request_path "/api/v4/systems/{system_id}/devices/encharges/{serial_no}/telemetry" path_parameter_names query_parameter_names); then
        ERROR_MSG=$path
        exit 1
    fi
    local method="GET"
    local headers_curl
    headers_curl=$(header_arguments_to_curl)
    if [[ -n $header_accept ]]; then
        headers_curl="${headers_curl} -H 'Accept: ${header_accept}'"
    fi

    local basic_auth_option=""
    if [[ -n $basic_auth_credential ]]; then
        basic_auth_option="-u ${basic_auth_credential}"
    fi
    if [[ "$print_curl" = true ]]; then
        echo "curl -d '' ${basic_auth_option} ${curl_arguments} ${headers_curl} -X ${method} \"${host}${path}\""
    else
        eval "curl -d '' ${basic_auth_option} ${curl_arguments} ${headers_curl} -X ${method} \"${host}${path}\""
    fi
}

##############################################################################
#
# Call getSystemMicroDeviceTelemetry operation
#
##############################################################################
call_getSystemMicroDeviceTelemetry() {
    # ignore error about 'path_parameter_names' being unused; passed by reference
    # shellcheck disable=SC2034
    local path_parameter_names=(system_id serial_no)
    # ignore error about 'query_parameter_names' being unused; passed by reference
    # shellcheck disable=SC2034
    local query_parameter_names=(start_at granularity   key )
    local path

    if ! path=$(build_request_path "/api/v4/systems/{system_id}/devices/micros/{serial_no}/telemetry" path_parameter_names query_parameter_names); then
        ERROR_MSG=$path
        exit 1
    fi
    local method="GET"
    local headers_curl
    headers_curl=$(header_arguments_to_curl)
    if [[ -n $header_accept ]]; then
        headers_curl="${headers_curl} -H 'Accept: ${header_accept}'"
    fi

    local basic_auth_option=""
    if [[ -n $basic_auth_credential ]]; then
        basic_auth_option="-u ${basic_auth_credential}"
    fi
    if [[ "$print_curl" = true ]]; then
        echo "curl -d '' ${basic_auth_option} ${curl_arguments} ${headers_curl} -X ${method} \"${host}${path}\""
    else
        eval "curl -d '' ${basic_auth_option} ${curl_arguments} ${headers_curl} -X ${method} \"${host}${path}\""
    fi
}

##############################################################################
#
# Call getSystemBatteryLifetime operation
#
##############################################################################
call_getSystemBatteryLifetime() {
    # ignore error about 'path_parameter_names' being unused; passed by reference
    # shellcheck disable=SC2034
    local path_parameter_names=(system_id)
    # ignore error about 'query_parameter_names' being unused; passed by reference
    # shellcheck disable=SC2034
    local query_parameter_names=(start_date end_date   key )
    local path

    if ! path=$(build_request_path "/api/v4/systems/{system_id}/battery_lifetime" path_parameter_names query_parameter_names); then
        ERROR_MSG=$path
        exit 1
    fi
    local method="GET"
    local headers_curl
    headers_curl=$(header_arguments_to_curl)
    if [[ -n $header_accept ]]; then
        headers_curl="${headers_curl} -H 'Accept: ${header_accept}'"
    fi

    local basic_auth_option=""
    if [[ -n $basic_auth_credential ]]; then
        basic_auth_option="-u ${basic_auth_credential}"
    fi
    if [[ "$print_curl" = true ]]; then
        echo "curl -d '' ${basic_auth_option} ${curl_arguments} ${headers_curl} -X ${method} \"${host}${path}\""
    else
        eval "curl -d '' ${basic_auth_option} ${curl_arguments} ${headers_curl} -X ${method} \"${host}${path}\""
    fi
}

##############################################################################
#
# Call getSystemBatteryTelemetry operation
#
##############################################################################
call_getSystemBatteryTelemetry() {
    # ignore error about 'path_parameter_names' being unused; passed by reference
    # shellcheck disable=SC2034
    local path_parameter_names=(system_id)
    # ignore error about 'query_parameter_names' being unused; passed by reference
    # shellcheck disable=SC2034
    local query_parameter_names=(start_at granularity   key )
    local path

    if ! path=$(build_request_path "/api/v4/systems/{system_id}/telemetry/battery" path_parameter_names query_parameter_names); then
        ERROR_MSG=$path
        exit 1
    fi
    local method="GET"
    local headers_curl
    headers_curl=$(header_arguments_to_curl)
    if [[ -n $header_accept ]]; then
        headers_curl="${headers_curl} -H 'Accept: ${header_accept}'"
    fi

    local basic_auth_option=""
    if [[ -n $basic_auth_credential ]]; then
        basic_auth_option="-u ${basic_auth_credential}"
    fi
    if [[ "$print_curl" = true ]]; then
        echo "curl -d '' ${basic_auth_option} ${curl_arguments} ${headers_curl} -X ${method} \"${host}${path}\""
    else
        eval "curl -d '' ${basic_auth_option} ${curl_arguments} ${headers_curl} -X ${method} \"${host}${path}\""
    fi
}

##############################################################################
#
# Call getSystemConsumptionLifetime operation
#
##############################################################################
call_getSystemConsumptionLifetime() {
    # ignore error about 'path_parameter_names' being unused; passed by reference
    # shellcheck disable=SC2034
    local path_parameter_names=(system_id)
    # ignore error about 'query_parameter_names' being unused; passed by reference
    # shellcheck disable=SC2034
    local query_parameter_names=(start_date end_date   key )
    local path

    if ! path=$(build_request_path "/api/v4/systems/{system_id}/consumption_lifetime" path_parameter_names query_parameter_names); then
        ERROR_MSG=$path
        exit 1
    fi
    local method="GET"
    local headers_curl
    headers_curl=$(header_arguments_to_curl)
    if [[ -n $header_accept ]]; then
        headers_curl="${headers_curl} -H 'Accept: ${header_accept}'"
    fi

    local basic_auth_option=""
    if [[ -n $basic_auth_credential ]]; then
        basic_auth_option="-u ${basic_auth_credential}"
    fi
    if [[ "$print_curl" = true ]]; then
        echo "curl -d '' ${basic_auth_option} ${curl_arguments} ${headers_curl} -X ${method} \"${host}${path}\""
    else
        eval "curl -d '' ${basic_auth_option} ${curl_arguments} ${headers_curl} -X ${method} \"${host}${path}\""
    fi
}

##############################################################################
#
# Call getSystemConsumptionMeterTelemetry operation
#
##############################################################################
call_getSystemConsumptionMeterTelemetry() {
    # ignore error about 'path_parameter_names' being unused; passed by reference
    # shellcheck disable=SC2034
    local path_parameter_names=(system_id)
    # ignore error about 'query_parameter_names' being unused; passed by reference
    # shellcheck disable=SC2034
    local query_parameter_names=(start_at granularity   key )
    local path

    if ! path=$(build_request_path "/api/v4/systems/{system_id}/telemetry/consumption_meter" path_parameter_names query_parameter_names); then
        ERROR_MSG=$path
        exit 1
    fi
    local method="GET"
    local headers_curl
    headers_curl=$(header_arguments_to_curl)
    if [[ -n $header_accept ]]; then
        headers_curl="${headers_curl} -H 'Accept: ${header_accept}'"
    fi

    local basic_auth_option=""
    if [[ -n $basic_auth_credential ]]; then
        basic_auth_option="-u ${basic_auth_credential}"
    fi
    if [[ "$print_curl" = true ]]; then
        echo "curl -d '' ${basic_auth_option} ${curl_arguments} ${headers_curl} -X ${method} \"${host}${path}\""
    else
        eval "curl -d '' ${basic_auth_option} ${curl_arguments} ${headers_curl} -X ${method} \"${host}${path}\""
    fi
}

##############################################################################
#
# Call getSystemEnergyExportLifetime operation
#
##############################################################################
call_getSystemEnergyExportLifetime() {
    # ignore error about 'path_parameter_names' being unused; passed by reference
    # shellcheck disable=SC2034
    local path_parameter_names=(system_id)
    # ignore error about 'query_parameter_names' being unused; passed by reference
    # shellcheck disable=SC2034
    local query_parameter_names=(start_date end_date   key )
    local path

    if ! path=$(build_request_path "/api/v4/systems/{system_id}/energy_export_lifetime" path_parameter_names query_parameter_names); then
        ERROR_MSG=$path
        exit 1
    fi
    local method="GET"
    local headers_curl
    headers_curl=$(header_arguments_to_curl)
    if [[ -n $header_accept ]]; then
        headers_curl="${headers_curl} -H 'Accept: ${header_accept}'"
    fi

    local basic_auth_option=""
    if [[ -n $basic_auth_credential ]]; then
        basic_auth_option="-u ${basic_auth_credential}"
    fi
    if [[ "$print_curl" = true ]]; then
        echo "curl -d '' ${basic_auth_option} ${curl_arguments} ${headers_curl} -X ${method} \"${host}${path}\""
    else
        eval "curl -d '' ${basic_auth_option} ${curl_arguments} ${headers_curl} -X ${method} \"${host}${path}\""
    fi
}

##############################################################################
#
# Call getSystemEnergyExportTelemetry operation
#
##############################################################################
call_getSystemEnergyExportTelemetry() {
    # ignore error about 'path_parameter_names' being unused; passed by reference
    # shellcheck disable=SC2034
    local path_parameter_names=(system_id)
    # ignore error about 'query_parameter_names' being unused; passed by reference
    # shellcheck disable=SC2034
    local query_parameter_names=(start_at granularity   key )
    local path

    if ! path=$(build_request_path "/api/v4/systems/{system_id}/energy_export_telemetry" path_parameter_names query_parameter_names); then
        ERROR_MSG=$path
        exit 1
    fi
    local method="GET"
    local headers_curl
    headers_curl=$(header_arguments_to_curl)
    if [[ -n $header_accept ]]; then
        headers_curl="${headers_curl} -H 'Accept: ${header_accept}'"
    fi

    local basic_auth_option=""
    if [[ -n $basic_auth_credential ]]; then
        basic_auth_option="-u ${basic_auth_credential}"
    fi
    if [[ "$print_curl" = true ]]; then
        echo "curl -d '' ${basic_auth_option} ${curl_arguments} ${headers_curl} -X ${method} \"${host}${path}\""
    else
        eval "curl -d '' ${basic_auth_option} ${curl_arguments} ${headers_curl} -X ${method} \"${host}${path}\""
    fi
}

##############################################################################
#
# Call getSystemEnergyImportLifetime operation
#
##############################################################################
call_getSystemEnergyImportLifetime() {
    # ignore error about 'path_parameter_names' being unused; passed by reference
    # shellcheck disable=SC2034
    local path_parameter_names=(system_id)
    # ignore error about 'query_parameter_names' being unused; passed by reference
    # shellcheck disable=SC2034
    local query_parameter_names=(start_date end_date   key )
    local path

    if ! path=$(build_request_path "/api/v4/systems/{system_id}/energy_import_lifetime" path_parameter_names query_parameter_names); then
        ERROR_MSG=$path
        exit 1
    fi
    local method="GET"
    local headers_curl
    headers_curl=$(header_arguments_to_curl)
    if [[ -n $header_accept ]]; then
        headers_curl="${headers_curl} -H 'Accept: ${header_accept}'"
    fi

    local basic_auth_option=""
    if [[ -n $basic_auth_credential ]]; then
        basic_auth_option="-u ${basic_auth_credential}"
    fi
    if [[ "$print_curl" = true ]]; then
        echo "curl -d '' ${basic_auth_option} ${curl_arguments} ${headers_curl} -X ${method} \"${host}${path}\""
    else
        eval "curl -d '' ${basic_auth_option} ${curl_arguments} ${headers_curl} -X ${method} \"${host}${path}\""
    fi
}

##############################################################################
#
# Call getSystemEnergyImportTelemetry operation
#
##############################################################################
call_getSystemEnergyImportTelemetry() {
    # ignore error about 'path_parameter_names' being unused; passed by reference
    # shellcheck disable=SC2034
    local path_parameter_names=(system_id)
    # ignore error about 'query_parameter_names' being unused; passed by reference
    # shellcheck disable=SC2034
    local query_parameter_names=(start_at granularity   key )
    local path

    if ! path=$(build_request_path "/api/v4/systems/{system_id}/energy_import_telemetry" path_parameter_names query_parameter_names); then
        ERROR_MSG=$path
        exit 1
    fi
    local method="GET"
    local headers_curl
    headers_curl=$(header_arguments_to_curl)
    if [[ -n $header_accept ]]; then
        headers_curl="${headers_curl} -H 'Accept: ${header_accept}'"
    fi

    local basic_auth_option=""
    if [[ -n $basic_auth_credential ]]; then
        basic_auth_option="-u ${basic_auth_credential}"
    fi
    if [[ "$print_curl" = true ]]; then
        echo "curl -d '' ${basic_auth_option} ${curl_arguments} ${headers_curl} -X ${method} \"${host}${path}\""
    else
        eval "curl -d '' ${basic_auth_option} ${curl_arguments} ${headers_curl} -X ${method} \"${host}${path}\""
    fi
}

##############################################################################
#
# Call getSystemEnergyLifetime operation
#
##############################################################################
call_getSystemEnergyLifetime() {
    # ignore error about 'path_parameter_names' being unused; passed by reference
    # shellcheck disable=SC2034
    local path_parameter_names=(system_id)
    # ignore error about 'query_parameter_names' being unused; passed by reference
    # shellcheck disable=SC2034
    local query_parameter_names=(start_date end_date production   key )
    local path

    if ! path=$(build_request_path "/api/v4/systems/{system_id}/energy_lifetime" path_parameter_names query_parameter_names); then
        ERROR_MSG=$path
        exit 1
    fi
    local method="GET"
    local headers_curl
    headers_curl=$(header_arguments_to_curl)
    if [[ -n $header_accept ]]; then
        headers_curl="${headers_curl} -H 'Accept: ${header_accept}'"
    fi

    local basic_auth_option=""
    if [[ -n $basic_auth_credential ]]; then
        basic_auth_option="-u ${basic_auth_credential}"
    fi
    if [[ "$print_curl" = true ]]; then
        echo "curl -d '' ${basic_auth_option} ${curl_arguments} ${headers_curl} -X ${method} \"${host}${path}\""
    else
        eval "curl -d '' ${basic_auth_option} ${curl_arguments} ${headers_curl} -X ${method} \"${host}${path}\""
    fi
}

##############################################################################
#
# Call getSystemProductionMeterReadings operation
#
##############################################################################
call_getSystemProductionMeterReadings() {
    # ignore error about 'path_parameter_names' being unused; passed by reference
    # shellcheck disable=SC2034
    local path_parameter_names=(system_id)
    # ignore error about 'query_parameter_names' being unused; passed by reference
    # shellcheck disable=SC2034
    local query_parameter_names=(end_at   key )
    local path

    if ! path=$(build_request_path "/api/v4/systems/{system_id}/production_meter_readings" path_parameter_names query_parameter_names); then
        ERROR_MSG=$path
        exit 1
    fi
    local method="GET"
    local headers_curl
    headers_curl=$(header_arguments_to_curl)
    if [[ -n $header_accept ]]; then
        headers_curl="${headers_curl} -H 'Accept: ${header_accept}'"
    fi

    local basic_auth_option=""
    if [[ -n $basic_auth_credential ]]; then
        basic_auth_option="-u ${basic_auth_credential}"
    fi
    if [[ "$print_curl" = true ]]; then
        echo "curl -d '' ${basic_auth_option} ${curl_arguments} ${headers_curl} -X ${method} \"${host}${path}\""
    else
        eval "curl -d '' ${basic_auth_option} ${curl_arguments} ${headers_curl} -X ${method} \"${host}${path}\""
    fi
}

##############################################################################
#
# Call getSystemProductionMeterTelemetry operation
#
##############################################################################
call_getSystemProductionMeterTelemetry() {
    # ignore error about 'path_parameter_names' being unused; passed by reference
    # shellcheck disable=SC2034
    local path_parameter_names=(system_id)
    # ignore error about 'query_parameter_names' being unused; passed by reference
    # shellcheck disable=SC2034
    local query_parameter_names=(start_at granularity   key )
    local path

    if ! path=$(build_request_path "/api/v4/systems/{system_id}/telemetry/production_meter" path_parameter_names query_parameter_names); then
        ERROR_MSG=$path
        exit 1
    fi
    local method="GET"
    local headers_curl
    headers_curl=$(header_arguments_to_curl)
    if [[ -n $header_accept ]]; then
        headers_curl="${headers_curl} -H 'Accept: ${header_accept}'"
    fi

    local basic_auth_option=""
    if [[ -n $basic_auth_credential ]]; then
        basic_auth_option="-u ${basic_auth_credential}"
    fi
    if [[ "$print_curl" = true ]]; then
        echo "curl -d '' ${basic_auth_option} ${curl_arguments} ${headers_curl} -X ${method} \"${host}${path}\""
    else
        eval "curl -d '' ${basic_auth_option} ${curl_arguments} ${headers_curl} -X ${method} \"${host}${path}\""
    fi
}

##############################################################################
#
# Call getSystemProductionMicroTelemetry operation
#
##############################################################################
call_getSystemProductionMicroTelemetry() {
    # ignore error about 'path_parameter_names' being unused; passed by reference
    # shellcheck disable=SC2034
    local path_parameter_names=(system_id)
    # ignore error about 'query_parameter_names' being unused; passed by reference
    # shellcheck disable=SC2034
    local query_parameter_names=(start_at granularity   key )
    local path

    if ! path=$(build_request_path "/api/v4/systems/{system_id}/telemetry/production_micro" path_parameter_names query_parameter_names); then
        ERROR_MSG=$path
        exit 1
    fi
    local method="GET"
    local headers_curl
    headers_curl=$(header_arguments_to_curl)
    if [[ -n $header_accept ]]; then
        headers_curl="${headers_curl} -H 'Accept: ${header_accept}'"
    fi

    local basic_auth_option=""
    if [[ -n $basic_auth_credential ]]; then
        basic_auth_option="-u ${basic_auth_credential}"
    fi
    if [[ "$print_curl" = true ]]; then
        echo "curl -d '' ${basic_auth_option} ${curl_arguments} ${headers_curl} -X ${method} \"${host}${path}\""
    else
        eval "curl -d '' ${basic_auth_option} ${curl_arguments} ${headers_curl} -X ${method} \"${host}${path}\""
    fi
}

##############################################################################
#
# Call getSystemRgmStats operation
#
##############################################################################
call_getSystemRgmStats() {
    # ignore error about 'path_parameter_names' being unused; passed by reference
    # shellcheck disable=SC2034
    local path_parameter_names=(system_id)
    # ignore error about 'query_parameter_names' being unused; passed by reference
    # shellcheck disable=SC2034
    local query_parameter_names=(start_at end_at   key )
    local path

    if ! path=$(build_request_path "/api/v4/systems/{system_id}/rgm_stats" path_parameter_names query_parameter_names); then
        ERROR_MSG=$path
        exit 1
    fi
    local method="GET"
    local headers_curl
    headers_curl=$(header_arguments_to_curl)
    if [[ -n $header_accept ]]; then
        headers_curl="${headers_curl} -H 'Accept: ${header_accept}'"
    fi

    local basic_auth_option=""
    if [[ -n $basic_auth_credential ]]; then
        basic_auth_option="-u ${basic_auth_credential}"
    fi
    if [[ "$print_curl" = true ]]; then
        echo "curl -d '' ${basic_auth_option} ${curl_arguments} ${headers_curl} -X ${method} \"${host}${path}\""
    else
        eval "curl -d '' ${basic_auth_option} ${curl_arguments} ${headers_curl} -X ${method} \"${host}${path}\""
    fi
}

##############################################################################
#
# Call streamSystemLiveData operation
#
##############################################################################
call_streamSystemLiveData() {
    # ignore error about 'path_parameter_names' being unused; passed by reference
    # shellcheck disable=SC2034
    local path_parameter_names=(system_id)
    # ignore error about 'query_parameter_names' being unused; passed by reference
    # shellcheck disable=SC2034
    local query_parameter_names=(   key )
    local path

    if ! path=$(build_request_path "/api/v4/systems/{system_id}/live_data" path_parameter_names query_parameter_names); then
        ERROR_MSG=$path
        exit 1
    fi
    local method="GET"
    local headers_curl
    headers_curl=$(header_arguments_to_curl)
    if [[ -n $header_accept ]]; then
        headers_curl="${headers_curl} -H 'Accept: ${header_accept}'"
    fi

    local basic_auth_option=""
    if [[ -n $basic_auth_credential ]]; then
        basic_auth_option="-u ${basic_auth_credential}"
    fi
    if [[ "$print_curl" = true ]]; then
        echo "curl -d '' ${basic_auth_option} ${curl_arguments} ${headers_curl} -X ${method} \"${host}${path}\""
    else
        eval "curl -d '' ${basic_auth_option} ${curl_arguments} ${headers_curl} -X ${method} \"${host}${path}\""
    fi
}

##############################################################################
#
# Call getSystemBatterySettings operation
#
##############################################################################
call_getSystemBatterySettings() {
    # ignore error about 'path_parameter_names' being unused; passed by reference
    # shellcheck disable=SC2034
    local path_parameter_names=(system_id)
    # ignore error about 'query_parameter_names' being unused; passed by reference
    # shellcheck disable=SC2034
    local query_parameter_names=(   key )
    local path

    if ! path=$(build_request_path "/api/v4/systems/config/{system_id}/battery_settings" path_parameter_names query_parameter_names); then
        ERROR_MSG=$path
        exit 1
    fi
    local method="GET"
    local headers_curl
    headers_curl=$(header_arguments_to_curl)
    if [[ -n $header_accept ]]; then
        headers_curl="${headers_curl} -H 'Accept: ${header_accept}'"
    fi

    local basic_auth_option=""
    if [[ -n $basic_auth_credential ]]; then
        basic_auth_option="-u ${basic_auth_credential}"
    fi
    if [[ "$print_curl" = true ]]; then
        echo "curl -d '' ${basic_auth_option} ${curl_arguments} ${headers_curl} -X ${method} \"${host}${path}\""
    else
        eval "curl -d '' ${basic_auth_option} ${curl_arguments} ${headers_curl} -X ${method} \"${host}${path}\""
    fi
}

##############################################################################
#
# Call getSystemGridStatusSettings operation
#
##############################################################################
call_getSystemGridStatusSettings() {
    # ignore error about 'path_parameter_names' being unused; passed by reference
    # shellcheck disable=SC2034
    local path_parameter_names=(system_id)
    # ignore error about 'query_parameter_names' being unused; passed by reference
    # shellcheck disable=SC2034
    local query_parameter_names=(   key )
    local path

    if ! path=$(build_request_path "/api/v4/systems/config/{system_id}/grid_status" path_parameter_names query_parameter_names); then
        ERROR_MSG=$path
        exit 1
    fi
    local method="GET"
    local headers_curl
    headers_curl=$(header_arguments_to_curl)
    if [[ -n $header_accept ]]; then
        headers_curl="${headers_curl} -H 'Accept: ${header_accept}'"
    fi

    local basic_auth_option=""
    if [[ -n $basic_auth_credential ]]; then
        basic_auth_option="-u ${basic_auth_credential}"
    fi
    if [[ "$print_curl" = true ]]; then
        echo "curl -d '' ${basic_auth_option} ${curl_arguments} ${headers_curl} -X ${method} \"${host}${path}\""
    else
        eval "curl -d '' ${basic_auth_option} ${curl_arguments} ${headers_curl} -X ${method} \"${host}${path}\""
    fi
}

##############################################################################
#
# Call getSystemLoadControlSettings operation
#
##############################################################################
call_getSystemLoadControlSettings() {
    # ignore error about 'path_parameter_names' being unused; passed by reference
    # shellcheck disable=SC2034
    local path_parameter_names=(system_id)
    # ignore error about 'query_parameter_names' being unused; passed by reference
    # shellcheck disable=SC2034
    local query_parameter_names=(   key )
    local path

    if ! path=$(build_request_path "/api/v4/systems/config/{system_id}/load_control" path_parameter_names query_parameter_names); then
        ERROR_MSG=$path
        exit 1
    fi
    local method="GET"
    local headers_curl
    headers_curl=$(header_arguments_to_curl)
    if [[ -n $header_accept ]]; then
        headers_curl="${headers_curl} -H 'Accept: ${header_accept}'"
    fi

    local basic_auth_option=""
    if [[ -n $basic_auth_credential ]]; then
        basic_auth_option="-u ${basic_auth_credential}"
    fi
    if [[ "$print_curl" = true ]]; then
        echo "curl -d '' ${basic_auth_option} ${curl_arguments} ${headers_curl} -X ${method} \"${host}${path}\""
    else
        eval "curl -d '' ${basic_auth_option} ${curl_arguments} ${headers_curl} -X ${method} \"${host}${path}\""
    fi
}

##############################################################################
#
# Call getSystemStormGuardSettings operation
#
##############################################################################
call_getSystemStormGuardSettings() {
    # ignore error about 'path_parameter_names' being unused; passed by reference
    # shellcheck disable=SC2034
    local path_parameter_names=(system_id)
    # ignore error about 'query_parameter_names' being unused; passed by reference
    # shellcheck disable=SC2034
    local query_parameter_names=(   key )
    local path

    if ! path=$(build_request_path "/api/v4/systems/config/{system_id}/storm_guard" path_parameter_names query_parameter_names); then
        ERROR_MSG=$path
        exit 1
    fi
    local method="GET"
    local headers_curl
    headers_curl=$(header_arguments_to_curl)
    if [[ -n $header_accept ]]; then
        headers_curl="${headers_curl} -H 'Accept: ${header_accept}'"
    fi

    local basic_auth_option=""
    if [[ -n $basic_auth_credential ]]; then
        basic_auth_option="-u ${basic_auth_credential}"
    fi
    if [[ "$print_curl" = true ]]; then
        echo "curl -d '' ${basic_auth_option} ${curl_arguments} ${headers_curl} -X ${method} \"${host}${path}\""
    else
        eval "curl -d '' ${basic_auth_option} ${curl_arguments} ${headers_curl} -X ${method} \"${host}${path}\""
    fi
}

##############################################################################
#
# Call updateSystemBatterySettings operation
#
##############################################################################
call_updateSystemBatterySettings() {
    # ignore error about 'path_parameter_names' being unused; passed by reference
    # shellcheck disable=SC2034
    local path_parameter_names=(system_id)
    # ignore error about 'query_parameter_names' being unused; passed by reference
    # shellcheck disable=SC2034
    local query_parameter_names=(   key )
    local path

    if ! path=$(build_request_path "/api/v4/systems/config/{system_id}/battery_settings" path_parameter_names query_parameter_names); then
        ERROR_MSG=$path
        exit 1
    fi
    local method="PUT"
    local headers_curl
    headers_curl=$(header_arguments_to_curl)
    if [[ -n $header_accept ]]; then
        headers_curl="${headers_curl} -H 'Accept: ${header_accept}'"
    fi

    local basic_auth_option=""
    if [[ -n $basic_auth_credential ]]; then
        basic_auth_option="-u ${basic_auth_credential}"
    fi
    local body_json_curl=""

    #
    # Check if the user provided 'Content-type' headers in the
    # command line. If not try to set them based on the OpenAPI specification
    # if values produces and consumes are defined unambiguously
    #
    if [[ -z $header_content_type ]]; then
        header_content_type="application/json"
    fi


    if [[ -z $header_content_type && "$force" = false ]]; then
        :
        echo "ERROR: Request's content-type not specified!!!"
        echo "This operation expects content-type in one of the following formats:"
        echo -e "\\t- application/json"
        echo ""
        echo "Use '--content-type' to set proper content type"
        exit 1
    else
        headers_curl="${headers_curl} -H 'Content-type: ${header_content_type}'"
    fi


    #
    # If we have received some body content over pipe, pass it from the
    # temporary file to cURL
    #
    if [[ -n $body_content_temp_file ]]; then
        if [[ "$print_curl" = true ]]; then
            echo "cat ${body_content_temp_file} | curl ${basic_auth_option} ${curl_arguments} ${headers_curl} -X ${method} \"${host}${path}\" -d @-"
        else
            eval "cat ${body_content_temp_file} | curl ${basic_auth_option} ${curl_arguments} ${headers_curl} -X ${method} \"${host}${path}\" -d @-"
        fi
        rm "${body_content_temp_file}"
    #
    # If not, try to build the content body from arguments KEY==VALUE and KEY:=VALUE
    #
    else
        body_json_curl=$(body_parameters_to_json)
        if [[ "$print_curl" = true ]]; then
            echo "curl ${basic_auth_option} ${curl_arguments} ${headers_curl} -X ${method} ${body_json_curl} \"${host}${path}\""
        else
            eval "curl ${basic_auth_option} ${curl_arguments} ${headers_curl} -X ${method} ${body_json_curl} \"${host}${path}\""
        fi
    fi
}

##############################################################################
#
# Call updateSystemLoadControlSettings operation
#
##############################################################################
call_updateSystemLoadControlSettings() {
    # ignore error about 'path_parameter_names' being unused; passed by reference
    # shellcheck disable=SC2034
    local path_parameter_names=(system_id)
    # ignore error about 'query_parameter_names' being unused; passed by reference
    # shellcheck disable=SC2034
    local query_parameter_names=(   key )
    local path

    if ! path=$(build_request_path "/api/v4/systems/config/{system_id}/load_control" path_parameter_names query_parameter_names); then
        ERROR_MSG=$path
        exit 1
    fi
    local method="PUT"
    local headers_curl
    headers_curl=$(header_arguments_to_curl)
    if [[ -n $header_accept ]]; then
        headers_curl="${headers_curl} -H 'Accept: ${header_accept}'"
    fi

    local basic_auth_option=""
    if [[ -n $basic_auth_credential ]]; then
        basic_auth_option="-u ${basic_auth_credential}"
    fi
    local body_json_curl=""

    #
    # Check if the user provided 'Content-type' headers in the
    # command line. If not try to set them based on the OpenAPI specification
    # if values produces and consumes are defined unambiguously
    #
    if [[ -z $header_content_type ]]; then
        header_content_type="application/json"
    fi


    if [[ -z $header_content_type && "$force" = false ]]; then
        :
        echo "ERROR: Request's content-type not specified!!!"
        echo "This operation expects content-type in one of the following formats:"
        echo -e "\\t- application/json"
        echo ""
        echo "Use '--content-type' to set proper content type"
        exit 1
    else
        headers_curl="${headers_curl} -H 'Content-type: ${header_content_type}'"
    fi


    #
    # If we have received some body content over pipe, pass it from the
    # temporary file to cURL
    #
    if [[ -n $body_content_temp_file ]]; then
        if [[ "$print_curl" = true ]]; then
            echo "cat ${body_content_temp_file} | curl ${basic_auth_option} ${curl_arguments} ${headers_curl} -X ${method} \"${host}${path}\" -d @-"
        else
            eval "cat ${body_content_temp_file} | curl ${basic_auth_option} ${curl_arguments} ${headers_curl} -X ${method} \"${host}${path}\" -d @-"
        fi
        rm "${body_content_temp_file}"
    #
    # If not, try to build the content body from arguments KEY==VALUE and KEY:=VALUE
    #
    else
        body_json_curl=$(body_parameters_to_json)
        if [[ "$print_curl" = true ]]; then
            echo "curl ${basic_auth_option} ${curl_arguments} ${headers_curl} -X ${method} ${body_json_curl} \"${host}${path}\""
        else
            eval "curl ${basic_auth_option} ${curl_arguments} ${headers_curl} -X ${method} ${body_json_curl} \"${host}${path}\""
        fi
    fi
}

##############################################################################
#
# Call updateSystemStormGuardSettings operation
#
##############################################################################
call_updateSystemStormGuardSettings() {
    # ignore error about 'path_parameter_names' being unused; passed by reference
    # shellcheck disable=SC2034
    local path_parameter_names=(system_id)
    # ignore error about 'query_parameter_names' being unused; passed by reference
    # shellcheck disable=SC2034
    local query_parameter_names=(   key )
    local path

    if ! path=$(build_request_path "/api/v4/systems/config/{system_id}/storm_guard" path_parameter_names query_parameter_names); then
        ERROR_MSG=$path
        exit 1
    fi
    local method="PUT"
    local headers_curl
    headers_curl=$(header_arguments_to_curl)
    if [[ -n $header_accept ]]; then
        headers_curl="${headers_curl} -H 'Accept: ${header_accept}'"
    fi

    local basic_auth_option=""
    if [[ -n $basic_auth_credential ]]; then
        basic_auth_option="-u ${basic_auth_credential}"
    fi
    local body_json_curl=""

    #
    # Check if the user provided 'Content-type' headers in the
    # command line. If not try to set them based on the OpenAPI specification
    # if values produces and consumes are defined unambiguously
    #
    if [[ -z $header_content_type ]]; then
        header_content_type="application/json"
    fi


    if [[ -z $header_content_type && "$force" = false ]]; then
        :
        echo "ERROR: Request's content-type not specified!!!"
        echo "This operation expects content-type in one of the following formats:"
        echo -e "\\t- application/json"
        echo ""
        echo "Use '--content-type' to set proper content type"
        exit 1
    else
        headers_curl="${headers_curl} -H 'Content-type: ${header_content_type}'"
    fi


    #
    # If we have received some body content over pipe, pass it from the
    # temporary file to cURL
    #
    if [[ -n $body_content_temp_file ]]; then
        if [[ "$print_curl" = true ]]; then
            echo "cat ${body_content_temp_file} | curl ${basic_auth_option} ${curl_arguments} ${headers_curl} -X ${method} \"${host}${path}\" -d @-"
        else
            eval "cat ${body_content_temp_file} | curl ${basic_auth_option} ${curl_arguments} ${headers_curl} -X ${method} \"${host}${path}\" -d @-"
        fi
        rm "${body_content_temp_file}"
    #
    # If not, try to build the content body from arguments KEY==VALUE and KEY:=VALUE
    #
    else
        body_json_curl=$(body_parameters_to_json)
        if [[ "$print_curl" = true ]]; then
            echo "curl ${basic_auth_option} ${curl_arguments} ${headers_curl} -X ${method} ${body_json_curl} \"${host}${path}\""
        else
            eval "curl ${basic_auth_option} ${curl_arguments} ${headers_curl} -X ${method} ${body_json_curl} \"${host}${path}\""
        fi
    fi
}

##############################################################################
#
# Call getInvertersSummaryByEnvoyOrSite operation
#
##############################################################################
call_getInvertersSummaryByEnvoyOrSite() {
    # ignore error about 'path_parameter_names' being unused; passed by reference
    # shellcheck disable=SC2034
    local path_parameter_names=()
    # ignore error about 'query_parameter_names' being unused; passed by reference
    # shellcheck disable=SC2034
    local query_parameter_names=(site_id envoy_serial_number   key )
    local path

    if ! path=$(build_request_path "/api/v4/systems/inverters_summary_by_envoy_or_site" path_parameter_names query_parameter_names); then
        ERROR_MSG=$path
        exit 1
    fi
    local method="GET"
    local headers_curl
    headers_curl=$(header_arguments_to_curl)
    if [[ -n $header_accept ]]; then
        headers_curl="${headers_curl} -H 'Accept: ${header_accept}'"
    fi

    local basic_auth_option=""
    if [[ -n $basic_auth_credential ]]; then
        basic_auth_option="-u ${basic_auth_credential}"
    fi
    if [[ "$print_curl" = true ]]; then
        echo "curl -d '' ${basic_auth_option} ${curl_arguments} ${headers_curl} -X ${method} \"${host}${path}\""
    else
        eval "curl -d '' ${basic_auth_option} ${curl_arguments} ${headers_curl} -X ${method} \"${host}${path}\""
    fi
}

##############################################################################
#
# Call getSystem operation
#
##############################################################################
call_getSystem() {
    # ignore error about 'path_parameter_names' being unused; passed by reference
    # shellcheck disable=SC2034
    local path_parameter_names=(system_id)
    # ignore error about 'query_parameter_names' being unused; passed by reference
    # shellcheck disable=SC2034
    local query_parameter_names=(   key )
    local path

    if ! path=$(build_request_path "/api/v4/systems/{system_id}" path_parameter_names query_parameter_names); then
        ERROR_MSG=$path
        exit 1
    fi
    local method="GET"
    local headers_curl
    headers_curl=$(header_arguments_to_curl)
    if [[ -n $header_accept ]]; then
        headers_curl="${headers_curl} -H 'Accept: ${header_accept}'"
    fi

    local basic_auth_option=""
    if [[ -n $basic_auth_credential ]]; then
        basic_auth_option="-u ${basic_auth_credential}"
    fi
    if [[ "$print_curl" = true ]]; then
        echo "curl -d '' ${basic_auth_option} ${curl_arguments} ${headers_curl} -X ${method} \"${host}${path}\""
    else
        eval "curl -d '' ${basic_auth_option} ${curl_arguments} ${headers_curl} -X ${method} \"${host}${path}\""
    fi
}

##############################################################################
#
# Call getSystemDevices operation
#
##############################################################################
call_getSystemDevices() {
    # ignore error about 'path_parameter_names' being unused; passed by reference
    # shellcheck disable=SC2034
    local path_parameter_names=(system_id)
    # ignore error about 'query_parameter_names' being unused; passed by reference
    # shellcheck disable=SC2034
    local query_parameter_names=(   key )
    local path

    if ! path=$(build_request_path "/api/v4/systems/{system_id}/devices" path_parameter_names query_parameter_names); then
        ERROR_MSG=$path
        exit 1
    fi
    local method="GET"
    local headers_curl
    headers_curl=$(header_arguments_to_curl)
    if [[ -n $header_accept ]]; then
        headers_curl="${headers_curl} -H 'Accept: ${header_accept}'"
    fi

    local basic_auth_option=""
    if [[ -n $basic_auth_credential ]]; then
        basic_auth_option="-u ${basic_auth_credential}"
    fi
    if [[ "$print_curl" = true ]]; then
        echo "curl -d '' ${basic_auth_option} ${curl_arguments} ${headers_curl} -X ${method} \"${host}${path}\""
    else
        eval "curl -d '' ${basic_auth_option} ${curl_arguments} ${headers_curl} -X ${method} \"${host}${path}\""
    fi
}

##############################################################################
#
# Call getSystemSummary operation
#
##############################################################################
call_getSystemSummary() {
    # ignore error about 'path_parameter_names' being unused; passed by reference
    # shellcheck disable=SC2034
    local path_parameter_names=(system_id)
    # ignore error about 'query_parameter_names' being unused; passed by reference
    # shellcheck disable=SC2034
    local query_parameter_names=(   key )
    local path

    if ! path=$(build_request_path "/api/v4/systems/{system_id}/summary" path_parameter_names query_parameter_names); then
        ERROR_MSG=$path
        exit 1
    fi
    local method="GET"
    local headers_curl
    headers_curl=$(header_arguments_to_curl)
    if [[ -n $header_accept ]]; then
        headers_curl="${headers_curl} -H 'Accept: ${header_accept}'"
    fi

    local basic_auth_option=""
    if [[ -n $basic_auth_credential ]]; then
        basic_auth_option="-u ${basic_auth_credential}"
    fi
    if [[ "$print_curl" = true ]]; then
        echo "curl -d '' ${basic_auth_option} ${curl_arguments} ${headers_curl} -X ${method} \"${host}${path}\""
    else
        eval "curl -d '' ${basic_auth_option} ${curl_arguments} ${headers_curl} -X ${method} \"${host}${path}\""
    fi
}

##############################################################################
#
# Call getSystems operation
#
##############################################################################
call_getSystems() {
    # ignore error about 'path_parameter_names' being unused; passed by reference
    # shellcheck disable=SC2034
    local path_parameter_names=()
    # ignore error about 'query_parameter_names' being unused; passed by reference
    # shellcheck disable=SC2034
    local query_parameter_names=(page size sort_by   key )
    local path

    if ! path=$(build_request_path "/api/v4/systems" path_parameter_names query_parameter_names); then
        ERROR_MSG=$path
        exit 1
    fi
    local method="GET"
    local headers_curl
    headers_curl=$(header_arguments_to_curl)
    if [[ -n $header_accept ]]; then
        headers_curl="${headers_curl} -H 'Accept: ${header_accept}'"
    fi

    local basic_auth_option=""
    if [[ -n $basic_auth_credential ]]; then
        basic_auth_option="-u ${basic_auth_credential}"
    fi
    if [[ "$print_curl" = true ]]; then
        echo "curl -d '' ${basic_auth_option} ${curl_arguments} ${headers_curl} -X ${method} \"${host}${path}\""
    else
        eval "curl -d '' ${basic_auth_option} ${curl_arguments} ${headers_curl} -X ${method} \"${host}${path}\""
    fi
}

##############################################################################
#
# Call retrieveSystemId operation
#
##############################################################################
call_retrieveSystemId() {
    # ignore error about 'path_parameter_names' being unused; passed by reference
    # shellcheck disable=SC2034
    local path_parameter_names=()
    # ignore error about 'query_parameter_names' being unused; passed by reference
    # shellcheck disable=SC2034
    local query_parameter_names=(serial_num   key )
    local path

    if ! path=$(build_request_path "/api/v4/systems/retrieve_system_id" path_parameter_names query_parameter_names); then
        ERROR_MSG=$path
        exit 1
    fi
    local method="GET"
    local headers_curl
    headers_curl=$(header_arguments_to_curl)
    if [[ -n $header_accept ]]; then
        headers_curl="${headers_curl} -H 'Accept: ${header_accept}'"
    fi

    local basic_auth_option=""
    if [[ -n $basic_auth_credential ]]; then
        basic_auth_option="-u ${basic_auth_credential}"
    fi
    if [[ "$print_curl" = true ]]; then
        echo "curl -d '' ${basic_auth_option} ${curl_arguments} ${headers_curl} -X ${method} \"${host}${path}\""
    else
        eval "curl -d '' ${basic_auth_option} ${curl_arguments} ${headers_curl} -X ${method} \"${host}${path}\""
    fi
}

##############################################################################
#
# Call searchSystems operation
#
##############################################################################
call_searchSystems() {
    # ignore error about 'path_parameter_names' being unused; passed by reference
    # shellcheck disable=SC2034
    local path_parameter_names=()
    # ignore error about 'query_parameter_names' being unused; passed by reference
    # shellcheck disable=SC2034
    local query_parameter_names=(page size   key )
    local path

    if ! path=$(build_request_path "/api/v4/systems/search" path_parameter_names query_parameter_names); then
        ERROR_MSG=$path
        exit 1
    fi
    local method="POST"
    local headers_curl
    headers_curl=$(header_arguments_to_curl)
    if [[ -n $header_accept ]]; then
        headers_curl="${headers_curl} -H 'Accept: ${header_accept}'"
    fi

    local basic_auth_option=""
    if [[ -n $basic_auth_credential ]]; then
        basic_auth_option="-u ${basic_auth_credential}"
    fi
    local body_json_curl=""

    #
    # Check if the user provided 'Content-type' headers in the
    # command line. If not try to set them based on the OpenAPI specification
    # if values produces and consumes are defined unambiguously
    #
    if [[ -z $header_content_type ]]; then
        header_content_type="application/json"
    fi


    if [[ -z $header_content_type && "$force" = false ]]; then
        :
        echo "ERROR: Request's content-type not specified!!!"
        echo "This operation expects content-type in one of the following formats:"
        echo -e "\\t- application/json"
        echo ""
        echo "Use '--content-type' to set proper content type"
        exit 1
    else
        headers_curl="${headers_curl} -H 'Content-type: ${header_content_type}'"
    fi


    #
    # If we have received some body content over pipe, pass it from the
    # temporary file to cURL
    #
    if [[ -n $body_content_temp_file ]]; then
        if [[ "$print_curl" = true ]]; then
            echo "cat ${body_content_temp_file} | curl ${basic_auth_option} ${curl_arguments} ${headers_curl} -X ${method} \"${host}${path}\" -d @-"
        else
            eval "cat ${body_content_temp_file} | curl ${basic_auth_option} ${curl_arguments} ${headers_curl} -X ${method} \"${host}${path}\" -d @-"
        fi
        rm "${body_content_temp_file}"
    #
    # If not, try to build the content body from arguments KEY==VALUE and KEY:=VALUE
    #
    else
        body_json_curl=$(body_parameters_to_json)
        if [[ "$print_curl" = true ]]; then
            echo "curl ${basic_auth_option} ${curl_arguments} ${headers_curl} -X ${method} ${body_json_curl} \"${host}${path}\""
        else
            eval "curl ${basic_auth_option} ${curl_arguments} ${headers_curl} -X ${method} ${body_json_curl} \"${host}${path}\""
        fi
    fi
}



##############################################################################
#
# Main
#
##############################################################################


# Check dependencies
type curl >/dev/null 2>&1 || { echo >&2 "ERROR: You do not have 'cURL' installed."; exit 1; }
type sed >/dev/null 2>&1 || { echo >&2 "ERROR: You do not have 'sed' installed."; exit 1; }
type column >/dev/null 2>&1 || { echo >&2 "ERROR: You do not have 'bsdmainutils' installed."; exit 1; }

#
# Process command line
#
# Pass all arguments before 'operation' to cURL except the ones we override
#
take_user=false
take_host=false
take_accept_header=false
take_contenttype_header=false

for key in "$@"; do
# Take the value of -u|--user argument
if [[ "$take_user" = true ]]; then
    basic_auth_credential="$key"
    take_user=false
    continue
fi
# Take the value of --host argument
if [[ "$take_host" = true ]]; then
    host="$key"
    take_host=false
    continue
fi
# Take the value of --accept argument
if [[ "$take_accept_header" = true ]]; then
    header_accept=$(lookup_mime_type "$key")
    take_accept_header=false
    continue
fi
# Take the value of --content-type argument
if [[ "$take_contenttype_header" = true ]]; then
    header_content_type=$(lookup_mime_type "$key")
    take_contenttype_header=false
    continue
fi
case $key in
    -h|--help)
    if [[ "x$operation" == "x" ]]; then
        print_help
        exit 0
    else
        eval "print_${operation}_help"
        exit 0
    fi
    ;;
    -V|--version)
    print_version
    exit 0
    ;;
    --about)
    print_about
    exit 0
    ;;
    -u|--user)
    take_user=true
    ;;
    --host)
    take_host=true
    ;;
    --force)
    force=true
    ;;
    -ac|--accept)
    take_accept_header=true
    ;;
    -ct|--content-type)
    take_contenttype_header=true
    ;;
    --dry-run)
    print_curl=true
    ;;
    -nc|--no-colors)
        RED=""
        GREEN=""
        YELLOW=""
        BLUE=""
        MAGENTA=""
        CYAN=""
        WHITE=""
        BOLD=""
        OFF=""
        result_color_table=( "" "" "" "" "" "" "" )
    ;;
    getSystemAcbDeviceTelemetry)
    operation="getSystemAcbDeviceTelemetry"
    ;;
    getSystemEnchargeDeviceTelemetry)
    operation="getSystemEnchargeDeviceTelemetry"
    ;;
    getSystemMicroDeviceTelemetry)
    operation="getSystemMicroDeviceTelemetry"
    ;;
    getSystemBatteryLifetime)
    operation="getSystemBatteryLifetime"
    ;;
    getSystemBatteryTelemetry)
    operation="getSystemBatteryTelemetry"
    ;;
    getSystemConsumptionLifetime)
    operation="getSystemConsumptionLifetime"
    ;;
    getSystemConsumptionMeterTelemetry)
    operation="getSystemConsumptionMeterTelemetry"
    ;;
    getSystemEnergyExportLifetime)
    operation="getSystemEnergyExportLifetime"
    ;;
    getSystemEnergyExportTelemetry)
    operation="getSystemEnergyExportTelemetry"
    ;;
    getSystemEnergyImportLifetime)
    operation="getSystemEnergyImportLifetime"
    ;;
    getSystemEnergyImportTelemetry)
    operation="getSystemEnergyImportTelemetry"
    ;;
    getSystemEnergyLifetime)
    operation="getSystemEnergyLifetime"
    ;;
    getSystemProductionMeterReadings)
    operation="getSystemProductionMeterReadings"
    ;;
    getSystemProductionMeterTelemetry)
    operation="getSystemProductionMeterTelemetry"
    ;;
    getSystemProductionMicroTelemetry)
    operation="getSystemProductionMicroTelemetry"
    ;;
    getSystemRgmStats)
    operation="getSystemRgmStats"
    ;;
    streamSystemLiveData)
    operation="streamSystemLiveData"
    ;;
    getSystemBatterySettings)
    operation="getSystemBatterySettings"
    ;;
    getSystemGridStatusSettings)
    operation="getSystemGridStatusSettings"
    ;;
    getSystemLoadControlSettings)
    operation="getSystemLoadControlSettings"
    ;;
    getSystemStormGuardSettings)
    operation="getSystemStormGuardSettings"
    ;;
    updateSystemBatterySettings)
    operation="updateSystemBatterySettings"
    ;;
    updateSystemLoadControlSettings)
    operation="updateSystemLoadControlSettings"
    ;;
    updateSystemStormGuardSettings)
    operation="updateSystemStormGuardSettings"
    ;;
    getInvertersSummaryByEnvoyOrSite)
    operation="getInvertersSummaryByEnvoyOrSite"
    ;;
    getSystem)
    operation="getSystem"
    ;;
    getSystemDevices)
    operation="getSystemDevices"
    ;;
    getSystemSummary)
    operation="getSystemSummary"
    ;;
    getSystems)
    operation="getSystems"
    ;;
    retrieveSystemId)
    operation="retrieveSystemId"
    ;;
    searchSystems)
    operation="searchSystems"
    ;;
    *==*)
    # Parse body arguments and convert them into top level
    # JSON properties passed in the body content as strings
    if [[ "$operation" ]]; then
        IFS='==' read -r body_key sep body_value <<< "$key"
        body_parameters[${body_key}]="\"${body_value}\""
    fi
    ;;
    *:=*)
    # Parse body arguments and convert them into top level
    # JSON properties passed in the body content without quotes
    if [[ "$operation" ]]; then
        # ignore error about 'sep' being unused
        # shellcheck disable=SC2034
        IFS=':=' read -r body_key sep body_value <<< "$key"
        body_parameters[${body_key}]=${body_value}
    fi
    ;;
    +([^=]):*)
    # Parse header arguments and convert them into curl
    # only after the operation argument
    if [[ "$operation" ]]; then
        IFS=':' read -r header_name header_value <<< "$key"
        header_arguments[$header_name]=$header_value
    else
        curl_arguments+=" $key"
    fi
    ;;
    -)
    body_content_temp_file=$(mktemp)
    cat - > "$body_content_temp_file"
    ;;
    *=*)
    # Parse operation arguments and convert them into curl
    # only after the operation argument
    if [[ "$operation" ]]; then
        IFS='=' read -r parameter_name parameter_value <<< "$key"
        if [[ -z "${operation_parameters[$parameter_name]+foo}" ]]; then
            operation_parameters[$parameter_name]=$(url_escape "${parameter_value}")
        else
            operation_parameters[$parameter_name]+=":::"$(url_escape "${parameter_value}")
        fi
    else
        curl_arguments+=" $key"
    fi
    ;;
    *)
    # If we are before the operation, treat the arguments as cURL arguments
    if [[ "x$operation" == "x" ]]; then
        # Maintain quotes around cURL arguments if necessary
        space_regexp="[[:space:]]"
        if [[ $key =~ $space_regexp ]]; then
            curl_arguments+=" \"$key\""
        else
            curl_arguments+=" $key"
        fi
    fi
    ;;
esac
done


# Check if user provided host name
if [[ -z "$host" ]]; then
    ERROR_MSG="ERROR: No hostname provided!!! You have to  provide on command line option '--host ...'"
    exit 1
fi

# Check if user specified operation ID
if [[ -z "$operation" ]]; then
    ERROR_MSG="ERROR: No operation specified!!!"
    exit 1
fi


# Run cURL command based on the operation ID
case $operation in
    getSystemAcbDeviceTelemetry)
    call_getSystemAcbDeviceTelemetry
    ;;
    getSystemEnchargeDeviceTelemetry)
    call_getSystemEnchargeDeviceTelemetry
    ;;
    getSystemMicroDeviceTelemetry)
    call_getSystemMicroDeviceTelemetry
    ;;
    getSystemBatteryLifetime)
    call_getSystemBatteryLifetime
    ;;
    getSystemBatteryTelemetry)
    call_getSystemBatteryTelemetry
    ;;
    getSystemConsumptionLifetime)
    call_getSystemConsumptionLifetime
    ;;
    getSystemConsumptionMeterTelemetry)
    call_getSystemConsumptionMeterTelemetry
    ;;
    getSystemEnergyExportLifetime)
    call_getSystemEnergyExportLifetime
    ;;
    getSystemEnergyExportTelemetry)
    call_getSystemEnergyExportTelemetry
    ;;
    getSystemEnergyImportLifetime)
    call_getSystemEnergyImportLifetime
    ;;
    getSystemEnergyImportTelemetry)
    call_getSystemEnergyImportTelemetry
    ;;
    getSystemEnergyLifetime)
    call_getSystemEnergyLifetime
    ;;
    getSystemProductionMeterReadings)
    call_getSystemProductionMeterReadings
    ;;
    getSystemProductionMeterTelemetry)
    call_getSystemProductionMeterTelemetry
    ;;
    getSystemProductionMicroTelemetry)
    call_getSystemProductionMicroTelemetry
    ;;
    getSystemRgmStats)
    call_getSystemRgmStats
    ;;
    streamSystemLiveData)
    call_streamSystemLiveData
    ;;
    getSystemBatterySettings)
    call_getSystemBatterySettings
    ;;
    getSystemGridStatusSettings)
    call_getSystemGridStatusSettings
    ;;
    getSystemLoadControlSettings)
    call_getSystemLoadControlSettings
    ;;
    getSystemStormGuardSettings)
    call_getSystemStormGuardSettings
    ;;
    updateSystemBatterySettings)
    call_updateSystemBatterySettings
    ;;
    updateSystemLoadControlSettings)
    call_updateSystemLoadControlSettings
    ;;
    updateSystemStormGuardSettings)
    call_updateSystemStormGuardSettings
    ;;
    getInvertersSummaryByEnvoyOrSite)
    call_getInvertersSummaryByEnvoyOrSite
    ;;
    getSystem)
    call_getSystem
    ;;
    getSystemDevices)
    call_getSystemDevices
    ;;
    getSystemSummary)
    call_getSystemSummary
    ;;
    getSystems)
    call_getSystems
    ;;
    retrieveSystemId)
    call_retrieveSystemId
    ;;
    searchSystems)
    call_searchSystems
    ;;
    *)
    ERROR_MSG="ERROR: Unknown operation: $operation"
    exit 1
esac

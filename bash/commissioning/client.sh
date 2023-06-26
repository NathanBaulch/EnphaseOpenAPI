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
# This is a Bash client for The Enphase Commissioning API.
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
operation_parameters_minimum_occurrences["createPartnerActivation:::params"]=0
operation_parameters_minimum_occurrences["deleteActivation:::id"]=1
operation_parameters_minimum_occurrences["getActivationOpsProductionMode:::activation_id"]=1
operation_parameters_minimum_occurrences["getPartnerActivation:::id"]=1
operation_parameters_minimum_occurrences["getPartnerActivation:::expand"]=0
operation_parameters_minimum_occurrences["getPartnerActivations:::next"]=0
operation_parameters_minimum_occurrences["getPartnerActivations:::limit"]=0
operation_parameters_minimum_occurrences["getPartnerActivations:::stage"]=0
operation_parameters_minimum_occurrences["getPartnerActivations:::reference"]=0
operation_parameters_minimum_occurrences["getPartnerActivations:::installer_id"]=0
operation_parameters_minimum_occurrences["getPartnerActivations:::system_name"]=0
operation_parameters_minimum_occurrences["getPartnerActivations:::address"]=0
operation_parameters_minimum_occurrences["getPartnerActivations:::region"]=0
operation_parameters_minimum_occurrences["getPartnerActivations:::search"]=0
operation_parameters_minimum_occurrences["grantActivationUserAccess:::activation_id"]=1
operation_parameters_minimum_occurrences["grantActivationUserAccess:::user_id"]=1
operation_parameters_minimum_occurrences["revokeActivationUserAccess:::activation_id"]=1
operation_parameters_minimum_occurrences["revokeActivationUserAccess:::user_id"]=1
operation_parameters_minimum_occurrences["setActivationOpsProductionMode:::activation_id"]=1
operation_parameters_minimum_occurrences["setActivationOpsProductionMode:::params"]=0
operation_parameters_minimum_occurrences["updatePartnerActivation:::id"]=1
operation_parameters_minimum_occurrences["updatePartnerActivation:::params"]=0
operation_parameters_minimum_occurrences["deleteSystemArray:::system_id"]=1
operation_parameters_minimum_occurrences["deleteSystemArray:::id"]=1
operation_parameters_minimum_occurrences["getSystemArray:::system_id"]=1
operation_parameters_minimum_occurrences["getSystemArray:::id"]=1
operation_parameters_minimum_occurrences["getSystemArrays:::system_id"]=1
operation_parameters_minimum_occurrences["updateSystemArray:::system_id"]=1
operation_parameters_minimum_occurrences["updateSystemArray:::id"]=1
operation_parameters_minimum_occurrences["updateSystemArray:::params"]=0
operation_parameters_minimum_occurrences["updateSystemArrays:::system_id"]=1
operation_parameters_minimum_occurrences["updateSystemArrays:::params"]=0
operation_parameters_minimum_occurrences["createCompanyUser:::company_id"]=1
operation_parameters_minimum_occurrences["createCompanyUser:::params"]=0
operation_parameters_minimum_occurrences["getCompanyUser:::company_id"]=1
operation_parameters_minimum_occurrences["getCompanyUser:::user_id"]=1
operation_parameters_minimum_occurrences["getCompanyUser:::expand"]=0
operation_parameters_minimum_occurrences["getCompanyUsers:::company_id"]=1
operation_parameters_minimum_occurrences["updateCompanyUser:::company_id"]=1
operation_parameters_minimum_occurrences["updateCompanyUser:::user_id"]=1
operation_parameters_minimum_occurrences["updateCompanyUser:::params"]=0
operation_parameters_minimum_occurrences["getActivationEstimate:::activation_id"]=1
operation_parameters_minimum_occurrences["updateActivationEstimate:::activation_id"]=1
operation_parameters_minimum_occurrences["updateActivationEstimate:::params"]=0
operation_parameters_minimum_occurrences["createUser:::params"]=0
operation_parameters_minimum_occurrences["getSystemMeter:::system_id"]=1
operation_parameters_minimum_occurrences["getSystemMeter:::serial_number"]=1
operation_parameters_minimum_occurrences["setActivationMeterStatus:::activation_id"]=1
operation_parameters_minimum_occurrences["setActivationMeterStatus:::serial_number"]=1
operation_parameters_minimum_occurrences["setActivationMeterStatus:::params"]=0
operation_parameters_minimum_occurrences["updateSystemMeter:::system_id"]=1
operation_parameters_minimum_occurrences["updateSystemMeter:::serial_number"]=1
operation_parameters_minimum_occurrences["updateSystemMeter:::operational_date"]=0
operation_parameters_minimum_occurrences["getPvManufacturerModels:::pv_manufacturer_id"]=1
operation_parameters_minimum_occurrences["getSystemTariffSettings:::system_id"]=1
operation_parameters_minimum_occurrences["updateSystemTariffSettings:::system_id"]=1
operation_parameters_minimum_occurrences["updateSystemTariffSettings:::params"]=0
operation_parameters_minimum_occurrences["getActivationUser:::activation_id"]=1
operation_parameters_minimum_occurrences["getActivationUser:::user_id"]=1
operation_parameters_minimum_occurrences["getActivationUser:::expand"]=0
operation_parameters_minimum_occurrences["getSelfUser:::expand"]=0
operation_parameters_minimum_occurrences["getUser:::user_id"]=1
operation_parameters_minimum_occurrences["getUser:::expand"]=0
operation_parameters_minimum_occurrences["searchUsers:::email"]=0
operation_parameters_minimum_occurrences["updateActivationUser:::activation_id"]=1
operation_parameters_minimum_occurrences["updateActivationUser:::user_id"]=1
operation_parameters_minimum_occurrences["updateActivationUser:::params"]=0
operation_parameters_minimum_occurrences["updateUser:::user_id"]=1
operation_parameters_minimum_occurrences["updateUser:::params"]=0

##
# This array stores the maximum number of allowed occurrences for parameter
# 1 - single value
# 2 - 2 values
# N - N values
# 0 - unlimited
declare -A operation_parameters_maximum_occurrences
operation_parameters_maximum_occurrences["createPartnerActivation:::params"]=0
operation_parameters_maximum_occurrences["deleteActivation:::id"]=0
operation_parameters_maximum_occurrences["getActivationOpsProductionMode:::activation_id"]=0
operation_parameters_maximum_occurrences["getPartnerActivation:::id"]=0
operation_parameters_maximum_occurrences["getPartnerActivation:::expand"]=0
operation_parameters_maximum_occurrences["getPartnerActivations:::next"]=0
operation_parameters_maximum_occurrences["getPartnerActivations:::limit"]=0
operation_parameters_maximum_occurrences["getPartnerActivations:::stage"]=0
operation_parameters_maximum_occurrences["getPartnerActivations:::reference"]=0
operation_parameters_maximum_occurrences["getPartnerActivations:::installer_id"]=0
operation_parameters_maximum_occurrences["getPartnerActivations:::system_name"]=0
operation_parameters_maximum_occurrences["getPartnerActivations:::address"]=0
operation_parameters_maximum_occurrences["getPartnerActivations:::region"]=0
operation_parameters_maximum_occurrences["getPartnerActivations:::search"]=0
operation_parameters_maximum_occurrences["grantActivationUserAccess:::activation_id"]=0
operation_parameters_maximum_occurrences["grantActivationUserAccess:::user_id"]=0
operation_parameters_maximum_occurrences["revokeActivationUserAccess:::activation_id"]=0
operation_parameters_maximum_occurrences["revokeActivationUserAccess:::user_id"]=0
operation_parameters_maximum_occurrences["setActivationOpsProductionMode:::activation_id"]=0
operation_parameters_maximum_occurrences["setActivationOpsProductionMode:::params"]=0
operation_parameters_maximum_occurrences["updatePartnerActivation:::id"]=0
operation_parameters_maximum_occurrences["updatePartnerActivation:::params"]=0
operation_parameters_maximum_occurrences["deleteSystemArray:::system_id"]=0
operation_parameters_maximum_occurrences["deleteSystemArray:::id"]=0
operation_parameters_maximum_occurrences["getSystemArray:::system_id"]=0
operation_parameters_maximum_occurrences["getSystemArray:::id"]=0
operation_parameters_maximum_occurrences["getSystemArrays:::system_id"]=0
operation_parameters_maximum_occurrences["updateSystemArray:::system_id"]=0
operation_parameters_maximum_occurrences["updateSystemArray:::id"]=0
operation_parameters_maximum_occurrences["updateSystemArray:::params"]=0
operation_parameters_maximum_occurrences["updateSystemArrays:::system_id"]=0
operation_parameters_maximum_occurrences["updateSystemArrays:::params"]=0
operation_parameters_maximum_occurrences["createCompanyUser:::company_id"]=0
operation_parameters_maximum_occurrences["createCompanyUser:::params"]=0
operation_parameters_maximum_occurrences["getCompanyUser:::company_id"]=0
operation_parameters_maximum_occurrences["getCompanyUser:::user_id"]=0
operation_parameters_maximum_occurrences["getCompanyUser:::expand"]=0
operation_parameters_maximum_occurrences["getCompanyUsers:::company_id"]=0
operation_parameters_maximum_occurrences["updateCompanyUser:::company_id"]=0
operation_parameters_maximum_occurrences["updateCompanyUser:::user_id"]=0
operation_parameters_maximum_occurrences["updateCompanyUser:::params"]=0
operation_parameters_maximum_occurrences["getActivationEstimate:::activation_id"]=0
operation_parameters_maximum_occurrences["updateActivationEstimate:::activation_id"]=0
operation_parameters_maximum_occurrences["updateActivationEstimate:::params"]=0
operation_parameters_maximum_occurrences["createUser:::params"]=0
operation_parameters_maximum_occurrences["getSystemMeter:::system_id"]=0
operation_parameters_maximum_occurrences["getSystemMeter:::serial_number"]=0
operation_parameters_maximum_occurrences["setActivationMeterStatus:::activation_id"]=0
operation_parameters_maximum_occurrences["setActivationMeterStatus:::serial_number"]=0
operation_parameters_maximum_occurrences["setActivationMeterStatus:::params"]=0
operation_parameters_maximum_occurrences["updateSystemMeter:::system_id"]=0
operation_parameters_maximum_occurrences["updateSystemMeter:::serial_number"]=0
operation_parameters_maximum_occurrences["updateSystemMeter:::operational_date"]=0
operation_parameters_maximum_occurrences["getPvManufacturerModels:::pv_manufacturer_id"]=0
operation_parameters_maximum_occurrences["getSystemTariffSettings:::system_id"]=0
operation_parameters_maximum_occurrences["updateSystemTariffSettings:::system_id"]=0
operation_parameters_maximum_occurrences["updateSystemTariffSettings:::params"]=0
operation_parameters_maximum_occurrences["getActivationUser:::activation_id"]=0
operation_parameters_maximum_occurrences["getActivationUser:::user_id"]=0
operation_parameters_maximum_occurrences["getActivationUser:::expand"]=0
operation_parameters_maximum_occurrences["getSelfUser:::expand"]=0
operation_parameters_maximum_occurrences["getUser:::user_id"]=0
operation_parameters_maximum_occurrences["getUser:::expand"]=0
operation_parameters_maximum_occurrences["searchUsers:::email"]=0
operation_parameters_maximum_occurrences["updateActivationUser:::activation_id"]=0
operation_parameters_maximum_occurrences["updateActivationUser:::user_id"]=0
operation_parameters_maximum_occurrences["updateActivationUser:::params"]=0
operation_parameters_maximum_occurrences["updateUser:::user_id"]=0
operation_parameters_maximum_occurrences["updateUser:::params"]=0

##
# The type of collection for specifying multiple values for parameter:
# - multi, csv, ssv, tsv
declare -A operation_parameters_collection_type
operation_parameters_collection_type["createPartnerActivation:::params"]=""
operation_parameters_collection_type["deleteActivation:::id"]=""
operation_parameters_collection_type["getActivationOpsProductionMode:::activation_id"]=""
operation_parameters_collection_type["getPartnerActivation:::id"]=""
operation_parameters_collection_type["getPartnerActivation:::expand"]=""
operation_parameters_collection_type["getPartnerActivations:::next"]=""
operation_parameters_collection_type["getPartnerActivations:::limit"]=""
operation_parameters_collection_type["getPartnerActivations:::stage"]=""
operation_parameters_collection_type["getPartnerActivations:::reference"]=""
operation_parameters_collection_type["getPartnerActivations:::installer_id"]=""
operation_parameters_collection_type["getPartnerActivations:::system_name"]=""
operation_parameters_collection_type["getPartnerActivations:::address"]=""
operation_parameters_collection_type["getPartnerActivations:::region"]=""
operation_parameters_collection_type["getPartnerActivations:::search"]=""
operation_parameters_collection_type["grantActivationUserAccess:::activation_id"]=""
operation_parameters_collection_type["grantActivationUserAccess:::user_id"]=""
operation_parameters_collection_type["revokeActivationUserAccess:::activation_id"]=""
operation_parameters_collection_type["revokeActivationUserAccess:::user_id"]=""
operation_parameters_collection_type["setActivationOpsProductionMode:::activation_id"]=""
operation_parameters_collection_type["setActivationOpsProductionMode:::params"]=""
operation_parameters_collection_type["updatePartnerActivation:::id"]=""
operation_parameters_collection_type["updatePartnerActivation:::params"]=""
operation_parameters_collection_type["deleteSystemArray:::system_id"]=""
operation_parameters_collection_type["deleteSystemArray:::id"]=""
operation_parameters_collection_type["getSystemArray:::system_id"]=""
operation_parameters_collection_type["getSystemArray:::id"]=""
operation_parameters_collection_type["getSystemArrays:::system_id"]=""
operation_parameters_collection_type["updateSystemArray:::system_id"]=""
operation_parameters_collection_type["updateSystemArray:::id"]=""
operation_parameters_collection_type["updateSystemArray:::params"]=""
operation_parameters_collection_type["updateSystemArrays:::system_id"]=""
operation_parameters_collection_type["updateSystemArrays:::params"]=""
operation_parameters_collection_type["createCompanyUser:::company_id"]=""
operation_parameters_collection_type["createCompanyUser:::params"]=""
operation_parameters_collection_type["getCompanyUser:::company_id"]=""
operation_parameters_collection_type["getCompanyUser:::user_id"]=""
operation_parameters_collection_type["getCompanyUser:::expand"]=""
operation_parameters_collection_type["getCompanyUsers:::company_id"]=""
operation_parameters_collection_type["updateCompanyUser:::company_id"]=""
operation_parameters_collection_type["updateCompanyUser:::user_id"]=""
operation_parameters_collection_type["updateCompanyUser:::params"]=""
operation_parameters_collection_type["getActivationEstimate:::activation_id"]=""
operation_parameters_collection_type["updateActivationEstimate:::activation_id"]=""
operation_parameters_collection_type["updateActivationEstimate:::params"]=""
operation_parameters_collection_type["createUser:::params"]=""
operation_parameters_collection_type["getSystemMeter:::system_id"]=""
operation_parameters_collection_type["getSystemMeter:::serial_number"]=""
operation_parameters_collection_type["setActivationMeterStatus:::activation_id"]=""
operation_parameters_collection_type["setActivationMeterStatus:::serial_number"]=""
operation_parameters_collection_type["setActivationMeterStatus:::params"]=""
operation_parameters_collection_type["updateSystemMeter:::system_id"]=""
operation_parameters_collection_type["updateSystemMeter:::serial_number"]=""
operation_parameters_collection_type["updateSystemMeter:::operational_date"]=""
operation_parameters_collection_type["getPvManufacturerModels:::pv_manufacturer_id"]=""
operation_parameters_collection_type["getSystemTariffSettings:::system_id"]=""
operation_parameters_collection_type["updateSystemTariffSettings:::system_id"]=""
operation_parameters_collection_type["updateSystemTariffSettings:::params"]=""
operation_parameters_collection_type["getActivationUser:::activation_id"]=""
operation_parameters_collection_type["getActivationUser:::user_id"]=""
operation_parameters_collection_type["getActivationUser:::expand"]=""
operation_parameters_collection_type["getSelfUser:::expand"]=""
operation_parameters_collection_type["getUser:::user_id"]=""
operation_parameters_collection_type["getUser:::expand"]=""
operation_parameters_collection_type["searchUsers:::email"]=""
operation_parameters_collection_type["updateActivationUser:::activation_id"]=""
operation_parameters_collection_type["updateActivationUser:::user_id"]=""
operation_parameters_collection_type["updateActivationUser:::params"]=""
operation_parameters_collection_type["updateUser:::user_id"]=""
operation_parameters_collection_type["updateUser:::params"]=""


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

${BOLD}${WHITE}The Enphase Commissioning API command line client (API version 4.0)${OFF}

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
    echo -e "${BOLD}${WHITE}[activations]${OFF}"
read -r -d '' ops <<EOF
  ${CYAN}createPartnerActivation${OFF};Create new activation (AUTH) (AUTH)
  ${CYAN}deleteActivation${OFF};Delete an activation by ID (AUTH) (AUTH)
  ${CYAN}getActivationOpsProductionMode${OFF};Get production mode (AUTH) (AUTH)
  ${CYAN}getPartnerActivation${OFF};Retrieves an Activation by ID (AUTH) (AUTH)
  ${CYAN}getPartnerActivations${OFF};List of Activations (AUTH) (AUTH)
  ${CYAN}grantActivationUserAccess${OFF};Grant Access (AUTH) (AUTH)
  ${CYAN}revokeActivationUserAccess${OFF};Revoke Access (AUTH) (AUTH)
  ${CYAN}setActivationOpsProductionMode${OFF};Set production mode (AUTH) (AUTH)
  ${CYAN}updatePartnerActivation${OFF};Update an activation. (AUTH) (AUTH)
EOF
echo "  $ops" | column -t -s ';'
    echo ""
    echo -e "${BOLD}${WHITE}[arrays]${OFF}"
read -r -d '' ops <<EOF
  ${CYAN}deleteSystemArray${OFF};Delete an array by ID (AUTH) (AUTH)
  ${CYAN}getSystemArray${OFF};Fetch array details by ID (AUTH) (AUTH)
  ${CYAN}getSystemArrays${OFF};Fetch particular system Array details (AUTH) (AUTH)
  ${CYAN}updateSystemArray${OFF};Update particular system array details (AUTH) (AUTH)
  ${CYAN}updateSystemArrays${OFF};Update all arrays for system (AUTH) (AUTH)
EOF
echo "  $ops" | column -t -s ';'
    echo ""
    echo -e "${BOLD}${WHITE}[companies]${OFF}"
read -r -d '' ops <<EOF
  ${CYAN}createCompanyUser${OFF};Create company user (AUTH) (AUTH)
  ${CYAN}getCompanyUser${OFF};Returns the requested user (AUTH) (AUTH)
  ${CYAN}getCompanyUsers${OFF};Get all users with in a company (AUTH) (AUTH)
  ${CYAN}getSelfCompanyBranches${OFF};User's company and its branches (AUTH) (AUTH)
  ${CYAN}updateCompanyUser${OFF};Update company user (AUTH) (AUTH)
EOF
echo "  $ops" | column -t -s ';'
    echo ""
    echo -e "${BOLD}${WHITE}[estimate]${OFF}"
read -r -d '' ops <<EOF
  ${CYAN}getActivationEstimate${OFF};Returns the estimate for this system. (AUTH) (AUTH)
  ${CYAN}updateActivationEstimate${OFF};Update the estimate for this system. (AUTH) (AUTH)
EOF
echo "  $ops" | column -t -s ';'
    echo ""
    echo -e "${BOLD}${WHITE}[gridProfiles]${OFF}"
read -r -d '' ops <<EOF
  ${CYAN}getGridProfiles${OFF};Lists the available profiles (AUTH) (AUTH)
EOF
echo "  $ops" | column -t -s ';'
    echo ""
    echo -e "${BOLD}${WHITE}[homeOwner]${OFF}"
read -r -d '' ops <<EOF
  ${CYAN}createUser${OFF};Create Home owner (AUTH) (AUTH)
EOF
echo "  $ops" | column -t -s ';'
    echo ""
    echo -e "${BOLD}${WHITE}[meters]${OFF}"
read -r -d '' ops <<EOF
  ${CYAN}getSystemMeter${OFF};Returns the requested meter detail. (AUTH) (AUTH)
  ${CYAN}setActivationMeterStatus${OFF};Enable or Disable the meters. (AUTH) (AUTH)
  ${CYAN}updateSystemMeter${OFF};Update the operational date of a meter by serial number. (AUTH) (AUTH)
EOF
echo "  $ops" | column -t -s ';'
    echo ""
    echo -e "${BOLD}${WHITE}[pvManufacturers]${OFF}"
read -r -d '' ops <<EOF
  ${CYAN}getPvManufacturers${OFF};Returns PV module manufacturers (AUTH) (AUTH)
EOF
echo "  $ops" | column -t -s ';'
    echo ""
    echo -e "${BOLD}${WHITE}[pvModels]${OFF}"
read -r -d '' ops <<EOF
  ${CYAN}getPvManufacturerModels${OFF};Returns PV module manufacturers (AUTH) (AUTH)
EOF
echo "  $ops" | column -t -s ';'
    echo ""
    echo -e "${BOLD}${WHITE}[tariff]${OFF}"
read -r -d '' ops <<EOF
  ${CYAN}getSystemTariffSettings${OFF};Get tariff for a system (AUTH) (AUTH)
  ${CYAN}updateSystemTariffSettings${OFF};Update tariff for a system (AUTH) (AUTH)
EOF
echo "  $ops" | column -t -s ';'
    echo ""
    echo -e "${BOLD}${WHITE}[users]${OFF}"
read -r -d '' ops <<EOF
  ${CYAN}getActivationUser${OFF};Returns the requested user (AUTH) (AUTH)
  ${CYAN}getSelfUser${OFF};Return the current logged in user detail (AUTH) (AUTH)
  ${CYAN}getUser${OFF};Returns the requested user (AUTH) (AUTH)
  ${CYAN}searchUsers${OFF};Search user (AUTH) (AUTH)
  ${CYAN}updateActivationUser${OFF};Update user (AUTH) (AUTH)
  ${CYAN}updateUser${OFF};Update user (AUTH) (AUTH)
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
    echo -e "${BOLD}${WHITE}The Enphase Commissioning API command line client (API version 4.0)${OFF}"
    echo ""
    echo -e "License: Enphase Energy API License Agreement."
    echo -e "Contact: "
    echo ""
read -r -d '' appdescription <<EOF

Commissioning API can be used to create and update activations on a site, manage companies and users, update Tariff, etc.
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
    echo -e "${BOLD}The Enphase Commissioning API command line client (API version 4.0)${OFF}"
    echo ""
}

##############################################################################
#
# Print help for createPartnerActivation operation
#
##############################################################################
print_createPartnerActivation_help() {
    echo ""
    echo -e "${BOLD}${WHITE}createPartnerActivation - Create new activation${OFF}${BLUE}(AUTH - OAuth2)${OFF}${BLUE}(AUTH - QUERY)${OFF}" | paste -sd' ' | fold -sw 80 | sed '2,$s/^/    /'
    echo -e ""
    echo -e "Create new activation." | paste -sd' ' | fold -sw 80
    echo -e ""
    echo -e "${BOLD}${WHITE}Parameters${OFF}"
    echo -e "  * ${GREEN}body${OFF} ${BLUE}[application/json]${OFF}${OFF} - " | paste -sd' ' | fold -sw 80 | sed '2,$s/^/    /'
    echo -e ""
    echo ""
    echo -e "${BOLD}${WHITE}Responses${OFF}"
    code=201
    echo -e "${result_color_table[${code:0:1}]}  201;Created${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=401
    echo -e "${result_color_table[${code:0:1}]}  401;Unauthorized${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=405
    echo -e "${result_color_table[${code:0:1}]}  405;Method Not Allowed${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=422
    echo -e "${result_color_table[${code:0:1}]}  422;Unprocessable entity. The body contains error information in a hash of errorMessages and an optional errorCode.${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=429
    echo -e "${result_color_table[${code:0:1}]}  429;Too Many Requests${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=501
    echo -e "${result_color_table[${code:0:1}]}  501;Not Implemented${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
}
##############################################################################
#
# Print help for deleteActivation operation
#
##############################################################################
print_deleteActivation_help() {
    echo ""
    echo -e "${BOLD}${WHITE}deleteActivation - Delete an activation by ID${OFF}${BLUE}(AUTH - OAuth2)${OFF}${BLUE}(AUTH - QUERY)${OFF}" | paste -sd' ' | fold -sw 80 | sed '2,$s/^/    /'
    echo -e ""
    echo -e "To delete an activation, the activation stage must be less than 3 and there are no active devices associated with it." | paste -sd' ' | fold -sw 80
    echo -e ""
    echo -e "${BOLD}${WHITE}Parameters${OFF}"
    echo -e "  * ${GREEN}id${OFF} ${BLUE}[integer]${OFF} ${RED}(required)${OFF} ${CYAN}(default: null)${OFF} - Enlighten ID of the activation(system). ${YELLOW}Specify as: id=value${OFF}" | paste -sd' ' | fold -sw 80 | sed '2,$s/^/    /'
    echo ""
    echo -e "${BOLD}${WHITE}Responses${OFF}"
    code=200
    echo -e "${result_color_table[${code:0:1}]}  200;OK${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=401
    echo -e "${result_color_table[${code:0:1}]}  401;Unauthorized${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=404
    echo -e "${result_color_table[${code:0:1}]}  404;Not Found${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=405
    echo -e "${result_color_table[${code:0:1}]}  405;Method Not Allowed${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=422
    echo -e "${result_color_table[${code:0:1}]}  422;Unprocessable entity. The body contains error information in a hash of errorMessages and an optional errorCode.${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=429
    echo -e "${result_color_table[${code:0:1}]}  429;Too Many Requests${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=501
    echo -e "${result_color_table[${code:0:1}]}  501;Not Implemented${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
}
##############################################################################
#
# Print help for getActivationOpsProductionMode operation
#
##############################################################################
print_getActivationOpsProductionMode_help() {
    echo ""
    echo -e "${BOLD}${WHITE}getActivationOpsProductionMode - Get production mode${OFF}${BLUE}(AUTH - OAuth2)${OFF}${BLUE}(AUTH - QUERY)${OFF}" | paste -sd' ' | fold -sw 80 | sed '2,$s/^/    /'
    echo -e ""
    echo -e "Get production mode for a particular system. For that system stage must be greater than 2, Otherwise you will get 422." | paste -sd' ' | fold -sw 80
    echo -e ""
    echo -e "${BOLD}${WHITE}Parameters${OFF}"
    echo -e "  * ${GREEN}activation_id${OFF} ${BLUE}[integer]${OFF} ${RED}(required)${OFF} ${CYAN}(default: null)${OFF} - Enlighten ID of the activation(system). System-generated. ${YELLOW}Specify as: activation_id=value${OFF}" | paste -sd' ' | fold -sw 80 | sed '2,$s/^/    /'
    echo ""
    echo -e "${BOLD}${WHITE}Responses${OFF}"
    code=200
    echo -e "${result_color_table[${code:0:1}]}  200;OK${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=401
    echo -e "${result_color_table[${code:0:1}]}  401;Unauthorized${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=404
    echo -e "${result_color_table[${code:0:1}]}  404;Not Found${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=405
    echo -e "${result_color_table[${code:0:1}]}  405;Method Not Allowed${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=422
    echo -e "${result_color_table[${code:0:1}]}  422;Unprocessable entity. The body contains error information in a hash of errorMessages and an optional errorCode.${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=429
    echo -e "${result_color_table[${code:0:1}]}  429;Too Many Requests${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=501
    echo -e "${result_color_table[${code:0:1}]}  501;Not Implemented${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
}
##############################################################################
#
# Print help for getPartnerActivation operation
#
##############################################################################
print_getPartnerActivation_help() {
    echo ""
    echo -e "${BOLD}${WHITE}getPartnerActivation - Retrieves an Activation by ID${OFF}${BLUE}(AUTH - OAuth2)${OFF}${BLUE}(AUTH - QUERY)${OFF}" | paste -sd' ' | fold -sw 80 | sed '2,$s/^/    /'
    echo -e ""
    echo -e "By default, the body of the response looks like the example below. However, you can choose to retrieve more information about the activation using response expansion, for example instead of returning only the owner's name within the system hash, the response includes detailed information about the owner by using expand=owner. You can also expand the owner's company by using expand=owner.company. The response now includes information about the owner and the company he belongs to, if any. By using expand=host will include details about the system host. You can also expand the host's company by using expand=host.company. The response now includes information about the host and the company he belongs to." | paste -sd' ' | fold -sw 80
    echo -e ""
    echo -e "${BOLD}${WHITE}Parameters${OFF}"
    echo -e "  * ${GREEN}id${OFF} ${BLUE}[integer]${OFF} ${RED}(required)${OFF} ${CYAN}(default: null)${OFF} - Enlighten ID of the activation(system). System-generated. ${YELLOW}Specify as: id=value${OFF}" | paste -sd' ' | fold -sw 80 | sed '2,$s/^/    /'
    echo -e "  * ${GREEN}expand${OFF} ${BLUE}[SystemExpandEnum]${OFF} ${CYAN}(default: null)${OFF} - Retrieve more information about the activation. The expand query parameter is a comma-separated list of associations to expand.${YELLOW} Specify as: expand=value${OFF}" \
        | paste -sd' ' | fold -sw 80 | sed '2,$s/^/    /'
    echo ""
    echo -e "${BOLD}${WHITE}Responses${OFF}"
    code=200
    echo -e "${result_color_table[${code:0:1}]}  200;OK${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=401
    echo -e "${result_color_table[${code:0:1}]}  401;Unauthorized${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=404
    echo -e "${result_color_table[${code:0:1}]}  404;Not Found${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=405
    echo -e "${result_color_table[${code:0:1}]}  405;Method Not Allowed${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=429
    echo -e "${result_color_table[${code:0:1}]}  429;Too Many Requests${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=501
    echo -e "${result_color_table[${code:0:1}]}  501;Not Implemented${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
}
##############################################################################
#
# Print help for getPartnerActivations operation
#
##############################################################################
print_getPartnerActivations_help() {
    echo ""
    echo -e "${BOLD}${WHITE}getPartnerActivations - List of Activations${OFF}${BLUE}(AUTH - OAuth2)${OFF}${BLUE}(AUTH - QUERY)${OFF}" | paste -sd' ' | fold -sw 80 | sed '2,$s/^/    /'
    echo -e ""
    echo -e "Returns a list of activations for which the user can make API requests. There is a limit to the number of activations which can be returned at one time. If the first request does not return a full list, use the 'next' attribute in the response body to request the next page. By default, activations are returned in batches of 100. The maximum page size is 1000. Provide only valid filters. During filter the activations empty and invalid filter fields are ignored. In case the installer ID doesn't exist, API will return an empty array." | paste -sd' ' | fold -sw 80
    echo -e ""
    echo -e "${BOLD}${WHITE}Parameters${OFF}"
    echo -e "  * ${GREEN}next${OFF} ${BLUE}[string]${OFF} ${CYAN}(default: null)${OFF} - If the first request does not return a full list, use the 'next' attribute in the response body to request the next page. By default, activations are returned in batches of 100. The maximum page size is 1000. If the returned list below the limit, then response does not include the 'next' field.${YELLOW} Specify as: next=value${OFF}" \
        | paste -sd' ' | fold -sw 80 | sed '2,$s/^/    /'
    echo -e "  * ${GREEN}limit${OFF} ${BLUE}[integer]${OFF} ${CYAN}(default: null)${OFF} - There is a limit to the number of activations which can be returned at one time.${YELLOW} Specify as: limit=value${OFF}" \
        | paste -sd' ' | fold -sw 80 | sed '2,$s/^/    /'
    echo -e "  * ${GREEN}stage${OFF} ${BLUE}[SystemStageEnum]${OFF} ${CYAN}(default: null)${OFF} - Filter activations by stage. Passing in_progress alone will consider as you have passed all the 1,2,3,4 stages. Passing multiple stage values using comma to filter. E.g. stage=1,2,3. Passing in_progress with any other combination will give you empty systems.${YELLOW} Specify as: stage=value${OFF}" \
        | paste -sd' ' | fold -sw 80 | sed '2,$s/^/    /'
    echo -e "  * ${GREEN}reference${OFF} ${BLUE}[string]${OFF} ${CYAN}(default: null)${OFF} - Filter activations by company reference.${YELLOW} Specify as: reference=value${OFF}" \
        | paste -sd' ' | fold -sw 80 | sed '2,$s/^/    /'
    echo -e "  * ${GREEN}installer_id${OFF} ${BLUE}[integer]${OFF} ${CYAN}(default: null)${OFF} - Filter activations by installer ID.${YELLOW} Specify as: installer_id=value${OFF}" \
        | paste -sd' ' | fold -sw 80 | sed '2,$s/^/    /'
    echo -e "  * ${GREEN}system_name${OFF} ${BLUE}[string]${OFF} ${CYAN}(default: null)${OFF} - Filter activations by system name.${YELLOW} Specify as: system_name=value${OFF}" \
        | paste -sd' ' | fold -sw 80 | sed '2,$s/^/    /'
    echo -e "  * ${GREEN}address${OFF} ${BLUE}[string]${OFF} ${CYAN}(default: null)${OFF} - Filter activations by address. This will perform a partial search and return if match found with street1, street2, country, state, zipcode of the activation.${YELLOW} Specify as: address=value${OFF}" \
        | paste -sd' ' | fold -sw 80 | sed '2,$s/^/    /'
    echo -e "  * ${GREEN}region${OFF} ${BLUE}[string]${OFF} ${CYAN}(default: null)${OFF} - Filter activations by region. Provide two latitude, longitude values to find activations between them. Format 'latitude1,longitude1,latitude2,longitude2' e.g value '44.968046,-94.420307,44.33328,-89.132008'.${YELLOW} Specify as: region=value${OFF}" \
        | paste -sd' ' | fold -sw 80 | sed '2,$s/^/    /'
    echo -e "  * ${GREEN}search${OFF} ${BLUE}[string]${OFF} ${CYAN}(default: null)${OFF} - Filter activations by search. This will perform a partial search and return if match found with system_name, reference, system_id, street1 and street2, country, state, zipcode of the activation.${YELLOW} Specify as: search=value${OFF}" \
        | paste -sd' ' | fold -sw 80 | sed '2,$s/^/    /'
    echo ""
    echo -e "${BOLD}${WHITE}Responses${OFF}"
    code=200
    echo -e "${result_color_table[${code:0:1}]}  200;OK${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=401
    echo -e "${result_color_table[${code:0:1}]}  401;Unauthorized${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=405
    echo -e "${result_color_table[${code:0:1}]}  405;Method Not Allowed${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=422
    echo -e "${result_color_table[${code:0:1}]}  422;Unprocessable entity. The body contains error information in a hash of errorMessages and an optional errorCode.${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=429
    echo -e "${result_color_table[${code:0:1}]}  429;Too Many Requests${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=501
    echo -e "${result_color_table[${code:0:1}]}  501;Not Implemented${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
}
##############################################################################
#
# Print help for grantActivationUserAccess operation
#
##############################################################################
print_grantActivationUserAccess_help() {
    echo ""
    echo -e "${BOLD}${WHITE}grantActivationUserAccess - Grant Access${OFF}${BLUE}(AUTH - OAuth2)${OFF}${BLUE}(AUTH - QUERY)${OFF}" | paste -sd' ' | fold -sw 80 | sed '2,$s/^/    /'
    echo -e ""
    echo -e "Gives a user permission to view this system. Response status 200 indicates the access was granted. The user must be the owner or the host of an activation the API user can manage (or) Users created by API user (or) Users who belong to your company or its branches. In all other cases you will get 401 response." | paste -sd' ' | fold -sw 80
    echo -e ""
    echo -e "${BOLD}${WHITE}Parameters${OFF}"
    echo -e "  * ${GREEN}activation_id${OFF} ${BLUE}[integer]${OFF} ${RED}(required)${OFF} ${CYAN}(default: null)${OFF} - Enlighten ID of the activation(system). ${YELLOW}Specify as: activation_id=value${OFF}" | paste -sd' ' | fold -sw 80 | sed '2,$s/^/    /'
    echo -e "  * ${GREEN}user_id${OFF} ${BLUE}[integer]${OFF} ${RED}(required)${OFF} ${CYAN}(default: null)${OFF} - Enlighten ID of the user which you want to grant access. ${YELLOW}Specify as: user_id=value${OFF}" | paste -sd' ' | fold -sw 80 | sed '2,$s/^/    /'
    echo ""
    echo -e "${BOLD}${WHITE}Responses${OFF}"
    code=200
    echo -e "${result_color_table[${code:0:1}]}  200;OK${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=401
    echo -e "${result_color_table[${code:0:1}]}  401;Unauthorized${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=404
    echo -e "${result_color_table[${code:0:1}]}  404;Not Found${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=405
    echo -e "${result_color_table[${code:0:1}]}  405;Method Not Allowed${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=422
    echo -e "${result_color_table[${code:0:1}]}  422;Unprocessable entity. The body contains error information in a hash of errorMessages and an optional errorCode.${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=429
    echo -e "${result_color_table[${code:0:1}]}  429;Too Many Requests${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=501
    echo -e "${result_color_table[${code:0:1}]}  501;Not Implemented${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
}
##############################################################################
#
# Print help for revokeActivationUserAccess operation
#
##############################################################################
print_revokeActivationUserAccess_help() {
    echo ""
    echo -e "${BOLD}${WHITE}revokeActivationUserAccess - Revoke Access${OFF}${BLUE}(AUTH - OAuth2)${OFF}${BLUE}(AUTH - QUERY)${OFF}" | paste -sd' ' | fold -sw 80 | sed '2,$s/^/    /'
    echo -e ""
    echo -e "Revokes a user's permission to view this system. Response status 200 indicates the access was revoked. The user must be the owner or the host of an activation the API user can manage (or) Users created by API user (or) Users who belong to your company or its branches. In all other cases you will get 401 response." | paste -sd' ' | fold -sw 80
    echo -e ""
    echo -e "${BOLD}${WHITE}Parameters${OFF}"
    echo -e "  * ${GREEN}activation_id${OFF} ${BLUE}[integer]${OFF} ${RED}(required)${OFF} ${CYAN}(default: null)${OFF} - Enlighten ID of the activation(system). ${YELLOW}Specify as: activation_id=value${OFF}" | paste -sd' ' | fold -sw 80 | sed '2,$s/^/    /'
    echo -e "  * ${GREEN}user_id${OFF} ${BLUE}[integer]${OFF} ${RED}(required)${OFF} ${CYAN}(default: null)${OFF} - Enlighten ID of the user which you want to revoke the access. ${YELLOW}Specify as: user_id=value${OFF}" | paste -sd' ' | fold -sw 80 | sed '2,$s/^/    /'
    echo ""
    echo -e "${BOLD}${WHITE}Responses${OFF}"
    code=200
    echo -e "${result_color_table[${code:0:1}]}  200;OK${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=401
    echo -e "${result_color_table[${code:0:1}]}  401;Unauthorized${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=404
    echo -e "${result_color_table[${code:0:1}]}  404;Not Found${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=405
    echo -e "${result_color_table[${code:0:1}]}  405;Method Not Allowed${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=422
    echo -e "${result_color_table[${code:0:1}]}  422;Unprocessable entity. The body contains error information in a hash of errorMessages and an optional errorCode.${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=429
    echo -e "${result_color_table[${code:0:1}]}  429;Too Many Requests${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=501
    echo -e "${result_color_table[${code:0:1}]}  501;Not Implemented${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
}
##############################################################################
#
# Print help for setActivationOpsProductionMode operation
#
##############################################################################
print_setActivationOpsProductionMode_help() {
    echo ""
    echo -e "${BOLD}${WHITE}setActivationOpsProductionMode - Set production mode${OFF}${BLUE}(AUTH - OAuth2)${OFF}${BLUE}(AUTH - QUERY)${OFF}" | paste -sd' ' | fold -sw 80 | sed '2,$s/^/    /'
    echo -e ""
    echo -e "Enable or Disable production mode for a particular system. For that system stage must be greater than 2, Otherwise you will get 422." | paste -sd' ' | fold -sw 80
    echo -e ""
    echo -e "${BOLD}${WHITE}Parameters${OFF}"
    echo -e "  * ${GREEN}activation_id${OFF} ${BLUE}[integer]${OFF} ${RED}(required)${OFF} ${CYAN}(default: null)${OFF} - Enlighten ID of the activation(system). System-generated. ${YELLOW}Specify as: activation_id=value${OFF}" | paste -sd' ' | fold -sw 80 | sed '2,$s/^/    /'
    echo -e "  * ${GREEN}body${OFF} ${BLUE}[application/json]${OFF}${OFF} - " | paste -sd' ' | fold -sw 80 | sed '2,$s/^/    /'
    echo -e ""
    echo ""
    echo -e "${BOLD}${WHITE}Responses${OFF}"
    code=200
    echo -e "${result_color_table[${code:0:1}]}  200;OK${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=401
    echo -e "${result_color_table[${code:0:1}]}  401;Unauthorized${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=404
    echo -e "${result_color_table[${code:0:1}]}  404;Not Found${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=405
    echo -e "${result_color_table[${code:0:1}]}  405;Method Not Allowed${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=422
    echo -e "${result_color_table[${code:0:1}]}  422;Unprocessable entity. The body contains error information in a hash of errorMessages and an optional errorCode.${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=429
    echo -e "${result_color_table[${code:0:1}]}  429;Too Many Requests${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=501
    echo -e "${result_color_table[${code:0:1}]}  501;Not Implemented${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
}
##############################################################################
#
# Print help for updatePartnerActivation operation
#
##############################################################################
print_updatePartnerActivation_help() {
    echo ""
    echo -e "${BOLD}${WHITE}updatePartnerActivation - Update an activation.${OFF}${BLUE}(AUTH - OAuth2)${OFF}${BLUE}(AUTH - QUERY)${OFF}" | paste -sd' ' | fold -sw 80 | sed '2,$s/^/    /'
    echo -e ""
    echo -e "Update an activation." | paste -sd' ' | fold -sw 80
    echo -e ""
    echo -e "${BOLD}${WHITE}Parameters${OFF}"
    echo -e "  * ${GREEN}id${OFF} ${BLUE}[integer]${OFF} ${RED}(required)${OFF} ${CYAN}(default: null)${OFF} - Enlighten ID of the activation(system). System-generated. ${YELLOW}Specify as: id=value${OFF}" | paste -sd' ' | fold -sw 80 | sed '2,$s/^/    /'
    echo -e "  * ${GREEN}body${OFF} ${BLUE}[application/json]${OFF}${OFF} - " | paste -sd' ' | fold -sw 80 | sed '2,$s/^/    /'
    echo -e ""
    echo ""
    echo -e "${BOLD}${WHITE}Responses${OFF}"
    code=200
    echo -e "${result_color_table[${code:0:1}]}  200;OK${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=401
    echo -e "${result_color_table[${code:0:1}]}  401;Unauthorized${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=405
    echo -e "${result_color_table[${code:0:1}]}  405;Method Not Allowed${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=422
    echo -e "${result_color_table[${code:0:1}]}  422;Unprocessable entity. The body contains error information in a hash of errorMessages and an optional errorCode.${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=429
    echo -e "${result_color_table[${code:0:1}]}  429;Too Many Requests${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=501
    echo -e "${result_color_table[${code:0:1}]}  501;Not Implemented${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
}
##############################################################################
#
# Print help for deleteSystemArray operation
#
##############################################################################
print_deleteSystemArray_help() {
    echo ""
    echo -e "${BOLD}${WHITE}deleteSystemArray - Delete an array by ID${OFF}${BLUE}(AUTH - OAuth2)${OFF}${BLUE}(AUTH - QUERY)${OFF}" | paste -sd' ' | fold -sw 80 | sed '2,$s/^/    /'
    echo -e ""
    echo -e "Delete an array by ID." | paste -sd' ' | fold -sw 80
    echo -e ""
    echo -e "${BOLD}${WHITE}Parameters${OFF}"
    echo -e "  * ${GREEN}system_id${OFF} ${BLUE}[integer]${OFF} ${RED}(required)${OFF} ${CYAN}(default: null)${OFF} - System ID. ${YELLOW}Specify as: system_id=value${OFF}" | paste -sd' ' | fold -sw 80 | sed '2,$s/^/    /'
    echo -e "  * ${GREEN}id${OFF} ${BLUE}[integer]${OFF} ${RED}(required)${OFF} ${CYAN}(default: null)${OFF} - Array ID. ${YELLOW}Specify as: id=value${OFF}" | paste -sd' ' | fold -sw 80 | sed '2,$s/^/    /'
    echo ""
    echo -e "${BOLD}${WHITE}Responses${OFF}"
    code=200
    echo -e "${result_color_table[${code:0:1}]}  200;OK${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=401
    echo -e "${result_color_table[${code:0:1}]}  401;Unauthorized${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=404
    echo -e "${result_color_table[${code:0:1}]}  404;Not Found${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=405
    echo -e "${result_color_table[${code:0:1}]}  405;Method Not Allowed${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=422
    echo -e "${result_color_table[${code:0:1}]}  422;Unprocessable entity. The body contains error information in a hash of errorMessages and an optional errorCode.${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=429
    echo -e "${result_color_table[${code:0:1}]}  429;Too Many Requests${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=501
    echo -e "${result_color_table[${code:0:1}]}  501;Not Implemented${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
}
##############################################################################
#
# Print help for getSystemArray operation
#
##############################################################################
print_getSystemArray_help() {
    echo ""
    echo -e "${BOLD}${WHITE}getSystemArray - Fetch array details by ID${OFF}${BLUE}(AUTH - OAuth2)${OFF}${BLUE}(AUTH - QUERY)${OFF}" | paste -sd' ' | fold -sw 80 | sed '2,$s/^/    /'
    echo -e ""
    echo -e "Fetch array details by ID." | paste -sd' ' | fold -sw 80
    echo -e ""
    echo -e "${BOLD}${WHITE}Parameters${OFF}"
    echo -e "  * ${GREEN}system_id${OFF} ${BLUE}[integer]${OFF} ${RED}(required)${OFF} ${CYAN}(default: null)${OFF} - System ID. ${YELLOW}Specify as: system_id=value${OFF}" | paste -sd' ' | fold -sw 80 | sed '2,$s/^/    /'
    echo -e "  * ${GREEN}id${OFF} ${BLUE}[integer]${OFF} ${RED}(required)${OFF} ${CYAN}(default: null)${OFF} - Array ID. If an empty value is passed in the Array ID, this endpoint behaves as 'Fetch particular system Array details' endpoint. ${YELLOW}Specify as: id=value${OFF}" | paste -sd' ' | fold -sw 80 | sed '2,$s/^/    /'
    echo ""
    echo -e "${BOLD}${WHITE}Responses${OFF}"
    code=200
    echo -e "${result_color_table[${code:0:1}]}  200;OK${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=401
    echo -e "${result_color_table[${code:0:1}]}  401;Unauthorized${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=404
    echo -e "${result_color_table[${code:0:1}]}  404;Not Found${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=405
    echo -e "${result_color_table[${code:0:1}]}  405;Method Not Allowed${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=422
    echo -e "${result_color_table[${code:0:1}]}  422;Unprocessable entity. The body contains error information in a hash of errorMessages and an optional errorCode.${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=429
    echo -e "${result_color_table[${code:0:1}]}  429;Too Many Requests${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=501
    echo -e "${result_color_table[${code:0:1}]}  501;Not Implemented${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
}
##############################################################################
#
# Print help for getSystemArrays operation
#
##############################################################################
print_getSystemArrays_help() {
    echo ""
    echo -e "${BOLD}${WHITE}getSystemArrays - Fetch particular system Array details${OFF}${BLUE}(AUTH - OAuth2)${OFF}${BLUE}(AUTH - QUERY)${OFF}" | paste -sd' ' | fold -sw 80 | sed '2,$s/^/    /'
    echo -e ""
    echo -e "Fetch particular system Array details." | paste -sd' ' | fold -sw 80
    echo -e ""
    echo -e "${BOLD}${WHITE}Parameters${OFF}"
    echo -e "  * ${GREEN}system_id${OFF} ${BLUE}[integer]${OFF} ${RED}(required)${OFF} ${CYAN}(default: null)${OFF} - System ID. ${YELLOW}Specify as: system_id=value${OFF}" | paste -sd' ' | fold -sw 80 | sed '2,$s/^/    /'
    echo ""
    echo -e "${BOLD}${WHITE}Responses${OFF}"
    code=200
    echo -e "${result_color_table[${code:0:1}]}  200;OK${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=401
    echo -e "${result_color_table[${code:0:1}]}  401;Unauthorized${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=404
    echo -e "${result_color_table[${code:0:1}]}  404;Not Found${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=405
    echo -e "${result_color_table[${code:0:1}]}  405;Method Not Allowed${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=429
    echo -e "${result_color_table[${code:0:1}]}  429;Too Many Requests${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=501
    echo -e "${result_color_table[${code:0:1}]}  501;Not Implemented${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
}
##############################################################################
#
# Print help for updateSystemArray operation
#
##############################################################################
print_updateSystemArray_help() {
    echo ""
    echo -e "${BOLD}${WHITE}updateSystemArray - Update particular system array details${OFF}${BLUE}(AUTH - OAuth2)${OFF}${BLUE}(AUTH - QUERY)${OFF}" | paste -sd' ' | fold -sw 80 | sed '2,$s/^/    /'
    echo -e ""
    echo -e "Update particular system array details. The angle, left, and top fields in the request parameter must be of integer type. Enlighten will rearrange the top and left values of the modules to fit the modules properly and avoid overlap. Therefore, the top and left values in the response may be slightly different from the top and left values passed in the request parameters. In array level, top and left is the total size of the modules inside that array. Overall in arrays, the top and left values should not overlap. In the module level, the size of a panel is 100 units long in the x axis and 200 units long in the y axis. Please pass the left and top values in the request parameter in multiples of 100 and 200 respectively." | paste -sd' ' | fold -sw 80
    echo -e ""
    echo -e "${BOLD}${WHITE}Parameters${OFF}"
    echo -e "  * ${GREEN}system_id${OFF} ${BLUE}[integer]${OFF} ${RED}(required)${OFF} ${CYAN}(default: null)${OFF} - System ID. ${YELLOW}Specify as: system_id=value${OFF}" | paste -sd' ' | fold -sw 80 | sed '2,$s/^/    /'
    echo -e "  * ${GREEN}id${OFF} ${BLUE}[integer]${OFF} ${RED}(required)${OFF} ${CYAN}(default: null)${OFF} - Array ID. If an empty value is passed in the Array ID, this endpoint behaves as 'Update all Arrays' endpoint. ${YELLOW}Specify as: id=value${OFF}" | paste -sd' ' | fold -sw 80 | sed '2,$s/^/    /'
    echo -e "  * ${GREEN}body${OFF} ${BLUE}[application/text]${OFF}${OFF} - " | paste -sd' ' | fold -sw 80 | sed '2,$s/^/    /'
    echo -e ""
    echo ""
    echo -e "${BOLD}${WHITE}Responses${OFF}"
    code=200
    echo -e "${result_color_table[${code:0:1}]}  200;OK${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=401
    echo -e "${result_color_table[${code:0:1}]}  401;Unauthorized${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=404
    echo -e "${result_color_table[${code:0:1}]}  404;Not Found${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=405
    echo -e "${result_color_table[${code:0:1}]}  405;Method Not Allowed${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=422
    echo -e "${result_color_table[${code:0:1}]}  422;Unprocessable entity. The body contains error information in a hash of errorMessages and an optional errorCode.${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=429
    echo -e "${result_color_table[${code:0:1}]}  429;Too Many Requests${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=501
    echo -e "${result_color_table[${code:0:1}]}  501;Not Implemented${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
}
##############################################################################
#
# Print help for updateSystemArrays operation
#
##############################################################################
print_updateSystemArrays_help() {
    echo ""
    echo -e "${BOLD}${WHITE}updateSystemArrays - Update all arrays for system${OFF}${BLUE}(AUTH - OAuth2)${OFF}${BLUE}(AUTH - QUERY)${OFF}" | paste -sd' ' | fold -sw 80 | sed '2,$s/^/    /'
    echo -e ""
    echo -e "Update all arrays for system. The angle, left, and top fields in the request parameter must be of integer type. Enlighten will rearrange the top and left values of the modules to fit the modules properly and avoid overlap. Therefore, the top and left values in the response may be slightly different from the top and left values passed in the request parameters. In array level, top and left is the total size of the modules inside that array. Overall the arrays top and left values should not overlap. In the module level, the size of a panel is 100 units long in the x axis and 200 units long in the y axis. Please pass the left and top values in the request parameter in multiples of 100 and 200 respectively." | paste -sd' ' | fold -sw 80
    echo -e ""
    echo -e "${BOLD}${WHITE}Parameters${OFF}"
    echo -e "  * ${GREEN}system_id${OFF} ${BLUE}[integer]${OFF} ${RED}(required)${OFF} ${CYAN}(default: null)${OFF} - System ID. ${YELLOW}Specify as: system_id=value${OFF}" | paste -sd' ' | fold -sw 80 | sed '2,$s/^/    /'
    echo -e "  * ${GREEN}body${OFF} ${BLUE}[application/text]${OFF}${OFF} - " | paste -sd' ' | fold -sw 80 | sed '2,$s/^/    /'
    echo -e ""
    echo ""
    echo -e "${BOLD}${WHITE}Responses${OFF}"
    code=200
    echo -e "${result_color_table[${code:0:1}]}  200;OK${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=401
    echo -e "${result_color_table[${code:0:1}]}  401;Unauthorized${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=404
    echo -e "${result_color_table[${code:0:1}]}  404;Not Found${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=405
    echo -e "${result_color_table[${code:0:1}]}  405;Method Not Allowed${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=422
    echo -e "${result_color_table[${code:0:1}]}  422;Unprocessable entity. The body contains error information in a hash of errorMessages and an optional errorCode.${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=429
    echo -e "${result_color_table[${code:0:1}]}  429;Too Many Requests${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=501
    echo -e "${result_color_table[${code:0:1}]}  501;Not Implemented${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
}
##############################################################################
#
# Print help for createCompanyUser operation
#
##############################################################################
print_createCompanyUser_help() {
    echo ""
    echo -e "${BOLD}${WHITE}createCompanyUser - Create company user${OFF}${BLUE}(AUTH - OAuth2)${OFF}${BLUE}(AUTH - QUERY)${OFF}" | paste -sd' ' | fold -sw 80 | sed '2,$s/^/    /'
    echo -e ""
    echo -e "Create a company user. When the user is created in the context of a company, then the user is belongs to that company. Otherwise, the user does not belong to a company.
Email, first name, and last name are mandatory fields in the user. Any unneeded fields passed in the request parameter will be skipped and not stored.
Pass body param in 'application/x-www-form-urlencoded' format, in this endpoint, key will be 'user' and value will be a JSON dictionary of user fields." | paste -sd' ' | fold -sw 80
    echo -e ""
    echo -e "${BOLD}${WHITE}Parameters${OFF}"
    echo -e "  * ${GREEN}company_id${OFF} ${BLUE}[integer]${OFF} ${RED}(required)${OFF} ${CYAN}(default: null)${OFF} - Company ID. ${YELLOW}Specify as: company_id=value${OFF}" | paste -sd' ' | fold -sw 80 | sed '2,$s/^/    /'
    echo -e "  * ${GREEN}body${OFF} ${BLUE}[application/json]${OFF}${OFF} - " | paste -sd' ' | fold -sw 80 | sed '2,$s/^/    /'
    echo -e ""
    echo ""
    echo -e "${BOLD}${WHITE}Responses${OFF}"
    code=201
    echo -e "${result_color_table[${code:0:1}]}  201;Created${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=401
    echo -e "${result_color_table[${code:0:1}]}  401;Unauthorized${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=404
    echo -e "${result_color_table[${code:0:1}]}  404;Not Found${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=405
    echo -e "${result_color_table[${code:0:1}]}  405;Method Not Allowed${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=422
    echo -e "${result_color_table[${code:0:1}]}  422;Unprocessable entity. The body contains error information in a hash of errorMessages and an optional errorCode.${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=429
    echo -e "${result_color_table[${code:0:1}]}  429;Too Many Requests${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=501
    echo -e "${result_color_table[${code:0:1}]}  501;Not Implemented${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
}
##############################################################################
#
# Print help for getCompanyUser operation
#
##############################################################################
print_getCompanyUser_help() {
    echo ""
    echo -e "${BOLD}${WHITE}getCompanyUser - Returns the requested user${OFF}${BLUE}(AUTH - OAuth2)${OFF}${BLUE}(AUTH - QUERY)${OFF}" | paste -sd' ' | fold -sw 80 | sed '2,$s/^/    /'
    echo -e ""
    echo -e "Returns the requested user. If the user is requested in the scope of a company, then two conditions apply. 1) You must have access to the requested company; otherwise a 401 is returned. 2) The user must belong to the requested company; otherwise a 401 is returned. Company details are provided in the response only if 'expand' parameter is passed in the URL with value as company. Otherwise, company information will not be provided in the response." | paste -sd' ' | fold -sw 80
    echo -e ""
    echo -e "${BOLD}${WHITE}Parameters${OFF}"
    echo -e "  * ${GREEN}company_id${OFF} ${BLUE}[integer]${OFF} ${RED}(required)${OFF} ${CYAN}(default: null)${OFF} - Company ID. ${YELLOW}Specify as: company_id=value${OFF}" | paste -sd' ' | fold -sw 80 | sed '2,$s/^/    /'
    echo -e "  * ${GREEN}user_id${OFF} ${BLUE}[integer]${OFF} ${RED}(required)${OFF} ${CYAN}(default: null)${OFF} - User ID. ${YELLOW}Specify as: user_id=value${OFF}" | paste -sd' ' | fold -sw 80 | sed '2,$s/^/    /'
    echo -e "  * ${GREEN}expand${OFF} ${BLUE}[UserExpandEnum]${OFF} ${CYAN}(default: null)${OFF} - Passing expand params in the url with valid option, then the response will contain company object fields. Otherwise the company information will not be provided in the response.${YELLOW} Specify as: expand=value${OFF}" \
        | paste -sd' ' | fold -sw 80 | sed '2,$s/^/    /'
    echo ""
    echo -e "${BOLD}${WHITE}Responses${OFF}"
    code=200
    echo -e "${result_color_table[${code:0:1}]}  200;OK${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=401
    echo -e "${result_color_table[${code:0:1}]}  401;Unauthorized${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=404
    echo -e "${result_color_table[${code:0:1}]}  404;Not Found${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=405
    echo -e "${result_color_table[${code:0:1}]}  405;Method Not Allowed${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=422
    echo -e "${result_color_table[${code:0:1}]}  422;Unprocessable entity. The body contains error information in a hash of errorMessages and an optional errorCode.${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=429
    echo -e "${result_color_table[${code:0:1}]}  429;Too Many Requests${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=501
    echo -e "${result_color_table[${code:0:1}]}  501;Not Implemented${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
}
##############################################################################
#
# Print help for getCompanyUsers operation
#
##############################################################################
print_getCompanyUsers_help() {
    echo ""
    echo -e "${BOLD}${WHITE}getCompanyUsers - Get all users with in a company${OFF}${BLUE}(AUTH - OAuth2)${OFF}${BLUE}(AUTH - QUERY)${OFF}" | paste -sd' ' | fold -sw 80 | sed '2,$s/^/    /'
    echo -e ""
    echo -e "Returns the users in the given company." | paste -sd' ' | fold -sw 80
    echo -e ""
    echo -e "${BOLD}${WHITE}Parameters${OFF}"
    echo -e "  * ${GREEN}company_id${OFF} ${BLUE}[integer]${OFF} ${RED}(required)${OFF} ${CYAN}(default: null)${OFF} - Company ID. ${YELLOW}Specify as: company_id=value${OFF}" | paste -sd' ' | fold -sw 80 | sed '2,$s/^/    /'
    echo ""
    echo -e "${BOLD}${WHITE}Responses${OFF}"
    code=200
    echo -e "${result_color_table[${code:0:1}]}  200;OK${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=401
    echo -e "${result_color_table[${code:0:1}]}  401;Unauthorized${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=404
    echo -e "${result_color_table[${code:0:1}]}  404;Not Found${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=405
    echo -e "${result_color_table[${code:0:1}]}  405;Method Not Allowed${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=429
    echo -e "${result_color_table[${code:0:1}]}  429;Too Many Requests${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=501
    echo -e "${result_color_table[${code:0:1}]}  501;Not Implemented${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
}
##############################################################################
#
# Print help for getSelfCompanyBranches operation
#
##############################################################################
print_getSelfCompanyBranches_help() {
    echo ""
    echo -e "${BOLD}${WHITE}getSelfCompanyBranches - User's company and its branches${OFF}${BLUE}(AUTH - OAuth2)${OFF}${BLUE}(AUTH - QUERY)${OFF}" | paste -sd' ' | fold -sw 80 | sed '2,$s/^/    /'
    echo -e ""
    echo -e "Returns information about the API user's company and its branches, if any." | paste -sd' ' | fold -sw 80
    echo -e ""
    echo ""
    echo -e "${BOLD}${WHITE}Responses${OFF}"
    code=200
    echo -e "${result_color_table[${code:0:1}]}  200;OK${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=401
    echo -e "${result_color_table[${code:0:1}]}  401;Unauthorized${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=405
    echo -e "${result_color_table[${code:0:1}]}  405;Method Not Allowed${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=429
    echo -e "${result_color_table[${code:0:1}]}  429;Too Many Requests${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=501
    echo -e "${result_color_table[${code:0:1}]}  501;Not Implemented${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
}
##############################################################################
#
# Print help for updateCompanyUser operation
#
##############################################################################
print_updateCompanyUser_help() {
    echo ""
    echo -e "${BOLD}${WHITE}updateCompanyUser - Update company user${OFF}${BLUE}(AUTH - OAuth2)${OFF}${BLUE}(AUTH - QUERY)${OFF}" | paste -sd' ' | fold -sw 80 | sed '2,$s/^/    /'
    echo -e ""
    echo -e "Updates a user. You may change a user's company if you have access to the user, the old company, and the new company. The user is requested in the scope of a company, then three conditions apply. 1) You must have access to the requested company; otherwise a 401 is returned. 2) The user must belong to the requested company; otherwise a 401 is returned. 3) Requested user must be created by API user (or) it must belong to your company or its branches." | paste -sd' ' | fold -sw 80
    echo -e ""
    echo -e "${BOLD}${WHITE}Parameters${OFF}"
    echo -e "  * ${GREEN}company_id${OFF} ${BLUE}[integer]${OFF} ${RED}(required)${OFF} ${CYAN}(default: null)${OFF} - Company ID. ${YELLOW}Specify as: company_id=value${OFF}" | paste -sd' ' | fold -sw 80 | sed '2,$s/^/    /'
    echo -e "  * ${GREEN}user_id${OFF} ${BLUE}[integer]${OFF} ${RED}(required)${OFF} ${CYAN}(default: null)${OFF} - User ID. ${YELLOW}Specify as: user_id=value${OFF}" | paste -sd' ' | fold -sw 80 | sed '2,$s/^/    /'
    echo -e "  * ${GREEN}body${OFF} ${BLUE}[application/json]${OFF}${OFF} - " | paste -sd' ' | fold -sw 80 | sed '2,$s/^/    /'
    echo -e ""
    echo ""
    echo -e "${BOLD}${WHITE}Responses${OFF}"
    code=200
    echo -e "${result_color_table[${code:0:1}]}  200;OK${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=401
    echo -e "${result_color_table[${code:0:1}]}  401;Unauthorized${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=404
    echo -e "${result_color_table[${code:0:1}]}  404;Not Found${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=405
    echo -e "${result_color_table[${code:0:1}]}  405;Method Not Allowed${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=422
    echo -e "${result_color_table[${code:0:1}]}  422;Unprocessable entity. The body contains error information in a hash of errorMessages and an optional errorCode.${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=429
    echo -e "${result_color_table[${code:0:1}]}  429;Too Many Requests${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=501
    echo -e "${result_color_table[${code:0:1}]}  501;Not Implemented${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
}
##############################################################################
#
# Print help for getActivationEstimate operation
#
##############################################################################
print_getActivationEstimate_help() {
    echo ""
    echo -e "${BOLD}${WHITE}getActivationEstimate - Returns the estimate for this system.${OFF}${BLUE}(AUTH - OAuth2)${OFF}${BLUE}(AUTH - QUERY)${OFF}" | paste -sd' ' | fold -sw 80 | sed '2,$s/^/    /'
    echo -e ""
    echo -e "Provides access to production estimates for a system. An estimate includes the annual degradation factor for the system as well as estimated production, in kWh, for each month. By default degrade_factor value is 0.5 and month_estimates value is an empty array." | paste -sd' ' | fold -sw 80
    echo -e ""
    echo -e "${BOLD}${WHITE}Parameters${OFF}"
    echo -e "  * ${GREEN}activation_id${OFF} ${BLUE}[integer]${OFF} ${RED}(required)${OFF} ${CYAN}(default: null)${OFF} - Activation ID. ${YELLOW}Specify as: activation_id=value${OFF}" | paste -sd' ' | fold -sw 80 | sed '2,$s/^/    /'
    echo ""
    echo -e "${BOLD}${WHITE}Responses${OFF}"
    code=200
    echo -e "${result_color_table[${code:0:1}]}  200;OK${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=401
    echo -e "${result_color_table[${code:0:1}]}  401;Unauthorized${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=404
    echo -e "${result_color_table[${code:0:1}]}  404;Not Found${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=405
    echo -e "${result_color_table[${code:0:1}]}  405;Method Not Allowed${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=429
    echo -e "${result_color_table[${code:0:1}]}  429;Too Many Requests${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=501
    echo -e "${result_color_table[${code:0:1}]}  501;Not Implemented${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
}
##############################################################################
#
# Print help for updateActivationEstimate operation
#
##############################################################################
print_updateActivationEstimate_help() {
    echo ""
    echo -e "${BOLD}${WHITE}updateActivationEstimate - Update the estimate for this system.${OFF}${BLUE}(AUTH - OAuth2)${OFF}${BLUE}(AUTH - QUERY)${OFF}" | paste -sd' ' | fold -sw 80 | sed '2,$s/^/    /'
    echo -e ""
    echo -e "Updates the estimate for this system." | paste -sd' ' | fold -sw 80
    echo -e ""
    echo -e "${BOLD}${WHITE}Parameters${OFF}"
    echo -e "  * ${GREEN}activation_id${OFF} ${BLUE}[integer]${OFF} ${RED}(required)${OFF} ${CYAN}(default: null)${OFF} - Activation ID. ${YELLOW}Specify as: activation_id=value${OFF}" | paste -sd' ' | fold -sw 80 | sed '2,$s/^/    /'
    echo -e "  * ${GREEN}body${OFF} ${BLUE}[application/json]${OFF}${OFF} - " | paste -sd' ' | fold -sw 80 | sed '2,$s/^/    /'
    echo -e ""
    echo ""
    echo -e "${BOLD}${WHITE}Responses${OFF}"
    code=200
    echo -e "${result_color_table[${code:0:1}]}  200;OK${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=401
    echo -e "${result_color_table[${code:0:1}]}  401;Unauthorized${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=404
    echo -e "${result_color_table[${code:0:1}]}  404;Not Found${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=405
    echo -e "${result_color_table[${code:0:1}]}  405;Method Not Allowed${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=422
    echo -e "${result_color_table[${code:0:1}]}  422;Unprocessable entity. The body contains error information in a hash of errorMessages and an optional errorCode.${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=429
    echo -e "${result_color_table[${code:0:1}]}  429;Too Many Requests${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=501
    echo -e "${result_color_table[${code:0:1}]}  501;Not Implemented${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
}
##############################################################################
#
# Print help for getGridProfiles operation
#
##############################################################################
print_getGridProfiles_help() {
    echo ""
    echo -e "${BOLD}${WHITE}getGridProfiles - Lists the available profiles${OFF}${BLUE}(AUTH - OAuth2)${OFF}${BLUE}(AUTH - QUERY)${OFF}" | paste -sd' ' | fold -sw 80 | sed '2,$s/^/    /'
    echo -e ""
    echo -e "Lists the available profiles." | paste -sd' ' | fold -sw 80
    echo -e ""
    echo ""
    echo -e "${BOLD}${WHITE}Responses${OFF}"
    code=200
    echo -e "${result_color_table[${code:0:1}]}  200;OK${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=401
    echo -e "${result_color_table[${code:0:1}]}  401;Unauthorized${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=404
    echo -e "${result_color_table[${code:0:1}]}  404;Not Found${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=405
    echo -e "${result_color_table[${code:0:1}]}  405;Method Not Allowed${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=429
    echo -e "${result_color_table[${code:0:1}]}  429;Too Many Requests${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=501
    echo -e "${result_color_table[${code:0:1}]}  501;Not Implemented${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
}
##############################################################################
#
# Print help for createUser operation
#
##############################################################################
print_createUser_help() {
    echo ""
    echo -e "${BOLD}${WHITE}createUser - Create Home owner${OFF}${BLUE}(AUTH - OAuth2)${OFF}${BLUE}(AUTH - QUERY)${OFF}" | paste -sd' ' | fold -sw 80 | sed '2,$s/^/    /'
    echo -e ""
    echo -e "Create a home owner user. Email, first name, and last name are mandatory fields in the user. Any unneeded fields passed in the request parameter will be skipped and not stored.
Pass body param in 'application/x-www-form-urlencoded' format, in this endpoint, key will be 'user' and value will be a JSON dictionary of user fields.
Using this API to create both homeowner as well as a company user. If you want to create company user, then pass company_id inside the user object." | paste -sd' ' | fold -sw 80
    echo -e ""
    echo -e "${BOLD}${WHITE}Parameters${OFF}"
    echo -e "  * ${GREEN}body${OFF} ${BLUE}[application/json]${OFF}${OFF} - " | paste -sd' ' | fold -sw 80 | sed '2,$s/^/    /'
    echo -e ""
    echo ""
    echo -e "${BOLD}${WHITE}Responses${OFF}"
    code=201
    echo -e "${result_color_table[${code:0:1}]}  201;Created${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=401
    echo -e "${result_color_table[${code:0:1}]}  401;Unauthorized${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=405
    echo -e "${result_color_table[${code:0:1}]}  405;Method Not Allowed${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=422
    echo -e "${result_color_table[${code:0:1}]}  422;Unprocessable entity. The body contains error information in a hash of errorMessages and an optional errorCode.${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=429
    echo -e "${result_color_table[${code:0:1}]}  429;Too Many Requests${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=501
    echo -e "${result_color_table[${code:0:1}]}  501;Not Implemented${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
}
##############################################################################
#
# Print help for getSystemMeter operation
#
##############################################################################
print_getSystemMeter_help() {
    echo ""
    echo -e "${BOLD}${WHITE}getSystemMeter - Returns the requested meter detail.${OFF}${BLUE}(AUTH - OAuth2)${OFF}${BLUE}(AUTH - QUERY)${OFF}" | paste -sd' ' | fold -sw 80 | sed '2,$s/^/    /'
    echo -e ""
    echo -e "Returns the requested meter by serial number. You must have access to the requested system and meter; otherwise a 401 is returned." | paste -sd' ' | fold -sw 80
    echo -e ""
    echo -e "${BOLD}${WHITE}Parameters${OFF}"
    echo -e "  * ${GREEN}system_id${OFF} ${BLUE}[integer]${OFF} ${RED}(required)${OFF} ${CYAN}(default: null)${OFF} - System ID. ${YELLOW}Specify as: system_id=value${OFF}" | paste -sd' ' | fold -sw 80 | sed '2,$s/^/    /'
    echo -e "  * ${GREEN}serial_number${OFF} ${BLUE}[string]${OFF} ${RED}(required)${OFF} ${CYAN}(default: null)${OFF} - Meter serial number. ${YELLOW}Specify as: serial_number=value${OFF}" | paste -sd' ' | fold -sw 80 | sed '2,$s/^/    /'
    echo ""
    echo -e "${BOLD}${WHITE}Responses${OFF}"
    code=200
    echo -e "${result_color_table[${code:0:1}]}  200;OK${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=401
    echo -e "${result_color_table[${code:0:1}]}  401;Unauthorized${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=404
    echo -e "${result_color_table[${code:0:1}]}  404;Not Found${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=405
    echo -e "${result_color_table[${code:0:1}]}  405;Method Not Allowed${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=429
    echo -e "${result_color_table[${code:0:1}]}  429;Too Many Requests${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=501
    echo -e "${result_color_table[${code:0:1}]}  501;Not Implemented${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
}
##############################################################################
#
# Print help for setActivationMeterStatus operation
#
##############################################################################
print_setActivationMeterStatus_help() {
    echo ""
    echo -e "${BOLD}${WHITE}setActivationMeterStatus - Enable or Disable the meters.${OFF}${BLUE}(AUTH - OAuth2)${OFF}${BLUE}(AUTH - QUERY)${OFF}" | paste -sd' ' | fold -sw 80 | sed '2,$s/^/    /'
    echo -e ""
    echo -e "Enable or Disable the meters. You must have access to the requested system and meter; otherwise a 401 is returned." | paste -sd' ' | fold -sw 80
    echo -e ""
    echo -e "${BOLD}${WHITE}Parameters${OFF}"
    echo -e "  * ${GREEN}activation_id${OFF} ${BLUE}[integer]${OFF} ${RED}(required)${OFF} ${CYAN}(default: null)${OFF} - Activation ID. ${YELLOW}Specify as: activation_id=value${OFF}" | paste -sd' ' | fold -sw 80 | sed '2,$s/^/    /'
    echo -e "  * ${GREEN}serial_number${OFF} ${BLUE}[string]${OFF} ${RED}(required)${OFF} ${CYAN}(default: null)${OFF} - Meter serial number. ${YELLOW}Specify as: serial_number=value${OFF}" | paste -sd' ' | fold -sw 80 | sed '2,$s/^/    /'
    echo -e "  * ${GREEN}body${OFF} ${BLUE}[application/json]${OFF}${OFF} - " | paste -sd' ' | fold -sw 80 | sed '2,$s/^/    /'
    echo -e ""
    echo ""
    echo -e "${BOLD}${WHITE}Responses${OFF}"
    code=200
    echo -e "${result_color_table[${code:0:1}]}  200;OK${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=401
    echo -e "${result_color_table[${code:0:1}]}  401;Unauthorized${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=404
    echo -e "${result_color_table[${code:0:1}]}  404;Not Found${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=405
    echo -e "${result_color_table[${code:0:1}]}  405;Method Not Allowed${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=422
    echo -e "${result_color_table[${code:0:1}]}  422;Unprocessable entity. The body contains error information in a hash of errorMessages and an optional errorCode.${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=429
    echo -e "${result_color_table[${code:0:1}]}  429;Too Many Requests${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=501
    echo -e "${result_color_table[${code:0:1}]}  501;Not Implemented${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
}
##############################################################################
#
# Print help for updateSystemMeter operation
#
##############################################################################
print_updateSystemMeter_help() {
    echo ""
    echo -e "${BOLD}${WHITE}updateSystemMeter - Update the operational date of a meter by serial number.${OFF}${BLUE}(AUTH - OAuth2)${OFF}${BLUE}(AUTH - QUERY)${OFF}" | paste -sd' ' | fold -sw 80 | sed '2,$s/^/    /'
    echo -e ""
    echo -e "Update the operational date of a meter. You must have access to the requested system and meter; otherwise a 401 is returned." | paste -sd' ' | fold -sw 80
    echo -e ""
    echo -e "${BOLD}${WHITE}Parameters${OFF}"
    echo -e "  * ${GREEN}system_id${OFF} ${BLUE}[integer]${OFF} ${RED}(required)${OFF} ${CYAN}(default: null)${OFF} - System ID. ${YELLOW}Specify as: system_id=value${OFF}" | paste -sd' ' | fold -sw 80 | sed '2,$s/^/    /'
    echo -e "  * ${GREEN}serial_number${OFF} ${BLUE}[string]${OFF} ${RED}(required)${OFF} ${CYAN}(default: null)${OFF} - Meter serial number. ${YELLOW}Specify as: serial_number=value${OFF}" | paste -sd' ' | fold -sw 80 | sed '2,$s/^/    /'
    echo -e "  * ${GREEN}operational_date${OFF} ${BLUE}[string]${OFF} ${CYAN}(default: null)${OFF} - Operational date in the following format YYYY-MM-DD.${YELLOW} Specify as: operational_date=value${OFF}" \
        | paste -sd' ' | fold -sw 80 | sed '2,$s/^/    /'
    echo ""
    echo -e "${BOLD}${WHITE}Responses${OFF}"
    code=200
    echo -e "${result_color_table[${code:0:1}]}  200;OK${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=401
    echo -e "${result_color_table[${code:0:1}]}  401;Unauthorized${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=404
    echo -e "${result_color_table[${code:0:1}]}  404;Not Found${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=405
    echo -e "${result_color_table[${code:0:1}]}  405;Method Not Allowed${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=422
    echo -e "${result_color_table[${code:0:1}]}  422;Unprocessable entity. The body contains error information in a hash of errorMessages and an optional errorCode.${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=429
    echo -e "${result_color_table[${code:0:1}]}  429;Too Many Requests${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=501
    echo -e "${result_color_table[${code:0:1}]}  501;Not Implemented${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
}
##############################################################################
#
# Print help for getPvManufacturers operation
#
##############################################################################
print_getPvManufacturers_help() {
    echo ""
    echo -e "${BOLD}${WHITE}getPvManufacturers - Returns PV module manufacturers${OFF}${BLUE}(AUTH - OAuth2)${OFF}${BLUE}(AUTH - QUERY)${OFF}" | paste -sd' ' | fold -sw 80 | sed '2,$s/^/    /'
    echo -e ""
    echo -e "Returns information about the PV module manufacturers known in Enlighten." | paste -sd' ' | fold -sw 80
    echo -e ""
    echo ""
    echo -e "${BOLD}${WHITE}Responses${OFF}"
    code=200
    echo -e "${result_color_table[${code:0:1}]}  200;OK${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=401
    echo -e "${result_color_table[${code:0:1}]}  401;Unauthorized${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=405
    echo -e "${result_color_table[${code:0:1}]}  405;Method Not Allowed${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=429
    echo -e "${result_color_table[${code:0:1}]}  429;Too Many Requests${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=501
    echo -e "${result_color_table[${code:0:1}]}  501;Not Implemented${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
}
##############################################################################
#
# Print help for getPvManufacturerModels operation
#
##############################################################################
print_getPvManufacturerModels_help() {
    echo ""
    echo -e "${BOLD}${WHITE}getPvManufacturerModels - Returns PV module manufacturers${OFF}${BLUE}(AUTH - OAuth2)${OFF}${BLUE}(AUTH - QUERY)${OFF}" | paste -sd' ' | fold -sw 80 | sed '2,$s/^/    /'
    echo -e ""
    echo -e "Returns information about the PV modules known in Enlighten." | paste -sd' ' | fold -sw 80
    echo -e ""
    echo -e "${BOLD}${WHITE}Parameters${OFF}"
    echo -e "  * ${GREEN}pv_manufacturer_id${OFF} ${BLUE}[integer]${OFF} ${RED}(required)${OFF} ${CYAN}(default: null)${OFF} - Pv manufacturer ID. ${YELLOW}Specify as: pv_manufacturer_id=value${OFF}" | paste -sd' ' | fold -sw 80 | sed '2,$s/^/    /'
    echo ""
    echo -e "${BOLD}${WHITE}Responses${OFF}"
    code=200
    echo -e "${result_color_table[${code:0:1}]}  200;OK${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=401
    echo -e "${result_color_table[${code:0:1}]}  401;Unauthorized${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=404
    echo -e "${result_color_table[${code:0:1}]}  404;Not Found${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=405
    echo -e "${result_color_table[${code:0:1}]}  405;Method Not Allowed${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=429
    echo -e "${result_color_table[${code:0:1}]}  429;Too Many Requests${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=501
    echo -e "${result_color_table[${code:0:1}]}  501;Not Implemented${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
}
##############################################################################
#
# Print help for getSystemTariffSettings operation
#
##############################################################################
print_getSystemTariffSettings_help() {
    echo ""
    echo -e "${BOLD}${WHITE}getSystemTariffSettings - Get tariff for a system${OFF}${BLUE}(AUTH - OAuth2)${OFF}${BLUE}(AUTH - QUERY)${OFF}" | paste -sd' ' | fold -sw 80 | sed '2,$s/^/    /'
    echo -e ""
    echo -e "Get tariff for a system." | paste -sd' ' | fold -sw 80
    echo -e ""
    echo -e "${BOLD}${WHITE}Parameters${OFF}"
    echo -e "  * ${GREEN}system_id${OFF} ${BLUE}[integer]${OFF} ${RED}(required)${OFF} ${CYAN}(default: null)${OFF} - Unique numeric ID of the system. ${YELLOW}Specify as: system_id=value${OFF}" | paste -sd' ' | fold -sw 80 | sed '2,$s/^/    /'
    echo ""
    echo -e "${BOLD}${WHITE}Responses${OFF}"
    code=200
    echo -e "${result_color_table[${code:0:1}]}  200;OK${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=401
    echo -e "${result_color_table[${code:0:1}]}  401;Unauthorized${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=404
    echo -e "${result_color_table[${code:0:1}]}  404;Not Found${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=405
    echo -e "${result_color_table[${code:0:1}]}  405;Method Not Allowed${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=429
    echo -e "${result_color_table[${code:0:1}]}  429;Too Many Requests${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=501
    echo -e "${result_color_table[${code:0:1}]}  501;Not Implemented${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
}
##############################################################################
#
# Print help for updateSystemTariffSettings operation
#
##############################################################################
print_updateSystemTariffSettings_help() {
    echo ""
    echo -e "${BOLD}${WHITE}updateSystemTariffSettings - Update tariff for a system${OFF}${BLUE}(AUTH - OAuth2)${OFF}${BLUE}(AUTH - QUERY)${OFF}" | paste -sd' ' | fold -sw 80 | sed '2,$s/^/    /'
    echo -e ""
    echo -e "${BOLD}${WHITE}Parameters${OFF}"
    echo -e "  * ${GREEN}system_id${OFF} ${BLUE}[integer]${OFF} ${RED}(required)${OFF} ${CYAN}(default: null)${OFF} - Unique numeric ID of the system. ${YELLOW}Specify as: system_id=value${OFF}" | paste -sd' ' | fold -sw 80 | sed '2,$s/^/    /'
    echo -e "  * ${GREEN}body${OFF} ${BLUE}[application/text]${OFF}${OFF} - " | paste -sd' ' | fold -sw 80 | sed '2,$s/^/    /'
    echo -e ""
    echo ""
    echo -e "${BOLD}${WHITE}Responses${OFF}"
    code=200
    echo -e "${result_color_table[${code:0:1}]}  200;OK${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=401
    echo -e "${result_color_table[${code:0:1}]}  401;Unauthorized${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=404
    echo -e "${result_color_table[${code:0:1}]}  404;Not Found${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=405
    echo -e "${result_color_table[${code:0:1}]}  405;Method Not Allowed${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=429
    echo -e "${result_color_table[${code:0:1}]}  429;Too Many Requests${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=501
    echo -e "${result_color_table[${code:0:1}]}  501;Not Implemented${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
}
##############################################################################
#
# Print help for getActivationUser operation
#
##############################################################################
print_getActivationUser_help() {
    echo ""
    echo -e "${BOLD}${WHITE}getActivationUser - Returns the requested user${OFF}${BLUE}(AUTH - OAuth2)${OFF}${BLUE}(AUTH - QUERY)${OFF}" | paste -sd' ' | fold -sw 80 | sed '2,$s/^/    /'
    echo -e ""
    echo -e "You must have access to the requested activation and user; otherwise a 401 is returned. The user is requested in the scope of an activation, then it must be the owner or the host of an activation the API user can manage (or) Users created by API user (or) Users who belong to your company or its branches." | paste -sd' ' | fold -sw 80
    echo -e ""
    echo -e "${BOLD}${WHITE}Parameters${OFF}"
    echo -e "  * ${GREEN}activation_id${OFF} ${BLUE}[integer]${OFF} ${RED}(required)${OFF} ${CYAN}(default: null)${OFF} - Enlighten ID of the activation(system). System-generated. ${YELLOW}Specify as: activation_id=value${OFF}" | paste -sd' ' | fold -sw 80 | sed '2,$s/^/    /'
    echo -e "  * ${GREEN}user_id${OFF} ${BLUE}[integer]${OFF} ${RED}(required)${OFF} ${CYAN}(default: null)${OFF} - Enlighten ID of the user. System-generated. ${YELLOW}Specify as: user_id=value${OFF}" | paste -sd' ' | fold -sw 80 | sed '2,$s/^/    /'
    echo -e "  * ${GREEN}expand${OFF} ${BLUE}[UserExpandEnum]${OFF} ${CYAN}(default: null)${OFF} - Passing expand params in the url with valid option, then the response will contain company object fields. Otherwise the company information not include in the response.${YELLOW} Specify as: expand=value${OFF}" \
        | paste -sd' ' | fold -sw 80 | sed '2,$s/^/    /'
    echo ""
    echo -e "${BOLD}${WHITE}Responses${OFF}"
    code=200
    echo -e "${result_color_table[${code:0:1}]}  200;OK${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=401
    echo -e "${result_color_table[${code:0:1}]}  401;Unauthorized${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=404
    echo -e "${result_color_table[${code:0:1}]}  404;Not Found${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=422
    echo -e "${result_color_table[${code:0:1}]}  422;Unprocessable entity. The body contains error information in a hash of errorMessages and an optional errorCode.${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=429
    echo -e "${result_color_table[${code:0:1}]}  429;Too Many Requests${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
}
##############################################################################
#
# Print help for getSelfUser operation
#
##############################################################################
print_getSelfUser_help() {
    echo ""
    echo -e "${BOLD}${WHITE}getSelfUser - Return the current logged in user detail${OFF}${BLUE}(AUTH - OAuth2)${OFF}${BLUE}(AUTH - QUERY)${OFF}" | paste -sd' ' | fold -sw 80 | sed '2,$s/^/    /'
    echo -e ""
    echo -e "Return the current logged in user detail. Company details are provided in the response only if 'expand' parameter is passed in the URL with value as company. Otherwise, company information will not be provided in the response." | paste -sd' ' | fold -sw 80
    echo -e ""
    echo -e "${BOLD}${WHITE}Parameters${OFF}"
    echo -e "  * ${GREEN}expand${OFF} ${BLUE}[UserExpandEnum]${OFF} ${CYAN}(default: null)${OFF} - Passing expand params in the url with valid option, then the response will contain company object fields. Otherwise the company information will not be provided in the response.${YELLOW} Specify as: expand=value${OFF}" \
        | paste -sd' ' | fold -sw 80 | sed '2,$s/^/    /'
    echo ""
    echo -e "${BOLD}${WHITE}Responses${OFF}"
    code=200
    echo -e "${result_color_table[${code:0:1}]}  200;OK${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=401
    echo -e "${result_color_table[${code:0:1}]}  401;Unauthorized${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=404
    echo -e "${result_color_table[${code:0:1}]}  404;Not Found${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=405
    echo -e "${result_color_table[${code:0:1}]}  405;Method Not Allowed${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=422
    echo -e "${result_color_table[${code:0:1}]}  422;Unprocessable entity. The body contains error information in a hash of errorMessages and an optional errorCode.${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=429
    echo -e "${result_color_table[${code:0:1}]}  429;Too Many Requests${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=501
    echo -e "${result_color_table[${code:0:1}]}  501;Not Implemented${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
}
##############################################################################
#
# Print help for getUser operation
#
##############################################################################
print_getUser_help() {
    echo ""
    echo -e "${BOLD}${WHITE}getUser - Returns the requested user${OFF}${BLUE}(AUTH - OAuth2)${OFF}${BLUE}(AUTH - QUERY)${OFF}" | paste -sd' ' | fold -sw 80 | sed '2,$s/^/    /'
    echo -e ""
    echo -e "You must have permission to view the user. You can view yourself, users you created, and users who belong to your company or its branches. In all other cases, a 401 is returned. Company details are provided in the response only if 'expand' parameter is passed in the URL with value as company. Otherwise, company information will not be provided in the response." | paste -sd' ' | fold -sw 80
    echo -e ""
    echo -e "${BOLD}${WHITE}Parameters${OFF}"
    echo -e "  * ${GREEN}user_id${OFF} ${BLUE}[integer]${OFF} ${RED}(required)${OFF} ${CYAN}(default: null)${OFF} - User ID. ${YELLOW}Specify as: user_id=value${OFF}" | paste -sd' ' | fold -sw 80 | sed '2,$s/^/    /'
    echo -e "  * ${GREEN}expand${OFF} ${BLUE}[UserExpandEnum]${OFF} ${CYAN}(default: null)${OFF} - Passing expand params in the url with valid option, then the response will contain company object fields. Otherwise the company information will not be provided in the response.${YELLOW} Specify as: expand=value${OFF}" \
        | paste -sd' ' | fold -sw 80 | sed '2,$s/^/    /'
    echo ""
    echo -e "${BOLD}${WHITE}Responses${OFF}"
    code=200
    echo -e "${result_color_table[${code:0:1}]}  200;OK${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=401
    echo -e "${result_color_table[${code:0:1}]}  401;Unauthorized${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=404
    echo -e "${result_color_table[${code:0:1}]}  404;Not Found${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=405
    echo -e "${result_color_table[${code:0:1}]}  405;Method Not Allowed${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=422
    echo -e "${result_color_table[${code:0:1}]}  422;Unprocessable entity. The body contains error information in a hash of errorMessages and an optional errorCode.${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=429
    echo -e "${result_color_table[${code:0:1}]}  429;Too Many Requests${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=501
    echo -e "${result_color_table[${code:0:1}]}  501;Not Implemented${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
}
##############################################################################
#
# Print help for searchUsers operation
#
##############################################################################
print_searchUsers_help() {
    echo ""
    echo -e "${BOLD}${WHITE}searchUsers - Search user${OFF}${BLUE}(AUTH - OAuth2)${OFF}${BLUE}(AUTH - QUERY)${OFF}" | paste -sd' ' | fold -sw 80 | sed '2,$s/^/    /'
    echo -e ""
    echo -e "Returns the user ID for the given email ID only if the user exists." | paste -sd' ' | fold -sw 80
    echo -e ""
    echo -e "${BOLD}${WHITE}Parameters${OFF}"
    echo -e "  * ${GREEN}email${OFF} ${BLUE}[string]${OFF} ${CYAN}(default: null)${OFF} - Email address of the user.${YELLOW} Specify as: email=value${OFF}" \
        | paste -sd' ' | fold -sw 80 | sed '2,$s/^/    /'
    echo ""
    echo -e "${BOLD}${WHITE}Responses${OFF}"
    code=200
    echo -e "${result_color_table[${code:0:1}]}  200;OK${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=401
    echo -e "${result_color_table[${code:0:1}]}  401;Unauthorized${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=404
    echo -e "${result_color_table[${code:0:1}]}  404;Not Found${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=405
    echo -e "${result_color_table[${code:0:1}]}  405;Method Not Allowed${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=422
    echo -e "${result_color_table[${code:0:1}]}  422;Unprocessable entity. The body contains error information in a hash of errorMessages and an optional errorCode.${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=429
    echo -e "${result_color_table[${code:0:1}]}  429;Too Many Requests${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=501
    echo -e "${result_color_table[${code:0:1}]}  501;Not Implemented${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
}
##############################################################################
#
# Print help for updateActivationUser operation
#
##############################################################################
print_updateActivationUser_help() {
    echo ""
    echo -e "${BOLD}${WHITE}updateActivationUser - Update user${OFF}${BLUE}(AUTH - OAuth2)${OFF}${BLUE}(AUTH - QUERY)${OFF}" | paste -sd' ' | fold -sw 80 | sed '2,$s/^/    /'
    echo -e ""
    echo -e "You must have access to the requested activation and user; otherwise a 401 is returned. The user is requested in the scope of an activation, then it must be the owner or the host of an activation the API user can manage (or) Users created by API user (or) Users who belong to your company or its branches. When 'company_id' is passed in the body param or the user company_id is already defined, we will not consider the 'enlighten_view' field value and the user will become an enlighten manager. You may change a user's company if you have access to the user, the old company, and the new company." | paste -sd' ' | fold -sw 80
    echo -e ""
    echo -e "${BOLD}${WHITE}Parameters${OFF}"
    echo -e "  * ${GREEN}activation_id${OFF} ${BLUE}[integer]${OFF} ${RED}(required)${OFF} ${CYAN}(default: null)${OFF} - Enlighten ID of the activation(system). System-generated. ${YELLOW}Specify as: activation_id=value${OFF}" | paste -sd' ' | fold -sw 80 | sed '2,$s/^/    /'
    echo -e "  * ${GREEN}user_id${OFF} ${BLUE}[integer]${OFF} ${RED}(required)${OFF} ${CYAN}(default: null)${OFF} - Enlighten ID of the user. System-generated. ${YELLOW}Specify as: user_id=value${OFF}" | paste -sd' ' | fold -sw 80 | sed '2,$s/^/    /'
    echo -e "  * ${GREEN}body${OFF} ${BLUE}[application/json]${OFF}${OFF} - " | paste -sd' ' | fold -sw 80 | sed '2,$s/^/    /'
    echo -e ""
    echo ""
    echo -e "${BOLD}${WHITE}Responses${OFF}"
    code=200
    echo -e "${result_color_table[${code:0:1}]}  200;OK${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=401
    echo -e "${result_color_table[${code:0:1}]}  401;Unauthorized${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=404
    echo -e "${result_color_table[${code:0:1}]}  404;Not Found${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=405
    echo -e "${result_color_table[${code:0:1}]}  405;Method Not Allowed${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=422
    echo -e "${result_color_table[${code:0:1}]}  422;Unprocessable entity. The body contains error information in a hash of errorMessages and an optional errorCode.${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=429
    echo -e "${result_color_table[${code:0:1}]}  429;Too Many Requests${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=501
    echo -e "${result_color_table[${code:0:1}]}  501;Not Implemented${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
}
##############################################################################
#
# Print help for updateUser operation
#
##############################################################################
print_updateUser_help() {
    echo ""
    echo -e "${BOLD}${WHITE}updateUser - Update user${OFF}${BLUE}(AUTH - OAuth2)${OFF}${BLUE}(AUTH - QUERY)${OFF}" | paste -sd' ' | fold -sw 80 | sed '2,$s/^/    /'
    echo -e ""
    echo -e "You must have permission to view the user. You can view yourself, users you created, and users who belong to your company or its branches. In all other cases, a 401 is returned. 'company_id' is an optional field. When you passing a 'company_id', the user become an enlighten manager and we will not consider 'enlighten_view' field value. You may change a user's company if you have access to the user, the old company, and the new company." | paste -sd' ' | fold -sw 80
    echo -e ""
    echo -e "${BOLD}${WHITE}Parameters${OFF}"
    echo -e "  * ${GREEN}user_id${OFF} ${BLUE}[integer]${OFF} ${RED}(required)${OFF} ${CYAN}(default: null)${OFF} - User ID. ${YELLOW}Specify as: user_id=value${OFF}" | paste -sd' ' | fold -sw 80 | sed '2,$s/^/    /'
    echo -e "  * ${GREEN}body${OFF} ${BLUE}[application/json]${OFF}${OFF} - " | paste -sd' ' | fold -sw 80 | sed '2,$s/^/    /'
    echo -e ""
    echo ""
    echo -e "${BOLD}${WHITE}Responses${OFF}"
    code=200
    echo -e "${result_color_table[${code:0:1}]}  200;OK${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=401
    echo -e "${result_color_table[${code:0:1}]}  401;Unauthorized${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=404
    echo -e "${result_color_table[${code:0:1}]}  404;Not Found${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=405
    echo -e "${result_color_table[${code:0:1}]}  405;Method Not Allowed${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=422
    echo -e "${result_color_table[${code:0:1}]}  422;Unprocessable entity. The body contains error information in a hash of errorMessages and an optional errorCode.${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=429
    echo -e "${result_color_table[${code:0:1}]}  429;Too Many Requests${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
    code=501
    echo -e "${result_color_table[${code:0:1}]}  501;Not Implemented${OFF}" | paste -sd' ' | column -t -s ';' | fold -sw 80 | sed '2,$s/^/       /'
}


##############################################################################
#
# Call createPartnerActivation operation
#
##############################################################################
call_createPartnerActivation() {
    # ignore error about 'path_parameter_names' being unused; passed by reference
    # shellcheck disable=SC2034
    local path_parameter_names=()
    # ignore error about 'query_parameter_names' being unused; passed by reference
    # shellcheck disable=SC2034
    local query_parameter_names=(   key )
    local path

    if ! path=$(build_request_path "/api/v4/partner/activations" path_parameter_names query_parameter_names); then
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
# Call deleteActivation operation
#
##############################################################################
call_deleteActivation() {
    # ignore error about 'path_parameter_names' being unused; passed by reference
    # shellcheck disable=SC2034
    local path_parameter_names=(id)
    # ignore error about 'query_parameter_names' being unused; passed by reference
    # shellcheck disable=SC2034
    local query_parameter_names=(   key )
    local path

    if ! path=$(build_request_path "/api/v4/activations/{id}" path_parameter_names query_parameter_names); then
        ERROR_MSG=$path
        exit 1
    fi
    local method="DELETE"
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
# Call getActivationOpsProductionMode operation
#
##############################################################################
call_getActivationOpsProductionMode() {
    # ignore error about 'path_parameter_names' being unused; passed by reference
    # shellcheck disable=SC2034
    local path_parameter_names=(activation_id)
    # ignore error about 'query_parameter_names' being unused; passed by reference
    # shellcheck disable=SC2034
    local query_parameter_names=(   key )
    local path

    if ! path=$(build_request_path "/api/v4/activations/{activation_id}/ops/production_mode" path_parameter_names query_parameter_names); then
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
# Call getPartnerActivation operation
#
##############################################################################
call_getPartnerActivation() {
    # ignore error about 'path_parameter_names' being unused; passed by reference
    # shellcheck disable=SC2034
    local path_parameter_names=(id)
    # ignore error about 'query_parameter_names' being unused; passed by reference
    # shellcheck disable=SC2034
    local query_parameter_names=(expand   key )
    local path

    if ! path=$(build_request_path "/api/v4/partner/activations/{id}" path_parameter_names query_parameter_names); then
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
# Call getPartnerActivations operation
#
##############################################################################
call_getPartnerActivations() {
    # ignore error about 'path_parameter_names' being unused; passed by reference
    # shellcheck disable=SC2034
    local path_parameter_names=()
    # ignore error about 'query_parameter_names' being unused; passed by reference
    # shellcheck disable=SC2034
    local query_parameter_names=(next limit stage reference installer_id system_name address region search   key )
    local path

    if ! path=$(build_request_path "/api/v4/partner/activations" path_parameter_names query_parameter_names); then
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
# Call grantActivationUserAccess operation
#
##############################################################################
call_grantActivationUserAccess() {
    # ignore error about 'path_parameter_names' being unused; passed by reference
    # shellcheck disable=SC2034
    local path_parameter_names=(activation_id user_id)
    # ignore error about 'query_parameter_names' being unused; passed by reference
    # shellcheck disable=SC2034
    local query_parameter_names=(   key )
    local path

    if ! path=$(build_request_path "/api/v4/activations/{activation_id}/users/{user_id}" path_parameter_names query_parameter_names); then
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
    if [[ "$print_curl" = true ]]; then
        echo "curl -d '' ${basic_auth_option} ${curl_arguments} ${headers_curl} -X ${method} \"${host}${path}\""
    else
        eval "curl -d '' ${basic_auth_option} ${curl_arguments} ${headers_curl} -X ${method} \"${host}${path}\""
    fi
}

##############################################################################
#
# Call revokeActivationUserAccess operation
#
##############################################################################
call_revokeActivationUserAccess() {
    # ignore error about 'path_parameter_names' being unused; passed by reference
    # shellcheck disable=SC2034
    local path_parameter_names=(activation_id user_id)
    # ignore error about 'query_parameter_names' being unused; passed by reference
    # shellcheck disable=SC2034
    local query_parameter_names=(   key )
    local path

    if ! path=$(build_request_path "/api/v4/activations/{activation_id}/users/{user_id}" path_parameter_names query_parameter_names); then
        ERROR_MSG=$path
        exit 1
    fi
    local method="DELETE"
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
# Call setActivationOpsProductionMode operation
#
##############################################################################
call_setActivationOpsProductionMode() {
    # ignore error about 'path_parameter_names' being unused; passed by reference
    # shellcheck disable=SC2034
    local path_parameter_names=(activation_id)
    # ignore error about 'query_parameter_names' being unused; passed by reference
    # shellcheck disable=SC2034
    local query_parameter_names=(   key )
    local path

    if ! path=$(build_request_path "/api/v4/activations/{activation_id}/ops/production_mode" path_parameter_names query_parameter_names); then
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
# Call updatePartnerActivation operation
#
##############################################################################
call_updatePartnerActivation() {
    # ignore error about 'path_parameter_names' being unused; passed by reference
    # shellcheck disable=SC2034
    local path_parameter_names=(id)
    # ignore error about 'query_parameter_names' being unused; passed by reference
    # shellcheck disable=SC2034
    local query_parameter_names=(   key )
    local path

    if ! path=$(build_request_path "/api/v4/partner/activations/{id}" path_parameter_names query_parameter_names); then
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
# Call deleteSystemArray operation
#
##############################################################################
call_deleteSystemArray() {
    # ignore error about 'path_parameter_names' being unused; passed by reference
    # shellcheck disable=SC2034
    local path_parameter_names=(system_id id)
    # ignore error about 'query_parameter_names' being unused; passed by reference
    # shellcheck disable=SC2034
    local query_parameter_names=(   key )
    local path

    if ! path=$(build_request_path "/api/v4/systems/{system_id}/arrays/{id}" path_parameter_names query_parameter_names); then
        ERROR_MSG=$path
        exit 1
    fi
    local method="DELETE"
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
# Call getSystemArray operation
#
##############################################################################
call_getSystemArray() {
    # ignore error about 'path_parameter_names' being unused; passed by reference
    # shellcheck disable=SC2034
    local path_parameter_names=(system_id id)
    # ignore error about 'query_parameter_names' being unused; passed by reference
    # shellcheck disable=SC2034
    local query_parameter_names=(   key )
    local path

    if ! path=$(build_request_path "/api/v4/systems/{system_id}/arrays/{id}" path_parameter_names query_parameter_names); then
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
# Call getSystemArrays operation
#
##############################################################################
call_getSystemArrays() {
    # ignore error about 'path_parameter_names' being unused; passed by reference
    # shellcheck disable=SC2034
    local path_parameter_names=(system_id)
    # ignore error about 'query_parameter_names' being unused; passed by reference
    # shellcheck disable=SC2034
    local query_parameter_names=(   key )
    local path

    if ! path=$(build_request_path "/api/v4/systems/{system_id}/arrays" path_parameter_names query_parameter_names); then
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
# Call updateSystemArray operation
#
##############################################################################
call_updateSystemArray() {
    # ignore error about 'path_parameter_names' being unused; passed by reference
    # shellcheck disable=SC2034
    local path_parameter_names=(system_id id)
    # ignore error about 'query_parameter_names' being unused; passed by reference
    # shellcheck disable=SC2034
    local query_parameter_names=(   key )
    local path

    if ! path=$(build_request_path "/api/v4/systems/{system_id}/arrays/{id}" path_parameter_names query_parameter_names); then
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
        header_content_type="application/text"
    fi


    if [[ -z $header_content_type && "$force" = false ]]; then
        :
        echo "ERROR: Request's content-type not specified!!!"
        echo "This operation expects content-type in one of the following formats:"
        echo -e "\\t- application/text"
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
# Call updateSystemArrays operation
#
##############################################################################
call_updateSystemArrays() {
    # ignore error about 'path_parameter_names' being unused; passed by reference
    # shellcheck disable=SC2034
    local path_parameter_names=(system_id)
    # ignore error about 'query_parameter_names' being unused; passed by reference
    # shellcheck disable=SC2034
    local query_parameter_names=(   key )
    local path

    if ! path=$(build_request_path "/api/v4/systems/{system_id}/arrays" path_parameter_names query_parameter_names); then
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
        header_content_type="application/text"
    fi


    if [[ -z $header_content_type && "$force" = false ]]; then
        :
        echo "ERROR: Request's content-type not specified!!!"
        echo "This operation expects content-type in one of the following formats:"
        echo -e "\\t- application/text"
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
# Call createCompanyUser operation
#
##############################################################################
call_createCompanyUser() {
    # ignore error about 'path_parameter_names' being unused; passed by reference
    # shellcheck disable=SC2034
    local path_parameter_names=(company_id)
    # ignore error about 'query_parameter_names' being unused; passed by reference
    # shellcheck disable=SC2034
    local query_parameter_names=(   key )
    local path

    if ! path=$(build_request_path "/api/v4/companies/{company_id}/users" path_parameter_names query_parameter_names); then
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
# Call getCompanyUser operation
#
##############################################################################
call_getCompanyUser() {
    # ignore error about 'path_parameter_names' being unused; passed by reference
    # shellcheck disable=SC2034
    local path_parameter_names=(company_id user_id)
    # ignore error about 'query_parameter_names' being unused; passed by reference
    # shellcheck disable=SC2034
    local query_parameter_names=(expand   key )
    local path

    if ! path=$(build_request_path "/api/v4/companies/{company_id}/users/{user_id}" path_parameter_names query_parameter_names); then
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
# Call getCompanyUsers operation
#
##############################################################################
call_getCompanyUsers() {
    # ignore error about 'path_parameter_names' being unused; passed by reference
    # shellcheck disable=SC2034
    local path_parameter_names=(company_id)
    # ignore error about 'query_parameter_names' being unused; passed by reference
    # shellcheck disable=SC2034
    local query_parameter_names=(   key )
    local path

    if ! path=$(build_request_path "/api/v4/companies/{company_id}/users" path_parameter_names query_parameter_names); then
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
# Call getSelfCompanyBranches operation
#
##############################################################################
call_getSelfCompanyBranches() {
    # ignore error about 'path_parameter_names' being unused; passed by reference
    # shellcheck disable=SC2034
    local path_parameter_names=()
    # ignore error about 'query_parameter_names' being unused; passed by reference
    # shellcheck disable=SC2034
    local query_parameter_names=(   key )
    local path

    if ! path=$(build_request_path "/api/v4/companies/self/branches" path_parameter_names query_parameter_names); then
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
# Call updateCompanyUser operation
#
##############################################################################
call_updateCompanyUser() {
    # ignore error about 'path_parameter_names' being unused; passed by reference
    # shellcheck disable=SC2034
    local path_parameter_names=(company_id user_id)
    # ignore error about 'query_parameter_names' being unused; passed by reference
    # shellcheck disable=SC2034
    local query_parameter_names=(   key )
    local path

    if ! path=$(build_request_path "/api/v4/companies/{company_id}/users/{user_id}" path_parameter_names query_parameter_names); then
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
# Call getActivationEstimate operation
#
##############################################################################
call_getActivationEstimate() {
    # ignore error about 'path_parameter_names' being unused; passed by reference
    # shellcheck disable=SC2034
    local path_parameter_names=(activation_id)
    # ignore error about 'query_parameter_names' being unused; passed by reference
    # shellcheck disable=SC2034
    local query_parameter_names=(   key )
    local path

    if ! path=$(build_request_path "/api/v4/activations/{activation_id}/estimate" path_parameter_names query_parameter_names); then
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
# Call updateActivationEstimate operation
#
##############################################################################
call_updateActivationEstimate() {
    # ignore error about 'path_parameter_names' being unused; passed by reference
    # shellcheck disable=SC2034
    local path_parameter_names=(activation_id)
    # ignore error about 'query_parameter_names' being unused; passed by reference
    # shellcheck disable=SC2034
    local query_parameter_names=(   key )
    local path

    if ! path=$(build_request_path "/api/v4/activations/{activation_id}/estimate" path_parameter_names query_parameter_names); then
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
# Call getGridProfiles operation
#
##############################################################################
call_getGridProfiles() {
    # ignore error about 'path_parameter_names' being unused; passed by reference
    # shellcheck disable=SC2034
    local path_parameter_names=()
    # ignore error about 'query_parameter_names' being unused; passed by reference
    # shellcheck disable=SC2034
    local query_parameter_names=(   key )
    local path

    if ! path=$(build_request_path "/api/v4/grid_profiles" path_parameter_names query_parameter_names); then
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
# Call createUser operation
#
##############################################################################
call_createUser() {
    # ignore error about 'path_parameter_names' being unused; passed by reference
    # shellcheck disable=SC2034
    local path_parameter_names=()
    # ignore error about 'query_parameter_names' being unused; passed by reference
    # shellcheck disable=SC2034
    local query_parameter_names=(   key )
    local path

    if ! path=$(build_request_path "/api/v4/users" path_parameter_names query_parameter_names); then
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
# Call getSystemMeter operation
#
##############################################################################
call_getSystemMeter() {
    # ignore error about 'path_parameter_names' being unused; passed by reference
    # shellcheck disable=SC2034
    local path_parameter_names=(system_id serial_number)
    # ignore error about 'query_parameter_names' being unused; passed by reference
    # shellcheck disable=SC2034
    local query_parameter_names=(   key )
    local path

    if ! path=$(build_request_path "/api/v4/systems/{system_id}/meters/{serial_number}" path_parameter_names query_parameter_names); then
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
# Call setActivationMeterStatus operation
#
##############################################################################
call_setActivationMeterStatus() {
    # ignore error about 'path_parameter_names' being unused; passed by reference
    # shellcheck disable=SC2034
    local path_parameter_names=(activation_id serial_number)
    # ignore error about 'query_parameter_names' being unused; passed by reference
    # shellcheck disable=SC2034
    local query_parameter_names=(   key )
    local path

    if ! path=$(build_request_path "/api/v4/activations/{activation_id}/meters/{serial_number}/meter_control" path_parameter_names query_parameter_names); then
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
# Call updateSystemMeter operation
#
##############################################################################
call_updateSystemMeter() {
    # ignore error about 'path_parameter_names' being unused; passed by reference
    # shellcheck disable=SC2034
    local path_parameter_names=(system_id serial_number)
    # ignore error about 'query_parameter_names' being unused; passed by reference
    # shellcheck disable=SC2034
    local query_parameter_names=(operational_date   key )
    local path

    if ! path=$(build_request_path "/api/v4/systems/{system_id}/meters/{serial_number}" path_parameter_names query_parameter_names); then
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
    if [[ "$print_curl" = true ]]; then
        echo "curl -d '' ${basic_auth_option} ${curl_arguments} ${headers_curl} -X ${method} \"${host}${path}\""
    else
        eval "curl -d '' ${basic_auth_option} ${curl_arguments} ${headers_curl} -X ${method} \"${host}${path}\""
    fi
}

##############################################################################
#
# Call getPvManufacturers operation
#
##############################################################################
call_getPvManufacturers() {
    # ignore error about 'path_parameter_names' being unused; passed by reference
    # shellcheck disable=SC2034
    local path_parameter_names=()
    # ignore error about 'query_parameter_names' being unused; passed by reference
    # shellcheck disable=SC2034
    local query_parameter_names=(   key )
    local path

    if ! path=$(build_request_path "/api/v4/pv_manufacturers" path_parameter_names query_parameter_names); then
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
# Call getPvManufacturerModels operation
#
##############################################################################
call_getPvManufacturerModels() {
    # ignore error about 'path_parameter_names' being unused; passed by reference
    # shellcheck disable=SC2034
    local path_parameter_names=(pv_manufacturer_id)
    # ignore error about 'query_parameter_names' being unused; passed by reference
    # shellcheck disable=SC2034
    local query_parameter_names=(   key )
    local path

    if ! path=$(build_request_path "/api/v4/pv_manufacturers/{pv_manufacturer_id}/pv_models" path_parameter_names query_parameter_names); then
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
# Call getSystemTariffSettings operation
#
##############################################################################
call_getSystemTariffSettings() {
    # ignore error about 'path_parameter_names' being unused; passed by reference
    # shellcheck disable=SC2034
    local path_parameter_names=(system_id)
    # ignore error about 'query_parameter_names' being unused; passed by reference
    # shellcheck disable=SC2034
    local query_parameter_names=(   key )
    local path

    if ! path=$(build_request_path "/api/v4/systems/config/{system_id}/tariff" path_parameter_names query_parameter_names); then
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
# Call updateSystemTariffSettings operation
#
##############################################################################
call_updateSystemTariffSettings() {
    # ignore error about 'path_parameter_names' being unused; passed by reference
    # shellcheck disable=SC2034
    local path_parameter_names=(system_id)
    # ignore error about 'query_parameter_names' being unused; passed by reference
    # shellcheck disable=SC2034
    local query_parameter_names=(   key )
    local path

    if ! path=$(build_request_path "/api/v4/systems/config/{system_id}/tariff" path_parameter_names query_parameter_names); then
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
        header_content_type="application/text"
    fi


    if [[ -z $header_content_type && "$force" = false ]]; then
        :
        echo "ERROR: Request's content-type not specified!!!"
        echo "This operation expects content-type in one of the following formats:"
        echo -e "\\t- application/text"
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
# Call getActivationUser operation
#
##############################################################################
call_getActivationUser() {
    # ignore error about 'path_parameter_names' being unused; passed by reference
    # shellcheck disable=SC2034
    local path_parameter_names=(activation_id user_id)
    # ignore error about 'query_parameter_names' being unused; passed by reference
    # shellcheck disable=SC2034
    local query_parameter_names=(expand   key )
    local path

    if ! path=$(build_request_path "/api/v4/activations/{activation_id}/users/{user_id}" path_parameter_names query_parameter_names); then
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
# Call getSelfUser operation
#
##############################################################################
call_getSelfUser() {
    # ignore error about 'path_parameter_names' being unused; passed by reference
    # shellcheck disable=SC2034
    local path_parameter_names=()
    # ignore error about 'query_parameter_names' being unused; passed by reference
    # shellcheck disable=SC2034
    local query_parameter_names=(expand   key )
    local path

    if ! path=$(build_request_path "/api/v4/users/self" path_parameter_names query_parameter_names); then
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
# Call getUser operation
#
##############################################################################
call_getUser() {
    # ignore error about 'path_parameter_names' being unused; passed by reference
    # shellcheck disable=SC2034
    local path_parameter_names=(user_id)
    # ignore error about 'query_parameter_names' being unused; passed by reference
    # shellcheck disable=SC2034
    local query_parameter_names=(expand   key )
    local path

    if ! path=$(build_request_path "/api/v4/users/{user_id}" path_parameter_names query_parameter_names); then
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
# Call searchUsers operation
#
##############################################################################
call_searchUsers() {
    # ignore error about 'path_parameter_names' being unused; passed by reference
    # shellcheck disable=SC2034
    local path_parameter_names=()
    # ignore error about 'query_parameter_names' being unused; passed by reference
    # shellcheck disable=SC2034
    local query_parameter_names=(email   key )
    local path

    if ! path=$(build_request_path "/api/v4/users/search" path_parameter_names query_parameter_names); then
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
# Call updateActivationUser operation
#
##############################################################################
call_updateActivationUser() {
    # ignore error about 'path_parameter_names' being unused; passed by reference
    # shellcheck disable=SC2034
    local path_parameter_names=(activation_id user_id)
    # ignore error about 'query_parameter_names' being unused; passed by reference
    # shellcheck disable=SC2034
    local query_parameter_names=(   key )
    local path

    if ! path=$(build_request_path "/api/v4/activations/{activation_id}/users/{user_id}" path_parameter_names query_parameter_names); then
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
# Call updateUser operation
#
##############################################################################
call_updateUser() {
    # ignore error about 'path_parameter_names' being unused; passed by reference
    # shellcheck disable=SC2034
    local path_parameter_names=(user_id)
    # ignore error about 'query_parameter_names' being unused; passed by reference
    # shellcheck disable=SC2034
    local query_parameter_names=(   key )
    local path

    if ! path=$(build_request_path "/api/v4/users/{user_id}" path_parameter_names query_parameter_names); then
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
    createPartnerActivation)
    operation="createPartnerActivation"
    ;;
    deleteActivation)
    operation="deleteActivation"
    ;;
    getActivationOpsProductionMode)
    operation="getActivationOpsProductionMode"
    ;;
    getPartnerActivation)
    operation="getPartnerActivation"
    ;;
    getPartnerActivations)
    operation="getPartnerActivations"
    ;;
    grantActivationUserAccess)
    operation="grantActivationUserAccess"
    ;;
    revokeActivationUserAccess)
    operation="revokeActivationUserAccess"
    ;;
    setActivationOpsProductionMode)
    operation="setActivationOpsProductionMode"
    ;;
    updatePartnerActivation)
    operation="updatePartnerActivation"
    ;;
    deleteSystemArray)
    operation="deleteSystemArray"
    ;;
    getSystemArray)
    operation="getSystemArray"
    ;;
    getSystemArrays)
    operation="getSystemArrays"
    ;;
    updateSystemArray)
    operation="updateSystemArray"
    ;;
    updateSystemArrays)
    operation="updateSystemArrays"
    ;;
    createCompanyUser)
    operation="createCompanyUser"
    ;;
    getCompanyUser)
    operation="getCompanyUser"
    ;;
    getCompanyUsers)
    operation="getCompanyUsers"
    ;;
    getSelfCompanyBranches)
    operation="getSelfCompanyBranches"
    ;;
    updateCompanyUser)
    operation="updateCompanyUser"
    ;;
    getActivationEstimate)
    operation="getActivationEstimate"
    ;;
    updateActivationEstimate)
    operation="updateActivationEstimate"
    ;;
    getGridProfiles)
    operation="getGridProfiles"
    ;;
    createUser)
    operation="createUser"
    ;;
    getSystemMeter)
    operation="getSystemMeter"
    ;;
    setActivationMeterStatus)
    operation="setActivationMeterStatus"
    ;;
    updateSystemMeter)
    operation="updateSystemMeter"
    ;;
    getPvManufacturers)
    operation="getPvManufacturers"
    ;;
    getPvManufacturerModels)
    operation="getPvManufacturerModels"
    ;;
    getSystemTariffSettings)
    operation="getSystemTariffSettings"
    ;;
    updateSystemTariffSettings)
    operation="updateSystemTariffSettings"
    ;;
    getActivationUser)
    operation="getActivationUser"
    ;;
    getSelfUser)
    operation="getSelfUser"
    ;;
    getUser)
    operation="getUser"
    ;;
    searchUsers)
    operation="searchUsers"
    ;;
    updateActivationUser)
    operation="updateActivationUser"
    ;;
    updateUser)
    operation="updateUser"
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
    createPartnerActivation)
    call_createPartnerActivation
    ;;
    deleteActivation)
    call_deleteActivation
    ;;
    getActivationOpsProductionMode)
    call_getActivationOpsProductionMode
    ;;
    getPartnerActivation)
    call_getPartnerActivation
    ;;
    getPartnerActivations)
    call_getPartnerActivations
    ;;
    grantActivationUserAccess)
    call_grantActivationUserAccess
    ;;
    revokeActivationUserAccess)
    call_revokeActivationUserAccess
    ;;
    setActivationOpsProductionMode)
    call_setActivationOpsProductionMode
    ;;
    updatePartnerActivation)
    call_updatePartnerActivation
    ;;
    deleteSystemArray)
    call_deleteSystemArray
    ;;
    getSystemArray)
    call_getSystemArray
    ;;
    getSystemArrays)
    call_getSystemArrays
    ;;
    updateSystemArray)
    call_updateSystemArray
    ;;
    updateSystemArrays)
    call_updateSystemArrays
    ;;
    createCompanyUser)
    call_createCompanyUser
    ;;
    getCompanyUser)
    call_getCompanyUser
    ;;
    getCompanyUsers)
    call_getCompanyUsers
    ;;
    getSelfCompanyBranches)
    call_getSelfCompanyBranches
    ;;
    updateCompanyUser)
    call_updateCompanyUser
    ;;
    getActivationEstimate)
    call_getActivationEstimate
    ;;
    updateActivationEstimate)
    call_updateActivationEstimate
    ;;
    getGridProfiles)
    call_getGridProfiles
    ;;
    createUser)
    call_createUser
    ;;
    getSystemMeter)
    call_getSystemMeter
    ;;
    setActivationMeterStatus)
    call_setActivationMeterStatus
    ;;
    updateSystemMeter)
    call_updateSystemMeter
    ;;
    getPvManufacturers)
    call_getPvManufacturers
    ;;
    getPvManufacturerModels)
    call_getPvManufacturerModels
    ;;
    getSystemTariffSettings)
    call_getSystemTariffSettings
    ;;
    updateSystemTariffSettings)
    call_updateSystemTariffSettings
    ;;
    getActivationUser)
    call_getActivationUser
    ;;
    getSelfUser)
    call_getSelfUser
    ;;
    getUser)
    call_getUser
    ;;
    searchUsers)
    call_searchUsers
    ;;
    updateActivationUser)
    call_updateActivationUser
    ;;
    updateUser)
    call_updateUser
    ;;
    *)
    ERROR_MSG="ERROR: Unknown operation: $operation"
    exit 1
esac

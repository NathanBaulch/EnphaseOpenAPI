# do not import all endpoints into this module because that uses a lot of memory and stack frames
# if you need the ability to import all endpoints from this module, import them with
# from monitoring.apis.path_to_api import path_to_api

import enum


class PathValues(str, enum.Enum):
    SYSTEMS = "/systems"
    SYSTEMS_SEARCH = "/systems/search"
    SYSTEMS_SYSTEM_ID = "/systems/{system_id}"
    SYSTEMS_SYSTEM_ID_SUMMARY = "/systems/{system_id}/summary"
    SYSTEMS_SYSTEM_ID_DEVICES = "/systems/{system_id}/devices"
    SYSTEMS_RETRIEVE_SYSTEM_ID = "/systems/retrieve_system_id"
    SYSTEMS_SYSTEM_ID_PRODUCTION_METER_READINGS = "/systems/{system_id}/production_meter_readings"
    SYSTEMS_SYSTEM_ID_RGM_STATS = "/systems/{system_id}/rgm_stats"
    SYSTEMS_SYSTEM_ID_CONSUMPTION_LIFETIME = "/systems/{system_id}/consumption_lifetime"
    SYSTEMS_SYSTEM_ID_ENERGY_LIFETIME = "/systems/{system_id}/energy_lifetime"
    SYSTEMS_SYSTEM_ID_BATTERY_LIFETIME = "/systems/{system_id}/battery_lifetime"
    SYSTEMS_SYSTEM_ID_ENERGY_IMPORT_LIFETIME = "/systems/{system_id}/energy_import_lifetime"
    SYSTEMS_SYSTEM_ID_ENERGY_EXPORT_LIFETIME = "/systems/{system_id}/energy_export_lifetime"
    SYSTEMS_INVERTERS_SUMMARY_BY_ENVOY_OR_SITE = "/systems/inverters_summary_by_envoy_or_site"
    SYSTEMS_SYSTEM_ID_TELEMETRY_PRODUCTION_MICRO = "/systems/{system_id}/telemetry/production_micro"
    SYSTEMS_SYSTEM_ID_TELEMETRY_PRODUCTION_METER = "/systems/{system_id}/telemetry/production_meter"
    SYSTEMS_SYSTEM_ID_TELEMETRY_BATTERY = "/systems/{system_id}/telemetry/battery"
    SYSTEMS_SYSTEM_ID_TELEMETRY_CONSUMPTION_METER = "/systems/{system_id}/telemetry/consumption_meter"
    SYSTEMS_SYSTEM_ID_DEVICES_MICROS_SERIAL_NO_TELEMETRY = "/systems/{system_id}/devices/micros/{serial_no}/telemetry"
    SYSTEMS_SYSTEM_ID_DEVICES_ACBS_SERIAL_NO_TELEMETRY = "/systems/{system_id}/devices/acbs/{serial_no}/telemetry"
    SYSTEMS_SYSTEM_ID_DEVICES_ENCHARGES_SERIAL_NO_TELEMETRY = "/systems/{system_id}/devices/encharges/{serial_no}/telemetry"
    SYSTEMS_CONFIG_SYSTEM_ID_BATTERY_SETTINGS = "/systems/config/{system_id}/battery_settings"
    SYSTEMS_CONFIG_SYSTEM_ID_STORM_GUARD = "/systems/config/{system_id}/storm_guard"
    SYSTEMS_CONFIG_SYSTEM_ID_GRID_STATUS = "/systems/config/{system_id}/grid_status"
    SYSTEMS_CONFIG_SYSTEM_ID_LOAD_CONTROL = "/systems/config/{system_id}/load_control"
    SYSTEMS_SYSTEM_ID_ENERGY_IMPORT_TELEMETRY = "/systems/{system_id}/energy_import_telemetry"
    SYSTEMS_SYSTEM_ID_ENERGY_EXPORT_TELEMETRY = "/systems/{system_id}/energy_export_telemetry"

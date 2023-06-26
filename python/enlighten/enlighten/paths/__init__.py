# do not import all endpoints into this module because that uses a lot of memory and stack frames
# if you need the ability to import all endpoints from this module, import them with
# from enlighten.apis.path_to_api import path_to_api

import enum


class PathValues(str, enum.Enum):
    SYSTEMS_SYSTEM_ID_ENERGY_LIFETIME = "/systems/{system_id}/energy_lifetime"
    SYSTEMS_SYSTEM_ID_ENVOYS = "/systems/{system_id}/envoys"
    SYSTEMS = "/systems"
    SYSTEMS_SYSTEM_ID_INVENTORY = "/systems/{system_id}/inventory"
    SYSTEMS_INVERTERS_SUMMARY_BY_ENVOY_OR_SITE = "/systems/inverters_summary_by_envoy_or_site"
    SYSTEMS_SYSTEM_ID_MONTHLY_PRODUCTION = "/systems/{system_id}/monthly_production"
    SYSTEMS_SYSTEM_ID_PRODUCTION_METER_READINGS = "/systems/{system_id}/production_meter_readings"
    SYSTEMS_SYSTEM_ID_RGM_STATS = "/systems/{system_id}/rgm_stats"
    SYSTEMS_SYSTEM_ID_STATS = "/systems/{system_id}/stats"
    SYSTEMS_SYSTEM_ID_CONSUMPTION_LIFETIME = "/systems/{system_id}/consumption_lifetime"
    SYSTEMS_SYSTEM_ID_CONSUMPTION_STATS = "/systems/{system_id}/consumption_stats"
    SYSTEMS_SYSTEM_ID_SUMMARY = "/systems/{system_id}/summary"
    SYSTEMS_SEARCH_SYSTEM_ID = "/systems/search_system_id"

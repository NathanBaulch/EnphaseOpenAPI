import typing_extensions

from enlighten.paths import PathValues
from enlighten.apis.paths.systems_system_id_energy_lifetime import SystemsSystemIdEnergyLifetime
from enlighten.apis.paths.systems_system_id_envoys import SystemsSystemIdEnvoys
from enlighten.apis.paths.systems import Systems
from enlighten.apis.paths.systems_system_id_inventory import SystemsSystemIdInventory
from enlighten.apis.paths.systems_inverters_summary_by_envoy_or_site import SystemsInvertersSummaryByEnvoyOrSite
from enlighten.apis.paths.systems_system_id_monthly_production import SystemsSystemIdMonthlyProduction
from enlighten.apis.paths.systems_system_id_production_meter_readings import SystemsSystemIdProductionMeterReadings
from enlighten.apis.paths.systems_system_id_rgm_stats import SystemsSystemIdRgmStats
from enlighten.apis.paths.systems_system_id_stats import SystemsSystemIdStats
from enlighten.apis.paths.systems_system_id_consumption_lifetime import SystemsSystemIdConsumptionLifetime
from enlighten.apis.paths.systems_system_id_consumption_stats import SystemsSystemIdConsumptionStats
from enlighten.apis.paths.systems_system_id_summary import SystemsSystemIdSummary
from enlighten.apis.paths.systems_search_system_id import SystemsSearchSystemId

PathToApi = typing_extensions.TypedDict(
    'PathToApi',
    {
        PathValues.SYSTEMS_SYSTEM_ID_ENERGY_LIFETIME: SystemsSystemIdEnergyLifetime,
        PathValues.SYSTEMS_SYSTEM_ID_ENVOYS: SystemsSystemIdEnvoys,
        PathValues.SYSTEMS: Systems,
        PathValues.SYSTEMS_SYSTEM_ID_INVENTORY: SystemsSystemIdInventory,
        PathValues.SYSTEMS_INVERTERS_SUMMARY_BY_ENVOY_OR_SITE: SystemsInvertersSummaryByEnvoyOrSite,
        PathValues.SYSTEMS_SYSTEM_ID_MONTHLY_PRODUCTION: SystemsSystemIdMonthlyProduction,
        PathValues.SYSTEMS_SYSTEM_ID_PRODUCTION_METER_READINGS: SystemsSystemIdProductionMeterReadings,
        PathValues.SYSTEMS_SYSTEM_ID_RGM_STATS: SystemsSystemIdRgmStats,
        PathValues.SYSTEMS_SYSTEM_ID_STATS: SystemsSystemIdStats,
        PathValues.SYSTEMS_SYSTEM_ID_CONSUMPTION_LIFETIME: SystemsSystemIdConsumptionLifetime,
        PathValues.SYSTEMS_SYSTEM_ID_CONSUMPTION_STATS: SystemsSystemIdConsumptionStats,
        PathValues.SYSTEMS_SYSTEM_ID_SUMMARY: SystemsSystemIdSummary,
        PathValues.SYSTEMS_SEARCH_SYSTEM_ID: SystemsSearchSystemId,
    }
)

path_to_api = PathToApi(
    {
        PathValues.SYSTEMS_SYSTEM_ID_ENERGY_LIFETIME: SystemsSystemIdEnergyLifetime,
        PathValues.SYSTEMS_SYSTEM_ID_ENVOYS: SystemsSystemIdEnvoys,
        PathValues.SYSTEMS: Systems,
        PathValues.SYSTEMS_SYSTEM_ID_INVENTORY: SystemsSystemIdInventory,
        PathValues.SYSTEMS_INVERTERS_SUMMARY_BY_ENVOY_OR_SITE: SystemsInvertersSummaryByEnvoyOrSite,
        PathValues.SYSTEMS_SYSTEM_ID_MONTHLY_PRODUCTION: SystemsSystemIdMonthlyProduction,
        PathValues.SYSTEMS_SYSTEM_ID_PRODUCTION_METER_READINGS: SystemsSystemIdProductionMeterReadings,
        PathValues.SYSTEMS_SYSTEM_ID_RGM_STATS: SystemsSystemIdRgmStats,
        PathValues.SYSTEMS_SYSTEM_ID_STATS: SystemsSystemIdStats,
        PathValues.SYSTEMS_SYSTEM_ID_CONSUMPTION_LIFETIME: SystemsSystemIdConsumptionLifetime,
        PathValues.SYSTEMS_SYSTEM_ID_CONSUMPTION_STATS: SystemsSystemIdConsumptionStats,
        PathValues.SYSTEMS_SYSTEM_ID_SUMMARY: SystemsSystemIdSummary,
        PathValues.SYSTEMS_SEARCH_SYSTEM_ID: SystemsSearchSystemId,
    }
)

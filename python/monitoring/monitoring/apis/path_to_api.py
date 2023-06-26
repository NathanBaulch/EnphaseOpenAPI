import typing_extensions

from monitoring.paths import PathValues
from monitoring.apis.paths.systems import Systems
from monitoring.apis.paths.systems_search import SystemsSearch
from monitoring.apis.paths.systems_system_id import SystemsSystemId
from monitoring.apis.paths.systems_system_id_summary import SystemsSystemIdSummary
from monitoring.apis.paths.systems_system_id_devices import SystemsSystemIdDevices
from monitoring.apis.paths.systems_retrieve_system_id import SystemsRetrieveSystemId
from monitoring.apis.paths.systems_system_id_production_meter_readings import SystemsSystemIdProductionMeterReadings
from monitoring.apis.paths.systems_system_id_rgm_stats import SystemsSystemIdRgmStats
from monitoring.apis.paths.systems_system_id_consumption_lifetime import SystemsSystemIdConsumptionLifetime
from monitoring.apis.paths.systems_system_id_energy_lifetime import SystemsSystemIdEnergyLifetime
from monitoring.apis.paths.systems_system_id_battery_lifetime import SystemsSystemIdBatteryLifetime
from monitoring.apis.paths.systems_system_id_energy_import_lifetime import SystemsSystemIdEnergyImportLifetime
from monitoring.apis.paths.systems_system_id_energy_export_lifetime import SystemsSystemIdEnergyExportLifetime
from monitoring.apis.paths.systems_inverters_summary_by_envoy_or_site import SystemsInvertersSummaryByEnvoyOrSite
from monitoring.apis.paths.systems_system_id_telemetry_production_micro import SystemsSystemIdTelemetryProductionMicro
from monitoring.apis.paths.systems_system_id_telemetry_production_meter import SystemsSystemIdTelemetryProductionMeter
from monitoring.apis.paths.systems_system_id_telemetry_battery import SystemsSystemIdTelemetryBattery
from monitoring.apis.paths.systems_system_id_telemetry_consumption_meter import SystemsSystemIdTelemetryConsumptionMeter
from monitoring.apis.paths.systems_system_id_devices_micros_serial_no_telemetry import SystemsSystemIdDevicesMicrosSerialNoTelemetry
from monitoring.apis.paths.systems_system_id_devices_acbs_serial_no_telemetry import SystemsSystemIdDevicesAcbsSerialNoTelemetry
from monitoring.apis.paths.systems_system_id_devices_encharges_serial_no_telemetry import SystemsSystemIdDevicesEnchargesSerialNoTelemetry
from monitoring.apis.paths.systems_config_system_id_battery_settings import SystemsConfigSystemIdBatterySettings
from monitoring.apis.paths.systems_config_system_id_storm_guard import SystemsConfigSystemIdStormGuard
from monitoring.apis.paths.systems_config_system_id_grid_status import SystemsConfigSystemIdGridStatus
from monitoring.apis.paths.systems_config_system_id_load_control import SystemsConfigSystemIdLoadControl
from monitoring.apis.paths.systems_system_id_energy_import_telemetry import SystemsSystemIdEnergyImportTelemetry
from monitoring.apis.paths.systems_system_id_energy_export_telemetry import SystemsSystemIdEnergyExportTelemetry

PathToApi = typing_extensions.TypedDict(
    'PathToApi',
    {
        PathValues.SYSTEMS: Systems,
        PathValues.SYSTEMS_SEARCH: SystemsSearch,
        PathValues.SYSTEMS_SYSTEM_ID: SystemsSystemId,
        PathValues.SYSTEMS_SYSTEM_ID_SUMMARY: SystemsSystemIdSummary,
        PathValues.SYSTEMS_SYSTEM_ID_DEVICES: SystemsSystemIdDevices,
        PathValues.SYSTEMS_RETRIEVE_SYSTEM_ID: SystemsRetrieveSystemId,
        PathValues.SYSTEMS_SYSTEM_ID_PRODUCTION_METER_READINGS: SystemsSystemIdProductionMeterReadings,
        PathValues.SYSTEMS_SYSTEM_ID_RGM_STATS: SystemsSystemIdRgmStats,
        PathValues.SYSTEMS_SYSTEM_ID_CONSUMPTION_LIFETIME: SystemsSystemIdConsumptionLifetime,
        PathValues.SYSTEMS_SYSTEM_ID_ENERGY_LIFETIME: SystemsSystemIdEnergyLifetime,
        PathValues.SYSTEMS_SYSTEM_ID_BATTERY_LIFETIME: SystemsSystemIdBatteryLifetime,
        PathValues.SYSTEMS_SYSTEM_ID_ENERGY_IMPORT_LIFETIME: SystemsSystemIdEnergyImportLifetime,
        PathValues.SYSTEMS_SYSTEM_ID_ENERGY_EXPORT_LIFETIME: SystemsSystemIdEnergyExportLifetime,
        PathValues.SYSTEMS_INVERTERS_SUMMARY_BY_ENVOY_OR_SITE: SystemsInvertersSummaryByEnvoyOrSite,
        PathValues.SYSTEMS_SYSTEM_ID_TELEMETRY_PRODUCTION_MICRO: SystemsSystemIdTelemetryProductionMicro,
        PathValues.SYSTEMS_SYSTEM_ID_TELEMETRY_PRODUCTION_METER: SystemsSystemIdTelemetryProductionMeter,
        PathValues.SYSTEMS_SYSTEM_ID_TELEMETRY_BATTERY: SystemsSystemIdTelemetryBattery,
        PathValues.SYSTEMS_SYSTEM_ID_TELEMETRY_CONSUMPTION_METER: SystemsSystemIdTelemetryConsumptionMeter,
        PathValues.SYSTEMS_SYSTEM_ID_DEVICES_MICROS_SERIAL_NO_TELEMETRY: SystemsSystemIdDevicesMicrosSerialNoTelemetry,
        PathValues.SYSTEMS_SYSTEM_ID_DEVICES_ACBS_SERIAL_NO_TELEMETRY: SystemsSystemIdDevicesAcbsSerialNoTelemetry,
        PathValues.SYSTEMS_SYSTEM_ID_DEVICES_ENCHARGES_SERIAL_NO_TELEMETRY: SystemsSystemIdDevicesEnchargesSerialNoTelemetry,
        PathValues.SYSTEMS_CONFIG_SYSTEM_ID_BATTERY_SETTINGS: SystemsConfigSystemIdBatterySettings,
        PathValues.SYSTEMS_CONFIG_SYSTEM_ID_STORM_GUARD: SystemsConfigSystemIdStormGuard,
        PathValues.SYSTEMS_CONFIG_SYSTEM_ID_GRID_STATUS: SystemsConfigSystemIdGridStatus,
        PathValues.SYSTEMS_CONFIG_SYSTEM_ID_LOAD_CONTROL: SystemsConfigSystemIdLoadControl,
        PathValues.SYSTEMS_SYSTEM_ID_ENERGY_IMPORT_TELEMETRY: SystemsSystemIdEnergyImportTelemetry,
        PathValues.SYSTEMS_SYSTEM_ID_ENERGY_EXPORT_TELEMETRY: SystemsSystemIdEnergyExportTelemetry,
    }
)

path_to_api = PathToApi(
    {
        PathValues.SYSTEMS: Systems,
        PathValues.SYSTEMS_SEARCH: SystemsSearch,
        PathValues.SYSTEMS_SYSTEM_ID: SystemsSystemId,
        PathValues.SYSTEMS_SYSTEM_ID_SUMMARY: SystemsSystemIdSummary,
        PathValues.SYSTEMS_SYSTEM_ID_DEVICES: SystemsSystemIdDevices,
        PathValues.SYSTEMS_RETRIEVE_SYSTEM_ID: SystemsRetrieveSystemId,
        PathValues.SYSTEMS_SYSTEM_ID_PRODUCTION_METER_READINGS: SystemsSystemIdProductionMeterReadings,
        PathValues.SYSTEMS_SYSTEM_ID_RGM_STATS: SystemsSystemIdRgmStats,
        PathValues.SYSTEMS_SYSTEM_ID_CONSUMPTION_LIFETIME: SystemsSystemIdConsumptionLifetime,
        PathValues.SYSTEMS_SYSTEM_ID_ENERGY_LIFETIME: SystemsSystemIdEnergyLifetime,
        PathValues.SYSTEMS_SYSTEM_ID_BATTERY_LIFETIME: SystemsSystemIdBatteryLifetime,
        PathValues.SYSTEMS_SYSTEM_ID_ENERGY_IMPORT_LIFETIME: SystemsSystemIdEnergyImportLifetime,
        PathValues.SYSTEMS_SYSTEM_ID_ENERGY_EXPORT_LIFETIME: SystemsSystemIdEnergyExportLifetime,
        PathValues.SYSTEMS_INVERTERS_SUMMARY_BY_ENVOY_OR_SITE: SystemsInvertersSummaryByEnvoyOrSite,
        PathValues.SYSTEMS_SYSTEM_ID_TELEMETRY_PRODUCTION_MICRO: SystemsSystemIdTelemetryProductionMicro,
        PathValues.SYSTEMS_SYSTEM_ID_TELEMETRY_PRODUCTION_METER: SystemsSystemIdTelemetryProductionMeter,
        PathValues.SYSTEMS_SYSTEM_ID_TELEMETRY_BATTERY: SystemsSystemIdTelemetryBattery,
        PathValues.SYSTEMS_SYSTEM_ID_TELEMETRY_CONSUMPTION_METER: SystemsSystemIdTelemetryConsumptionMeter,
        PathValues.SYSTEMS_SYSTEM_ID_DEVICES_MICROS_SERIAL_NO_TELEMETRY: SystemsSystemIdDevicesMicrosSerialNoTelemetry,
        PathValues.SYSTEMS_SYSTEM_ID_DEVICES_ACBS_SERIAL_NO_TELEMETRY: SystemsSystemIdDevicesAcbsSerialNoTelemetry,
        PathValues.SYSTEMS_SYSTEM_ID_DEVICES_ENCHARGES_SERIAL_NO_TELEMETRY: SystemsSystemIdDevicesEnchargesSerialNoTelemetry,
        PathValues.SYSTEMS_CONFIG_SYSTEM_ID_BATTERY_SETTINGS: SystemsConfigSystemIdBatterySettings,
        PathValues.SYSTEMS_CONFIG_SYSTEM_ID_STORM_GUARD: SystemsConfigSystemIdStormGuard,
        PathValues.SYSTEMS_CONFIG_SYSTEM_ID_GRID_STATUS: SystemsConfigSystemIdGridStatus,
        PathValues.SYSTEMS_CONFIG_SYSTEM_ID_LOAD_CONTROL: SystemsConfigSystemIdLoadControl,
        PathValues.SYSTEMS_SYSTEM_ID_ENERGY_IMPORT_TELEMETRY: SystemsSystemIdEnergyImportTelemetry,
        PathValues.SYSTEMS_SYSTEM_ID_ENERGY_EXPORT_TELEMETRY: SystemsSystemIdEnergyExportTelemetry,
    }
)

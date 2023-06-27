import typing_extensions

from monitoring.apis.tags import TagValues
from monitoring.apis.tags.device_level_production_monitoring_api import DeviceLevelProductionMonitoringApi
from monitoring.apis.tags.site_level_consumption_monitoring_api import SiteLevelConsumptionMonitoringApi
from monitoring.apis.tags.site_level_production_monitoring_api import SiteLevelProductionMonitoringApi
from monitoring.apis.tags.streaming_apis_api import StreamingAPIsApi
from monitoring.apis.tags.system_configurations_api import SystemConfigurationsApi
from monitoring.apis.tags.system_details_api import SystemDetailsApi

TagToApi = typing_extensions.TypedDict(
    'TagToApi',
    {
        TagValues.DEVICE_LEVEL_PRODUCTION_MONITORING: DeviceLevelProductionMonitoringApi,
        TagValues.SITE_LEVEL_CONSUMPTION_MONITORING: SiteLevelConsumptionMonitoringApi,
        TagValues.SITE_LEVEL_PRODUCTION_MONITORING: SiteLevelProductionMonitoringApi,
        TagValues.STREAMING_APIS: StreamingAPIsApi,
        TagValues.SYSTEM_CONFIGURATIONS: SystemConfigurationsApi,
        TagValues.SYSTEM_DETAILS: SystemDetailsApi,
    }
)

tag_to_api = TagToApi(
    {
        TagValues.DEVICE_LEVEL_PRODUCTION_MONITORING: DeviceLevelProductionMonitoringApi,
        TagValues.SITE_LEVEL_CONSUMPTION_MONITORING: SiteLevelConsumptionMonitoringApi,
        TagValues.SITE_LEVEL_PRODUCTION_MONITORING: SiteLevelProductionMonitoringApi,
        TagValues.STREAMING_APIS: StreamingAPIsApi,
        TagValues.SYSTEM_CONFIGURATIONS: SystemConfigurationsApi,
        TagValues.SYSTEM_DETAILS: SystemDetailsApi,
    }
)

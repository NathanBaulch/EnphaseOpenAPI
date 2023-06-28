# do not import all endpoints into this module because that uses a lot of memory and stack frames
# if you need the ability to import all endpoints from this module, import them with
# from monitoring.apis.tag_to_api import tag_to_api

import enum


class TagValues(str, enum.Enum):
    DEVICE_LEVEL_PRODUCTION_MONITORING = "Device Level Production Monitoring"
    SITE_LEVEL_CONSUMPTION_MONITORING = "Site Level Consumption Monitoring"
    SITE_LEVEL_PRODUCTION_MONITORING = "Site Level Production Monitoring"
    STREAMING = "Streaming"
    SYSTEM_CONFIGURATIONS = "System Configurations"
    SYSTEM_DETAILS = "System Details"

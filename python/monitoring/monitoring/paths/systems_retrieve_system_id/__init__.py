# do not import all endpoints into this module because that uses a lot of memory and stack frames
# if you need the ability to import all endpoints from this module, import them with
# from monitoring.paths.systems_retrieve_system_id import Api

from monitoring.paths import PathValues

path = PathValues.SYSTEMS_RETRIEVE_SYSTEM_ID
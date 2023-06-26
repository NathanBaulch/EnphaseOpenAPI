# do not import all endpoints into this module because that uses a lot of memory and stack frames
# if you need the ability to import all endpoints from this module, import them with
# from monitoring.paths.systems_inverters_summary_by_envoy_or_site import Api

from monitoring.paths import PathValues

path = PathValues.SYSTEMS_INVERTERS_SUMMARY_BY_ENVOY_OR_SITE
# do not import all endpoints into this module because that uses a lot of memory and stack frames
# if you need the ability to import all endpoints from this module, import them with
# from commissioning.paths.users_search import Api

from commissioning.paths import PathValues

path = PathValues.USERS_SEARCH
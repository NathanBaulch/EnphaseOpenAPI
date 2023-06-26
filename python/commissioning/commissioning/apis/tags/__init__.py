# do not import all endpoints into this module because that uses a lot of memory and stack frames
# if you need the ability to import all endpoints from this module, import them with
# from commissioning.apis.tag_to_api import tag_to_api

import enum


class TagValues(str, enum.Enum):
    ACTIVATIONS = "Activations"
    ARRAYS = "Arrays"
    COMPANIES = "Companies"
    ESTIMATE = "Estimate"
    GRID_PROFILES = "Grid Profiles"
    HOME_OWNER = "Home Owner"
    METERS = "Meters"
    PV_MANUFACTURERS = "PvManufacturers"
    PV_MODELS = "PvModels"
    TARIFF = "Tariff"
    USERS = "Users"

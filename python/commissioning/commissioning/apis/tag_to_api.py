import typing_extensions

from commissioning.apis.tags import TagValues
from commissioning.apis.tags.activations_api import ActivationsApi
from commissioning.apis.tags.arrays_api import ArraysApi
from commissioning.apis.tags.companies_api import CompaniesApi
from commissioning.apis.tags.estimate_api import EstimateApi
from commissioning.apis.tags.grid_profiles_api import GridProfilesApi
from commissioning.apis.tags.home_owner_api import HomeOwnerApi
from commissioning.apis.tags.meters_api import MetersApi
from commissioning.apis.tags.pv_manufacturers_api import PvManufacturersApi
from commissioning.apis.tags.pv_models_api import PvModelsApi
from commissioning.apis.tags.tariff_api import TariffApi
from commissioning.apis.tags.users_api import UsersApi

TagToApi = typing_extensions.TypedDict(
    'TagToApi',
    {
        TagValues.ACTIVATIONS: ActivationsApi,
        TagValues.ARRAYS: ArraysApi,
        TagValues.COMPANIES: CompaniesApi,
        TagValues.ESTIMATE: EstimateApi,
        TagValues.GRID_PROFILES: GridProfilesApi,
        TagValues.HOME_OWNER: HomeOwnerApi,
        TagValues.METERS: MetersApi,
        TagValues.PV_MANUFACTURERS: PvManufacturersApi,
        TagValues.PV_MODELS: PvModelsApi,
        TagValues.TARIFF: TariffApi,
        TagValues.USERS: UsersApi,
    }
)

tag_to_api = TagToApi(
    {
        TagValues.ACTIVATIONS: ActivationsApi,
        TagValues.ARRAYS: ArraysApi,
        TagValues.COMPANIES: CompaniesApi,
        TagValues.ESTIMATE: EstimateApi,
        TagValues.GRID_PROFILES: GridProfilesApi,
        TagValues.HOME_OWNER: HomeOwnerApi,
        TagValues.METERS: MetersApi,
        TagValues.PV_MANUFACTURERS: PvManufacturersApi,
        TagValues.PV_MODELS: PvModelsApi,
        TagValues.TARIFF: TariffApi,
        TagValues.USERS: UsersApi,
    }
)

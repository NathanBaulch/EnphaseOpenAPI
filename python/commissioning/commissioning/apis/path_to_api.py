import typing_extensions

from commissioning.paths import PathValues
from commissioning.apis.paths.partner_activations import PartnerActivations
from commissioning.apis.paths.partner_activations_id import PartnerActivationsId
from commissioning.apis.paths.activations_id import ActivationsId
from commissioning.apis.paths.activations_activation_id_users_user_id import ActivationsActivationIdUsersUserId
from commissioning.apis.paths.activations_activation_id_ops_production_mode import ActivationsActivationIdOpsProductionMode
from commissioning.apis.paths.companies_company_id_users import CompaniesCompanyIdUsers
from commissioning.apis.paths.users import Users
from commissioning.apis.paths.users_search import UsersSearch
from commissioning.apis.paths.companies_company_id_users_user_id import CompaniesCompanyIdUsersUserId
from commissioning.apis.paths.users_user_id import UsersUserId
from commissioning.apis.paths.users_self import UsersSelf
from commissioning.apis.paths.companies_self_branches import CompaniesSelfBranches
from commissioning.apis.paths.activations_activation_id_estimate import ActivationsActivationIdEstimate
from commissioning.apis.paths.grid_profiles import GridProfiles
from commissioning.apis.paths.systems_system_id_meters_serial_number import SystemsSystemIdMetersSerialNumber
from commissioning.apis.paths.activations_activation_id_meters_serial_number_meter_control import ActivationsActivationIdMetersSerialNumberMeterControl
from commissioning.apis.paths.pv_manufacturers import PvManufacturers
from commissioning.apis.paths.pv_manufacturers_pv_manufacturer_id_pv_models import PvManufacturersPvManufacturerIdPvModels
from commissioning.apis.paths.systems_config_system_id_tariff import SystemsConfigSystemIdTariff
from commissioning.apis.paths.systems_system_id_arrays import SystemsSystemIdArrays
from commissioning.apis.paths.systems_system_id_arrays_id import SystemsSystemIdArraysId

PathToApi = typing_extensions.TypedDict(
    'PathToApi',
    {
        PathValues.PARTNER_ACTIVATIONS: PartnerActivations,
        PathValues.PARTNER_ACTIVATIONS_ID: PartnerActivationsId,
        PathValues.ACTIVATIONS_ID: ActivationsId,
        PathValues.ACTIVATIONS_ACTIVATION_ID_USERS_USER_ID: ActivationsActivationIdUsersUserId,
        PathValues.ACTIVATIONS_ACTIVATION_ID_OPS_PRODUCTION_MODE: ActivationsActivationIdOpsProductionMode,
        PathValues.COMPANIES_COMPANY_ID_USERS: CompaniesCompanyIdUsers,
        PathValues.USERS: Users,
        PathValues.USERS_SEARCH: UsersSearch,
        PathValues.COMPANIES_COMPANY_ID_USERS_USER_ID: CompaniesCompanyIdUsersUserId,
        PathValues.USERS_USER_ID: UsersUserId,
        PathValues.USERS_SELF: UsersSelf,
        PathValues.COMPANIES_SELF_BRANCHES: CompaniesSelfBranches,
        PathValues.ACTIVATIONS_ACTIVATION_ID_ESTIMATE: ActivationsActivationIdEstimate,
        PathValues.GRID_PROFILES: GridProfiles,
        PathValues.SYSTEMS_SYSTEM_ID_METERS_SERIAL_NUMBER: SystemsSystemIdMetersSerialNumber,
        PathValues.ACTIVATIONS_ACTIVATION_ID_METERS_SERIAL_NUMBER_METER_CONTROL: ActivationsActivationIdMetersSerialNumberMeterControl,
        PathValues.PV_MANUFACTURERS: PvManufacturers,
        PathValues.PV_MANUFACTURERS_PV_MANUFACTURER_ID_PV_MODELS: PvManufacturersPvManufacturerIdPvModels,
        PathValues.SYSTEMS_CONFIG_SYSTEM_ID_TARIFF: SystemsConfigSystemIdTariff,
        PathValues.SYSTEMS_SYSTEM_ID_ARRAYS: SystemsSystemIdArrays,
        PathValues.SYSTEMS_SYSTEM_ID_ARRAYS_ID: SystemsSystemIdArraysId,
    }
)

path_to_api = PathToApi(
    {
        PathValues.PARTNER_ACTIVATIONS: PartnerActivations,
        PathValues.PARTNER_ACTIVATIONS_ID: PartnerActivationsId,
        PathValues.ACTIVATIONS_ID: ActivationsId,
        PathValues.ACTIVATIONS_ACTIVATION_ID_USERS_USER_ID: ActivationsActivationIdUsersUserId,
        PathValues.ACTIVATIONS_ACTIVATION_ID_OPS_PRODUCTION_MODE: ActivationsActivationIdOpsProductionMode,
        PathValues.COMPANIES_COMPANY_ID_USERS: CompaniesCompanyIdUsers,
        PathValues.USERS: Users,
        PathValues.USERS_SEARCH: UsersSearch,
        PathValues.COMPANIES_COMPANY_ID_USERS_USER_ID: CompaniesCompanyIdUsersUserId,
        PathValues.USERS_USER_ID: UsersUserId,
        PathValues.USERS_SELF: UsersSelf,
        PathValues.COMPANIES_SELF_BRANCHES: CompaniesSelfBranches,
        PathValues.ACTIVATIONS_ACTIVATION_ID_ESTIMATE: ActivationsActivationIdEstimate,
        PathValues.GRID_PROFILES: GridProfiles,
        PathValues.SYSTEMS_SYSTEM_ID_METERS_SERIAL_NUMBER: SystemsSystemIdMetersSerialNumber,
        PathValues.ACTIVATIONS_ACTIVATION_ID_METERS_SERIAL_NUMBER_METER_CONTROL: ActivationsActivationIdMetersSerialNumberMeterControl,
        PathValues.PV_MANUFACTURERS: PvManufacturers,
        PathValues.PV_MANUFACTURERS_PV_MANUFACTURER_ID_PV_MODELS: PvManufacturersPvManufacturerIdPvModels,
        PathValues.SYSTEMS_CONFIG_SYSTEM_ID_TARIFF: SystemsConfigSystemIdTariff,
        PathValues.SYSTEMS_SYSTEM_ID_ARRAYS: SystemsSystemIdArrays,
        PathValues.SYSTEMS_SYSTEM_ID_ARRAYS_ID: SystemsSystemIdArraysId,
    }
)

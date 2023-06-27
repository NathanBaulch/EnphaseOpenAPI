# SystemParams

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**SystemName** | **string** | Name of the system. Limit 255 characters. | 
**SystemType** | Pointer to [**SystemTypeEnum**](SystemTypeEnum.md) |  | [optional] 
**InternetConnection** | Pointer to [**SystemInternetConnectionEnum**](SystemInternetConnectionEnum.md) |  | [optional] 
**Lease** | Pointer to **bool** | Whether the system is leased. Default false. | [optional] 
**Operational** | Pointer to **bool** | Whether this system is permitted to operate. Default true. | [optional] 
**OwnerId** | Pointer to **int32** | Enlighten ID of the system owner. Owner must be an Enlighten user. Optional. If the user of the API is a self-installer, the owner must be himself. If the user of the API is an installer then use the Search user API to get the owner user ID. If the owner not exist in the enlighten then use Create home owner API to create it newly. | [optional] 
**HostId** | Pointer to **int32** | Enlighten ID of the system host. System host must be an Enlighten user. Optional. If the user of the API is an installer then use the Search user API to get the host user ID. If the host not exist in the enlighten then use Create home owner API to create it newly. | [optional] 
**AuthorizedSubcontractorId** | Pointer to **int32** | Enlighten ID of the sub-contractor you want to add to the system. Optional. If you are the home owner, you cannot add subcontractors for the site. | [optional] 
**InstallerId** | Pointer to **int32** | Enlighten ID of the installer of this system. Defaults to current user&#39;s company ID. | [optional] 
**MaintainerName** | Pointer to **string** | Name of the maintainer. | [optional] 
**MaintainerId** | Pointer to **int32** | The Enlighten ID of the maintainer of this system. Defaults to current user&#39;s company ID. | [optional] 
**AuthorizedSubcontractors** | Pointer to [**[]GetPartnerActivationsResponseSystemsInnerAuthorizedSubcontractorsInner**](GetPartnerActivationsResponseSystemsInnerAuthorizedSubcontractorsInner.md) | List of sub-contractors of this system. | [optional] 
**AllowPublicAccess** | Pointer to **bool** | When true, the system will be eligible to appear in the public systems lists of Enphase and the system&#39;s installer. Default true. | [optional] 
**InterconnectDate** | Pointer to **string** | When the system was approved to connect to the grid. | [optional] 
**Source** | Pointer to [**SystemSourceEnum**](SystemSourceEnum.md) |  | [optional] 
**ArrayType** | Pointer to [**SystemArrayTypeEnum**](SystemArrayTypeEnum.md) |  | [optional] 
**AttachmentType** | Pointer to [**SystemAttachmentTypeEnum**](SystemAttachmentTypeEnum.md) |  | [optional] 
**EnsembleEnvoy** | Pointer to **string** | Specifies serial number of ensemble envoy in multi envoy system. | [optional] 
**GridProfile** | Pointer to **string** | Grid profile to set on this system&#39;s microinverters. See GridProfiles API for how to retrieve a list of known profiles. | [optional] 
**RequestedProfile** | Pointer to **string** |  | [optional] 
**RequestedReportFreq** | Pointer to **string** |  | [optional] 
**Voltage** | Pointer to **string** | Supported voltage/phase associated with a commercial system inside North America. If system type is not commercial, or if the installer exists &amp; installer&#39;s country is not inside North America, or if the system&#39;s country is not inside North America, then the voltage value would be null. | [optional] 
**EnvoySerialNumbers** | Pointer to **[]string** | A list of Envoys installed on this system. | [optional] 
**PvManufacturer** | Pointer to **int32** | Enlighten ID of the PV manufacturer associated with the PV model installed on the system. See PvManufacturers for how to retrieve PV manufacturer IDs. | [optional] 
**PvManufacturerName** | Pointer to **string** | Name of the Custom PV module manufacturer associated with the system. | [optional] 
**PvModel** | Pointer to **int32** | Enlighten ID of the PV model installed on the system. See PvManufacturers and PvModels for how to retrieve PV model IDs. | [optional] 
**PvModelName** | Pointer to **string** | Name of the Custom PV module model associated with the system. | [optional] 
**PvModulePowerRating** | Pointer to **float32** | Power rating (in W) of the PV module installed on the system. | [optional] 
**PvModuleType** | Pointer to **int32** | Type ID of the PV module installed on the system. 1 -&gt; &#39;Mono-facial&#39;, 2 -&gt; &#39;Bi-facial&#39;, 3 -&gt; &#39;Split cell&#39;, 4 -&gt; &#39;Other&#39;. | [optional] 
**ExpectedEnvoyCount** | Pointer to **int32** | Total envoys the system is supposed to have. | [optional] 
**ExpectedPcuCount** | Pointer to **int32** | Total PCUs the system is supposed to have. | [optional] 
**ExpectedAcbCount** | Pointer to **int32** | Total acbs the system is supposed to have. | [optional] 
**ExpectedNsrCount** | Pointer to **int32** | Total nsrs the system is supposed to have. | [optional] 
**ExpectedMeterCount** | Pointer to **int32** | Total meters the system is supposed to have. | [optional] 
**ExpectedEnchargeCount** | Pointer to **int32** | Total encharges the system is supposed to have. | [optional] 
**ExpectedEnpowerCount** | Pointer to **int32** | Total enpowers the system is supposed to have. | [optional] 
**Reference** | Pointer to **string** | Identifier of this system as provided by the calling user&#39;s company. This attribute is not present if the calling user&#39;s company does not have a reference for this system. This value should be alphanumeric. | [optional] 
**Encharge** | Pointer to [**[]SystemParamsEnchargeInner**](SystemParamsEnchargeInner.md) | Encharge detail. | [optional] 
**Enpower** | Pointer to [**[]SystemParamsEnpowerInner**](SystemParamsEnpowerInner.md) | Enpower detail. | [optional] 
**Address** | Pointer to [**SystemParamsAddress**](SystemParamsAddress.md) |  | [optional] 

## Methods

### NewSystemParams

`func NewSystemParams(systemName string, ) *SystemParams`

NewSystemParams instantiates a new SystemParams object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSystemParamsWithDefaults

`func NewSystemParamsWithDefaults() *SystemParams`

NewSystemParamsWithDefaults instantiates a new SystemParams object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetSystemName

`func (o *SystemParams) GetSystemName() string`

GetSystemName returns the SystemName field if non-nil, zero value otherwise.

### GetSystemNameOk

`func (o *SystemParams) GetSystemNameOk() (*string, bool)`

GetSystemNameOk returns a tuple with the SystemName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSystemName

`func (o *SystemParams) SetSystemName(v string)`

SetSystemName sets SystemName field to given value.


### GetSystemType

`func (o *SystemParams) GetSystemType() SystemTypeEnum`

GetSystemType returns the SystemType field if non-nil, zero value otherwise.

### GetSystemTypeOk

`func (o *SystemParams) GetSystemTypeOk() (*SystemTypeEnum, bool)`

GetSystemTypeOk returns a tuple with the SystemType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSystemType

`func (o *SystemParams) SetSystemType(v SystemTypeEnum)`

SetSystemType sets SystemType field to given value.

### HasSystemType

`func (o *SystemParams) HasSystemType() bool`

HasSystemType returns a boolean if a field has been set.

### GetInternetConnection

`func (o *SystemParams) GetInternetConnection() SystemInternetConnectionEnum`

GetInternetConnection returns the InternetConnection field if non-nil, zero value otherwise.

### GetInternetConnectionOk

`func (o *SystemParams) GetInternetConnectionOk() (*SystemInternetConnectionEnum, bool)`

GetInternetConnectionOk returns a tuple with the InternetConnection field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInternetConnection

`func (o *SystemParams) SetInternetConnection(v SystemInternetConnectionEnum)`

SetInternetConnection sets InternetConnection field to given value.

### HasInternetConnection

`func (o *SystemParams) HasInternetConnection() bool`

HasInternetConnection returns a boolean if a field has been set.

### GetLease

`func (o *SystemParams) GetLease() bool`

GetLease returns the Lease field if non-nil, zero value otherwise.

### GetLeaseOk

`func (o *SystemParams) GetLeaseOk() (*bool, bool)`

GetLeaseOk returns a tuple with the Lease field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLease

`func (o *SystemParams) SetLease(v bool)`

SetLease sets Lease field to given value.

### HasLease

`func (o *SystemParams) HasLease() bool`

HasLease returns a boolean if a field has been set.

### GetOperational

`func (o *SystemParams) GetOperational() bool`

GetOperational returns the Operational field if non-nil, zero value otherwise.

### GetOperationalOk

`func (o *SystemParams) GetOperationalOk() (*bool, bool)`

GetOperationalOk returns a tuple with the Operational field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOperational

`func (o *SystemParams) SetOperational(v bool)`

SetOperational sets Operational field to given value.

### HasOperational

`func (o *SystemParams) HasOperational() bool`

HasOperational returns a boolean if a field has been set.

### GetOwnerId

`func (o *SystemParams) GetOwnerId() int32`

GetOwnerId returns the OwnerId field if non-nil, zero value otherwise.

### GetOwnerIdOk

`func (o *SystemParams) GetOwnerIdOk() (*int32, bool)`

GetOwnerIdOk returns a tuple with the OwnerId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOwnerId

`func (o *SystemParams) SetOwnerId(v int32)`

SetOwnerId sets OwnerId field to given value.

### HasOwnerId

`func (o *SystemParams) HasOwnerId() bool`

HasOwnerId returns a boolean if a field has been set.

### GetHostId

`func (o *SystemParams) GetHostId() int32`

GetHostId returns the HostId field if non-nil, zero value otherwise.

### GetHostIdOk

`func (o *SystemParams) GetHostIdOk() (*int32, bool)`

GetHostIdOk returns a tuple with the HostId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHostId

`func (o *SystemParams) SetHostId(v int32)`

SetHostId sets HostId field to given value.

### HasHostId

`func (o *SystemParams) HasHostId() bool`

HasHostId returns a boolean if a field has been set.

### GetAuthorizedSubcontractorId

`func (o *SystemParams) GetAuthorizedSubcontractorId() int32`

GetAuthorizedSubcontractorId returns the AuthorizedSubcontractorId field if non-nil, zero value otherwise.

### GetAuthorizedSubcontractorIdOk

`func (o *SystemParams) GetAuthorizedSubcontractorIdOk() (*int32, bool)`

GetAuthorizedSubcontractorIdOk returns a tuple with the AuthorizedSubcontractorId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAuthorizedSubcontractorId

`func (o *SystemParams) SetAuthorizedSubcontractorId(v int32)`

SetAuthorizedSubcontractorId sets AuthorizedSubcontractorId field to given value.

### HasAuthorizedSubcontractorId

`func (o *SystemParams) HasAuthorizedSubcontractorId() bool`

HasAuthorizedSubcontractorId returns a boolean if a field has been set.

### GetInstallerId

`func (o *SystemParams) GetInstallerId() int32`

GetInstallerId returns the InstallerId field if non-nil, zero value otherwise.

### GetInstallerIdOk

`func (o *SystemParams) GetInstallerIdOk() (*int32, bool)`

GetInstallerIdOk returns a tuple with the InstallerId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInstallerId

`func (o *SystemParams) SetInstallerId(v int32)`

SetInstallerId sets InstallerId field to given value.

### HasInstallerId

`func (o *SystemParams) HasInstallerId() bool`

HasInstallerId returns a boolean if a field has been set.

### GetMaintainerName

`func (o *SystemParams) GetMaintainerName() string`

GetMaintainerName returns the MaintainerName field if non-nil, zero value otherwise.

### GetMaintainerNameOk

`func (o *SystemParams) GetMaintainerNameOk() (*string, bool)`

GetMaintainerNameOk returns a tuple with the MaintainerName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMaintainerName

`func (o *SystemParams) SetMaintainerName(v string)`

SetMaintainerName sets MaintainerName field to given value.

### HasMaintainerName

`func (o *SystemParams) HasMaintainerName() bool`

HasMaintainerName returns a boolean if a field has been set.

### GetMaintainerId

`func (o *SystemParams) GetMaintainerId() int32`

GetMaintainerId returns the MaintainerId field if non-nil, zero value otherwise.

### GetMaintainerIdOk

`func (o *SystemParams) GetMaintainerIdOk() (*int32, bool)`

GetMaintainerIdOk returns a tuple with the MaintainerId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMaintainerId

`func (o *SystemParams) SetMaintainerId(v int32)`

SetMaintainerId sets MaintainerId field to given value.

### HasMaintainerId

`func (o *SystemParams) HasMaintainerId() bool`

HasMaintainerId returns a boolean if a field has been set.

### GetAuthorizedSubcontractors

`func (o *SystemParams) GetAuthorizedSubcontractors() []GetPartnerActivationsResponseSystemsInnerAuthorizedSubcontractorsInner`

GetAuthorizedSubcontractors returns the AuthorizedSubcontractors field if non-nil, zero value otherwise.

### GetAuthorizedSubcontractorsOk

`func (o *SystemParams) GetAuthorizedSubcontractorsOk() (*[]GetPartnerActivationsResponseSystemsInnerAuthorizedSubcontractorsInner, bool)`

GetAuthorizedSubcontractorsOk returns a tuple with the AuthorizedSubcontractors field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAuthorizedSubcontractors

`func (o *SystemParams) SetAuthorizedSubcontractors(v []GetPartnerActivationsResponseSystemsInnerAuthorizedSubcontractorsInner)`

SetAuthorizedSubcontractors sets AuthorizedSubcontractors field to given value.

### HasAuthorizedSubcontractors

`func (o *SystemParams) HasAuthorizedSubcontractors() bool`

HasAuthorizedSubcontractors returns a boolean if a field has been set.

### GetAllowPublicAccess

`func (o *SystemParams) GetAllowPublicAccess() bool`

GetAllowPublicAccess returns the AllowPublicAccess field if non-nil, zero value otherwise.

### GetAllowPublicAccessOk

`func (o *SystemParams) GetAllowPublicAccessOk() (*bool, bool)`

GetAllowPublicAccessOk returns a tuple with the AllowPublicAccess field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAllowPublicAccess

`func (o *SystemParams) SetAllowPublicAccess(v bool)`

SetAllowPublicAccess sets AllowPublicAccess field to given value.

### HasAllowPublicAccess

`func (o *SystemParams) HasAllowPublicAccess() bool`

HasAllowPublicAccess returns a boolean if a field has been set.

### GetInterconnectDate

`func (o *SystemParams) GetInterconnectDate() string`

GetInterconnectDate returns the InterconnectDate field if non-nil, zero value otherwise.

### GetInterconnectDateOk

`func (o *SystemParams) GetInterconnectDateOk() (*string, bool)`

GetInterconnectDateOk returns a tuple with the InterconnectDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInterconnectDate

`func (o *SystemParams) SetInterconnectDate(v string)`

SetInterconnectDate sets InterconnectDate field to given value.

### HasInterconnectDate

`func (o *SystemParams) HasInterconnectDate() bool`

HasInterconnectDate returns a boolean if a field has been set.

### GetSource

`func (o *SystemParams) GetSource() SystemSourceEnum`

GetSource returns the Source field if non-nil, zero value otherwise.

### GetSourceOk

`func (o *SystemParams) GetSourceOk() (*SystemSourceEnum, bool)`

GetSourceOk returns a tuple with the Source field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSource

`func (o *SystemParams) SetSource(v SystemSourceEnum)`

SetSource sets Source field to given value.

### HasSource

`func (o *SystemParams) HasSource() bool`

HasSource returns a boolean if a field has been set.

### GetArrayType

`func (o *SystemParams) GetArrayType() SystemArrayTypeEnum`

GetArrayType returns the ArrayType field if non-nil, zero value otherwise.

### GetArrayTypeOk

`func (o *SystemParams) GetArrayTypeOk() (*SystemArrayTypeEnum, bool)`

GetArrayTypeOk returns a tuple with the ArrayType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetArrayType

`func (o *SystemParams) SetArrayType(v SystemArrayTypeEnum)`

SetArrayType sets ArrayType field to given value.

### HasArrayType

`func (o *SystemParams) HasArrayType() bool`

HasArrayType returns a boolean if a field has been set.

### GetAttachmentType

`func (o *SystemParams) GetAttachmentType() SystemAttachmentTypeEnum`

GetAttachmentType returns the AttachmentType field if non-nil, zero value otherwise.

### GetAttachmentTypeOk

`func (o *SystemParams) GetAttachmentTypeOk() (*SystemAttachmentTypeEnum, bool)`

GetAttachmentTypeOk returns a tuple with the AttachmentType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttachmentType

`func (o *SystemParams) SetAttachmentType(v SystemAttachmentTypeEnum)`

SetAttachmentType sets AttachmentType field to given value.

### HasAttachmentType

`func (o *SystemParams) HasAttachmentType() bool`

HasAttachmentType returns a boolean if a field has been set.

### GetEnsembleEnvoy

`func (o *SystemParams) GetEnsembleEnvoy() string`

GetEnsembleEnvoy returns the EnsembleEnvoy field if non-nil, zero value otherwise.

### GetEnsembleEnvoyOk

`func (o *SystemParams) GetEnsembleEnvoyOk() (*string, bool)`

GetEnsembleEnvoyOk returns a tuple with the EnsembleEnvoy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEnsembleEnvoy

`func (o *SystemParams) SetEnsembleEnvoy(v string)`

SetEnsembleEnvoy sets EnsembleEnvoy field to given value.

### HasEnsembleEnvoy

`func (o *SystemParams) HasEnsembleEnvoy() bool`

HasEnsembleEnvoy returns a boolean if a field has been set.

### GetGridProfile

`func (o *SystemParams) GetGridProfile() string`

GetGridProfile returns the GridProfile field if non-nil, zero value otherwise.

### GetGridProfileOk

`func (o *SystemParams) GetGridProfileOk() (*string, bool)`

GetGridProfileOk returns a tuple with the GridProfile field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGridProfile

`func (o *SystemParams) SetGridProfile(v string)`

SetGridProfile sets GridProfile field to given value.

### HasGridProfile

`func (o *SystemParams) HasGridProfile() bool`

HasGridProfile returns a boolean if a field has been set.

### GetRequestedProfile

`func (o *SystemParams) GetRequestedProfile() string`

GetRequestedProfile returns the RequestedProfile field if non-nil, zero value otherwise.

### GetRequestedProfileOk

`func (o *SystemParams) GetRequestedProfileOk() (*string, bool)`

GetRequestedProfileOk returns a tuple with the RequestedProfile field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequestedProfile

`func (o *SystemParams) SetRequestedProfile(v string)`

SetRequestedProfile sets RequestedProfile field to given value.

### HasRequestedProfile

`func (o *SystemParams) HasRequestedProfile() bool`

HasRequestedProfile returns a boolean if a field has been set.

### GetRequestedReportFreq

`func (o *SystemParams) GetRequestedReportFreq() string`

GetRequestedReportFreq returns the RequestedReportFreq field if non-nil, zero value otherwise.

### GetRequestedReportFreqOk

`func (o *SystemParams) GetRequestedReportFreqOk() (*string, bool)`

GetRequestedReportFreqOk returns a tuple with the RequestedReportFreq field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequestedReportFreq

`func (o *SystemParams) SetRequestedReportFreq(v string)`

SetRequestedReportFreq sets RequestedReportFreq field to given value.

### HasRequestedReportFreq

`func (o *SystemParams) HasRequestedReportFreq() bool`

HasRequestedReportFreq returns a boolean if a field has been set.

### GetVoltage

`func (o *SystemParams) GetVoltage() string`

GetVoltage returns the Voltage field if non-nil, zero value otherwise.

### GetVoltageOk

`func (o *SystemParams) GetVoltageOk() (*string, bool)`

GetVoltageOk returns a tuple with the Voltage field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetVoltage

`func (o *SystemParams) SetVoltage(v string)`

SetVoltage sets Voltage field to given value.

### HasVoltage

`func (o *SystemParams) HasVoltage() bool`

HasVoltage returns a boolean if a field has been set.

### GetEnvoySerialNumbers

`func (o *SystemParams) GetEnvoySerialNumbers() []string`

GetEnvoySerialNumbers returns the EnvoySerialNumbers field if non-nil, zero value otherwise.

### GetEnvoySerialNumbersOk

`func (o *SystemParams) GetEnvoySerialNumbersOk() (*[]string, bool)`

GetEnvoySerialNumbersOk returns a tuple with the EnvoySerialNumbers field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEnvoySerialNumbers

`func (o *SystemParams) SetEnvoySerialNumbers(v []string)`

SetEnvoySerialNumbers sets EnvoySerialNumbers field to given value.

### HasEnvoySerialNumbers

`func (o *SystemParams) HasEnvoySerialNumbers() bool`

HasEnvoySerialNumbers returns a boolean if a field has been set.

### GetPvManufacturer

`func (o *SystemParams) GetPvManufacturer() int32`

GetPvManufacturer returns the PvManufacturer field if non-nil, zero value otherwise.

### GetPvManufacturerOk

`func (o *SystemParams) GetPvManufacturerOk() (*int32, bool)`

GetPvManufacturerOk returns a tuple with the PvManufacturer field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPvManufacturer

`func (o *SystemParams) SetPvManufacturer(v int32)`

SetPvManufacturer sets PvManufacturer field to given value.

### HasPvManufacturer

`func (o *SystemParams) HasPvManufacturer() bool`

HasPvManufacturer returns a boolean if a field has been set.

### GetPvManufacturerName

`func (o *SystemParams) GetPvManufacturerName() string`

GetPvManufacturerName returns the PvManufacturerName field if non-nil, zero value otherwise.

### GetPvManufacturerNameOk

`func (o *SystemParams) GetPvManufacturerNameOk() (*string, bool)`

GetPvManufacturerNameOk returns a tuple with the PvManufacturerName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPvManufacturerName

`func (o *SystemParams) SetPvManufacturerName(v string)`

SetPvManufacturerName sets PvManufacturerName field to given value.

### HasPvManufacturerName

`func (o *SystemParams) HasPvManufacturerName() bool`

HasPvManufacturerName returns a boolean if a field has been set.

### GetPvModel

`func (o *SystemParams) GetPvModel() int32`

GetPvModel returns the PvModel field if non-nil, zero value otherwise.

### GetPvModelOk

`func (o *SystemParams) GetPvModelOk() (*int32, bool)`

GetPvModelOk returns a tuple with the PvModel field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPvModel

`func (o *SystemParams) SetPvModel(v int32)`

SetPvModel sets PvModel field to given value.

### HasPvModel

`func (o *SystemParams) HasPvModel() bool`

HasPvModel returns a boolean if a field has been set.

### GetPvModelName

`func (o *SystemParams) GetPvModelName() string`

GetPvModelName returns the PvModelName field if non-nil, zero value otherwise.

### GetPvModelNameOk

`func (o *SystemParams) GetPvModelNameOk() (*string, bool)`

GetPvModelNameOk returns a tuple with the PvModelName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPvModelName

`func (o *SystemParams) SetPvModelName(v string)`

SetPvModelName sets PvModelName field to given value.

### HasPvModelName

`func (o *SystemParams) HasPvModelName() bool`

HasPvModelName returns a boolean if a field has been set.

### GetPvModulePowerRating

`func (o *SystemParams) GetPvModulePowerRating() float32`

GetPvModulePowerRating returns the PvModulePowerRating field if non-nil, zero value otherwise.

### GetPvModulePowerRatingOk

`func (o *SystemParams) GetPvModulePowerRatingOk() (*float32, bool)`

GetPvModulePowerRatingOk returns a tuple with the PvModulePowerRating field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPvModulePowerRating

`func (o *SystemParams) SetPvModulePowerRating(v float32)`

SetPvModulePowerRating sets PvModulePowerRating field to given value.

### HasPvModulePowerRating

`func (o *SystemParams) HasPvModulePowerRating() bool`

HasPvModulePowerRating returns a boolean if a field has been set.

### GetPvModuleType

`func (o *SystemParams) GetPvModuleType() int32`

GetPvModuleType returns the PvModuleType field if non-nil, zero value otherwise.

### GetPvModuleTypeOk

`func (o *SystemParams) GetPvModuleTypeOk() (*int32, bool)`

GetPvModuleTypeOk returns a tuple with the PvModuleType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPvModuleType

`func (o *SystemParams) SetPvModuleType(v int32)`

SetPvModuleType sets PvModuleType field to given value.

### HasPvModuleType

`func (o *SystemParams) HasPvModuleType() bool`

HasPvModuleType returns a boolean if a field has been set.

### GetExpectedEnvoyCount

`func (o *SystemParams) GetExpectedEnvoyCount() int32`

GetExpectedEnvoyCount returns the ExpectedEnvoyCount field if non-nil, zero value otherwise.

### GetExpectedEnvoyCountOk

`func (o *SystemParams) GetExpectedEnvoyCountOk() (*int32, bool)`

GetExpectedEnvoyCountOk returns a tuple with the ExpectedEnvoyCount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExpectedEnvoyCount

`func (o *SystemParams) SetExpectedEnvoyCount(v int32)`

SetExpectedEnvoyCount sets ExpectedEnvoyCount field to given value.

### HasExpectedEnvoyCount

`func (o *SystemParams) HasExpectedEnvoyCount() bool`

HasExpectedEnvoyCount returns a boolean if a field has been set.

### GetExpectedPcuCount

`func (o *SystemParams) GetExpectedPcuCount() int32`

GetExpectedPcuCount returns the ExpectedPcuCount field if non-nil, zero value otherwise.

### GetExpectedPcuCountOk

`func (o *SystemParams) GetExpectedPcuCountOk() (*int32, bool)`

GetExpectedPcuCountOk returns a tuple with the ExpectedPcuCount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExpectedPcuCount

`func (o *SystemParams) SetExpectedPcuCount(v int32)`

SetExpectedPcuCount sets ExpectedPcuCount field to given value.

### HasExpectedPcuCount

`func (o *SystemParams) HasExpectedPcuCount() bool`

HasExpectedPcuCount returns a boolean if a field has been set.

### GetExpectedAcbCount

`func (o *SystemParams) GetExpectedAcbCount() int32`

GetExpectedAcbCount returns the ExpectedAcbCount field if non-nil, zero value otherwise.

### GetExpectedAcbCountOk

`func (o *SystemParams) GetExpectedAcbCountOk() (*int32, bool)`

GetExpectedAcbCountOk returns a tuple with the ExpectedAcbCount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExpectedAcbCount

`func (o *SystemParams) SetExpectedAcbCount(v int32)`

SetExpectedAcbCount sets ExpectedAcbCount field to given value.

### HasExpectedAcbCount

`func (o *SystemParams) HasExpectedAcbCount() bool`

HasExpectedAcbCount returns a boolean if a field has been set.

### GetExpectedNsrCount

`func (o *SystemParams) GetExpectedNsrCount() int32`

GetExpectedNsrCount returns the ExpectedNsrCount field if non-nil, zero value otherwise.

### GetExpectedNsrCountOk

`func (o *SystemParams) GetExpectedNsrCountOk() (*int32, bool)`

GetExpectedNsrCountOk returns a tuple with the ExpectedNsrCount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExpectedNsrCount

`func (o *SystemParams) SetExpectedNsrCount(v int32)`

SetExpectedNsrCount sets ExpectedNsrCount field to given value.

### HasExpectedNsrCount

`func (o *SystemParams) HasExpectedNsrCount() bool`

HasExpectedNsrCount returns a boolean if a field has been set.

### GetExpectedMeterCount

`func (o *SystemParams) GetExpectedMeterCount() int32`

GetExpectedMeterCount returns the ExpectedMeterCount field if non-nil, zero value otherwise.

### GetExpectedMeterCountOk

`func (o *SystemParams) GetExpectedMeterCountOk() (*int32, bool)`

GetExpectedMeterCountOk returns a tuple with the ExpectedMeterCount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExpectedMeterCount

`func (o *SystemParams) SetExpectedMeterCount(v int32)`

SetExpectedMeterCount sets ExpectedMeterCount field to given value.

### HasExpectedMeterCount

`func (o *SystemParams) HasExpectedMeterCount() bool`

HasExpectedMeterCount returns a boolean if a field has been set.

### GetExpectedEnchargeCount

`func (o *SystemParams) GetExpectedEnchargeCount() int32`

GetExpectedEnchargeCount returns the ExpectedEnchargeCount field if non-nil, zero value otherwise.

### GetExpectedEnchargeCountOk

`func (o *SystemParams) GetExpectedEnchargeCountOk() (*int32, bool)`

GetExpectedEnchargeCountOk returns a tuple with the ExpectedEnchargeCount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExpectedEnchargeCount

`func (o *SystemParams) SetExpectedEnchargeCount(v int32)`

SetExpectedEnchargeCount sets ExpectedEnchargeCount field to given value.

### HasExpectedEnchargeCount

`func (o *SystemParams) HasExpectedEnchargeCount() bool`

HasExpectedEnchargeCount returns a boolean if a field has been set.

### GetExpectedEnpowerCount

`func (o *SystemParams) GetExpectedEnpowerCount() int32`

GetExpectedEnpowerCount returns the ExpectedEnpowerCount field if non-nil, zero value otherwise.

### GetExpectedEnpowerCountOk

`func (o *SystemParams) GetExpectedEnpowerCountOk() (*int32, bool)`

GetExpectedEnpowerCountOk returns a tuple with the ExpectedEnpowerCount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExpectedEnpowerCount

`func (o *SystemParams) SetExpectedEnpowerCount(v int32)`

SetExpectedEnpowerCount sets ExpectedEnpowerCount field to given value.

### HasExpectedEnpowerCount

`func (o *SystemParams) HasExpectedEnpowerCount() bool`

HasExpectedEnpowerCount returns a boolean if a field has been set.

### GetReference

`func (o *SystemParams) GetReference() string`

GetReference returns the Reference field if non-nil, zero value otherwise.

### GetReferenceOk

`func (o *SystemParams) GetReferenceOk() (*string, bool)`

GetReferenceOk returns a tuple with the Reference field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReference

`func (o *SystemParams) SetReference(v string)`

SetReference sets Reference field to given value.

### HasReference

`func (o *SystemParams) HasReference() bool`

HasReference returns a boolean if a field has been set.

### GetEncharge

`func (o *SystemParams) GetEncharge() []SystemParamsEnchargeInner`

GetEncharge returns the Encharge field if non-nil, zero value otherwise.

### GetEnchargeOk

`func (o *SystemParams) GetEnchargeOk() (*[]SystemParamsEnchargeInner, bool)`

GetEnchargeOk returns a tuple with the Encharge field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEncharge

`func (o *SystemParams) SetEncharge(v []SystemParamsEnchargeInner)`

SetEncharge sets Encharge field to given value.

### HasEncharge

`func (o *SystemParams) HasEncharge() bool`

HasEncharge returns a boolean if a field has been set.

### GetEnpower

`func (o *SystemParams) GetEnpower() []SystemParamsEnpowerInner`

GetEnpower returns the Enpower field if non-nil, zero value otherwise.

### GetEnpowerOk

`func (o *SystemParams) GetEnpowerOk() (*[]SystemParamsEnpowerInner, bool)`

GetEnpowerOk returns a tuple with the Enpower field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEnpower

`func (o *SystemParams) SetEnpower(v []SystemParamsEnpowerInner)`

SetEnpower sets Enpower field to given value.

### HasEnpower

`func (o *SystemParams) HasEnpower() bool`

HasEnpower returns a boolean if a field has been set.

### GetAddress

`func (o *SystemParams) GetAddress() SystemParamsAddress`

GetAddress returns the Address field if non-nil, zero value otherwise.

### GetAddressOk

`func (o *SystemParams) GetAddressOk() (*SystemParamsAddress, bool)`

GetAddressOk returns a tuple with the Address field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAddress

`func (o *SystemParams) SetAddress(v SystemParamsAddress)`

SetAddress sets Address field to given value.

### HasAddress

`func (o *SystemParams) HasAddress() bool`

HasAddress returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



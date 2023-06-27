# Activation

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**SystemId** | Pointer to **int32** | Enlighten ID of this system. System-generated. | [optional] 
**SystemName** | Pointer to **string** | Name of the system. | [optional] 
**SystemType** | Pointer to [**SystemTypeEnum**](SystemTypeEnum.md) |  | [optional] 
**Status** | Pointer to **string** | System&#39;s status. | [optional] 
**Timezone** | Pointer to **string** | System&#39;s timezone. | [optional] 
**Stage** | Pointer to **int32** | What stage of the activation process this activation is in. System-generated. | [optional] 
**InternetConnection** | Pointer to [**SystemInternetConnectionEnum**](SystemInternetConnectionEnum.md) |  | [optional] 
**Lease** | Pointer to **bool** | Whether the system is leased. Default false. | [optional] 
**Operational** | Pointer to **bool** | Whether this system is permitted to operate. Default true. | [optional] 
**Owner** | Pointer to [**ActivationOwner**](ActivationOwner.md) |  | [optional] 
**OwnerId** | Pointer to **int32** | Enlighten ID of this system owner. System-generated. This field is optional. | [optional] 
**Host** | Pointer to [**ActivationHost**](ActivationHost.md) |  | [optional] 
**HostId** | Pointer to **int32** | Enlighten ID of this system host. System-generated. This field is optional. | [optional] 
**InstallerName** | Pointer to **string** | Name of the installer. | [optional] 
**InstallerId** | Pointer to **int32** | Enlighten ID of the installer of this system. Defaults to current user&#39;s company ID. | [optional] 
**MaintainerName** | Pointer to **string** | Name of the maintainer. | [optional] 
**MaintainerId** | Pointer to **int32** | The Enlighten ID of the maintainer of this system. Defaults to current user&#39;s company ID. | [optional] 
**AuthorizedSubcontractors** | Pointer to [**[]GetPartnerActivationsResponseSystemsInnerAuthorizedSubcontractorsInner**](GetPartnerActivationsResponseSystemsInnerAuthorizedSubcontractorsInner.md) | List of sub-contractors of this system. | [optional] 
**Uri** | Pointer to **string** | URI for this activation. | [optional] 
**UpdatedAt** | Pointer to **int64** | Activation last updated timestamp. | [optional] 
**Reference** | Pointer to **string** | Identifier of this system as provided by the calling user&#39;s company. This attribute is not present if the calling user&#39;s company does not have a reference for this system. | [optional] 
**OtherReferences** | Pointer to **[]string** | Identifiers assigned to this activation by other companies which have access to it. This attribute is not present if there are no other references for this system. | [optional] 
**AllowPublicAccess** | Pointer to **bool** | When true, the system will be eligible to appear in the public systems lists of Enphase and the system&#39;s installer. Default true. | [optional] 
**InterconnectDate** | Pointer to **string** | When the system was approved to connect to the grid. | [optional] 
**InstallerSupportEmail** | Pointer to **string** | Installer support email. | [optional] 
**Source** | Pointer to [**SystemSourceEnum**](SystemSourceEnum.md) |  | [optional] 
**ArrayType** | Pointer to [**SystemArrayTypeEnum**](SystemArrayTypeEnum.md) |  | [optional] 
**AttachmentType** | Pointer to [**SystemAttachmentTypeEnum**](SystemAttachmentTypeEnum.md) |  | [optional] 
**EnsembleEnvoy** | Pointer to **string** | Specifies serial number of ensemble envoy in multi envoy system. | [optional] 
**ProductionMode** | Pointer to [**SystemProductionModeEnum**](SystemProductionModeEnum.md) |  | [optional] 
**GridProfile** | Pointer to **string** | Grid profile to set on this system&#39;s microinverters. See GridProfiles API for how to retrieve a list of known profiles. | [optional] 
**RequestedProfile** | Pointer to **string** |  | [optional] 
**RequestedReportFreq** | Pointer to **string** |  | [optional] 
**Voltage** | Pointer to **string** | Supported voltage/phase associated with a commercial system inside North America. If system type is not commercial, or if the installer exists &amp; installer&#39;s country is not inside North America, or if the system&#39;s country is not inside North America, then the voltage value would be null. | [optional] 
**EnvoySerialNumbers** | Pointer to **[]string** | A list of Envoys installed on this system. | [optional] 
**ExpectedEnvoyCount** | Pointer to **int32** | Total envoys the system is supposed to have. | [optional] 
**ExpectedPcuCount** | Pointer to **int32** | Total PCUs the system is supposed to have. | [optional] 
**ExpectedNsrCount** | Pointer to **int32** | Total nsrs the system is supposed to have. | [optional] 
**ExpectedMeterCount** | Pointer to **int32** | Total meters the system is supposed to have. | [optional] 
**ExpectedEnchargeCount** | Pointer to **int32** | Total encharges the system is supposed to have. | [optional] 
**ExpectedEnpowerCount** | Pointer to **int32** | Total enpowers the system is supposed to have. | [optional] 
**PvManufacturer** | Pointer to **int32** | Enlighten ID of the PV manufacturer associated with the PV model installed on the system. See PvManufacturers for how to retrieve PV manufacturer IDs. | [optional] 
**PvManufacturerName** | Pointer to **string** | Name of the Custom PV module manufacturer associated with the system. | [optional] 
**PvModel** | Pointer to **int32** | Enlighten ID of the PV model installed on the system. See PvManufacturers and PvModels for how to retrieve PV model IDs. | [optional] 
**PvModelName** | Pointer to **string** | Name of the Custom PV module model associated with the system. | [optional] 
**PvModulePowerRating** | Pointer to **float32** | Power rating (in W) of the PV module installed on the system. | [optional] 
**PvModuleType** | Pointer to **int32** | Type ID of the PV module installed on the system. 1 -&gt; &#39;Mono-facial&#39;, 2 -&gt; &#39;Bi-facial&#39;, 3 -&gt; &#39;Split cell&#39;, 4 -&gt; &#39;Other&#39;. | [optional] 
**Encharge** | Pointer to [**[]ActivationEnchargeInner**](ActivationEnchargeInner.md) | Encharge detail. | [optional] 
**Enpower** | Pointer to [**[]ActivationEnpowerInner**](ActivationEnpowerInner.md) | Enpower detail. | [optional] 
**Address** | Pointer to [**Address**](Address.md) |  | [optional] 

## Methods

### NewActivation

`func NewActivation() *Activation`

NewActivation instantiates a new Activation object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewActivationWithDefaults

`func NewActivationWithDefaults() *Activation`

NewActivationWithDefaults instantiates a new Activation object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetSystemId

`func (o *Activation) GetSystemId() int32`

GetSystemId returns the SystemId field if non-nil, zero value otherwise.

### GetSystemIdOk

`func (o *Activation) GetSystemIdOk() (*int32, bool)`

GetSystemIdOk returns a tuple with the SystemId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSystemId

`func (o *Activation) SetSystemId(v int32)`

SetSystemId sets SystemId field to given value.

### HasSystemId

`func (o *Activation) HasSystemId() bool`

HasSystemId returns a boolean if a field has been set.

### GetSystemName

`func (o *Activation) GetSystemName() string`

GetSystemName returns the SystemName field if non-nil, zero value otherwise.

### GetSystemNameOk

`func (o *Activation) GetSystemNameOk() (*string, bool)`

GetSystemNameOk returns a tuple with the SystemName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSystemName

`func (o *Activation) SetSystemName(v string)`

SetSystemName sets SystemName field to given value.

### HasSystemName

`func (o *Activation) HasSystemName() bool`

HasSystemName returns a boolean if a field has been set.

### GetSystemType

`func (o *Activation) GetSystemType() SystemTypeEnum`

GetSystemType returns the SystemType field if non-nil, zero value otherwise.

### GetSystemTypeOk

`func (o *Activation) GetSystemTypeOk() (*SystemTypeEnum, bool)`

GetSystemTypeOk returns a tuple with the SystemType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSystemType

`func (o *Activation) SetSystemType(v SystemTypeEnum)`

SetSystemType sets SystemType field to given value.

### HasSystemType

`func (o *Activation) HasSystemType() bool`

HasSystemType returns a boolean if a field has been set.

### GetStatus

`func (o *Activation) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *Activation) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *Activation) SetStatus(v string)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *Activation) HasStatus() bool`

HasStatus returns a boolean if a field has been set.

### GetTimezone

`func (o *Activation) GetTimezone() string`

GetTimezone returns the Timezone field if non-nil, zero value otherwise.

### GetTimezoneOk

`func (o *Activation) GetTimezoneOk() (*string, bool)`

GetTimezoneOk returns a tuple with the Timezone field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTimezone

`func (o *Activation) SetTimezone(v string)`

SetTimezone sets Timezone field to given value.

### HasTimezone

`func (o *Activation) HasTimezone() bool`

HasTimezone returns a boolean if a field has been set.

### GetStage

`func (o *Activation) GetStage() int32`

GetStage returns the Stage field if non-nil, zero value otherwise.

### GetStageOk

`func (o *Activation) GetStageOk() (*int32, bool)`

GetStageOk returns a tuple with the Stage field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStage

`func (o *Activation) SetStage(v int32)`

SetStage sets Stage field to given value.

### HasStage

`func (o *Activation) HasStage() bool`

HasStage returns a boolean if a field has been set.

### GetInternetConnection

`func (o *Activation) GetInternetConnection() SystemInternetConnectionEnum`

GetInternetConnection returns the InternetConnection field if non-nil, zero value otherwise.

### GetInternetConnectionOk

`func (o *Activation) GetInternetConnectionOk() (*SystemInternetConnectionEnum, bool)`

GetInternetConnectionOk returns a tuple with the InternetConnection field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInternetConnection

`func (o *Activation) SetInternetConnection(v SystemInternetConnectionEnum)`

SetInternetConnection sets InternetConnection field to given value.

### HasInternetConnection

`func (o *Activation) HasInternetConnection() bool`

HasInternetConnection returns a boolean if a field has been set.

### GetLease

`func (o *Activation) GetLease() bool`

GetLease returns the Lease field if non-nil, zero value otherwise.

### GetLeaseOk

`func (o *Activation) GetLeaseOk() (*bool, bool)`

GetLeaseOk returns a tuple with the Lease field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLease

`func (o *Activation) SetLease(v bool)`

SetLease sets Lease field to given value.

### HasLease

`func (o *Activation) HasLease() bool`

HasLease returns a boolean if a field has been set.

### GetOperational

`func (o *Activation) GetOperational() bool`

GetOperational returns the Operational field if non-nil, zero value otherwise.

### GetOperationalOk

`func (o *Activation) GetOperationalOk() (*bool, bool)`

GetOperationalOk returns a tuple with the Operational field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOperational

`func (o *Activation) SetOperational(v bool)`

SetOperational sets Operational field to given value.

### HasOperational

`func (o *Activation) HasOperational() bool`

HasOperational returns a boolean if a field has been set.

### GetOwner

`func (o *Activation) GetOwner() ActivationOwner`

GetOwner returns the Owner field if non-nil, zero value otherwise.

### GetOwnerOk

`func (o *Activation) GetOwnerOk() (*ActivationOwner, bool)`

GetOwnerOk returns a tuple with the Owner field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOwner

`func (o *Activation) SetOwner(v ActivationOwner)`

SetOwner sets Owner field to given value.

### HasOwner

`func (o *Activation) HasOwner() bool`

HasOwner returns a boolean if a field has been set.

### GetOwnerId

`func (o *Activation) GetOwnerId() int32`

GetOwnerId returns the OwnerId field if non-nil, zero value otherwise.

### GetOwnerIdOk

`func (o *Activation) GetOwnerIdOk() (*int32, bool)`

GetOwnerIdOk returns a tuple with the OwnerId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOwnerId

`func (o *Activation) SetOwnerId(v int32)`

SetOwnerId sets OwnerId field to given value.

### HasOwnerId

`func (o *Activation) HasOwnerId() bool`

HasOwnerId returns a boolean if a field has been set.

### GetHost

`func (o *Activation) GetHost() ActivationHost`

GetHost returns the Host field if non-nil, zero value otherwise.

### GetHostOk

`func (o *Activation) GetHostOk() (*ActivationHost, bool)`

GetHostOk returns a tuple with the Host field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHost

`func (o *Activation) SetHost(v ActivationHost)`

SetHost sets Host field to given value.

### HasHost

`func (o *Activation) HasHost() bool`

HasHost returns a boolean if a field has been set.

### GetHostId

`func (o *Activation) GetHostId() int32`

GetHostId returns the HostId field if non-nil, zero value otherwise.

### GetHostIdOk

`func (o *Activation) GetHostIdOk() (*int32, bool)`

GetHostIdOk returns a tuple with the HostId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHostId

`func (o *Activation) SetHostId(v int32)`

SetHostId sets HostId field to given value.

### HasHostId

`func (o *Activation) HasHostId() bool`

HasHostId returns a boolean if a field has been set.

### GetInstallerName

`func (o *Activation) GetInstallerName() string`

GetInstallerName returns the InstallerName field if non-nil, zero value otherwise.

### GetInstallerNameOk

`func (o *Activation) GetInstallerNameOk() (*string, bool)`

GetInstallerNameOk returns a tuple with the InstallerName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInstallerName

`func (o *Activation) SetInstallerName(v string)`

SetInstallerName sets InstallerName field to given value.

### HasInstallerName

`func (o *Activation) HasInstallerName() bool`

HasInstallerName returns a boolean if a field has been set.

### GetInstallerId

`func (o *Activation) GetInstallerId() int32`

GetInstallerId returns the InstallerId field if non-nil, zero value otherwise.

### GetInstallerIdOk

`func (o *Activation) GetInstallerIdOk() (*int32, bool)`

GetInstallerIdOk returns a tuple with the InstallerId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInstallerId

`func (o *Activation) SetInstallerId(v int32)`

SetInstallerId sets InstallerId field to given value.

### HasInstallerId

`func (o *Activation) HasInstallerId() bool`

HasInstallerId returns a boolean if a field has been set.

### GetMaintainerName

`func (o *Activation) GetMaintainerName() string`

GetMaintainerName returns the MaintainerName field if non-nil, zero value otherwise.

### GetMaintainerNameOk

`func (o *Activation) GetMaintainerNameOk() (*string, bool)`

GetMaintainerNameOk returns a tuple with the MaintainerName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMaintainerName

`func (o *Activation) SetMaintainerName(v string)`

SetMaintainerName sets MaintainerName field to given value.

### HasMaintainerName

`func (o *Activation) HasMaintainerName() bool`

HasMaintainerName returns a boolean if a field has been set.

### GetMaintainerId

`func (o *Activation) GetMaintainerId() int32`

GetMaintainerId returns the MaintainerId field if non-nil, zero value otherwise.

### GetMaintainerIdOk

`func (o *Activation) GetMaintainerIdOk() (*int32, bool)`

GetMaintainerIdOk returns a tuple with the MaintainerId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMaintainerId

`func (o *Activation) SetMaintainerId(v int32)`

SetMaintainerId sets MaintainerId field to given value.

### HasMaintainerId

`func (o *Activation) HasMaintainerId() bool`

HasMaintainerId returns a boolean if a field has been set.

### GetAuthorizedSubcontractors

`func (o *Activation) GetAuthorizedSubcontractors() []GetPartnerActivationsResponseSystemsInnerAuthorizedSubcontractorsInner`

GetAuthorizedSubcontractors returns the AuthorizedSubcontractors field if non-nil, zero value otherwise.

### GetAuthorizedSubcontractorsOk

`func (o *Activation) GetAuthorizedSubcontractorsOk() (*[]GetPartnerActivationsResponseSystemsInnerAuthorizedSubcontractorsInner, bool)`

GetAuthorizedSubcontractorsOk returns a tuple with the AuthorizedSubcontractors field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAuthorizedSubcontractors

`func (o *Activation) SetAuthorizedSubcontractors(v []GetPartnerActivationsResponseSystemsInnerAuthorizedSubcontractorsInner)`

SetAuthorizedSubcontractors sets AuthorizedSubcontractors field to given value.

### HasAuthorizedSubcontractors

`func (o *Activation) HasAuthorizedSubcontractors() bool`

HasAuthorizedSubcontractors returns a boolean if a field has been set.

### GetUri

`func (o *Activation) GetUri() string`

GetUri returns the Uri field if non-nil, zero value otherwise.

### GetUriOk

`func (o *Activation) GetUriOk() (*string, bool)`

GetUriOk returns a tuple with the Uri field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUri

`func (o *Activation) SetUri(v string)`

SetUri sets Uri field to given value.

### HasUri

`func (o *Activation) HasUri() bool`

HasUri returns a boolean if a field has been set.

### GetUpdatedAt

`func (o *Activation) GetUpdatedAt() int64`

GetUpdatedAt returns the UpdatedAt field if non-nil, zero value otherwise.

### GetUpdatedAtOk

`func (o *Activation) GetUpdatedAtOk() (*int64, bool)`

GetUpdatedAtOk returns a tuple with the UpdatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUpdatedAt

`func (o *Activation) SetUpdatedAt(v int64)`

SetUpdatedAt sets UpdatedAt field to given value.

### HasUpdatedAt

`func (o *Activation) HasUpdatedAt() bool`

HasUpdatedAt returns a boolean if a field has been set.

### GetReference

`func (o *Activation) GetReference() string`

GetReference returns the Reference field if non-nil, zero value otherwise.

### GetReferenceOk

`func (o *Activation) GetReferenceOk() (*string, bool)`

GetReferenceOk returns a tuple with the Reference field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReference

`func (o *Activation) SetReference(v string)`

SetReference sets Reference field to given value.

### HasReference

`func (o *Activation) HasReference() bool`

HasReference returns a boolean if a field has been set.

### GetOtherReferences

`func (o *Activation) GetOtherReferences() []string`

GetOtherReferences returns the OtherReferences field if non-nil, zero value otherwise.

### GetOtherReferencesOk

`func (o *Activation) GetOtherReferencesOk() (*[]string, bool)`

GetOtherReferencesOk returns a tuple with the OtherReferences field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOtherReferences

`func (o *Activation) SetOtherReferences(v []string)`

SetOtherReferences sets OtherReferences field to given value.

### HasOtherReferences

`func (o *Activation) HasOtherReferences() bool`

HasOtherReferences returns a boolean if a field has been set.

### GetAllowPublicAccess

`func (o *Activation) GetAllowPublicAccess() bool`

GetAllowPublicAccess returns the AllowPublicAccess field if non-nil, zero value otherwise.

### GetAllowPublicAccessOk

`func (o *Activation) GetAllowPublicAccessOk() (*bool, bool)`

GetAllowPublicAccessOk returns a tuple with the AllowPublicAccess field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAllowPublicAccess

`func (o *Activation) SetAllowPublicAccess(v bool)`

SetAllowPublicAccess sets AllowPublicAccess field to given value.

### HasAllowPublicAccess

`func (o *Activation) HasAllowPublicAccess() bool`

HasAllowPublicAccess returns a boolean if a field has been set.

### GetInterconnectDate

`func (o *Activation) GetInterconnectDate() string`

GetInterconnectDate returns the InterconnectDate field if non-nil, zero value otherwise.

### GetInterconnectDateOk

`func (o *Activation) GetInterconnectDateOk() (*string, bool)`

GetInterconnectDateOk returns a tuple with the InterconnectDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInterconnectDate

`func (o *Activation) SetInterconnectDate(v string)`

SetInterconnectDate sets InterconnectDate field to given value.

### HasInterconnectDate

`func (o *Activation) HasInterconnectDate() bool`

HasInterconnectDate returns a boolean if a field has been set.

### GetInstallerSupportEmail

`func (o *Activation) GetInstallerSupportEmail() string`

GetInstallerSupportEmail returns the InstallerSupportEmail field if non-nil, zero value otherwise.

### GetInstallerSupportEmailOk

`func (o *Activation) GetInstallerSupportEmailOk() (*string, bool)`

GetInstallerSupportEmailOk returns a tuple with the InstallerSupportEmail field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInstallerSupportEmail

`func (o *Activation) SetInstallerSupportEmail(v string)`

SetInstallerSupportEmail sets InstallerSupportEmail field to given value.

### HasInstallerSupportEmail

`func (o *Activation) HasInstallerSupportEmail() bool`

HasInstallerSupportEmail returns a boolean if a field has been set.

### GetSource

`func (o *Activation) GetSource() SystemSourceEnum`

GetSource returns the Source field if non-nil, zero value otherwise.

### GetSourceOk

`func (o *Activation) GetSourceOk() (*SystemSourceEnum, bool)`

GetSourceOk returns a tuple with the Source field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSource

`func (o *Activation) SetSource(v SystemSourceEnum)`

SetSource sets Source field to given value.

### HasSource

`func (o *Activation) HasSource() bool`

HasSource returns a boolean if a field has been set.

### GetArrayType

`func (o *Activation) GetArrayType() SystemArrayTypeEnum`

GetArrayType returns the ArrayType field if non-nil, zero value otherwise.

### GetArrayTypeOk

`func (o *Activation) GetArrayTypeOk() (*SystemArrayTypeEnum, bool)`

GetArrayTypeOk returns a tuple with the ArrayType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetArrayType

`func (o *Activation) SetArrayType(v SystemArrayTypeEnum)`

SetArrayType sets ArrayType field to given value.

### HasArrayType

`func (o *Activation) HasArrayType() bool`

HasArrayType returns a boolean if a field has been set.

### GetAttachmentType

`func (o *Activation) GetAttachmentType() SystemAttachmentTypeEnum`

GetAttachmentType returns the AttachmentType field if non-nil, zero value otherwise.

### GetAttachmentTypeOk

`func (o *Activation) GetAttachmentTypeOk() (*SystemAttachmentTypeEnum, bool)`

GetAttachmentTypeOk returns a tuple with the AttachmentType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttachmentType

`func (o *Activation) SetAttachmentType(v SystemAttachmentTypeEnum)`

SetAttachmentType sets AttachmentType field to given value.

### HasAttachmentType

`func (o *Activation) HasAttachmentType() bool`

HasAttachmentType returns a boolean if a field has been set.

### GetEnsembleEnvoy

`func (o *Activation) GetEnsembleEnvoy() string`

GetEnsembleEnvoy returns the EnsembleEnvoy field if non-nil, zero value otherwise.

### GetEnsembleEnvoyOk

`func (o *Activation) GetEnsembleEnvoyOk() (*string, bool)`

GetEnsembleEnvoyOk returns a tuple with the EnsembleEnvoy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEnsembleEnvoy

`func (o *Activation) SetEnsembleEnvoy(v string)`

SetEnsembleEnvoy sets EnsembleEnvoy field to given value.

### HasEnsembleEnvoy

`func (o *Activation) HasEnsembleEnvoy() bool`

HasEnsembleEnvoy returns a boolean if a field has been set.

### GetProductionMode

`func (o *Activation) GetProductionMode() SystemProductionModeEnum`

GetProductionMode returns the ProductionMode field if non-nil, zero value otherwise.

### GetProductionModeOk

`func (o *Activation) GetProductionModeOk() (*SystemProductionModeEnum, bool)`

GetProductionModeOk returns a tuple with the ProductionMode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProductionMode

`func (o *Activation) SetProductionMode(v SystemProductionModeEnum)`

SetProductionMode sets ProductionMode field to given value.

### HasProductionMode

`func (o *Activation) HasProductionMode() bool`

HasProductionMode returns a boolean if a field has been set.

### GetGridProfile

`func (o *Activation) GetGridProfile() string`

GetGridProfile returns the GridProfile field if non-nil, zero value otherwise.

### GetGridProfileOk

`func (o *Activation) GetGridProfileOk() (*string, bool)`

GetGridProfileOk returns a tuple with the GridProfile field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGridProfile

`func (o *Activation) SetGridProfile(v string)`

SetGridProfile sets GridProfile field to given value.

### HasGridProfile

`func (o *Activation) HasGridProfile() bool`

HasGridProfile returns a boolean if a field has been set.

### GetRequestedProfile

`func (o *Activation) GetRequestedProfile() string`

GetRequestedProfile returns the RequestedProfile field if non-nil, zero value otherwise.

### GetRequestedProfileOk

`func (o *Activation) GetRequestedProfileOk() (*string, bool)`

GetRequestedProfileOk returns a tuple with the RequestedProfile field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequestedProfile

`func (o *Activation) SetRequestedProfile(v string)`

SetRequestedProfile sets RequestedProfile field to given value.

### HasRequestedProfile

`func (o *Activation) HasRequestedProfile() bool`

HasRequestedProfile returns a boolean if a field has been set.

### GetRequestedReportFreq

`func (o *Activation) GetRequestedReportFreq() string`

GetRequestedReportFreq returns the RequestedReportFreq field if non-nil, zero value otherwise.

### GetRequestedReportFreqOk

`func (o *Activation) GetRequestedReportFreqOk() (*string, bool)`

GetRequestedReportFreqOk returns a tuple with the RequestedReportFreq field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequestedReportFreq

`func (o *Activation) SetRequestedReportFreq(v string)`

SetRequestedReportFreq sets RequestedReportFreq field to given value.

### HasRequestedReportFreq

`func (o *Activation) HasRequestedReportFreq() bool`

HasRequestedReportFreq returns a boolean if a field has been set.

### GetVoltage

`func (o *Activation) GetVoltage() string`

GetVoltage returns the Voltage field if non-nil, zero value otherwise.

### GetVoltageOk

`func (o *Activation) GetVoltageOk() (*string, bool)`

GetVoltageOk returns a tuple with the Voltage field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetVoltage

`func (o *Activation) SetVoltage(v string)`

SetVoltage sets Voltage field to given value.

### HasVoltage

`func (o *Activation) HasVoltage() bool`

HasVoltage returns a boolean if a field has been set.

### GetEnvoySerialNumbers

`func (o *Activation) GetEnvoySerialNumbers() []string`

GetEnvoySerialNumbers returns the EnvoySerialNumbers field if non-nil, zero value otherwise.

### GetEnvoySerialNumbersOk

`func (o *Activation) GetEnvoySerialNumbersOk() (*[]string, bool)`

GetEnvoySerialNumbersOk returns a tuple with the EnvoySerialNumbers field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEnvoySerialNumbers

`func (o *Activation) SetEnvoySerialNumbers(v []string)`

SetEnvoySerialNumbers sets EnvoySerialNumbers field to given value.

### HasEnvoySerialNumbers

`func (o *Activation) HasEnvoySerialNumbers() bool`

HasEnvoySerialNumbers returns a boolean if a field has been set.

### GetExpectedEnvoyCount

`func (o *Activation) GetExpectedEnvoyCount() int32`

GetExpectedEnvoyCount returns the ExpectedEnvoyCount field if non-nil, zero value otherwise.

### GetExpectedEnvoyCountOk

`func (o *Activation) GetExpectedEnvoyCountOk() (*int32, bool)`

GetExpectedEnvoyCountOk returns a tuple with the ExpectedEnvoyCount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExpectedEnvoyCount

`func (o *Activation) SetExpectedEnvoyCount(v int32)`

SetExpectedEnvoyCount sets ExpectedEnvoyCount field to given value.

### HasExpectedEnvoyCount

`func (o *Activation) HasExpectedEnvoyCount() bool`

HasExpectedEnvoyCount returns a boolean if a field has been set.

### GetExpectedPcuCount

`func (o *Activation) GetExpectedPcuCount() int32`

GetExpectedPcuCount returns the ExpectedPcuCount field if non-nil, zero value otherwise.

### GetExpectedPcuCountOk

`func (o *Activation) GetExpectedPcuCountOk() (*int32, bool)`

GetExpectedPcuCountOk returns a tuple with the ExpectedPcuCount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExpectedPcuCount

`func (o *Activation) SetExpectedPcuCount(v int32)`

SetExpectedPcuCount sets ExpectedPcuCount field to given value.

### HasExpectedPcuCount

`func (o *Activation) HasExpectedPcuCount() bool`

HasExpectedPcuCount returns a boolean if a field has been set.

### GetExpectedNsrCount

`func (o *Activation) GetExpectedNsrCount() int32`

GetExpectedNsrCount returns the ExpectedNsrCount field if non-nil, zero value otherwise.

### GetExpectedNsrCountOk

`func (o *Activation) GetExpectedNsrCountOk() (*int32, bool)`

GetExpectedNsrCountOk returns a tuple with the ExpectedNsrCount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExpectedNsrCount

`func (o *Activation) SetExpectedNsrCount(v int32)`

SetExpectedNsrCount sets ExpectedNsrCount field to given value.

### HasExpectedNsrCount

`func (o *Activation) HasExpectedNsrCount() bool`

HasExpectedNsrCount returns a boolean if a field has been set.

### GetExpectedMeterCount

`func (o *Activation) GetExpectedMeterCount() int32`

GetExpectedMeterCount returns the ExpectedMeterCount field if non-nil, zero value otherwise.

### GetExpectedMeterCountOk

`func (o *Activation) GetExpectedMeterCountOk() (*int32, bool)`

GetExpectedMeterCountOk returns a tuple with the ExpectedMeterCount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExpectedMeterCount

`func (o *Activation) SetExpectedMeterCount(v int32)`

SetExpectedMeterCount sets ExpectedMeterCount field to given value.

### HasExpectedMeterCount

`func (o *Activation) HasExpectedMeterCount() bool`

HasExpectedMeterCount returns a boolean if a field has been set.

### GetExpectedEnchargeCount

`func (o *Activation) GetExpectedEnchargeCount() int32`

GetExpectedEnchargeCount returns the ExpectedEnchargeCount field if non-nil, zero value otherwise.

### GetExpectedEnchargeCountOk

`func (o *Activation) GetExpectedEnchargeCountOk() (*int32, bool)`

GetExpectedEnchargeCountOk returns a tuple with the ExpectedEnchargeCount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExpectedEnchargeCount

`func (o *Activation) SetExpectedEnchargeCount(v int32)`

SetExpectedEnchargeCount sets ExpectedEnchargeCount field to given value.

### HasExpectedEnchargeCount

`func (o *Activation) HasExpectedEnchargeCount() bool`

HasExpectedEnchargeCount returns a boolean if a field has been set.

### GetExpectedEnpowerCount

`func (o *Activation) GetExpectedEnpowerCount() int32`

GetExpectedEnpowerCount returns the ExpectedEnpowerCount field if non-nil, zero value otherwise.

### GetExpectedEnpowerCountOk

`func (o *Activation) GetExpectedEnpowerCountOk() (*int32, bool)`

GetExpectedEnpowerCountOk returns a tuple with the ExpectedEnpowerCount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExpectedEnpowerCount

`func (o *Activation) SetExpectedEnpowerCount(v int32)`

SetExpectedEnpowerCount sets ExpectedEnpowerCount field to given value.

### HasExpectedEnpowerCount

`func (o *Activation) HasExpectedEnpowerCount() bool`

HasExpectedEnpowerCount returns a boolean if a field has been set.

### GetPvManufacturer

`func (o *Activation) GetPvManufacturer() int32`

GetPvManufacturer returns the PvManufacturer field if non-nil, zero value otherwise.

### GetPvManufacturerOk

`func (o *Activation) GetPvManufacturerOk() (*int32, bool)`

GetPvManufacturerOk returns a tuple with the PvManufacturer field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPvManufacturer

`func (o *Activation) SetPvManufacturer(v int32)`

SetPvManufacturer sets PvManufacturer field to given value.

### HasPvManufacturer

`func (o *Activation) HasPvManufacturer() bool`

HasPvManufacturer returns a boolean if a field has been set.

### GetPvManufacturerName

`func (o *Activation) GetPvManufacturerName() string`

GetPvManufacturerName returns the PvManufacturerName field if non-nil, zero value otherwise.

### GetPvManufacturerNameOk

`func (o *Activation) GetPvManufacturerNameOk() (*string, bool)`

GetPvManufacturerNameOk returns a tuple with the PvManufacturerName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPvManufacturerName

`func (o *Activation) SetPvManufacturerName(v string)`

SetPvManufacturerName sets PvManufacturerName field to given value.

### HasPvManufacturerName

`func (o *Activation) HasPvManufacturerName() bool`

HasPvManufacturerName returns a boolean if a field has been set.

### GetPvModel

`func (o *Activation) GetPvModel() int32`

GetPvModel returns the PvModel field if non-nil, zero value otherwise.

### GetPvModelOk

`func (o *Activation) GetPvModelOk() (*int32, bool)`

GetPvModelOk returns a tuple with the PvModel field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPvModel

`func (o *Activation) SetPvModel(v int32)`

SetPvModel sets PvModel field to given value.

### HasPvModel

`func (o *Activation) HasPvModel() bool`

HasPvModel returns a boolean if a field has been set.

### GetPvModelName

`func (o *Activation) GetPvModelName() string`

GetPvModelName returns the PvModelName field if non-nil, zero value otherwise.

### GetPvModelNameOk

`func (o *Activation) GetPvModelNameOk() (*string, bool)`

GetPvModelNameOk returns a tuple with the PvModelName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPvModelName

`func (o *Activation) SetPvModelName(v string)`

SetPvModelName sets PvModelName field to given value.

### HasPvModelName

`func (o *Activation) HasPvModelName() bool`

HasPvModelName returns a boolean if a field has been set.

### GetPvModulePowerRating

`func (o *Activation) GetPvModulePowerRating() float32`

GetPvModulePowerRating returns the PvModulePowerRating field if non-nil, zero value otherwise.

### GetPvModulePowerRatingOk

`func (o *Activation) GetPvModulePowerRatingOk() (*float32, bool)`

GetPvModulePowerRatingOk returns a tuple with the PvModulePowerRating field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPvModulePowerRating

`func (o *Activation) SetPvModulePowerRating(v float32)`

SetPvModulePowerRating sets PvModulePowerRating field to given value.

### HasPvModulePowerRating

`func (o *Activation) HasPvModulePowerRating() bool`

HasPvModulePowerRating returns a boolean if a field has been set.

### GetPvModuleType

`func (o *Activation) GetPvModuleType() int32`

GetPvModuleType returns the PvModuleType field if non-nil, zero value otherwise.

### GetPvModuleTypeOk

`func (o *Activation) GetPvModuleTypeOk() (*int32, bool)`

GetPvModuleTypeOk returns a tuple with the PvModuleType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPvModuleType

`func (o *Activation) SetPvModuleType(v int32)`

SetPvModuleType sets PvModuleType field to given value.

### HasPvModuleType

`func (o *Activation) HasPvModuleType() bool`

HasPvModuleType returns a boolean if a field has been set.

### GetEncharge

`func (o *Activation) GetEncharge() []ActivationEnchargeInner`

GetEncharge returns the Encharge field if non-nil, zero value otherwise.

### GetEnchargeOk

`func (o *Activation) GetEnchargeOk() (*[]ActivationEnchargeInner, bool)`

GetEnchargeOk returns a tuple with the Encharge field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEncharge

`func (o *Activation) SetEncharge(v []ActivationEnchargeInner)`

SetEncharge sets Encharge field to given value.

### HasEncharge

`func (o *Activation) HasEncharge() bool`

HasEncharge returns a boolean if a field has been set.

### GetEnpower

`func (o *Activation) GetEnpower() []ActivationEnpowerInner`

GetEnpower returns the Enpower field if non-nil, zero value otherwise.

### GetEnpowerOk

`func (o *Activation) GetEnpowerOk() (*[]ActivationEnpowerInner, bool)`

GetEnpowerOk returns a tuple with the Enpower field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEnpower

`func (o *Activation) SetEnpower(v []ActivationEnpowerInner)`

SetEnpower sets Enpower field to given value.

### HasEnpower

`func (o *Activation) HasEnpower() bool`

HasEnpower returns a boolean if a field has been set.

### GetAddress

`func (o *Activation) GetAddress() Address`

GetAddress returns the Address field if non-nil, zero value otherwise.

### GetAddressOk

`func (o *Activation) GetAddressOk() (*Address, bool)`

GetAddressOk returns a tuple with the Address field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAddress

`func (o *Activation) SetAddress(v Address)`

SetAddress sets Address field to given value.

### HasAddress

`func (o *Activation) HasAddress() bool`

HasAddress returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



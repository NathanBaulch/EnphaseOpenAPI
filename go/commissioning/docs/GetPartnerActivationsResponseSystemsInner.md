# GetPartnerActivationsResponseSystemsInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**SystemId** | Pointer to **int32** | Enlighten ID of this system. System-generated. | [optional] 
**SystemName** | Pointer to **string** | Name of the system. | [optional] 
**SystemType** | Pointer to [**SystemTypeEnum**](SystemTypeEnum.md) |  | [optional] 
**Status** | Pointer to **string** | System&#39;s status. | [optional] 
**Stage** | Pointer to **int32** | What stage of the activation process this activation is in. System-generated. | [optional] 
**InternetConnection** | Pointer to [**SystemInternetConnectionEnum**](SystemInternetConnectionEnum.md) |  | [optional] 
**Lease** | Pointer to **bool** | Whether the system is leased. Default false. | [optional] 
**Operational** | Pointer to **bool** | Whether this system is permitted to operate. Default true. | [optional] 
**Owner** | Pointer to **string** | Name of the system owner. Owner must be an Enlighten user. If the user of the API is a self-installer, the owner must be himself. | [optional] 
**OwnerId** | Pointer to **int32** | Enlighten ID of this system owner. System-generated. | [optional] 
**Host** | Pointer to **string** | Name of the system host. Please see \&quot;Specifying an Owner and Lease Arrangement\&quot;, above, for more information. | [optional] 
**HostId** | Pointer to **int32** | Enlighten ID of this system host. System-generated. | [optional] 
**InstallerName** | Pointer to **string** | Name of the installer. | [optional] 
**InstallerId** | Pointer to **int32** | Enlighten ID of the installer of this system. Defaults to current user&#39;s company ID. | [optional] 
**Uri** | Pointer to **string** | URI for this activation. | [optional] 
**UpdatedAt** | Pointer to **int64** | Activation last updated timestamp. | [optional] 
**Reference** | Pointer to **string** | Identifier of this system as provided by the calling user&#39;s company. This attribute is not present if the calling user&#39;s company does not have a reference for this system. | [optional] 
**OtherReferences** | Pointer to **[]string** | Identifiers assigned to this activation by other companies which have access to it. This attribute is not present if there are no other references for this system. | [optional] 
**Address** | Pointer to [**Address**](Address.md) |  | [optional] 

## Methods

### NewGetPartnerActivationsResponseSystemsInner

`func NewGetPartnerActivationsResponseSystemsInner() *GetPartnerActivationsResponseSystemsInner`

NewGetPartnerActivationsResponseSystemsInner instantiates a new GetPartnerActivationsResponseSystemsInner object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewGetPartnerActivationsResponseSystemsInnerWithDefaults

`func NewGetPartnerActivationsResponseSystemsInnerWithDefaults() *GetPartnerActivationsResponseSystemsInner`

NewGetPartnerActivationsResponseSystemsInnerWithDefaults instantiates a new GetPartnerActivationsResponseSystemsInner object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetSystemId

`func (o *GetPartnerActivationsResponseSystemsInner) GetSystemId() int32`

GetSystemId returns the SystemId field if non-nil, zero value otherwise.

### GetSystemIdOk

`func (o *GetPartnerActivationsResponseSystemsInner) GetSystemIdOk() (*int32, bool)`

GetSystemIdOk returns a tuple with the SystemId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSystemId

`func (o *GetPartnerActivationsResponseSystemsInner) SetSystemId(v int32)`

SetSystemId sets SystemId field to given value.

### HasSystemId

`func (o *GetPartnerActivationsResponseSystemsInner) HasSystemId() bool`

HasSystemId returns a boolean if a field has been set.

### GetSystemName

`func (o *GetPartnerActivationsResponseSystemsInner) GetSystemName() string`

GetSystemName returns the SystemName field if non-nil, zero value otherwise.

### GetSystemNameOk

`func (o *GetPartnerActivationsResponseSystemsInner) GetSystemNameOk() (*string, bool)`

GetSystemNameOk returns a tuple with the SystemName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSystemName

`func (o *GetPartnerActivationsResponseSystemsInner) SetSystemName(v string)`

SetSystemName sets SystemName field to given value.

### HasSystemName

`func (o *GetPartnerActivationsResponseSystemsInner) HasSystemName() bool`

HasSystemName returns a boolean if a field has been set.

### GetSystemType

`func (o *GetPartnerActivationsResponseSystemsInner) GetSystemType() SystemTypeEnum`

GetSystemType returns the SystemType field if non-nil, zero value otherwise.

### GetSystemTypeOk

`func (o *GetPartnerActivationsResponseSystemsInner) GetSystemTypeOk() (*SystemTypeEnum, bool)`

GetSystemTypeOk returns a tuple with the SystemType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSystemType

`func (o *GetPartnerActivationsResponseSystemsInner) SetSystemType(v SystemTypeEnum)`

SetSystemType sets SystemType field to given value.

### HasSystemType

`func (o *GetPartnerActivationsResponseSystemsInner) HasSystemType() bool`

HasSystemType returns a boolean if a field has been set.

### GetStatus

`func (o *GetPartnerActivationsResponseSystemsInner) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *GetPartnerActivationsResponseSystemsInner) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *GetPartnerActivationsResponseSystemsInner) SetStatus(v string)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *GetPartnerActivationsResponseSystemsInner) HasStatus() bool`

HasStatus returns a boolean if a field has been set.

### GetStage

`func (o *GetPartnerActivationsResponseSystemsInner) GetStage() int32`

GetStage returns the Stage field if non-nil, zero value otherwise.

### GetStageOk

`func (o *GetPartnerActivationsResponseSystemsInner) GetStageOk() (*int32, bool)`

GetStageOk returns a tuple with the Stage field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStage

`func (o *GetPartnerActivationsResponseSystemsInner) SetStage(v int32)`

SetStage sets Stage field to given value.

### HasStage

`func (o *GetPartnerActivationsResponseSystemsInner) HasStage() bool`

HasStage returns a boolean if a field has been set.

### GetInternetConnection

`func (o *GetPartnerActivationsResponseSystemsInner) GetInternetConnection() SystemInternetConnectionEnum`

GetInternetConnection returns the InternetConnection field if non-nil, zero value otherwise.

### GetInternetConnectionOk

`func (o *GetPartnerActivationsResponseSystemsInner) GetInternetConnectionOk() (*SystemInternetConnectionEnum, bool)`

GetInternetConnectionOk returns a tuple with the InternetConnection field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInternetConnection

`func (o *GetPartnerActivationsResponseSystemsInner) SetInternetConnection(v SystemInternetConnectionEnum)`

SetInternetConnection sets InternetConnection field to given value.

### HasInternetConnection

`func (o *GetPartnerActivationsResponseSystemsInner) HasInternetConnection() bool`

HasInternetConnection returns a boolean if a field has been set.

### GetLease

`func (o *GetPartnerActivationsResponseSystemsInner) GetLease() bool`

GetLease returns the Lease field if non-nil, zero value otherwise.

### GetLeaseOk

`func (o *GetPartnerActivationsResponseSystemsInner) GetLeaseOk() (*bool, bool)`

GetLeaseOk returns a tuple with the Lease field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLease

`func (o *GetPartnerActivationsResponseSystemsInner) SetLease(v bool)`

SetLease sets Lease field to given value.

### HasLease

`func (o *GetPartnerActivationsResponseSystemsInner) HasLease() bool`

HasLease returns a boolean if a field has been set.

### GetOperational

`func (o *GetPartnerActivationsResponseSystemsInner) GetOperational() bool`

GetOperational returns the Operational field if non-nil, zero value otherwise.

### GetOperationalOk

`func (o *GetPartnerActivationsResponseSystemsInner) GetOperationalOk() (*bool, bool)`

GetOperationalOk returns a tuple with the Operational field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOperational

`func (o *GetPartnerActivationsResponseSystemsInner) SetOperational(v bool)`

SetOperational sets Operational field to given value.

### HasOperational

`func (o *GetPartnerActivationsResponseSystemsInner) HasOperational() bool`

HasOperational returns a boolean if a field has been set.

### GetOwner

`func (o *GetPartnerActivationsResponseSystemsInner) GetOwner() string`

GetOwner returns the Owner field if non-nil, zero value otherwise.

### GetOwnerOk

`func (o *GetPartnerActivationsResponseSystemsInner) GetOwnerOk() (*string, bool)`

GetOwnerOk returns a tuple with the Owner field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOwner

`func (o *GetPartnerActivationsResponseSystemsInner) SetOwner(v string)`

SetOwner sets Owner field to given value.

### HasOwner

`func (o *GetPartnerActivationsResponseSystemsInner) HasOwner() bool`

HasOwner returns a boolean if a field has been set.

### GetOwnerId

`func (o *GetPartnerActivationsResponseSystemsInner) GetOwnerId() int32`

GetOwnerId returns the OwnerId field if non-nil, zero value otherwise.

### GetOwnerIdOk

`func (o *GetPartnerActivationsResponseSystemsInner) GetOwnerIdOk() (*int32, bool)`

GetOwnerIdOk returns a tuple with the OwnerId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOwnerId

`func (o *GetPartnerActivationsResponseSystemsInner) SetOwnerId(v int32)`

SetOwnerId sets OwnerId field to given value.

### HasOwnerId

`func (o *GetPartnerActivationsResponseSystemsInner) HasOwnerId() bool`

HasOwnerId returns a boolean if a field has been set.

### GetHost

`func (o *GetPartnerActivationsResponseSystemsInner) GetHost() string`

GetHost returns the Host field if non-nil, zero value otherwise.

### GetHostOk

`func (o *GetPartnerActivationsResponseSystemsInner) GetHostOk() (*string, bool)`

GetHostOk returns a tuple with the Host field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHost

`func (o *GetPartnerActivationsResponseSystemsInner) SetHost(v string)`

SetHost sets Host field to given value.

### HasHost

`func (o *GetPartnerActivationsResponseSystemsInner) HasHost() bool`

HasHost returns a boolean if a field has been set.

### GetHostId

`func (o *GetPartnerActivationsResponseSystemsInner) GetHostId() int32`

GetHostId returns the HostId field if non-nil, zero value otherwise.

### GetHostIdOk

`func (o *GetPartnerActivationsResponseSystemsInner) GetHostIdOk() (*int32, bool)`

GetHostIdOk returns a tuple with the HostId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHostId

`func (o *GetPartnerActivationsResponseSystemsInner) SetHostId(v int32)`

SetHostId sets HostId field to given value.

### HasHostId

`func (o *GetPartnerActivationsResponseSystemsInner) HasHostId() bool`

HasHostId returns a boolean if a field has been set.

### GetInstallerName

`func (o *GetPartnerActivationsResponseSystemsInner) GetInstallerName() string`

GetInstallerName returns the InstallerName field if non-nil, zero value otherwise.

### GetInstallerNameOk

`func (o *GetPartnerActivationsResponseSystemsInner) GetInstallerNameOk() (*string, bool)`

GetInstallerNameOk returns a tuple with the InstallerName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInstallerName

`func (o *GetPartnerActivationsResponseSystemsInner) SetInstallerName(v string)`

SetInstallerName sets InstallerName field to given value.

### HasInstallerName

`func (o *GetPartnerActivationsResponseSystemsInner) HasInstallerName() bool`

HasInstallerName returns a boolean if a field has been set.

### GetInstallerId

`func (o *GetPartnerActivationsResponseSystemsInner) GetInstallerId() int32`

GetInstallerId returns the InstallerId field if non-nil, zero value otherwise.

### GetInstallerIdOk

`func (o *GetPartnerActivationsResponseSystemsInner) GetInstallerIdOk() (*int32, bool)`

GetInstallerIdOk returns a tuple with the InstallerId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInstallerId

`func (o *GetPartnerActivationsResponseSystemsInner) SetInstallerId(v int32)`

SetInstallerId sets InstallerId field to given value.

### HasInstallerId

`func (o *GetPartnerActivationsResponseSystemsInner) HasInstallerId() bool`

HasInstallerId returns a boolean if a field has been set.

### GetUri

`func (o *GetPartnerActivationsResponseSystemsInner) GetUri() string`

GetUri returns the Uri field if non-nil, zero value otherwise.

### GetUriOk

`func (o *GetPartnerActivationsResponseSystemsInner) GetUriOk() (*string, bool)`

GetUriOk returns a tuple with the Uri field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUri

`func (o *GetPartnerActivationsResponseSystemsInner) SetUri(v string)`

SetUri sets Uri field to given value.

### HasUri

`func (o *GetPartnerActivationsResponseSystemsInner) HasUri() bool`

HasUri returns a boolean if a field has been set.

### GetUpdatedAt

`func (o *GetPartnerActivationsResponseSystemsInner) GetUpdatedAt() int64`

GetUpdatedAt returns the UpdatedAt field if non-nil, zero value otherwise.

### GetUpdatedAtOk

`func (o *GetPartnerActivationsResponseSystemsInner) GetUpdatedAtOk() (*int64, bool)`

GetUpdatedAtOk returns a tuple with the UpdatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUpdatedAt

`func (o *GetPartnerActivationsResponseSystemsInner) SetUpdatedAt(v int64)`

SetUpdatedAt sets UpdatedAt field to given value.

### HasUpdatedAt

`func (o *GetPartnerActivationsResponseSystemsInner) HasUpdatedAt() bool`

HasUpdatedAt returns a boolean if a field has been set.

### GetReference

`func (o *GetPartnerActivationsResponseSystemsInner) GetReference() string`

GetReference returns the Reference field if non-nil, zero value otherwise.

### GetReferenceOk

`func (o *GetPartnerActivationsResponseSystemsInner) GetReferenceOk() (*string, bool)`

GetReferenceOk returns a tuple with the Reference field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReference

`func (o *GetPartnerActivationsResponseSystemsInner) SetReference(v string)`

SetReference sets Reference field to given value.

### HasReference

`func (o *GetPartnerActivationsResponseSystemsInner) HasReference() bool`

HasReference returns a boolean if a field has been set.

### GetOtherReferences

`func (o *GetPartnerActivationsResponseSystemsInner) GetOtherReferences() []string`

GetOtherReferences returns the OtherReferences field if non-nil, zero value otherwise.

### GetOtherReferencesOk

`func (o *GetPartnerActivationsResponseSystemsInner) GetOtherReferencesOk() (*[]string, bool)`

GetOtherReferencesOk returns a tuple with the OtherReferences field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOtherReferences

`func (o *GetPartnerActivationsResponseSystemsInner) SetOtherReferences(v []string)`

SetOtherReferences sets OtherReferences field to given value.

### HasOtherReferences

`func (o *GetPartnerActivationsResponseSystemsInner) HasOtherReferences() bool`

HasOtherReferences returns a boolean if a field has been set.

### GetAddress

`func (o *GetPartnerActivationsResponseSystemsInner) GetAddress() Address`

GetAddress returns the Address field if non-nil, zero value otherwise.

### GetAddressOk

`func (o *GetPartnerActivationsResponseSystemsInner) GetAddressOk() (*Address, bool)`

GetAddressOk returns a tuple with the Address field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAddress

`func (o *GetPartnerActivationsResponseSystemsInner) SetAddress(v Address)`

SetAddress sets Address field to given value.

### HasAddress

`func (o *GetPartnerActivationsResponseSystemsInner) HasAddress() bool`

HasAddress returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



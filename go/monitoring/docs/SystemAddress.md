# SystemAddress

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**City** | Pointer to **string** | City in which the system is located. | [optional] 
**State** | Pointer to **string** | State in which the system is located. | [optional] 
**Country** | Pointer to **string** | Country in which the system is located. | [optional] 
**PostalCode** | Pointer to **string** | Postal code of the system&#39;s location. | [optional] 

## Methods

### NewSystemAddress

`func NewSystemAddress() *SystemAddress`

NewSystemAddress instantiates a new SystemAddress object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSystemAddressWithDefaults

`func NewSystemAddressWithDefaults() *SystemAddress`

NewSystemAddressWithDefaults instantiates a new SystemAddress object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCity

`func (o *SystemAddress) GetCity() string`

GetCity returns the City field if non-nil, zero value otherwise.

### GetCityOk

`func (o *SystemAddress) GetCityOk() (*string, bool)`

GetCityOk returns a tuple with the City field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCity

`func (o *SystemAddress) SetCity(v string)`

SetCity sets City field to given value.

### HasCity

`func (o *SystemAddress) HasCity() bool`

HasCity returns a boolean if a field has been set.

### GetState

`func (o *SystemAddress) GetState() string`

GetState returns the State field if non-nil, zero value otherwise.

### GetStateOk

`func (o *SystemAddress) GetStateOk() (*string, bool)`

GetStateOk returns a tuple with the State field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetState

`func (o *SystemAddress) SetState(v string)`

SetState sets State field to given value.

### HasState

`func (o *SystemAddress) HasState() bool`

HasState returns a boolean if a field has been set.

### GetCountry

`func (o *SystemAddress) GetCountry() string`

GetCountry returns the Country field if non-nil, zero value otherwise.

### GetCountryOk

`func (o *SystemAddress) GetCountryOk() (*string, bool)`

GetCountryOk returns a tuple with the Country field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCountry

`func (o *SystemAddress) SetCountry(v string)`

SetCountry sets Country field to given value.

### HasCountry

`func (o *SystemAddress) HasCountry() bool`

HasCountry returns a boolean if a field has been set.

### GetPostalCode

`func (o *SystemAddress) GetPostalCode() string`

GetPostalCode returns the PostalCode field if non-nil, zero value otherwise.

### GetPostalCodeOk

`func (o *SystemAddress) GetPostalCodeOk() (*string, bool)`

GetPostalCodeOk returns a tuple with the PostalCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPostalCode

`func (o *SystemAddress) SetPostalCode(v string)`

SetPostalCode sets PostalCode field to given value.

### HasPostalCode

`func (o *SystemAddress) HasPostalCode() bool`

HasPostalCode returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



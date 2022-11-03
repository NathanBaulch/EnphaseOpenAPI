# EnphaseOpenAPI.Enlighten.Model.SystemsResponseSystemsInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**SystemId** | **int** | The Enlighten ID of the system. | 
**SystemName** | **string** | The name of the system. Even if the system owner has indicated their site is anonymous for public lists, the actual system name is returned here for identification purposes. | 
**SystemPublicName** | **string** | The display name of the system. Use this when displaying the system name on a public list or view. | 
**Reference** | **string** | If the calling user belongs to a company and that company has provided its own identifiers for a system, that ID is included here. Otherwise, this attribute is not returned. | [optional] 
**OtherReferences** | **List&lt;string&gt;** | If any other companies have provided their own identifiers for a system, those identifiers are included here. Otherwise, this attribute is not returned. | [optional] 
**Country** | **string** | The two-letter code for the country where the system is located. See [ISO_3166-1_alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) for reference. | 
**State** | **string** | The two-letter code for the state where the system is located. See [ISO_3166-2](https://en.wikipedia.org/wiki/ISO_3166-2) for reference. | 
**City** | **string** | The name of the city where the system is located. | 
**PostalCode** | **string** | The postal code where the system is located. | 
**Timezone** | **string** | The timezone of the system. | 
**ConnectionType** | **ConnectionType** |  | 
**Status** | **string** | The current status of the system. You can find this and more in the &#x60;meta&#x60; property. | 
**Meta** | [**Meta**](Meta.md) |  | 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


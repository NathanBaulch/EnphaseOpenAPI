# SystemsResponseSystems


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**system_id** | **int** | The Enlighten ID of the system. | 
**system_name** | **str** | The name of the system. Even if the system owner has indicated their site is anonymous for public lists, the actual system name is returned here for identification purposes. | 
**system_public_name** | **str** | The display name of the system. Use this when displaying the system name on a public list or view. | 
**reference** | **str** | If the calling user belongs to a company and that company has provided its own identifiers for a system, that ID is included here. Otherwise, this attribute is not returned. | 
**other_references** | **[str]** | If any other companies have provided their own identifiers for a system, those identifiers are included here. Otherwise, this attribute is not returned. | 
**country** | **str** | The two-letter code for the country where the system is located. See [ISO_3166-1_alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) for reference. | 
**state** | **str** | The two-letter code for the state where the system is located. See [ISO_3166-2](https://en.wikipedia.org/wiki/ISO_3166-2) for reference. | 
**city** | **str** | The name of the city where the system is located. | 
**postal_code** | **str** | The postal code where the system is located. | 
**timezone** | **str** | The timezone of the system. | 
**connection_type** | [**ConnectionType**](ConnectionType.md) |  | 
**status** | **str** | The current status of the system. You can find this and more in the &#x60;meta&#x60; property. | 
**meta** | [**Meta**](Meta.md) |  | 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



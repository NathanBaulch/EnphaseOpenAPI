# # InlineResponse2002Systems

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**system_id** | **int** | The Enlighten ID of the system. |
**system_name** | **string** | The name of the system. Even if the system owner has indicated their site is anonymous for public lists, the actual system name is returned here for identification purposes. |
**system_public_name** | **string** | The display name of the system. Use this when displaying the system name on a public list or view. |
**reference** | **string** | If the calling user belongs to a company and that company has provided its own identifiers for a system, that ID is included here. Otherwise, this attribute is not returned. |
**other_references** | **string[]** | If any other companies have provided their own identifiers for a system, those identifiers are included here. Otherwise, this attribute is not returned. |
**country** | **string** | The two-letter code for the country where the system is located. See [ISO_3166-1_alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) for reference. |
**state** | **string** | The two-letter code for the state where the system is located. See [ISO_3166-2](https://en.wikipedia.org/wiki/ISO_3166-2) for reference. |
**city** | **string** | The name of the city where the system is located. |
**postal_code** | **string** | The postal code where the system is located. |
**timezone** | **string** | The timezone of the system. |
**connection_type** | [**\OpenAPI\Client\Model\ConnectionType**](ConnectionType.md) |  |
**status** | **string** | The current status of the system. You can find this and more in the &#x60;meta&#x60; property. |
**meta** | [**\OpenAPI\Client\Model\Meta**](Meta.md) |  |

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)

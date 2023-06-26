# # GetSystemsResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**total** | **int** | Total number of systems. | [optional]
**current_page** | **int** | Number of the current page fetched. | [optional]
**size** | **int** | Maximum number of records shown per page. Default&#x3D;10, Min&#x3D;1, Max&#x3D;100. | [optional]
**count** | **int** | Total number of systems actually returned for the current page. | [optional]
**items** | **string** | Named key of the list data. In this endpoint, it is systems. | [optional]
**systems** | [**\OpenAPI\Client\Model\System[]**](System.md) | List of systems. | [optional]

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)

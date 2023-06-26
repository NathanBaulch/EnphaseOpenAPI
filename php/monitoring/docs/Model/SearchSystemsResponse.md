# # SearchSystemsResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**total** | **int** | Total number of systems available. | [optional]
**current_page** | **int** | Current page of the systems result. Default is 1. | [optional]
**size** | **int** | Max number of records from API per page is 100. Default is 10. | [optional]
**count** | **int** | Total number of systems actually returned for the current page. | [optional]
**items** | **string** | Named key of the list data. In this endpoint, it is systems. | [optional]
**systems** | [**\EnphaseOpenAPI\Monitoring\Model\System[]**](System.md) | List of filtered systems. | [optional]

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)

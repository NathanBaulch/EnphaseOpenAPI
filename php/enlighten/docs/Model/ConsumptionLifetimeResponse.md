# # ConsumptionLifetimeResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**start_date** | **\DateTime** | When no &#x60;start_date&#x60; parameter is specified on the request, this is the &#x60;operational_date&#x60; of the system. May be null if system has never produced. When a &#x60;start_date&#x60; parameter is included in the request, it is included here in the response. |
**system_id** | **int** | The identifier of the system. | [optional]
**consumption** | **int[]** | An array of consumption measurements, one for each day since consumption metering began, or one for each day of the requested period. |
**meta** | [**\OpenAPI\Client\Model\Meta**](Meta.md) |  |

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)

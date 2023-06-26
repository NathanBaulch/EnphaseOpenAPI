# # UpdateActivationEstimateRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**degrade_factor** | **string** | Annual production degradation factor for the system, from year 0 of the system&#39;s life. Must be 0.0% or higher. |
**month_estimates** | **string[]** | Estimated monthly production of the system, in kWh. A value for each month must be provided, and must be greater than 0. Send an empty array if you need to remove monthly estimates. |

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)

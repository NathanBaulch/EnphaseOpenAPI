# # UpdateCompanyUserRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**company_id** | **int** | Enlighten-generated ID of the company to which the user belongs, if any. Use the &#39;company&#39; attribute instead, and the query parameter &#39;expand&#x3D;company&#39; to get detailed company information. | [optional]
**email** | **string** | Email address of the user. Must be unique within Enlighten. Required. | [optional]
**enlighten_emails** | **bool** | Whether the user receives automated emails from Enlighten. Default false. | [optional]
**first_name** | **string** | User&#39;s first name. Required. | [optional]
**last_name** | **string** | User&#39;s last name. Required. | [optional]
**phone** | **string** | Telephone number of the user. Optional. | [optional]

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)

# EnphaseOpenAPI.Commissioning.Model.UserParams

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CompanyId** | **int** | Enlighten-generated ID of the company to which the user belongs, if any. Use the &#39;company&#39; attribute instead, and the query parameter &#39;expand&#x3D;company&#39; to get detailed company information. | [optional] 
**Email** | **string** | Email address of the user. Must be unique within Enlighten. Required. | [optional] 
**EnlightenEmails** | **bool** | Whether the user receives automated emails from Enlighten. Default false. | [optional] 
**EnlightenView** | **string** | Which view of Enlighten the user has. Options &#39;my&#39; for MyEnlighten, &#39;manager&#39; for Enlighten Manager. Default &#39;my&#39;. Users who do not belong to companies should be set to &#39;my&#39;. You must have an agreement with Enphase Energy to set a user to &#39;manager&#39;. | [optional] 
**FirstName** | **string** | User&#39;s first name. Required. | [optional] 
**LastName** | **string** | User&#39;s last name. Required. | [optional] 
**Phone** | **string** | Telephone number of the user. Optional. | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


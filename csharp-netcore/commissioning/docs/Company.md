# EnphaseOpenAPI.Commissioning.Model.Company
Name of the system owner. Owner must be an Enlighten user. If the user of the API is a self-installer, the owner must be himself. If the query parameter 'expand=owner' passed in the request owner detail will appear in the response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CompanyId** | **int** | Enlighten-generated ID of the company to which the user belongs. | [optional] 
**CompanyName** | **string** | Name of the company to which the user belongs. | [optional] 
**Location** | **string** | Company location. | [optional] 
**Roles** | [**List&lt;CompanyRoleEnum&gt;**](CompanyRoleEnum.md) | What type of company this is in Enphase. For installer company roles will be [&#39;installer&#39;]. For other role roles will be empty. | [optional] 
**Uri** | **string** | URI to the show() method for the company. System-generated. | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


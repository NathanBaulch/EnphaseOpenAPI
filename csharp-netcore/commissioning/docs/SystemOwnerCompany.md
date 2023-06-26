# EnphaseOpenAPI.Commissioning.Model.SystemOwnerCompany
A hash of information about the owner's company. Use the query parameter 'expand=owner.company' to get owner company detail.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CompanyId** | **int** |  | [optional] 
**CompanyName** | **string** |  | [optional] 
**Location** | **string** |  | [optional] 
**Roles** | [**List&lt;CompanyRoleEnum&gt;**](CompanyRoleEnum.md) | What type of company this is in Enphase. For installer company roles will be [&#39;installer&#39;]. For other role roles will be empty. | [optional] 
**Uri** | **string** |  | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


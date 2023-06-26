# EnphaseOpenAPI.Commissioning.Model.SystemHostCompany
A hash of information about the system host's company. Use the query parameter 'expand=host.company' to get system host company detail.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CompanyId** | **int** |  | [optional] 
**CompanyName** | **string** |  | [optional] 
**Location** | **string** |  | [optional] 
**Roles** | [**List&lt;CompanyRoleEnum&gt;**](CompanyRoleEnum.md) | What type of company this is in Enphase. For installer company roles will be [&#39;installer&#39;]. For other role roles will be empty. | [optional] 
**Uri** | **string** |  | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


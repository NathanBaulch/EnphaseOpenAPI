# EnphaseOpenAPI.Commissioning.Model.SystemHost
Name of the system host. Please see \"Specifying an Owner and Lease Arrangement\", above, for more information. If the query parameter 'expand=host' passed in the request host detail will appear in the response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**FirstName** | **string** |  | [optional] 
**LastName** | **string** |  | [optional] 
**Email** | **string** |  | [optional] 
**Phone** | **string** |  | [optional] 
**Active** | **bool** | Whether the user is allowed to log in to Enlighten. Values true, false. Default true. | [optional] 
**UserId** | **int** |  | [optional] 
**UserRoles** | [**List&lt;UserRoleEnum&gt;**](UserRoleEnum.md) | What type of user this is in Enlighten. For self installer user user_roles will be [&#39;self_installer&#39;]. For other users user_roles will be empty. | [optional] 
**EnlightenEmails** | **bool** |  | [optional] 
**EnlightenView** | **string** |  | [optional] 
**Uri** | **string** |  | [optional] 
**UpdatedAt** | **long** |  | [optional] 
**Company** | [**SystemHostCompany**](SystemHostCompany.md) |  | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


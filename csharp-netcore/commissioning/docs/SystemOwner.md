# EnphaseOpenAPI.Commissioning.Model.SystemOwner
Name of the system owner. Owner must be an Enlighten user. If the user of the API is a self-installer, the owner must be himself. If the query parameter 'expand=owner' passed in the request owner detail will appear in the response.

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
**Company** | [**SystemOwnerCompany**](SystemOwnerCompany.md) |  | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


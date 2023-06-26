# EnphaseOpenAPI.Commissioning.Model.User

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Active** | **bool** | Whether the user is allowed to log in to Enlighten. | [optional] 
**UserRoles** | [**List&lt;UserRoleEnum&gt;**](UserRoleEnum.md) | What type of user this is in Enlighten. For self installer user user_roles will be [&#39;self_installer&#39;]. For other users user_roles will be empty. | [optional] 
**Email** | **string** | Email address of the user. | [optional] 
**EnlightenEmails** | **bool** | Whether the user receives automated emails from Enlighten. | [optional] 
**EnlightenView** | **string** | Which view of Enlighten the user has. | [optional] 
**FirstName** | **string** | User&#39;s first name. | [optional] 
**LastName** | **string** | User&#39;s last name. | [optional] 
**Phone** | **string** | Telephone number of the user. | [optional] 
**Uri** | **string** | URI to the show() method for the user. System-generated. | [optional] 
**UserId** | **int** | Enlighten ID of the user. System-generated. | [optional] 
**UpdatedAt** | **long** | Last updated date and time in Epoch format. | [optional] 
**Company** | [**Company**](Company.md) |  | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


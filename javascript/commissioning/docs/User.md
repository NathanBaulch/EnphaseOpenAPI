# TheEnphaseCommissioningApi.User

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**active** | **Boolean** | Whether the user is allowed to log in to Enlighten. | [optional] 
**userRoles** | [**[UserRoleEnum]**](UserRoleEnum.md) | What type of user this is in Enlighten. For self installer user user_roles will be [&#39;self_installer&#39;]. For other users user_roles will be empty. | [optional] 
**email** | **String** | Email address of the user. | [optional] 
**enlightenEmails** | **Boolean** | Whether the user receives automated emails from Enlighten. | [optional] 
**enlightenView** | **String** | Which view of Enlighten the user has. | [optional] 
**firstName** | **String** | User&#39;s first name. | [optional] 
**lastName** | **String** | User&#39;s last name. | [optional] 
**phone** | **String** | Telephone number of the user. | [optional] 
**uri** | **String** | URI to the show() method for the user. System-generated. | [optional] 
**userId** | **Number** | Enlighten ID of the user. System-generated. | [optional] 
**updatedAt** | **Number** | Last updated date and time in Epoch format. | [optional] 
**company** | [**Company**](Company.md) |  | [optional] 



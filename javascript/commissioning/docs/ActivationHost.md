# TheEnphaseCommissioningApi.ActivationHost

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**firstName** | **String** |  | [optional] 
**lastName** | **String** |  | [optional] 
**email** | **String** |  | [optional] 
**phone** | **String** |  | [optional] 
**active** | **Boolean** | Whether the user is allowed to log in to Enlighten. Values true, false. Default true. | [optional] 
**userId** | **Number** |  | [optional] 
**userRoles** | [**[UserRoleEnum]**](UserRoleEnum.md) | What type of user this is in Enlighten. For self installer user user_roles will be [&#39;self_installer&#39;]. For other users user_roles will be empty. | [optional] 
**enlightenEmails** | **Boolean** |  | [optional] 
**enlightenView** | **String** |  | [optional] 
**uri** | **String** |  | [optional] 
**updatedAt** | **Number** |  | [optional] 
**company** | [**ActivationHostCompany**](ActivationHostCompany.md) |  | [optional] 



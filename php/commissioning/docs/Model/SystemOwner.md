# # SystemOwner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**first_name** | **string** |  | [optional]
**last_name** | **string** |  | [optional]
**email** | **string** |  | [optional]
**phone** | **string** |  | [optional]
**active** | **bool** | Whether the user is allowed to log in to Enlighten. Values true, false. Default true. | [optional]
**user_id** | **int** |  | [optional]
**user_roles** | [**\EnphaseOpenAPI\Commissioning\Model\UserRoleEnum[]**](UserRoleEnum.md) | What type of user this is in Enlighten. For self installer user user_roles will be [&#39;self_installer&#39;]. For other users user_roles will be empty. | [optional]
**enlighten_emails** | **bool** |  | [optional]
**enlighten_view** | **string** |  | [optional]
**uri** | **string** |  | [optional]
**updated_at** | **int** |  | [optional]
**company** | [**\EnphaseOpenAPI\Commissioning\Model\SystemOwnerCompany**](SystemOwnerCompany.md) |  | [optional]

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)

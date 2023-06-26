# # User

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**active** | **bool** | Whether the user is allowed to log in to Enlighten. | [optional]
**user_roles** | [**\OpenAPI\Client\Model\UserRoleEnum[]**](UserRoleEnum.md) | What type of user this is in Enlighten. For self installer user user_roles will be [&#39;self_installer&#39;]. For other users user_roles will be empty. | [optional]
**email** | **string** | Email address of the user. | [optional]
**enlighten_emails** | **bool** | Whether the user receives automated emails from Enlighten. | [optional]
**enlighten_view** | **string** | Which view of Enlighten the user has. | [optional]
**first_name** | **string** | User&#39;s first name. | [optional]
**last_name** | **string** | User&#39;s last name. | [optional]
**phone** | **string** | Telephone number of the user. | [optional]
**uri** | **string** | URI to the show() method for the user. System-generated. | [optional]
**user_id** | **int** | Enlighten ID of the user. System-generated. | [optional]
**updated_at** | **int** | Last updated date and time in Epoch format. | [optional]
**company** | [**\OpenAPI\Client\Model\Company**](Company.md) |  | [optional]

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)

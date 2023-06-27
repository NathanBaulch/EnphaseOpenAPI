# # GetPartnerActivationsResponseSystemsInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**system_id** | **int** | Enlighten ID of this system. System-generated. | [optional]
**system_name** | **string** | Name of the system. | [optional]
**system_type** | [**\EnphaseOpenAPI\Commissioning\Model\SystemTypeEnum**](SystemTypeEnum.md) |  | [optional]
**status** | **string** | System&#39;s status. | [optional]
**timezone** | **string** | System&#39;s timezone. | [optional]
**stage** | **int** | What stage of the activation process this activation is in. System-generated. | [optional]
**internet_connection** | [**\EnphaseOpenAPI\Commissioning\Model\SystemInternetConnectionEnum**](SystemInternetConnectionEnum.md) |  | [optional]
**lease** | **bool** | Whether the system is leased. Default false. | [optional]
**operational** | **bool** | Whether this system is permitted to operate. Default true. | [optional]
**owner** | **string** | Name of the system owner. Owner must be an Enlighten user. If the user of the API is a self-installer, the owner must be himself. | [optional]
**owner_id** | **int** | Enlighten ID of this system owner. System-generated. | [optional]
**host** | **string** | Name of the system host. | [optional]
**host_id** | **int** | Enlighten ID of this system host. System-generated. | [optional]
**installer_name** | **string** | Name of the installer. | [optional]
**installer_id** | **int** | Enlighten ID of the installer of this system. | [optional]
**maintainer_name** | **string** | Name of the maintainer. | [optional]
**maintainer_id** | **int** | Enlighten ID of the maintainer of this system. | [optional]
**authorized_subcontractors** | [**\EnphaseOpenAPI\Commissioning\Model\GetPartnerActivationsResponseSystemsInnerAuthorizedSubcontractorsInner[]**](GetPartnerActivationsResponseSystemsInnerAuthorizedSubcontractorsInner.md) | List of sub-contractors of this system. | [optional]
**uri** | **string** | URI for this activation. | [optional]
**updated_at** | **int** | Activation last updated timestamp. | [optional]
**reference** | **string** | Identifier of this system as provided by the calling user&#39;s company. This attribute is not present if the calling user&#39;s company does not have a reference for this system. | [optional]
**other_references** | **string[]** | Identifiers assigned to this activation by other companies which have access to it. This attribute is not present if there are no other references for this system. | [optional]
**address** | [**\EnphaseOpenAPI\Commissioning\Model\Address**](Address.md) |  | [optional]

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)

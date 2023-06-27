# TheEnphaseCommissioningApi.GetPartnerActivationsResponseSystemsInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**systemId** | **Number** | Enlighten ID of this system. System-generated. | [optional] 
**systemName** | **String** | Name of the system. | [optional] 
**systemType** | [**SystemTypeEnum**](SystemTypeEnum.md) |  | [optional] 
**status** | **String** | System&#39;s status. | [optional] 
**timezone** | **String** | System&#39;s timezone. | [optional] 
**stage** | **Number** | What stage of the activation process this activation is in. System-generated. | [optional] 
**internetConnection** | [**SystemInternetConnectionEnum**](SystemInternetConnectionEnum.md) |  | [optional] 
**lease** | **Boolean** | Whether the system is leased. Default false. | [optional] 
**operational** | **Boolean** | Whether this system is permitted to operate. Default true. | [optional] 
**owner** | **String** | Name of the system owner. Owner must be an Enlighten user. If the user of the API is a self-installer, the owner must be himself. | [optional] 
**ownerId** | **Number** | Enlighten ID of this system owner. System-generated. | [optional] 
**host** | **String** | Name of the system host. | [optional] 
**hostId** | **Number** | Enlighten ID of this system host. System-generated. | [optional] 
**installerName** | **String** | Name of the installer. | [optional] 
**installerId** | **Number** | Enlighten ID of the installer of this system. | [optional] 
**maintainerName** | **String** | Name of the maintainer. | [optional] 
**maintainerId** | **Number** | Enlighten ID of the maintainer of this system. | [optional] 
**authorizedSubcontractors** | [**[GetPartnerActivationsResponseSystemsInnerAuthorizedSubcontractorsInner]**](GetPartnerActivationsResponseSystemsInnerAuthorizedSubcontractorsInner.md) | List of sub-contractors of this system. | [optional] 
**uri** | **String** | URI for this activation. | [optional] 
**updatedAt** | **Number** | Activation last updated timestamp. | [optional] 
**reference** | **String** | Identifier of this system as provided by the calling user&#39;s company. This attribute is not present if the calling user&#39;s company does not have a reference for this system. | [optional] 
**otherReferences** | **[String]** | Identifiers assigned to this activation by other companies which have access to it. This attribute is not present if there are no other references for this system. | [optional] 
**address** | [**Address**](Address.md) |  | [optional] 



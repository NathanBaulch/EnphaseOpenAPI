# EnphaseOpenAPI.Commissioning.Model.GetPartnerActivationsResponseSystemsInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**SystemId** | **int** | Enlighten ID of this system. System-generated. | [optional] 
**SystemName** | **string** | Name of the system. | [optional] 
**SystemType** | **SystemTypeEnum** |  | [optional] 
**Status** | **string** | System&#39;s status. | [optional] 
**Timezone** | **string** | System&#39;s timezone. | [optional] 
**Stage** | **int** | What stage of the activation process this activation is in. System-generated. | [optional] 
**InternetConnection** | **SystemInternetConnectionEnum** |  | [optional] 
**Lease** | **bool** | Whether the system is leased. Default false. | [optional] 
**Operational** | **bool** | Whether this system is permitted to operate. Default true. | [optional] 
**Owner** | **string** | Name of the system owner. Owner must be an Enlighten user. If the user of the API is a self-installer, the owner must be himself. | [optional] 
**OwnerId** | **int** | Enlighten ID of this system owner. System-generated. | [optional] 
**Host** | **string** | Name of the system host. | [optional] 
**HostId** | **int** | Enlighten ID of this system host. System-generated. | [optional] 
**InstallerName** | **string** | Name of the installer. | [optional] 
**InstallerId** | **int** | Enlighten ID of the installer of this system. | [optional] 
**MaintainerName** | **string** | Name of the maintainer. | [optional] 
**MaintainerId** | **int** | Enlighten ID of the maintainer of this system. | [optional] 
**AuthorizedSubcontractors** | [**List&lt;GetPartnerActivationsResponseSystemsInnerAuthorizedSubcontractorsInner&gt;**](GetPartnerActivationsResponseSystemsInnerAuthorizedSubcontractorsInner.md) | List of sub-contractors of this system. | [optional] 
**Uri** | **string** | URI for this activation. | [optional] 
**UpdatedAt** | **long** | Activation last updated timestamp. | [optional] 
**Reference** | **string** | Identifier of this system as provided by the calling user&#39;s company. This attribute is not present if the calling user&#39;s company does not have a reference for this system. | [optional] 
**OtherReferences** | **List&lt;string&gt;** | Identifiers assigned to this activation by other companies which have access to it. This attribute is not present if there are no other references for this system. | [optional] 
**Address** | [**Address**](Address.md) |  | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


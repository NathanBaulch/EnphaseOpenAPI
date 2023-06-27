# EnphaseOpenAPI.Commissioning.Model.SystemParams

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**SystemName** | **string** | Name of the system. Limit 255 characters. | 
**SystemType** | **SystemTypeEnum** |  | [optional] 
**InternetConnection** | **SystemInternetConnectionEnum** |  | [optional] 
**Lease** | **bool** | Whether the system is leased. Default false. | [optional] 
**Operational** | **bool** | Whether this system is permitted to operate. Default true. | [optional] 
**OwnerId** | **int** | Enlighten ID of the system owner. Owner must be an Enlighten user. Optional. If the user of the API is a self-installer, the owner must be himself. If the user of the API is an installer then use the Search user API to get the owner user ID. If the owner not exist in the enlighten then use Create home owner API to create it newly. | [optional] 
**HostId** | **int** | Enlighten ID of the system host. System host must be an Enlighten user. Optional. If the user of the API is an installer then use the Search user API to get the host user ID. If the host not exist in the enlighten then use Create home owner API to create it newly. | [optional] 
**AuthorizedSubcontractorId** | **int** | Enlighten ID of the sub-contractor you want to add to the system. Optional. If you are the home owner, you cannot add subcontractors for the site. | [optional] 
**InstallerId** | **int** | Enlighten ID of the installer of this system. Defaults to current user&#39;s company ID. | [optional] 
**MaintainerName** | **string** | Name of the maintainer. | [optional] 
**MaintainerId** | **int** | The Enlighten ID of the maintainer of this system. Defaults to current user&#39;s company ID. | [optional] 
**AuthorizedSubcontractors** | [**List&lt;GetPartnerActivationsResponseSystemsInnerAuthorizedSubcontractorsInner&gt;**](GetPartnerActivationsResponseSystemsInnerAuthorizedSubcontractorsInner.md) | List of sub-contractors of this system. | [optional] 
**AllowPublicAccess** | **bool** | When true, the system will be eligible to appear in the public systems lists of Enphase and the system&#39;s installer. Default true. | [optional] 
**InterconnectDate** | **DateTimeOffset** | When the system was approved to connect to the grid. | [optional] 
**Source** | **SystemSourceEnum** |  | [optional] 
**ArrayType** | **SystemArrayTypeEnum** |  | [optional] 
**AttachmentType** | **SystemAttachmentTypeEnum** |  | [optional] 
**EnsembleEnvoy** | **string** | Specifies serial number of ensemble envoy in multi envoy system. | [optional] 
**GridProfile** | **string** | Grid profile to set on this system&#39;s microinverters. See GridProfiles API for how to retrieve a list of known profiles. | [optional] 
**RequestedProfile** | **string** |  | [optional] 
**RequestedReportFreq** | **string** |  | [optional] 
**Voltage** | **string** | Supported voltage/phase associated with a commercial system inside North America. If system type is not commercial, or if the installer exists &amp; installer&#39;s country is not inside North America, or if the system&#39;s country is not inside North America, then the voltage value would be null. | [optional] 
**EnvoySerialNumbers** | **List&lt;string&gt;** | A list of Envoys installed on this system. | [optional] 
**PvManufacturer** | **int** | Enlighten ID of the PV manufacturer associated with the PV model installed on the system. See PvManufacturers for how to retrieve PV manufacturer IDs. | [optional] 
**PvManufacturerName** | **string** | Name of the Custom PV module manufacturer associated with the system. | [optional] 
**PvModel** | **int** | Enlighten ID of the PV model installed on the system. See PvManufacturers and PvModels for how to retrieve PV model IDs. | [optional] 
**PvModelName** | **string** | Name of the Custom PV module model associated with the system. | [optional] 
**PvModulePowerRating** | **float** | Power rating (in W) of the PV module installed on the system. | [optional] 
**PvModuleType** | **int** | Type ID of the PV module installed on the system. 1 -&gt; &#39;Mono-facial&#39;, 2 -&gt; &#39;Bi-facial&#39;, 3 -&gt; &#39;Split cell&#39;, 4 -&gt; &#39;Other&#39;. | [optional] 
**ExpectedEnvoyCount** | **int** | Total envoys the system is supposed to have. | [optional] 
**ExpectedPcuCount** | **int** | Total PCUs the system is supposed to have. | [optional] 
**ExpectedAcbCount** | **int** | Total acbs the system is supposed to have. | [optional] 
**ExpectedNsrCount** | **int** | Total nsrs the system is supposed to have. | [optional] 
**ExpectedMeterCount** | **int** | Total meters the system is supposed to have. | [optional] 
**ExpectedEnchargeCount** | **int** | Total encharges the system is supposed to have. | [optional] 
**ExpectedEnpowerCount** | **int** | Total enpowers the system is supposed to have. | [optional] 
**Reference** | **string** | Identifier of this system as provided by the calling user&#39;s company. This attribute is not present if the calling user&#39;s company does not have a reference for this system. This value should be alphanumeric. | [optional] 
**Encharge** | [**List&lt;SystemParamsEnchargeInner&gt;**](SystemParamsEnchargeInner.md) | Encharge detail. | [optional] 
**Enpower** | [**List&lt;SystemParamsEnpowerInner&gt;**](SystemParamsEnpowerInner.md) | Enpower detail. | [optional] 
**Address** | [**SystemParamsAddress**](SystemParamsAddress.md) |  | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


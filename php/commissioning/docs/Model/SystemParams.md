# # SystemParams

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**system_name** | **string** | Name of the system. Limit 255 characters. |
**system_type** | [**\EnphaseOpenAPI\Commissioning\Model\SystemTypeEnum**](SystemTypeEnum.md) |  | [optional]
**internet_connection** | [**\EnphaseOpenAPI\Commissioning\Model\SystemInternetConnectionEnum**](SystemInternetConnectionEnum.md) |  | [optional]
**lease** | **bool** | Whether the system is leased. Default false. | [optional]
**operational** | **bool** | Whether this system is permitted to operate. Default true. | [optional]
**owner_id** | **int** | Enlighten ID of the system owner. Owner must be an Enlighten user. Optional. If the user of the API is a self-installer, the owner must be himself. If the user of the API is an installer then use the Search user API to get the owner user ID. If the owner not exist in the enlighten then use Create home owner API to create it newly. | [optional]
**host_id** | **int** | Enlighten ID of the system host. System host must be an Enlighten user. Optional. If the user of the API is an installer then use the Search user API to get the host user ID. If the host not exist in the enlighten then use Create home owner API to create it newly. | [optional]
**installer_id** | **int** | Enlighten ID of the installer of this system. Defaults to current user&#39;s company ID. | [optional]
**allow_public_access** | **bool** | When true, the system will be eligible to appear in the public systems lists of Enphase and the system&#39;s installer. Default true. | [optional]
**interconnect_date** | **\DateTime** | When the system was approved to connect to the grid. | [optional]
**source** | [**\EnphaseOpenAPI\Commissioning\Model\SystemSourceEnum**](SystemSourceEnum.md) |  | [optional]
**array_type** | [**\EnphaseOpenAPI\Commissioning\Model\SystemArrayTypeEnum**](SystemArrayTypeEnum.md) |  | [optional]
**attachment_type** | [**\EnphaseOpenAPI\Commissioning\Model\SystemAttachmentTypeEnum**](SystemAttachmentTypeEnum.md) |  | [optional]
**ensemble_envoy** | **string** | Specifies serial number of ensemble envoy in multi envoy system. | [optional]
**grid_profile** | **string** | Grid profile to set on this system&#39;s microinverters. See GridProfiles API for how to retrieve a list of known profiles. | [optional]
**requested_profile** | **string** |  | [optional]
**requested_report_freq** | **string** |  | [optional]
**voltage** | **string** | Supported voltage/phase associated with a commercial system inside North America. If system type is not commercial, or if the installer exists &amp; installer&#39;s country is not inside North America, or if the system&#39;s country is not inside North America, then the voltage value would be null. | [optional]
**envoy_serial_numbers** | **string[]** | A list of Envoys installed on this system. | [optional]
**pv_manufacturer** | **int** | Enlighten ID of the PV manufacturer associated with the PV model installed on the system. See PvManufacturers for how to retrieve PV manufacturer IDs. | [optional]
**pv_manufacturer_name** | **string** | Name of the Custom PV module manufacturer associated with the system. | [optional]
**pv_model** | **int** | Enlighten ID of the PV model installed on the system. See PvManufacturers and PvModels for how to retrieve PV model IDs. | [optional]
**pv_model_name** | **string** | Name of the Custom PV module model associated with the system. | [optional]
**pv_module_power_rating** | **float** | Power rating (in W) of the PV module installed on the system. | [optional]
**pv_module_type** | **int** | Type ID of the PV module installed on the system. 1 -&gt; &#39;Mono-facial&#39;, 2 -&gt; &#39;Bi-facial&#39;, 3 -&gt; &#39;Split cell&#39;, 4 -&gt; &#39;Other&#39;. | [optional]
**expected_envoy_count** | **int** | Total envoys the system is supposed to have. | [optional]
**expected_pcu_count** | **int** | Total PCUs the system is supposed to have. | [optional]
**expected_acb_count** | **int** | Total acbs the system is supposed to have. | [optional]
**expected_nsr_count** | **int** | Total nsrs the system is supposed to have. | [optional]
**expected_meter_count** | **int** | Total meters the system is supposed to have. | [optional]
**expected_encharge_count** | **int** | Total encharges the system is supposed to have. | [optional]
**expected_enpower_count** | **int** | Total enpowers the system is supposed to have. | [optional]
**reference** | **string** | Identifier of this system as provided by the calling user&#39;s company. This attribute is not present if the calling user&#39;s company does not have a reference for this system. This value should be alphanumeric. | [optional]
**encharge** | [**\EnphaseOpenAPI\Commissioning\Model\SystemParamsEnchargeInner[]**](SystemParamsEnchargeInner.md) | Encharge detail. | [optional]
**enpower** | [**\EnphaseOpenAPI\Commissioning\Model\SystemParamsEnpowerInner[]**](SystemParamsEnpowerInner.md) | Enpower detail. | [optional]
**address** | [**\EnphaseOpenAPI\Commissioning\Model\SystemParamsAddress**](SystemParamsAddress.md) |  | [optional]

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)

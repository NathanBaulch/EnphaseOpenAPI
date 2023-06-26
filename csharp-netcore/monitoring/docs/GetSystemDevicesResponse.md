# EnphaseOpenAPI.Monitoring.Model.GetSystemDevicesResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**SystemId** | **int** | System ID. | [optional] 
**TotalDevices** | **int** | Total active devices associated with the system. | [optional] 
**Items** | **string** | List key. | [optional] 
**Devices** | **Dictionary&lt;string, List&lt;GetSystemDevicesResponseDevicesValueInner&gt;&gt;** | Hash keys include all the possible device types micros, meters, gateways, mids, q_relays, ACBs, Encharges, Enpowers (if the devices of this type are present). For all the device types, the object will contain the serial_number and model with some additional information pertaining to the device type. | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


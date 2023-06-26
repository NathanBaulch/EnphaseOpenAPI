# # MonthlyProductionResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**system_id** | **int** | Enlighten ID for this system. |
**start_date** | **\DateTime** | First day included in the reporting period. The format is &#x60;YYYY-mm-dd&#x60; unless you pass a &#x60;datetime_format&#x60; parameter as described [here](https://developer.enphase.com/docs#Datetimes). |
**end_date** | **\DateTime** | Last day included in the reporting period. |
**production_wh** | **int** | Total production for the requested period in Watt-hours. |
**meter_readings** | [**\EnphaseOpenAPI\Enlighten\Model\MonthlyProductionResponseMeterReadingsInner[]**](MonthlyProductionResponseMeterReadingsInner.md) | If the system has any revenue-grade meters installed, the meter readings at the beginning and end of the reporting period are included here. Otherwise, the array is empty. |
**meta** | [**\EnphaseOpenAPI\Enlighten\Model\Meta**](Meta.md) |  |

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)

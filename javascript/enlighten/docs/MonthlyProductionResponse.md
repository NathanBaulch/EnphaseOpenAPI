# TheEnlightenSystemsApi.MonthlyProductionResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**systemId** | **Number** | Enlighten ID for this system. | 
**startDate** | **Date** | First day included in the reporting period. The format is &#x60;YYYY-mm-dd&#x60; unless you pass a &#x60;datetime_format&#x60; parameter as described [here](https://developer.enphase.com/docs#Datetimes). | 
**endDate** | **Date** | Last day included in the reporting period. | 
**productionWh** | **Number** | Total production for the requested period in Watt-hours. | 
**meterReadings** | [**[MonthlyProductionResponseMeterReadingsInner]**](MonthlyProductionResponseMeterReadingsInner.md) | If the system has any revenue-grade meters installed, the meter readings at the beginning and end of the reporting period are included here. Otherwise, the array is empty. | 
**meta** | [**Meta**](Meta.md) |  | 



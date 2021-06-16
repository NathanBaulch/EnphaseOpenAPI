# TheEnlightenSystemsApi.InlineResponse2009

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**startDate** | **Date** | When no &#x60;start_date&#x60; parameter is specified on the request, this is the &#x60;operational_date&#x60; of the system. May be null if system has never produced. When a &#x60;start_date&#x60; parameter is included in the request, it is included here in the response. | 
**systemId** | **Number** | The identifier of the system. | 
**consumption** | **[Number]** | An array of consumption measurements, one for each day since consumption metering began, or one for each day of the requested period. | 
**meta** | [**Meta**](Meta.md) |  | 



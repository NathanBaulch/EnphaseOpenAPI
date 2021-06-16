# TheEnlightenSystemsApi.SystemsSystems

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**systemId** | **Number** | The Enlighten ID of the system. | 
**systemName** | **String** | The name of the system. Even if the system owner has indicated their site is anonymous for public lists, the actual system name is returned here for identification purposes. | 
**systemPublicName** | **String** | The display name of the system. Use this when displaying the system name on a public list or view. | 
**reference** | **String** | If the calling user belongs to a company and that company has provided its own identifiers for a system, that ID is included here. Otherwise, this attribute is not returned. | 
**otherReferences** | **[String]** | If any other companies have provided their own identifiers for a system, those identifiers are included here. Otherwise, this attribute is not returned. | 
**country** | **String** | The two-letter code for the country where the system is located. See [ISO_3166-1_alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) for reference. | 
**state** | **String** | The two-letter code for the state where the system is located. See [ISO_3166-2](https://en.wikipedia.org/wiki/ISO_3166-2) for reference. | 
**city** | **String** | The name of the city where the system is located. | 
**postalCode** | **String** | The postal code where the system is located. | 
**timezone** | **String** | The timezone of the system. | 
**connectionType** | [**ConnectionType**](ConnectionType.md) |  | 
**status** | **String** | The current status of the system. You can find this and more in the &#x60;meta&#x60; property. | 
**meta** | [**Meta**](Meta.md) |  | 



## Enum: StatusEnum


* `comm` (value: `"comm"`)

* `power` (value: `"power"`)

* `meter` (value: `"meter"`)

* `meter_issue` (value: `"meter_issue"`)

* `micro` (value: `"micro"`)

* `battery` (value: `"battery"`)

* `storage_idle` (value: `"storage_idle"`)

* `normal` (value: `"normal"`)





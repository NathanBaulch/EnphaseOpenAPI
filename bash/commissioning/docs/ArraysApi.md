# ArraysApi

All URIs are relative to */api/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteSystemArray**](ArraysApi.md#deleteSystemArray) | **DELETE** /partner/systems/{system_id}/arrays/{array_id} | Delete an array by ID
[**getSystemArray**](ArraysApi.md#getSystemArray) | **GET** /partner/systems/{system_id}/arrays/{array_id} | Fetch array details by ID
[**getSystemArrays**](ArraysApi.md#getSystemArrays) | **GET** /partner/systems/{system_id}/arrays | Fetch particular system Array details
[**updateSystemArray**](ArraysApi.md#updateSystemArray) | **PUT** /partner/systems/{system_id}/arrays/{array_id} | Update particular system array details
[**updateSystemArrays**](ArraysApi.md#updateSystemArrays) | **PUT** /partner/systems/{system_id}/arrays | Update all arrays for system



## deleteSystemArray

Delete an array by ID

Delete an array by ID.

### Example

```bash
 deleteSystemArray system_id=value array_id=value
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **systemId** | **integer** | System ID. | [default to null]
 **arrayId** | **integer** | Array ID. | [default to null]

### Return type

[**DeleteSystemArrayResponse**](DeleteSystemArrayResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2), [ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not Applicable
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## getSystemArray

Fetch array details by ID

Fetch array details by ID.

### Example

```bash
 getSystemArray system_id=value array_id=value
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **systemId** | **integer** | System ID. | [default to null]
 **arrayId** | **integer** | Array ID. If an empty value is passed in the Array ID, this endpoint behaves as 'Fetch particular system Array details' endpoint. | [default to null]

### Return type

[**Array**](Array.md)

### Authorization

[OAuth2](../README.md#OAuth2), [ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not Applicable
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## getSystemArrays

Fetch particular system Array details

Fetch particular system Array details.

### Example

```bash
 getSystemArrays system_id=value
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **systemId** | **integer** | System ID. | [default to null]

### Return type

[**Arrays**](Arrays.md)

### Authorization

[OAuth2](../README.md#OAuth2), [ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not Applicable
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## updateSystemArray

Update particular system array details

Update particular system array details. The angle, left, and top fields in the request parameter must be of integer type. Enlighten will rearrange the top and left values of the modules to fit the modules properly and avoid overlap. Therefore, the top and left values in the response may be slightly different from the top and left values passed in the request parameters. In array level, top and left is the total size of the modules inside that array. Overall in arrays, the top and left values should not overlap. In the module level, the size of a panel is 100 units long in the x axis and 200 units long in the y axis. Please pass the left and top values in the request parameter in multiples of 100 and 200 respectively.

### Example

```bash
 updateSystemArray system_id=value array_id=value
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **systemId** | **integer** | System ID. | [default to null]
 **arrayId** | **integer** | Array ID. If an empty value is passed in the Array ID, this endpoint behaves as 'Update all Arrays' endpoint. | [default to null]
 **params** | **ArrayParams** |  | [optional]

### Return type

[**Array**](Array.md)

### Authorization

[OAuth2](../README.md#OAuth2), [ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: application/text
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## updateSystemArrays

Update all arrays for system

Update all arrays for system. The angle, left, and top fields in the request parameter must be of integer type. Enlighten will rearrange the top and left values of the modules to fit the modules properly and avoid overlap. Therefore, the top and left values in the response may be slightly different from the top and left values passed in the request parameters. In array level, top and left is the total size of the modules inside that array. Overall the arrays top and left values should not overlap. In the module level, the size of a panel is 100 units long in the x axis and 200 units long in the y axis. Please pass the left and top values in the request parameter in multiples of 100 and 200 respectively.

### Example

```bash
 updateSystemArrays system_id=value
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **systemId** | **integer** | System ID. | [default to null]
 **params** | [**UpdateSystemArraysRequest**](UpdateSystemArraysRequest.md) |  | [optional]

### Return type

[**Arrays**](Arrays.md)

### Authorization

[OAuth2](../README.md#OAuth2), [ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: application/text
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


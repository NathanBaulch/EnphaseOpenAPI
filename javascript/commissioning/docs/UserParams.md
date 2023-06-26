# TheEnphaseCommissioningApi.UserParams

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**companyId** | **Number** | Enlighten-generated ID of the company to which the user belongs, if any. Use the &#39;company&#39; attribute instead, and the query parameter &#39;expand&#x3D;company&#39; to get detailed company information. | [optional] 
**email** | **String** | Email address of the user. Must be unique within Enlighten. Required. | [optional] 
**enlightenEmails** | **Boolean** | Whether the user receives automated emails from Enlighten. Default false. | [optional] 
**enlightenView** | **String** | Which view of Enlighten the user has. Options &#39;my&#39; for MyEnlighten, &#39;manager&#39; for Enlighten Manager. Default &#39;my&#39;. Users who do not belong to companies should be set to &#39;my&#39;. You must have an agreement with Enphase Energy to set a user to &#39;manager&#39;. | [optional] 
**firstName** | **String** | User&#39;s first name. Required. | [optional] 
**lastName** | **String** | User&#39;s last name. Required. | [optional] 
**phone** | **String** | Telephone number of the user. Optional. | [optional] 



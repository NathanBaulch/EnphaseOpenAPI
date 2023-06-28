/**
 * The Enphase Monitoring API
 * Monitoring API can be used to fetch system details on a site, system-level production and consumption data, and device-level production data.
 *
 * The version of the OpenAPI document: 4.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import StreamSystemLiveDataResponseDataData from './StreamSystemLiveDataResponseDataData';

/**
 * The StreamSystemLiveDataResponseData model module.
 * @module model/StreamSystemLiveDataResponseData
 * @version 4.0
 */
class StreamSystemLiveDataResponseData {
    /**
     * Constructs a new <code>StreamSystemLiveDataResponseData</code>.
     * @alias module:model/StreamSystemLiveDataResponseData
     */
    constructor() { 
        
        StreamSystemLiveDataResponseData.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>StreamSystemLiveDataResponseData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/StreamSystemLiveDataResponseData} obj Optional instance to populate.
     * @return {module:model/StreamSystemLiveDataResponseData} The populated <code>StreamSystemLiveDataResponseData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new StreamSystemLiveDataResponseData();

            if (data.hasOwnProperty('data')) {
                obj['data'] = StreamSystemLiveDataResponseDataData.constructFromObject(data['data']);
            }
            if (data.hasOwnProperty('timestamp_epoch')) {
                obj['timestamp_epoch'] = ApiClient.convertToType(data['timestamp_epoch'], 'Number');
            }
            if (data.hasOwnProperty('timestamp_utc')) {
                obj['timestamp_utc'] = ApiClient.convertToType(data['timestamp_utc'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>StreamSystemLiveDataResponseData</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>StreamSystemLiveDataResponseData</code>.
     */
    static validateJSON(data) {
        // validate the optional field `data`
        if (data['data']) { // data not null
          StreamSystemLiveDataResponseDataData.validateJSON(data['data']);
        }
        // ensure the json data is a string
        if (data['timestamp_utc'] && !(typeof data['timestamp_utc'] === 'string' || data['timestamp_utc'] instanceof String)) {
            throw new Error("Expected the field `timestamp_utc` to be a primitive type in the JSON string but got " + data['timestamp_utc']);
        }
        // ensure the json data is a string
        if (data['type'] && !(typeof data['type'] === 'string' || data['type'] instanceof String)) {
            throw new Error("Expected the field `type` to be a primitive type in the JSON string but got " + data['type']);
        }

        return true;
    }


}



/**
 * @member {module:model/StreamSystemLiveDataResponseDataData} data
 */
StreamSystemLiveDataResponseData.prototype['data'] = undefined;

/**
 * Timestamp in epoch format.
 * @member {Number} timestamp_epoch
 */
StreamSystemLiveDataResponseData.prototype['timestamp_epoch'] = undefined;

/**
 * Timestamp in UTC format.
 * @member {String} timestamp_utc
 */
StreamSystemLiveDataResponseData.prototype['timestamp_utc'] = undefined;

/**
 * response
 * @member {String} type
 */
StreamSystemLiveDataResponseData.prototype['type'] = undefined;






export default StreamSystemLiveDataResponseData;

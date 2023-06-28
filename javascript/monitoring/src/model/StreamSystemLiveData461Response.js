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
import StreamSystemLiveData461ResponseError from './StreamSystemLiveData461ResponseError';

/**
 * The StreamSystemLiveData461Response model module.
 * @module model/StreamSystemLiveData461Response
 * @version 4.0
 */
class StreamSystemLiveData461Response {
    /**
     * Constructs a new <code>StreamSystemLiveData461Response</code>.
     * @alias module:model/StreamSystemLiveData461Response
     */
    constructor() { 
        
        StreamSystemLiveData461Response.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>StreamSystemLiveData461Response</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/StreamSystemLiveData461Response} obj Optional instance to populate.
     * @return {module:model/StreamSystemLiveData461Response} The populated <code>StreamSystemLiveData461Response</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new StreamSystemLiveData461Response();

            if (data.hasOwnProperty('error')) {
                obj['error'] = StreamSystemLiveData461ResponseError.constructFromObject(data['error']);
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
     * Validates the JSON data with respect to <code>StreamSystemLiveData461Response</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>StreamSystemLiveData461Response</code>.
     */
    static validateJSON(data) {
        // validate the optional field `error`
        if (data['error']) { // data not null
          StreamSystemLiveData461ResponseError.validateJSON(data['error']);
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
 * @member {module:model/StreamSystemLiveData461ResponseError} error
 */
StreamSystemLiveData461Response.prototype['error'] = undefined;

/**
 * Timestamp in epoch format.
 * @member {Number} timestamp_epoch
 */
StreamSystemLiveData461Response.prototype['timestamp_epoch'] = undefined;

/**
 * Timestamp in UTC format.
 * @member {String} timestamp_utc
 */
StreamSystemLiveData461Response.prototype['timestamp_utc'] = undefined;

/**
 * validation_error
 * @member {String} type
 */
StreamSystemLiveData461Response.prototype['type'] = undefined;






export default StreamSystemLiveData461Response;

/**
 * The Enlighten Systems API
 * The Enlighten Systems API is a JSON-based API that provides access to performance data for a PV system. By using the Enlighten Systems API, you agree to the Enphase Energy API License Agreement.  Please note that the Enlighten Systems API does not provide performance data at a panel or microinverter level.
 *
 * The version of the OpenAPI document: 2.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The ClientError model module.
 * @module model/ClientError
 * @version 2.0
 */
class ClientError {
    /**
     * Constructs a new <code>ClientError</code>.
     * @alias module:model/ClientError
     * @param reason {String} 
     * @param message {Array.<String>} 
     */
    constructor(reason, message) { 
        
        ClientError.initialize(this, reason, message);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, reason, message) { 
        obj['reason'] = reason;
        obj['message'] = message;
    }

    /**
     * Constructs a <code>ClientError</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ClientError} obj Optional instance to populate.
     * @return {module:model/ClientError} The populated <code>ClientError</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ClientError();

            if (data.hasOwnProperty('reason')) {
                obj['reason'] = ApiClient.convertToType(data['reason'], 'String');
            }
            if (data.hasOwnProperty('message')) {
                obj['message'] = ApiClient.convertToType(data['message'], ['String']);
            }
        }
        return obj;
    }


}

/**
 * @member {String} reason
 */
ClientError.prototype['reason'] = undefined;

/**
 * @member {Array.<String>} message
 */
ClientError.prototype['message'] = undefined;






export default ClientError;


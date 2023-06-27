/**
 * The Enphase Commissioning API
 * Commissioning API can be used to create and update activations on a site, manage companies and users, update Tariff, etc.
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

/**
 * The UnprocessableEntityError model module.
 * @module model/UnprocessableEntityError
 * @version 4.0
 */
class UnprocessableEntityError {
    /**
     * Constructs a new <code>UnprocessableEntityError</code>.
     * @alias module:model/UnprocessableEntityError
     */
    constructor() { 
        
        UnprocessableEntityError.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>UnprocessableEntityError</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UnprocessableEntityError} obj Optional instance to populate.
     * @return {module:model/UnprocessableEntityError} The populated <code>UnprocessableEntityError</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UnprocessableEntityError();

            if (data.hasOwnProperty('errorCode')) {
                obj['errorCode'] = ApiClient.convertToType(data['errorCode'], 'Number');
            }
            if (data.hasOwnProperty('errorMessages')) {
                obj['errorMessages'] = ApiClient.convertToType(data['errorMessages'], ['String']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>UnprocessableEntityError</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>UnprocessableEntityError</code>.
     */
    static validateJSON(data) {
        // ensure the json data is an array
        if (!Array.isArray(data['errorMessages'])) {
            throw new Error("Expected the field `errorMessages` to be an array in the JSON data but got " + data['errorMessages']);
        }

        return true;
    }


}



/**
 * @member {Number} errorCode
 */
UnprocessableEntityError.prototype['errorCode'] = undefined;

/**
 * @member {Array.<String>} errorMessages
 */
UnprocessableEntityError.prototype['errorMessages'] = undefined;






export default UnprocessableEntityError;

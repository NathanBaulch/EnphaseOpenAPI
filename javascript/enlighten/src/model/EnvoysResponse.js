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
import EnvoysResponseEnvoysInner from './EnvoysResponseEnvoysInner';

/**
 * The EnvoysResponse model module.
 * @module model/EnvoysResponse
 * @version 2.0
 */
class EnvoysResponse {
    /**
     * Constructs a new <code>EnvoysResponse</code>.
     * @alias module:model/EnvoysResponse
     * @param systemId {Number} The identifier of the system.
     * @param envoys {Array.<module:model/EnvoysResponseEnvoysInner>} A list of active Envoys on this system.
     */
    constructor(systemId, envoys) { 
        
        EnvoysResponse.initialize(this, systemId, envoys);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, systemId, envoys) { 
        obj['system_id'] = systemId;
        obj['envoys'] = envoys;
    }

    /**
     * Constructs a <code>EnvoysResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EnvoysResponse} obj Optional instance to populate.
     * @return {module:model/EnvoysResponse} The populated <code>EnvoysResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EnvoysResponse();

            if (data.hasOwnProperty('system_id')) {
                obj['system_id'] = ApiClient.convertToType(data['system_id'], 'Number');
            }
            if (data.hasOwnProperty('envoys')) {
                obj['envoys'] = ApiClient.convertToType(data['envoys'], [EnvoysResponseEnvoysInner]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>EnvoysResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>EnvoysResponse</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of EnvoysResponse.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        if (data['envoys']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['envoys'])) {
                throw new Error("Expected the field `envoys` to be an array in the JSON data but got " + data['envoys']);
            }
            // validate the optional field `envoys` (array)
            for (const item of data['envoys']) {
                EnvoysResponseEnvoysInner.validateJsonObject(item);
            };
        }

        return true;
    }


}

EnvoysResponse.RequiredProperties = ["system_id", "envoys"];

/**
 * The identifier of the system.
 * @member {Number} system_id
 */
EnvoysResponse.prototype['system_id'] = undefined;

/**
 * A list of active Envoys on this system.
 * @member {Array.<module:model/EnvoysResponseEnvoysInner>} envoys
 */
EnvoysResponse.prototype['envoys'] = undefined;






export default EnvoysResponse;


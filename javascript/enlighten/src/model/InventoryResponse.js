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
import InventoryResponseEnvoysInner from './InventoryResponseEnvoysInner';
import InventoryResponseMetersInner from './InventoryResponseMetersInner';
import Meta from './Meta';

/**
 * The InventoryResponse model module.
 * @module model/InventoryResponse
 * @version 2.0
 */
class InventoryResponse {
    /**
     * Constructs a new <code>InventoryResponse</code>.
     * @alias module:model/InventoryResponse
     * @param systemId {Number} Enlighten ID for this system.
     * @param inverters {Array.<module:model/InventoryResponseEnvoysInner>} A list of inverters on this system, including serial and model numbers.
     * @param meters {Array.<module:model/InventoryResponseMetersInner>} A list of meters on this system, including serial number, manufacturer, and model number.
     * @param meta {module:model/Meta} 
     */
    constructor(systemId, inverters, meters, meta) { 
        
        InventoryResponse.initialize(this, systemId, inverters, meters, meta);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, systemId, inverters, meters, meta) { 
        obj['system_id'] = systemId;
        obj['inverters'] = inverters;
        obj['meters'] = meters;
        obj['meta'] = meta;
    }

    /**
     * Constructs a <code>InventoryResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InventoryResponse} obj Optional instance to populate.
     * @return {module:model/InventoryResponse} The populated <code>InventoryResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InventoryResponse();

            if (data.hasOwnProperty('system_id')) {
                obj['system_id'] = ApiClient.convertToType(data['system_id'], 'Number');
            }
            if (data.hasOwnProperty('envoys')) {
                obj['envoys'] = ApiClient.convertToType(data['envoys'], [InventoryResponseEnvoysInner]);
            }
            if (data.hasOwnProperty('inverters')) {
                obj['inverters'] = ApiClient.convertToType(data['inverters'], [InventoryResponseEnvoysInner]);
            }
            if (data.hasOwnProperty('meters')) {
                obj['meters'] = ApiClient.convertToType(data['meters'], [InventoryResponseMetersInner]);
            }
            if (data.hasOwnProperty('meta')) {
                obj['meta'] = Meta.constructFromObject(data['meta']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>InventoryResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>InventoryResponse</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of InventoryResponse.RequiredProperties) {
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
                InventoryResponseEnvoysInner.validateJSON(item);
            };
        }
        if (data['inverters']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['inverters'])) {
                throw new Error("Expected the field `inverters` to be an array in the JSON data but got " + data['inverters']);
            }
            // validate the optional field `inverters` (array)
            for (const item of data['inverters']) {
                InventoryResponseEnvoysInner.validateJSON(item);
            };
        }
        if (data['meters']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['meters'])) {
                throw new Error("Expected the field `meters` to be an array in the JSON data but got " + data['meters']);
            }
            // validate the optional field `meters` (array)
            for (const item of data['meters']) {
                InventoryResponseMetersInner.validateJSON(item);
            };
        }
        // validate the optional field `meta`
        if (data['meta']) { // data not null
          Meta.validateJSON(data['meta']);
        }

        return true;
    }


}

InventoryResponse.RequiredProperties = ["system_id", "inverters", "meters", "meta"];

/**
 * Enlighten ID for this system.
 * @member {Number} system_id
 */
InventoryResponse.prototype['system_id'] = undefined;

/**
 * A list of Envoys on this system, including serial number.
 * @member {Array.<module:model/InventoryResponseEnvoysInner>} envoys
 */
InventoryResponse.prototype['envoys'] = undefined;

/**
 * A list of inverters on this system, including serial and model numbers.
 * @member {Array.<module:model/InventoryResponseEnvoysInner>} inverters
 */
InventoryResponse.prototype['inverters'] = undefined;

/**
 * A list of meters on this system, including serial number, manufacturer, and model number.
 * @member {Array.<module:model/InventoryResponseMetersInner>} meters
 */
InventoryResponse.prototype['meters'] = undefined;

/**
 * @member {module:model/Meta} meta
 */
InventoryResponse.prototype['meta'] = undefined;






export default InventoryResponse;


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
 * The InventoryResponseMetersInner model module.
 * @module model/InventoryResponseMetersInner
 * @version 2.0
 */
class InventoryResponseMetersInner {
    /**
     * Constructs a new <code>InventoryResponseMetersInner</code>.
     * @alias module:model/InventoryResponseMetersInner
     * @param sn {String} 
     * @param manufacturer {String} 
     * @param model {String} 
     */
    constructor(sn, manufacturer, model) { 
        
        InventoryResponseMetersInner.initialize(this, sn, manufacturer, model);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, sn, manufacturer, model) { 
        obj['sn'] = sn;
        obj['manufacturer'] = manufacturer;
        obj['model'] = model;
    }

    /**
     * Constructs a <code>InventoryResponseMetersInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InventoryResponseMetersInner} obj Optional instance to populate.
     * @return {module:model/InventoryResponseMetersInner} The populated <code>InventoryResponseMetersInner</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InventoryResponseMetersInner();

            if (data.hasOwnProperty('sn')) {
                obj['sn'] = ApiClient.convertToType(data['sn'], 'String');
            }
            if (data.hasOwnProperty('manufacturer')) {
                obj['manufacturer'] = ApiClient.convertToType(data['manufacturer'], 'String');
            }
            if (data.hasOwnProperty('model')) {
                obj['model'] = ApiClient.convertToType(data['model'], 'String');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('state')) {
                obj['state'] = ApiClient.convertToType(data['state'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>InventoryResponseMetersInner</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>InventoryResponseMetersInner</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of InventoryResponseMetersInner.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['sn'] && !(typeof data['sn'] === 'string' || data['sn'] instanceof String)) {
            throw new Error("Expected the field `sn` to be a primitive type in the JSON string but got " + data['sn']);
        }
        // ensure the json data is a string
        if (data['manufacturer'] && !(typeof data['manufacturer'] === 'string' || data['manufacturer'] instanceof String)) {
            throw new Error("Expected the field `manufacturer` to be a primitive type in the JSON string but got " + data['manufacturer']);
        }
        // ensure the json data is a string
        if (data['model'] && !(typeof data['model'] === 'string' || data['model'] instanceof String)) {
            throw new Error("Expected the field `model` to be a primitive type in the JSON string but got " + data['model']);
        }
        // ensure the json data is a string
        if (data['status'] && !(typeof data['status'] === 'string' || data['status'] instanceof String)) {
            throw new Error("Expected the field `status` to be a primitive type in the JSON string but got " + data['status']);
        }
        // ensure the json data is a string
        if (data['state'] && !(typeof data['state'] === 'string' || data['state'] instanceof String)) {
            throw new Error("Expected the field `state` to be a primitive type in the JSON string but got " + data['state']);
        }

        return true;
    }


}

InventoryResponseMetersInner.RequiredProperties = ["sn", "manufacturer", "model"];

/**
 * @member {String} sn
 */
InventoryResponseMetersInner.prototype['sn'] = undefined;

/**
 * @member {String} manufacturer
 */
InventoryResponseMetersInner.prototype['manufacturer'] = undefined;

/**
 * @member {String} model
 */
InventoryResponseMetersInner.prototype['model'] = undefined;

/**
 * @member {String} status
 */
InventoryResponseMetersInner.prototype['status'] = undefined;

/**
 * @member {String} state
 */
InventoryResponseMetersInner.prototype['state'] = undefined;






export default InventoryResponseMetersInner;


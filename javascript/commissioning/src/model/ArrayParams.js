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
import ArrayParamsModulesInner from './ArrayParamsModulesInner';

/**
 * The ArrayParams model module.
 * @module model/ArrayParams
 * @version 4.0
 */
class ArrayParams {
    /**
     * Constructs a new <code>ArrayParams</code>.
     * @alias module:model/ArrayParams
     * @param label {String} Name of the array.
     * @param angle {Number} Angle of the array. Rotate the array clockwise by the given value.
     * @param tilt {String} Tilt of the array.
     * @param provisionedEnvoy {String} Provisioned envoy.
     * @param left {Number} Left axis position of array. Increase the value to move the array to the right, and decrease to move it to the left.
     * @param top {Number} Top axis position of array. Increase the value to move the array up, and decrease to move it down.
     * @param modules {Array.<module:model/ArrayParamsModulesInner>} 
     */
    constructor(label, angle, tilt, provisionedEnvoy, left, top, modules) { 
        
        ArrayParams.initialize(this, label, angle, tilt, provisionedEnvoy, left, top, modules);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, label, angle, tilt, provisionedEnvoy, left, top, modules) { 
        obj['label'] = label;
        obj['angle'] = angle;
        obj['tilt'] = tilt;
        obj['provisioned_envoy'] = provisionedEnvoy;
        obj['left'] = left;
        obj['top'] = top;
        obj['modules'] = modules;
    }

    /**
     * Constructs a <code>ArrayParams</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ArrayParams} obj Optional instance to populate.
     * @return {module:model/ArrayParams} The populated <code>ArrayParams</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ArrayParams();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('label')) {
                obj['label'] = ApiClient.convertToType(data['label'], 'String');
            }
            if (data.hasOwnProperty('angle')) {
                obj['angle'] = ApiClient.convertToType(data['angle'], 'Number');
            }
            if (data.hasOwnProperty('tilt')) {
                obj['tilt'] = ApiClient.convertToType(data['tilt'], 'String');
            }
            if (data.hasOwnProperty('provisioned_envoy')) {
                obj['provisioned_envoy'] = ApiClient.convertToType(data['provisioned_envoy'], 'String');
            }
            if (data.hasOwnProperty('left')) {
                obj['left'] = ApiClient.convertToType(data['left'], 'Number');
            }
            if (data.hasOwnProperty('top')) {
                obj['top'] = ApiClient.convertToType(data['top'], 'Number');
            }
            if (data.hasOwnProperty('modules')) {
                obj['modules'] = ApiClient.convertToType(data['modules'], [ArrayParamsModulesInner]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ArrayParams</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ArrayParams</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of ArrayParams.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['label'] && !(typeof data['label'] === 'string' || data['label'] instanceof String)) {
            throw new Error("Expected the field `label` to be a primitive type in the JSON string but got " + data['label']);
        }
        // ensure the json data is a string
        if (data['tilt'] && !(typeof data['tilt'] === 'string' || data['tilt'] instanceof String)) {
            throw new Error("Expected the field `tilt` to be a primitive type in the JSON string but got " + data['tilt']);
        }
        // ensure the json data is a string
        if (data['provisioned_envoy'] && !(typeof data['provisioned_envoy'] === 'string' || data['provisioned_envoy'] instanceof String)) {
            throw new Error("Expected the field `provisioned_envoy` to be a primitive type in the JSON string but got " + data['provisioned_envoy']);
        }
        if (data['modules']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['modules'])) {
                throw new Error("Expected the field `modules` to be an array in the JSON data but got " + data['modules']);
            }
            // validate the optional field `modules` (array)
            for (const item of data['modules']) {
                ArrayParamsModulesInner.validateJSON(item);
            };
        }

        return true;
    }


}

ArrayParams.RequiredProperties = ["label", "angle", "tilt", "provisioned_envoy", "left", "top", "modules"];

/**
 * ID of the array. ID cannot be changed. It is only used to identify the array that needs to be updated.
 * @member {Number} id
 */
ArrayParams.prototype['id'] = undefined;

/**
 * Name of the array.
 * @member {String} label
 */
ArrayParams.prototype['label'] = undefined;

/**
 * Angle of the array. Rotate the array clockwise by the given value.
 * @member {Number} angle
 */
ArrayParams.prototype['angle'] = undefined;

/**
 * Tilt of the array.
 * @member {String} tilt
 */
ArrayParams.prototype['tilt'] = undefined;

/**
 * Provisioned envoy.
 * @member {String} provisioned_envoy
 */
ArrayParams.prototype['provisioned_envoy'] = undefined;

/**
 * Left axis position of array. Increase the value to move the array to the right, and decrease to move it to the left.
 * @member {Number} left
 */
ArrayParams.prototype['left'] = undefined;

/**
 * Top axis position of array. Increase the value to move the array up, and decrease to move it down.
 * @member {Number} top
 */
ArrayParams.prototype['top'] = undefined;

/**
 * @member {Array.<module:model/ArrayParamsModulesInner>} modules
 */
ArrayParams.prototype['modules'] = undefined;






export default ArrayParams;

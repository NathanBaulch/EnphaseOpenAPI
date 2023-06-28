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
import CompanyRoleEnum from './CompanyRoleEnum';

/**
 * The ActivationHostCompany model module.
 * @module model/ActivationHostCompany
 * @version 4.0
 */
class ActivationHostCompany {
    /**
     * Constructs a new <code>ActivationHostCompany</code>.
     * A hash of information about the system host&#39;s company. Use the query parameter &#39;expand&#x3D;host.company&#39; to get system host company detail.
     * @alias module:model/ActivationHostCompany
     */
    constructor() { 
        
        ActivationHostCompany.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ActivationHostCompany</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ActivationHostCompany} obj Optional instance to populate.
     * @return {module:model/ActivationHostCompany} The populated <code>ActivationHostCompany</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ActivationHostCompany();

            if (data.hasOwnProperty('company_id')) {
                obj['company_id'] = ApiClient.convertToType(data['company_id'], 'Number');
            }
            if (data.hasOwnProperty('company_name')) {
                obj['company_name'] = ApiClient.convertToType(data['company_name'], 'String');
            }
            if (data.hasOwnProperty('location')) {
                obj['location'] = ApiClient.convertToType(data['location'], 'String');
            }
            if (data.hasOwnProperty('roles')) {
                obj['roles'] = ApiClient.convertToType(data['roles'], [CompanyRoleEnum]);
            }
            if (data.hasOwnProperty('uri')) {
                obj['uri'] = ApiClient.convertToType(data['uri'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ActivationHostCompany</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ActivationHostCompany</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['company_name'] && !(typeof data['company_name'] === 'string' || data['company_name'] instanceof String)) {
            throw new Error("Expected the field `company_name` to be a primitive type in the JSON string but got " + data['company_name']);
        }
        // ensure the json data is a string
        if (data['location'] && !(typeof data['location'] === 'string' || data['location'] instanceof String)) {
            throw new Error("Expected the field `location` to be a primitive type in the JSON string but got " + data['location']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['roles'])) {
            throw new Error("Expected the field `roles` to be an array in the JSON data but got " + data['roles']);
        }
        // ensure the json data is a string
        if (data['uri'] && !(typeof data['uri'] === 'string' || data['uri'] instanceof String)) {
            throw new Error("Expected the field `uri` to be a primitive type in the JSON string but got " + data['uri']);
        }

        return true;
    }


}



/**
 * @member {Number} company_id
 */
ActivationHostCompany.prototype['company_id'] = undefined;

/**
 * @member {String} company_name
 */
ActivationHostCompany.prototype['company_name'] = undefined;

/**
 * @member {String} location
 */
ActivationHostCompany.prototype['location'] = undefined;

/**
 * What type of company this is in Enphase. For installer company roles will be ['installer']. For other role roles will be empty.
 * @member {Array.<module:model/CompanyRoleEnum>} roles
 */
ActivationHostCompany.prototype['roles'] = undefined;

/**
 * @member {String} uri
 */
ActivationHostCompany.prototype['uri'] = undefined;






export default ActivationHostCompany;

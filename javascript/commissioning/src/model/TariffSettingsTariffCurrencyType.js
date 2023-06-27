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
 * The TariffSettingsTariffCurrencyType model module.
 * @module model/TariffSettingsTariffCurrencyType
 * @version 4.0
 */
class TariffSettingsTariffCurrencyType {
    /**
     * Constructs a new <code>TariffSettingsTariffCurrencyType</code>.
     * Currency type.
     * @alias module:model/TariffSettingsTariffCurrencyType
     */
    constructor() { 
        
        TariffSettingsTariffCurrencyType.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TariffSettingsTariffCurrencyType</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TariffSettingsTariffCurrencyType} obj Optional instance to populate.
     * @return {module:model/TariffSettingsTariffCurrencyType} The populated <code>TariffSettingsTariffCurrencyType</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TariffSettingsTariffCurrencyType();

            if (data.hasOwnProperty('code')) {
                obj['code'] = ApiClient.convertToType(data['code'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>TariffSettingsTariffCurrencyType</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TariffSettingsTariffCurrencyType</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['code'] && !(typeof data['code'] === 'string' || data['code'] instanceof String)) {
            throw new Error("Expected the field `code` to be a primitive type in the JSON string but got " + data['code']);
        }

        return true;
    }


}



/**
 * Tariff currency code. e.g='USD'.
 * @member {String} code
 */
TariffSettingsTariffCurrencyType.prototype['code'] = undefined;






export default TariffSettingsTariffCurrencyType;

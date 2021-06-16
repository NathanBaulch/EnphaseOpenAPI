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
import InlineResponse2003Envoys from './InlineResponse2003Envoys';
import InlineResponse2003Meters from './InlineResponse2003Meters';
import Meta from './Meta';

/**
 * The InlineResponse2003 model module.
 * @module model/InlineResponse2003
 * @version 2.0
 */
class InlineResponse2003 {
    /**
     * Constructs a new <code>InlineResponse2003</code>.
     * @alias module:model/InlineResponse2003
     * @param systemId {Number} Enlighten ID for this system.
     * @param inverters {Array.<module:model/InlineResponse2003Envoys>} A list of inverters on this system, including serial and model numbers.
     * @param meters {Array.<module:model/InlineResponse2003Meters>} A list of meters on this system, including serial number, manufacturer, and model number.
     * @param meta {module:model/Meta} 
     */
    constructor(systemId, inverters, meters, meta) { 
        
        InlineResponse2003.initialize(this, systemId, inverters, meters, meta);
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
     * Constructs a <code>InlineResponse2003</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse2003} obj Optional instance to populate.
     * @return {module:model/InlineResponse2003} The populated <code>InlineResponse2003</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse2003();

            if (data.hasOwnProperty('system_id')) {
                obj['system_id'] = ApiClient.convertToType(data['system_id'], 'Number');
            }
            if (data.hasOwnProperty('envoys')) {
                obj['envoys'] = ApiClient.convertToType(data['envoys'], [InlineResponse2003Envoys]);
            }
            if (data.hasOwnProperty('inverters')) {
                obj['inverters'] = ApiClient.convertToType(data['inverters'], [InlineResponse2003Envoys]);
            }
            if (data.hasOwnProperty('meters')) {
                obj['meters'] = ApiClient.convertToType(data['meters'], [InlineResponse2003Meters]);
            }
            if (data.hasOwnProperty('meta')) {
                obj['meta'] = Meta.constructFromObject(data['meta']);
            }
        }
        return obj;
    }


}

/**
 * Enlighten ID for this system.
 * @member {Number} system_id
 */
InlineResponse2003.prototype['system_id'] = undefined;

/**
 * A list of Envoys on this system, including serial number.
 * @member {Array.<module:model/InlineResponse2003Envoys>} envoys
 */
InlineResponse2003.prototype['envoys'] = undefined;

/**
 * A list of inverters on this system, including serial and model numbers.
 * @member {Array.<module:model/InlineResponse2003Envoys>} inverters
 */
InlineResponse2003.prototype['inverters'] = undefined;

/**
 * A list of meters on this system, including serial number, manufacturer, and model number.
 * @member {Array.<module:model/InlineResponse2003Meters>} meters
 */
InlineResponse2003.prototype['meters'] = undefined;

/**
 * @member {module:model/Meta} meta
 */
InlineResponse2003.prototype['meta'] = undefined;






export default InlineResponse2003;


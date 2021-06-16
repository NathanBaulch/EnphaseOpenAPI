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
import InlineResponse2004MicroInverters from './InlineResponse2004MicroInverters';

/**
 * The InlineResponse2004 model module.
 * @module model/InlineResponse2004
 * @version 2.0
 */
class InlineResponse2004 {
    /**
     * Constructs a new <code>InlineResponse2004</code>.
     * @alias module:model/InlineResponse2004
     * @param signalStrength {Number} 
     * @param microInverters {Array.<module:model/InlineResponse2004MicroInverters>} A list of active inverters on this system, including serial and model numbers.
     */
    constructor(signalStrength, microInverters) { 
        
        InlineResponse2004.initialize(this, signalStrength, microInverters);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, signalStrength, microInverters) { 
        obj['signal_strength'] = signalStrength;
        obj['micro_inverters'] = microInverters;
    }

    /**
     * Constructs a <code>InlineResponse2004</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse2004} obj Optional instance to populate.
     * @return {module:model/InlineResponse2004} The populated <code>InlineResponse2004</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse2004();

            if (data.hasOwnProperty('signal_strength')) {
                obj['signal_strength'] = ApiClient.convertToType(data['signal_strength'], 'Number');
            }
            if (data.hasOwnProperty('micro_inverters')) {
                obj['micro_inverters'] = ApiClient.convertToType(data['micro_inverters'], [InlineResponse2004MicroInverters]);
            }
        }
        return obj;
    }


}

/**
 * @member {Number} signal_strength
 */
InlineResponse2004.prototype['signal_strength'] = undefined;

/**
 * A list of active inverters on this system, including serial and model numbers.
 * @member {Array.<module:model/InlineResponse2004MicroInverters>} micro_inverters
 */
InlineResponse2004.prototype['micro_inverters'] = undefined;






export default InlineResponse2004;


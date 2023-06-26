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
import Meta from './Meta';
import RgmStatsResponseIntervalsInner from './RgmStatsResponseIntervalsInner';
import RgmStatsResponseMeterIntervalsInner from './RgmStatsResponseMeterIntervalsInner';

/**
 * The RgmStatsResponse model module.
 * @module model/RgmStatsResponse
 * @version 2.0
 */
class RgmStatsResponse {
    /**
     * Constructs a new <code>RgmStatsResponse</code>.
     * @alias module:model/RgmStatsResponse
     * @param systemId {Number} Enlighten ID for this system.
     * @param totalDevices {Number} Number of active revenue-grade meters for this system.
     * @param meta {module:model/Meta} 
     * @param intervals {Array.<module:model/RgmStatsResponseIntervalsInner>} A list of intervals between the requested start and end times.
     * @param meterIntervals {Array.<module:model/RgmStatsResponseMeterIntervalsInner>} A list of intervals of a meter between the requested start and end times.
     */
    constructor(systemId, totalDevices, meta, intervals, meterIntervals) { 
        
        RgmStatsResponse.initialize(this, systemId, totalDevices, meta, intervals, meterIntervals);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, systemId, totalDevices, meta, intervals, meterIntervals) { 
        obj['system_id'] = systemId;
        obj['total_devices'] = totalDevices;
        obj['meta'] = meta;
        obj['intervals'] = intervals;
        obj['meter_intervals'] = meterIntervals;
    }

    /**
     * Constructs a <code>RgmStatsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RgmStatsResponse} obj Optional instance to populate.
     * @return {module:model/RgmStatsResponse} The populated <code>RgmStatsResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RgmStatsResponse();

            if (data.hasOwnProperty('system_id')) {
                obj['system_id'] = ApiClient.convertToType(data['system_id'], 'Number');
            }
            if (data.hasOwnProperty('total_devices')) {
                obj['total_devices'] = ApiClient.convertToType(data['total_devices'], 'Number');
            }
            if (data.hasOwnProperty('meta')) {
                obj['meta'] = Meta.constructFromObject(data['meta']);
            }
            if (data.hasOwnProperty('intervals')) {
                obj['intervals'] = ApiClient.convertToType(data['intervals'], [RgmStatsResponseIntervalsInner]);
            }
            if (data.hasOwnProperty('meter_intervals')) {
                obj['meter_intervals'] = ApiClient.convertToType(data['meter_intervals'], [RgmStatsResponseMeterIntervalsInner]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>RgmStatsResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>RgmStatsResponse</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of RgmStatsResponse.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // validate the optional field `meta`
        if (data['meta']) { // data not null
          Meta.validateJSON(data['meta']);
        }
        if (data['intervals']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['intervals'])) {
                throw new Error("Expected the field `intervals` to be an array in the JSON data but got " + data['intervals']);
            }
            // validate the optional field `intervals` (array)
            for (const item of data['intervals']) {
                RgmStatsResponseIntervalsInner.validateJSON(item);
            };
        }
        if (data['meter_intervals']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['meter_intervals'])) {
                throw new Error("Expected the field `meter_intervals` to be an array in the JSON data but got " + data['meter_intervals']);
            }
            // validate the optional field `meter_intervals` (array)
            for (const item of data['meter_intervals']) {
                RgmStatsResponseMeterIntervalsInner.validateJSON(item);
            };
        }

        return true;
    }


}

RgmStatsResponse.RequiredProperties = ["system_id", "total_devices", "meta", "intervals", "meter_intervals"];

/**
 * Enlighten ID for this system.
 * @member {Number} system_id
 */
RgmStatsResponse.prototype['system_id'] = undefined;

/**
 * Number of active revenue-grade meters for this system.
 * @member {Number} total_devices
 */
RgmStatsResponse.prototype['total_devices'] = undefined;

/**
 * @member {module:model/Meta} meta
 */
RgmStatsResponse.prototype['meta'] = undefined;

/**
 * A list of intervals between the requested start and end times.
 * @member {Array.<module:model/RgmStatsResponseIntervalsInner>} intervals
 */
RgmStatsResponse.prototype['intervals'] = undefined;

/**
 * A list of intervals of a meter between the requested start and end times.
 * @member {Array.<module:model/RgmStatsResponseMeterIntervalsInner>} meter_intervals
 */
RgmStatsResponse.prototype['meter_intervals'] = undefined;






export default RgmStatsResponse;


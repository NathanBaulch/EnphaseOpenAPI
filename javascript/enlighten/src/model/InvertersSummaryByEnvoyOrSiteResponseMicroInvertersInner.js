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
import InvertersSummaryByEnvoyOrSiteResponseMicroInvertersInnerEnergy from './InvertersSummaryByEnvoyOrSiteResponseMicroInvertersInnerEnergy';
import InvertersSummaryByEnvoyOrSiteResponseMicroInvertersInnerPowerProduced from './InvertersSummaryByEnvoyOrSiteResponseMicroInvertersInnerPowerProduced';

/**
 * The InvertersSummaryByEnvoyOrSiteResponseMicroInvertersInner model module.
 * @module model/InvertersSummaryByEnvoyOrSiteResponseMicroInvertersInner
 * @version 2.0
 */
class InvertersSummaryByEnvoyOrSiteResponseMicroInvertersInner {
    /**
     * Constructs a new <code>InvertersSummaryByEnvoyOrSiteResponseMicroInvertersInner</code>.
     * @alias module:model/InvertersSummaryByEnvoyOrSiteResponseMicroInvertersInner
     * @param id {Number} 
     * @param model {String} Model number of this Microinverter.
     * @param partNumber {String} The Enphase part number of this Microinverter.
     * @param serialNumber {String} The serial number of this Microinverter.
     * @param sku {String} 
     * @param status {module:model/InvertersSummaryByEnvoyOrSiteResponseMicroInvertersInner.StatusEnum} The current status of this Microinverter. * `normal` - The microinverter is operating normally. * `power` - There is a production issue. * `micro` - The microinverter is not reporting. * `retired` - The microinverter is retired.
     * @param powerProduced {module:model/InvertersSummaryByEnvoyOrSiteResponseMicroInvertersInnerPowerProduced} 
     * @param procLoad {String} 
     * @param paramTable {String} 
     * @param envoySerialNumber {String} 
     * @param energy {module:model/InvertersSummaryByEnvoyOrSiteResponseMicroInvertersInnerEnergy} 
     * @param gridProfile {String} 
     * @param lastReportDate {Date} The last time this device submitted a report, by default expressed in Unix epoch time. If Enlighten has no record of a report from this Envoy, returns null.
     */
    constructor(id, model, partNumber, serialNumber, sku, status, powerProduced, procLoad, paramTable, envoySerialNumber, energy, gridProfile, lastReportDate) { 
        
        InvertersSummaryByEnvoyOrSiteResponseMicroInvertersInner.initialize(this, id, model, partNumber, serialNumber, sku, status, powerProduced, procLoad, paramTable, envoySerialNumber, energy, gridProfile, lastReportDate);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, model, partNumber, serialNumber, sku, status, powerProduced, procLoad, paramTable, envoySerialNumber, energy, gridProfile, lastReportDate) { 
        obj['id'] = id;
        obj['model'] = model;
        obj['part_number'] = partNumber;
        obj['serial_number'] = serialNumber;
        obj['sku'] = sku;
        obj['status'] = status;
        obj['power_produced'] = powerProduced;
        obj['proc_load'] = procLoad;
        obj['param_table'] = paramTable;
        obj['envoy_serial_number'] = envoySerialNumber;
        obj['energy'] = energy;
        obj['grid_profile'] = gridProfile;
        obj['last_report_date'] = lastReportDate;
    }

    /**
     * Constructs a <code>InvertersSummaryByEnvoyOrSiteResponseMicroInvertersInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InvertersSummaryByEnvoyOrSiteResponseMicroInvertersInner} obj Optional instance to populate.
     * @return {module:model/InvertersSummaryByEnvoyOrSiteResponseMicroInvertersInner} The populated <code>InvertersSummaryByEnvoyOrSiteResponseMicroInvertersInner</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InvertersSummaryByEnvoyOrSiteResponseMicroInvertersInner();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('model')) {
                obj['model'] = ApiClient.convertToType(data['model'], 'String');
            }
            if (data.hasOwnProperty('part_number')) {
                obj['part_number'] = ApiClient.convertToType(data['part_number'], 'String');
            }
            if (data.hasOwnProperty('serial_number')) {
                obj['serial_number'] = ApiClient.convertToType(data['serial_number'], 'String');
            }
            if (data.hasOwnProperty('sku')) {
                obj['sku'] = ApiClient.convertToType(data['sku'], 'String');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('power_produced')) {
                obj['power_produced'] = InvertersSummaryByEnvoyOrSiteResponseMicroInvertersInnerPowerProduced.constructFromObject(data['power_produced']);
            }
            if (data.hasOwnProperty('proc_load')) {
                obj['proc_load'] = ApiClient.convertToType(data['proc_load'], 'String');
            }
            if (data.hasOwnProperty('param_table')) {
                obj['param_table'] = ApiClient.convertToType(data['param_table'], 'String');
            }
            if (data.hasOwnProperty('envoy_serial_number')) {
                obj['envoy_serial_number'] = ApiClient.convertToType(data['envoy_serial_number'], 'String');
            }
            if (data.hasOwnProperty('energy')) {
                obj['energy'] = InvertersSummaryByEnvoyOrSiteResponseMicroInvertersInnerEnergy.constructFromObject(data['energy']);
            }
            if (data.hasOwnProperty('grid_profile')) {
                obj['grid_profile'] = ApiClient.convertToType(data['grid_profile'], 'String');
            }
            if (data.hasOwnProperty('last_report_date')) {
                obj['last_report_date'] = ApiClient.convertToType(data['last_report_date'], 'Date');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>InvertersSummaryByEnvoyOrSiteResponseMicroInvertersInner</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>InvertersSummaryByEnvoyOrSiteResponseMicroInvertersInner</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of InvertersSummaryByEnvoyOrSiteResponseMicroInvertersInner.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['model'] && !(typeof data['model'] === 'string' || data['model'] instanceof String)) {
            throw new Error("Expected the field `model` to be a primitive type in the JSON string but got " + data['model']);
        }
        // ensure the json data is a string
        if (data['part_number'] && !(typeof data['part_number'] === 'string' || data['part_number'] instanceof String)) {
            throw new Error("Expected the field `part_number` to be a primitive type in the JSON string but got " + data['part_number']);
        }
        // ensure the json data is a string
        if (data['serial_number'] && !(typeof data['serial_number'] === 'string' || data['serial_number'] instanceof String)) {
            throw new Error("Expected the field `serial_number` to be a primitive type in the JSON string but got " + data['serial_number']);
        }
        // ensure the json data is a string
        if (data['sku'] && !(typeof data['sku'] === 'string' || data['sku'] instanceof String)) {
            throw new Error("Expected the field `sku` to be a primitive type in the JSON string but got " + data['sku']);
        }
        // ensure the json data is a string
        if (data['status'] && !(typeof data['status'] === 'string' || data['status'] instanceof String)) {
            throw new Error("Expected the field `status` to be a primitive type in the JSON string but got " + data['status']);
        }
        // validate the optional field `power_produced`
        if (data['power_produced']) { // data not null
          InvertersSummaryByEnvoyOrSiteResponseMicroInvertersInnerPowerProduced.validateJSON(data['power_produced']);
        }
        // ensure the json data is a string
        if (data['proc_load'] && !(typeof data['proc_load'] === 'string' || data['proc_load'] instanceof String)) {
            throw new Error("Expected the field `proc_load` to be a primitive type in the JSON string but got " + data['proc_load']);
        }
        // ensure the json data is a string
        if (data['param_table'] && !(typeof data['param_table'] === 'string' || data['param_table'] instanceof String)) {
            throw new Error("Expected the field `param_table` to be a primitive type in the JSON string but got " + data['param_table']);
        }
        // ensure the json data is a string
        if (data['envoy_serial_number'] && !(typeof data['envoy_serial_number'] === 'string' || data['envoy_serial_number'] instanceof String)) {
            throw new Error("Expected the field `envoy_serial_number` to be a primitive type in the JSON string but got " + data['envoy_serial_number']);
        }
        // validate the optional field `energy`
        if (data['energy']) { // data not null
          InvertersSummaryByEnvoyOrSiteResponseMicroInvertersInnerEnergy.validateJSON(data['energy']);
        }
        // ensure the json data is a string
        if (data['grid_profile'] && !(typeof data['grid_profile'] === 'string' || data['grid_profile'] instanceof String)) {
            throw new Error("Expected the field `grid_profile` to be a primitive type in the JSON string but got " + data['grid_profile']);
        }

        return true;
    }


}

InvertersSummaryByEnvoyOrSiteResponseMicroInvertersInner.RequiredProperties = ["id", "model", "part_number", "serial_number", "sku", "status", "power_produced", "proc_load", "param_table", "envoy_serial_number", "energy", "grid_profile", "last_report_date"];

/**
 * @member {Number} id
 */
InvertersSummaryByEnvoyOrSiteResponseMicroInvertersInner.prototype['id'] = undefined;

/**
 * Model number of this Microinverter.
 * @member {String} model
 */
InvertersSummaryByEnvoyOrSiteResponseMicroInvertersInner.prototype['model'] = undefined;

/**
 * The Enphase part number of this Microinverter.
 * @member {String} part_number
 */
InvertersSummaryByEnvoyOrSiteResponseMicroInvertersInner.prototype['part_number'] = undefined;

/**
 * The serial number of this Microinverter.
 * @member {String} serial_number
 */
InvertersSummaryByEnvoyOrSiteResponseMicroInvertersInner.prototype['serial_number'] = undefined;

/**
 * @member {String} sku
 */
InvertersSummaryByEnvoyOrSiteResponseMicroInvertersInner.prototype['sku'] = undefined;

/**
 * The current status of this Microinverter. * `normal` - The microinverter is operating normally. * `power` - There is a production issue. * `micro` - The microinverter is not reporting. * `retired` - The microinverter is retired.
 * @member {module:model/InvertersSummaryByEnvoyOrSiteResponseMicroInvertersInner.StatusEnum} status
 */
InvertersSummaryByEnvoyOrSiteResponseMicroInvertersInner.prototype['status'] = undefined;

/**
 * @member {module:model/InvertersSummaryByEnvoyOrSiteResponseMicroInvertersInnerPowerProduced} power_produced
 */
InvertersSummaryByEnvoyOrSiteResponseMicroInvertersInner.prototype['power_produced'] = undefined;

/**
 * @member {String} proc_load
 */
InvertersSummaryByEnvoyOrSiteResponseMicroInvertersInner.prototype['proc_load'] = undefined;

/**
 * @member {String} param_table
 */
InvertersSummaryByEnvoyOrSiteResponseMicroInvertersInner.prototype['param_table'] = undefined;

/**
 * @member {String} envoy_serial_number
 */
InvertersSummaryByEnvoyOrSiteResponseMicroInvertersInner.prototype['envoy_serial_number'] = undefined;

/**
 * @member {module:model/InvertersSummaryByEnvoyOrSiteResponseMicroInvertersInnerEnergy} energy
 */
InvertersSummaryByEnvoyOrSiteResponseMicroInvertersInner.prototype['energy'] = undefined;

/**
 * @member {String} grid_profile
 */
InvertersSummaryByEnvoyOrSiteResponseMicroInvertersInner.prototype['grid_profile'] = undefined;

/**
 * The last time this device submitted a report, by default expressed in Unix epoch time. If Enlighten has no record of a report from this Envoy, returns null.
 * @member {Date} last_report_date
 */
InvertersSummaryByEnvoyOrSiteResponseMicroInvertersInner.prototype['last_report_date'] = undefined;





/**
 * Allowed values for the <code>status</code> property.
 * @enum {String}
 * @readonly
 */
InvertersSummaryByEnvoyOrSiteResponseMicroInvertersInner['StatusEnum'] = {

    /**
     * value: "normal"
     * @const
     */
    "normal": "normal",

    /**
     * value: "power"
     * @const
     */
    "power": "power",

    /**
     * value: "micro"
     * @const
     */
    "micro": "micro",

    /**
     * value: "retired"
     * @const
     */
    "retired": "retired"
};



export default InvertersSummaryByEnvoyOrSiteResponseMicroInvertersInner;


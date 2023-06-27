/**
 * The Enphase Monitoring API
 * Monitoring API can be used to fetch system details on a site, system-level production and consumption data, and device-level production data.
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
import SystemDetails from './SystemDetails';

/**
 * The SearchSystemsResponse model module.
 * @module model/SearchSystemsResponse
 * @version 4.0
 */
class SearchSystemsResponse {
    /**
     * Constructs a new <code>SearchSystemsResponse</code>.
     * @alias module:model/SearchSystemsResponse
     */
    constructor() { 
        
        SearchSystemsResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SearchSystemsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SearchSystemsResponse} obj Optional instance to populate.
     * @return {module:model/SearchSystemsResponse} The populated <code>SearchSystemsResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SearchSystemsResponse();

            if (data.hasOwnProperty('total')) {
                obj['total'] = ApiClient.convertToType(data['total'], 'Number');
            }
            if (data.hasOwnProperty('current_page')) {
                obj['current_page'] = ApiClient.convertToType(data['current_page'], 'Number');
            }
            if (data.hasOwnProperty('size')) {
                obj['size'] = ApiClient.convertToType(data['size'], 'Number');
            }
            if (data.hasOwnProperty('count')) {
                obj['count'] = ApiClient.convertToType(data['count'], 'Number');
            }
            if (data.hasOwnProperty('items')) {
                obj['items'] = ApiClient.convertToType(data['items'], 'String');
            }
            if (data.hasOwnProperty('systems')) {
                obj['systems'] = ApiClient.convertToType(data['systems'], [SystemDetails]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>SearchSystemsResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>SearchSystemsResponse</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['items'] && !(typeof data['items'] === 'string' || data['items'] instanceof String)) {
            throw new Error("Expected the field `items` to be a primitive type in the JSON string but got " + data['items']);
        }
        if (data['systems']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['systems'])) {
                throw new Error("Expected the field `systems` to be an array in the JSON data but got " + data['systems']);
            }
            // validate the optional field `systems` (array)
            for (const item of data['systems']) {
                SystemDetails.validateJSON(item);
            };
        }

        return true;
    }


}



/**
 * Total number of systems available.
 * @member {Number} total
 */
SearchSystemsResponse.prototype['total'] = undefined;

/**
 * Current page of the systems result. Default is 1.
 * @member {Number} current_page
 */
SearchSystemsResponse.prototype['current_page'] = undefined;

/**
 * Max number of records from API per page is 100. Default is 10.
 * @member {Number} size
 */
SearchSystemsResponse.prototype['size'] = undefined;

/**
 * Total number of systems actually returned for the current page.
 * @member {Number} count
 */
SearchSystemsResponse.prototype['count'] = undefined;

/**
 * Named key of the list data. In this endpoint, it is systems.
 * @member {String} items
 */
SearchSystemsResponse.prototype['items'] = undefined;

/**
 * List of filtered systems.
 * @member {Array.<module:model/SystemDetails>} systems
 */
SearchSystemsResponse.prototype['systems'] = undefined;






export default SearchSystemsResponse;


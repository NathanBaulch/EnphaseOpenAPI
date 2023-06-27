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
 * The GetCompanyUsersResponseUsersInner model module.
 * @module model/GetCompanyUsersResponseUsersInner
 * @version 4.0
 */
class GetCompanyUsersResponseUsersInner {
    /**
     * Constructs a new <code>GetCompanyUsersResponseUsersInner</code>.
     * @alias module:model/GetCompanyUsersResponseUsersInner
     * @param {(module:model/Number|module:model/String)} instance The actual instance to initialize GetCompanyUsersResponseUsersInner.
     */
    constructor(instance = null) {
        if (instance === null) {
            this.actualInstance = null;
            return;
        }
        var match = 0;
        var errorMessages = [];
        try {
            // validate integer
            if (!(typeof instance === 'number' && instance % 1 === 0)) {
                throw new Error("Invalid value. Must be integer. Input: " + JSON.stringify(instance));
            }
            this.actualInstance = instance;
            match++;
        } catch(err) {
            // json data failed to deserialize into Number
            errorMessages.push("Failed to construct Number: " + err)
        }

        try {
            // validate string
            if (!(typeof instance === 'string')) {
                throw new Error("Invalid value. Must be string. Input: " + JSON.stringify(instance));
            }
            this.actualInstance = instance;
            match++;
        } catch(err) {
            // json data failed to deserialize into String
            errorMessages.push("Failed to construct String: " + err)
        }

        if (match > 1) {
            throw new Error("Multiple matches found constructing `GetCompanyUsersResponseUsersInner` with oneOf schemas Number, String. Input: " + JSON.stringify(instance));
        } else if (match === 0) {
            this.actualInstance = null; // clear the actual instance in case there are multiple matches
            throw new Error("No match found constructing `GetCompanyUsersResponseUsersInner` with oneOf schemas Number, String. Details: " +
                            errorMessages.join(", "));
        } else { // only 1 match
            // the input is valid
        }
    }

    /**
     * Constructs a <code>GetCompanyUsersResponseUsersInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetCompanyUsersResponseUsersInner} obj Optional instance to populate.
     * @return {module:model/GetCompanyUsersResponseUsersInner} The populated <code>GetCompanyUsersResponseUsersInner</code> instance.
     */
    static constructFromObject(data, obj) {
        return new GetCompanyUsersResponseUsersInner(data);
    }

    /**
     * Gets the actual instance, which can be <code>Number</code>, <code>String</code>.
     * @return {(module:model/Number|module:model/String)} The actual instance.
     */
    getActualInstance() {
        return this.actualInstance;
    }

    /**
     * Sets the actual instance, which can be <code>Number</code>, <code>String</code>.
     * @param {(module:model/Number|module:model/String)} obj The actual instance.
     */
    setActualInstance(obj) {
       this.actualInstance = GetCompanyUsersResponseUsersInner.constructFromObject(obj).getActualInstance();
    }

    /**
     * Returns the JSON representation of the actual instance.
     * @return {string}
     */
    toJSON = function(){
        return this.getActualInstance();
    }

    /**
     * Create an instance of GetCompanyUsersResponseUsersInner from a JSON string.
     * @param {string} json_string JSON string.
     * @return {module:model/GetCompanyUsersResponseUsersInner} An instance of GetCompanyUsersResponseUsersInner.
     */
    static fromJSON = function(json_string){
        return GetCompanyUsersResponseUsersInner.constructFromObject(JSON.parse(json_string));
    }
}


GetCompanyUsersResponseUsersInner.OneOf = ["Number", "String"];

export default GetCompanyUsersResponseUsersInner;

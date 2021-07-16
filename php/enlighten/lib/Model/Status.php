<?php
/**
 * Status
 *
 * PHP version 7.2
 *
 * @category Class
 * @package  OpenAPI\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */

/**
 * The Enlighten Systems API
 *
 * The Enlighten Systems API is a JSON-based API that provides access to performance data for a PV system. By using the Enlighten Systems API, you agree to the Enphase Energy API License Agreement.  Please note that the Enlighten Systems API does not provide performance data at a panel or microinverter level.
 *
 * The version of the OpenAPI document: 2.0
 * Generated by: https://openapi-generator.tech
 * OpenAPI Generator version: 5.2.0
 */

/**
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

namespace OpenAPI\Client\Model;
use \OpenAPI\Client\ObjectSerializer;

/**
 * Status Class Doc Comment
 *
 * @category Class
 * @description The current status of the system. * &#x60;comm&#x60; - One or more Envoys on the system are not communicating to Enlighten. * &#x60;power&#x60; - There is a production issue on the system. * &#x60;meter&#x60; - There is a communication problem between an Envoy and a revenue-grade meter on the system. * &#x60;meter_issue&#x60; - One or more meters on the system are reporting unusual measurements. * &#x60;micro&#x60; - There is a communication problem between an Envoy and microinverters that it monitors. * &#x60;battery&#x60; - There is a communication problem between an Envoy and an AC battery on the system. * &#x60;storage_idle&#x60; - An AC battery on the system has not changed its state of charge for more than 72 hours. * &#x60;normal&#x60; - The system is operating normally.
 * @package  OpenAPI\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */
class Status
{
    /**
     * Possible values of this enum
     */
    const COMM = 'comm';
    const POWER = 'power';
    const METER = 'meter';
    const METER_ISSUE = 'meter_issue';
    const MICRO = 'micro';
    const BATTERY = 'battery';
    const STORAGE_IDLE = 'storage_idle';
    const NORMAL = 'normal';
    
    /**
     * Gets allowable values of the enum
     * @return string[]
     */
    public static function getAllowableEnumValues()
    {
        return [
            self::COMM,
            self::POWER,
            self::METER,
            self::METER_ISSUE,
            self::MICRO,
            self::BATTERY,
            self::STORAGE_IDLE,
            self::NORMAL,
        ];
    }
}



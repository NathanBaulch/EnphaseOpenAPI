<?php
/**
 * SystemPublicNameEnum
 *
 * PHP version 7.4
 *
 * @category Class
 * @package  EnphaseOpenAPI\Monitoring
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */

/**
 * The Enphase Monitoring API
 *
 * Monitoring API can be used to fetch system details on a site, system-level production and consumption data, and device-level production data.
 *
 * The version of the OpenAPI document: 4.0
 * Generated by: https://openapi-generator.tech
 * OpenAPI Generator version: 6.6.0
 */

/**
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

namespace EnphaseOpenAPI\Monitoring\Model;
use \EnphaseOpenAPI\Monitoring\ObjectSerializer;

/**
 * SystemPublicNameEnum Class Doc Comment
 *
 * @category Class
 * @description Name displayed on the public system page. Default&#x3D;residential. Only for systems that allow public access.
 * @package  EnphaseOpenAPI\Monitoring
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */
class SystemPublicNameEnum
{
    /**
     * Possible values of this enum
     */
    public const RESIDENTIAL = 'residential';

    public const ALL = 'all';

    public const COMMERCIAL = 'commercial';

    public const OTHER = 'other';

    /**
     * Gets allowable values of the enum
     * @return string[]
     */
    public static function getAllowableEnumValues()
    {
        return [
            self::RESIDENTIAL,
            self::ALL,
            self::COMMERCIAL,
            self::OTHER
        ];
    }
}


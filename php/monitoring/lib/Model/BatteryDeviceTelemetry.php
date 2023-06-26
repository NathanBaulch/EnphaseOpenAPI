<?php
/**
 * BatteryDeviceTelemetry
 *
 * PHP version 7.4
 *
 * @category Class
 * @package  OpenAPI\Client
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

namespace OpenAPI\Client\Model;

use \ArrayAccess;
use \OpenAPI\Client\ObjectSerializer;

/**
 * BatteryDeviceTelemetry Class Doc Comment
 *
 * @category Class
 * @package  OpenAPI\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 * @implements \ArrayAccess<string, mixed>
 */
class BatteryDeviceTelemetry implements ModelInterface, ArrayAccess, \JsonSerializable
{
    public const DISCRIMINATOR = null;

    /**
      * The original name of the model.
      *
      * @var string
      */
    protected static $openAPIModelName = 'BatteryDeviceTelemetry';

    /**
      * Array of property to type mappings. Used for (de)serialization
      *
      * @var string[]
      */
    protected static $openAPITypes = [
        'system_id' => 'int',
        'serial_number' => 'string',
        'granularity' => '\OpenAPI\Client\Model\TelemetryGranularityEnum',
        'total_devices' => 'int',
        'start_at' => 'int',
        'end_at' => 'int',
        'items' => 'string',
        'intervals' => '\OpenAPI\Client\Model\BatteryDeviceTelemetryIntervalsInner[]',
        'last_reported_time' => 'int',
        'last_reported_soc' => 'string'
    ];

    /**
      * Array of property to format mappings. Used for (de)serialization
      *
      * @var string[]
      * @phpstan-var array<string, string|null>
      * @psalm-var array<string, string|null>
      */
    protected static $openAPIFormats = [
        'system_id' => null,
        'serial_number' => null,
        'granularity' => null,
        'total_devices' => null,
        'start_at' => 'int64',
        'end_at' => 'int64',
        'items' => null,
        'intervals' => null,
        'last_reported_time' => null,
        'last_reported_soc' => null
    ];

    /**
      * Array of nullable properties. Used for (de)serialization
      *
      * @var boolean[]
      */
    protected static array $openAPINullables = [
        'system_id' => false,
		'serial_number' => false,
		'granularity' => false,
		'total_devices' => false,
		'start_at' => false,
		'end_at' => false,
		'items' => false,
		'intervals' => false,
		'last_reported_time' => false,
		'last_reported_soc' => false
    ];

    /**
      * If a nullable field gets set to null, insert it here
      *
      * @var boolean[]
      */
    protected array $openAPINullablesSetToNull = [];

    /**
     * Array of property to type mappings. Used for (de)serialization
     *
     * @return array
     */
    public static function openAPITypes()
    {
        return self::$openAPITypes;
    }

    /**
     * Array of property to format mappings. Used for (de)serialization
     *
     * @return array
     */
    public static function openAPIFormats()
    {
        return self::$openAPIFormats;
    }

    /**
     * Array of nullable properties
     *
     * @return array
     */
    protected static function openAPINullables(): array
    {
        return self::$openAPINullables;
    }

    /**
     * Array of nullable field names deliberately set to null
     *
     * @return boolean[]
     */
    private function getOpenAPINullablesSetToNull(): array
    {
        return $this->openAPINullablesSetToNull;
    }

    /**
     * Setter - Array of nullable field names deliberately set to null
     *
     * @param boolean[] $openAPINullablesSetToNull
     */
    private function setOpenAPINullablesSetToNull(array $openAPINullablesSetToNull): void
    {
        $this->openAPINullablesSetToNull = $openAPINullablesSetToNull;
    }

    /**
     * Checks if a property is nullable
     *
     * @param string $property
     * @return bool
     */
    public static function isNullable(string $property): bool
    {
        return self::openAPINullables()[$property] ?? false;
    }

    /**
     * Checks if a nullable property is set to null.
     *
     * @param string $property
     * @return bool
     */
    public function isNullableSetToNull(string $property): bool
    {
        return in_array($property, $this->getOpenAPINullablesSetToNull(), true);
    }

    /**
     * Array of attributes where the key is the local name,
     * and the value is the original name
     *
     * @var string[]
     */
    protected static $attributeMap = [
        'system_id' => 'system_id',
        'serial_number' => 'serial_number',
        'granularity' => 'granularity',
        'total_devices' => 'total_devices',
        'start_at' => 'start_at',
        'end_at' => 'end_at',
        'items' => 'items',
        'intervals' => 'intervals',
        'last_reported_time' => 'last_reported_time',
        'last_reported_soc' => 'last_reported_soc'
    ];

    /**
     * Array of attributes to setter functions (for deserialization of responses)
     *
     * @var string[]
     */
    protected static $setters = [
        'system_id' => 'setSystemId',
        'serial_number' => 'setSerialNumber',
        'granularity' => 'setGranularity',
        'total_devices' => 'setTotalDevices',
        'start_at' => 'setStartAt',
        'end_at' => 'setEndAt',
        'items' => 'setItems',
        'intervals' => 'setIntervals',
        'last_reported_time' => 'setLastReportedTime',
        'last_reported_soc' => 'setLastReportedSoc'
    ];

    /**
     * Array of attributes to getter functions (for serialization of requests)
     *
     * @var string[]
     */
    protected static $getters = [
        'system_id' => 'getSystemId',
        'serial_number' => 'getSerialNumber',
        'granularity' => 'getGranularity',
        'total_devices' => 'getTotalDevices',
        'start_at' => 'getStartAt',
        'end_at' => 'getEndAt',
        'items' => 'getItems',
        'intervals' => 'getIntervals',
        'last_reported_time' => 'getLastReportedTime',
        'last_reported_soc' => 'getLastReportedSoc'
    ];

    /**
     * Array of attributes where the key is the local name,
     * and the value is the original name
     *
     * @return array
     */
    public static function attributeMap()
    {
        return self::$attributeMap;
    }

    /**
     * Array of attributes to setter functions (for deserialization of responses)
     *
     * @return array
     */
    public static function setters()
    {
        return self::$setters;
    }

    /**
     * Array of attributes to getter functions (for serialization of requests)
     *
     * @return array
     */
    public static function getters()
    {
        return self::$getters;
    }

    /**
     * The original name of the model.
     *
     * @return string
     */
    public function getModelName()
    {
        return self::$openAPIModelName;
    }


    /**
     * Associative array for storing property values
     *
     * @var mixed[]
     */
    protected $container = [];

    /**
     * Constructor
     *
     * @param mixed[] $data Associated array of property values
     *                      initializing the model
     */
    public function __construct(array $data = null)
    {
        $this->setIfExists('system_id', $data ?? [], null);
        $this->setIfExists('serial_number', $data ?? [], null);
        $this->setIfExists('granularity', $data ?? [], null);
        $this->setIfExists('total_devices', $data ?? [], null);
        $this->setIfExists('start_at', $data ?? [], null);
        $this->setIfExists('end_at', $data ?? [], null);
        $this->setIfExists('items', $data ?? [], null);
        $this->setIfExists('intervals', $data ?? [], null);
        $this->setIfExists('last_reported_time', $data ?? [], null);
        $this->setIfExists('last_reported_soc', $data ?? [], null);
    }

    /**
    * Sets $this->container[$variableName] to the given data or to the given default Value; if $variableName
    * is nullable and its value is set to null in the $fields array, then mark it as "set to null" in the
    * $this->openAPINullablesSetToNull array
    *
    * @param string $variableName
    * @param array  $fields
    * @param mixed  $defaultValue
    */
    private function setIfExists(string $variableName, array $fields, $defaultValue): void
    {
        if (self::isNullable($variableName) && array_key_exists($variableName, $fields) && is_null($fields[$variableName])) {
            $this->openAPINullablesSetToNull[] = $variableName;
        }

        $this->container[$variableName] = $fields[$variableName] ?? $defaultValue;
    }

    /**
     * Show all the invalid properties with reasons.
     *
     * @return array invalid properties with reasons
     */
    public function listInvalidProperties()
    {
        $invalidProperties = [];

        return $invalidProperties;
    }

    /**
     * Validate all the properties in the model
     * return true if all passed
     *
     * @return bool True if all properties are valid
     */
    public function valid()
    {
        return count($this->listInvalidProperties()) === 0;
    }


    /**
     * Gets system_id
     *
     * @return int|null
     */
    public function getSystemId()
    {
        return $this->container['system_id'];
    }

    /**
     * Sets system_id
     *
     * @param int|null $system_id System ID.
     *
     * @return self
     */
    public function setSystemId($system_id)
    {
        if (is_null($system_id)) {
            throw new \InvalidArgumentException('non-nullable system_id cannot be null');
        }
        $this->container['system_id'] = $system_id;

        return $this;
    }

    /**
     * Gets serial_number
     *
     * @return string|null
     */
    public function getSerialNumber()
    {
        return $this->container['serial_number'];
    }

    /**
     * Sets serial_number
     *
     * @param string|null $serial_number Device serial number.
     *
     * @return self
     */
    public function setSerialNumber($serial_number)
    {
        if (is_null($serial_number)) {
            throw new \InvalidArgumentException('non-nullable serial_number cannot be null');
        }
        $this->container['serial_number'] = $serial_number;

        return $this;
    }

    /**
     * Gets granularity
     *
     * @return \OpenAPI\Client\Model\TelemetryGranularityEnum|null
     */
    public function getGranularity()
    {
        return $this->container['granularity'];
    }

    /**
     * Sets granularity
     *
     * @param \OpenAPI\Client\Model\TelemetryGranularityEnum|null $granularity granularity
     *
     * @return self
     */
    public function setGranularity($granularity)
    {
        if (is_null($granularity)) {
            throw new \InvalidArgumentException('non-nullable granularity cannot be null');
        }
        $this->container['granularity'] = $granularity;

        return $this;
    }

    /**
     * Gets total_devices
     *
     * @return int|null
     */
    public function getTotalDevices()
    {
        return $this->container['total_devices'];
    }

    /**
     * Sets total_devices
     *
     * @param int|null $total_devices Shall always be 1 since this is telemetry from individual micros.
     *
     * @return self
     */
    public function setTotalDevices($total_devices)
    {
        if (is_null($total_devices)) {
            throw new \InvalidArgumentException('non-nullable total_devices cannot be null');
        }
        $this->container['total_devices'] = $total_devices;

        return $this;
    }

    /**
     * Gets start_at
     *
     * @return int|null
     */
    public function getStartAt()
    {
        return $this->container['start_at'];
    }

    /**
     * Sets start_at
     *
     * @param int|null $start_at Start time of the data series. Either start_date or start_at will be present. By default start_at will appear in response. If start_date parameter passed in the url then start_date field will appear in response.
     *
     * @return self
     */
    public function setStartAt($start_at)
    {
        if (is_null($start_at)) {
            throw new \InvalidArgumentException('non-nullable start_at cannot be null');
        }
        $this->container['start_at'] = $start_at;

        return $this;
    }

    /**
     * Gets end_at
     *
     * @return int|null
     */
    public function getEndAt()
    {
        return $this->container['end_at'];
    }

    /**
     * Sets end_at
     *
     * @param int|null $end_at End time of the data series. Either end_date or end_at will be present. By default end_at will appear in response. If end_date parameter passed in the url then end_date field will appear in response.
     *
     * @return self
     */
    public function setEndAt($end_at)
    {
        if (is_null($end_at)) {
            throw new \InvalidArgumentException('non-nullable end_at cannot be null');
        }
        $this->container['end_at'] = $end_at;

        return $this;
    }

    /**
     * Gets items
     *
     * @return string|null
     */
    public function getItems()
    {
        return $this->container['items'];
    }

    /**
     * Sets items
     *
     * @param string|null $items List key 'intervals'.
     *
     * @return self
     */
    public function setItems($items)
    {
        if (is_null($items)) {
            throw new \InvalidArgumentException('non-nullable items cannot be null');
        }
        $this->container['items'] = $items;

        return $this;
    }

    /**
     * Gets intervals
     *
     * @return \OpenAPI\Client\Model\BatteryDeviceTelemetryIntervalsInner[]|null
     */
    public function getIntervals()
    {
        return $this->container['intervals'];
    }

    /**
     * Sets intervals
     *
     * @param \OpenAPI\Client\Model\BatteryDeviceTelemetryIntervalsInner[]|null $intervals intervals
     *
     * @return self
     */
    public function setIntervals($intervals)
    {
        if (is_null($intervals)) {
            throw new \InvalidArgumentException('non-nullable intervals cannot be null');
        }
        $this->container['intervals'] = $intervals;

        return $this;
    }

    /**
     * Gets last_reported_time
     *
     * @return int|null
     */
    public function getLastReportedTime()
    {
        return $this->container['last_reported_time'];
    }

    /**
     * Sets last_reported_time
     *
     * @param int|null $last_reported_time Last reported timestamp.
     *
     * @return self
     */
    public function setLastReportedTime($last_reported_time)
    {
        if (is_null($last_reported_time)) {
            throw new \InvalidArgumentException('non-nullable last_reported_time cannot be null');
        }
        $this->container['last_reported_time'] = $last_reported_time;

        return $this;
    }

    /**
     * Gets last_reported_soc
     *
     * @return string|null
     */
    public function getLastReportedSoc()
    {
        return $this->container['last_reported_soc'];
    }

    /**
     * Sets last_reported_soc
     *
     * @param string|null $last_reported_soc Last reported soc percentage.
     *
     * @return self
     */
    public function setLastReportedSoc($last_reported_soc)
    {
        if (is_null($last_reported_soc)) {
            throw new \InvalidArgumentException('non-nullable last_reported_soc cannot be null');
        }
        $this->container['last_reported_soc'] = $last_reported_soc;

        return $this;
    }
    /**
     * Returns true if offset exists. False otherwise.
     *
     * @param integer $offset Offset
     *
     * @return boolean
     */
    public function offsetExists($offset): bool
    {
        return isset($this->container[$offset]);
    }

    /**
     * Gets offset.
     *
     * @param integer $offset Offset
     *
     * @return mixed|null
     */
    #[\ReturnTypeWillChange]
    public function offsetGet($offset)
    {
        return $this->container[$offset] ?? null;
    }

    /**
     * Sets value based on offset.
     *
     * @param int|null $offset Offset
     * @param mixed    $value  Value to be set
     *
     * @return void
     */
    public function offsetSet($offset, $value): void
    {
        if (is_null($offset)) {
            $this->container[] = $value;
        } else {
            $this->container[$offset] = $value;
        }
    }

    /**
     * Unsets offset.
     *
     * @param integer $offset Offset
     *
     * @return void
     */
    public function offsetUnset($offset): void
    {
        unset($this->container[$offset]);
    }

    /**
     * Serializes the object to a value that can be serialized natively by json_encode().
     * @link https://www.php.net/manual/en/jsonserializable.jsonserialize.php
     *
     * @return mixed Returns data which can be serialized by json_encode(), which is a value
     * of any type other than a resource.
     */
    #[\ReturnTypeWillChange]
    public function jsonSerialize()
    {
       return ObjectSerializer::sanitizeForSerialization($this);
    }

    /**
     * Gets the string presentation of the object
     *
     * @return string
     */
    public function __toString()
    {
        return json_encode(
            ObjectSerializer::sanitizeForSerialization($this),
            JSON_PRETTY_PRINT
        );
    }

    /**
     * Gets a header-safe presentation of the object
     *
     * @return string
     */
    public function toHeaderValue()
    {
        return json_encode(ObjectSerializer::sanitizeForSerialization($this));
    }
}



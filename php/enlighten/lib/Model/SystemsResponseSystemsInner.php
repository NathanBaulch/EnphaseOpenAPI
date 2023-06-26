<?php
/**
 * SystemsResponseSystemsInner
 *
 * PHP version 7.4
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
 * SystemsResponseSystemsInner Class Doc Comment
 *
 * @category Class
 * @package  OpenAPI\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 * @implements \ArrayAccess<string, mixed>
 */
class SystemsResponseSystemsInner implements ModelInterface, ArrayAccess, \JsonSerializable
{
    public const DISCRIMINATOR = null;

    /**
      * The original name of the model.
      *
      * @var string
      */
    protected static $openAPIModelName = 'SystemsResponse_systems_inner';

    /**
      * Array of property to type mappings. Used for (de)serialization
      *
      * @var string[]
      */
    protected static $openAPITypes = [
        'system_id' => 'int',
        'system_name' => 'string',
        'system_public_name' => 'string',
        'reference' => 'string',
        'other_references' => 'string[]',
        'country' => 'string',
        'state' => 'string',
        'city' => 'string',
        'postal_code' => 'string',
        'timezone' => 'string',
        'connection_type' => '\OpenAPI\Client\Model\ConnectionType',
        'status' => 'string',
        'meta' => '\OpenAPI\Client\Model\Meta'
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
        'system_name' => null,
        'system_public_name' => null,
        'reference' => null,
        'other_references' => null,
        'country' => null,
        'state' => null,
        'city' => null,
        'postal_code' => null,
        'timezone' => null,
        'connection_type' => null,
        'status' => null,
        'meta' => null
    ];

    /**
      * Array of nullable properties. Used for (de)serialization
      *
      * @var boolean[]
      */
    protected static array $openAPINullables = [
        'system_id' => false,
		'system_name' => false,
		'system_public_name' => false,
		'reference' => false,
		'other_references' => false,
		'country' => false,
		'state' => false,
		'city' => false,
		'postal_code' => false,
		'timezone' => false,
		'connection_type' => false,
		'status' => false,
		'meta' => false
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
        'system_name' => 'system_name',
        'system_public_name' => 'system_public_name',
        'reference' => 'reference',
        'other_references' => 'other_references',
        'country' => 'country',
        'state' => 'state',
        'city' => 'city',
        'postal_code' => 'postal_code',
        'timezone' => 'timezone',
        'connection_type' => 'connection_type',
        'status' => 'status',
        'meta' => 'meta'
    ];

    /**
     * Array of attributes to setter functions (for deserialization of responses)
     *
     * @var string[]
     */
    protected static $setters = [
        'system_id' => 'setSystemId',
        'system_name' => 'setSystemName',
        'system_public_name' => 'setSystemPublicName',
        'reference' => 'setReference',
        'other_references' => 'setOtherReferences',
        'country' => 'setCountry',
        'state' => 'setState',
        'city' => 'setCity',
        'postal_code' => 'setPostalCode',
        'timezone' => 'setTimezone',
        'connection_type' => 'setConnectionType',
        'status' => 'setStatus',
        'meta' => 'setMeta'
    ];

    /**
     * Array of attributes to getter functions (for serialization of requests)
     *
     * @var string[]
     */
    protected static $getters = [
        'system_id' => 'getSystemId',
        'system_name' => 'getSystemName',
        'system_public_name' => 'getSystemPublicName',
        'reference' => 'getReference',
        'other_references' => 'getOtherReferences',
        'country' => 'getCountry',
        'state' => 'getState',
        'city' => 'getCity',
        'postal_code' => 'getPostalCode',
        'timezone' => 'getTimezone',
        'connection_type' => 'getConnectionType',
        'status' => 'getStatus',
        'meta' => 'getMeta'
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

    public const STATUS_COMM = 'comm';
    public const STATUS_POWER = 'power';
    public const STATUS_METER = 'meter';
    public const STATUS_METER_ISSUE = 'meter_issue';
    public const STATUS_MICRO = 'micro';
    public const STATUS_BATTERY = 'battery';
    public const STATUS_STORAGE_IDLE = 'storage_idle';
    public const STATUS_NORMAL = 'normal';

    /**
     * Gets allowable values of the enum
     *
     * @return string[]
     */
    public function getStatusAllowableValues()
    {
        return [
            self::STATUS_COMM,
            self::STATUS_POWER,
            self::STATUS_METER,
            self::STATUS_METER_ISSUE,
            self::STATUS_MICRO,
            self::STATUS_BATTERY,
            self::STATUS_STORAGE_IDLE,
            self::STATUS_NORMAL,
        ];
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
        $this->setIfExists('system_name', $data ?? [], null);
        $this->setIfExists('system_public_name', $data ?? [], null);
        $this->setIfExists('reference', $data ?? [], null);
        $this->setIfExists('other_references', $data ?? [], null);
        $this->setIfExists('country', $data ?? [], null);
        $this->setIfExists('state', $data ?? [], null);
        $this->setIfExists('city', $data ?? [], null);
        $this->setIfExists('postal_code', $data ?? [], null);
        $this->setIfExists('timezone', $data ?? [], null);
        $this->setIfExists('connection_type', $data ?? [], null);
        $this->setIfExists('status', $data ?? [], null);
        $this->setIfExists('meta', $data ?? [], null);
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

        if ($this->container['system_id'] === null) {
            $invalidProperties[] = "'system_id' can't be null";
        }
        if ($this->container['system_name'] === null) {
            $invalidProperties[] = "'system_name' can't be null";
        }
        if ($this->container['system_public_name'] === null) {
            $invalidProperties[] = "'system_public_name' can't be null";
        }
        if ($this->container['country'] === null) {
            $invalidProperties[] = "'country' can't be null";
        }
        if ((mb_strlen($this->container['country']) > 2)) {
            $invalidProperties[] = "invalid value for 'country', the character length must be smaller than or equal to 2.";
        }

        if ((mb_strlen($this->container['country']) < 2)) {
            $invalidProperties[] = "invalid value for 'country', the character length must be bigger than or equal to 2.";
        }

        if ($this->container['state'] === null) {
            $invalidProperties[] = "'state' can't be null";
        }
        if ((mb_strlen($this->container['state']) < 2)) {
            $invalidProperties[] = "invalid value for 'state', the character length must be bigger than or equal to 2.";
        }

        if ($this->container['city'] === null) {
            $invalidProperties[] = "'city' can't be null";
        }
        if ($this->container['postal_code'] === null) {
            $invalidProperties[] = "'postal_code' can't be null";
        }
        if ($this->container['timezone'] === null) {
            $invalidProperties[] = "'timezone' can't be null";
        }
        if ($this->container['connection_type'] === null) {
            $invalidProperties[] = "'connection_type' can't be null";
        }
        if ($this->container['status'] === null) {
            $invalidProperties[] = "'status' can't be null";
        }
        $allowedValues = $this->getStatusAllowableValues();
        if (!is_null($this->container['status']) && !in_array($this->container['status'], $allowedValues, true)) {
            $invalidProperties[] = sprintf(
                "invalid value '%s' for 'status', must be one of '%s'",
                $this->container['status'],
                implode("', '", $allowedValues)
            );
        }

        if ($this->container['meta'] === null) {
            $invalidProperties[] = "'meta' can't be null";
        }
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
     * @return int
     */
    public function getSystemId()
    {
        return $this->container['system_id'];
    }

    /**
     * Sets system_id
     *
     * @param int $system_id The Enlighten ID of the system.
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
     * Gets system_name
     *
     * @return string
     */
    public function getSystemName()
    {
        return $this->container['system_name'];
    }

    /**
     * Sets system_name
     *
     * @param string $system_name The name of the system. Even if the system owner has indicated their site is anonymous for public lists, the actual system name is returned here for identification purposes.
     *
     * @return self
     */
    public function setSystemName($system_name)
    {
        if (is_null($system_name)) {
            throw new \InvalidArgumentException('non-nullable system_name cannot be null');
        }
        $this->container['system_name'] = $system_name;

        return $this;
    }

    /**
     * Gets system_public_name
     *
     * @return string
     */
    public function getSystemPublicName()
    {
        return $this->container['system_public_name'];
    }

    /**
     * Sets system_public_name
     *
     * @param string $system_public_name The display name of the system. Use this when displaying the system name on a public list or view.
     *
     * @return self
     */
    public function setSystemPublicName($system_public_name)
    {
        if (is_null($system_public_name)) {
            throw new \InvalidArgumentException('non-nullable system_public_name cannot be null');
        }
        $this->container['system_public_name'] = $system_public_name;

        return $this;
    }

    /**
     * Gets reference
     *
     * @return string|null
     */
    public function getReference()
    {
        return $this->container['reference'];
    }

    /**
     * Sets reference
     *
     * @param string|null $reference If the calling user belongs to a company and that company has provided its own identifiers for a system, that ID is included here. Otherwise, this attribute is not returned.
     *
     * @return self
     */
    public function setReference($reference)
    {
        if (is_null($reference)) {
            throw new \InvalidArgumentException('non-nullable reference cannot be null');
        }
        $this->container['reference'] = $reference;

        return $this;
    }

    /**
     * Gets other_references
     *
     * @return string[]|null
     */
    public function getOtherReferences()
    {
        return $this->container['other_references'];
    }

    /**
     * Sets other_references
     *
     * @param string[]|null $other_references If any other companies have provided their own identifiers for a system, those identifiers are included here. Otherwise, this attribute is not returned.
     *
     * @return self
     */
    public function setOtherReferences($other_references)
    {
        if (is_null($other_references)) {
            throw new \InvalidArgumentException('non-nullable other_references cannot be null');
        }
        $this->container['other_references'] = $other_references;

        return $this;
    }

    /**
     * Gets country
     *
     * @return string
     */
    public function getCountry()
    {
        return $this->container['country'];
    }

    /**
     * Sets country
     *
     * @param string $country The two-letter code for the country where the system is located. See [ISO_3166-1_alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) for reference.
     *
     * @return self
     */
    public function setCountry($country)
    {
        if (is_null($country)) {
            throw new \InvalidArgumentException('non-nullable country cannot be null');
        }
        if ((mb_strlen($country) > 2)) {
            throw new \InvalidArgumentException('invalid length for $country when calling SystemsResponseSystemsInner., must be smaller than or equal to 2.');
        }
        if ((mb_strlen($country) < 2)) {
            throw new \InvalidArgumentException('invalid length for $country when calling SystemsResponseSystemsInner., must be bigger than or equal to 2.');
        }

        $this->container['country'] = $country;

        return $this;
    }

    /**
     * Gets state
     *
     * @return string
     */
    public function getState()
    {
        return $this->container['state'];
    }

    /**
     * Sets state
     *
     * @param string $state The two-letter code for the state where the system is located. See [ISO_3166-2](https://en.wikipedia.org/wiki/ISO_3166-2) for reference.
     *
     * @return self
     */
    public function setState($state)
    {
        if (is_null($state)) {
            throw new \InvalidArgumentException('non-nullable state cannot be null');
        }

        if ((mb_strlen($state) < 2)) {
            throw new \InvalidArgumentException('invalid length for $state when calling SystemsResponseSystemsInner., must be bigger than or equal to 2.');
        }

        $this->container['state'] = $state;

        return $this;
    }

    /**
     * Gets city
     *
     * @return string
     */
    public function getCity()
    {
        return $this->container['city'];
    }

    /**
     * Sets city
     *
     * @param string $city The name of the city where the system is located.
     *
     * @return self
     */
    public function setCity($city)
    {
        if (is_null($city)) {
            throw new \InvalidArgumentException('non-nullable city cannot be null');
        }
        $this->container['city'] = $city;

        return $this;
    }

    /**
     * Gets postal_code
     *
     * @return string
     */
    public function getPostalCode()
    {
        return $this->container['postal_code'];
    }

    /**
     * Sets postal_code
     *
     * @param string $postal_code The postal code where the system is located.
     *
     * @return self
     */
    public function setPostalCode($postal_code)
    {
        if (is_null($postal_code)) {
            throw new \InvalidArgumentException('non-nullable postal_code cannot be null');
        }
        $this->container['postal_code'] = $postal_code;

        return $this;
    }

    /**
     * Gets timezone
     *
     * @return string
     */
    public function getTimezone()
    {
        return $this->container['timezone'];
    }

    /**
     * Sets timezone
     *
     * @param string $timezone The timezone of the system.
     *
     * @return self
     */
    public function setTimezone($timezone)
    {
        if (is_null($timezone)) {
            throw new \InvalidArgumentException('non-nullable timezone cannot be null');
        }
        $this->container['timezone'] = $timezone;

        return $this;
    }

    /**
     * Gets connection_type
     *
     * @return \OpenAPI\Client\Model\ConnectionType
     */
    public function getConnectionType()
    {
        return $this->container['connection_type'];
    }

    /**
     * Sets connection_type
     *
     * @param \OpenAPI\Client\Model\ConnectionType $connection_type connection_type
     *
     * @return self
     */
    public function setConnectionType($connection_type)
    {
        if (is_null($connection_type)) {
            throw new \InvalidArgumentException('non-nullable connection_type cannot be null');
        }
        $this->container['connection_type'] = $connection_type;

        return $this;
    }

    /**
     * Gets status
     *
     * @return string
     * @deprecated
     */
    public function getStatus()
    {
        return $this->container['status'];
    }

    /**
     * Sets status
     *
     * @param string $status The current status of the system. You can find this and more in the `meta` property.
     *
     * @return self
     * @deprecated
     */
    public function setStatus($status)
    {
        if (is_null($status)) {
            throw new \InvalidArgumentException('non-nullable status cannot be null');
        }
        $allowedValues = $this->getStatusAllowableValues();
        if (!in_array($status, $allowedValues, true)) {
            throw new \InvalidArgumentException(
                sprintf(
                    "Invalid value '%s' for 'status', must be one of '%s'",
                    $status,
                    implode("', '", $allowedValues)
                )
            );
        }
        $this->container['status'] = $status;

        return $this;
    }

    /**
     * Gets meta
     *
     * @return \OpenAPI\Client\Model\Meta
     */
    public function getMeta()
    {
        return $this->container['meta'];
    }

    /**
     * Sets meta
     *
     * @param \OpenAPI\Client\Model\Meta $meta meta
     *
     * @return self
     */
    public function setMeta($meta)
    {
        if (is_null($meta)) {
            throw new \InvalidArgumentException('non-nullable meta cannot be null');
        }
        $this->container['meta'] = $meta;

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



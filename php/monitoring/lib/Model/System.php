<?php
/**
 * System
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

use \ArrayAccess;
use \EnphaseOpenAPI\Monitoring\ObjectSerializer;

/**
 * System Class Doc Comment
 *
 * @category Class
 * @package  EnphaseOpenAPI\Monitoring
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 * @implements \ArrayAccess<string, mixed>
 */
class System implements ModelInterface, ArrayAccess, \JsonSerializable
{
    public const DISCRIMINATOR = null;

    /**
      * The original name of the model.
      *
      * @var string
      */
    protected static $openAPIModelName = 'System';

    /**
      * Array of property to type mappings. Used for (de)serialization
      *
      * @var string[]
      */
    protected static $openAPITypes = [
        'system_id' => 'int',
        'name' => 'string',
        'public_name' => 'string',
        'timezone' => 'string',
        'address' => '\EnphaseOpenAPI\Monitoring\Model\SystemAddress',
        'connection_type' => '\EnphaseOpenAPI\Monitoring\Model\SystemConnectionTypeEnum',
        'energy_lifetime' => 'int',
        'energy_today' => 'int',
        'system_size' => 'float',
        'status' => '\EnphaseOpenAPI\Monitoring\Model\SystemStatusEnum',
        'last_report_at' => 'int',
        'last_energy_at' => 'int',
        'operational_at' => 'int',
        'attachment_type' => '\EnphaseOpenAPI\Monitoring\Model\SystemAttachmentTypeEnum',
        'interconnect_date' => '\DateTime',
        'reference' => 'string',
        'other_references' => 'string[]'
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
        'name' => null,
        'public_name' => null,
        'timezone' => null,
        'address' => null,
        'connection_type' => null,
        'energy_lifetime' => null,
        'energy_today' => null,
        'system_size' => 'float',
        'status' => null,
        'last_report_at' => 'int64',
        'last_energy_at' => 'int64',
        'operational_at' => 'int64',
        'attachment_type' => null,
        'interconnect_date' => 'date',
        'reference' => null,
        'other_references' => null
    ];

    /**
      * Array of nullable properties. Used for (de)serialization
      *
      * @var boolean[]
      */
    protected static array $openAPINullables = [
        'system_id' => false,
		'name' => false,
		'public_name' => false,
		'timezone' => false,
		'address' => false,
		'connection_type' => false,
		'energy_lifetime' => false,
		'energy_today' => false,
		'system_size' => false,
		'status' => false,
		'last_report_at' => false,
		'last_energy_at' => false,
		'operational_at' => false,
		'attachment_type' => false,
		'interconnect_date' => false,
		'reference' => false,
		'other_references' => false
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
        'name' => 'name',
        'public_name' => 'public_name',
        'timezone' => 'timezone',
        'address' => 'address',
        'connection_type' => 'connection_type',
        'energy_lifetime' => 'energy_lifetime',
        'energy_today' => 'energy_today',
        'system_size' => 'system_size',
        'status' => 'status',
        'last_report_at' => 'last_report_at',
        'last_energy_at' => 'last_energy_at',
        'operational_at' => 'operational_at',
        'attachment_type' => 'attachment_type',
        'interconnect_date' => 'interconnect_date',
        'reference' => 'reference',
        'other_references' => 'other_references'
    ];

    /**
     * Array of attributes to setter functions (for deserialization of responses)
     *
     * @var string[]
     */
    protected static $setters = [
        'system_id' => 'setSystemId',
        'name' => 'setName',
        'public_name' => 'setPublicName',
        'timezone' => 'setTimezone',
        'address' => 'setAddress',
        'connection_type' => 'setConnectionType',
        'energy_lifetime' => 'setEnergyLifetime',
        'energy_today' => 'setEnergyToday',
        'system_size' => 'setSystemSize',
        'status' => 'setStatus',
        'last_report_at' => 'setLastReportAt',
        'last_energy_at' => 'setLastEnergyAt',
        'operational_at' => 'setOperationalAt',
        'attachment_type' => 'setAttachmentType',
        'interconnect_date' => 'setInterconnectDate',
        'reference' => 'setReference',
        'other_references' => 'setOtherReferences'
    ];

    /**
     * Array of attributes to getter functions (for serialization of requests)
     *
     * @var string[]
     */
    protected static $getters = [
        'system_id' => 'getSystemId',
        'name' => 'getName',
        'public_name' => 'getPublicName',
        'timezone' => 'getTimezone',
        'address' => 'getAddress',
        'connection_type' => 'getConnectionType',
        'energy_lifetime' => 'getEnergyLifetime',
        'energy_today' => 'getEnergyToday',
        'system_size' => 'getSystemSize',
        'status' => 'getStatus',
        'last_report_at' => 'getLastReportAt',
        'last_energy_at' => 'getLastEnergyAt',
        'operational_at' => 'getOperationalAt',
        'attachment_type' => 'getAttachmentType',
        'interconnect_date' => 'getInterconnectDate',
        'reference' => 'getReference',
        'other_references' => 'getOtherReferences'
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
        $this->setIfExists('name', $data ?? [], null);
        $this->setIfExists('public_name', $data ?? [], null);
        $this->setIfExists('timezone', $data ?? [], null);
        $this->setIfExists('address', $data ?? [], null);
        $this->setIfExists('connection_type', $data ?? [], null);
        $this->setIfExists('energy_lifetime', $data ?? [], null);
        $this->setIfExists('energy_today', $data ?? [], null);
        $this->setIfExists('system_size', $data ?? [], null);
        $this->setIfExists('status', $data ?? [], null);
        $this->setIfExists('last_report_at', $data ?? [], null);
        $this->setIfExists('last_energy_at', $data ?? [], null);
        $this->setIfExists('operational_at', $data ?? [], null);
        $this->setIfExists('attachment_type', $data ?? [], null);
        $this->setIfExists('interconnect_date', $data ?? [], null);
        $this->setIfExists('reference', $data ?? [], null);
        $this->setIfExists('other_references', $data ?? [], null);
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
     * @param int|null $system_id Unique numeric ID of the system.
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
     * Gets name
     *
     * @return string|null
     */
    public function getName()
    {
        return $this->container['name'];
    }

    /**
     * Sets name
     *
     * @param string|null $name Name of the system.
     *
     * @return self
     */
    public function setName($name)
    {
        if (is_null($name)) {
            throw new \InvalidArgumentException('non-nullable name cannot be null');
        }
        $this->container['name'] = $name;

        return $this;
    }

    /**
     * Gets public_name
     *
     * @return string|null
     */
    public function getPublicName()
    {
        return $this->container['public_name'];
    }

    /**
     * Sets public_name
     *
     * @param string|null $public_name Name displayed on the public system page. Available values are All, Residential System, Commercial etc. Default='Residential System'. Only for systems that allow public access.
     *
     * @return self
     */
    public function setPublicName($public_name)
    {
        if (is_null($public_name)) {
            throw new \InvalidArgumentException('non-nullable public_name cannot be null');
        }
        $this->container['public_name'] = $public_name;

        return $this;
    }

    /**
     * Gets timezone
     *
     * @return string|null
     */
    public function getTimezone()
    {
        return $this->container['timezone'];
    }

    /**
     * Sets timezone
     *
     * @param string|null $timezone Timezone to which the system belongs.
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
     * Gets address
     *
     * @return \EnphaseOpenAPI\Monitoring\Model\SystemAddress|null
     */
    public function getAddress()
    {
        return $this->container['address'];
    }

    /**
     * Sets address
     *
     * @param \EnphaseOpenAPI\Monitoring\Model\SystemAddress|null $address address
     *
     * @return self
     */
    public function setAddress($address)
    {
        if (is_null($address)) {
            throw new \InvalidArgumentException('non-nullable address cannot be null');
        }
        $this->container['address'] = $address;

        return $this;
    }

    /**
     * Gets connection_type
     *
     * @return \EnphaseOpenAPI\Monitoring\Model\SystemConnectionTypeEnum|null
     */
    public function getConnectionType()
    {
        return $this->container['connection_type'];
    }

    /**
     * Sets connection_type
     *
     * @param \EnphaseOpenAPI\Monitoring\Model\SystemConnectionTypeEnum|null $connection_type connection_type
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
     * Gets energy_lifetime
     *
     * @return int|null
     */
    public function getEnergyLifetime()
    {
        return $this->container['energy_lifetime'];
    }

    /**
     * Sets energy_lifetime
     *
     * @param int|null $energy_lifetime Energy generated by the system during its lifetime in Wh. It is returned only if the count is less than or equal to 100.
     *
     * @return self
     */
    public function setEnergyLifetime($energy_lifetime)
    {
        if (is_null($energy_lifetime)) {
            throw new \InvalidArgumentException('non-nullable energy_lifetime cannot be null');
        }
        $this->container['energy_lifetime'] = $energy_lifetime;

        return $this;
    }

    /**
     * Gets energy_today
     *
     * @return int|null
     */
    public function getEnergyToday()
    {
        return $this->container['energy_today'];
    }

    /**
     * Sets energy_today
     *
     * @param int|null $energy_today Energy generated by the system today in Wh. It is returned only if the count is less than or equal to 100.
     *
     * @return self
     */
    public function setEnergyToday($energy_today)
    {
        if (is_null($energy_today)) {
            throw new \InvalidArgumentException('non-nullable energy_today cannot be null');
        }
        $this->container['energy_today'] = $energy_today;

        return $this;
    }

    /**
     * Gets system_size
     *
     * @return float|null
     */
    public function getSystemSize()
    {
        return $this->container['system_size'];
    }

    /**
     * Sets system_size
     *
     * @param float|null $system_size Size of the system. It is returned only if the count is less than or equal to 100.
     *
     * @return self
     */
    public function setSystemSize($system_size)
    {
        if (is_null($system_size)) {
            throw new \InvalidArgumentException('non-nullable system_size cannot be null');
        }
        $this->container['system_size'] = $system_size;

        return $this;
    }

    /**
     * Gets status
     *
     * @return \EnphaseOpenAPI\Monitoring\Model\SystemStatusEnum|null
     */
    public function getStatus()
    {
        return $this->container['status'];
    }

    /**
     * Sets status
     *
     * @param \EnphaseOpenAPI\Monitoring\Model\SystemStatusEnum|null $status status
     *
     * @return self
     */
    public function setStatus($status)
    {
        if (is_null($status)) {
            throw new \InvalidArgumentException('non-nullable status cannot be null');
        }
        $this->container['status'] = $status;

        return $this;
    }

    /**
     * Gets last_report_at
     *
     * @return int|null
     */
    public function getLastReportAt()
    {
        return $this->container['last_report_at'];
    }

    /**
     * Sets last_report_at
     *
     * @param int|null $last_report_at Timestamp (in epoch format) at which the system's Envoy last submitted a report.
     *
     * @return self
     */
    public function setLastReportAt($last_report_at)
    {
        if (is_null($last_report_at)) {
            throw new \InvalidArgumentException('non-nullable last_report_at cannot be null');
        }
        $this->container['last_report_at'] = $last_report_at;

        return $this;
    }

    /**
     * Gets last_energy_at
     *
     * @return int|null
     */
    public function getLastEnergyAt()
    {
        return $this->container['last_energy_at'];
    }

    /**
     * Sets last_energy_at
     *
     * @param int|null $last_energy_at Timestamp (in epoch format) at which the system's produced energy was last reported. Even if the last produced energy is 0, its timestamp will be returned.
     *
     * @return self
     */
    public function setLastEnergyAt($last_energy_at)
    {
        if (is_null($last_energy_at)) {
            throw new \InvalidArgumentException('non-nullable last_energy_at cannot be null');
        }
        $this->container['last_energy_at'] = $last_energy_at;

        return $this;
    }

    /**
     * Gets operational_at
     *
     * @return int|null
     */
    public function getOperationalAt()
    {
        return $this->container['operational_at'];
    }

    /**
     * Sets operational_at
     *
     * @param int|null $operational_at Timestamp (in epoch format) at which this system became operational. Corresponds to the system's interconnect time, if one is specified. Otherwise, it is the system's first reported interval end time.
     *
     * @return self
     */
    public function setOperationalAt($operational_at)
    {
        if (is_null($operational_at)) {
            throw new \InvalidArgumentException('non-nullable operational_at cannot be null');
        }
        $this->container['operational_at'] = $operational_at;

        return $this;
    }

    /**
     * Gets attachment_type
     *
     * @return \EnphaseOpenAPI\Monitoring\Model\SystemAttachmentTypeEnum|null
     */
    public function getAttachmentType()
    {
        return $this->container['attachment_type'];
    }

    /**
     * Sets attachment_type
     *
     * @param \EnphaseOpenAPI\Monitoring\Model\SystemAttachmentTypeEnum|null $attachment_type attachment_type
     *
     * @return self
     */
    public function setAttachmentType($attachment_type)
    {
        if (is_null($attachment_type)) {
            throw new \InvalidArgumentException('non-nullable attachment_type cannot be null');
        }
        $this->container['attachment_type'] = $attachment_type;

        return $this;
    }

    /**
     * Gets interconnect_date
     *
     * @return \DateTime|null
     */
    public function getInterconnectDate()
    {
        return $this->container['interconnect_date'];
    }

    /**
     * Sets interconnect_date
     *
     * @param \DateTime|null $interconnect_date Date on which the system was approved to connect to the grid.
     *
     * @return self
     */
    public function setInterconnectDate($interconnect_date)
    {
        if (is_null($interconnect_date)) {
            throw new \InvalidArgumentException('non-nullable interconnect_date cannot be null');
        }
        $this->container['interconnect_date'] = $interconnect_date;

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
     * @param string|null $reference If the calling user belongs to a company and that company has provided its own identifier for a system, that ID is included here. Otherwise, this attribute is not returned.
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


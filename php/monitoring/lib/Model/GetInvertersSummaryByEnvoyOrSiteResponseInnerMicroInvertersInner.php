<?php
/**
 * GetInvertersSummaryByEnvoyOrSiteResponseInnerMicroInvertersInner
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
 * GetInvertersSummaryByEnvoyOrSiteResponseInnerMicroInvertersInner Class Doc Comment
 *
 * @category Class
 * @package  OpenAPI\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 * @implements \ArrayAccess<string, mixed>
 */
class GetInvertersSummaryByEnvoyOrSiteResponseInnerMicroInvertersInner implements ModelInterface, ArrayAccess, \JsonSerializable
{
    public const DISCRIMINATOR = null;

    /**
      * The original name of the model.
      *
      * @var string
      */
    protected static $openAPIModelName = 'GetInvertersSummaryByEnvoyOrSiteResponse_inner_micro_inverters_inner';

    /**
      * Array of property to type mappings. Used for (de)serialization
      *
      * @var string[]
      */
    protected static $openAPITypes = [
        'id' => 'int',
        'serial_number' => 'string',
        'model' => 'string',
        'part_number' => 'string',
        'sku' => 'string',
        'status' => 'string',
        'power_produced' => '\OpenAPI\Client\Model\GetInvertersSummaryByEnvoyOrSiteResponseInnerMicroInvertersInnerPowerProduced',
        'proc_load' => 'string',
        'param_table' => 'string',
        'envoy_serial_number' => 'string',
        'energy' => '\OpenAPI\Client\Model\GetInvertersSummaryByEnvoyOrSiteResponseInnerMicroInvertersInnerEnergy',
        'grid_profile' => 'string',
        'last_report_date' => '\DateTime'
    ];

    /**
      * Array of property to format mappings. Used for (de)serialization
      *
      * @var string[]
      * @phpstan-var array<string, string|null>
      * @psalm-var array<string, string|null>
      */
    protected static $openAPIFormats = [
        'id' => null,
        'serial_number' => null,
        'model' => null,
        'part_number' => null,
        'sku' => null,
        'status' => null,
        'power_produced' => null,
        'proc_load' => null,
        'param_table' => null,
        'envoy_serial_number' => null,
        'energy' => null,
        'grid_profile' => null,
        'last_report_date' => 'date-time'
    ];

    /**
      * Array of nullable properties. Used for (de)serialization
      *
      * @var boolean[]
      */
    protected static array $openAPINullables = [
        'id' => false,
		'serial_number' => false,
		'model' => false,
		'part_number' => false,
		'sku' => false,
		'status' => false,
		'power_produced' => false,
		'proc_load' => false,
		'param_table' => false,
		'envoy_serial_number' => false,
		'energy' => false,
		'grid_profile' => false,
		'last_report_date' => false
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
        'id' => 'id',
        'serial_number' => 'serial_number',
        'model' => 'model',
        'part_number' => 'part_number',
        'sku' => 'sku',
        'status' => 'status',
        'power_produced' => 'power_produced',
        'proc_load' => 'proc_load',
        'param_table' => 'param_table',
        'envoy_serial_number' => 'envoy_serial_number',
        'energy' => 'energy',
        'grid_profile' => 'grid_profile',
        'last_report_date' => 'last_report_date'
    ];

    /**
     * Array of attributes to setter functions (for deserialization of responses)
     *
     * @var string[]
     */
    protected static $setters = [
        'id' => 'setId',
        'serial_number' => 'setSerialNumber',
        'model' => 'setModel',
        'part_number' => 'setPartNumber',
        'sku' => 'setSku',
        'status' => 'setStatus',
        'power_produced' => 'setPowerProduced',
        'proc_load' => 'setProcLoad',
        'param_table' => 'setParamTable',
        'envoy_serial_number' => 'setEnvoySerialNumber',
        'energy' => 'setEnergy',
        'grid_profile' => 'setGridProfile',
        'last_report_date' => 'setLastReportDate'
    ];

    /**
     * Array of attributes to getter functions (for serialization of requests)
     *
     * @var string[]
     */
    protected static $getters = [
        'id' => 'getId',
        'serial_number' => 'getSerialNumber',
        'model' => 'getModel',
        'part_number' => 'getPartNumber',
        'sku' => 'getSku',
        'status' => 'getStatus',
        'power_produced' => 'getPowerProduced',
        'proc_load' => 'getProcLoad',
        'param_table' => 'getParamTable',
        'envoy_serial_number' => 'getEnvoySerialNumber',
        'energy' => 'getEnergy',
        'grid_profile' => 'getGridProfile',
        'last_report_date' => 'getLastReportDate'
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
        $this->setIfExists('id', $data ?? [], null);
        $this->setIfExists('serial_number', $data ?? [], null);
        $this->setIfExists('model', $data ?? [], null);
        $this->setIfExists('part_number', $data ?? [], null);
        $this->setIfExists('sku', $data ?? [], null);
        $this->setIfExists('status', $data ?? [], null);
        $this->setIfExists('power_produced', $data ?? [], null);
        $this->setIfExists('proc_load', $data ?? [], null);
        $this->setIfExists('param_table', $data ?? [], null);
        $this->setIfExists('envoy_serial_number', $data ?? [], null);
        $this->setIfExists('energy', $data ?? [], null);
        $this->setIfExists('grid_profile', $data ?? [], null);
        $this->setIfExists('last_report_date', $data ?? [], null);
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
     * Gets id
     *
     * @return int|null
     */
    public function getId()
    {
        return $this->container['id'];
    }

    /**
     * Sets id
     *
     * @param int|null $id Numeric ID of the microinverter.
     *
     * @return self
     */
    public function setId($id)
    {
        if (is_null($id)) {
            throw new \InvalidArgumentException('non-nullable id cannot be null');
        }
        $this->container['id'] = $id;

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
     * @param string|null $serial_number Serial number of the microinverter.
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
     * Gets model
     *
     * @return string|null
     */
    public function getModel()
    {
        return $this->container['model'];
    }

    /**
     * Sets model
     *
     * @param string|null $model Microinverter model type.
     *
     * @return self
     */
    public function setModel($model)
    {
        if (is_null($model)) {
            throw new \InvalidArgumentException('non-nullable model cannot be null');
        }
        $this->container['model'] = $model;

        return $this;
    }

    /**
     * Gets part_number
     *
     * @return string|null
     */
    public function getPartNumber()
    {
        return $this->container['part_number'];
    }

    /**
     * Sets part_number
     *
     * @param string|null $part_number Microinverter part number.
     *
     * @return self
     */
    public function setPartNumber($part_number)
    {
        if (is_null($part_number)) {
            throw new \InvalidArgumentException('non-nullable part_number cannot be null');
        }
        $this->container['part_number'] = $part_number;

        return $this;
    }

    /**
     * Gets sku
     *
     * @return string|null
     */
    public function getSku()
    {
        return $this->container['sku'];
    }

    /**
     * Sets sku
     *
     * @param string|null $sku SKU of the microinverter.
     *
     * @return self
     */
    public function setSku($sku)
    {
        if (is_null($sku)) {
            throw new \InvalidArgumentException('non-nullable sku cannot be null');
        }
        $this->container['sku'] = $sku;

        return $this;
    }

    /**
     * Gets status
     *
     * @return string|null
     */
    public function getStatus()
    {
        return $this->container['status'];
    }

    /**
     * Sets status
     *
     * @param string|null $status Current status of the micro inverter.
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
     * Gets power_produced
     *
     * @return \OpenAPI\Client\Model\GetInvertersSummaryByEnvoyOrSiteResponseInnerMicroInvertersInnerPowerProduced|null
     */
    public function getPowerProduced()
    {
        return $this->container['power_produced'];
    }

    /**
     * Sets power_produced
     *
     * @param \OpenAPI\Client\Model\GetInvertersSummaryByEnvoyOrSiteResponseInnerMicroInvertersInnerPowerProduced|null $power_produced power_produced
     *
     * @return self
     */
    public function setPowerProduced($power_produced)
    {
        if (is_null($power_produced)) {
            throw new \InvalidArgumentException('non-nullable power_produced cannot be null');
        }
        $this->container['power_produced'] = $power_produced;

        return $this;
    }

    /**
     * Gets proc_load
     *
     * @return string|null
     */
    public function getProcLoad()
    {
        return $this->container['proc_load'];
    }

    /**
     * Sets proc_load
     *
     * @param string|null $proc_load Processor load.
     *
     * @return self
     */
    public function setProcLoad($proc_load)
    {
        if (is_null($proc_load)) {
            throw new \InvalidArgumentException('non-nullable proc_load cannot be null');
        }
        $this->container['proc_load'] = $proc_load;

        return $this;
    }

    /**
     * Gets param_table
     *
     * @return string|null
     */
    public function getParamTable()
    {
        return $this->container['param_table'];
    }

    /**
     * Sets param_table
     *
     * @param string|null $param_table Parameter table.
     *
     * @return self
     */
    public function setParamTable($param_table)
    {
        if (is_null($param_table)) {
            throw new \InvalidArgumentException('non-nullable param_table cannot be null');
        }
        $this->container['param_table'] = $param_table;

        return $this;
    }

    /**
     * Gets envoy_serial_number
     *
     * @return string|null
     */
    public function getEnvoySerialNumber()
    {
        return $this->container['envoy_serial_number'];
    }

    /**
     * Sets envoy_serial_number
     *
     * @param string|null $envoy_serial_number Envoy serial number of the system that the micro reports to.
     *
     * @return self
     */
    public function setEnvoySerialNumber($envoy_serial_number)
    {
        if (is_null($envoy_serial_number)) {
            throw new \InvalidArgumentException('non-nullable envoy_serial_number cannot be null');
        }
        $this->container['envoy_serial_number'] = $envoy_serial_number;

        return $this;
    }

    /**
     * Gets energy
     *
     * @return \OpenAPI\Client\Model\GetInvertersSummaryByEnvoyOrSiteResponseInnerMicroInvertersInnerEnergy|null
     */
    public function getEnergy()
    {
        return $this->container['energy'];
    }

    /**
     * Sets energy
     *
     * @param \OpenAPI\Client\Model\GetInvertersSummaryByEnvoyOrSiteResponseInnerMicroInvertersInnerEnergy|null $energy energy
     *
     * @return self
     */
    public function setEnergy($energy)
    {
        if (is_null($energy)) {
            throw new \InvalidArgumentException('non-nullable energy cannot be null');
        }
        $this->container['energy'] = $energy;

        return $this;
    }

    /**
     * Gets grid_profile
     *
     * @return string|null
     */
    public function getGridProfile()
    {
        return $this->container['grid_profile'];
    }

    /**
     * Sets grid_profile
     *
     * @param string|null $grid_profile Grid profile ID.
     *
     * @return self
     */
    public function setGridProfile($grid_profile)
    {
        if (is_null($grid_profile)) {
            throw new \InvalidArgumentException('non-nullable grid_profile cannot be null');
        }
        $this->container['grid_profile'] = $grid_profile;

        return $this;
    }

    /**
     * Gets last_report_date
     *
     * @return \DateTime|null
     */
    public function getLastReportDate()
    {
        return $this->container['last_report_date'];
    }

    /**
     * Sets last_report_date
     *
     * @param \DateTime|null $last_report_date Date on which the microinverter last reported.
     *
     * @return self
     */
    public function setLastReportDate($last_report_date)
    {
        if (is_null($last_report_date)) {
            throw new \InvalidArgumentException('non-nullable last_report_date cannot be null');
        }
        $this->container['last_report_date'] = $last_report_date;

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



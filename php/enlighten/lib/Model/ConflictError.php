<?php
/**
 * ConflictError
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
 * OpenAPI Generator version: 6.2.1
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
 * ConflictError Class Doc Comment
 *
 * @category Class
 * @package  OpenAPI\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 * @implements \ArrayAccess<string, mixed>
 */
class ConflictError implements ModelInterface, ArrayAccess, \JsonSerializable
{
    public const DISCRIMINATOR = null;

    /**
      * The original name of the model.
      *
      * @var string
      */
    protected static $openAPIModelName = 'ConflictError';

    /**
      * Array of property to type mappings. Used for (de)serialization
      *
      * @var string[]
      */
    protected static $openAPITypes = [
        'reason' => 'string',
        'message' => 'string[]',
        'period' => 'string',
        'period_start' => 'int',
        'period_end' => 'int',
        'limit' => 'int'
    ];

    /**
      * Array of property to format mappings. Used for (de)serialization
      *
      * @var string[]
      * @phpstan-var array<string, string|null>
      * @psalm-var array<string, string|null>
      */
    protected static $openAPIFormats = [
        'reason' => null,
        'message' => null,
        'period' => null,
        'period_start' => null,
        'period_end' => null,
        'limit' => null
    ];

    /**
      * Array of nullable properties. Used for (de)serialization
      *
      * @var boolean[]
      */
    protected static array $openAPINullables = [
        'reason' => false,
		'message' => false,
		'period' => false,
		'period_start' => false,
		'period_end' => false,
		'limit' => false
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
        'reason' => 'reason',
        'message' => 'message',
        'period' => 'period',
        'period_start' => 'period_start',
        'period_end' => 'period_end',
        'limit' => 'limit'
    ];

    /**
     * Array of attributes to setter functions (for deserialization of responses)
     *
     * @var string[]
     */
    protected static $setters = [
        'reason' => 'setReason',
        'message' => 'setMessage',
        'period' => 'setPeriod',
        'period_start' => 'setPeriodStart',
        'period_end' => 'setPeriodEnd',
        'limit' => 'setLimit'
    ];

    /**
     * Array of attributes to getter functions (for serialization of requests)
     *
     * @var string[]
     */
    protected static $getters = [
        'reason' => 'getReason',
        'message' => 'getMessage',
        'period' => 'getPeriod',
        'period_start' => 'getPeriodStart',
        'period_end' => 'getPeriodEnd',
        'limit' => 'getLimit'
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

    public const PERIOD_HOUR = 'hour';
    public const PERIOD_MINUTE = 'minute';
    public const PERIOD_SECOND = 'second';

    /**
     * Gets allowable values of the enum
     *
     * @return string[]
     */
    public function getPeriodAllowableValues()
    {
        return [
            self::PERIOD_HOUR,
            self::PERIOD_MINUTE,
            self::PERIOD_SECOND,
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
        $this->setIfExists('reason', $data ?? [], null);
        $this->setIfExists('message', $data ?? [], null);
        $this->setIfExists('period', $data ?? [], null);
        $this->setIfExists('period_start', $data ?? [], null);
        $this->setIfExists('period_end', $data ?? [], null);
        $this->setIfExists('limit', $data ?? [], null);
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

        if ($this->container['reason'] === null) {
            $invalidProperties[] = "'reason' can't be null";
        }
        if ($this->container['message'] === null) {
            $invalidProperties[] = "'message' can't be null";
        }
        if ($this->container['period'] === null) {
            $invalidProperties[] = "'period' can't be null";
        }
        $allowedValues = $this->getPeriodAllowableValues();
        if (!is_null($this->container['period']) && !in_array($this->container['period'], $allowedValues, true)) {
            $invalidProperties[] = sprintf(
                "invalid value '%s' for 'period', must be one of '%s'",
                $this->container['period'],
                implode("', '", $allowedValues)
            );
        }

        if ($this->container['period_start'] === null) {
            $invalidProperties[] = "'period_start' can't be null";
        }
        if ($this->container['period_end'] === null) {
            $invalidProperties[] = "'period_end' can't be null";
        }
        if ($this->container['limit'] === null) {
            $invalidProperties[] = "'limit' can't be null";
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
     * Gets reason
     *
     * @return string
     */
    public function getReason()
    {
        return $this->container['reason'];
    }

    /**
     * Sets reason
     *
     * @param string $reason reason
     *
     * @return self
     */
    public function setReason($reason)
    {

        if (is_null($reason)) {
            throw new \InvalidArgumentException('non-nullable reason cannot be null');
        }

        $this->container['reason'] = $reason;

        return $this;
    }

    /**
     * Gets message
     *
     * @return string[]
     */
    public function getMessage()
    {
        return $this->container['message'];
    }

    /**
     * Sets message
     *
     * @param string[] $message message
     *
     * @return self
     */
    public function setMessage($message)
    {

        if (is_null($message)) {
            throw new \InvalidArgumentException('non-nullable message cannot be null');
        }

        $this->container['message'] = $message;

        return $this;
    }

    /**
     * Gets period
     *
     * @return string
     */
    public function getPeriod()
    {
        return $this->container['period'];
    }

    /**
     * Sets period
     *
     * @param string $period period
     *
     * @return self
     */
    public function setPeriod($period)
    {
        $allowedValues = $this->getPeriodAllowableValues();
        if (!in_array($period, $allowedValues, true)) {
            throw new \InvalidArgumentException(
                sprintf(
                    "Invalid value '%s' for 'period', must be one of '%s'",
                    $period,
                    implode("', '", $allowedValues)
                )
            );
        }

        if (is_null($period)) {
            throw new \InvalidArgumentException('non-nullable period cannot be null');
        }

        $this->container['period'] = $period;

        return $this;
    }

    /**
     * Gets period_start
     *
     * @return int
     */
    public function getPeriodStart()
    {
        return $this->container['period_start'];
    }

    /**
     * Sets period_start
     *
     * @param int $period_start period_start
     *
     * @return self
     */
    public function setPeriodStart($period_start)
    {

        if (is_null($period_start)) {
            throw new \InvalidArgumentException('non-nullable period_start cannot be null');
        }

        $this->container['period_start'] = $period_start;

        return $this;
    }

    /**
     * Gets period_end
     *
     * @return int
     */
    public function getPeriodEnd()
    {
        return $this->container['period_end'];
    }

    /**
     * Sets period_end
     *
     * @param int $period_end period_end
     *
     * @return self
     */
    public function setPeriodEnd($period_end)
    {

        if (is_null($period_end)) {
            throw new \InvalidArgumentException('non-nullable period_end cannot be null');
        }

        $this->container['period_end'] = $period_end;

        return $this;
    }

    /**
     * Gets limit
     *
     * @return int
     */
    public function getLimit()
    {
        return $this->container['limit'];
    }

    /**
     * Sets limit
     *
     * @param int $limit limit
     *
     * @return self
     */
    public function setLimit($limit)
    {

        if (is_null($limit)) {
            throw new \InvalidArgumentException('non-nullable limit cannot be null');
        }

        $this->container['limit'] = $limit;

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



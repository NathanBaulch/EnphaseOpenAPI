<?php
/**
 * PvManufacturersApi
 * PHP version 7.4
 *
 * @category Class
 * @package  EnphaseOpenAPI\Commissioning
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */

/**
 * The Enphase Commissioning API
 *
 * Commissioning API can be used to create and update activations on a site, manage companies and users, update Tariff, etc.
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

namespace EnphaseOpenAPI\Commissioning\Api;

use GuzzleHttp\Client;
use GuzzleHttp\ClientInterface;
use GuzzleHttp\Exception\ConnectException;
use GuzzleHttp\Exception\RequestException;
use GuzzleHttp\Psr7\MultipartStream;
use GuzzleHttp\Psr7\Request;
use GuzzleHttp\RequestOptions;
use EnphaseOpenAPI\Commissioning\ApiException;
use EnphaseOpenAPI\Commissioning\Configuration;
use EnphaseOpenAPI\Commissioning\HeaderSelector;
use EnphaseOpenAPI\Commissioning\ObjectSerializer;

/**
 * PvManufacturersApi Class Doc Comment
 *
 * @category Class
 * @package  EnphaseOpenAPI\Commissioning
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */
class PvManufacturersApi
{
    /**
     * @var ClientInterface
     */
    protected $client;

    /**
     * @var Configuration
     */
    protected $config;

    /**
     * @var HeaderSelector
     */
    protected $headerSelector;

    /**
     * @var int Host index
     */
    protected $hostIndex;

    /** @var string[] $contentTypes **/
    public const contentTypes = [
        'getPvManufacturers' => [
            'application/json',
        ],
    ];

/**
     * @param ClientInterface $client
     * @param Configuration   $config
     * @param HeaderSelector  $selector
     * @param int             $hostIndex (Optional) host index to select the list of hosts if defined in the OpenAPI spec
     */
    public function __construct(
        ClientInterface $client = null,
        Configuration $config = null,
        HeaderSelector $selector = null,
        $hostIndex = 0
    ) {
        $this->client = $client ?: new Client();
        $this->config = $config ?: new Configuration();
        $this->headerSelector = $selector ?: new HeaderSelector();
        $this->hostIndex = $hostIndex;
    }

    /**
     * Set the host index
     *
     * @param int $hostIndex Host index (required)
     */
    public function setHostIndex($hostIndex): void
    {
        $this->hostIndex = $hostIndex;
    }

    /**
     * Get the host index
     *
     * @return int Host index
     */
    public function getHostIndex()
    {
        return $this->hostIndex;
    }

    /**
     * @return Configuration
     */
    public function getConfig()
    {
        return $this->config;
    }

    /**
     * Operation getPvManufacturers
     *
     * Returns PV module manufacturers
     *
     * @param  string $contentType The value for the Content-Type header. Check self::contentTypes['getPvManufacturers'] to see the possible values for this operation
     *
     * @throws \EnphaseOpenAPI\Commissioning\ApiException on non-2xx response
     * @throws \InvalidArgumentException
     * @return \EnphaseOpenAPI\Commissioning\Model\GetPvManufacturersResponse|\EnphaseOpenAPI\Commissioning\Model\ServerError|\EnphaseOpenAPI\Commissioning\Model\ServerError|\EnphaseOpenAPI\Commissioning\Model\TooManyRequestsError|\EnphaseOpenAPI\Commissioning\Model\ServerError
     */
    public function getPvManufacturers(string $contentType = self::contentTypes['getPvManufacturers'][0])
    {
        list($response) = $this->getPvManufacturersWithHttpInfo($contentType);
        return $response;
    }

    /**
     * Operation getPvManufacturersWithHttpInfo
     *
     * Returns PV module manufacturers
     *
     * @param  string $contentType The value for the Content-Type header. Check self::contentTypes['getPvManufacturers'] to see the possible values for this operation
     *
     * @throws \EnphaseOpenAPI\Commissioning\ApiException on non-2xx response
     * @throws \InvalidArgumentException
     * @return array of \EnphaseOpenAPI\Commissioning\Model\GetPvManufacturersResponse|\EnphaseOpenAPI\Commissioning\Model\ServerError|\EnphaseOpenAPI\Commissioning\Model\ServerError|\EnphaseOpenAPI\Commissioning\Model\TooManyRequestsError|\EnphaseOpenAPI\Commissioning\Model\ServerError, HTTP status code, HTTP response headers (array of strings)
     */
    public function getPvManufacturersWithHttpInfo(string $contentType = self::contentTypes['getPvManufacturers'][0])
    {
        $request = $this->getPvManufacturersRequest($contentType);

        try {
            $options = $this->createHttpClientOption();
            try {
                $response = $this->client->send($request, $options);
            } catch (RequestException $e) {
                throw new ApiException(
                    "[{$e->getCode()}] {$e->getMessage()}",
                    (int) $e->getCode(),
                    $e->getResponse() ? $e->getResponse()->getHeaders() : null,
                    $e->getResponse() ? (string) $e->getResponse()->getBody() : null
                );
            } catch (ConnectException $e) {
                throw new ApiException(
                    "[{$e->getCode()}] {$e->getMessage()}",
                    (int) $e->getCode(),
                    null,
                    null
                );
            }

            $statusCode = $response->getStatusCode();

            if ($statusCode < 200 || $statusCode > 299) {
                throw new ApiException(
                    sprintf(
                        '[%d] Error connecting to the API (%s)',
                        $statusCode,
                        (string) $request->getUri()
                    ),
                    $statusCode,
                    $response->getHeaders(),
                    (string) $response->getBody()
                );
            }

            switch($statusCode) {
                case 200:
                    if ('\EnphaseOpenAPI\Commissioning\Model\GetPvManufacturersResponse' === '\SplFileObject') {
                        $content = $response->getBody(); //stream goes to serializer
                    } else {
                        $content = (string) $response->getBody();
                        if ('\EnphaseOpenAPI\Commissioning\Model\GetPvManufacturersResponse' !== 'string') {
                            $content = json_decode($content);
                        }
                    }

                    return [
                        ObjectSerializer::deserialize($content, '\EnphaseOpenAPI\Commissioning\Model\GetPvManufacturersResponse', []),
                        $response->getStatusCode(),
                        $response->getHeaders()
                    ];
                case 401:
                    if ('\EnphaseOpenAPI\Commissioning\Model\ServerError' === '\SplFileObject') {
                        $content = $response->getBody(); //stream goes to serializer
                    } else {
                        $content = (string) $response->getBody();
                        if ('\EnphaseOpenAPI\Commissioning\Model\ServerError' !== 'string') {
                            $content = json_decode($content);
                        }
                    }

                    return [
                        ObjectSerializer::deserialize($content, '\EnphaseOpenAPI\Commissioning\Model\ServerError', []),
                        $response->getStatusCode(),
                        $response->getHeaders()
                    ];
                case 405:
                    if ('\EnphaseOpenAPI\Commissioning\Model\ServerError' === '\SplFileObject') {
                        $content = $response->getBody(); //stream goes to serializer
                    } else {
                        $content = (string) $response->getBody();
                        if ('\EnphaseOpenAPI\Commissioning\Model\ServerError' !== 'string') {
                            $content = json_decode($content);
                        }
                    }

                    return [
                        ObjectSerializer::deserialize($content, '\EnphaseOpenAPI\Commissioning\Model\ServerError', []),
                        $response->getStatusCode(),
                        $response->getHeaders()
                    ];
                case 429:
                    if ('\EnphaseOpenAPI\Commissioning\Model\TooManyRequestsError' === '\SplFileObject') {
                        $content = $response->getBody(); //stream goes to serializer
                    } else {
                        $content = (string) $response->getBody();
                        if ('\EnphaseOpenAPI\Commissioning\Model\TooManyRequestsError' !== 'string') {
                            $content = json_decode($content);
                        }
                    }

                    return [
                        ObjectSerializer::deserialize($content, '\EnphaseOpenAPI\Commissioning\Model\TooManyRequestsError', []),
                        $response->getStatusCode(),
                        $response->getHeaders()
                    ];
                case 501:
                    if ('\EnphaseOpenAPI\Commissioning\Model\ServerError' === '\SplFileObject') {
                        $content = $response->getBody(); //stream goes to serializer
                    } else {
                        $content = (string) $response->getBody();
                        if ('\EnphaseOpenAPI\Commissioning\Model\ServerError' !== 'string') {
                            $content = json_decode($content);
                        }
                    }

                    return [
                        ObjectSerializer::deserialize($content, '\EnphaseOpenAPI\Commissioning\Model\ServerError', []),
                        $response->getStatusCode(),
                        $response->getHeaders()
                    ];
            }

            $returnType = '\EnphaseOpenAPI\Commissioning\Model\GetPvManufacturersResponse';
            if ($returnType === '\SplFileObject') {
                $content = $response->getBody(); //stream goes to serializer
            } else {
                $content = (string) $response->getBody();
                if ($returnType !== 'string') {
                    $content = json_decode($content);
                }
            }

            return [
                ObjectSerializer::deserialize($content, $returnType, []),
                $response->getStatusCode(),
                $response->getHeaders()
            ];

        } catch (ApiException $e) {
            switch ($e->getCode()) {
                case 200:
                    $data = ObjectSerializer::deserialize(
                        $e->getResponseBody(),
                        '\EnphaseOpenAPI\Commissioning\Model\GetPvManufacturersResponse',
                        $e->getResponseHeaders()
                    );
                    $e->setResponseObject($data);
                    break;
                case 401:
                    $data = ObjectSerializer::deserialize(
                        $e->getResponseBody(),
                        '\EnphaseOpenAPI\Commissioning\Model\ServerError',
                        $e->getResponseHeaders()
                    );
                    $e->setResponseObject($data);
                    break;
                case 405:
                    $data = ObjectSerializer::deserialize(
                        $e->getResponseBody(),
                        '\EnphaseOpenAPI\Commissioning\Model\ServerError',
                        $e->getResponseHeaders()
                    );
                    $e->setResponseObject($data);
                    break;
                case 429:
                    $data = ObjectSerializer::deserialize(
                        $e->getResponseBody(),
                        '\EnphaseOpenAPI\Commissioning\Model\TooManyRequestsError',
                        $e->getResponseHeaders()
                    );
                    $e->setResponseObject($data);
                    break;
                case 501:
                    $data = ObjectSerializer::deserialize(
                        $e->getResponseBody(),
                        '\EnphaseOpenAPI\Commissioning\Model\ServerError',
                        $e->getResponseHeaders()
                    );
                    $e->setResponseObject($data);
                    break;
            }
            throw $e;
        }
    }

    /**
     * Operation getPvManufacturersAsync
     *
     * Returns PV module manufacturers
     *
     * @param  string $contentType The value for the Content-Type header. Check self::contentTypes['getPvManufacturers'] to see the possible values for this operation
     *
     * @throws \InvalidArgumentException
     * @return \GuzzleHttp\Promise\PromiseInterface
     */
    public function getPvManufacturersAsync(string $contentType = self::contentTypes['getPvManufacturers'][0])
    {
        return $this->getPvManufacturersAsyncWithHttpInfo($contentType)
            ->then(
                function ($response) {
                    return $response[0];
                }
            );
    }

    /**
     * Operation getPvManufacturersAsyncWithHttpInfo
     *
     * Returns PV module manufacturers
     *
     * @param  string $contentType The value for the Content-Type header. Check self::contentTypes['getPvManufacturers'] to see the possible values for this operation
     *
     * @throws \InvalidArgumentException
     * @return \GuzzleHttp\Promise\PromiseInterface
     */
    public function getPvManufacturersAsyncWithHttpInfo(string $contentType = self::contentTypes['getPvManufacturers'][0])
    {
        $returnType = '\EnphaseOpenAPI\Commissioning\Model\GetPvManufacturersResponse';
        $request = $this->getPvManufacturersRequest($contentType);

        return $this->client
            ->sendAsync($request, $this->createHttpClientOption())
            ->then(
                function ($response) use ($returnType) {
                    if ($returnType === '\SplFileObject') {
                        $content = $response->getBody(); //stream goes to serializer
                    } else {
                        $content = (string) $response->getBody();
                        if ($returnType !== 'string') {
                            $content = json_decode($content);
                        }
                    }

                    return [
                        ObjectSerializer::deserialize($content, $returnType, []),
                        $response->getStatusCode(),
                        $response->getHeaders()
                    ];
                },
                function ($exception) {
                    $response = $exception->getResponse();
                    $statusCode = $response->getStatusCode();
                    throw new ApiException(
                        sprintf(
                            '[%d] Error connecting to the API (%s)',
                            $statusCode,
                            $exception->getRequest()->getUri()
                        ),
                        $statusCode,
                        $response->getHeaders(),
                        (string) $response->getBody()
                    );
                }
            );
    }

    /**
     * Create request for operation 'getPvManufacturers'
     *
     * @param  string $contentType The value for the Content-Type header. Check self::contentTypes['getPvManufacturers'] to see the possible values for this operation
     *
     * @throws \InvalidArgumentException
     * @return \GuzzleHttp\Psr7\Request
     */
    public function getPvManufacturersRequest(string $contentType = self::contentTypes['getPvManufacturers'][0])
    {


        $resourcePath = '/pv_manufacturers';
        $formParams = [];
        $queryParams = [];
        $headerParams = [];
        $httpBody = '';
        $multipart = false;





        $headers = $this->headerSelector->selectHeaders(
            ['application/json', ],
            $contentType,
            $multipart
        );

        // for model (json/xml)
        if (count($formParams) > 0) {
            if ($multipart) {
                $multipartContents = [];
                foreach ($formParams as $formParamName => $formParamValue) {
                    $formParamValueItems = is_array($formParamValue) ? $formParamValue : [$formParamValue];
                    foreach ($formParamValueItems as $formParamValueItem) {
                        $multipartContents[] = [
                            'name' => $formParamName,
                            'contents' => $formParamValueItem
                        ];
                    }
                }
                // for HTTP post (form)
                $httpBody = new MultipartStream($multipartContents);

            } elseif (stripos($headers['Content-Type'], 'application/json') !== false) {
                # if Content-Type contains "application/json", json_encode the form parameters
                $httpBody = \GuzzleHttp\Utils::jsonEncode($formParams);
            } else {
                // for HTTP post (form)
                $httpBody = ObjectSerializer::buildQuery($formParams);
            }
        }

        // this endpoint requires OAuth (access token)
        if (!empty($this->config->getAccessToken())) {
            $headers['Authorization'] = 'Bearer ' . $this->config->getAccessToken();
        }
        // this endpoint requires API key authentication
        $apiKey = $this->config->getApiKeyWithPrefix('key');
        if ($apiKey !== null) {
            $queryParams['key'] = $apiKey;
        }

        $defaultHeaders = [];
        if ($this->config->getUserAgent()) {
            $defaultHeaders['User-Agent'] = $this->config->getUserAgent();
        }

        $headers = array_merge(
            $defaultHeaders,
            $headerParams,
            $headers
        );

        $operationHost = $this->config->getHost();
        $query = ObjectSerializer::buildQuery($queryParams);
        return new Request(
            'GET',
            $operationHost . $resourcePath . ($query ? "?{$query}" : ''),
            $headers,
            $httpBody
        );
    }

    /**
     * Create http client option
     *
     * @throws \RuntimeException on file opening failure
     * @return array of http client options
     */
    protected function createHttpClientOption()
    {
        $options = [];
        if ($this->config->getDebug()) {
            $options[RequestOptions::DEBUG] = fopen($this->config->getDebugFile(), 'a');
            if (!$options[RequestOptions::DEBUG]) {
                throw new \RuntimeException('Failed to open the debug file: ' . $this->config->getDebugFile());
            }
        }

        return $options;
    }
}
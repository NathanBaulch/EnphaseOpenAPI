<?php

require_once(__DIR__ . '/../vendor/autoload.php');

use GuzzleHttp\Client;
use GuzzleHttp\HandlerStack;
use OpenAPI\Client\Api\DefaultApi;
use OpenAPI\Client\ApiException;
use OpenAPI\Client\Configuration;
use OpenAPI\Client\Model\ClientError;
use OpenAPI\Client\Model\NotFoundError;
use OpenAPI\Client\Model\UnprocessableEntityError;
use Spatie\GuzzleRateLimiterMiddleware\RateLimiterMiddleware;

parse_str(implode('&', array_slice($argv, 1)), $_GET);
$uid = $_GET['--user_id'];
$cfg = Configuration::getDefaultConfiguration()
    ->setApiKey('key', $_GET['--api_key'])
    ->setDebug(true)
    ->setDebugFile('php://stderr');
$stack = HandlerStack::create();
$stack->push(RateLimiterMiddleware::perMinute(10));
$cli = new Client(['handler' => $stack]);
$api = new DefaultApi($cli, $cfg);

$startDate = (new DateTime)->sub(new DateInterval('P1M'))->format('Y-m-d');
$endDate = (new DateTime)->sub(new DateInterval('P3W'))->format('Y-m-d');
$startAt = (new DateTime)->sub(new DateInterval('P1W'))->getTimestamp();
$endAt = (new DateTime)->sub(new DateInterval('P1D'))->getTimestamp();

try {
    $api->systems('dummy');
    die('systems: expected error');
} catch (ApiException $e) {
    if (!(($obj = $e->getResponseObject()) instanceof ClientError) || $obj->getReason() != '401') {
        throw $e;
    }
}

$next = null;
while (true) {
    $res = $api->systems($uid, $next);
    foreach ($res->getSystems() as $sys) {
        $res2 = $api->systems($uid, null, 1,
            $sys->getSystemId(), null,
            $sys->getSystemName(), null,
            $sys->getStatus(), null,
            $sys->getReference(), null,
            null, null,
            $sys->getConnectionType());
        if (sizeof($res2->getSystems()) !== 1) {
            die('systems: expected one result');
        }
        $api->invertersSummaryByEnvoyOrSite($uid, $sys->getSystemId());
        try {
            $api->invertersSummaryByEnvoyOrSite($uid, -1);
            die('inverters_summary_by_envoy_or_site: expected error');
        } catch (ApiException $e) {
            if (!(($obj = $e->getResponseObject()) instanceof UnprocessableEntityError) || $obj->getMessage() != "Couldn't find Site with 'id'=-1") {
                throw $e;
            }
        }
        $api->energyLifetime($uid, $sys->getSystemId());
        $api->energyLifetime($uid, $sys->getSystemId(), $startDate, $endDate, 'all');
        try {
            $api->energyLifetime($uid, $sys->getSystemId(), (new DateTime)->format('Y-m-d'));
            die('energy_lifetime: expected error');
        } catch (ApiException $e) {
            if (!(($obj = $e->getResponseObject()) instanceof UnprocessableEntityError) || $obj->getReason() != 'Requested date range is invalid for this system') {
                throw $e;
            }
        }
        foreach ($api->envoys($uid, $sys->getSystemId())->getEnvoys() as $env) {
            $api->searchSystemId($uid, $env->getSerialNumber());
            try {
                $api->searchSystemId($uid, 'dummy');
                die('search_system_id: expected error');
            } catch (ApiException $e) {
                if (!(($obj = $e->getResponseObject()) instanceof NotFoundError) || $obj->getReason() != '404') {
                    throw $e;
                }
            }
        }
        $api->inventory($uid, $sys->getSystemId());
        $api->monthlyProduction($uid, $sys->getSystemId(), $startDate);
        $api->productionMeterReadings($uid, $sys->getSystemId());
        $api->productionMeterReadings($uid, $sys->getSystemId(), $endAt);
        $api->rgmStats($uid, $sys->getSystemId());
        $api->rgmStats($uid, $sys->getSystemId(), $startAt, $endAt);
        $api->stats($uid, $sys->getSystemId());
        $api->stats($uid, $sys->getSystemId(), $startAt, $endAt);
        $api->consumptionLifetime($uid, $sys->getSystemId());
        $api->consumptionLifetime($uid, $sys->getSystemId(), $startDate, $endDate);
        $api->consumptionStats($uid, $sys->getSystemId());
        $api->consumptionStats($uid, $sys->getSystemId(), $startAt, $endAt);
        $api->summary($uid, $sys->getSystemId());
        $api->summary($uid, $sys->getSystemId(), $startDate);
    }
    $next = $res->getNext();
    if ($next === null) {
        break;
    }
}

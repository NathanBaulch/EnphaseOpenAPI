const yargs = require('yargs');
const enlighten = require('the_enlighten_systems_api');
const throttle = require('superagent-throttle')
const moment = require('moment');

const argv = yargs.option('api_key').option('user_id').argv;
const uid = argv.user_id;
const cli = new enlighten.ApiClient();
cli.authentications['ApiKey'].apiKey = argv.api_key;
cli.plugins = [
    (req) => req.on('response', () => console.log('%s %s', req.method, req.req.path)),
    new throttle({rate: 10, ratePer: 60000}).plugin(),
];
const api = new enlighten.DefaultApi(cli);

const startDate = moment().add(-1, 'M').format('YYYY-MM-DD');
const endDate = moment().add(-1, 'M').add(7, 'd').format('YYYY-MM-DD');
const startAt = moment().add(-7, 'd').unix();
const endAt = moment().add(-1, 'd').unix();

(async () => {
    try {
        await api.systems('dummy');
        throw new Error('systems: expected error');
    } catch (err) {
        if (!err.body || err.body.reason !== '401') {
            throw err;
        }
    }

    let next;
    while (true) {
        const res = await api.systems(uid);
        for (const sys of res.systems) {
            let res = await api.systems(uid, {
                limit: 1,
                systemId: sys.system_id,
                systemName: sys.system_name,
                status: sys.meta.status,
                reference: sys.reference,
                connectionType: sys.connection_type,
            });
            if (res.systems.length !== 1) {
                throw new Error('systems: expected one result');
            }

            await api.invertersSummaryByEnvoyOrSite(uid, sys.system_id);
            try {
                await api.invertersSummaryByEnvoyOrSite(uid, -1);
                throw new Error('inverters_summary_by_envoy_or_site: expected error');
            } catch (err) {
                if (!err.body || err.body.message !== "Couldn't find Site with 'id'=-1") {
                    throw err;
                }
            }

            await api.energyLifetime(uid, sys.system_id);
            await api.energyLifetime(uid, sys.system_id, {startDate: startDate, endDate: endDate});
            try {
                await api.energyLifetime(uid, sys.system_id, {startDate: moment().format('YYYY-MM-DD')});
                throw new Error('energy_lifetime: expected error');
            } catch (err) {
                if (!err.body || err.body.reason !== 'Requested date range is invalid for this system') {
                    throw err;
                }
            }

            res = await api.envoys(uid, sys.system_id);
            await api.envoys(uid, sys.system_id);
            for (const env of res.envoys) {
                await api.searchSystemId(uid, env.serial_number);
                try {
                    await api.searchSystemId(uid, 'dummy');
                    throw new Error('search_system_id: expected error');
                } catch (err) {
                    if (!err.body || err.body.reason !== '404') {
                        throw err;
                    }
                }
            }

            await api.inventory(uid, sys.system_id);
            await api.monthlyProduction(uid, sys.system_id, {startDate: startDate});
            await api.productionMeterReadings(uid, sys.system_id);
            await api.productionMeterReadings(uid, sys.system_id, {endAt: endAt});
            await api.rgmStats(uid, sys.system_id);
            await api.rgmStats(uid, sys.system_id, {startAt: startAt, endAt: endAt});
            await api.stats(uid, sys.system_id);
            await api.stats(uid, sys.system_id, {startAt: startAt, endAt: endAt});
            await api.consumptionLifetime(uid, sys.system_id);
            await api.consumptionLifetime(uid, sys.system_id, {startDate: startDate, endDate: endDate});
            await api.consumptionStats(uid, sys.system_id);
            await api.consumptionStats(uid, sys.system_id, {startAt: startAt, endAt: endAt});
            await api.summary(uid, sys.system_id);
            await api.summary(uid, sys.system_id, {summaryDate: startDate});
        }

        next = res.next;
        if (!next) {
            break;
        }
    }
})()

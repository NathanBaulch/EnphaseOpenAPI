import argparse
import sys
from datetime import date, datetime

import ratelimit
from dateutil.relativedelta import relativedelta

import enlighten
from enlighten.api import default_api

parser = argparse.ArgumentParser()
parser.add_argument('--api_key')
parser.add_argument('--user_id')
args = parser.parse_args()
uid = args.user_id
cfg = enlighten.Configuration(api_key={'ApiKey': args.api_key})
cfg.debug = True

with enlighten.ApiClient(cfg) as cli:
    cli.call_api = ratelimit.sleep_and_retry(ratelimit.limits(calls=10, period=60)(cli.call_api))
    api = default_api.DefaultApi(cli)

    start_date = date.today() - relativedelta(months=1)
    end_date = date.today() - relativedelta(weeks=3)
    start_at = int((datetime.now() - relativedelta(weeks=1)).timestamp())
    end_at = int((datetime.now() - relativedelta(days=1)).timestamp())

    next = ''
    while True:
        res = api.systems(uid)
        for s in res.systems:
            kwargs = {'system_id': s.system_id, 'status': s.status, 'connection_type': s.connection_type}
            if hasattr(s, 'system_name'):
                kwargs['system_name'] = s.system_name
            if hasattr(s, 'reference'):
                kwargs['reference'] = s.reference
            if len(api.systems(uid, limit=1, **kwargs).systems) != 1:
                sys.exit('systems: expected one result')

            api.inverters_summary_by_envoy_or_site(uid, s.system_id)
            api.energy_lifetime(uid, s.system_id)
            api.energy_lifetime(uid, s.system_id, start_date=start_date, end_date=end_date, production='all')

            for env in api.envoys(uid, s.system_id).envoys:
                api.search_system_id(uid, env.serial_number)

            api.inventory(uid, s.system_id)
            api.monthly_production(uid, s.system_id, start_date)
            api.production_meter_readings(uid, s.system_id)
            api.production_meter_readings(uid, s.system_id, end_at=end_at)
            api.rgm_stats(uid, s.system_id)
            api.rgm_stats(uid, s.system_id, start_at=start_at, end_at=end_at)
            api.stats(uid, s.system_id)
            api.stats(uid, s.system_id, start_at=start_at, end_at=end_at)
            api.consumption_lifetime(uid, s.system_id)
            api.consumption_lifetime(uid, s.system_id, start_date=start_date, end_date=end_date)
            api.consumption_stats(uid, s.system_id)
            api.consumption_stats(uid, s.system_id, start_at=start_at, end_at=end_at)
            api.summary(uid, s.system_id)
            api.summary(uid, s.system_id, summary_date=start_date)
        next = getattr(res, 'next', '')
        if next == '':
            break

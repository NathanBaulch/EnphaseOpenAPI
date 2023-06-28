import argparse
import sys
from datetime import date, datetime
# NATO
import ratelimit
from dateutil.relativedelta import relativedelta

import monitoring
from monitoring import errors
from monitoring.api import default_api
from monitoring.exceptions import ApiException, UnauthorizedException
from monitoring.model.not_found_error import NotFoundError
from monitoring.model.unprocessable_entity_error import UnprocessableEntityError

parser = argparse.ArgumentParser()
parser.add_argument('--api_key')
parser.add_argument('--user_id')
args = parser.parse_args()
uid = args.user_id
cfg = monitoring.Configuration(api_key={'ApiKey': args.api_key})
cfg.debug = True

with monitoring.ApiClient(cfg) as cli:
    cli.call_api = ratelimit.sleep_and_retry(ratelimit.limits(calls=10, period=60)(cli.call_api))
    errors.fix(cli)
    api = default_api.DefaultApi(cli)

    start_date = date.today() - relativedelta(months=1)
    end_date = date.today() - relativedelta(weeks=3)
    start_at = int((datetime.now() - relativedelta(weeks=1)).timestamp())
    end_at = int((datetime.now() - relativedelta(days=1)).timestamp())

    try:
        api.systems('dummy')
    except UnauthorizedException as e:
        if e.status != 401:
            raise e
    else:
        sys.exit('systems: expected error')

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
            try:
                api.inverters_summary_by_envoy_or_site(uid, -1)
            except ApiException as e:
                if not hasattr(e, 'model') or not isinstance(e.model, UnprocessableEntityError) or \
                        e.model.message != "Couldn't find Site with 'id'=-1":
                    raise e
            else:
                sys.exit('inverters_summary_by_envoy_or_site: expected error')
            api.energy_lifetime(uid, s.system_id)
            api.energy_lifetime(uid, s.system_id, start_date=start_date, end_date=end_date, production='all')
            try:
                api.energy_lifetime(uid, s.system_id, start_date=date.today())
            except ApiException as e:
                if not hasattr(e, 'model') or not isinstance(e.model, UnprocessableEntityError) or \
                        e.model.reason != 'Requested date range is invalid for this system':
                    raise e
            else:
                sys.exit('energy_lifetime: expected error')

            for env in api.envoys(uid, s.system_id).envoys:
                api.search_system_id(uid, env.serial_number)
                try:
                    api.search_system_id(uid, 'dummy')
                except ApiException as e:
                    if not hasattr(e, 'model') or not isinstance(e.model, NotFoundError) or e.model.reason != '404':
                        raise e
                else:
                    sys.exit('search_system_id: expected error')

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

import json

from enlighten.api_client import ApiClient
from enlighten.exceptions import ApiException
from enlighten.model.client_error import ClientError
from enlighten.model.conflict_error import ConflictError
from enlighten.model.not_found_error import NotFoundError
from enlighten.model.server_error import ServerError
from enlighten.model.unprocessable_entity_error import UnprocessableEntityError
from enlighten.model_utils import validate_and_convert_types


def fix(cli: ApiClient):
    func = cli.call_api

    def wrapper(*args, **kwargs):
        try:
            return func(*args, **kwargs)
        except ApiException as e:
            if e.status >= 500:
                et = ServerError
            elif e.status == 404:
                et = NotFoundError
            elif e.status == 409:
                et = ConflictError
            elif e.status == 422:
                et = UnprocessableEntityError
            elif e.status >= 400:
                et = ClientError
            else:
                raise e

            e.model = validate_and_convert_types(
                json.loads(e.body),
                (et,),
                None,
                True,
                True,
                cli.configuration
            )
            raise e

    cli.call_api = wrapper

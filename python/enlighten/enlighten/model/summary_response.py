# coding: utf-8

"""
    The Enlighten Systems API

    The Enlighten Systems API is a JSON-based API that provides access to performance data for a PV system. By using the Enlighten Systems API, you agree to the Enphase Energy API License Agreement.  Please note that the Enlighten Systems API does not provide performance data at a panel or microinverter level.  # noqa: E501

    The version of the OpenAPI document: 2.0
    Generated by: https://openapi-generator.tech
"""

from datetime import date, datetime  # noqa: F401
import decimal  # noqa: F401
import functools  # noqa: F401
import io  # noqa: F401
import re  # noqa: F401
import typing  # noqa: F401
import typing_extensions  # noqa: F401
import uuid  # noqa: F401

import frozendict  # noqa: F401

from enlighten import schemas  # noqa: F401


class SummaryResponse(
    schemas.DictSchema
):
    """NOTE: This class is auto generated by OpenAPI Generator.
    Ref: https://openapi-generator.tech

    Do not edit the class manually.
    """


    class MetaOapg:
        required = {
            "summary_date",
            "last_report_at",
            "size_w",
            "last_interval_end_at",
            "energy_today",
            "system_id",
            "current_power",
            "energy_lifetime",
            "source",
            "modules",
            "operational_at",
            "status",
        }
        
        class properties:
            current_power = schemas.IntSchema
            energy_lifetime = schemas.IntSchema
            energy_today = schemas.IntSchema
            last_interval_end_at = schemas.Int64Schema
            last_report_at = schemas.Int64Schema
            modules = schemas.IntSchema
            operational_at = schemas.Int64Schema
            size_w = schemas.IntSchema
            
            
            class source(
                schemas.EnumBase,
                schemas.StrSchema
            ):
            
            
                class MetaOapg:
                    enum_value_to_name = {
                        "microinverters": "MICROINVERTERS",
                        "meter": "METER",
                    }
                
                @schemas.classproperty
                def MICROINVERTERS(cls):
                    return cls("microinverters")
                
                @schemas.classproperty
                def METER(cls):
                    return cls("meter")
        
            @staticmethod
            def status() -> typing.Type['Status']:
                return Status
            summary_date = schemas.DateSchema
            system_id = schemas.IntSchema
            __annotations__ = {
                "current_power": current_power,
                "energy_lifetime": energy_lifetime,
                "energy_today": energy_today,
                "last_interval_end_at": last_interval_end_at,
                "last_report_at": last_report_at,
                "modules": modules,
                "operational_at": operational_at,
                "size_w": size_w,
                "source": source,
                "status": status,
                "summary_date": summary_date,
                "system_id": system_id,
            }
    
    summary_date: MetaOapg.properties.summary_date
    last_report_at: MetaOapg.properties.last_report_at
    size_w: MetaOapg.properties.size_w
    last_interval_end_at: MetaOapg.properties.last_interval_end_at
    energy_today: MetaOapg.properties.energy_today
    system_id: MetaOapg.properties.system_id
    current_power: MetaOapg.properties.current_power
    energy_lifetime: MetaOapg.properties.energy_lifetime
    source: MetaOapg.properties.source
    modules: MetaOapg.properties.modules
    operational_at: MetaOapg.properties.operational_at
    status: 'Status'
    
    @typing.overload
    def __getitem__(self, name: typing_extensions.Literal["current_power"]) -> MetaOapg.properties.current_power: ...
    
    @typing.overload
    def __getitem__(self, name: typing_extensions.Literal["energy_lifetime"]) -> MetaOapg.properties.energy_lifetime: ...
    
    @typing.overload
    def __getitem__(self, name: typing_extensions.Literal["energy_today"]) -> MetaOapg.properties.energy_today: ...
    
    @typing.overload
    def __getitem__(self, name: typing_extensions.Literal["last_interval_end_at"]) -> MetaOapg.properties.last_interval_end_at: ...
    
    @typing.overload
    def __getitem__(self, name: typing_extensions.Literal["last_report_at"]) -> MetaOapg.properties.last_report_at: ...
    
    @typing.overload
    def __getitem__(self, name: typing_extensions.Literal["modules"]) -> MetaOapg.properties.modules: ...
    
    @typing.overload
    def __getitem__(self, name: typing_extensions.Literal["operational_at"]) -> MetaOapg.properties.operational_at: ...
    
    @typing.overload
    def __getitem__(self, name: typing_extensions.Literal["size_w"]) -> MetaOapg.properties.size_w: ...
    
    @typing.overload
    def __getitem__(self, name: typing_extensions.Literal["source"]) -> MetaOapg.properties.source: ...
    
    @typing.overload
    def __getitem__(self, name: typing_extensions.Literal["status"]) -> 'Status': ...
    
    @typing.overload
    def __getitem__(self, name: typing_extensions.Literal["summary_date"]) -> MetaOapg.properties.summary_date: ...
    
    @typing.overload
    def __getitem__(self, name: typing_extensions.Literal["system_id"]) -> MetaOapg.properties.system_id: ...
    
    @typing.overload
    def __getitem__(self, name: str) -> schemas.UnsetAnyTypeSchema: ...
    
    def __getitem__(self, name: typing.Union[typing_extensions.Literal["current_power", "energy_lifetime", "energy_today", "last_interval_end_at", "last_report_at", "modules", "operational_at", "size_w", "source", "status", "summary_date", "system_id", ], str]):
        # dict_instance[name] accessor
        return super().__getitem__(name)
    
    
    @typing.overload
    def get_item_oapg(self, name: typing_extensions.Literal["current_power"]) -> MetaOapg.properties.current_power: ...
    
    @typing.overload
    def get_item_oapg(self, name: typing_extensions.Literal["energy_lifetime"]) -> MetaOapg.properties.energy_lifetime: ...
    
    @typing.overload
    def get_item_oapg(self, name: typing_extensions.Literal["energy_today"]) -> MetaOapg.properties.energy_today: ...
    
    @typing.overload
    def get_item_oapg(self, name: typing_extensions.Literal["last_interval_end_at"]) -> MetaOapg.properties.last_interval_end_at: ...
    
    @typing.overload
    def get_item_oapg(self, name: typing_extensions.Literal["last_report_at"]) -> MetaOapg.properties.last_report_at: ...
    
    @typing.overload
    def get_item_oapg(self, name: typing_extensions.Literal["modules"]) -> MetaOapg.properties.modules: ...
    
    @typing.overload
    def get_item_oapg(self, name: typing_extensions.Literal["operational_at"]) -> MetaOapg.properties.operational_at: ...
    
    @typing.overload
    def get_item_oapg(self, name: typing_extensions.Literal["size_w"]) -> MetaOapg.properties.size_w: ...
    
    @typing.overload
    def get_item_oapg(self, name: typing_extensions.Literal["source"]) -> MetaOapg.properties.source: ...
    
    @typing.overload
    def get_item_oapg(self, name: typing_extensions.Literal["status"]) -> 'Status': ...
    
    @typing.overload
    def get_item_oapg(self, name: typing_extensions.Literal["summary_date"]) -> MetaOapg.properties.summary_date: ...
    
    @typing.overload
    def get_item_oapg(self, name: typing_extensions.Literal["system_id"]) -> MetaOapg.properties.system_id: ...
    
    @typing.overload
    def get_item_oapg(self, name: str) -> typing.Union[schemas.UnsetAnyTypeSchema, schemas.Unset]: ...
    
    def get_item_oapg(self, name: typing.Union[typing_extensions.Literal["current_power", "energy_lifetime", "energy_today", "last_interval_end_at", "last_report_at", "modules", "operational_at", "size_w", "source", "status", "summary_date", "system_id", ], str]):
        return super().get_item_oapg(name)
    

    def __new__(
        cls,
        *_args: typing.Union[dict, frozendict.frozendict, ],
        summary_date: typing.Union[MetaOapg.properties.summary_date, str, date, ],
        last_report_at: typing.Union[MetaOapg.properties.last_report_at, decimal.Decimal, int, ],
        size_w: typing.Union[MetaOapg.properties.size_w, decimal.Decimal, int, ],
        last_interval_end_at: typing.Union[MetaOapg.properties.last_interval_end_at, decimal.Decimal, int, ],
        energy_today: typing.Union[MetaOapg.properties.energy_today, decimal.Decimal, int, ],
        system_id: typing.Union[MetaOapg.properties.system_id, decimal.Decimal, int, ],
        current_power: typing.Union[MetaOapg.properties.current_power, decimal.Decimal, int, ],
        energy_lifetime: typing.Union[MetaOapg.properties.energy_lifetime, decimal.Decimal, int, ],
        source: typing.Union[MetaOapg.properties.source, str, ],
        modules: typing.Union[MetaOapg.properties.modules, decimal.Decimal, int, ],
        operational_at: typing.Union[MetaOapg.properties.operational_at, decimal.Decimal, int, ],
        status: 'Status',
        _configuration: typing.Optional[schemas.Configuration] = None,
        **kwargs: typing.Union[schemas.AnyTypeSchema, dict, frozendict.frozendict, str, date, datetime, uuid.UUID, int, float, decimal.Decimal, None, list, tuple, bytes],
    ) -> 'SummaryResponse':
        return super().__new__(
            cls,
            *_args,
            summary_date=summary_date,
            last_report_at=last_report_at,
            size_w=size_w,
            last_interval_end_at=last_interval_end_at,
            energy_today=energy_today,
            system_id=system_id,
            current_power=current_power,
            energy_lifetime=energy_lifetime,
            source=source,
            modules=modules,
            operational_at=operational_at,
            status=status,
            _configuration=_configuration,
            **kwargs,
        )

from enlighten.model.status import Status

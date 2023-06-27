# coding: utf-8

"""
    The Enphase Commissioning API

    Commissioning API can be used to create and update activations on a site, manage companies and users, update Tariff, etc.  # noqa: E501

    The version of the OpenAPI document: 4.0
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

from commissioning import schemas  # noqa: F401


class SystemTypeEnum(
    schemas.EnumBase,
    schemas.StrSchema
):
    """NOTE: This class is auto generated by OpenAPI Generator.
    Ref: https://openapi-generator.tech

    Do not edit the class manually.

    Type of the system. Default 'residential'.
    """


    class MetaOapg:
        enum_value_to_name = {
            "residential": "RESIDENTIAL",
            "commercial": "COMMERCIAL",
            "other": "OTHER",
        }
    
    @schemas.classproperty
    def RESIDENTIAL(cls):
        return cls("residential")
    
    @schemas.classproperty
    def COMMERCIAL(cls):
        return cls("commercial")
    
    @schemas.classproperty
    def OTHER(cls):
        return cls("other")
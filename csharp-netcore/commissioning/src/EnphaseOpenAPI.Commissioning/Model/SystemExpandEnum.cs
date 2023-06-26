/*
 * The Enphase Commissioning API
 *
 * Commissioning API can be used to create and update activations on a site, manage companies and users, update Tariff, etc.
 *
 * The version of the OpenAPI document: 4.0
 * Generated by: https://github.com/openapitools/openapi-generator.git
 */


using System;
using System.Collections;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Linq;
using System.IO;
using System.Runtime.Serialization;
using System.Text;
using System.Text.RegularExpressions;
using Newtonsoft.Json;
using Newtonsoft.Json.Converters;
using Newtonsoft.Json.Linq;
using System.ComponentModel.DataAnnotations;
using OpenAPIDateConverter = EnphaseOpenAPI.Commissioning.Client.OpenAPIDateConverter;

namespace EnphaseOpenAPI.Commissioning.Model
{
    /// <summary>
    /// Defines SystemExpandEnum
    /// </summary>
    [JsonConverter(typeof(StringEnumConverter))]
    public enum SystemExpandEnum
    {
        /// <summary>
        /// Enum Owner for value: owner
        /// </summary>
        [EnumMember(Value = "owner")]
        Owner = 1,

        /// <summary>
        /// Enum OwnerCompany for value: owner.company
        /// </summary>
        [EnumMember(Value = "owner.company")]
        OwnerCompany = 2,

        /// <summary>
        /// Enum Host for value: host
        /// </summary>
        [EnumMember(Value = "host")]
        Host = 3,

        /// <summary>
        /// Enum HostCompany for value: host.company
        /// </summary>
        [EnumMember(Value = "host.company")]
        HostCompany = 4

    }

}
/*
 * The Enphase Monitoring API
 *
 * Monitoring API can be used to fetch system details on a site, system-level production and consumption data, and device-level production data.
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
using OpenAPIDateConverter = EnphaseOpenAPI.Monitoring.Client.OpenAPIDateConverter;

namespace EnphaseOpenAPI.Monitoring.Model
{
    /// <summary>
    /// GetSystemDevicesResponse
    /// </summary>
    [DataContract(Name = "GetSystemDevicesResponse")]
    public partial class GetSystemDevicesResponse : IEquatable<GetSystemDevicesResponse>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="GetSystemDevicesResponse" /> class.
        /// </summary>
        /// <param name="systemId">System ID..</param>
        /// <param name="totalDevices">Total active devices associated with the system..</param>
        /// <param name="items">List key..</param>
        /// <param name="devices">Hash keys include all the possible device types micros, meters, gateways, mids, q_relays, ACBs, Encharges, Enpowers (if the devices of this type are present). For all the device types, the object will contain the serial_number and model with some additional information pertaining to the device type..</param>
        public GetSystemDevicesResponse(int systemId = default(int), int totalDevices = default(int), string items = default(string), Dictionary<string, List<GetSystemDevicesResponseDevicesValueInner>> devices = default(Dictionary<string, List<GetSystemDevicesResponseDevicesValueInner>>))
        {
            this.SystemId = systemId;
            this.TotalDevices = totalDevices;
            this.Items = items;
            this.Devices = devices;
        }

        /// <summary>
        /// System ID.
        /// </summary>
        /// <value>System ID.</value>
        [DataMember(Name = "system_id", EmitDefaultValue = false)]
        public int SystemId { get; set; }

        /// <summary>
        /// Total active devices associated with the system.
        /// </summary>
        /// <value>Total active devices associated with the system.</value>
        [DataMember(Name = "total_devices", EmitDefaultValue = false)]
        public int TotalDevices { get; set; }

        /// <summary>
        /// List key.
        /// </summary>
        /// <value>List key.</value>
        [DataMember(Name = "items", EmitDefaultValue = false)]
        public string Items { get; set; }

        /// <summary>
        /// Hash keys include all the possible device types micros, meters, gateways, mids, q_relays, ACBs, Encharges, Enpowers (if the devices of this type are present). For all the device types, the object will contain the serial_number and model with some additional information pertaining to the device type.
        /// </summary>
        /// <value>Hash keys include all the possible device types micros, meters, gateways, mids, q_relays, ACBs, Encharges, Enpowers (if the devices of this type are present). For all the device types, the object will contain the serial_number and model with some additional information pertaining to the device type.</value>
        [DataMember(Name = "devices", EmitDefaultValue = false)]
        public Dictionary<string, List<GetSystemDevicesResponseDevicesValueInner>> Devices { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class GetSystemDevicesResponse {\n");
            sb.Append("  SystemId: ").Append(SystemId).Append("\n");
            sb.Append("  TotalDevices: ").Append(TotalDevices).Append("\n");
            sb.Append("  Items: ").Append(Items).Append("\n");
            sb.Append("  Devices: ").Append(Devices).Append("\n");
            sb.Append("}\n");
            return sb.ToString();
        }

        /// <summary>
        /// Returns the JSON string presentation of the object
        /// </summary>
        /// <returns>JSON string presentation of the object</returns>
        public virtual string ToJson()
        {
            return Newtonsoft.Json.JsonConvert.SerializeObject(this, Newtonsoft.Json.Formatting.Indented);
        }

        /// <summary>
        /// Returns true if objects are equal
        /// </summary>
        /// <param name="input">Object to be compared</param>
        /// <returns>Boolean</returns>
        public override bool Equals(object input)
        {
            return this.Equals(input as GetSystemDevicesResponse);
        }

        /// <summary>
        /// Returns true if GetSystemDevicesResponse instances are equal
        /// </summary>
        /// <param name="input">Instance of GetSystemDevicesResponse to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(GetSystemDevicesResponse input)
        {
            if (input == null)
            {
                return false;
            }
            return 
                (
                    this.SystemId == input.SystemId ||
                    this.SystemId.Equals(input.SystemId)
                ) && 
                (
                    this.TotalDevices == input.TotalDevices ||
                    this.TotalDevices.Equals(input.TotalDevices)
                ) && 
                (
                    this.Items == input.Items ||
                    (this.Items != null &&
                    this.Items.Equals(input.Items))
                ) && 
                (
                    this.Devices == input.Devices ||
                    this.Devices != null &&
                    input.Devices != null &&
                    this.Devices.SequenceEqual(input.Devices)
                );
        }

        /// <summary>
        /// Gets the hash code
        /// </summary>
        /// <returns>Hash code</returns>
        public override int GetHashCode()
        {
            unchecked // Overflow is fine, just wrap
            {
                int hashCode = 41;
                hashCode = (hashCode * 59) + this.SystemId.GetHashCode();
                hashCode = (hashCode * 59) + this.TotalDevices.GetHashCode();
                if (this.Items != null)
                {
                    hashCode = (hashCode * 59) + this.Items.GetHashCode();
                }
                if (this.Devices != null)
                {
                    hashCode = (hashCode * 59) + this.Devices.GetHashCode();
                }
                return hashCode;
            }
        }

        /// <summary>
        /// To validate all properties of the instance
        /// </summary>
        /// <param name="validationContext">Validation context</param>
        /// <returns>Validation Result</returns>
        IEnumerable<System.ComponentModel.DataAnnotations.ValidationResult> IValidatableObject.Validate(ValidationContext validationContext)
        {
            yield break;
        }
    }

}
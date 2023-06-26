/*
 * The Enlighten Systems API
 *
 * The Enlighten Systems API is a JSON-based API that provides access to performance data for a PV system. By using the Enlighten Systems API, you agree to the Enphase Energy API License Agreement.  Please note that the Enlighten Systems API does not provide performance data at a panel or microinverter level.
 *
 * The version of the OpenAPI document: 2.0
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
using OpenAPIDateConverter = EnphaseOpenAPI.Enlighten.Client.OpenAPIDateConverter;

namespace EnphaseOpenAPI.Enlighten.Model
{
    /// <summary>
    /// EnvoysResponseEnvoysInner
    /// </summary>
    [DataContract(Name = "EnvoysResponse_envoys_inner")]
    public partial class EnvoysResponseEnvoysInner : IEquatable<EnvoysResponseEnvoysInner>, IValidatableObject
    {
        /// <summary>
        /// The current status of this Envoy. * &#x60;normal&#x60; - The Envoy is operating normally. * &#x60;comm&#x60; - The Envoy is not communicating to Enlighten.
        /// </summary>
        /// <value>The current status of this Envoy. * &#x60;normal&#x60; - The Envoy is operating normally. * &#x60;comm&#x60; - The Envoy is not communicating to Enlighten.</value>
        [JsonConverter(typeof(StringEnumConverter))]
        public enum StatusEnum
        {
            /// <summary>
            /// Enum Normal for value: normal
            /// </summary>
            [EnumMember(Value = "normal")]
            Normal = 1,

            /// <summary>
            /// Enum Comm for value: comm
            /// </summary>
            [EnumMember(Value = "comm")]
            Comm = 2

        }


        /// <summary>
        /// The current status of this Envoy. * &#x60;normal&#x60; - The Envoy is operating normally. * &#x60;comm&#x60; - The Envoy is not communicating to Enlighten.
        /// </summary>
        /// <value>The current status of this Envoy. * &#x60;normal&#x60; - The Envoy is operating normally. * &#x60;comm&#x60; - The Envoy is not communicating to Enlighten.</value>
        [DataMember(Name = "status", IsRequired = true, EmitDefaultValue = true)]
        public StatusEnum Status { get; set; }
        /// <summary>
        /// Initializes a new instance of the <see cref="EnvoysResponseEnvoysInner" /> class.
        /// </summary>
        [JsonConstructorAttribute]
        protected EnvoysResponseEnvoysInner() { }
        /// <summary>
        /// Initializes a new instance of the <see cref="EnvoysResponseEnvoysInner" /> class.
        /// </summary>
        /// <param name="envoyId">The Enlighten ID of the Envoy. (required).</param>
        /// <param name="lastReportAt">The last time this Envoy submitted a report, by default expressed in Unix epoch time. When the &#x60;datetime_format&#x60; query parameter is &#x60;iso8601&#x60;, &#x60;last_report_at&#x60; is in ISO 8601 format. If Enlighten has no record of a report from this Envoy, returns null. (required).</param>
        /// <param name="name">The human-friendly name of this Envoy. (required).</param>
        /// <param name="partNumber">The Enphase part number of this Envoy. (required).</param>
        /// <param name="serialNumber">The serial number of this Envoy. (required).</param>
        /// <param name="status">The current status of this Envoy. * &#x60;normal&#x60; - The Envoy is operating normally. * &#x60;comm&#x60; - The Envoy is not communicating to Enlighten. (required).</param>
        public EnvoysResponseEnvoysInner(int envoyId = default(int), long lastReportAt = default(long), string name = default(string), string partNumber = default(string), string serialNumber = default(string), StatusEnum status = default(StatusEnum))
        {
            this.EnvoyId = envoyId;
            this.LastReportAt = lastReportAt;
            // to ensure "name" is required (not null)
            if (name == null)
            {
                throw new ArgumentNullException("name is a required property for EnvoysResponseEnvoysInner and cannot be null");
            }
            this.Name = name;
            // to ensure "partNumber" is required (not null)
            if (partNumber == null)
            {
                throw new ArgumentNullException("partNumber is a required property for EnvoysResponseEnvoysInner and cannot be null");
            }
            this.PartNumber = partNumber;
            // to ensure "serialNumber" is required (not null)
            if (serialNumber == null)
            {
                throw new ArgumentNullException("serialNumber is a required property for EnvoysResponseEnvoysInner and cannot be null");
            }
            this.SerialNumber = serialNumber;
            this.Status = status;
        }

        /// <summary>
        /// The Enlighten ID of the Envoy.
        /// </summary>
        /// <value>The Enlighten ID of the Envoy.</value>
        [DataMember(Name = "envoy_id", IsRequired = true, EmitDefaultValue = true)]
        public int EnvoyId { get; set; }

        /// <summary>
        /// The last time this Envoy submitted a report, by default expressed in Unix epoch time. When the &#x60;datetime_format&#x60; query parameter is &#x60;iso8601&#x60;, &#x60;last_report_at&#x60; is in ISO 8601 format. If Enlighten has no record of a report from this Envoy, returns null.
        /// </summary>
        /// <value>The last time this Envoy submitted a report, by default expressed in Unix epoch time. When the &#x60;datetime_format&#x60; query parameter is &#x60;iso8601&#x60;, &#x60;last_report_at&#x60; is in ISO 8601 format. If Enlighten has no record of a report from this Envoy, returns null.</value>
        [DataMember(Name = "last_report_at", IsRequired = true, EmitDefaultValue = true)]
        public long LastReportAt { get; set; }

        /// <summary>
        /// The human-friendly name of this Envoy.
        /// </summary>
        /// <value>The human-friendly name of this Envoy.</value>
        [DataMember(Name = "name", IsRequired = true, EmitDefaultValue = true)]
        public string Name { get; set; }

        /// <summary>
        /// The Enphase part number of this Envoy.
        /// </summary>
        /// <value>The Enphase part number of this Envoy.</value>
        [DataMember(Name = "part_number", IsRequired = true, EmitDefaultValue = true)]
        public string PartNumber { get; set; }

        /// <summary>
        /// The serial number of this Envoy.
        /// </summary>
        /// <value>The serial number of this Envoy.</value>
        [DataMember(Name = "serial_number", IsRequired = true, EmitDefaultValue = true)]
        public string SerialNumber { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class EnvoysResponseEnvoysInner {\n");
            sb.Append("  EnvoyId: ").Append(EnvoyId).Append("\n");
            sb.Append("  LastReportAt: ").Append(LastReportAt).Append("\n");
            sb.Append("  Name: ").Append(Name).Append("\n");
            sb.Append("  PartNumber: ").Append(PartNumber).Append("\n");
            sb.Append("  SerialNumber: ").Append(SerialNumber).Append("\n");
            sb.Append("  Status: ").Append(Status).Append("\n");
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
            return this.Equals(input as EnvoysResponseEnvoysInner);
        }

        /// <summary>
        /// Returns true if EnvoysResponseEnvoysInner instances are equal
        /// </summary>
        /// <param name="input">Instance of EnvoysResponseEnvoysInner to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(EnvoysResponseEnvoysInner input)
        {
            if (input == null)
            {
                return false;
            }
            return 
                (
                    this.EnvoyId == input.EnvoyId ||
                    this.EnvoyId.Equals(input.EnvoyId)
                ) && 
                (
                    this.LastReportAt == input.LastReportAt ||
                    this.LastReportAt.Equals(input.LastReportAt)
                ) && 
                (
                    this.Name == input.Name ||
                    (this.Name != null &&
                    this.Name.Equals(input.Name))
                ) && 
                (
                    this.PartNumber == input.PartNumber ||
                    (this.PartNumber != null &&
                    this.PartNumber.Equals(input.PartNumber))
                ) && 
                (
                    this.SerialNumber == input.SerialNumber ||
                    (this.SerialNumber != null &&
                    this.SerialNumber.Equals(input.SerialNumber))
                ) && 
                (
                    this.Status == input.Status ||
                    this.Status.Equals(input.Status)
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
                hashCode = (hashCode * 59) + this.EnvoyId.GetHashCode();
                hashCode = (hashCode * 59) + this.LastReportAt.GetHashCode();
                if (this.Name != null)
                {
                    hashCode = (hashCode * 59) + this.Name.GetHashCode();
                }
                if (this.PartNumber != null)
                {
                    hashCode = (hashCode * 59) + this.PartNumber.GetHashCode();
                }
                if (this.SerialNumber != null)
                {
                    hashCode = (hashCode * 59) + this.SerialNumber.GetHashCode();
                }
                hashCode = (hashCode * 59) + this.Status.GetHashCode();
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

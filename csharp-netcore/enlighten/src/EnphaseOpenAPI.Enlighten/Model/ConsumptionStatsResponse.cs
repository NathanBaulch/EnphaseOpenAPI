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
    /// ConsumptionStatsResponse
    /// </summary>
    [DataContract(Name = "ConsumptionStatsResponse")]
    public partial class ConsumptionStatsResponse : IEquatable<ConsumptionStatsResponse>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="ConsumptionStatsResponse" /> class.
        /// </summary>
        [JsonConstructorAttribute]
        protected ConsumptionStatsResponse() { }
        /// <summary>
        /// Initializes a new instance of the <see cref="ConsumptionStatsResponse" /> class.
        /// </summary>
        /// <param name="systemId">Enlighten ID for this system. (required).</param>
        /// <param name="totalDevices">Number of active consumption meters for this system. (required).</param>
        /// <param name="meta">meta (required).</param>
        /// <param name="intervals">A list of intervals between the requested start and end times. (required).</param>
        public ConsumptionStatsResponse(int systemId = default(int), int totalDevices = default(int), Meta meta = default(Meta), List<ConsumptionStatsResponseIntervalsInner> intervals = default(List<ConsumptionStatsResponseIntervalsInner>))
        {
            this.SystemId = systemId;
            this.TotalDevices = totalDevices;
            // to ensure "meta" is required (not null)
            if (meta == null)
            {
                throw new ArgumentNullException("meta is a required property for ConsumptionStatsResponse and cannot be null");
            }
            this.Meta = meta;
            // to ensure "intervals" is required (not null)
            if (intervals == null)
            {
                throw new ArgumentNullException("intervals is a required property for ConsumptionStatsResponse and cannot be null");
            }
            this.Intervals = intervals;
        }

        /// <summary>
        /// Enlighten ID for this system.
        /// </summary>
        /// <value>Enlighten ID for this system.</value>
        [DataMember(Name = "system_id", IsRequired = true, EmitDefaultValue = true)]
        public int SystemId { get; set; }

        /// <summary>
        /// Number of active consumption meters for this system.
        /// </summary>
        /// <value>Number of active consumption meters for this system.</value>
        [DataMember(Name = "total_devices", IsRequired = true, EmitDefaultValue = true)]
        public int TotalDevices { get; set; }

        /// <summary>
        /// Gets or Sets Meta
        /// </summary>
        [DataMember(Name = "meta", IsRequired = true, EmitDefaultValue = true)]
        public Meta Meta { get; set; }

        /// <summary>
        /// A list of intervals between the requested start and end times.
        /// </summary>
        /// <value>A list of intervals between the requested start and end times.</value>
        [DataMember(Name = "intervals", IsRequired = true, EmitDefaultValue = true)]
        public List<ConsumptionStatsResponseIntervalsInner> Intervals { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class ConsumptionStatsResponse {\n");
            sb.Append("  SystemId: ").Append(SystemId).Append("\n");
            sb.Append("  TotalDevices: ").Append(TotalDevices).Append("\n");
            sb.Append("  Meta: ").Append(Meta).Append("\n");
            sb.Append("  Intervals: ").Append(Intervals).Append("\n");
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
            return this.Equals(input as ConsumptionStatsResponse);
        }

        /// <summary>
        /// Returns true if ConsumptionStatsResponse instances are equal
        /// </summary>
        /// <param name="input">Instance of ConsumptionStatsResponse to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(ConsumptionStatsResponse input)
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
                    this.Meta == input.Meta ||
                    (this.Meta != null &&
                    this.Meta.Equals(input.Meta))
                ) && 
                (
                    this.Intervals == input.Intervals ||
                    this.Intervals != null &&
                    input.Intervals != null &&
                    this.Intervals.SequenceEqual(input.Intervals)
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
                if (this.Meta != null)
                {
                    hashCode = (hashCode * 59) + this.Meta.GetHashCode();
                }
                if (this.Intervals != null)
                {
                    hashCode = (hashCode * 59) + this.Intervals.GetHashCode();
                }
                return hashCode;
            }
        }

        /// <summary>
        /// To validate all properties of the instance
        /// </summary>
        /// <param name="validationContext">Validation context</param>
        /// <returns>Validation Result</returns>
        public IEnumerable<System.ComponentModel.DataAnnotations.ValidationResult> Validate(ValidationContext validationContext)
        {
            yield break;
        }
    }

}

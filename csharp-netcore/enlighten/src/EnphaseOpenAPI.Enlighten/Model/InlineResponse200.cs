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
    /// InlineResponse200
    /// </summary>
    [DataContract(Name = "inline_response_200")]
    public partial class InlineResponse200 : IEquatable<InlineResponse200>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="InlineResponse200" /> class.
        /// </summary>
        [JsonConstructorAttribute]
        protected InlineResponse200() { }
        /// <summary>
        /// Initializes a new instance of the <see cref="InlineResponse200" /> class.
        /// </summary>
        /// <param name="startDate">When no &#x60;start_date&#x60; parameter is specified on the request, this is the &#x60;operational_date&#x60; of the system. May be null if system has never produced. When a &#x60;start_date&#x60; parameter is included in the request, it is included here in the response. (required).</param>
        /// <param name="systemId">The identifier of the system. (required).</param>
        /// <param name="production">An array of production measurements, one for each day since the system started producing, or one for each day of the requested period. If the system has never produced energy, the array may be empty. (required).</param>
        /// <param name="microProduction">microProduction (required).</param>
        /// <param name="meterProduction">meterProduction (required).</param>
        /// <param name="meterStartDate">The first day in the time series when measurements are taken from a meter instead of from microinverters. This field is not present unless the system has a meter. (required).</param>
        /// <param name="meta">meta (required).</param>
        public InlineResponse200(DateTime startDate = default(DateTime), int systemId = default(int), List<int> production = default(List<int>), List<int> microProduction = default(List<int>), List<int> meterProduction = default(List<int>), DateTime meterStartDate = default(DateTime), Meta meta = default(Meta))
        {
            this.StartDate = startDate;
            this.SystemId = systemId;
            // to ensure "production" is required (not null)
            this.Production = production ?? throw new ArgumentNullException("production is a required property for InlineResponse200 and cannot be null");
            // to ensure "microProduction" is required (not null)
            this.MicroProduction = microProduction ?? throw new ArgumentNullException("microProduction is a required property for InlineResponse200 and cannot be null");
            // to ensure "meterProduction" is required (not null)
            this.MeterProduction = meterProduction ?? throw new ArgumentNullException("meterProduction is a required property for InlineResponse200 and cannot be null");
            this.MeterStartDate = meterStartDate;
            // to ensure "meta" is required (not null)
            this.Meta = meta ?? throw new ArgumentNullException("meta is a required property for InlineResponse200 and cannot be null");
        }

        /// <summary>
        /// When no &#x60;start_date&#x60; parameter is specified on the request, this is the &#x60;operational_date&#x60; of the system. May be null if system has never produced. When a &#x60;start_date&#x60; parameter is included in the request, it is included here in the response.
        /// </summary>
        /// <value>When no &#x60;start_date&#x60; parameter is specified on the request, this is the &#x60;operational_date&#x60; of the system. May be null if system has never produced. When a &#x60;start_date&#x60; parameter is included in the request, it is included here in the response.</value>
        [DataMember(Name = "start_date", IsRequired = true, EmitDefaultValue = false)]
        [JsonConverter(typeof(OpenAPIDateConverter))]
        public DateTime StartDate { get; set; }

        /// <summary>
        /// The identifier of the system.
        /// </summary>
        /// <value>The identifier of the system.</value>
        [DataMember(Name = "system_id", IsRequired = true, EmitDefaultValue = false)]
        public int SystemId { get; set; }

        /// <summary>
        /// An array of production measurements, one for each day since the system started producing, or one for each day of the requested period. If the system has never produced energy, the array may be empty.
        /// </summary>
        /// <value>An array of production measurements, one for each day since the system started producing, or one for each day of the requested period. If the system has never produced energy, the array may be empty.</value>
        [DataMember(Name = "production", IsRequired = true, EmitDefaultValue = false)]
        public List<int> Production { get; set; }

        /// <summary>
        /// Gets or Sets MicroProduction
        /// </summary>
        [DataMember(Name = "micro_production", IsRequired = true, EmitDefaultValue = false)]
        public List<int> MicroProduction { get; set; }

        /// <summary>
        /// Gets or Sets MeterProduction
        /// </summary>
        [DataMember(Name = "meter_production", IsRequired = true, EmitDefaultValue = false)]
        public List<int> MeterProduction { get; set; }

        /// <summary>
        /// The first day in the time series when measurements are taken from a meter instead of from microinverters. This field is not present unless the system has a meter.
        /// </summary>
        /// <value>The first day in the time series when measurements are taken from a meter instead of from microinverters. This field is not present unless the system has a meter.</value>
        [DataMember(Name = "meter_start_date", IsRequired = true, EmitDefaultValue = false)]
        [JsonConverter(typeof(OpenAPIDateConverter))]
        public DateTime MeterStartDate { get; set; }

        /// <summary>
        /// Gets or Sets Meta
        /// </summary>
        [DataMember(Name = "meta", IsRequired = true, EmitDefaultValue = false)]
        public Meta Meta { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class InlineResponse200 {\n");
            sb.Append("  StartDate: ").Append(StartDate).Append("\n");
            sb.Append("  SystemId: ").Append(SystemId).Append("\n");
            sb.Append("  Production: ").Append(Production).Append("\n");
            sb.Append("  MicroProduction: ").Append(MicroProduction).Append("\n");
            sb.Append("  MeterProduction: ").Append(MeterProduction).Append("\n");
            sb.Append("  MeterStartDate: ").Append(MeterStartDate).Append("\n");
            sb.Append("  Meta: ").Append(Meta).Append("\n");
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
            return this.Equals(input as InlineResponse200);
        }

        /// <summary>
        /// Returns true if InlineResponse200 instances are equal
        /// </summary>
        /// <param name="input">Instance of InlineResponse200 to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(InlineResponse200 input)
        {
            if (input == null)
                return false;

            return 
                (
                    this.StartDate == input.StartDate ||
                    (this.StartDate != null &&
                    this.StartDate.Equals(input.StartDate))
                ) && 
                (
                    this.SystemId == input.SystemId ||
                    this.SystemId.Equals(input.SystemId)
                ) && 
                (
                    this.Production == input.Production ||
                    this.Production != null &&
                    input.Production != null &&
                    this.Production.SequenceEqual(input.Production)
                ) && 
                (
                    this.MicroProduction == input.MicroProduction ||
                    this.MicroProduction != null &&
                    input.MicroProduction != null &&
                    this.MicroProduction.SequenceEqual(input.MicroProduction)
                ) && 
                (
                    this.MeterProduction == input.MeterProduction ||
                    this.MeterProduction != null &&
                    input.MeterProduction != null &&
                    this.MeterProduction.SequenceEqual(input.MeterProduction)
                ) && 
                (
                    this.MeterStartDate == input.MeterStartDate ||
                    (this.MeterStartDate != null &&
                    this.MeterStartDate.Equals(input.MeterStartDate))
                ) && 
                (
                    this.Meta == input.Meta ||
                    (this.Meta != null &&
                    this.Meta.Equals(input.Meta))
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
                if (this.StartDate != null)
                    hashCode = hashCode * 59 + this.StartDate.GetHashCode();
                hashCode = hashCode * 59 + this.SystemId.GetHashCode();
                if (this.Production != null)
                    hashCode = hashCode * 59 + this.Production.GetHashCode();
                if (this.MicroProduction != null)
                    hashCode = hashCode * 59 + this.MicroProduction.GetHashCode();
                if (this.MeterProduction != null)
                    hashCode = hashCode * 59 + this.MeterProduction.GetHashCode();
                if (this.MeterStartDate != null)
                    hashCode = hashCode * 59 + this.MeterStartDate.GetHashCode();
                if (this.Meta != null)
                    hashCode = hashCode * 59 + this.Meta.GetHashCode();
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

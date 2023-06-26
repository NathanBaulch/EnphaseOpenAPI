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
    /// TariffSeasonsInner
    /// </summary>
    [DataContract(Name = "TariffSeasons_inner")]
    public partial class TariffSeasonsInner : IEquatable<TariffSeasonsInner>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="TariffSeasonsInner" /> class.
        /// </summary>
        /// <param name="id">ToU year ID. e.g&#x3D;&#39;all_year_long&#39;..</param>
        /// <param name="start">Start of season. e.g&#x3D;&#39;1/1&#39;..</param>
        /// <param name="days">ToU seasons..</param>
        /// <param name="enableChargeFromGrid">enableChargeFromGrid.</param>
        /// <param name="enableDischargeToGrid">enableDischargeToGrid.</param>
        public TariffSeasonsInner(string id = default(string), string start = default(string), List<TariffSeasonsInnerDaysInner> days = default(List<TariffSeasonsInnerDaysInner>), bool enableChargeFromGrid = default(bool), bool enableDischargeToGrid = default(bool))
        {
            this.Id = id;
            this.Start = start;
            this.Days = days;
            this.EnableChargeFromGrid = enableChargeFromGrid;
            this.EnableDischargeToGrid = enableDischargeToGrid;
        }

        /// <summary>
        /// ToU year ID. e.g&#x3D;&#39;all_year_long&#39;.
        /// </summary>
        /// <value>ToU year ID. e.g&#x3D;&#39;all_year_long&#39;.</value>
        [DataMember(Name = "id", EmitDefaultValue = false)]
        public string Id { get; set; }

        /// <summary>
        /// Start of season. e.g&#x3D;&#39;1/1&#39;.
        /// </summary>
        /// <value>Start of season. e.g&#x3D;&#39;1/1&#39;.</value>
        [DataMember(Name = "start", EmitDefaultValue = false)]
        public string Start { get; set; }

        /// <summary>
        /// ToU seasons.
        /// </summary>
        /// <value>ToU seasons.</value>
        [DataMember(Name = "days", EmitDefaultValue = false)]
        public List<TariffSeasonsInnerDaysInner> Days { get; set; }

        /// <summary>
        /// Gets or Sets EnableChargeFromGrid
        /// </summary>
        [DataMember(Name = "enable_charge_from_grid", EmitDefaultValue = true)]
        public bool EnableChargeFromGrid { get; set; }

        /// <summary>
        /// Gets or Sets EnableDischargeToGrid
        /// </summary>
        [DataMember(Name = "enable_discharge_to_grid", EmitDefaultValue = true)]
        public bool EnableDischargeToGrid { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class TariffSeasonsInner {\n");
            sb.Append("  Id: ").Append(Id).Append("\n");
            sb.Append("  Start: ").Append(Start).Append("\n");
            sb.Append("  Days: ").Append(Days).Append("\n");
            sb.Append("  EnableChargeFromGrid: ").Append(EnableChargeFromGrid).Append("\n");
            sb.Append("  EnableDischargeToGrid: ").Append(EnableDischargeToGrid).Append("\n");
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
            return this.Equals(input as TariffSeasonsInner);
        }

        /// <summary>
        /// Returns true if TariffSeasonsInner instances are equal
        /// </summary>
        /// <param name="input">Instance of TariffSeasonsInner to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(TariffSeasonsInner input)
        {
            if (input == null)
            {
                return false;
            }
            return 
                (
                    this.Id == input.Id ||
                    (this.Id != null &&
                    this.Id.Equals(input.Id))
                ) && 
                (
                    this.Start == input.Start ||
                    (this.Start != null &&
                    this.Start.Equals(input.Start))
                ) && 
                (
                    this.Days == input.Days ||
                    this.Days != null &&
                    input.Days != null &&
                    this.Days.SequenceEqual(input.Days)
                ) && 
                (
                    this.EnableChargeFromGrid == input.EnableChargeFromGrid ||
                    this.EnableChargeFromGrid.Equals(input.EnableChargeFromGrid)
                ) && 
                (
                    this.EnableDischargeToGrid == input.EnableDischargeToGrid ||
                    this.EnableDischargeToGrid.Equals(input.EnableDischargeToGrid)
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
                if (this.Id != null)
                {
                    hashCode = (hashCode * 59) + this.Id.GetHashCode();
                }
                if (this.Start != null)
                {
                    hashCode = (hashCode * 59) + this.Start.GetHashCode();
                }
                if (this.Days != null)
                {
                    hashCode = (hashCode * 59) + this.Days.GetHashCode();
                }
                hashCode = (hashCode * 59) + this.EnableChargeFromGrid.GetHashCode();
                hashCode = (hashCode * 59) + this.EnableDischargeToGrid.GetHashCode();
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
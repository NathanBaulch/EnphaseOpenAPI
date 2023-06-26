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
    /// GetSystemDevicesResponseDevicesValueInnerCellularModem
    /// </summary>
    [DataContract(Name = "GetSystemDevicesResponse_devices_value_inner_cellular_modem")]
    public partial class GetSystemDevicesResponseDevicesValueInnerCellularModem : IEquatable<GetSystemDevicesResponseDevicesValueInnerCellularModem>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="GetSystemDevicesResponseDevicesValueInnerCellularModem" /> class.
        /// </summary>
        /// <param name="imei">imei.</param>
        /// <param name="partNum">partNum.</param>
        /// <param name="sku">sku.</param>
        /// <param name="planStartDate">planStartDate.</param>
        /// <param name="planEndDate">planEndDate.</param>
        public GetSystemDevicesResponseDevicesValueInnerCellularModem(string imei = default(string), string partNum = default(string), string sku = default(string), long planStartDate = default(long), long planEndDate = default(long))
        {
            this.Imei = imei;
            this.PartNum = partNum;
            this.Sku = sku;
            this.PlanStartDate = planStartDate;
            this.PlanEndDate = planEndDate;
        }

        /// <summary>
        /// Gets or Sets Imei
        /// </summary>
        [DataMember(Name = "imei", EmitDefaultValue = false)]
        public string Imei { get; set; }

        /// <summary>
        /// Gets or Sets PartNum
        /// </summary>
        [DataMember(Name = "part_num", EmitDefaultValue = false)]
        public string PartNum { get; set; }

        /// <summary>
        /// Gets or Sets Sku
        /// </summary>
        [DataMember(Name = "sku", EmitDefaultValue = false)]
        public string Sku { get; set; }

        /// <summary>
        /// Gets or Sets PlanStartDate
        /// </summary>
        [DataMember(Name = "plan_start_date", EmitDefaultValue = false)]
        public long PlanStartDate { get; set; }

        /// <summary>
        /// Gets or Sets PlanEndDate
        /// </summary>
        [DataMember(Name = "plan_end_date", EmitDefaultValue = false)]
        public long PlanEndDate { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class GetSystemDevicesResponseDevicesValueInnerCellularModem {\n");
            sb.Append("  Imei: ").Append(Imei).Append("\n");
            sb.Append("  PartNum: ").Append(PartNum).Append("\n");
            sb.Append("  Sku: ").Append(Sku).Append("\n");
            sb.Append("  PlanStartDate: ").Append(PlanStartDate).Append("\n");
            sb.Append("  PlanEndDate: ").Append(PlanEndDate).Append("\n");
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
            return this.Equals(input as GetSystemDevicesResponseDevicesValueInnerCellularModem);
        }

        /// <summary>
        /// Returns true if GetSystemDevicesResponseDevicesValueInnerCellularModem instances are equal
        /// </summary>
        /// <param name="input">Instance of GetSystemDevicesResponseDevicesValueInnerCellularModem to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(GetSystemDevicesResponseDevicesValueInnerCellularModem input)
        {
            if (input == null)
            {
                return false;
            }
            return 
                (
                    this.Imei == input.Imei ||
                    (this.Imei != null &&
                    this.Imei.Equals(input.Imei))
                ) && 
                (
                    this.PartNum == input.PartNum ||
                    (this.PartNum != null &&
                    this.PartNum.Equals(input.PartNum))
                ) && 
                (
                    this.Sku == input.Sku ||
                    (this.Sku != null &&
                    this.Sku.Equals(input.Sku))
                ) && 
                (
                    this.PlanStartDate == input.PlanStartDate ||
                    this.PlanStartDate.Equals(input.PlanStartDate)
                ) && 
                (
                    this.PlanEndDate == input.PlanEndDate ||
                    this.PlanEndDate.Equals(input.PlanEndDate)
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
                if (this.Imei != null)
                {
                    hashCode = (hashCode * 59) + this.Imei.GetHashCode();
                }
                if (this.PartNum != null)
                {
                    hashCode = (hashCode * 59) + this.PartNum.GetHashCode();
                }
                if (this.Sku != null)
                {
                    hashCode = (hashCode * 59) + this.Sku.GetHashCode();
                }
                hashCode = (hashCode * 59) + this.PlanStartDate.GetHashCode();
                hashCode = (hashCode * 59) + this.PlanEndDate.GetHashCode();
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
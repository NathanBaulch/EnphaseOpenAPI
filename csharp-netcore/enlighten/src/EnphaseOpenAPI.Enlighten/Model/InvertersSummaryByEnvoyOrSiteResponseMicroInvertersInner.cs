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
    /// InvertersSummaryByEnvoyOrSiteResponseMicroInvertersInner
    /// </summary>
    [DataContract(Name = "InvertersSummaryByEnvoyOrSiteResponse_micro_inverters_inner")]
    public partial class InvertersSummaryByEnvoyOrSiteResponseMicroInvertersInner : IEquatable<InvertersSummaryByEnvoyOrSiteResponseMicroInvertersInner>, IValidatableObject
    {
        /// <summary>
        /// The current status of this Microinverter. * &#x60;normal&#x60; - The microinverter is operating normally. * &#x60;power&#x60; - There is a production issue. * &#x60;micro&#x60; - The microinverter is not reporting. * &#x60;retired&#x60; - The microinverter is retired.
        /// </summary>
        /// <value>The current status of this Microinverter. * &#x60;normal&#x60; - The microinverter is operating normally. * &#x60;power&#x60; - There is a production issue. * &#x60;micro&#x60; - The microinverter is not reporting. * &#x60;retired&#x60; - The microinverter is retired.</value>
        [JsonConverter(typeof(StringEnumConverter))]
        public enum StatusEnum
        {
            /// <summary>
            /// Enum Normal for value: normal
            /// </summary>
            [EnumMember(Value = "normal")]
            Normal = 1,

            /// <summary>
            /// Enum Power for value: power
            /// </summary>
            [EnumMember(Value = "power")]
            Power = 2,

            /// <summary>
            /// Enum Micro for value: micro
            /// </summary>
            [EnumMember(Value = "micro")]
            Micro = 3,

            /// <summary>
            /// Enum Retired for value: retired
            /// </summary>
            [EnumMember(Value = "retired")]
            Retired = 4

        }


        /// <summary>
        /// The current status of this Microinverter. * &#x60;normal&#x60; - The microinverter is operating normally. * &#x60;power&#x60; - There is a production issue. * &#x60;micro&#x60; - The microinverter is not reporting. * &#x60;retired&#x60; - The microinverter is retired.
        /// </summary>
        /// <value>The current status of this Microinverter. * &#x60;normal&#x60; - The microinverter is operating normally. * &#x60;power&#x60; - There is a production issue. * &#x60;micro&#x60; - The microinverter is not reporting. * &#x60;retired&#x60; - The microinverter is retired.</value>
        [DataMember(Name = "status", IsRequired = true, EmitDefaultValue = true)]
        public StatusEnum Status { get; set; }
        /// <summary>
        /// Initializes a new instance of the <see cref="InvertersSummaryByEnvoyOrSiteResponseMicroInvertersInner" /> class.
        /// </summary>
        [JsonConstructorAttribute]
        protected InvertersSummaryByEnvoyOrSiteResponseMicroInvertersInner() { }
        /// <summary>
        /// Initializes a new instance of the <see cref="InvertersSummaryByEnvoyOrSiteResponseMicroInvertersInner" /> class.
        /// </summary>
        /// <param name="id">id (required).</param>
        /// <param name="model">Model number of this Microinverter. (required).</param>
        /// <param name="partNumber">The Enphase part number of this Microinverter. (required).</param>
        /// <param name="serialNumber">The serial number of this Microinverter. (required).</param>
        /// <param name="sku">sku (required).</param>
        /// <param name="status">The current status of this Microinverter. * &#x60;normal&#x60; - The microinverter is operating normally. * &#x60;power&#x60; - There is a production issue. * &#x60;micro&#x60; - The microinverter is not reporting. * &#x60;retired&#x60; - The microinverter is retired. (required).</param>
        /// <param name="powerProduced">powerProduced (required).</param>
        /// <param name="procLoad">procLoad (required).</param>
        /// <param name="paramTable">paramTable (required).</param>
        /// <param name="envoySerialNumber">envoySerialNumber (required).</param>
        /// <param name="energy">energy (required).</param>
        /// <param name="gridProfile">gridProfile (required).</param>
        /// <param name="lastReportDate">The last time this device submitted a report, by default expressed in Unix epoch time. If Enlighten has no record of a report from this Envoy, returns null. (required).</param>
        public InvertersSummaryByEnvoyOrSiteResponseMicroInvertersInner(int id = default(int), string model = default(string), string partNumber = default(string), string serialNumber = default(string), string sku = default(string), StatusEnum status = default(StatusEnum), InvertersSummaryByEnvoyOrSiteResponseMicroInvertersInnerPowerProduced powerProduced = default(InvertersSummaryByEnvoyOrSiteResponseMicroInvertersInnerPowerProduced), string procLoad = default(string), string paramTable = default(string), string envoySerialNumber = default(string), InvertersSummaryByEnvoyOrSiteResponseMicroInvertersInnerEnergy energy = default(InvertersSummaryByEnvoyOrSiteResponseMicroInvertersInnerEnergy), string gridProfile = default(string), DateTimeOffset lastReportDate = default(DateTimeOffset))
        {
            this.Id = id;
            // to ensure "model" is required (not null)
            if (model == null)
            {
                throw new ArgumentNullException("model is a required property for InvertersSummaryByEnvoyOrSiteResponseMicroInvertersInner and cannot be null");
            }
            this.Model = model;
            // to ensure "partNumber" is required (not null)
            if (partNumber == null)
            {
                throw new ArgumentNullException("partNumber is a required property for InvertersSummaryByEnvoyOrSiteResponseMicroInvertersInner and cannot be null");
            }
            this.PartNumber = partNumber;
            // to ensure "serialNumber" is required (not null)
            if (serialNumber == null)
            {
                throw new ArgumentNullException("serialNumber is a required property for InvertersSummaryByEnvoyOrSiteResponseMicroInvertersInner and cannot be null");
            }
            this.SerialNumber = serialNumber;
            // to ensure "sku" is required (not null)
            if (sku == null)
            {
                throw new ArgumentNullException("sku is a required property for InvertersSummaryByEnvoyOrSiteResponseMicroInvertersInner and cannot be null");
            }
            this.Sku = sku;
            this.Status = status;
            // to ensure "powerProduced" is required (not null)
            if (powerProduced == null)
            {
                throw new ArgumentNullException("powerProduced is a required property for InvertersSummaryByEnvoyOrSiteResponseMicroInvertersInner and cannot be null");
            }
            this.PowerProduced = powerProduced;
            // to ensure "procLoad" is required (not null)
            if (procLoad == null)
            {
                throw new ArgumentNullException("procLoad is a required property for InvertersSummaryByEnvoyOrSiteResponseMicroInvertersInner and cannot be null");
            }
            this.ProcLoad = procLoad;
            // to ensure "paramTable" is required (not null)
            if (paramTable == null)
            {
                throw new ArgumentNullException("paramTable is a required property for InvertersSummaryByEnvoyOrSiteResponseMicroInvertersInner and cannot be null");
            }
            this.ParamTable = paramTable;
            // to ensure "envoySerialNumber" is required (not null)
            if (envoySerialNumber == null)
            {
                throw new ArgumentNullException("envoySerialNumber is a required property for InvertersSummaryByEnvoyOrSiteResponseMicroInvertersInner and cannot be null");
            }
            this.EnvoySerialNumber = envoySerialNumber;
            // to ensure "energy" is required (not null)
            if (energy == null)
            {
                throw new ArgumentNullException("energy is a required property for InvertersSummaryByEnvoyOrSiteResponseMicroInvertersInner and cannot be null");
            }
            this.Energy = energy;
            // to ensure "gridProfile" is required (not null)
            if (gridProfile == null)
            {
                throw new ArgumentNullException("gridProfile is a required property for InvertersSummaryByEnvoyOrSiteResponseMicroInvertersInner and cannot be null");
            }
            this.GridProfile = gridProfile;
            this.LastReportDate = lastReportDate;
        }

        /// <summary>
        /// Gets or Sets Id
        /// </summary>
        [DataMember(Name = "id", IsRequired = true, EmitDefaultValue = true)]
        public int Id { get; set; }

        /// <summary>
        /// Model number of this Microinverter.
        /// </summary>
        /// <value>Model number of this Microinverter.</value>
        [DataMember(Name = "model", IsRequired = true, EmitDefaultValue = true)]
        public string Model { get; set; }

        /// <summary>
        /// The Enphase part number of this Microinverter.
        /// </summary>
        /// <value>The Enphase part number of this Microinverter.</value>
        [DataMember(Name = "part_number", IsRequired = true, EmitDefaultValue = true)]
        public string PartNumber { get; set; }

        /// <summary>
        /// The serial number of this Microinverter.
        /// </summary>
        /// <value>The serial number of this Microinverter.</value>
        [DataMember(Name = "serial_number", IsRequired = true, EmitDefaultValue = true)]
        public string SerialNumber { get; set; }

        /// <summary>
        /// Gets or Sets Sku
        /// </summary>
        [DataMember(Name = "sku", IsRequired = true, EmitDefaultValue = true)]
        public string Sku { get; set; }

        /// <summary>
        /// Gets or Sets PowerProduced
        /// </summary>
        [DataMember(Name = "power_produced", IsRequired = true, EmitDefaultValue = true)]
        public InvertersSummaryByEnvoyOrSiteResponseMicroInvertersInnerPowerProduced PowerProduced { get; set; }

        /// <summary>
        /// Gets or Sets ProcLoad
        /// </summary>
        [DataMember(Name = "proc_load", IsRequired = true, EmitDefaultValue = true)]
        public string ProcLoad { get; set; }

        /// <summary>
        /// Gets or Sets ParamTable
        /// </summary>
        [DataMember(Name = "param_table", IsRequired = true, EmitDefaultValue = true)]
        public string ParamTable { get; set; }

        /// <summary>
        /// Gets or Sets EnvoySerialNumber
        /// </summary>
        [DataMember(Name = "envoy_serial_number", IsRequired = true, EmitDefaultValue = true)]
        public string EnvoySerialNumber { get; set; }

        /// <summary>
        /// Gets or Sets Energy
        /// </summary>
        [DataMember(Name = "energy", IsRequired = true, EmitDefaultValue = true)]
        public InvertersSummaryByEnvoyOrSiteResponseMicroInvertersInnerEnergy Energy { get; set; }

        /// <summary>
        /// Gets or Sets GridProfile
        /// </summary>
        [DataMember(Name = "grid_profile", IsRequired = true, EmitDefaultValue = true)]
        public string GridProfile { get; set; }

        /// <summary>
        /// The last time this device submitted a report, by default expressed in Unix epoch time. If Enlighten has no record of a report from this Envoy, returns null.
        /// </summary>
        /// <value>The last time this device submitted a report, by default expressed in Unix epoch time. If Enlighten has no record of a report from this Envoy, returns null.</value>
        [DataMember(Name = "last_report_date", IsRequired = true, EmitDefaultValue = true)]
        [JsonConverter(typeof(OpenAPIDateConverter))]
        public DateTimeOffset LastReportDate { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class InvertersSummaryByEnvoyOrSiteResponseMicroInvertersInner {\n");
            sb.Append("  Id: ").Append(Id).Append("\n");
            sb.Append("  Model: ").Append(Model).Append("\n");
            sb.Append("  PartNumber: ").Append(PartNumber).Append("\n");
            sb.Append("  SerialNumber: ").Append(SerialNumber).Append("\n");
            sb.Append("  Sku: ").Append(Sku).Append("\n");
            sb.Append("  Status: ").Append(Status).Append("\n");
            sb.Append("  PowerProduced: ").Append(PowerProduced).Append("\n");
            sb.Append("  ProcLoad: ").Append(ProcLoad).Append("\n");
            sb.Append("  ParamTable: ").Append(ParamTable).Append("\n");
            sb.Append("  EnvoySerialNumber: ").Append(EnvoySerialNumber).Append("\n");
            sb.Append("  Energy: ").Append(Energy).Append("\n");
            sb.Append("  GridProfile: ").Append(GridProfile).Append("\n");
            sb.Append("  LastReportDate: ").Append(LastReportDate).Append("\n");
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
            return this.Equals(input as InvertersSummaryByEnvoyOrSiteResponseMicroInvertersInner);
        }

        /// <summary>
        /// Returns true if InvertersSummaryByEnvoyOrSiteResponseMicroInvertersInner instances are equal
        /// </summary>
        /// <param name="input">Instance of InvertersSummaryByEnvoyOrSiteResponseMicroInvertersInner to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(InvertersSummaryByEnvoyOrSiteResponseMicroInvertersInner input)
        {
            if (input == null)
            {
                return false;
            }
            return 
                (
                    this.Id == input.Id ||
                    this.Id.Equals(input.Id)
                ) && 
                (
                    this.Model == input.Model ||
                    (this.Model != null &&
                    this.Model.Equals(input.Model))
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
                    this.Sku == input.Sku ||
                    (this.Sku != null &&
                    this.Sku.Equals(input.Sku))
                ) && 
                (
                    this.Status == input.Status ||
                    this.Status.Equals(input.Status)
                ) && 
                (
                    this.PowerProduced == input.PowerProduced ||
                    (this.PowerProduced != null &&
                    this.PowerProduced.Equals(input.PowerProduced))
                ) && 
                (
                    this.ProcLoad == input.ProcLoad ||
                    (this.ProcLoad != null &&
                    this.ProcLoad.Equals(input.ProcLoad))
                ) && 
                (
                    this.ParamTable == input.ParamTable ||
                    (this.ParamTable != null &&
                    this.ParamTable.Equals(input.ParamTable))
                ) && 
                (
                    this.EnvoySerialNumber == input.EnvoySerialNumber ||
                    (this.EnvoySerialNumber != null &&
                    this.EnvoySerialNumber.Equals(input.EnvoySerialNumber))
                ) && 
                (
                    this.Energy == input.Energy ||
                    (this.Energy != null &&
                    this.Energy.Equals(input.Energy))
                ) && 
                (
                    this.GridProfile == input.GridProfile ||
                    (this.GridProfile != null &&
                    this.GridProfile.Equals(input.GridProfile))
                ) && 
                (
                    this.LastReportDate == input.LastReportDate ||
                    (this.LastReportDate != null &&
                    this.LastReportDate.Equals(input.LastReportDate))
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
                hashCode = (hashCode * 59) + this.Id.GetHashCode();
                if (this.Model != null)
                {
                    hashCode = (hashCode * 59) + this.Model.GetHashCode();
                }
                if (this.PartNumber != null)
                {
                    hashCode = (hashCode * 59) + this.PartNumber.GetHashCode();
                }
                if (this.SerialNumber != null)
                {
                    hashCode = (hashCode * 59) + this.SerialNumber.GetHashCode();
                }
                if (this.Sku != null)
                {
                    hashCode = (hashCode * 59) + this.Sku.GetHashCode();
                }
                hashCode = (hashCode * 59) + this.Status.GetHashCode();
                if (this.PowerProduced != null)
                {
                    hashCode = (hashCode * 59) + this.PowerProduced.GetHashCode();
                }
                if (this.ProcLoad != null)
                {
                    hashCode = (hashCode * 59) + this.ProcLoad.GetHashCode();
                }
                if (this.ParamTable != null)
                {
                    hashCode = (hashCode * 59) + this.ParamTable.GetHashCode();
                }
                if (this.EnvoySerialNumber != null)
                {
                    hashCode = (hashCode * 59) + this.EnvoySerialNumber.GetHashCode();
                }
                if (this.Energy != null)
                {
                    hashCode = (hashCode * 59) + this.Energy.GetHashCode();
                }
                if (this.GridProfile != null)
                {
                    hashCode = (hashCode * 59) + this.GridProfile.GetHashCode();
                }
                if (this.LastReportDate != null)
                {
                    hashCode = (hashCode * 59) + this.LastReportDate.GetHashCode();
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

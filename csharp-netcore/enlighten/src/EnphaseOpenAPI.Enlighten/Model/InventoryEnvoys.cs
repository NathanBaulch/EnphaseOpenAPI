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
    /// InventoryEnvoys
    /// </summary>
    [DataContract(Name = "Inventory_envoys")]
    public partial class InventoryEnvoys : IEquatable<InventoryEnvoys>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="InventoryEnvoys" /> class.
        /// </summary>
        [JsonConstructorAttribute]
        protected InventoryEnvoys() { }
        /// <summary>
        /// Initializes a new instance of the <see cref="InventoryEnvoys" /> class.
        /// </summary>
        /// <param name="sn">sn (required).</param>
        /// <param name="model">model (required).</param>
        /// <param name="sku">sku (required).</param>
        public InventoryEnvoys(string sn = default(string), string model = default(string), string sku = default(string))
        {
            // to ensure "sn" is required (not null)
            this.Sn = sn ?? throw new ArgumentNullException("sn is a required property for InventoryEnvoys and cannot be null");
            // to ensure "model" is required (not null)
            this.Model = model ?? throw new ArgumentNullException("model is a required property for InventoryEnvoys and cannot be null");
            // to ensure "sku" is required (not null)
            this.Sku = sku ?? throw new ArgumentNullException("sku is a required property for InventoryEnvoys and cannot be null");
        }

        /// <summary>
        /// Gets or Sets Sn
        /// </summary>
        [DataMember(Name = "sn", IsRequired = true, EmitDefaultValue = false)]
        public string Sn { get; set; }

        /// <summary>
        /// Gets or Sets Model
        /// </summary>
        [DataMember(Name = "model", IsRequired = true, EmitDefaultValue = false)]
        public string Model { get; set; }

        /// <summary>
        /// Gets or Sets Sku
        /// </summary>
        [DataMember(Name = "sku", IsRequired = true, EmitDefaultValue = false)]
        public string Sku { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class InventoryEnvoys {\n");
            sb.Append("  Sn: ").Append(Sn).Append("\n");
            sb.Append("  Model: ").Append(Model).Append("\n");
            sb.Append("  Sku: ").Append(Sku).Append("\n");
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
            return this.Equals(input as InventoryEnvoys);
        }

        /// <summary>
        /// Returns true if InventoryEnvoys instances are equal
        /// </summary>
        /// <param name="input">Instance of InventoryEnvoys to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(InventoryEnvoys input)
        {
            if (input == null)
                return false;

            return 
                (
                    this.Sn == input.Sn ||
                    (this.Sn != null &&
                    this.Sn.Equals(input.Sn))
                ) && 
                (
                    this.Model == input.Model ||
                    (this.Model != null &&
                    this.Model.Equals(input.Model))
                ) && 
                (
                    this.Sku == input.Sku ||
                    (this.Sku != null &&
                    this.Sku.Equals(input.Sku))
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
                if (this.Sn != null)
                    hashCode = hashCode * 59 + this.Sn.GetHashCode();
                if (this.Model != null)
                    hashCode = hashCode * 59 + this.Model.GetHashCode();
                if (this.Sku != null)
                    hashCode = hashCode * 59 + this.Sku.GetHashCode();
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

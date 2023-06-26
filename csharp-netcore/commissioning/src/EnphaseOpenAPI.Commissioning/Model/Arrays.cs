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
    /// Arrays
    /// </summary>
    [DataContract(Name = "Arrays")]
    public partial class Arrays : IEquatable<Arrays>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="Arrays" /> class.
        /// </summary>
        /// <param name="systemId">System ID..</param>
        /// <param name="createdAt">System created Epoch time..</param>
        /// <param name="updatedAt">System updated Epoch time..</param>
        /// <param name="angle">Angle of the system..</param>
        /// <param name="arrays">arrays.</param>
        /// <param name="inventory">List of active inverter serial numbers..</param>
        /// <param name="inventoryDetails">inventoryDetails.</param>
        /// <param name="layers">layers.</param>
        public Arrays(int systemId = default(int), long createdAt = default(long), long updatedAt = default(long), int angle = default(int), List<Array> arrays = default(List<Array>), List<string> inventory = default(List<string>), List<ArraysInventoryDetailsInner> inventoryDetails = default(List<ArraysInventoryDetailsInner>), List<ArraysLayersInner> layers = default(List<ArraysLayersInner>))
        {
            this.SystemId = systemId;
            this.CreatedAt = createdAt;
            this.UpdatedAt = updatedAt;
            this.Angle = angle;
            this._Arrays = arrays;
            this.Inventory = inventory;
            this.InventoryDetails = inventoryDetails;
            this.Layers = layers;
        }

        /// <summary>
        /// System ID.
        /// </summary>
        /// <value>System ID.</value>
        [DataMember(Name = "system_id", EmitDefaultValue = false)]
        public int SystemId { get; set; }

        /// <summary>
        /// System created Epoch time.
        /// </summary>
        /// <value>System created Epoch time.</value>
        [DataMember(Name = "created_at", EmitDefaultValue = false)]
        public long CreatedAt { get; set; }

        /// <summary>
        /// System updated Epoch time.
        /// </summary>
        /// <value>System updated Epoch time.</value>
        [DataMember(Name = "updated_at", EmitDefaultValue = false)]
        public long UpdatedAt { get; set; }

        /// <summary>
        /// Angle of the system.
        /// </summary>
        /// <value>Angle of the system.</value>
        [DataMember(Name = "angle", EmitDefaultValue = false)]
        public int Angle { get; set; }

        /// <summary>
        /// Gets or Sets _Arrays
        /// </summary>
        [DataMember(Name = "arrays", EmitDefaultValue = false)]
        public List<Array> _Arrays { get; set; }

        /// <summary>
        /// List of active inverter serial numbers.
        /// </summary>
        /// <value>List of active inverter serial numbers.</value>
        [DataMember(Name = "inventory", EmitDefaultValue = false)]
        public List<string> Inventory { get; set; }

        /// <summary>
        /// Gets or Sets InventoryDetails
        /// </summary>
        [DataMember(Name = "inventory_details", EmitDefaultValue = false)]
        public List<ArraysInventoryDetailsInner> InventoryDetails { get; set; }

        /// <summary>
        /// Gets or Sets Layers
        /// </summary>
        [DataMember(Name = "layers", EmitDefaultValue = false)]
        public List<ArraysLayersInner> Layers { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class Arrays {\n");
            sb.Append("  SystemId: ").Append(SystemId).Append("\n");
            sb.Append("  CreatedAt: ").Append(CreatedAt).Append("\n");
            sb.Append("  UpdatedAt: ").Append(UpdatedAt).Append("\n");
            sb.Append("  Angle: ").Append(Angle).Append("\n");
            sb.Append("  _Arrays: ").Append(_Arrays).Append("\n");
            sb.Append("  Inventory: ").Append(Inventory).Append("\n");
            sb.Append("  InventoryDetails: ").Append(InventoryDetails).Append("\n");
            sb.Append("  Layers: ").Append(Layers).Append("\n");
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
            return this.Equals(input as Arrays);
        }

        /// <summary>
        /// Returns true if Arrays instances are equal
        /// </summary>
        /// <param name="input">Instance of Arrays to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(Arrays input)
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
                    this.CreatedAt == input.CreatedAt ||
                    this.CreatedAt.Equals(input.CreatedAt)
                ) && 
                (
                    this.UpdatedAt == input.UpdatedAt ||
                    this.UpdatedAt.Equals(input.UpdatedAt)
                ) && 
                (
                    this.Angle == input.Angle ||
                    this.Angle.Equals(input.Angle)
                ) && 
                (
                    this._Arrays == input._Arrays ||
                    this._Arrays != null &&
                    input._Arrays != null &&
                    this._Arrays.SequenceEqual(input._Arrays)
                ) && 
                (
                    this.Inventory == input.Inventory ||
                    this.Inventory != null &&
                    input.Inventory != null &&
                    this.Inventory.SequenceEqual(input.Inventory)
                ) && 
                (
                    this.InventoryDetails == input.InventoryDetails ||
                    this.InventoryDetails != null &&
                    input.InventoryDetails != null &&
                    this.InventoryDetails.SequenceEqual(input.InventoryDetails)
                ) && 
                (
                    this.Layers == input.Layers ||
                    this.Layers != null &&
                    input.Layers != null &&
                    this.Layers.SequenceEqual(input.Layers)
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
                hashCode = (hashCode * 59) + this.CreatedAt.GetHashCode();
                hashCode = (hashCode * 59) + this.UpdatedAt.GetHashCode();
                hashCode = (hashCode * 59) + this.Angle.GetHashCode();
                if (this._Arrays != null)
                {
                    hashCode = (hashCode * 59) + this._Arrays.GetHashCode();
                }
                if (this.Inventory != null)
                {
                    hashCode = (hashCode * 59) + this.Inventory.GetHashCode();
                }
                if (this.InventoryDetails != null)
                {
                    hashCode = (hashCode * 59) + this.InventoryDetails.GetHashCode();
                }
                if (this.Layers != null)
                {
                    hashCode = (hashCode * 59) + this.Layers.GetHashCode();
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
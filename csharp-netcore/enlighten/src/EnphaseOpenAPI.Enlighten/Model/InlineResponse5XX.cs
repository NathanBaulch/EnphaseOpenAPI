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
    /// InlineResponse5XX
    /// </summary>
    [DataContract(Name = "inline_response_5XX")]
    public partial class InlineResponse5XX : IEquatable<InlineResponse5XX>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="InlineResponse5XX" /> class.
        /// </summary>
        [JsonConstructorAttribute]
        protected InlineResponse5XX() { }
        /// <summary>
        /// Initializes a new instance of the <see cref="InlineResponse5XX" /> class.
        /// </summary>
        /// <param name="errorCode">errorCode (required).</param>
        /// <param name="errorMessages">errorMessages (required).</param>
        public InlineResponse5XX(int errorCode = default(int), List<string> errorMessages = default(List<string>))
        {
            this.ErrorCode = errorCode;
            // to ensure "errorMessages" is required (not null)
            this.ErrorMessages = errorMessages ?? throw new ArgumentNullException("errorMessages is a required property for InlineResponse5XX and cannot be null");
        }

        /// <summary>
        /// Gets or Sets ErrorCode
        /// </summary>
        [DataMember(Name = "errorCode", IsRequired = true, EmitDefaultValue = false)]
        public int ErrorCode { get; set; }

        /// <summary>
        /// Gets or Sets ErrorMessages
        /// </summary>
        [DataMember(Name = "errorMessages", IsRequired = true, EmitDefaultValue = false)]
        public List<string> ErrorMessages { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class InlineResponse5XX {\n");
            sb.Append("  ErrorCode: ").Append(ErrorCode).Append("\n");
            sb.Append("  ErrorMessages: ").Append(ErrorMessages).Append("\n");
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
            return this.Equals(input as InlineResponse5XX);
        }

        /// <summary>
        /// Returns true if InlineResponse5XX instances are equal
        /// </summary>
        /// <param name="input">Instance of InlineResponse5XX to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(InlineResponse5XX input)
        {
            if (input == null)
                return false;

            return 
                (
                    this.ErrorCode == input.ErrorCode ||
                    this.ErrorCode.Equals(input.ErrorCode)
                ) && 
                (
                    this.ErrorMessages == input.ErrorMessages ||
                    this.ErrorMessages != null &&
                    input.ErrorMessages != null &&
                    this.ErrorMessages.SequenceEqual(input.ErrorMessages)
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
                hashCode = hashCode * 59 + this.ErrorCode.GetHashCode();
                if (this.ErrorMessages != null)
                    hashCode = hashCode * 59 + this.ErrorMessages.GetHashCode();
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

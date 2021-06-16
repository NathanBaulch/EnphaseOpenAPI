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
    /// InlineResponse2007Intervals1
    /// </summary>
    [DataContract(Name = "inline_response_200_7_intervals_1")]
    public partial class InlineResponse2007Intervals1 : IEquatable<InlineResponse2007Intervals1>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="InlineResponse2007Intervals1" /> class.
        /// </summary>
        [JsonConstructorAttribute]
        protected InlineResponse2007Intervals1() { }
        /// <summary>
        /// Initializes a new instance of the <see cref="InlineResponse2007Intervals1" /> class.
        /// </summary>
        /// <param name="channel">The reporting channel identifier. (required).</param>
        /// <param name="endAt">End of interval. The format is Unix epoch time unless you pass a &#x60;datetime_format&#x60; parameter as described [here](https://developer.enphase.com/docs#Datetimes). (required).</param>
        /// <param name="whDel">Energy delivered during this interval, in Watt-hours. (required).</param>
        /// <param name="currW">Energy delivered during this interval, in Watts. (required).</param>
        public InlineResponse2007Intervals1(int channel = default(int), int endAt = default(int), int whDel = default(int), int currW = default(int))
        {
            this.Channel = channel;
            this.EndAt = endAt;
            this.WhDel = whDel;
            this.CurrW = currW;
        }

        /// <summary>
        /// The reporting channel identifier.
        /// </summary>
        /// <value>The reporting channel identifier.</value>
        [DataMember(Name = "channel", IsRequired = true, EmitDefaultValue = false)]
        public int Channel { get; set; }

        /// <summary>
        /// End of interval. The format is Unix epoch time unless you pass a &#x60;datetime_format&#x60; parameter as described [here](https://developer.enphase.com/docs#Datetimes).
        /// </summary>
        /// <value>End of interval. The format is Unix epoch time unless you pass a &#x60;datetime_format&#x60; parameter as described [here](https://developer.enphase.com/docs#Datetimes).</value>
        [DataMember(Name = "end_at", IsRequired = true, EmitDefaultValue = false)]
        public int EndAt { get; set; }

        /// <summary>
        /// Energy delivered during this interval, in Watt-hours.
        /// </summary>
        /// <value>Energy delivered during this interval, in Watt-hours.</value>
        [DataMember(Name = "wh_del", IsRequired = true, EmitDefaultValue = false)]
        public int WhDel { get; set; }

        /// <summary>
        /// Energy delivered during this interval, in Watts.
        /// </summary>
        /// <value>Energy delivered during this interval, in Watts.</value>
        [DataMember(Name = "curr_w", IsRequired = true, EmitDefaultValue = false)]
        public int CurrW { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class InlineResponse2007Intervals1 {\n");
            sb.Append("  Channel: ").Append(Channel).Append("\n");
            sb.Append("  EndAt: ").Append(EndAt).Append("\n");
            sb.Append("  WhDel: ").Append(WhDel).Append("\n");
            sb.Append("  CurrW: ").Append(CurrW).Append("\n");
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
            return this.Equals(input as InlineResponse2007Intervals1);
        }

        /// <summary>
        /// Returns true if InlineResponse2007Intervals1 instances are equal
        /// </summary>
        /// <param name="input">Instance of InlineResponse2007Intervals1 to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(InlineResponse2007Intervals1 input)
        {
            if (input == null)
                return false;

            return 
                (
                    this.Channel == input.Channel ||
                    this.Channel.Equals(input.Channel)
                ) && 
                (
                    this.EndAt == input.EndAt ||
                    this.EndAt.Equals(input.EndAt)
                ) && 
                (
                    this.WhDel == input.WhDel ||
                    this.WhDel.Equals(input.WhDel)
                ) && 
                (
                    this.CurrW == input.CurrW ||
                    this.CurrW.Equals(input.CurrW)
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
                hashCode = hashCode * 59 + this.Channel.GetHashCode();
                hashCode = hashCode * 59 + this.EndAt.GetHashCode();
                hashCode = hashCode * 59 + this.WhDel.GetHashCode();
                hashCode = hashCode * 59 + this.CurrW.GetHashCode();
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

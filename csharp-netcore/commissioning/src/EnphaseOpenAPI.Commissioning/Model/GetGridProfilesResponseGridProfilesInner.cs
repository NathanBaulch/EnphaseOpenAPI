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
    /// GetGridProfilesResponseGridProfilesInner
    /// </summary>
    [DataContract(Name = "GetGridProfilesResponse_grid_profiles_inner")]
    public partial class GetGridProfilesResponseGridProfilesInner : IEquatable<GetGridProfilesResponseGridProfilesInner>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="GetGridProfilesResponseGridProfilesInner" /> class.
        /// </summary>
        /// <param name="id">Grid profile ID. System-generated..</param>
        /// <param name="profileId">profileId.</param>
        /// <param name="created">Profile created date and time..</param>
        /// <param name="updated">Profile last updated date and time..</param>
        /// <param name="name">Profile name..</param>
        /// <param name="description">Profile description..</param>
        /// <param name="version">Profile version..</param>
        /// <param name="envoyType">Envoy type..</param>
        /// <param name="countries">Name of the Countries..</param>
        /// <param name="states">States code..</param>
        /// <param name="stateNames">Name of the states..</param>
        /// <param name="ensemble1Compatible">ensemble1Compatible.</param>
        public GetGridProfilesResponseGridProfilesInner(string id = default(string), string profileId = default(string), DateTimeOffset created = default(DateTimeOffset), DateTimeOffset updated = default(DateTimeOffset), string name = default(string), string description = default(string), string version = default(string), string envoyType = default(string), List<string> countries = default(List<string>), List<string> states = default(List<string>), List<string> stateNames = default(List<string>), bool ensemble1Compatible = default(bool))
        {
            this.Id = id;
            this.ProfileId = profileId;
            this.Created = created;
            this.Updated = updated;
            this.Name = name;
            this.Description = description;
            this._Version = version;
            this.EnvoyType = envoyType;
            this.Countries = countries;
            this.States = states;
            this.StateNames = stateNames;
            this.Ensemble1Compatible = ensemble1Compatible;
        }

        /// <summary>
        /// Grid profile ID. System-generated.
        /// </summary>
        /// <value>Grid profile ID. System-generated.</value>
        [DataMember(Name = "id", EmitDefaultValue = false)]
        public string Id { get; set; }

        /// <summary>
        /// Gets or Sets ProfileId
        /// </summary>
        [DataMember(Name = "profile_id", EmitDefaultValue = false)]
        public string ProfileId { get; set; }

        /// <summary>
        /// Profile created date and time.
        /// </summary>
        /// <value>Profile created date and time.</value>
        [DataMember(Name = "created", EmitDefaultValue = false)]
        public DateTimeOffset Created { get; set; }

        /// <summary>
        /// Profile last updated date and time.
        /// </summary>
        /// <value>Profile last updated date and time.</value>
        [DataMember(Name = "updated", EmitDefaultValue = false)]
        public DateTimeOffset Updated { get; set; }

        /// <summary>
        /// Profile name.
        /// </summary>
        /// <value>Profile name.</value>
        [DataMember(Name = "name", EmitDefaultValue = false)]
        public string Name { get; set; }

        /// <summary>
        /// Profile description.
        /// </summary>
        /// <value>Profile description.</value>
        [DataMember(Name = "description", EmitDefaultValue = false)]
        public string Description { get; set; }

        /// <summary>
        /// Profile version.
        /// </summary>
        /// <value>Profile version.</value>
        [DataMember(Name = "version", EmitDefaultValue = false)]
        public string _Version { get; set; }

        /// <summary>
        /// Envoy type.
        /// </summary>
        /// <value>Envoy type.</value>
        [DataMember(Name = "envoy_type", EmitDefaultValue = false)]
        public string EnvoyType { get; set; }

        /// <summary>
        /// Name of the Countries.
        /// </summary>
        /// <value>Name of the Countries.</value>
        [DataMember(Name = "countries", EmitDefaultValue = false)]
        public List<string> Countries { get; set; }

        /// <summary>
        /// States code.
        /// </summary>
        /// <value>States code.</value>
        [DataMember(Name = "states", EmitDefaultValue = false)]
        public List<string> States { get; set; }

        /// <summary>
        /// Name of the states.
        /// </summary>
        /// <value>Name of the states.</value>
        [DataMember(Name = "state_names", EmitDefaultValue = false)]
        public List<string> StateNames { get; set; }

        /// <summary>
        /// Gets or Sets Ensemble1Compatible
        /// </summary>
        [DataMember(Name = "ensemble_1_compatible", EmitDefaultValue = true)]
        public bool Ensemble1Compatible { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class GetGridProfilesResponseGridProfilesInner {\n");
            sb.Append("  Id: ").Append(Id).Append("\n");
            sb.Append("  ProfileId: ").Append(ProfileId).Append("\n");
            sb.Append("  Created: ").Append(Created).Append("\n");
            sb.Append("  Updated: ").Append(Updated).Append("\n");
            sb.Append("  Name: ").Append(Name).Append("\n");
            sb.Append("  Description: ").Append(Description).Append("\n");
            sb.Append("  _Version: ").Append(_Version).Append("\n");
            sb.Append("  EnvoyType: ").Append(EnvoyType).Append("\n");
            sb.Append("  Countries: ").Append(Countries).Append("\n");
            sb.Append("  States: ").Append(States).Append("\n");
            sb.Append("  StateNames: ").Append(StateNames).Append("\n");
            sb.Append("  Ensemble1Compatible: ").Append(Ensemble1Compatible).Append("\n");
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
            return this.Equals(input as GetGridProfilesResponseGridProfilesInner);
        }

        /// <summary>
        /// Returns true if GetGridProfilesResponseGridProfilesInner instances are equal
        /// </summary>
        /// <param name="input">Instance of GetGridProfilesResponseGridProfilesInner to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(GetGridProfilesResponseGridProfilesInner input)
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
                    this.ProfileId == input.ProfileId ||
                    (this.ProfileId != null &&
                    this.ProfileId.Equals(input.ProfileId))
                ) && 
                (
                    this.Created == input.Created ||
                    (this.Created != null &&
                    this.Created.Equals(input.Created))
                ) && 
                (
                    this.Updated == input.Updated ||
                    (this.Updated != null &&
                    this.Updated.Equals(input.Updated))
                ) && 
                (
                    this.Name == input.Name ||
                    (this.Name != null &&
                    this.Name.Equals(input.Name))
                ) && 
                (
                    this.Description == input.Description ||
                    (this.Description != null &&
                    this.Description.Equals(input.Description))
                ) && 
                (
                    this._Version == input._Version ||
                    (this._Version != null &&
                    this._Version.Equals(input._Version))
                ) && 
                (
                    this.EnvoyType == input.EnvoyType ||
                    (this.EnvoyType != null &&
                    this.EnvoyType.Equals(input.EnvoyType))
                ) && 
                (
                    this.Countries == input.Countries ||
                    this.Countries != null &&
                    input.Countries != null &&
                    this.Countries.SequenceEqual(input.Countries)
                ) && 
                (
                    this.States == input.States ||
                    this.States != null &&
                    input.States != null &&
                    this.States.SequenceEqual(input.States)
                ) && 
                (
                    this.StateNames == input.StateNames ||
                    this.StateNames != null &&
                    input.StateNames != null &&
                    this.StateNames.SequenceEqual(input.StateNames)
                ) && 
                (
                    this.Ensemble1Compatible == input.Ensemble1Compatible ||
                    this.Ensemble1Compatible.Equals(input.Ensemble1Compatible)
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
                if (this.ProfileId != null)
                {
                    hashCode = (hashCode * 59) + this.ProfileId.GetHashCode();
                }
                if (this.Created != null)
                {
                    hashCode = (hashCode * 59) + this.Created.GetHashCode();
                }
                if (this.Updated != null)
                {
                    hashCode = (hashCode * 59) + this.Updated.GetHashCode();
                }
                if (this.Name != null)
                {
                    hashCode = (hashCode * 59) + this.Name.GetHashCode();
                }
                if (this.Description != null)
                {
                    hashCode = (hashCode * 59) + this.Description.GetHashCode();
                }
                if (this._Version != null)
                {
                    hashCode = (hashCode * 59) + this._Version.GetHashCode();
                }
                if (this.EnvoyType != null)
                {
                    hashCode = (hashCode * 59) + this.EnvoyType.GetHashCode();
                }
                if (this.Countries != null)
                {
                    hashCode = (hashCode * 59) + this.Countries.GetHashCode();
                }
                if (this.States != null)
                {
                    hashCode = (hashCode * 59) + this.States.GetHashCode();
                }
                if (this.StateNames != null)
                {
                    hashCode = (hashCode * 59) + this.StateNames.GetHashCode();
                }
                hashCode = (hashCode * 59) + this.Ensemble1Compatible.GetHashCode();
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
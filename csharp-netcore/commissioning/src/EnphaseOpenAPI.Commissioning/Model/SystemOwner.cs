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
    /// Name of the system owner. Owner must be an Enlighten user. If the user of the API is a self-installer, the owner must be himself. If the query parameter &#39;expand&#x3D;owner&#39; passed in the request owner detail will appear in the response.
    /// </summary>
    [DataContract(Name = "System_owner")]
    public partial class SystemOwner : IEquatable<SystemOwner>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="SystemOwner" /> class.
        /// </summary>
        /// <param name="firstName">firstName.</param>
        /// <param name="lastName">lastName.</param>
        /// <param name="email">email.</param>
        /// <param name="phone">phone.</param>
        /// <param name="active">Whether the user is allowed to log in to Enlighten. Values true, false. Default true..</param>
        /// <param name="userId">userId.</param>
        /// <param name="userRoles">What type of user this is in Enlighten. For self installer user user_roles will be [&#39;self_installer&#39;]. For other users user_roles will be empty..</param>
        /// <param name="enlightenEmails">enlightenEmails.</param>
        /// <param name="enlightenView">enlightenView.</param>
        /// <param name="uri">uri.</param>
        /// <param name="updatedAt">updatedAt.</param>
        /// <param name="company">company.</param>
        public SystemOwner(string firstName = default(string), string lastName = default(string), string email = default(string), string phone = default(string), bool active = default(bool), int userId = default(int), List<UserRoleEnum> userRoles = default(List<UserRoleEnum>), bool enlightenEmails = default(bool), string enlightenView = default(string), string uri = default(string), long updatedAt = default(long), SystemOwnerCompany company = default(SystemOwnerCompany))
        {
            this.FirstName = firstName;
            this.LastName = lastName;
            this.Email = email;
            this.Phone = phone;
            this.Active = active;
            this.UserId = userId;
            this.UserRoles = userRoles;
            this.EnlightenEmails = enlightenEmails;
            this.EnlightenView = enlightenView;
            this.Uri = uri;
            this.UpdatedAt = updatedAt;
            this.Company = company;
        }

        /// <summary>
        /// Gets or Sets FirstName
        /// </summary>
        [DataMember(Name = "first_name", EmitDefaultValue = false)]
        public string FirstName { get; set; }

        /// <summary>
        /// Gets or Sets LastName
        /// </summary>
        [DataMember(Name = "last_name", EmitDefaultValue = false)]
        public string LastName { get; set; }

        /// <summary>
        /// Gets or Sets Email
        /// </summary>
        [DataMember(Name = "email", EmitDefaultValue = false)]
        public string Email { get; set; }

        /// <summary>
        /// Gets or Sets Phone
        /// </summary>
        [DataMember(Name = "phone", EmitDefaultValue = false)]
        public string Phone { get; set; }

        /// <summary>
        /// Whether the user is allowed to log in to Enlighten. Values true, false. Default true.
        /// </summary>
        /// <value>Whether the user is allowed to log in to Enlighten. Values true, false. Default true.</value>
        [DataMember(Name = "active", EmitDefaultValue = true)]
        public bool Active { get; set; }

        /// <summary>
        /// Gets or Sets UserId
        /// </summary>
        [DataMember(Name = "user_id", EmitDefaultValue = false)]
        public int UserId { get; set; }

        /// <summary>
        /// What type of user this is in Enlighten. For self installer user user_roles will be [&#39;self_installer&#39;]. For other users user_roles will be empty.
        /// </summary>
        /// <value>What type of user this is in Enlighten. For self installer user user_roles will be [&#39;self_installer&#39;]. For other users user_roles will be empty.</value>
        [DataMember(Name = "user_roles", EmitDefaultValue = false)]
        public List<UserRoleEnum> UserRoles { get; set; }

        /// <summary>
        /// Gets or Sets EnlightenEmails
        /// </summary>
        [DataMember(Name = "enlighten_emails", EmitDefaultValue = true)]
        public bool EnlightenEmails { get; set; }

        /// <summary>
        /// Gets or Sets EnlightenView
        /// </summary>
        [DataMember(Name = "enlighten_view", EmitDefaultValue = false)]
        public string EnlightenView { get; set; }

        /// <summary>
        /// Gets or Sets Uri
        /// </summary>
        [DataMember(Name = "uri", EmitDefaultValue = false)]
        public string Uri { get; set; }

        /// <summary>
        /// Gets or Sets UpdatedAt
        /// </summary>
        [DataMember(Name = "updated_at", EmitDefaultValue = false)]
        public long UpdatedAt { get; set; }

        /// <summary>
        /// Gets or Sets Company
        /// </summary>
        [DataMember(Name = "company", EmitDefaultValue = false)]
        public SystemOwnerCompany Company { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class SystemOwner {\n");
            sb.Append("  FirstName: ").Append(FirstName).Append("\n");
            sb.Append("  LastName: ").Append(LastName).Append("\n");
            sb.Append("  Email: ").Append(Email).Append("\n");
            sb.Append("  Phone: ").Append(Phone).Append("\n");
            sb.Append("  Active: ").Append(Active).Append("\n");
            sb.Append("  UserId: ").Append(UserId).Append("\n");
            sb.Append("  UserRoles: ").Append(UserRoles).Append("\n");
            sb.Append("  EnlightenEmails: ").Append(EnlightenEmails).Append("\n");
            sb.Append("  EnlightenView: ").Append(EnlightenView).Append("\n");
            sb.Append("  Uri: ").Append(Uri).Append("\n");
            sb.Append("  UpdatedAt: ").Append(UpdatedAt).Append("\n");
            sb.Append("  Company: ").Append(Company).Append("\n");
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
            return this.Equals(input as SystemOwner);
        }

        /// <summary>
        /// Returns true if SystemOwner instances are equal
        /// </summary>
        /// <param name="input">Instance of SystemOwner to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(SystemOwner input)
        {
            if (input == null)
            {
                return false;
            }
            return 
                (
                    this.FirstName == input.FirstName ||
                    (this.FirstName != null &&
                    this.FirstName.Equals(input.FirstName))
                ) && 
                (
                    this.LastName == input.LastName ||
                    (this.LastName != null &&
                    this.LastName.Equals(input.LastName))
                ) && 
                (
                    this.Email == input.Email ||
                    (this.Email != null &&
                    this.Email.Equals(input.Email))
                ) && 
                (
                    this.Phone == input.Phone ||
                    (this.Phone != null &&
                    this.Phone.Equals(input.Phone))
                ) && 
                (
                    this.Active == input.Active ||
                    this.Active.Equals(input.Active)
                ) && 
                (
                    this.UserId == input.UserId ||
                    this.UserId.Equals(input.UserId)
                ) && 
                (
                    this.UserRoles == input.UserRoles ||
                    this.UserRoles != null &&
                    input.UserRoles != null &&
                    this.UserRoles.SequenceEqual(input.UserRoles)
                ) && 
                (
                    this.EnlightenEmails == input.EnlightenEmails ||
                    this.EnlightenEmails.Equals(input.EnlightenEmails)
                ) && 
                (
                    this.EnlightenView == input.EnlightenView ||
                    (this.EnlightenView != null &&
                    this.EnlightenView.Equals(input.EnlightenView))
                ) && 
                (
                    this.Uri == input.Uri ||
                    (this.Uri != null &&
                    this.Uri.Equals(input.Uri))
                ) && 
                (
                    this.UpdatedAt == input.UpdatedAt ||
                    this.UpdatedAt.Equals(input.UpdatedAt)
                ) && 
                (
                    this.Company == input.Company ||
                    (this.Company != null &&
                    this.Company.Equals(input.Company))
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
                if (this.FirstName != null)
                {
                    hashCode = (hashCode * 59) + this.FirstName.GetHashCode();
                }
                if (this.LastName != null)
                {
                    hashCode = (hashCode * 59) + this.LastName.GetHashCode();
                }
                if (this.Email != null)
                {
                    hashCode = (hashCode * 59) + this.Email.GetHashCode();
                }
                if (this.Phone != null)
                {
                    hashCode = (hashCode * 59) + this.Phone.GetHashCode();
                }
                hashCode = (hashCode * 59) + this.Active.GetHashCode();
                hashCode = (hashCode * 59) + this.UserId.GetHashCode();
                if (this.UserRoles != null)
                {
                    hashCode = (hashCode * 59) + this.UserRoles.GetHashCode();
                }
                hashCode = (hashCode * 59) + this.EnlightenEmails.GetHashCode();
                if (this.EnlightenView != null)
                {
                    hashCode = (hashCode * 59) + this.EnlightenView.GetHashCode();
                }
                if (this.Uri != null)
                {
                    hashCode = (hashCode * 59) + this.Uri.GetHashCode();
                }
                hashCode = (hashCode * 59) + this.UpdatedAt.GetHashCode();
                if (this.Company != null)
                {
                    hashCode = (hashCode * 59) + this.Company.GetHashCode();
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
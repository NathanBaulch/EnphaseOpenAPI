/**
 * The Enlighten Systems API
 * The Enlighten Systems API is a JSON-based API that provides access to performance data for a PV system. By using the Enlighten Systems API, you agree to the Enphase Energy API License Agreement.  Please note that the Enlighten Systems API does not provide performance data at a panel or microinverter level.
 *
 * The version of the OpenAPI document: 2.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.TheEnlightenSystemsApi);
  }
}(this, function(expect, TheEnlightenSystemsApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new TheEnlightenSystemsApi.InlineResponse2002Systems();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('InlineResponse2002Systems', function() {
    it('should create an instance of InlineResponse2002Systems', function() {
      // uncomment below and update the code to test InlineResponse2002Systems
      //var instane = new TheEnlightenSystemsApi.InlineResponse2002Systems();
      //expect(instance).to.be.a(TheEnlightenSystemsApi.InlineResponse2002Systems);
    });

    it('should have the property systemId (base name: "system_id")', function() {
      // uncomment below and update the code to test the property systemId
      //var instance = new TheEnlightenSystemsApi.InlineResponse2002Systems();
      //expect(instance).to.be();
    });

    it('should have the property systemName (base name: "system_name")', function() {
      // uncomment below and update the code to test the property systemName
      //var instance = new TheEnlightenSystemsApi.InlineResponse2002Systems();
      //expect(instance).to.be();
    });

    it('should have the property systemPublicName (base name: "system_public_name")', function() {
      // uncomment below and update the code to test the property systemPublicName
      //var instance = new TheEnlightenSystemsApi.InlineResponse2002Systems();
      //expect(instance).to.be();
    });

    it('should have the property reference (base name: "reference")', function() {
      // uncomment below and update the code to test the property reference
      //var instance = new TheEnlightenSystemsApi.InlineResponse2002Systems();
      //expect(instance).to.be();
    });

    it('should have the property otherReferences (base name: "other_references")', function() {
      // uncomment below and update the code to test the property otherReferences
      //var instance = new TheEnlightenSystemsApi.InlineResponse2002Systems();
      //expect(instance).to.be();
    });

    it('should have the property country (base name: "country")', function() {
      // uncomment below and update the code to test the property country
      //var instance = new TheEnlightenSystemsApi.InlineResponse2002Systems();
      //expect(instance).to.be();
    });

    it('should have the property state (base name: "state")', function() {
      // uncomment below and update the code to test the property state
      //var instance = new TheEnlightenSystemsApi.InlineResponse2002Systems();
      //expect(instance).to.be();
    });

    it('should have the property city (base name: "city")', function() {
      // uncomment below and update the code to test the property city
      //var instance = new TheEnlightenSystemsApi.InlineResponse2002Systems();
      //expect(instance).to.be();
    });

    it('should have the property postalCode (base name: "postal_code")', function() {
      // uncomment below and update the code to test the property postalCode
      //var instance = new TheEnlightenSystemsApi.InlineResponse2002Systems();
      //expect(instance).to.be();
    });

    it('should have the property timezone (base name: "timezone")', function() {
      // uncomment below and update the code to test the property timezone
      //var instance = new TheEnlightenSystemsApi.InlineResponse2002Systems();
      //expect(instance).to.be();
    });

    it('should have the property connectionType (base name: "connection_type")', function() {
      // uncomment below and update the code to test the property connectionType
      //var instance = new TheEnlightenSystemsApi.InlineResponse2002Systems();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instance = new TheEnlightenSystemsApi.InlineResponse2002Systems();
      //expect(instance).to.be();
    });

    it('should have the property meta (base name: "meta")', function() {
      // uncomment below and update the code to test the property meta
      //var instance = new TheEnlightenSystemsApi.InlineResponse2002Systems();
      //expect(instance).to.be();
    });

  });

}));

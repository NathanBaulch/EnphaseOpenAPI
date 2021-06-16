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
    instance = new TheEnlightenSystemsApi.Meta();
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

  describe('Meta', function() {
    it('should create an instance of Meta', function() {
      // uncomment below and update the code to test Meta
      //var instane = new TheEnlightenSystemsApi.Meta();
      //expect(instance).to.be.a(TheEnlightenSystemsApi.Meta);
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instance = new TheEnlightenSystemsApi.Meta();
      //expect(instance).to.be();
    });

    it('should have the property lastReportAt (base name: "last_report_at")', function() {
      // uncomment below and update the code to test the property lastReportAt
      //var instance = new TheEnlightenSystemsApi.Meta();
      //expect(instance).to.be();
    });

    it('should have the property lastEnergyAt (base name: "last_energy_at")', function() {
      // uncomment below and update the code to test the property lastEnergyAt
      //var instance = new TheEnlightenSystemsApi.Meta();
      //expect(instance).to.be();
    });

    it('should have the property operationalAt (base name: "operational_at")', function() {
      // uncomment below and update the code to test the property operationalAt
      //var instance = new TheEnlightenSystemsApi.Meta();
      //expect(instance).to.be();
    });

  });

}));

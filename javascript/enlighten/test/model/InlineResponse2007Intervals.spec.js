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
    instance = new TheEnlightenSystemsApi.InlineResponse2007Intervals();
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

  describe('InlineResponse2007Intervals', function() {
    it('should create an instance of InlineResponse2007Intervals', function() {
      // uncomment below and update the code to test InlineResponse2007Intervals
      //var instane = new TheEnlightenSystemsApi.InlineResponse2007Intervals();
      //expect(instance).to.be.a(TheEnlightenSystemsApi.InlineResponse2007Intervals);
    });

    it('should have the property endAt (base name: "end_at")', function() {
      // uncomment below and update the code to test the property endAt
      //var instance = new TheEnlightenSystemsApi.InlineResponse2007Intervals();
      //expect(instance).to.be();
    });

    it('should have the property whDel (base name: "wh_del")', function() {
      // uncomment below and update the code to test the property whDel
      //var instance = new TheEnlightenSystemsApi.InlineResponse2007Intervals();
      //expect(instance).to.be();
    });

    it('should have the property devicesReporting (base name: "devices_reporting")', function() {
      // uncomment below and update the code to test the property devicesReporting
      //var instance = new TheEnlightenSystemsApi.InlineResponse2007Intervals();
      //expect(instance).to.be();
    });

  });

}));

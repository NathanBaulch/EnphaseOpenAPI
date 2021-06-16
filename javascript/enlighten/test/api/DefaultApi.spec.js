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
    instance = new TheEnlightenSystemsApi.DefaultApi();
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

  describe('DefaultApi', function() {
    describe('consumptionLifetime', function() {
      it('should call consumptionLifetime successfully', function(done) {
        //uncomment below and update the code to test consumptionLifetime
        //instance.consumptionLifetime(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('consumptionStats', function() {
      it('should call consumptionStats successfully', function(done) {
        //uncomment below and update the code to test consumptionStats
        //instance.consumptionStats(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('energyLifetime', function() {
      it('should call energyLifetime successfully', function(done) {
        //uncomment below and update the code to test energyLifetime
        //instance.energyLifetime(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('envoys', function() {
      it('should call envoys successfully', function(done) {
        //uncomment below and update the code to test envoys
        //instance.envoys(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('inventory', function() {
      it('should call inventory successfully', function(done) {
        //uncomment below and update the code to test inventory
        //instance.inventory(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('invertersSummaryByEnvoyOrSite', function() {
      it('should call invertersSummaryByEnvoyOrSite successfully', function(done) {
        //uncomment below and update the code to test invertersSummaryByEnvoyOrSite
        //instance.invertersSummaryByEnvoyOrSite(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('monthlyProduction', function() {
      it('should call monthlyProduction successfully', function(done) {
        //uncomment below and update the code to test monthlyProduction
        //instance.monthlyProduction(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('productionMeterReadings', function() {
      it('should call productionMeterReadings successfully', function(done) {
        //uncomment below and update the code to test productionMeterReadings
        //instance.productionMeterReadings(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('rgmStats', function() {
      it('should call rgmStats successfully', function(done) {
        //uncomment below and update the code to test rgmStats
        //instance.rgmStats(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('searchSystemId', function() {
      it('should call searchSystemId successfully', function(done) {
        //uncomment below and update the code to test searchSystemId
        //instance.searchSystemId(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('stats', function() {
      it('should call stats successfully', function(done) {
        //uncomment below and update the code to test stats
        //instance.stats(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('summary', function() {
      it('should call summary successfully', function(done) {
        //uncomment below and update the code to test summary
        //instance.summary(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('systems', function() {
      it('should call systems successfully', function(done) {
        //uncomment below and update the code to test systems
        //instance.systems(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));

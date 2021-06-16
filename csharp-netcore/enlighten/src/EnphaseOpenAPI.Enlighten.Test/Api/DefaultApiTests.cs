/*
 * The Enlighten Systems API
 *
 * The Enlighten Systems API is a JSON-based API that provides access to performance data for a PV system. By using the Enlighten Systems API, you agree to the Enphase Energy API License Agreement.  Please note that the Enlighten Systems API does not provide performance data at a panel or microinverter level.
 *
 * The version of the OpenAPI document: 2.0
 * Generated by: https://github.com/openapitools/openapi-generator.git
 */

using System;
using System.IO;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Linq;
using System.Reflection;
using RestSharp;
using Xunit;

using EnphaseOpenAPI.Enlighten.Client;
using EnphaseOpenAPI.Enlighten.Api;
// uncomment below to import models
//using EnphaseOpenAPI.Enlighten.Model;

namespace EnphaseOpenAPI.Enlighten.Test.Api
{
    /// <summary>
    ///  Class for testing DefaultApi
    /// </summary>
    /// <remarks>
    /// This file is automatically generated by OpenAPI Generator (https://openapi-generator.tech).
    /// Please update the test case below to test the API endpoint.
    /// </remarks>
    public class DefaultApiTests : IDisposable
    {
        private DefaultApi instance;

        public DefaultApiTests()
        {
            instance = new DefaultApi();
        }

        public void Dispose()
        {
            // Cleanup when everything is done.
        }

        /// <summary>
        /// Test an instance of DefaultApi
        /// </summary>
        [Fact]
        public void InstanceTest()
        {
            // TODO uncomment below to test 'IsType' DefaultApi
            //Assert.IsType<DefaultApi>(instance);
        }

        /// <summary>
        /// Test ConsumptionLifetime
        /// </summary>
        [Fact]
        public void ConsumptionLifetimeTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //string userId = null;
            //int systemId = null;
            //DateTime? startDate = null;
            //DateTime? endDate = null;
            //var response = instance.ConsumptionLifetime(userId, systemId, startDate, endDate);
            //Assert.IsType<InlineResponse2009>(response);
        }

        /// <summary>
        /// Test ConsumptionStats
        /// </summary>
        [Fact]
        public void ConsumptionStatsTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //string userId = null;
            //int systemId = null;
            //int? startAt = null;
            //int? endAt = null;
            //var response = instance.ConsumptionStats(userId, systemId, startAt, endAt);
            //Assert.IsType<InlineResponse20010>(response);
        }

        /// <summary>
        /// Test EnergyLifetime
        /// </summary>
        [Fact]
        public void EnergyLifetimeTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //string userId = null;
            //int systemId = null;
            //DateTime? startDate = null;
            //DateTime? endDate = null;
            //string production = null;
            //var response = instance.EnergyLifetime(userId, systemId, startDate, endDate, production);
            //Assert.IsType<InlineResponse200>(response);
        }

        /// <summary>
        /// Test Envoys
        /// </summary>
        [Fact]
        public void EnvoysTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //string userId = null;
            //int systemId = null;
            //var response = instance.Envoys(userId, systemId);
            //Assert.IsType<InlineResponse2001>(response);
        }

        /// <summary>
        /// Test Inventory
        /// </summary>
        [Fact]
        public void InventoryTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //string userId = null;
            //int systemId = null;
            //var response = instance.Inventory(userId, systemId);
            //Assert.IsType<InlineResponse2003>(response);
        }

        /// <summary>
        /// Test InvertersSummaryByEnvoyOrSite
        /// </summary>
        [Fact]
        public void InvertersSummaryByEnvoyOrSiteTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //string userId = null;
            //int siteId = null;
            //var response = instance.InvertersSummaryByEnvoyOrSite(userId, siteId);
            //Assert.IsType<InlineResponse2004>(response);
        }

        /// <summary>
        /// Test MonthlyProduction
        /// </summary>
        [Fact]
        public void MonthlyProductionTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //string userId = null;
            //int systemId = null;
            //DateTime? startDate = null;
            //var response = instance.MonthlyProduction(userId, systemId, startDate);
            //Assert.IsType<InlineResponse2005>(response);
        }

        /// <summary>
        /// Test ProductionMeterReadings
        /// </summary>
        [Fact]
        public void ProductionMeterReadingsTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //string userId = null;
            //int systemId = null;
            //int? endAt = null;
            //var response = instance.ProductionMeterReadings(userId, systemId, endAt);
            //Assert.IsType<InlineResponse2006>(response);
        }

        /// <summary>
        /// Test RgmStats
        /// </summary>
        [Fact]
        public void RgmStatsTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //string userId = null;
            //int systemId = null;
            //int? startAt = null;
            //int? endAt = null;
            //var response = instance.RgmStats(userId, systemId, startAt, endAt);
            //Assert.IsType<InlineResponse2007>(response);
        }

        /// <summary>
        /// Test SearchSystemId
        /// </summary>
        [Fact]
        public void SearchSystemIdTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //string userId = null;
            //string serialNum = null;
            //var response = instance.SearchSystemId(userId, serialNum);
            //Assert.IsType<InlineResponse20012>(response);
        }

        /// <summary>
        /// Test Stats
        /// </summary>
        [Fact]
        public void StatsTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //string userId = null;
            //int systemId = null;
            //int? startAt = null;
            //int? endAt = null;
            //var response = instance.Stats(userId, systemId, startAt, endAt);
            //Assert.IsType<InlineResponse2008>(response);
        }

        /// <summary>
        /// Test Summary
        /// </summary>
        [Fact]
        public void SummaryTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //string userId = null;
            //int systemId = null;
            //DateTime? summaryDate = null;
            //var response = instance.Summary(userId, systemId, summaryDate);
            //Assert.IsType<InlineResponse20011>(response);
        }

        /// <summary>
        /// Test Systems
        /// </summary>
        [Fact]
        public void SystemsTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //string userId = null;
            //string next = null;
            //int? limit = null;
            //int? systemId = null;
            //List<int> systemId2 = null;
            //string systemName = null;
            //List<string> systemName2 = null;
            //Status? status = null;
            //List<Status> status2 = null;
            //string reference = null;
            //List<string> reference2 = null;
            //string installer = null;
            //List<string> installer2 = null;
            //ConnectionType? connectionType = null;
            //List<ConnectionType> connectionType2 = null;
            //var response = instance.Systems(userId, next, limit, systemId, systemId2, systemName, systemName2, status, status2, reference, reference2, installer, installer2, connectionType, connectionType2);
            //Assert.IsType<InlineResponse2002>(response);
        }
    }
}

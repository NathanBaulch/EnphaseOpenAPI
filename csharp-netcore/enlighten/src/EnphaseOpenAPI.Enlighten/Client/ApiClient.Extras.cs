using System;
using System.Collections.Generic;
using System.Threading;
using RestSharp;

namespace EnphaseOpenAPI.Enlighten.Client
{
    public partial class ApiClient
    {
        private bool _debug;
        private int _rateLimitQuantity;
        private long _rateLimitPeriod;
        private Queue<long> _rateLimitSlots;

        /// <summary>
        /// Enable simple debug output.
        /// </summary>
        public void Debug()
        {
            _debug = true;
        }

        /// <summary>
        /// Apply a simple sliding window rate limit.
        /// </summary>
        public void RateLimit(int quantity, TimeSpan period)
        {
            _rateLimitQuantity = quantity;
            _rateLimitPeriod = period.Ticks;
            _rateLimitSlots = new Queue<long>();
        }

        partial void InterceptRequest(IRestRequest request)
        {
            if (_debug)
            {
                Console.WriteLine($"{request.Method} {new RestClient(_baseUrl).BuildUri(request)}");
            }

            if (_rateLimitQuantity == 0)
            {
                return;
            }

            var now = DateTime.Now.Ticks;

            if (_rateLimitSlots.Count == _rateLimitQuantity)
            {
                var wait = _rateLimitSlots.Peek() - now;
                if (wait > 0)
                {
                    Thread.Sleep(TimeSpan.FromTicks(wait));
                    now += wait;
                }

                _rateLimitSlots.Dequeue();
            }

            _rateLimitSlots.Enqueue(now + _rateLimitPeriod);
        }
    }
}
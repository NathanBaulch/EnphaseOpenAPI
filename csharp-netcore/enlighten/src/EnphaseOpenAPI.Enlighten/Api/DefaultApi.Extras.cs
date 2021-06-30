using System;
using EnphaseOpenAPI.Enlighten.Client;

namespace EnphaseOpenAPI.Enlighten.Api
{
    public partial class DefaultApi
    {
        public void Debug()
        {
            ((ApiClient) Client).Debug();
            ((ApiClient) AsynchronousClient).Debug();
        }

        public void RateLimit(int quantity, TimeSpan period)
        {
            ((ApiClient) Client).RateLimit(quantity, period);
            ((ApiClient) AsynchronousClient).RateLimit(quantity, period);
        }
    }
}
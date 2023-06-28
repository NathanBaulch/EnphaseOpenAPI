package monitoring

import (
	"net/http"
	"time"
)

func (c *Configuration) RateLimit(qty int, period time.Duration) {
	if c.HTTPClient == nil {
		c.HTTPClient = http.DefaultClient
	}
	t := c.HTTPClient.Transport
	if t == nil {
		t = http.DefaultTransport
	}
	c.HTTPClient.Transport = &rateLimitTransport{RoundTripper: t, qty: qty, period: int64(period)}
}

type rateLimitTransport struct {
	http.RoundTripper
	qty    int
	period int64
	slots  []int64
}

func (t *rateLimitTransport) RoundTrip(req *http.Request) (*http.Response, error) {
	if t.qty > 0 {
		now := time.Now().UnixNano()
		if len(t.slots) == t.qty {
			var wait = t.slots[0] - now
			if wait > 0 {
				time.Sleep(time.Duration(wait))
				now += wait
			}
			t.slots = t.slots[1:]
		}
		t.slots = append(t.slots, now+t.period)
	}
	return t.RoundTripper.RoundTrip(req)
}

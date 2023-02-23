The idea of WebSockets was borne out of the limitations of HTTP-based technology. 
With HTTP, a client requests a resource, and the server responds with the requested data. 
HTTP is a strictly unidirectional protocol — any data sent from the server to the client must be first requested by the client. 
Long-polling has traditionally acted as a workaround for this limitation. 
With long-polling, a client makes an HTTP request with a long timeout period, and the server uses that long timeout to push data to the client. 
Long-polling works, but comes with a drawback — resources on the server are tied up throughout 
the length of the long-poll, even when no data is available to send.


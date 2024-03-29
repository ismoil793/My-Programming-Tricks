The idea of WebSockets was born out of the limitations of HTTP-based technology. 
With HTTP, a client requests a resource, and the server responds with the requested data. 
HTTP is a strictly unidirectional protocol — any data sent from the server to the client must be first requested by the client. 

**Long-polling** has traditionally acted as a workaround for this limitation. 
With long-polling, a client makes an HTTP request with a long timeout period, and the server uses that long timeout to push data to the client. 
Long-polling works, but comes with a drawback — resources on the server are tied up throughout 
the length of the long-poll, even when no data is available to send.

WebSockets, on the other hand, allow for sending message-based data, similar to UDP, but with the reliability of TCP. 
WebSocket uses HTTP as the initial transport mechanism, but keeps the TCP connection alive 
after the HTTP response is received so that it can be used for sending messages between client and server. 
WebSockets allow us to build “real-time” applications without the use of long-polling.

We can use built-in functionality of JS to interact with WS, or we can use libraries as Socket.IO
WebSocket is a technology that enables two-way realtime communication between client and server. 
In contrast, Socket.IO is a library that provides an abstraction layer on top of WebSockets, making it easier to create realtime applications.

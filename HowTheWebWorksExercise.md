# How The Web Works Exercise
1. What is HTTP?  
`HTTP` is HyperText Transfer Protocol, is a client-server protocol that allows a client to get/set data on the server. It is how information can be transmitted and is the underlying protocol used by the web.

2. What is a URL?  
A `URL` (Uniform Resource Locator) is an address of a given unique resource on the web.

3. What is TCP?  
`TCP` (Transmission Control Protocol) is one of the main protocols of the Internet protocol suite and it manages sending and receiving of packets.

4. What is IP?  
`IP` (Internet Protocol) is the protocol that governs how data is sent across a network.

5. What is DNS?  
`DNS` (Domain Name System) is a server that takes a domain name and returns an IP address as output. (Like a phonebook to locate resource)

6. What is idempotent?  
Idempotent means an operation/process that can be repeated and produces the same result each time.

7. What is a query string?  
A query string is a list of keys and values (full collection of parameters, in a URL it is after the `?` which indeicates a parameter and before the `#` which indicates an anchor, with a pattern of `key`=`value`).

8. What is a path or route?  
A path or route is the location to the resource on the web server. In a URL, this is the portion after the domain name `/` and before a possible `?` for a query string.

9. List four HTTP Verbs and their use cases.  
	- `GET` : gets data from the server
	- `POST` : creates or modifies data on the server
	- `PUT` : replaces or updates data on the server
	- `PATCH` : also used to modify data on the server
	- `DELETE` : deletes data from the server

10. What is a client?  
A client is the party that is requesting a service.

11. What is a server?  
A server is the party that provides a resource.

12. What is an HTTP request?  
An HTTP request is specifying the URL we are wanting to make a GET request to.

13. What is an HTTP response?  
An HTTP response is the HTML page sent back to the client from the server which includes a status code and response body.

14. What is an HTTP header? Give a couple examples of request and response headers you have seen.  
An HTTP header is additional meta-information about the request and response, separate from context. Headers can include information about the client browser, the server, data types that are ok, caching information, cookies, and more.

15. What is REST?  
REST (REpresentational State Transfer) is a style of development whose aim is to provide a framework for creating fast, scaleable and reliable APIs.

16. What is JSON?  
JSON (JavaScript Object Notation) is a format that uses readable text to transmit data objects with key-value pairs and array data. It's a replacement for older XML in some AJAX-style systems. 

17. What happens when you type in "Hello World" in google.com and press enter?  
When you type in "Hello World" in `google.com` and press enter, a DNS server looks up the IP address, the browser sends an HTTP GET request, the server receives the request, server sends back an HTTP response message, your browser then creates the Document Object Model, and then asks the server for images/scripts/CSS through additional GET requests.

18. What does it mean when we say the web is "stateless"?  
It means that the web does not keep track of configuration settings, transaction info, or any other data for the next session. HTTP is stateless. Connections are closed when the web page is delivered to the client. Cookies have been developed to maintain state on a site.

19. What is curl?  
`curl` is a command line tool that allows us to make HTTP requests from the terminal. 

20. Make a GET request to http://omdbapi.com?t=titanic using curl (your answer should be the curl command required).  
`curl -v http://omdbapi.com?t=titanic` => 

> * Rebuilt URL to: http://omdbapi.com/?t=titanic 
> *   Trying 104.27.50.115...
> * TCP_NODELAY set
> * Connected to omdbapi.com (104.27.50.115) port 80 (#0)
> GET /?t=titanic HTTP/1.1
> Host: omdbapi.com
> User-Agent: curl/7.51.0
> Accept: */*
> 
< HTTP/1.1 200 OK  
< Date: Sat, 06 May 2017 01:12:56 GMT  
< Content-Type: application/json; charset=utf-8  
< Content-Length: 1007  
< Connection: close  
< Set-Cookie: __cfduid=d32af5af06705f5c80dc298c586897c8f1494033176; expires=Sun, 06-May-18 01:12:56 GMT; path=/; domain=.omdbapi.com; HttpOnly
< Cache-Control: public, max-age=3600  
< Expires: Sat, 06 May 2017 02:12:56 GMT  
< Last-Modified: Sat, 06 May 2017 01:12:56 GMT  
< Vary: *  
< X-AspNet-Version: 4.0.30319  
< X-Powered-By: ASP.NET  
< Access-Control-Allow-Origin: *  
< Server: cloudflare-nginx  
< CF-RAY: 35a812f666ec11c5-SJC  
<   
* Curl_http_done: called premature == 0  
* Closing connection 0  
{"Title":"Titanic","Year":"1997","Rated":"PG-13","Released":"19 Dec 1997","Runtime":"194 min","Genre":"Drama, Romance","Director":"James Cameron","Writer":"James Cameron","Actors":"Leonardo DiCaprio, Kate Winslet, Billy Zane, Kathy Bates","Plot":"A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic.","Language":"English, Swedish","Country":"USA","Awards":"Won 11 Oscars. Another 110 wins & 74 nominations.","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BMDdmZGU3NDQtY2E5My00ZTliLWIzOTUtMTY4ZGI1YjdiNjk3XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"7.7/10"},{"Source":"Rotten Tomatoes","Value":"88%"},{"Source":"Metacritic","Value":"74/100"}],"Metascore":"74","imdbRating":"7.7","imdbVotes":"838,917","imdbID":"tt0120338","Type":"movie","DVD":"10 Sep 2012","BoxOffice":"N/A","Production":"Paramount Pictures","Website":"h

const http = require('http');
const hostname = 'localhost';
const port = 3000;
const fs = require('fs');
const url = require('url');

let router = require('./router');
let requestHandlers = require('./requestHandlers');
var handle = {};
var route = router.route;

// connect a function of associate Pathname
handle['/'] = requestHandlers.start;
handle['/start'] = requestHandlers.start;
handle['/upload'] = requestHandlers.upload;
handle['/show'] = requestHandlers.show;


function start() {
	function onRequest(req,res) {
	    var pathname = url.parse(req.url).pathname;
		console.log("PATHNAME in server.js : "  + pathname);
	    var postData = "";
		console.log("onRequest() " + pathname + " received");
		route(handle, pathname, res, req);
	}

	http.createServer(onRequest).listen(`${port}`);
	console.log(`Server Started : ${hostname}:${port}`);
	
}

exports.start = start;

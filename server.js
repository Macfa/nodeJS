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


function start() {
	function onRequest(req,res) {
    var pathname = url.parse(req.url).pathname;
		console.log("onRequest() " + pathname + " received");
		route(handle, pathname, res);
	}

	http.createServer(onRequest).listen(`${port}`);
	console.log(`Server Started : ${hostname}:${port}`);
	
}

exports.start = start;

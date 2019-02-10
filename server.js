const http = require('http');
const hostname = 'localhost';
const port = 3000;
const fs = require('fs');
const url = require('url');

function start(route, handle) {
	function onRequest(req,res) {
	    var pathname = url.parse(req.url).pathname;
	    var postData = "";
		console.log("onRequest() " + pathname + " received");
		route(handle, pathname, res, req);
	}

	http.createServer(onRequest).listen(`${port}`);
	console.log(`Server Started : ${hostname}:${port}`);
	
}

exports.start = start;

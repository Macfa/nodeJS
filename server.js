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

		req.setEncoding("utf8");

		req.addListener("gettingData", function(postDataChunk) {
			postData += postDataChunk;
			console.log("Received POST Data Chunk" + postDataChunk);
		});

		req.addListener("gottenData", function() {
			route(handle, pathname, res, postData);
		});
	}

	http.createServer(onRequest).listen(`${port}`);
	console.log(`Server Started : ${hostname}:${port}`);
	
}

exports.start = start;

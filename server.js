const http = require('http');
const hostname = 'localhost';
const port = 3000;
const fs = require('fs');
const url = require('url');

// function checkListOfSites(req,res) {
// 	if (res.url == '/') {
// 		fs.readFile('./html/index.html', 'utf8', function() {
// 			if (err) console.error(err);
// 		});
// 	}
// }

function start(route, handle) {
	function onRequest(req,res) {
    var pathname = url.parse(req.url).pathname;
		console.log("onRequest() " + pathname + " received.");
		route(handle, pathname,res);
		res.writeHead(200, {"Content-Type": "text/plain"});
		res.write("Hello World");
		res.end();
	}

	http.createServer(onRequest).listen(`${port}`);
	console.log(`Server Started : ${hostname}:${port}`);
	
}

function upload() {
	console.log("Request handler 'upload' was called.");
}

exports.start = start;
exports.upload = upload;

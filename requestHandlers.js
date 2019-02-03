var exec = require("child_process").exec;
var fs = require('fs');


function start(res) {
  console.log("Request handler 'start' was called.");
  var body = fs.readFileSync('./html/index.html', 'utf8');
	res.writeHead(200, {"Content-Type": "text/html"});
	res.write(body);
	console.log(body);
	res.end();
}

function upload(res) {
	console.log("Request handler 'upload' was called.");
	res.writeHead(200, {"Content-Type": "text/plain"});
	res.write("Hello Upload");
	res.end();
}

exports.start = start;
exports.upload = upload;
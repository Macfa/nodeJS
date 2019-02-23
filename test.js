var http = require('http');
var fs = require('fs');
var url = require('url');
var path = require('path');

var server = http.createServer(function(request, response) {
var pathname = url.parse(request.url).pathname;
var ext = path.extname(pathname);
console.log("ext : " + ext);
	if(ext){
		if(ext === '.css'){
			response.writeHead(200, {'Content-Type': 'text/css'});
		}
		else if(ext === '.js'){
			response.writeHead(200, {'Content-Type': 'text/javascript'});
		}
		response.write(fs.readFileSync(__dirname + pathname, 'utf8'));
	}
	else{
		  response.writeHead(200, {'Content-Type': 'text/html'});
		   response.write(fs.readFileSync('test.html', 'utf8'));
	}
response.end();
}).listen(3000);

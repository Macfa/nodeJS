const querystring = require('querystring');

function start(res) {
  console.log("Request handler 'start' was called.");
  var body = fs.readFileSync('./html/index.html', 'utf8');
	res.writeHead(200, {"Content-Type": "text/html"});
	res.write(body);
	console.log(body);
	res.end();
}

function upload(res,postData) {
	console.log("Request handler 'upload' was called.");
	res.writeHead(200, {"Content-Type": "text/plain"});
	res.write("You've sent : " + postData);
	// res.write("You've sent : " + querystring.parse(postData).text);
	res.end();
}

exports.start = start;
exports.upload = upload;
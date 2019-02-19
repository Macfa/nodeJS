var fs = require('fs');

function css(path, res) {
    var css = fs.readFileSync("./html/css/index.css");
	console.log("use css module in comm-inc file");
	if(css) {
		res.writeHead(200, {"Content-Type":"text/css"});
		res.write(css);
	}
	console.log("css : " + css );
}

exports.css = css;

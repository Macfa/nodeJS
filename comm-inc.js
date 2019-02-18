var fs = require('fs');

function css(path, res) {
    fs.readFile("./html/css/index.css", function(err,data) {
		if (err) {
			res.writeHead(404, {"Content-Type" : "text/css"});
			console.log("caanot import css file");
		} else {
			res.writeHead(200, {"Content-Type":"text/css"});
			res.write(data);	
		}
	});
}

exports.css = css;

var fs = require('fs');
var querystring = require('querystring');
var formidable = require('formidable');
var asset = require('./asset');


function start(res, pathname) {
	console.log("Request handler 'start' was called.");
	var body = fs.readFileSync('./html/index.html', 'utf8');
	res.writeHead(200, {"Content-Type": "text/html"});
	res.write(body);
	console.log(body);
	console.log("res : " + res);
	res.end();
}

function upload(res, req, pathname) {
  console.log("Request handler 'upload' was called.");

  console.dir(req.headers);
  var form = new formidable.IncomingForm();
  form.parse(req , function(error, fields, files) {
	console.log(files);
    console.log("parsing done");
    fs.renameSync(files.upload.path, "upload");
    res.writeHead(200, {"Content-Type": "text/html"});
    res.write("received image:<br/>");
    res.write("<img src='/show' />");
    res.end();
  });
  console.log("starting parse...");
}

function show(res, pathname) {
  console.log("Request handler 'show' was called.");
  fs.readFile('upload', "binary", function(error, file) {
    if(error) {
      res.writeHead(500, {"Content-Type": "text/plain"});
      res.write("ERROR : " + error + "\n");
      res.end();
    } else {
      res.writeHead(200, {"Content-Type": "image/png"});
      res.write(file, "binary");
      res.end();
    }
  });
}


exports.start = start;
exports.upload = upload;
exports.show = show;

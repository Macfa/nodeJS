const url = require('url');
const asset = require('./asset');
const path = require('path');

function route(handle, pathname, res, req) {
  var ext = path.extname(pathname);
  console.log("PATHNAME : " + pathname);

  if(ext == '.css' | ext == '.js') {
    asset.render(pathname, res, ext);
  } else if (typeof handle[pathname] === 'function') {
    handle[pathname](res,req, pathname);
  } else {
    console.log("No request handler found for " + pathname);
	res.writeHead(404, {"Content-Type": "text/plain"});
    res.write("404 Not found");
    res.end();
  }
}

exports.route = route;

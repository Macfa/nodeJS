const fs = require('fs');

function render(pathname, res, ext) {

  if (ext == '.css') {
    res.writeHead(200, {"Content-Type":"text/css"});
  } else if (ext == '.js') {
    res.writeHead(200, {"Content-Type":"text/javascript"});
  }
  res.write(fs.readFileSync(__dirname + pathname, 'utf8'));
  res.end();
}

exports.render = render;

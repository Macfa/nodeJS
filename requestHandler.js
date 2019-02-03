function start(res) {
  console.log("Request handler 'start' was called.");
}

function upload(res) {
  console.log("Request handler 'upload' was called.");
}

exports.start = start();
exports.upload = upload();

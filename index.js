const hostname = 'localhost';
const port = 3000;
const fs = require('fs');
const assert = require('assert').strict;

let server = require('./server');
let router = require('./router');
let requestHandlers = require('./requestHandlers');

var handle = {};

// connect a function of associate Pathname
handle['/'] = requestHandlers.start;
handle['/start'] = requestHandlers.start;
handle['/upload'] = requestHandlers.upload;
handle['/show'] = requestHandlers.show;


server.start();



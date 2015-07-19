
var app = require('../app');
var debug = require('debug')('WaitCafeApi:server');
var http = require('http');

var server = http.createServer(app);

var port = process.env.PORT || 7777;

server.listen(port);
console.log('Express server listening on port %d', server.address().port);

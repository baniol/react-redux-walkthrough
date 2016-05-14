var http = require('http');

var data = require('./employeeData');
http.createServer(function(req, res) {
  res.setHeader('content-type', 'application/json');
  res.setHeader('Access-Control-Allow-Origin', '*');
  // setTimeout(function () {
    res.end(JSON.stringify(data));
  // }, 1000);
}).listen(3001);

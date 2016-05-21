var express = require('express');
var router = express.Router();
var employeeData = require('../employeeData');

var fs = require('fs');

router.get('/', function(req, res, next) {
  res.send('ok');
});

router.get('/employees', function(req, res, next) {
  setTimeout(function () {
    res.json(employeeData);
  }, 1500);
});

module.exports = router;

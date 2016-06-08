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

router.get('/positions', function(req, res, next) {
  var defaultPositions = ['Software Architect', 'Web Developer', 'Java Developer', 'Project Manager'];
  setTimeout(function () {
    res.json(defaultPositions);
  }, 800);
});

module.exports = router;

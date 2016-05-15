var express = require('express');
var router = express.Router();
var employeeData = require('../employeeData');

var fs = require('fs');

router.get('/', function(req, res, next) {
  res.send('ok');
});

router.get('/employees', function(req, res, next) {
  res.json(employeeData);
});

function getLastId() {
  return parseInt(employeeData.slice(-1)[0].id, 10) + 1;
}

router.put('/employee', function(req, res, next) {
  var errors = {};
  if (! req.body.name || req.body.name === '') {
    errors.name = 'Specify name';
  }
  if (!req.body.position || req.body.position === '-choose position-') {
    errors.position = 'Choose position';
  }
  if (errors.name || errors.position) {
    errors._error = 'Add Employee Error';
    setTimeout(function () {
      res.json({status: 400, data: null, errors: errors});
    }, 1000);
    return;
  }
  var newEmployee = {
		"id": getLastId(),
		"name": req.body.name,
		"position": req.body.position
	};
  employeeData.push(newEmployee);
  setTimeout(function () {
    res.json({status: 200, data: newEmployee, errors: null});
  }, 1500);
});

module.exports = router;

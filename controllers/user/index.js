var express = require('express');
var router = express.Router();

var Test = require('./test');
var Create = require('./create');

router.route('/user')
  .get(Test)
  .post(Create);



module.exports = router;
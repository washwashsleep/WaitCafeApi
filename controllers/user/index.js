var express = require('express');
var router = express.Router();

var Test = require('./test');

router.route('/user')
  .get(Test);



module.exports = router;
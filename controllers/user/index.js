var express = require('express');
var router = express.Router();

var Test = require('./test');
var Create = require('./create');

var noop = function(req, res, next) {
    res.status(200).send();
};

router.route('/user')
    .get(Test)
    .post(Create);



module.exports = router;
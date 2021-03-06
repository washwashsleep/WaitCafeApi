var express = require('express');
var router = express.Router();

var Test = require('./test');
var Create = require('./create');
var Login = require('./login');

var noop = function(req, res, next) {
    res.status(200).send();
};

router.route('/user')
    .get(Test)
    .post(Create);

router.route('/user/login')
    .post(Login);



module.exports = router;
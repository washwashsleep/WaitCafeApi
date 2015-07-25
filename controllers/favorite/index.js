
var express = require('express');
var router = express.Router();

var Recommend = require('./recommend');
// var Create = require('./create');
// var Login = require('./login');

var noop = function(req, res, next) {
    res.status(200).send();
};

router.route('/favorite/recommend')
    .get(Recommend);
//     .post(Create);




module.exports = router;
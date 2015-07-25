

var express = require('express');
var router = express.Router();

// var Recommend = require('./recommend');
var Create = require('./create');
var Update = require('./update');
// var List = require('./list');

var noop = function(req, res, next) {
    res.status(200).send();
};

router.route('/activity')
    .post(Create);

router.route('/activity/:activityId')
    .put(Update);

// router.route('/favorite/recommend')
//     .get(Recommend);
//     .post(Create);




module.exports = router;
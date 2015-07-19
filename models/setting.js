
var mongoose = require('mongoose');
var _Promise = require('bluebird');

mongoose.connect(Config.db.url);
console.log('Mongodb connect to : ' + Config.db.url);

_Promise.promisifyAll(mongoose);
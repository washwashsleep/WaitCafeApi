
var sha1 = require('sha1');

let KEY = '.washwashsleep';

module.exports = function(pwd) {

    var hashPwd = sha1(pwd + KEY);

    return hashPwd;
};
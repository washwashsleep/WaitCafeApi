var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var cors = require('cors');
var morgan = require('morgan');
// var session = require('cookie-session');
// var session = require('express-session');

var apiBinding = require('./apiBinding');

module.exports = function(app) {

    /*
     * 一些套件的設定
     */
    app.use(morgan('dev'));
    app.use(cors());
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(cookieParser());

    // app.use(cookieSession({
    //   name: 'session',
    //   keys: ['key1', 'key2']
    // }));

    // app.use(session({
    //   secret: 'keyboard cat',
    //   cookie: {}
    // }));

    // app.use(session({
    //   secret: 'keyboard cat',
    //   key: 'sid',
    //   cookie: { secure: false }
    // }));

    /*
     * 加入一個新的 res method，叫做 res.api，回傳 json 全部都用 res.api({});
     */
    app.use(apiBinding(app));

    return function(req, res, next) {
        return next();
    };

};
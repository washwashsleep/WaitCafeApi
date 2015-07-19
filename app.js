// Use ES6
try {
    require('babel/register')({
        optional: ['es7.asyncFunctions']
    });
}catch (e) {}

var express = require('express');

var app = express();

// 載入全域變數與設定
require('./Global');

// 載入所有的 middleware 與設定
var middlewares = require('./middlewares')(app);
app.use(middlewares);

// 載入 controller
var controllers = require('./controllers')(app);
app.use(controllers);

// 載入 errorHandler
var errorHandler = require('./errorHandler')(app);
app.use(errorHandler);


module.exports = app;

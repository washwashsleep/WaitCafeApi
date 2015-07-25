var user = require('./user');
var favorite = require('./favorite');
var activity = require('./activity');

module.exports = function(app, next) {

    app.use('/api/', user);

    app.use('/api/', favorite);
    
    app.use('/api/', activity);

    return function(req, res, next) {
        return next();
    };
};

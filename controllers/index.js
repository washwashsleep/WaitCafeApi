var user = require('./user');
var favorite = require('./favorite');

module.exports = function(app, next) {

    app.use('/api/', user);

    app.use('/api/', favorite);

    return function(req, res, next) {
        return next();
    };
};

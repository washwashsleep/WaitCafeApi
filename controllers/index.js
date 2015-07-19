var user = require('./user');

module.exports = function(app, next) {

    app.use('/api/', user);

    return function(req, res, next) {
        return next();
    };
};

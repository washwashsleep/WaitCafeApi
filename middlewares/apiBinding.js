
module.exports = function(app) {

    app.response.__proto__.api = function (data) {

        var _this = this;
        var res = _this;
        var req = _this.req;
        return this.json(data);
    };

    return function(req, res, next) {
        return next();
    };

};
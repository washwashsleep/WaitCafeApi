
module.exports = function(app) {

    /*
     * 處理錯誤回傳的資訊
     */
    app.use(function(err, req, res, next) {

        var errObject = {
            message: err.message,
            // stack: err.stack.split('\n')
        };

        return res.api(errObject);
    });

    return function(req, res, next) {
        return next();
    };

};
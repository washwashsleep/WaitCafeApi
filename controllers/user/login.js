
var _ = require('lodash');

module.exports = function(req, res, next) {

    var options = _.pick(req.body, 'name', 'password');

    if(!options.name){
        console.log('登入，缺少 name');
        return next(new Error('登入，缺少 name'));
    }

    if(!options.password){
        console.log('登入，缺少 password');
        return next(new Error('登入，缺少 password'));
    }

    return models.user.findOne()
        .where('email').equals(options.name)
        .where('password').equals(options.password)
        .execAsync()
        .then(function(user) {

            if(!user){
                return Promise.reject(new Error('warn! 找不到帳號，請註冊'));
            }

            req.User = user;

            return res.api(user);
        })
        .catch(next);
};
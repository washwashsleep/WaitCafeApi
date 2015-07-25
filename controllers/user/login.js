
var _ = require('lodash');

module.exports = function(req, res, next) {

    var options = _.pick(req.body, 'name', 'password', 'email', 'phone');

    if(!options.name){
        console.log('登入，缺少 name');
        return next(new Error('登入，缺少 name'));
    }

    if(!options.password){
        console.log('登入，缺少 password');
        return next(new Error('登入，缺少 password'));
    }

    if(!options.email){
        console.log('登入，缺少 email');
        return next(new Error('登入，缺少 email'));
    }

    if(!options.phone){
        console.log('登入，缺少 phone');
        return next(new Error('登入，缺少 phone'));
    }

    return models.user.findOne()
        .where('name').equals(options.name)
        .where('password').equals(libs.hash(options.password))
        .where('email').equals(options.email)
        .where('phone').equals(options.phone)
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
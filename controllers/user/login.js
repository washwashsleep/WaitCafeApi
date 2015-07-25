
var _ = require('lodash');

module.exports = function(req, res, next) {

    var options = _.pick(req.body, 'password', 'email');

    if(!options.email){
        console.log('登入，缺少 email');
        return next(new Error('登入，缺少 email'));
    }

    if(!options.password){
        console.log('登入，缺少 password');
        return next(new Error('登入，缺少 password'));
    }

    return models.user.findOne()
        .where('email').equals(options.email)
        .where('password').equals(libs.hash(options.password))
        .execAsync()
        .then(function(user) {

            console.log(user);
            console.log(req.session);

            if(!user){
                return Promise.reject(new Error('warn! 找不到帳號，請註冊'));
            }

            if(req.session && req.session.User && (req.session.User.email === user.email)){
                return Promise.reject(new Error('你已經登入了唷啾咪'));
            }

            req.session.User = user;
            console.log(req.session);

            return res.api(user);
        })
        .catch(next);
};
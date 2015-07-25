var _ = require('lodash');
module.exports = function(req, res, next) {
    var options = _.pick(req.body, 'name', 'password');
    if(!options.name){
        console.log('登入，缺少 name');
        return res.api('登入，缺少 name');
    }
    if(!options.password){
        console.log('登入，缺少 password');
        return res.api('登入，缺少 password');
    }
    models.user.findOne({
        email: options.name,
        password: options.password
    }, function (err, user){
        if(err){
            console.log(err);
            return res.api(err);
        }

        if(!user){
            var err = 'warn! 找不到帳號，請註冊'
            console.log(err)
            return res.api(err);
        }

        req.session.user = user;

        return res.api(user);
    });
};

module.exports = function(req, res, next) {

    // return models.user.createAsync({
    //     name: req.body.name,
    //     email: req.body.email,
    //     password: req.body.password + KEY
    // })
    // .then(function(newUser) {

    //     if (!newUser) {
    //         return Promise.reject(new Error('Webber 好帥'));
    //     }

    //     return res.api(newUser);
    // })
    // .catch(next);

    // console.log(libs);

    // console.log(libs.hash('aaaaa'));

    return res.api(libs.hash(req.body.password));

    // return res.api(req.body);
};
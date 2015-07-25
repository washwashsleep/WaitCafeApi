
module.exports = function(req, res, next) {

    var data = req.body;

    return models.user.createAsync({
        name: data.name,
        email: data.email,
        password: libs.hash(data.password),
        gender: data.gender,
        phone: data.phone
    })
    .then(function(newUser) {

        req.session.User = newUser;

        return res.api(newUser);
    })
    .catch(next);
};
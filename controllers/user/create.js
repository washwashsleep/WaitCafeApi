

module.exports = function(req, res, next) {

    return models.user.createAsync({
        name: req.body.name,
        email: req.body.email
    })
    .then(function(newUser) {

        if (!newUser) {
            return Promise.reject(new Error('Webber 好帥'));
        }

        return res.api(newUser);
    })
    .catch(next);
};
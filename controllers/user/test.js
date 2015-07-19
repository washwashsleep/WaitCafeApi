
module.exports = function(req, res, next) {

    return models.user.find()
        .execAsync()
        .then(function(users) {
            console.log(users);
            return res.api('USER TEST');
        })
        .catch(next);
};

module.exports = function(req, res, next) {

    var data = req.body;

    return models.user.findOne()
        .where('email').equals(data.email)
        .execAsync()
        .then(function(user) {

            if (user) {
                return Promise.reject(new Error('這個 email 已經註冊過了'));
            }

            return models.user.createAsync({
                name: data.name,
                email: data.email,
                password: libs.hash(data.password),
                gender: data.gender,
                phone: data.phone
            });
        })
    .then(function(newUser) {

        return res.api(newUser);
    })
    .catch(next);
};
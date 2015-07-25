
module.exports = function(req, res, next) {

    var data = req.query;

    return models.favorite.find()
        .where('createdBy').equals(data.userId)
        .execAsync()
        .then(function(favorites) {

            return res.api(favorites);
        })
        .catch(next);

};
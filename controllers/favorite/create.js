
module.exports = function(req, res, next) {
    var data = req.body;

    Promise.map(data.locations, function(location){

        return models.favorite.findOne()
            .where('location.id').equals(location.id)
            .where('trashed').equals(false)
            .where('createdBy').equals(data.userId)
            .execAsync()
            .then(function(doc) {

                if(doc){
                    return Promise.resolve(doc);
                }

                return models.favorite.createAsync({
                    location: location,
                    createdBy: data.userId
                });
            });
    })
    .then(function(favorites) {
        return res.api(favorites);
    })
    .catch(next);
};
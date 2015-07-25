
module.exports = function(req, res, next) {
    var data = req.body;
    return models.favorite.createAsync({
        location: {
            id: data.id,
            name: data.name,
            category: data.category,
            latitude: data.latitude,
            longitude: data.longitude,
            checkins: data.checkins,
            checkins_upcount: data.checkins_upcount,
            startdate: data.startdate
        },
        createdBy: data.userId
    })
    .then(function(favorite) {
        return res.api(favorite);
    })
    .catch(next);
};
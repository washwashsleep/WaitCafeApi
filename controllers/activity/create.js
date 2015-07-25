
module.exports = function(req, res, next) {

    var data = req.body;

    return models.activity.createAsync({
        location: data.location,
        createdBy: data.userId,
        start: data.start,
        end: data.end
    })
    .then(function(activity) {
        return res.api(activity);
    })
    .catch(next);

};
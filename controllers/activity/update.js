
module.exports = function(req, res, next) {

    var data = req.body;
    var activityId = req.params.activityId;

    return models.activity.findById(activityId)
        .where('trashed').equals(false)
        .execAsync()
        .then(function(activity) {

            if(data.receiver){
                activity.receiver = data.receiver;
            }

            if(data.trashed){
                activity.trashed = data.trashed;
            }

            return activity.saveAsync();
        })
        .spread(function (activity){
            return res.api(activity);
        })
        .catch(next);

};
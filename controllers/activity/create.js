
module.exports = function(req, res, next) {

    var data = req.body;

    return models.activity.findOne()
        .where('createdBy').equals(data.userId)
        .where('start').lt(Date.now())
        .where('end').gt(Date.now())
        .where('trashed').equals(false)
        .execAsync()
        .then(function(activity) {

            if(activity){
                return Promise.reject(new Error('你現在還在活動當中喔'));
            }

            return models.activity.createAsync({
                location: data.location,
                createdBy: data.userId,
                start: data.start,
                end: data.end
            });
        })
        .then(function(activity) {
            return res.api(activity);
        })
        .catch(next);

};

var request = require('request-promise');

let apiUrl = 'http://api.ser.ideas.iii.org.tw:80/api/fb_checkin_search';

let token = '488d28509482c5a49996b509065a2d67';

module.exports = function(req, res, next) {

    var data = req.query;

    return request.post(apiUrl)
        .form({
            token: token,
            coordinates: data.coordinates || '25.041399,121.554233',
            radius: data.radius || 20,
            limit: data.limit || 5,
            keyword: data.keyword || 'cafe'
        })
        .then(function(docs) {
            
            var locations = JSON.parse(docs);

            return res.api(locations);
        })
        .catch(next);

};

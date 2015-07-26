
var request = require('request-promise');

let apiUrl = 'http://api.ser.ideas.iii.org.tw:80/api/fb_checkin_search';

let token = 'f2614692ea8b685a374383bc6570f106';
// let token = '601904a11864087dd5780aebc58abb98';

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


var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({

    // 使用者的名稱
    name: {
        type: String,
        required: true
    },

    // 使用者的 email
    email: {
        type: String
    }
});

module.exports = mongoose.model('user', schema);

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({

    // 使用者的名稱
    name: {
        type: String,
        required: true
    },

    // 使用者的密碼
    password: {
        type: String,
        required: true
    },

    // 使用者的 email
    email: {
        type: String,
        required: true
    },

    // 使用者的性別
    gender: {
        type: String
    },

    // 使用者的電話
    phone: {
        type: String,
        required: true
    },

    // 創造時間
    createdAt: {
        type: Date,
        default: Date.now
    },

    // 更新時間
    updatedAt: {
        type: Date,
        default: Date.now
    },

    // 是否刪除
    trashed: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model('user', schema);
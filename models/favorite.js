

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({

    // 資策會 api 回傳的物件
    location: {
        id: {
            type: String
        },
        name: {
            type: String
        },
        category: {
            type: String
        },
        latitude: {
            type: String
        },
        longitude: {
            type: String
        },
        checkins: {
            type: String
        },
        checkins_upcount: {
            type: String
        },
        startdate: {
            type: String
        }
    },

    // 創造者
    createdBy: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'user'
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

module.exports = mongoose.model('favorite', schema);
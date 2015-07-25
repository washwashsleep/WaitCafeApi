


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

    // 活動開始時間
    start: {
        type: Date,
        default: Date.now,
        required: true
    },

    // 活動結束時間
    end: {
        type: Date,
        required: true
    },

    // 活動的接收者
    receiver: {
        type: Schema.Types.ObjectId,
        ref: 'user'
    },

    // 活動的創造者
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

module.exports = mongoose.model('activity', schema);
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var config = require('../config')
var Schema = mongoose.Schema 

mongoose.connect(config.mongodb)
// 定义两个Schema
var User = new Schema({
    username: String,
    password: String
})

var Questionaire = new Schema({
    ower: Schema.Types.ObjectId,
    createTime: String,
    deadTime: String,
    edit: Number,
    questionaire: Schema.Types.Mixed,  // 混合类型
    feedbackes: [Schema.Types.Mixed]
})

// 将Schema发布为Model
module.exports.User = mongoose.model('user', User)
module.exports.Questionaire = mongoose.model('questionaire', Questionaire)
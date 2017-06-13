var User = require('../lib/mongo').User

module.exports = {
  save: function(user){
    return User.create(user)
  },
  findOne: function(username){
    // 如果 exec() 找到了匹配的文本，则返回一个结果数组。
    return User.findOne({username:username}).exec()
  }
}
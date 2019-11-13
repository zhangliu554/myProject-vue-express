const mongoose = require("./DBConfig");
const Schema = mongoose.Schema;

let userSchema = new Schema({
    username:{type:String},
    password:{type:String}
});

let UserModel = mongoose.model("users",userSchema);

module.exports = {
    checkUserLogin(where,cb){
        return UserModel.find(where).exec(cb)
    },
    addUser(item,cb){
        //初始化数据
        let user = new UserModel(item);
        user.save(cb)
    }
}
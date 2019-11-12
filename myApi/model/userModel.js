const mongoose = require("./mongoModel");
const Schema = mongoose.Schema;

let userSchema = new Schema({
  username:{type:String},
  password:{type:String}
});

let UserModel = mongoose.model("users",userSchema);

module.exports = {
   checkUserLogin(where,cb){
    return  UserModel.find(where).exec(cb)
  },
   checkUserRegister(where,cb){
    return  UserModel.find({username:where}).exec(cb);
  }
};
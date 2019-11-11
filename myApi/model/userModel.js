const mongoose = require("./mongoModel");
const Schema = mongoose.Schema;

let userSchema = new Schema({
  username:{type:String},
  password:{type:Number}
});

let UserModel = mongoose.model("user",userSchema);

module.exports = {
   checkUserLogin(where,cb){
    return  UserModel.find(where,cb)
  }
};
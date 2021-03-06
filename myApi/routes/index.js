const express = require('express');
const router = express.Router();
// import indexModel from '../model/indexModel'
const indexModel = require('../model/indexModel');
const shoppingModel = require('../model/shoppingModel');
const typeModel = require('../model/typeModel');
const newProductModel = require('../model/newProductModel');
const itemModel = require('../model/itemModel');
const userModel = require('../model/userModel');

router.all("*",(req,res,next)=>{
  res.header("Access-Control-Allow-Origin","*");
  res.header("Access-Control-Allow-Methods","PUT,GET,POST,DELETE,OPTIONS");
  res.header("Access-Control-Allow-Headers","X-Requested-With");
  res.header("Access-Control-Allow-Headers","Content-Type");
  if(req.method=="OPTIONS")  res.send(200); /*让option请求快速返回*/
  else next();
});
/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });
//主页路由
router.get('/index',(req, res)=> {
  res.json(indexModel.getIndexInfo())
});
//逛页面路由
router.get('/shopping',(req, res)=> {
  res.json(shoppingModel.getShoppingInfo())
});
//分类路由
router.get('/type',(req, res)=> {
  res.json(typeModel.getTypeInfo())
});
//新品页面
router.get('/newProduct',(req, res)=> {
  res.json(newProductModel.getNewProductInfo())
});
//商品列表
router.get('/item',(req, res)=> {
  let data = itemModel.getItemInfo();
  let id = req.query.id;
  let Data = data.find(function (item) {
    return item.item.pid == id
  });
  res.json(Data)
  // res.send()
});
//登录页面
router.post("/login",  (req, res) => {
  let user = req.body;
  userModel.checkUserLogin(user,(error,result)=>{
    if(result.length>0){
      res.json({
        code: 200,
        msg: "登录成功了"
      })
    }else{
      res.json({
        code:201,
        msg:"登录失败，用户名或者密码错误"
      })
    }
  });
});
//注册页面路由
router.post("/register", (req, res) => {
  //获取form中的用户名和密码
  let user = req.body.username;
  let users = req.body;
  userModel.checkUserRegister(user,(error,result)=>{
    if(result.length>0){
      res.json({
        code: 201,
        msg: "用户已存在"
      })
    }else{
      res.json({
        code:200,
        msg:"注册成功"
      });
      userModel.addUsers(users,(error,result)=>{

      })
    }
  });
  });

module.exports = router;

const express = require('express');
const router = express.Router();
// import indexModel from '../model/indexModel'
const indexModel = require('../model/indexModel');

router.all("*",(req,res,next)=>{
  res.header("Access-Control-Allow-Origin","*");
  res.header("Access-Control-Allow-Methods","PUT,GET,POST,DELETE,OPTIONS");
  res.header("Access-Control-Allow-Headers","X-Requested-With");
  res.header("Access-Control-Allow-Headers","Content-Type");
  if(req.method=="OPTIONS")  res.send(200); /*让option请求快速返回*/
  else next();
});
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/index',(req, res)=> {
  res.jsonp(indexModel.getIndexInfo())
});
module.exports = router;

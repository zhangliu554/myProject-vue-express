const express = require('express');
const router = express.Router();

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
router.get('/product', function(req, res, next) {
  let data={
    code:0,
    data:{name:'aaa',pwd:'123'},
    isSuccess:true,
    msg:"请求成功"
  };
  res.json(data);
});
module.exports = router;

const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  let data={
    code:0,
    data:{name:'aaa',pwd:'123'},
    isSuccess:true,
    msg:"请求成功"
  };
  res.json(data);
});

module.exports = router;
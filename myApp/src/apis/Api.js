import {BASEURL} from "../common/baseApi"
const INDEXURL = `${BASEURL}/index`;
const TYPEURL = `${BASEURL}/type`;
const SHOPPINGURL = `${BASEURL}/shopping`;
const NEWPRODUCTURL = `${BASEURL}/newProduct`;
export default {
  /**
   * 获取店铺的信息
   */
  getIndexInfo(cb){
    fetch(INDEXURL).then(res=>{
      res.json().then(cb)
    })
  },
  getTypeInfo(cb){
    fetch(TYPEURL).then(res=>{
      res.json().then(cb)
    })
  },
  getShoppingInfo(cb){
    fetch(SHOPPINGURL).then(res=>{
      res.json().then(cb)
    })
  },
  getNewProductInfo(cb){
    fetch(NEWPRODUCTURL).then(res=>{
      res.json().then(cb)
    })
  }
}
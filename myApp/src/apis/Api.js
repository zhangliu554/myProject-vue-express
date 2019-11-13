import {BASEURL} from "../common/baseApi"
const INDEXURL = `${BASEURL}/index`;
const TYPEURL = `${BASEURL}/type`;
const SHOPPINGURL = `${BASEURL}/shopping`;
const NEWPRODUCTURL = `${BASEURL}/newProduct`;
const ITEMURL = `${BASEURL}/item`;
const LOGINURL = `${BASEURL}/login`;
const REGISTER = `${BASEURL}/register`;
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
  },
  async getProductById(id) {
    let res = await fetch(`${ITEMURL}/?id=${id}`);
    let data = await res.json();
    return data;
  },
  checkUserLogin(username,password,cb){
    fetch(`${LOGINURL}/?username=${username}&password=${password}`, { method: 'post' }).then(res=>{
      res.json().then(cb)
    })
  },
  checkUserRegister(username,password,cb){
    fetch(`${REGISTER}/?username=${username}&password=${password}`, { method: 'post' }).then(res=>{
      res.json().then(cb)
    })
  }
}
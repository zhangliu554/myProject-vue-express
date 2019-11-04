import {BASEURL} from "../common/baseApi"
const PRODUCTURL = `${BASEURL}/product`;
export default {
  /**
   * 获取店铺的信息
   */
  getShopInfo(cb){
    fetch(PRODUCTURL).then(res=>{
      res.json().then(cb)
    })
  }
}
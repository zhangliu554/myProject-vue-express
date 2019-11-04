import {BASEURL} from '../common/baseApi'
const productUrl = `${BASEURL}/product`;
export default {
  /**
   * 获取店铺的信息
   */
  getShopInfo(cb){
    fetch(productUrl).then(res=>{
      res.json().then(cb)
    })
  }
}
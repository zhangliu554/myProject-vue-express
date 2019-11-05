import {BASEURL} from "../common/baseApi"
const INDEXURL = `${BASEURL}/index`;
export default {
  /**
   * 获取店铺的信息
   */
  getIndexInfo(cb){
    fetch(INDEXURL).then(res=>{
      res.json().then(cb)
    })
  }
}
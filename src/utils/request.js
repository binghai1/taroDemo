import Taro from '@tarojs/taro'
import url from '../constants/api'
export function getJson(url,data){
    Taro.showLoading();
    return  Taro.request({url:url,data:data,method:'Get'}).then(result=>{
        Taro.hideLoading();
        return result;
     });
}
export function PostJson(url,data){
    Taro.showLoading();
    return  Taro.request({ header: {
        'content-type': 'application/json'
      },url:url,data:data,method:'Post'}).then(result=>{
        Taro.hideLoading();
        return result;
     });
}

export async function getTopics(data){
        const result =await getJson(url.getTopics,data).catch(error=>{
            console.log(error)
        })
        return result
}

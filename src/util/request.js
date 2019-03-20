import Taro from '@tarojs/taro'
import url from '../constants/api'
export function getJson(url,data){
    return  Taro.request({url:url,data:data,method:'GET'})
}
export function PostJson(url,data){
    return  Taro.request({url:url,data:data,method:'Post'})
}

export async function getTopics(data){
        const result =await getJson(url.getTopics,data).catch(error=>{
            console.log(error)
        })
        return result
}

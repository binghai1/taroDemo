import Taro from '@tarojs/taro'
import url from '../constants/api'
export function getJson(url,data){
    return  Taro.request({url:url,data:data,method:'GET'})
}

export async function getTopics(){
        const result =await getJson(url.getTopics).catch(error=>{
            console.log(error)
        })
        return result
}
import {GET_TOPIC_LIST,NEXT_TOPIC_LIST} from '../constants/topicList'
import {getTopics} from '../util/request'
export function getTopicList(params){
    return async (dispatch)=>{
        console.log(params)
        var result=await getTopics(params)
        if(result&&result.data&&result.data.success){
            dispatch({type:GET_TOPIC_LIST,list:result.data.data})
        }
    }
}
export function getNextTopicList(params){
    return async (dispatch)=>{
        var result=await getTopics(params)
        if(result&&result.data&&result.data.success){
            dispatch({type:NEXT_TOPIC_LIST,list:result.data.data})
        }
    }
}
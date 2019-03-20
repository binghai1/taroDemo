import {GET_TOPIC_LIST,NEXT_TOPIC_LIST} from '../constants/topicList'
import {getTopics} from '../util/request'
export function getTopicList(data){
    return async (dispatch)=>{
        var result=await getTopics(data)
        if(result&&result.data){
            console.log(result)
        }
    }
}
import {GET_TOPIC_LIST,NEXT_TOPIC_LIST} from '../constants/topicList'
import {getTopics} from '../utils/request'
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
//请求话题详情
export  function  getTopicInfo(params){
    return async  dispatch=>{
     let result= await getJSON(api.gettopicinfo+params.id,params)
       if(result&&result.data&&result.data.success){
            dispatch({type:'getTopicInfo',infoData:result.data.data}) 
       }else{
           console.error('请求话题详情失败！')
       }
    }
}
//点赞话题回复
export  async  function  admireTopic(params){
    let  result=await   postJSON(api.upreply+params.replyid+'/ups',params);
      if(result&&result.data&&result.data.success){
          //成功点赞
          return   result.data;
      }else{
          //点赞失败
          Taro.showToast({title:'点赞失败!',icon:'none'})
      }
      return  false;
}

export async  function   replyContent(params){
  let  result= await postJSON(api.replytopic+params.topicid+'/replies',params)
  if(result&&result.data&&result.data.success){
    //成功评论
     return   result.data;
     }else{
    //评论失败
     Taro.showToast({title:'评论失败!',icon:'none'})
   }
   return  false;
}
export  async  function  submitTopic(params){
  let result= await postJSON(api.createtopic,params);
  if(result&&result.data&&result.data.success){
      return  result.data
  }else{
    Taro.showToast({title:'发布话题失败!',icon:'none'})
  }
  return  false;
}
//更新话题
export  async  function  updateTopic(params){
   let  result=await postJSON(api.updatetopic,params);
   if(result&&result.data&&result.data.success){
        return  result.data
    }else{
       Taro.showToast({title:'更新话题失败!',icon:'none'})
   }
    return  false;
}
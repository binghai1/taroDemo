import {GET_TOPIC_LIST,NEXT_TOPIC_LIST} from '../constants/topicList'
const INITIAL_STATE={
    page :1,
    limit:20,
    list:[],
    topicinfo:{},
    replies:[],//最近回复
    admireState:false  //点赞状态
}
export default function  topiclist(prestate=INITIAL_STATE,action){
    switch(action.type){
        case GET_TOPIC_LIST: return {
            ...prestate,list:action.list
        }
        case NEXT_TOPIC_LIST: return {
            ...prestate,list:prestate.list.concat(action.list)
        }
       
        case  'admireSuccess':
        return {...prestate,admireState:!prestate.admireState}
        case 'getTopicInfo':
        return {...prestate,replies:action.infoData.replies,topicinfo:{...action.infoData,replies:null}}
        default : return{
            ...prestate
        }
 
    }
    
}
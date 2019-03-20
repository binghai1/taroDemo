import {GET_TOPIC_LIST,NEXT_TOPIC_LIST} from '../constants/topicList'
const INITIAL_STATE={
    page :1,
    limit:20,
    list:[]
}
export default function topicList(prestate=INITIAL_STATE,action){
    switch(action.type){
        case GET_TOPIC_LIST: return {
            ...prestate,list:action.list
        }
        case NEXT_TOPIC_LIST: return {
            ...prestate,list:prestate.list.concat(action.list)
        }
        default : return{
            ...prestate
        }
    }
}
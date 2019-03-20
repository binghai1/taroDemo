import {SHOW_DRAWER,HIDE_DRAWER,CHANGE_CATE} from '../constants/menu'
const INITIAL_SATE={
    cateData:[
        {key:"all",value:"全部"},
              {key:"good",value:"精华"},
              {key:"share",value:"分享"},
              {key:"ask",value:"问答"},
              {key:"job",value:"招聘"},
              {key:"dev",value:"客户端测试"}],
              currentCate:{key:"all",value:"全部"},
    showDrawer:false

}
export default function menu(preState=INITIAL_SATE,action){
    switch(action.type){
        case SHOW_DRAWER:return {...preState,showDrawer:true}
        case HIDE_DRAWER:return {...preState,showDrawer:false}
        case CHANGE_CATE:return {...preState,currentCate:action.currentCate}
        default: return{...preState}
    }

}
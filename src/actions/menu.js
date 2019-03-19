import {SHOW_DRAWER,HIDE_DRAWER,CHANGE_CATE} from '../constants/menu'

export function showDrawer(){
    return dispatch=> dispatch({type:SHOW_DRAWER})
}
export function hideDrawer(){
    return dispatch=> dispatch({type:CHANGE_CATE})
}

import { combineReducers } from 'redux'
import counter from './counter'
import menu from './menu'
import  topiclist from './topicList'

export default combineReducers({
  counter,
  menu,
  topiclist
})

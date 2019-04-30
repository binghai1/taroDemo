import Taro,{Component} from '@tarojs/taro'
import { View, Button, Text,ScrollView } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import {getTopicList,getNextTopicList} from '../../actions/topiclist'
import Topic from './topic'
//getTopicList
@connect(({topiclist,menu})=>({...topiclist,tab:menu.currentCate.key}),
    (dispatch)=>({
        getTopicList(params){
            dispatch(getTopicList(params))
        },
        getNextTopicList(params){
            dispatch(getNextTopicList(params))
        }
    })
)
class TopicList extends Component {
    config = {
    navigationBarTitleText: 'Templete'
  }
    componentWillMount(){
        const {page,limit,tab}=this.props
        this.props.getTopicList({page,limit,tab})
    }
    getNextList(){
        const {page,limit,tab}=this.props
        this.props.getNextTopicList({page:page+1,limit,tab})
    }
  render(){
    return (
      <ScrollView style='height:750px;' scrollY={true} onScrollToLower={this.getNextList.bind(this)}>
        {this.props.list.map(
            (item)=>(<Topic item={item}/>)
        )}
      </ScrollView>
    )
  }

}
export default TopicList
import Taro,{Component} from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import {getTopicList} from '../../actions/topicList'
//getTopicList
@connect(({TopicList,menu})=>({...TopicList,tab:menu.currentCate.key}),
    (dispatch)=>({
        getTopicList(){
            dispatch(getTopicList())
        }
    })
)
class TopicList extends Component {
    config = {
    navigationBarTitleText: 'Templete'
  }
    componentWillMount(){
        var a=this.props.getTopicList()
        console.log(a)
    }
 
   componentWillUnmount () { 
    
  }
  render(){
    return (
      <View>TopicList</View>
    )
  }

}
export default TopicList
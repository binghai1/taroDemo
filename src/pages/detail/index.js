import Taro,{Component} from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import { connect } from '@tarojs/redux'
class Detail extends Component {
    config = {
    navigationBarTitleText: 'Detail'
  }
    componentWillMount(){
        console.log(this.$router.params.topicid)
  }
  
  render(){
    return (
      <View>detial</View>
    )
  }




}
export default Detail
import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import { add, minus, asyncAdd } from '../../actions/counter'
import {getTopics} from '../../utils/request'
import Menu from '../../components/menu/menu'
import TopicList from '../../components/topicList/topicList';
import './index.less'
@connect(({ counter }) => ({
  counter
}), (dispatch) => ({
  add () {
    dispatch(add())
  },
  dec () {
    dispatch(minus())
  },
  asyncAdd () {
    dispatch(asyncAdd())
  }
}))
class Index extends Component {
    config = {
    navigationBarTitleText: '首页'
  }
  async  componentWillMount(){
    var res=await getTopics()
  }
  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }
   componentWillUnmount () { 
    
  }

  componentDidShow () { 
  
  }

  componentDidHide () { }

  render () {
    return (
     /*  <View className='index'>
        <Button className='add_btn' onClick={this.props.add}>+</Button>
        <Button className='dec_btn' onClick={this.props.dec}>-</Button>
        <Button className='dec_btn' onClick={this.props.asyncAdd}>async</Button>
        <View><Text>{this.props.counter.num}</Text></View>
        <View><Text>Hello, World</Text></View>
      </View> */
      <View>
          <Menu/>
          <TopicList  />
      </View>

    )
  }
}

export default Index

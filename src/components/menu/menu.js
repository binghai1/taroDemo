import Taro,{Component} from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import {showDrawer} from '../../actions/menu'
import './menu.less'
 
  
  @connect(({menu})=>({menu}),
  (dispatch)=>({
      showDrawer(){
        dispatch(showDrawer())
      }
    })
  ) 
class Menu extends Component {
  
    config = {
    navigationBarTitleText: 'Menu'
  }
  async  componentWillMount(){
  }
  async showDrawer(){
    this.props.showDrawer&&this.props.showDrawer()
  }
   componentWillUnmount () { 
    
  }
  render(){
    return(
        <View className="topic-menu">
            <Image onClick={this.showDrawer.bind(this)} src={require('../../assets/img/cata.png')}></Image>
            <Text>首页</Text>
            <Image src={require('../../assets/img/login.png')}></Image>
        </View> 
    )
  }




}
export default Menu

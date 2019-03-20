import Taro,{Component} from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import {showDrawer,hideDrawer,changeCate} from '../../actions/menu'
import { AtDrawer } from 'taro-ui'
import './menu.less'
  @connect(({menu})=>({menu}),
  (dispatch)=>({
      showDrawer(){
        dispatch(showDrawer())
      },
      hideDrawer(){
        dispatch(hideDrawer())
      },
      changeCate(cate){
        dispatch(changeCate(cate))
      }
    })
  ) 
class Menu extends Component {
    config = {
    navigationBarTitleText: 'Menu'
  }
  async  componentWillMount(){
  }
  showDrawer(){
    this.props.showDrawer&&this.props.showDrawer()
  }
  hideDrawer(){
    this.props.hideDrawer&&this.props.hideDrawer()
  }
  getItem(cate){
     return cate.map(item=>item.value)
  }
  clickCata(index){
    var curCate=this.props.menu.cateData[index]
    this.props.changeCate&&this.props.changeCate(curCate)
  }
   componentWillUnmount () { 
    
  }
  render(){
    var {cateData}=this.props.menu
    var item=this.getItem(cateData)
    return(
        <View className="topic-menu">
            <AtDrawer style='position:absolute;' show={this.props.menu.showDrawer} onItemClick={this.clickCata.bind(this)}  onClose={this.hideDrawer.bind(this)} items={item} />
            <Image onClick={this.showDrawer.bind(this)} src={require('../../assets/img/cata.png')}></Image>
            <Text>{this.props.menu.currentCate.value}</Text>
            <Image src={require('../../assets/img/login.png')}></Image>
        </View> 
    )
  }




}
export default Menu

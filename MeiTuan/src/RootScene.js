/**
 * Copyright (c) 2018-7-3
 * All rights reserved
 * 
 * @flow taopoppy
 */
 import React,{PureComponent} from 'react';
 import {
     StyleSheet,
     View,
     Text,
     Image,
 } from 'react-native';
 import {TabNavigator,TabBarBottom } from 'react-navigation';
 import HomeScene from '../src/scene/Home/HomeScene';
 import MineScene from '../src/scene/Mine/MineScene';
 import NearbyScene from '../src/scene/Nearby/NearbyScene';
 import OrderScene from '../src/scene/Order/OrderScene';
 import TabBarItem from '../src/widget/TabBarItem';
 import color from '../src/widget/color';


 export default class RootScene extends PureComponent{
     constructor(props){
         super(props)
     }
     render(){
         return <Tab/>
     }
 }

 const Tab=TabNavigator({
     Home:{
         screen:HomeScene,
         navigationOptions:()=>({
             tabBarLabel:'团购',
             tabBarIcon:({focused,tintColor})=>{
                <TabBarItem
                    focused={focused}
                    tintColor={tintColor}
                    selectedImage={require('./img/tabbar/tabbar_homepage_selected.png')}
                    normalImage={require('./img/tabbar/tabbar_homepage.png')}
                />
             }
         })
     },
     Nearby:{
        screen:NearbyScene,
        navigationOptions:()=>({
            tabBarLabel:'附近',
            tabBarIcon:({focused,tintColor})=>{
                <TabBarItem
                    focused={focused}
                    tintColor={tintColor}
                    selectedImage={require('./img/tabbar/tabbar_merchant_selected.png')}
                    normalImage={require('./img/tabbar/tabbar_merchant.png')}
                />
            }
        })
     },
     Order:{
        screen:OrderScene,
        navigationOptions:()=>({
            tabBarLabel:'订单',
            tabBarIcon:({focused,tintColor})=>{
                <TabBarItem
                    focused={focused}
                    tintColor={tintColor}
                    selectedImage={require('./img/tabbar/tabbar_order_selected.png')}
                    normalImage={require('./img/tabbar/tabbar_order.png')}
                />
            }
        })
     },
     Mine:{
        screen:MineScene,
        navigationOptions:()=>({
            tabBarLabel:'我的',
            tabBarIcon:({focused,tintColor})=>{
                <TabBarItem
                    focused={focused}
                    tintColor={tintColor}
                    selectedImage={require('./img/tabbar/tabbar_mine_selected.png')}
                    normalImage={require('./img/tabbar/tabbar_mine.png')}
                />
            }
        })
     },
 },{
     tabBarComponent:TabBarBottom,                 //底部导航使用的组件
     tabBarPosition:'bottom',                      //ios默认导航就在底部，但是android是在顶部，所以我们要设置在底部
     lazy:true,                                    //app在启动的时候是否要将四个页面都创建出来
     animationEnabled:false,                       //切换底部导航是否需要动画，ios默认是true，android默认false
     swipeEnabled:false,                           //是否支持水平横向的滑动
     initialRouteName:'Home',
     tabBarOptions:{
         //设置底部导航栏的UI样式  
         showIcon:true,                            //是否显示图片
         style:{height:58},  //整个底部导航栏的样式
         activeTintColor:color.primary,            //选中时的颜色
         inactiveTintColor:color.gray,             //未选中的颜色

     }
 })

 const styles=StyleSheet.create({
     container:{
         flex:1,
         backgroundColor:'#fff'
     },
 })
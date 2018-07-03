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
                 <Image
                    source={require('./img/tabbar/tabbar_homepage.png')}
                 />
             }
         })
     },
     Nearby:{
        screen:NearbyScene,
        navigationOptions:()=>({
            tabBarLabel:'附近',
            tabBarIcon:({focused,tintColor})=>{
                <Image
                   source={require('./img/tabbar/tabbar_merchant.png')}
                />
            }
        })
     },
     Order:{
        screen:OrderScene,
        navigationOptions:()=>({
            tabBarLabel:'订单',
            tabBarIcon:({focused,tintColor})=>{
                <Image
                   source={require('./img/tabbar/tabbar_order.png')}
                />
            }
        })
     },
     Mine:{
        screen:MineScene,
        navigationOptions:()=>({
            tabBarLabel:'我的',
            tabBarIcon:({focused,tintColor})=>{
                <Image
                   source={require('./img/tabbar/tabbar_mine.png')}
                />
            }
        })
     },
 })

 const styles=StyleSheet.create({
     container:{
         flex:1,
         backgroundColor:'#fff'
     },
 })
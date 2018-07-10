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
     StatusBar,
     BackHandler,
     Platform,
     ToastAndroid,
 } from 'react-native';
 import {TabNavigator,TabBarBottom,StackNavigator} from 'react-navigation';
 import HomeScene from '../src/scene/Home/HomeScene';
 import MineScene from '../src/scene/Mine/MineScene';
 import NearbyScene from '../src/scene/Nearby/NearbyScene';
 import OrderScene from '../src/scene/Order/OrderScene';
 import TabBarItem from '../src/widget/TabBarItem';
 import color from '../src/widget/color';
 import WebScene from './Web/WebScene';
 import GroupPurchaseScene from './GroupPurchase/GroupPurchaseScene';
 import SplashView from '../src/scene/Lauch/SplashView';

 const lightContentScenes = ['Home', 'Mine'];
function getCurrentRouteName(navigationState){
    if(!navigationState){
        return null
    }
    const route=navigationState.routes[navigationState.index]
    if(route.routes){
        return getCurrentRouteName(route)
    }
    return route.routeName
}
 export default class RootScene extends PureComponent{
     constructor(props){
         super(props)
     }
     componentDidMount(){
         if(Platform.OS==='android'){
             this.listener=BackHandler.addEventListener('hardwareBackPress',this.onBackAndroid)
         }
     }
     componentWillUnmount(){
         if(Platform.OS==='android'){
             this.listener.remove('hardwareBackPress')
         }
     }
     onBackAndroid=()=>{
        let routes = this.navigator.state.nav.routes;
        let routeName = routes[routes.length-1].routeName;
        if(routeName=="Tab"){
            // if (this.lastBackPressed && this.lastBackPressed + 2000 >= Date.now()) {
            //     return false;
            // }else{
            //     lastBackPressed = Date.now();
            //     ToastAndroid.show('再按一次退出应用', ToastAndroid.SHORT);
            //     return true;
            // }
            let now = new Date().getTime(); 
            if(now - this.lastBackPressed < 2500) { 
                BackHandler.exitApp();
                //return false;
            } else{
                this.lastBackPressed = now; 
                ToastAndroid.show('再点击一次退出应用',ToastAndroid.SHORT); 
                return true; 
            }
           
                        
        }
     }
     render(){
         return <Navigator
            ref={navigator=>this.navigator=navigator}
            onNavigationStateChange={
                (prevState,currentState)=>{
                    const currentScene=getCurrentRouteName(currentState)
                    const previousScene=getCurrentRouteName(prevState)
                    if(previousScene!==currentScene){
                        if(lightContentScenes.indexOf(currentScene)>=0){
                            StatusBar.setBarStyle('light-content')
                        }else(
                            StatusBar.setBarStyle('dark-content')
                        )
                    }
                }
            }
         />
     }
 }

 const Tab=TabNavigator({
     Home:{
        screen: HomeScene,
        navigationOptions: ({navigation}) => ({
            tabBarLabel: '团购',
            tabBarIcon: ({focused, tintColor}) => (
                <TabBarItem
                    tintColor={tintColor}
                    focused={focused}
                    normalImage={require('../src/img/tabbar/tabbar_homepage.png')}
                    selectedImage={require('../src/img/tabbar/tabbar_homepage_selected.png')}
                />
            )
        })
     },
     Nearby:{
        screen:NearbyScene,
        navigationOptions:({navigation})=>({
            tabBarLabel:'附近',
            tabBarIcon:({focused,tintColor})=>(
                <TabBarItem
                    focused={focused}
                    tintColor={tintColor}
                    selectedImage={require('../src/img/tabbar/tabbar_merchant_selected.png')}
                    normalImage={require('../src/img/tabbar/tabbar_merchant.png')}
                />
            )
        })
     },
     Order:{
        screen:OrderScene,
        navigationOptions:()=>({
            tabBarLabel:'订单',
            tabBarIcon:({focused,tintColor})=>(
                <TabBarItem
                    focused={focused}
                    tintColor={tintColor}
                    selectedImage={require('../src/img/tabbar/tabbar_order_selected.png')}
                    normalImage={require('../src/img/tabbar/tabbar_order.png')}
                />
            )
        })
     },
     Mine:{
        screen:MineScene,
        navigationOptions:()=>({
            tabBarLabel:'我的',
            tabBarIcon:({focused,tintColor})=>(
                <TabBarItem
                    focused={focused}
                    tintColor={tintColor}
                    selectedImage={require('../src/img/tabbar/tabbar_mine_selected.png')}
                    normalImage={require('../src/img/tabbar/tabbar_mine.png')}
                />
            )
        })
     },
 },{
     tabBarComponent:TabBarBottom,                 //底部导航使用的组件
     tabBarPosition:'bottom',                      //ios默认导航就在底部，但是android是在顶部，所以我们要设置在底部
     lazy:true,                                    //app在启动的时候是否要将四个页面都创建出来
     animationEnabled:false,                       //切换底部导航是否需要动画，ios默认是true，android默认false
     swipeEnabled:true,                           //是否支持水平横向的滑动
     initialRouteName:'Home',
     tabBarOptions:{
         //设置底部导航栏的UI样式 
         showIcon:true,
         style:{backgroundColor:'white',height:58},          //整个底部导航栏的样式
         activeTintColor:color.primary,            //选中时的颜色
         inactiveTintColor:color.gray,             //未选中的颜色
     }
 })

 const Navigator=StackNavigator({
    SplashView:{screen:SplashView},
     Tab:{screen:Tab},
     WebScene:{screen:WebScene},
     GroupPurchaseScene:{screen:GroupPurchaseScene},
 },{
     navigationOptions:{
         headerTintColor:'#333333',                    //顶部导航条标题的颜色
         headerBackTitle:null,                     //返回键旁边的文字    
         showIcon:true,  
         swipeEnabled:false,  
         animationEnabled:false,  
     }
 })

 const styles=StyleSheet.create({
     container:{
         flex:1,
         backgroundColor:'#fff'
     },
 })
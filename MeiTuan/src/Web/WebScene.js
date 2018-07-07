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
    WebView,
    InteractionManager,//交互管理者
} from 'react-native';

//进入webview这个页面有动画效果，效果完成后才会显示标题加载，在网页完成加载后才会将标题改为网页标题
export default class WebScene extends PureComponent{
    static navigationOptions=({navigation})=>({
        title:navigation.state.params.title
    })
    constructor(props){
        super(props)
    }
    componentDidMount(){
        //设置可以变化的导航条的标题
        InteractionManager.runAfterInteractions(()=>{
            this.props.navigation.setParams({title:'加载中'})   //安排一个函数在所有的交互和动画完成之后运行。这里是动画完成后显示加载中
        })                                                                
    }

    onLoadEnd=(e)=>{
        let title=e.nativeEvent.title;                    //当网页加载完成后取出这个网页的标题
        if(title.length>10){
            this.props.navigation.setParams({title:title})
        }
    }
    render(){
        return <View style={styles.container}>
        <WebView
            style={styles.WebView}
            source={{uri:this.props.navigation.state.params.url}}
            onLoadEnd={()=>{this.onLoadEnd}}
        />
       </View>
    }
}


const styles=StyleSheet.create({
    container:{
        flex:1,
    },
    WebView:{
        flex:1,
    }
})





// (1)学习到了怎么动态改变导航栏的标题
// static navigationOptions=({navigation})=>({
//     title:navigation.state.params.title
// })
//
// this.props.navigation.setParams({title:'加载中'})

//(2) 安排一个函数在所有的交互和动画完成之后运行
// InteractionManager.runAfterInteractions(()=>{
// 一般就在页面跳转的时候来使用，使动画流畅
// })  

// (3)WebView的用法
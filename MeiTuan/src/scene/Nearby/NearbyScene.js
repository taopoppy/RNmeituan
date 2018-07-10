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
    TouchableOpacity,
} from 'react-native';
import {Heading3,Paragraph} from '../../widget/Text';
import screen from '../../common/screen';
import ScorllableView,{DefaultTabBar} from 'react-native-scrollable-tab-view';
import color from '../../widget/color';
import NearbyListScene from './NearbyListScene';

export default class NearbyScene extends PureComponent{
    static navigationOptions=({navigation})=>({
        headerLeft:(
            <TouchableOpacity style={styles.headerLeftStyle}>
                <Image 
                    style={styles.headerLeftImge} 
                    source={require('../../img/public/icon_food_merchant_address.png')}
                />
                <Heading3>银川 鼓楼</Heading3>
            </TouchableOpacity>
        ),
        headerRight:(
            <TouchableOpacity style={styles.searchbar}>
                <Image source={require('../../img/home/search_icon.png')} style={styles.searchicon}/>
                <Paragraph>找附近的吃喝玩乐</Paragraph>
            </TouchableOpacity>    
        ),

    })
    constructor(props){
        super(props)
    }
    render(){
        let titles=['享美食','住酒店','爱玩乐','全部'];
        let types=[
            ['热门', '面包甜点', '小吃快餐', '川菜', '日本料理', '韩国料理', '台湾菜', '东北菜'],
            ['热门', '商务出行', '公寓民宿', '情侣专享', '高星特惠'],
            ['热门', 'KTV', '足疗按摩', '洗浴汗蒸',  '电影院', '美发', '美甲'],
            []
        ]
        return(
            <ScorllableView
                style={styles.container}
                tabBarBackgroundColor='white'
                tabBarActiveTextColor='#FE566D'
                tabBarInactiveTextColor='#555555'
                tabBarTextStyle={styles.tabBarText}
                tabBarUnderlineStyle={styles.tabBarUnderLine}
            >
            {
                titles.map((title,i)=>(
                    <NearbyListScene 
                        tabLabel={title} 
                        key={i}
                        types={types[i]}
                        navigation={this.props.navigation}
                    />
                ))
            }
            </ScorllableView>
        )
    }
}


const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:color.paper,
    },
    headerLeftImge:{
        width:13,
        height:16,
        marginRight:5,
    },
    headerLeftStyle:{
        flexDirection:'row',
        alignItems:'center',
        padding:10,
    },
    searchbar:{
        width:screen.width*0.6,
        height:30,
        flexDirection:'row',
        borderRadius:19,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#eeeeee',
        alignSelf:'flex-end',
        marginRight:5,
    },
    searchicon:{
        width:20,
        height:20,
        margin:5,
    },
    tabBarText:{
        fontSize:14,
        marginTop:13,
    },
    tabBarUnderLine:{
        backgroundColor:'#fe566d',
    },
})


// titles.map((title,i)=>(         这个后面是小括号，所以下面的东西不用return，如果这里使用的是{}，下面就要使用return
//     <NearbyListScene 
//     tabLabel={title} 
//     key={i}
//     types={types[i]}
//     navigation={this.props.navigation}
// />
// ))
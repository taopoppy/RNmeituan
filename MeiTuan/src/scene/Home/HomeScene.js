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
import {TabNavigator,TabBarBottom } from 'react-navigation';
import color from '../../widget/color';
import NavigationItem from '../../widget/NavigationItem';
import * as api  from '../../api';
import HomeMenuView from './HomeMenuView';
import screen from '../../common/screen';

export default class HomeScene extends PureComponent{
    static navigationOptions=()=>({
        headerStyle:{backgroundColor:color.primary},
        headerTitle:(
            <TouchableOpacity style={styles.seachBar}>
                <Image style={styles.seachIcon} source={require('../../img/home/icon_homepage_search.png')}/>
                <Text style={styles.seachText}>搜索</Text>
            </TouchableOpacity>
        ),
        headerTitleStyle:{alignSelf:'center'},
        headerLeft:(
            <NavigationItem 
                title='定位' 
                titleStyle={{color:'white'}} 
                onPress={()=>{}}
            />
        ),
        headerRight:(
            <NavigationItem 
                icon={require('../../img/mine/icon_navigation_item_message_white.png')}
                onPress={()=>{}}
            />
        ),
    })
    constructor(props){
        super(props)
    }
    render(){
        return <View style={styles.container}>
        <HomeMenuView
            menuInfos={api.menuInfos}
            onMenuSelected={()=>{
                
            }}
        />
       </View>
    }
}


const styles=StyleSheet.create({
    container:{
        flex:1,
    },
    seachBar:{
        flexDirection:'row',
        width:screen.width*0.68,
        height:30,
        borderRadius:19,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'white',
    },
    seachIcon:{
        width:20,
        height:20,
        margin:5,
        tintColor:'gray',
    },
    seachText:{
        fontSize:14,
    },
})
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
    Dimensions,
} from 'react-native';
import {TabNavigator,TabBarBottom } from 'react-navigation';
import color from '../../widget/color';
import NavigationItem from '../../widget/NavigationItem';

const windowWidth=Dimensions.get('window').width;
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
                title='定位' 
                titleStyle={{color:'white'}} 
                onPress={()=>{}}
            />
        ),
    })
    constructor(props){
        super(props)
    }
    render(){
        return <View style={styles.container}>
       </View>
    }
}


const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff'
    },
    seachBar:{
        flexDirection:'row',
        width:windowWidth*0.7,
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
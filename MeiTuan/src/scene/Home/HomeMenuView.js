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
import HomeMenuItem from './HomeMenuItem';
import screen from '../../common/screen';


export default class HomeMenuView extends PureComponent{
    constructor(props){
        super(props)
    }
    render(){
        let {menuInfos,onMenuSelected}=this.props;
        let menuElements=menuInfos.map((info,index)=>(
            <HomeMenuItem 
                key={index}
                title={info.title}
                icon={info.icon}
                onPress={()=>{

                }}
            />
        ))
        let menuView=(
            <View style={styles.itemsView}>
                 {menuElements}
            </View>
        )
        return <View style={styles.container}>
        {menuView}
        </View>
    }
}


const styles=StyleSheet.create({
    container:{
      backgroundColor:'white'
    },
    itemsView:{
        flexDirection:'row',
        width:screen.width,
        flexWrap:'wrap',
    },
})
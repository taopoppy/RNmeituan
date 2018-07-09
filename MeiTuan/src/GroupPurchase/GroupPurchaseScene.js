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
import NavigationItem from '../widget/NavigationItem';
import {Heading1,Heading2,Paragraph} from '../widget/Text';
import screen from '../common/screen';
import color from '../widget/color';

export default class GroupPurchaseScene extends PureComponent{
    static navigationOptions=({navigation})=>({
        headerTitle:'团购详情',
        headerTitleStyle:{alignSelf:'center',fontSize:17}, //默认的标题字的大小是20
        headerRight:(
            <NavigationItem
                icon={require('../img/public/icon_navigation_item_share.png')}
                onPress={()=>{
                    alert('share')
                }}
            />
        )
    })
    constructor(props){
        super(props)
        //alert(JSON.stringify(this.props.navigation.state.params.info))
    }
    render(){
        return <View style={styles.container}>
            <View>
                <Image
                    style={styles.banner}
                />
                <View style={styles.TopContainer}>
                    <Heading2 style={{color:color.primary}}>¥</Heading2>
                    <Heading1 style={{marginBottom:-8}}>11.11</Heading1>
                    <Paragraph style={{marginLeft:10}}>门市价：¥12.11</Paragraph>
                </View>
            </View>

            <View />
            <View style={styles.tagContainer}>
                <Image style={{width:20,height:20}} source={require('../img/home/icon_deal_anytime_refund.png')}/>
                <Paragraph style={{color:'#89B24F'}}> 随时退</Paragraph>
                <View style={{flex:1}}/>
                <Paragraph>已售123</Paragraph>
            </View>
       </View>
    }
}


const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white'
    },
    banner:{
        width:screen.width,
        height:screen.width/2,
    },
    TopContainer:{
        padding:10,
        flexDirection:'row',
        alignItems:'flex-end',
    },
    tagContainer:{
        flexDirection:'row',
        padding:10,
        alignItems:'center',
    },
})
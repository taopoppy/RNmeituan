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
import Button from '../widget/Button';
import Separator from '../widget/Separator';

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
        let {info}=this.props.navigation.state.params;
        let imageUrl=info.imageUrl.replace('w.h','480.0');

        return <View style={styles.container}>
            <View>
                <Image
                    source={{uri:imageUrl}}
                    style={styles.banner}
                />
                <View style={styles.TopContainer}>
                    <Heading2 style={{color:color.primary}}>¥</Heading2>
                    <Heading1 style={{marginBottom:-8}}>{info.price}</Heading1>
                    <Paragraph style={{marginLeft:10}}>门市价：¥{(info.price*1.1).toFixed(0)}</Paragraph> 
                    <View style={{flex:1}}/>
                    <Button 
                        title={'立即抢购'} 
                        tilteStyle={{color:'white',fontSize:18}}
                        style={styles.buyButton}
                    />
                </View>
            </View>

            <Separator/>

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
    buyButton:{
        backgroundColor:'#fc9e28',
        width:94,
        height:36,
        borderRadius:7,
    },
    
})


//(number).toFixed(0) 保留整数

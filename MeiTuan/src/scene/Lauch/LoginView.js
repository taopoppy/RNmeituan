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
    ImageBackground,
    TouchableOpacity,
} from 'react-native';
import screen from '../../common/screen';
import LogoCell from '../../widget/LogoCell';
import {Paragraph} from '../../widget/Text';
import ThirdPartLogin from '../../widget/ThirdPartLogin';
import TextSeparator from '../../widget/TextSeparator';

export default class LoginView extends PureComponent{
    static navigationOptions=({navigation})=>({
        header:null,
    })
    constructor(props){
        super(props)
    }
    goToHome(){
        this.props.navigation.navigate('Tab')
    }
    render(){
        return <View style={styles.container}>
            <ImageBackground style={styles.imageBackground} source={require('../../img/public/icon_loginBackgroundImage.jpg')}>
                <View style={styles.onePart}>
                    <Image style={styles.logoImage} source={require('../../img/public/icon_softwareLogo.jpg')}/>
                    <LogoCell title='手机号登录' style={{marginVertical:10}} onPress={()=>{alert('手机号登录')}}/>
                    <LogoCell title='账号登录' style={{marginVertical:10}} onPress={()=>{alert('手机号登录')}}/>
                    <LogoCell title='注册' style={{marginVertical:10}} onPress={()=>{alert('手机号登录')}}/>
                    <Paragraph onPress={()=>this.goToHome()}>游客登录</Paragraph>
                </View>

                <TextSeparator title={'其他登录方式'}/>
                <View style={styles.twoPart}>
                    <ThirdPartLogin 
                        icon={require('../../img/public/icon_wechat.png')} 
                        title={'微信'}
                        onPress={()=>{alert('暂无微信登录功能')}}
                    />
                    <ThirdPartLogin 
                        icon={require('../../img/public/icon_qq.png')} 
                        title={'QQ'}
                        onPress={()=>{alert('暂无qq登录功能')}}
                    />
                </View>
            </ImageBackground>
       </View>
    }
}


const styles=StyleSheet.create({
    container:{
        flex:1,
    },
    imageBackground:{
        height:screen.height,
        width:screen.width,
    },
    onePart:{
        flex:4,
        alignItems:'center',
        justifyContent:'center',
    },
    twoPart:{
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
    },
    logoImage:{
        width:80,
        height:80,
        borderRadius:40,
        marginBottom:20,
    },
})
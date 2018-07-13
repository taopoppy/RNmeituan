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
    AsyncStorage,
} from 'react-native';
import screen from '../../common/screen';
import LogoCell from '../../widget/LogoCell';
import {Paragraph} from '../../widget/Text';
import ThirdPartLogin from '../../widget/ThirdPartLogin';
import TextSeparator from '../../widget/TextSeparator';
import * as QQ from 'react-native-qqsdk';
import api,{get_oauth_consumer_key} from '../../api';
import {saveUserHeaderImage,} from '../Mine/MineInformation';

export default class LoginView extends PureComponent{
    static navigationOptions=({navigation})=>({
        header:null,
    })
    constructor(props){
        super(props)
        this.state={
            user_access_token:'',
            user_openid:'',
        }
    }
    goToHome(){
        this.props.navigation.navigate('Tab')
    }

    /**
     * 根据promise对象从腾讯API上获取qq用户信息
     * @param {*} access_token 
     * @param {*} openid 
     */
    GetuserInformation(access_token,openid){  
            fetch(get_oauth_consumer_key(access_token,openid))
            .then((reponse)=>reponse.json())
            .then((data)=>{                        //data中包含qq用户信息，具体信息在最下面有
                alert(JSON.stringify(data))
                //saveUserHeaderImage(data.figureurl_qq_2)
            })
    }
    /**
     * 第三方qq登录，返回promise对象
     */
    qqLogin=async()=>{
        try {
            await QQ.isQQClientInstalled()   //检查是否有QQ     
            QQ.ssoLogin().then((data)=>{         //ssLogin返回的是一个promise对象
                this.GetuserInformation(data.access_token,data.userid)
            })
        } catch (error) {
            alert('登录失败'+JSON.stringify(error))
            //检查到qq没有安装就会返回{"framesTop":1,"code":"404"}
        }
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
                        onPress={this.qqLogin}
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

//(1)
// QQ.ssoLogin().then((data)=>{ })
////返回成功后的结果也是promise对象,里面包含三个参数
//{"expires_time":1539222650265,
// "access_token":"F1C068C116AB7FBA0D9FDCA4313E08DB", 
// "userid":"54BF0141BAE7E990CC6390DE83B3888B"} 

//(2)
//在qqAPI手册中是通过这样的接口来获取用户信息
//https://graph.qq.com/user/get_user_info?access_token=YOUR_ACCESS_TOKEN&oauth_consumer_key=YOUR_APP_ID&openid=YOUR_OPENID
//很明显，API中的access_token对应的就是ssLogin返回对象中的access_token
//很明显，API中的openid对应的就是ssLogin返回对象中的userid
//很明显，API中的oauth_consumer_key对应的就是我们最开始在下载qqsdk人家问我们在腾讯后台申请的APP_ID，可以去package.json中查看qq_app_id


//(3)
// ret	返回码
// msg	如果ret<0，会有相应的错误信息提示，返回数据全部用UTF-8编码。
// nickname	用户在QQ空间的昵称。
// figureurl	大小为30×30像素的QQ空间头像URL。
// figureurl_1	大小为50×50像素的QQ空间头像URL。
// figureurl_2	大小为100×100像素的QQ空间头像URL。
// figureurl_qq_1	大小为40×40像素的QQ头像URL。
// figureurl_qq_2	大小为100×100像素的QQ头像URL。需要注意，不是所有的用户都拥有QQ的100x100的头像，但40x40像素则是一定会有。
// gender	性别。 如果获取不到则默认返回"男"
// is_yellow_vip	标识用户是否为黄钻用户（0：不是；1：是）。
// vip	标识用户是否为黄钻用户（0：不是；1：是）
// yellow_vip_level	黄钻等级
// level	黄钻等级
// is_yellow_year_vip	标识是否为年费黄钻用户（0：不是； 1：是）
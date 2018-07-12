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
    ScrollView,
    RefreshControl,
} from 'react-native';
import NavigationItem from '../../widget/NavigationItem';
import color from '../../widget/color';
import {Heading2,Paragraph} from '../../widget/Text';
import SpacingView from '../../widget/SpacingView';
import DetailCell from '../../widget/DetailCell';
import screen from '../../common/screen';

export default class MineScene extends PureComponent{
    static navigationOptions=({navigation})=>({
        headerRight:(
            <View style={styles.headerRightView}>
                <NavigationItem 
                    icon={require('../../img/mine/icon_navigation_item_set_white.png')}
                    onPress={()=>{alert('设置')}}
                />
                <NavigationItem 
                    icon={require('../../img/mine/icon_navigation_item_message_white.png')}
                    onPress={()=>{alert('提示')}}
                />
            </View>
        ),
        headerLeft:null,
        headerStyle:{
            backgroundColor:color.primary,
            elevation:0,        //将导航条下面的横线去掉（Android）
            borderBottomWidth:0, //将导航条下面的横线去掉（ios）
        }
    })
    constructor(props){
        super(props)
        this.state={
            isRefreshing:false,
        }
    }
    onHeaderRefresh(){
        this.setState({
            isRefreshing:true,
        })

        setTimeout(()=>{
            this.setState({isRefreshing:false})
        },2000)
    }
    renderHeader(){
        return<View style={styles.header}>
            <Image source={require('../../img/mine/avatar.png')} style={styles.avator}/>
            <View>
                <View style={styles.avatorName}>
                    <Heading2 style={styles.userName}>taopoppy</Heading2>
                    <Image source={require('../../img/mine/beauty_technician_v15.png')}/>
                </View>
                <Paragraph style={styles.avatorInformation}>个人信息></Paragraph>
            </View>
        </View>
    }
    getDataList(){
        return (
            [
                [
                    {title: '我的钱包', subtitle: '办信用卡', image: require('../../img/mine/icon_mine_wallet.png')},
                    {title: '余额', subtitle: '￥95872385', image: require('../../img/mine/icon_mine_balance.png')},
                    {title: '抵用券', subtitle: '63', image: require('../../img/mine/icon_mine_voucher.png')},
                    {title: '会员卡', subtitle: '2', image: require('../../img/mine/icon_mine_membercard.png')}
                ],
                [
                    {title: '好友去哪', image: require('../../img/mine/icon_mine_friends.png')},
                    {title: '我的评价', image: require('../../img/mine/icon_mine_comment.png')},
                    {title: '我的收藏', image: require('../../img/mine/icon_mine_collection.png')},
                    {title: '会员中心', subtitle: 'v15', image: require('../../img/mine/icon_mine_membercenter.png')},
                    {title: '积分商城', subtitle: '好礼已上线', image: require('../../img/mine/icon_mine_member.png')}
                ],
                [
                    {title: '客服中心', image: require('../../img/mine/icon_mine_customerService.png')},
                    {title: '关于美团', subtitle: '我要合作', image: require('../../img/mine/icon_mine_aboutmeituan.png')}
                ]
            ]
        )
    } 
    renderCells(){                              
        let cells=[];
        let dataList=this.getDataList();
        for(let i=0;i<dataList.length;i++){
            let sublist=dataList[i];
            for(let j=0;j<sublist.length;j++){
                let data=sublist[j]
                let cell=(
                    <DetailCell 
                        key={data.title}
                        title={data.title}
                        subtitle={data.subtitle} 
                        image={data.image}
                    />
                )
                cells.push(cell)
            }
            cells.push(<SpacingView key={i}/>)
        }
        return(                             //新的写法，将视图写到数组中
            <View> 
                {cells}                  
            </View>   
        )
    }
    render(){                              //scrollView上面那个view是用来遮挡下拉刷新露出的白色背景  
        return <View style={styles.container}>   
        <View style={styles.headerBackgroud}/>       
        <ScrollView
            refreshControl={
                <RefreshControl
                    refreshing={this.state.isRefreshing}
                    onRefresh={()=>{this.onHeaderRefresh()}}
                    tintColor='gray'
                />
            }
        >
            {this.renderHeader()}
            <SpacingView />
            {this.renderCells()}
        </ScrollView>
       </View>
    }
}


const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white'
    },
    header:{
        backgroundColor:color.primary,
        paddingBottom:20,
        flexDirection:'row',
        alignItems:'center',
        padding:10,
    },
    headerRightView:{
        flexDirection:'row'
    },
    avatorName:{
        flexDirection:'row',
        alignItems:'center',
    },
    avatorInformation:{
        color:'white',
        marginTop:10,
    },
    avator:{
        width:50,
        height:50,
        borderRadius:25,
        marginRight:10,
        borderWidth:2,
        borderColor:'#51d3c6',
    },
    userName:{
        color:'white',
    },
    headerBackgroud:{
        //绝对布局，不会影响其他组件的布局
        position:'absolute',
        width:screen.width,
        height:screen.height/2,
        backgroundColor:color.primary,
    },
})
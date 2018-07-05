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
} from 'react-native';
import {TabNavigator,TabBarBottom } from 'react-navigation';
import HomeMenuItem from './HomeMenuItem';
import screen from '../../common/screen';
import PageControl from 'react-native-page-control';
import color from '../../widget/color';


export default class HomeMenuView extends PureComponent{
    constructor(props){
        super(props)
        this.state={
            currentPage:0,
        }
    }
    _onScoll(e){
        let x=e.nativeEvent.contentOffset.x;                   //x为偏移量
        //alert(x+':'+screen.width);                           //第一页的偏移量为0，第二页的偏移量为360，这里屏幕（我的）宽度也为360
        let currentPage=Math.round(x/screen.width)             //偏移量除以屏幕宽度进行四舍五入
        if(this.state.currentPage!=currentPage){
            this.setState({
                currentPage:currentPage
            })
        }
       
    }
    render(){
        let {menuInfos,onMenuSelected}=this.props;
        let pageCount=Math.ceil(menuInfos.length/10)     //向上取整所以是2页
        let menuElements=menuInfos.map((info,index)=>(   //menuElements里面包含了17个模块
            <HomeMenuItem 
                key={index}
                title={info.title}
                icon={info.icon}
                onPress={()=>{
                    onMenuSelected(index)
                }}
            />
        ))

        let menuViews=[];
        for(let i=0;i<pageCount;i++){
            let elementsPerPage=menuElements.slice(i*10,i*10+10)     //每10个一取,作为menViews数组中的一员
            let menuView=(
                <View key={i} style={styles.itemsView}>
                     {elementsPerPage}
                </View>
            )
            menuViews.push(menuView)                             
        }
        return <View style={styles.container}>
        <ScrollView
            horizontal={true}   //水平滑动                
            pagingEnabled={true}   //翻页功能
            showsHorizontalScrollIndicator={false} //没有水平的滑动条
            onScroll={(e)=>{this._onScoll(e)}}    //滚动的时候回调的函数
        >
            {menuViews}
        </ScrollView>
        <PageControl
            numberOfPages={pageCount}                      //页数
            currentPage={this.state.currentPage}           //当前页数
            pageIndicatorTintColor='gray'                  //未选中状态下的小圆点的颜色
            currentPageIndicatorTintColor={color.primary}  //当前选中状态下的小圆点的颜色
            style={styles.pageControl} 
        >
        </PageControl>
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
    pageControl:{
        margin:10,
    }
})
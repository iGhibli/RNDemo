/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, { Component } from 'react'
import Swiper from 'react-native-swiper';

import {
    View,
    Image,
    Text,
    TouchableHighlight,
    ScrollView,
    StyleSheet
} from 'react-native'

var sliderImgs = [
    'http://images3.c-ctrip.com/SBU/apph5/201505/16/app_home_ad16_640_128.png',
    'http://images3.c-ctrip.com/rk/apph5/C1/201505/app_home_ad49_640_128.png',
    'http://images3.c-ctrip.com/rk/apph5/D1/201506/app_home_ad05_640_128.jpg'
];

var Images = [
    'http://webresource.c-ctrip.com/ResCRMOnline/R5/html5/images/zzz_pic_salead01.png',
    'http://images3.c-ctrip.com/rk/apph5/B1/201505/app_home_ad06_310_120.jpg'
];

var BUIcon = [
    'https://raw.githubusercontent.com/vczero/vczero.github.io/master/ctrip/%E6%9C%AA%E6%A0%87%E9%A2%98-1.png',
    'https://raw.githubusercontent.com/vczero/vczero.github.io/master/ctrip/feiji.png',
    'https://raw.githubusercontent.com/vczero/vczero.github.io/master/ctrip/lvyou.png',
    'https://raw.githubusercontent.com/vczero/vczero.github.io/master/ctrip/gonglue.png'
];

class Slider extends React.Component {
    render() {
        return (
            <Swiper style={styles.wrapper} showsButtons={false} autoplay={true} height={150} showsPagination={false}>
                <Image style={[styles.slide,]} source={{uri: sliderImgs[0]}}></Image>
                <Image style={[styles.slide,]} source={{uri: sliderImgs[1]}}></Image>
                <Image style={[styles.slide,]} source={{uri: sliderImgs[2]}}></Image>
            </Swiper>
        );
    }
}

export default class Home extends Component {
    render() {
        return(
            <ScrollView>
                <View style={styles.container}>
                    <Slider/>
                    // part.1
                    <View style={[styles.sub_view, styles.sub_red]}>
                        // 1.1
                        <TouchableHighlight underlayColor={'#FA6778'} style={{flex: 1}}>
                            <View style={[styles.sub_flex, styles.sub_borderRight]}>
                                <View style={[styles.sub_con_flex, styles.sub_text]}>
                                    <Text style={[styles.font16]}>酒店</Text>
                                </View>
                                <View style={[styles.sub_con_flex]}>
                                    <Image style={[styles.sub_icon_img]} source={{uri:BUIcon[0]}}></Image>
                                </View>
                            </View>
                        </TouchableHighlight>
                        // 1.2
                        <View style={[styles.sub_flex, styles.sub_borderRight]}>
                            <View style={[styles.sub_con_flex, styles.sub_borderBottom, styles.sub_text]}>
                                <Text style={styles.font16}>海外</Text>
                            </View>
                            <View style={[styles.sub_con_flex, styles.sub_text]}>
                                <Text style={styles.font16}>周边</Text>
                            </View>
                        </View>
                        // 1.3
                        <View style={[styles.sub_flex]}>
                            <View style={[styles.sub_con_flex, styles.sub_borderBottom, styles.sub_text]}>
                                <Text style={styles.font16}>团购.特惠</Text>
                            </View>
                            <View style={[styles.sub_con_flex, styles.sub_text]}>
                                <Text style={styles.font16}>客栈.公寓</Text>
                            </View>
                        </View>
                    </View>

                    // part.2
                    <View style={[styles.sub_view, styles.sub_blue]}>
                        // 2.1
                        <TouchableHighlight underlayColor={'#FA6778'} style={{flex: 1}}>
                            <View style={[styles.sub_flex, styles.sub_borderRight]}>
                                <View style={[styles.sub_con_flex, styles.sub_text]}>
                                    <Text style={[styles.font16]}>机票</Text>
                                </View>
                                <View style={[styles.sub_con_flex]}>
                                    <Image style={[styles.sub_icon_img]} source={{uri:BUIcon[1]}}></Image>
                                </View>
                            </View>
                        </TouchableHighlight>
                        // 2.2
                        <View style={[styles.sub_flex, styles.sub_borderRight]}>
                            <View style={[styles.sub_con_flex, styles.sub_borderBottom, styles.sub_text]}>
                                <Text style={styles.font16}>火车票</Text>
                            </View>
                            <View style={[styles.sub_con_flex, styles.sub_text]}>
                                <Text style={styles.font16}>接送机</Text>
                            </View>
                        </View>
                        // 2.3
                        <View style={[styles.sub_flex]}>
                            <View style={[styles.sub_con_flex, styles.sub_borderBottom, styles.sub_text]}>
                                <Text style={styles.font16}>汽车票</Text>
                            </View>
                            <View style={[styles.sub_con_flex, styles.sub_text]}>
                                <Text style={styles.font16}>自驾.专车</Text>
                            </View>
                        </View>
                    </View>

                    // part.3
                    <View style={[styles.sub_view, styles.sub_green]}>
                        // 3.1
                        <TouchableHighlight underlayColor={'#FA6778'} style={{flex: 1}}>
                            <View style={[styles.sub_flex, styles.sub_borderRight]}>
                                <View style={[styles.sub_con_flex, styles.sub_text]}>
                                    <Text style={[styles.font16]}>旅游</Text>
                                </View>
                                <View style={[styles.sub_con_flex]}>
                                    <Image style={[styles.sub_icon_img]} source={{uri:BUIcon[2]}}></Image>
                                </View>
                            </View>
                        </TouchableHighlight>
                        // 3.2
                        <View style={[styles.sub_flex, styles.sub_borderRight]}>
                            <View style={[styles.sub_con_flex, styles.sub_borderBottom, styles.sub_text]}>
                                <Text style={styles.font16}>门票.玩乐</Text>
                            </View>
                            <View style={[styles.sub_con_flex, styles.sub_text]}>
                                <Text style={styles.font16}>出境WiFi</Text>
                            </View>
                        </View>
                        // 3.3
                        <View style={[styles.sub_flex]}>
                            <View style={[styles.sub_con_flex, styles.sub_borderBottom, styles.sub_text]}>
                                <Text style={styles.font16}>邮轮</Text>
                            </View>
                            <View style={[styles.sub_con_flex, styles.sub_text]}>
                                <Text style={styles.font16}>签证</Text>
                            </View>
                        </View>
                    </View>

                    // part.4
                    <View style={[styles.sub_view, styles.sub_yellow]}>
                        // 4.1
                        <TouchableHighlight underlayColor={'#FA6778'} style={{flex: 1}}>
                            <View style={[styles.sub_flex, styles.sub_borderRight]}>
                                <View style={[styles.sub_con_flex, styles.sub_text]}>
                                    <Text style={[styles.font16]}>攻略</Text>
                                </View>
                                <View style={[styles.sub_con_flex]}>
                                    <Image style={[styles.sub_icon_img]} source={{uri:BUIcon[3]}}></Image>
                                </View>
                            </View>
                        </TouchableHighlight>
                        // 4.2
                        <View style={[styles.sub_flex, styles.sub_borderRight]}>
                            <View style={[styles.sub_con_flex, styles.sub_borderBottom, styles.sub_text]}>
                                <Text style={styles.font16}>周末游</Text>
                            </View>
                            <View style={[styles.sub_con_flex, styles.sub_text]}>
                                <Text style={styles.font16}>礼品卡</Text>
                            </View>
                        </View>
                        // 4.3
                        <View style={[styles.sub_flex]}>
                            <View style={[styles.sub_con_flex, styles.sub_borderBottom, styles.sub_text]}>
                                <Text style={styles.font16}>美食.购物</Text>
                            </View>
                            <View style={[styles.sub_con_flex, styles.sub_text]}>
                                <Text style={styles.font16}>更多</Text>
                            </View>
                        </View>
                    </View>
                    // part.5
                    <View style={styles.img_view}>
                        <View style={[styles.img_flex, {borderRightWidth: 0.5}]}>
                            <Image style={[styles.img_wh]} source={{uri: Images[0]}}></Image>
                        </View>
                        <View style={[styles.img_flex, {borderLeftWidth: 0}]}>
                            <Image style={[styles.img_wh]} source={{uri: Images[1]}}></Image>
                        </View>
                    </View>

                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#F2F2F2',
        flex:1,
        // marginTop: 64
    },
    //slider
    wrapper: {
        height:80
    },
    slide: {
        height:80,
        // 在React-Native中图片的大小是不会根据给定一个宽度或者高度而自适应大小的，
        // 因此我们需要让图片根据宽度或者高度来自适应，
        // 那么可以使用resizeMode:Image.resizeMode.contain。
        // facebook提示错误信息的样式表中也没有提及，文档中也没有提及。
        // 所以后续还有不少的坑需要大家去一起探索
        resizeMode: Image.resizeMode.contain
    },
    sub_view: {
        height:84,
        marginLeft: 5,
        marginRight:5,
        borderWidth:1,
        borderRadius:5,
        marginBottom:10,
        flexDirection:'row'
    },
    sub_red:{
        backgroundColor: '#FA6778',
        borderColor:'#FA6778',
        marginTop:-70
    },
    sub_blue:{
        backgroundColor: '#3D98FF',
        borderColor:'#3D98FF'
    },
    sub_green:{
        backgroundColor: '#5EBE00',
        borderColor:'#5EBE00'
    },
    sub_yellow:{
        backgroundColor: '#FC9720',
        borderColor:'#FC9720'
    },
    sub_flex:{
        flex:1
    },
    sub_borderRight:{
        borderColor:'#fff',
        borderRightWidth: 0.5
    },
    sub_borderBottom: {
        borderBottomWidth:0.5,
        borderBottomColor:'#FFF'
    },
    sub_con_flex:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    sub_text: {
        justifyContent:'center'
    },
    font16: {
        fontSize:17,
        color:'#FFF',
        fontWeight:'900'
    },
    sub_icon_img: {
        height:40,
        width:40,
        resizeMode:Image.resizeMode.contain
    },
    img_view: {
        height: 62,
        marginLeft: 5,
        marginRight: 5,
        marginBottom : 20,
        backgroundColor: '#FFF',
        flexDirection: 'row'
    },
    img_flex: {
        flex:1,
        borderWidth:1,
        borderColor:'#CCC'
    },
    img_wh: {
        height: 59,
        borderRightWidth: 0,
        resizeMode: Image.resizeMode.contain
    }


});

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
    StyleSheet
} from 'react-native'

var sliderImgs = [
    'http://images3.c-ctrip.com/SBU/apph5/201505/16/app_home_ad16_640_128.png',
    'http://images3.c-ctrip.com/rk/apph5/C1/201505/app_home_ad49_640_128.png',
    'http://images3.c-ctrip.com/rk/apph5/D1/201506/app_home_ad05_640_128.jpg'
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
            <View style={{flex:1, backgroundColor: '#F2F2F2', marginTop: 64}}>
                <View style={{height: 80}}>
                    <Slider/>
                </View>
                <View style={{flexDirection: 'column', height: 400}}>
                    // part.1
                    <View style={{flex: 1, backgroundColor: 'red'}}>
                        <TouchableHighlight underlayColor={'#FA6778'} style={{flex: 1}}>
                            <View style={[styles.sbu_flex, styles.sbu_borderRight]}>
                                <View>
                                    <Text>酒店</Text>
                                </View>
                                <View>
                                    <Image style={{height: 40, width: 40, resizeMode:Image.resizeMode.contain}} source={{uri:BUIcon[0]}}></Image>
                                </View>
                            </View>
                        </TouchableHighlight>
                    </View>
                    // part.2
                    <View style={{flex: 1, backgroundColor: 'orange'}}>
                        <TouchableHighlight underlayColor={'#FA6778'} style={{flex: 1}}>
                            <View style={[styles.sbu_flex, styles.sbu_borderRight]}>
                                <View>
                                    <Text>酒店</Text>
                                </View>
                                <View>
                                    <Image style={{height: 40, width: 40, resizeMode:Image.resizeMode.contain}} source={{uri:BUIcon[0]}}></Image>
                                </View>
                            </View>
                        </TouchableHighlight>
                    </View>
                    // part.3
                    <View style={{flex: 1, backgroundColor: 'yellow'}}>
                        <TouchableHighlight underlayColor={'#FA6778'} style={{flex: 1}}>
                            <View style={[styles.sbu_flex, styles.sbu_borderRight]}>
                                <View>
                                    <Text>酒店</Text>
                                </View>
                                <View>
                                    <Image style={{height: 40, width: 40, resizeMode:Image.resizeMode.contain}} source={{uri:BUIcon[0]}}></Image>
                                </View>
                            </View>
                        </TouchableHighlight>
                    </View>
                    // part.4
                    <View style={{flex: 1, backgroundColor: 'green'}}>
                        <TouchableHighlight underlayColor={'#FA6778'} style={{flex: 1}}>
                            <View style={[styles.sbu_flex, styles.sbu_borderRight]}>
                                <View>
                                    <Text>酒店</Text>
                                </View>
                                <View>
                                    <Image style={{height: 40, width: 40, resizeMode:Image.resizeMode.contain}} source={{uri:BUIcon[0]}}></Image>
                                </View>
                            </View>
                        </TouchableHighlight>
                    </View>
                </View>

                <Text>Hello, Jason!</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    //slider
    wrapper: {
        height:80,
    },
    slide: {
        height:80,
        resizeMode: Image.resizeMode.contain,
    }
});

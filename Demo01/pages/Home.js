/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, { Component } from 'react'
import Swiper from 'react-native-swiper';

import {
    View,
    Image,
    Text, StyleSheet
} from 'react-native'

var sliderImgs = [
    'http://images3.c-ctrip.com/SBU/apph5/201505/16/app_home_ad16_640_128.png',
    'http://images3.c-ctrip.com/rk/apph5/C1/201505/app_home_ad49_640_128.png',
    'http://images3.c-ctrip.com/rk/apph5/D1/201506/app_home_ad05_640_128.jpg'
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
            <View style={{flex:1, backgroundColor: 'red', marginTop: 64}}>
                <Slider/>
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

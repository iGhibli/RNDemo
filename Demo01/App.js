/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, { Component } from 'react';
import Home from './pages/Home.js';

import {
    StyleSheet,
    NavigatorIOS,
} from 'react-native';

export default class App extends Component {
    render() {
        return (
            <NavigatorIOS
                style={styles.container}
                initialRoute={{
                    title: 'HOME',
                    component: Home
                }}
            />
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, { Component } from 'react';

import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class App extends Component {
  
  render() {
    return (
      <View style={styles.style_0}>
        
        <View style={styles.style_1}>
          <Text style={{marginTop: 40, fontSize: 25, backgroundColor: 'skyblue'}}>1 / 4高</Text>
          <Text style={{marginTop: 40, fontSize: 25, backgroundColor: 'orange'}}>1 / 4高</Text>
        </View>
        
        <View style={[styles.style_1, {flexDirection: 'column'}]}>
          <Text style={{marginTop: 40, fontSize: 25, backgroundColor: 'skyblue'}}>1 / 4高</Text>
          <Text style={{marginTop: 40, fontSize: 25, backgroundColor: 'orange'}}>1 / 4高</Text>
        </View>
        <View style={styles.style_alignItems}>
          <View style={styles.style_alignItems1}><Text>方块居中</Text></View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  style_0: {
    flex: 1
  },
  style_1: {
    flex: 5,
    flexDirection: 'row',
    height: 40,
    borderWidth: 1,
    borderColor: 'red'
  },
  style_alignItems: {
    flex: 10,
    borderWidth: 3,
    borderColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center'
  },
  style_alignItems1: {
    borderWidth: 3,
    borderColor: 'blue',
    height: 50
  }
});
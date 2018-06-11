/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  Image,
  View
} from 'react-native';

var MOCKED_MOVIES_DATA = [
	{title: '标题', year: '2015', posters: {thumbnail: 'https://i.loli.net/2017/11/09/5a046546a2a1f.jpg'}},
];

type Props = {};
export default class App extends Component<Props> {
  render() {
    var movie = MOCKED_MOVIES_DATA[0];
    return (
      <View style={styles.container}>
      	<Image
        	source={{uri: movie.posters.thumbnail}} 
        	style={styles.thumbnail}
        />
        <View style={styles.rightContainer}>
        	<Text style={styles.title}>
        		{movie.title}
        	</Text>
        	<Text style={styles.year}>
        		{movie.year}
        	</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  rightContainer: {
  	flex: 1,
  },
  thumbnail: {
    width: 53,
    height: 81,
  },
  title: {
  	fontSize: 20,
  	marginBottom: 8,
  	textAlign: 'center',
  },
  year: {
  	textAlign: 'center',
  },
});
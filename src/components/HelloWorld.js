import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class HelloWorld extends Component {
  render() {
    return (
      <View style={{ flex: 1,  backgroundColor:"red", justifyContent: "center", alignItems: "center" }}>
        <Text>Hello, world. I am react!</Text>
      </View>
    );
  }
}

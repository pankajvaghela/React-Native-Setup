import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class App extends Component {
  
  render() {
    return (
      <View style={{ flex: 1,  backgroundColor:"#00b100", flexDirection:"column" }}>
      <View style={{ flex:1,  backgroundColor:"#00b100", flexDirection:"column" }}>
        <View style={{flex:2, backgroundColor:"#ff0000"}}></View>
        <View style={{flex:2, backgroundColor:"#00ff00"}}></View>
        <View style={{flex:1, backgroundColor:"#8888aa"}}></View>
      </View>      
      <View style={{ flex: 1,  backgroundColor:"#00b100", flexDirection:"row" }}>
        <View style={{flex:2, backgroundColor:"#ff0000"}}></View>
        <View style={{flex:2, backgroundColor:"#00ff00"}}></View>
        <View style={{flex:1, backgroundColor:"#0000ff"}}></View>
      </View>
      <View style={{ height:100,  backgroundColor:"#00b100", flexDirection:"column" }}>
        <View style={{flex:2, backgroundColor:"#ff7777"}}></View>
        <View style={{flex:2, backgroundColor:"#00ff00"}}></View>
        <View style={{flex:1, backgroundColor:"#0000ff"}}></View>
      </View>
      </View>
    );
  }
}

import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class App extends Component {
  
  render() {
    return (
      <>
        <View style={{ flex: 1,  backgroundColor:"#cccccc", flexDirection:"column"}}>
          <View style={{ height:100, backgroundColor:"#cccccc", flexDirection:"row", justifyContent:"flex-start" ,  alignItems:"flex-start"}}>
            <View style={{height:50, width:50, backgroundColor:"#ff0000"}}></View>
            <View style={{height:50, width:50, backgroundColor:"#00ff00"}}></View>
            <View style={{height:50, width:50, backgroundColor:"#8888aa"}}></View>
          </View>
          <View style={{ height:100, backgroundColor:"#aaaaaa", flexDirection:"row", justifyContent:"space-between",  alignItems:"center" }}>
            <View style={{height:50, width:50, backgroundColor:"#ff0000", marginTop:20}}></View>
            <View style={{height:50, width:50, backgroundColor:"#00ff00"}}></View>
            <View style={{height:50, width:50, backgroundColor:"#8888aa"}}></View>
          </View>
          <View style={{ height:100, backgroundColor:"#cccccc", flexDirection:"row", justifyContent:"space-around",  alignItems:"flex-end" }}>
            <View style={{height:50, width:50, backgroundColor:"#ff0000"}}></View>
            <View style={{height:50, width:50, backgroundColor:"#00ff00"}}></View>
            <View style={{height:50, width:50, backgroundColor:"#8888aa"}}></View>
          </View>
          <View style={{ height:100, backgroundColor:"#aaaaaa", flexDirection:"row", justifyContent:"space-evenly",  alignItems:"baseline", overflow:"scroll" }}>
            <View style={{height:50, width:50, backgroundColor:"#ff0000", marginTop:20}}></View>
            <View style={{height:50, width:50, backgroundColor:"#00ff00"}}></View>
            <View style={{height:50, width:50, backgroundColor:"#8888aa"}}></View>
          </View>
          <View style={{ height:100, backgroundColor:"#cccccc", flexDirection:"row", justifyContent:"flex-end",  alignItems:"center" }}>
            <View style={{height:50, width:50, backgroundColor:"#ff0000"}}></View>
            <View style={{height:50, width:50, backgroundColor:"#00ff00"}}></View>
            <View style={{height:50, width:50, backgroundColor:"#8888aa"}}></View>
          </View>

        </View>
      </>
    );
  }
}


import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class App extends Component {
  
  render() {
    return (
      <>
        <View style={{ flex: 1,  backgroundColor:"#cccccc", flexDirection:"column"}}>
          <View style={{ height:100, backgroundColor:"#cccccc", flexDirection:"row", justifyContent:"flex-start" }}>
            <View style={{height:50, width:50, backgroundColor:"#ff0000"}}></View>
            <View style={{height:50, width:50, backgroundColor:"#00ff00"}}></View>
            <View style={{height:50, width:50, backgroundColor:"#8888aa"}}></View>
          </View>
          <View style={{ height:100, backgroundColor:"#cccccc", flexDirection:"row-reverse", justifyContent:"space-between" }}>
            <View style={{height:50, width:50, backgroundColor:"#ff0000"}}></View>
            <View style={{height:50, width:50, backgroundColor:"#00ff00"}}></View>
            <View style={{height:50, width:50, backgroundColor:"#8888aa"}}></View>
          </View>
          <View style={{ height:100, backgroundColor:"#cccccc", flexDirection:"row-reverse", justifyContent:"space-around" }}>
            <View style={{height:50, width:50, backgroundColor:"#ff0000"}}></View>
            <View style={{height:50, width:50, backgroundColor:"#00ff00"}}></View>
            <View style={{height:50, width:50, backgroundColor:"#8888aa"}}></View>
          </View>
          <View style={{ height:100, backgroundColor:"#cccccc", flexDirection:"row-reverse", justifyContent:"space-evenly" }}>
            <View style={{height:50, width:50, backgroundColor:"#ff0000"}}></View>
            <View style={{height:50, width:50, backgroundColor:"#00ff00"}}></View>
            <View style={{height:50, width:50, backgroundColor:"#8888aa"}}></View>
          </View>
          <View style={{ height:200, backgroundColor:"#cccccc", flexDirection:"row", justifyContent:"flex-end" }}>
            <View style={{ width:200, backgroundColor:"#cccccc", flexDirection:"column", justifyContent:"flex-start" }}>
              <View style={{height:50, width:50, backgroundColor:"#ff0000"}}></View>
              <View style={{height:50, width:50, backgroundColor:"#00ff00"}}></View>
              <View style={{height:50, width:50, backgroundColor:"#8888aa"}}></View>
            </View>
            <View style={{ width:200, backgroundColor:"#cccccc", flexDirection:"column-reverse", justifyContent:"flex-end" }}>
              <View style={{height:50, width:50, backgroundColor:"#ff0000"}}></View>
              <View style={{height:50, width:50, backgroundColor:"#00ff00"}}></View>
              <View style={{height:50, width:50, backgroundColor:"#8888aa"}}></View>
            </View>

          </View>
        </View>
      </>
    );
  }
}


{/* 
  Initial setup

  <View style={{ flex: 1,  backgroundColor:"#cccccc", flexDirection:"column"}}>
<View style={{ height:150, backgroundColor:"#cccccc", flexDirection:"row", justifyContent:"flex-start" }}>
  <View style={{height:50, width:50, backgroundColor:"#ff0000"}}></View>
  <View style={{height:50, width:50, backgroundColor:"#00ff00"}}></View>
  <View style={{height:50, width:50, backgroundColor:"#8888aa"}}></View>
</View>
<View style={{ height:200, backgroundColor:"#cccccc", flexDirection:"row-reverse", justifyContent:"flex-start" }}>
  <View style={{height:50, width:50, backgroundColor:"#ff0000"}}></View>
  <View style={{height:50, width:50, backgroundColor:"#00ff00"}}></View>
  <View style={{height:50, width:50, backgroundColor:"#8888aa"}}></View>
</View>
<View style={{ height:200, backgroundColor:"#cccccc", flexDirection:"column", justifyContent:"flex-start" }}>
  <View style={{height:50, width:50, backgroundColor:"#ff0000"}}></View>
  <View style={{height:50, width:50, backgroundColor:"#00ff00"}}></View>
  <View style={{height:50, width:50, backgroundColor:"#8888aa"}}></View>
</View>
<View style={{ height:200, backgroundColor:"#cccccc", flexDirection:"column-reverse", justifyContent:"flex-start" }}>
  <View style={{height:50, width:50, backgroundColor:"#ff0000"}}></View>
  <View style={{height:50, width:50, backgroundColor:"#00ff00"}}></View>
  <View style={{height:50, width:50, backgroundColor:"#8888aa"}}></View>
</View>
</View> */}
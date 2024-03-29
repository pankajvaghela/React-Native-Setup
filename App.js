import React, { Component } from 'react';
import { Text, View } from 'react-native';

import HelloWorld from './src/components/HelloWorld';


function CricketPitch(props){
  return (
      <>
        <View style={{ flex:1, height:50, width:10,marginLeft:props.lM, marginRight:props.rM, backgroundColor: "#ffffff"}}></View>         
      </>
  );
}
function CricketWickets(){
  let wM = 7;
  return (
      <>
        <CricketPitch lM={20} rM={wM} ></CricketPitch>
        <CricketPitch lM={wM} rM={wM} ></CricketPitch>
        <CricketPitch lM={wM} rM={20} ></CricketPitch>
      </>
  );
}

let skew = "45deg";
  
export default class App extends Component {
  
  render() {
    return (
      <View style={{ flex: 1,  backgroundColor:"#00b100", flexDirection:"column", justifyContent: "center", alignItems: "center" }}>
        <Text style={{color:"white", marginTop:50, marginBottom:50}}>Let's play cricket!</Text>
        <View style={{ height:50, flexDirection:"row",justifyContent:"space-between", width:100, zIndex:5, transform:[{skewY: skew}], marginTop:5, marginBottom:-15, marginLeft:5,marginRight:5}}>
          <CricketWickets ></CricketWickets>
        </View>
        <View style={{ flex: 2, flexDirection:"column-reverse",  backgroundColor:"#9f6934" }}>
          <View style={{ height:50, flexDirection:"row",justifyContent:"space-between", width:100, transform:[{skewX: skew}], marginTop:5, marginBottom:15, marginLeft:5,marginRight:5}}>
            <CricketWickets></CricketWickets>
          </View>  
        </View>

        <Text style={{flex:1}}></Text>

        <View style={{flex:1 , backgroundColor:"blue", width:200}}>
          <View style={{width:100, height:100, backgroundColor:"#ff0000", transform:[{skewY: skew}]}}></View>
        </View>
      </View>
    );
  }
}

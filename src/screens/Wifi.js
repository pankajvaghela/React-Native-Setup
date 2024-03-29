import React, { Component } from 'react';
import { Text, View, FlatList, ActivityIndicator, PermissionsAndroid } from 'react-native';
import wifi from 'react-native-android-wifi';
// import MyAccelerometer from '../components/Accelerometer';



async function wifiPer(){

  let promise = new Promise(async (resolve, reject) => {

    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          'title': 'Wifi networks',
          'message': 'We need your permission in order to find wifi networks'
        }
      )
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        // console.log("Thank you for your permission! :)");

        wifi.loadWifiList((wifiStringList) => {
          var wifiArray = JSON.parse(wifiStringList);
            resolve(wifiArray);
            // console.log(wifiArray);
          },
          (error) => {        
            reject(error);
          }
        );
      } else {
        // console.log("You will not able to retrieve wifi available networks list");
        return [];
      }
    } catch (err) {
      console.warn(err)
      reject(err);
    }
  });

  return promise;

}

export default class App extends Component {
  

  constructor(props){
    super(props);
    this.state = {
      wifilist : []
    }


  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.setWifiList(),
      500
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  
  setWifiList(){
    let cp = this;
    
    wifiPer().then(function(val){
      if(val !== undefined){
        let a = {
          wifilist : val
        };
        // console.log(a);
        cp.setState(a)
      }
    }).catch(function(err){
      console.log(err)
    });

    
  }

  render() {


    return (
      <View style={{ flex: 1,  backgroundColor:"#00b100", flexDirection:"column", justifyContent: "center", alignItems: "center" }}>
        <Text style={{color:"white", marginTop:50, marginBottom:50}}>Let's chek wifi Strength!</Text>


        <View style={{flex:1}} >
          {
            this.state.wifilist.map((item, id) => <Text key={id}>{item.BSSID}, {item.level}, {item.SSID}, {item.SSID},</Text> )
          }
        </View>

        {/* <View style={{flex:1 , backgroundColor:"blue", width:200}}> */}
        {/* <MyAccelerometer /> */}
        {/* </View> */}
      </View>
    );
  }
}

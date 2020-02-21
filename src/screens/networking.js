import React, { Component } from 'react';
import {  View } from 'react-native';
import FetchExample from '../components/Network1';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

  render() {
    return (
            <View style={{ height:"100%", justifyContent:"center", flexDirection:"column"}}>
                <FetchExample style={{flex: 1, backgroundColor: "#cccccc"}}></FetchExample>
            </View> 
    );
  }
}
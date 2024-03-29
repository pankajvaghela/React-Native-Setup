import React, { Component } from 'react';
import {  View } from 'react-native';
import FlatList from '../components/ListFlat';
import SectionList from '../components/ListSection';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

  render() {
    return (
            <View style={{ height:"100%", justifyContent:"center", flexDirection:"column"}}>
                <FlatList style={{flex: 1, backgroundColor: "#cccccc"}}></FlatList>
                <SectionList style={{flex: 1, backgroundColor: "#aaaaaa"}}></SectionList>
            </View> 
    );
  }
}
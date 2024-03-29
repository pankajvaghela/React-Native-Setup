import React, { Component } from 'react';
import { ScrollView, Text, TextInput, View } from 'react-native';
import ButtonBasics from '../components/ButtonBasics';
import Touchables from '../components/Touchables';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

  render() {
    return (
        <ScrollView>

      <View style={{ justifyContent:"center", flexDirection:"column"}}>
          
          <View style={{padding: 10, alignItems:"center", justifyContent:"center"}}>
            <Text>Enter some text here</Text>
            <TextInput
            style={{height: 40}}
            placeholder="Type here to translate!"
            onChangeText={(text) => { this.setState({text})}}
            value={this.state.text}
            />
            <Text style={{padding: 10, fontSize: 42}}>
            {this.state.text.split(' ').map((word) => word && '*').join(' ')}
            </Text>
          </View>
 
          <ButtonBasics style={{flex:1, width:"100%"}}></ButtonBasics>
          <Touchables style={{flex:1, width:"100%"}}></Touchables>
      </View>
      </ScrollView>
 
    );
  }
}
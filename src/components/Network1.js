import React from 'react';
import { FlatList, ActivityIndicator, Text, View  } from 'react-native';
import axios from 'axios';

export default class FetchExample extends React.Component {

  constructor(props){
    super(props);
    this.state ={ isLoading: true}
  }

  componentDidMount(){
    
     axios({
         url:'https://facebook.github.io/react-native/movies.json',
         method:"GET"
        })
        .then((r) => {
            console.log("response",r.data);
            
            this.setState({
                isLoading: false,
                dataSource: r.data.movies,
            }, function(){

            });
        })
        .catch((error) =>{
            console.error(error);
        });
  }



  render(){

    if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      )
    }

    return(
      <View style={{flex: 1, paddingTop:20}}>
        <FlatList
          data={this.state.dataSource}
          renderItem={({item}) => <Text>{item.title}, {item.releaseYear}</Text>}
          keyExtractor={({id}, index) => id}
        />
      </View>
    );
  }
}

import React, { Component } from 'react';
import { Text, View, TextInput } from 'react-native';
import axios from 'axios';
// import { isArray, isObject } from 'util';



let inVal = "";
let data = "";
async function wikiSearch(searchText){
  var searchURL = "https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrsearch=" + searchText + "&gsrlimit=15&prop=extracts&exsentences=3&exintro=&explaintext&exlimit=max";
  console.log(searchURL);

  
  return axios.get(searchURL)
  .then(res => {
    return data = res.data;
    // this.setState({ persons });
  })
  // wikiResponse.done(function(data) {
  //     console.log(data);
  // }).fail(function(err) {
  //     alert("The call has been rejected");
  // });
  
}
// $(".search-form").submit(function() {
//   event.preventDefault(); 
//   var searchText = $('#search').val();
//   var searchURL = "https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrsearch=" + searchText + "&gsrlimit=15&prop=extracts&exsentences=3&exintro=&explaintext&exlimit=max&callback=JSON_CALLBACK";
//   console.log(searchURL);
//   var wikiResponse = wikiAjax(searchURL);
//   wikiResponse.done(function(data) {
//       console.log(data);
//   }).fail(function(err) {
//       alert("The call has been rejected");
//   });
// });

function pagesRows(pages){

  let keys = Object.keys(pages);

  // console.log(keys);

  let rN =         keys.map((i) => {
    return (<Text key={i}>{i}</Text>);
  })    


  console.log(rN);
  return rN;
}

async function toArray(obj){
  return Object.keys(obj).map(i => obj[i])
}

export default class App extends Component {

  
  constructor(props) {
    super(props);
    
    this.state = {
      persons: [],
      data: "",
      inVal:"",
      pages : []
    }
    this.onChangeDone=this.onChangeDone.bind(this);
  }

  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => {
        const persons = res.data;
        // console.log(persons);
        this.setState({ persons });
      })
  }

  onChangeText(inVal){
    console.log("hiE",inVal);

    this.setState({ 
      inVal
    })
  }
  
  onChangeDone(){
    // inVal = val;
    let q = this.state.inVal;
    console.log("hi",q);
  
    wikiSearch(q).then(data=>{
      // data = JSON.parse(`'${data}'`);
      // console.log("data",data);
      // console.log("query",data.query);
      // console.log("pagesS",data.query.pages);
      let pages = data.query.pages;
       pagesq = Object.keys(pages).map(i => pages[i]).then(pages=>{

        if( Array.isArray(pages)){
          console.log("is array")
        }

        console.log("arrray",pages);
        this.setState({ pages : pages  });

       })


       //  toArray(data.query.pages).then(pageArray => {

    
      // });
      
      
    });

  }


  render() {
    return (
      <View style={{ flex: 1,  backgroundColor:"#00b100", flexDirection:"column", justifyContent: "center", alignItems: "center" }}>
        <Text style={{color:"white", marginTop:50, marginBottom:50}}>Let's play cricket!</Text>

        <View style={{ backgroundColor:"#ffffff"}}>
          <TextInput
            style={{ height: 40, width:150,borderColor: 'gray', borderWidth: 1 }}
            onChangeText={text => this.onChangeText(text)}
            onSubmitEditing={this.onChangeDone}
            value={this.state.inVal}
          />

    <Text>q : {this.state.inVal}</Text>
        </View>

        <View style={{  marginTop:20}}>


        { this.state.persons.map(person => <Text key={person.id}>{person.name}</Text>)}
        </View>
        <View style={{  marginTop:20}}>
          <Text>{data}</Text>
        </View>
       
       <View>
          {this.state.persons.map(p => <Text key={p.id}>{p.name}</Text>)}
          {/* {this.state.pages.map(p => <Text key={p.pageid}>{p.title}</Text>)} */}
       </View>

        <Text style={{flex:1}}></Text>
      </View>
    );
  }
}

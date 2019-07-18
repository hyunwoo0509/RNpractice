import React, { Component } from 'react';
import { AppRegistry, Text, View, Button, Alert } from 'react-native';

//Alert , Button is useful for debugging


export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      number : [1, 1, 1, 1, 1, 1]
    }

    // this.state = {
    //   var number = new Array{number1: 1, number2:1,number3: 1,number4: 1,number5: 1,number6: 1};
    // }
  }

// GenerateRandomNumber=()=>
// {
//
// var RandomNumber = Math.floor(Math.random() /2 * 100) + 1 ;
//
// this.setState({
//
//   number : RandomNumber
//
// })
// }

// var, let, const

  button1 = (e) => {
    var temparray = []
    // for (var i = 0; i < this.state.number.length; i++) {
    while (temparray.length < this.state.number.length){

      var random = (Math.floor(Math.random() * 45) + 1 + " ")
      if (temparray.length === 0 ) { temparray.push(random) }
      else {
        for (var j = 0 ; j < temparray.length; j++){
          if(temparray[j] === random){
            break;
          }
          else if ( j === temparray.length - 1 ){
            temparray.push(random)
          }
        }
      }
      continue;

      }

    this.setState(prevState => ({ number : temparray })  )


  }


  render() {

    return (
      <View style={{alignItems: 'center', top: 50}}>
      <Text> {this.state.number} </Text>
      <Button title="Lotto" color="#000077" onPress={this.button1}/>
      </View>
    );
  }
}



// <Button title = "down" color="#000088" onPress={this.button2}/>

import React, { Component } from 'react';
import { AppRegistry, Text, View, Button, Alert } from 'react-native';

//Alert , Button is useful for debugging

export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      number : 0
    }
  }


  button1 = (e) =>( this.setState(prevState => ({number : (prevState.number + 1)})))
  button2 = (e) =>( this.setState(prevState => ({number : (prevState.number - 1)})))

  render() {

    return (
      <View style={{alignItems: 'center', top: 50}}>
      <Text> {this.state.number} </Text>
      <Button title="up" color="#000077" onPress={this.button1}/>
      <Button title = "down" color="#000088" onPress={this.button2}/>
      </View>
    );
  }
}

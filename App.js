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

  render() {

    return (
      <View style={{alignItems: 'center', top: 50}}>
      <Text> {this.state.number} </Text>
      <Button title="lhjkjh" color="#841586" onPress={this.button1}/>
      </View>
    );
  }
}

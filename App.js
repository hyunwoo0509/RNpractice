import React, { Component } from "react";
import { AppRegistry, Text, View, Button, Alert } from "react-native";

//Alert , Button is useful for debugging

var comp = Math.floor(Math.random() * 3) + 1;

assignUserInput = param => {
  var userInput = param;
  return userInput;
};
//assignUserInput("rock") this.compare
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: ""
    };

    // this.state = {
    //   var number = new Array{number1: 1, number2:1,number3: 1,number4: 1,number5: 1,number6: 1};
    // }
  }

  changetoNum = () => {
    var num = 0;
    if (userInput === "scissor") {
      num = 2;
    } else if (userInput === "rock") {
      num = 1;
    } else if (userInput === "paper") {
      num = 3;
    }
    return num;
  };

  changetoName = () => {
    var name = 0;
    if (comp == 1) {
      name = "rock";
    } else if (comp == 2) {
      name = "scissor";
    } else if (comp == 3) {
      name = "paper";
    }
    return name;
  };

  compare = () => {
    // changetoNum()
    // changetoName()
    var result = "default";
    if ((this.changetoNum % 3) + 1 == comp) {
      result = "win";
    } else if ((comp % 3) + 1 == this.changetoNum) {
      result = "lose";
    } else if (this.changetoNum == comp) {
      result = "draw";
    }
    console.log("computer: " + this.changetoName);
    console.log("You: " + assignUserInput();
    console.log(result);
  };

  //
  //
  //   fight = (userInput) => {
  //     var randomnumber = (Math.floor(Math.random() * 3) + 1)
  // var tempResult = 0
  //
  //   this.setState({result :tempResult })
  //
  // }
  //

  render() {
    return (
      <View style={{ alignItems: "center", top: 50 }}>
        <Text> {this.state.result} </Text>
        <Button
          title="rock"
          color="#111111"
          onPress={() => {
            assignUserInput("rock");
            this.compare();
          }}
        />
        <Button
          title="paper"
          color="#222222"
          onPress={() => {
            assignUserInput("paper");
            this.compare();
          }}
        />
        <Button
          title="scissor"
          color="#333333"
          onPress={() => {
            assignUserInput("scissor");
            this.compare();
          }}
        />
      </View>
    );
  }
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
// 1 = 가위
// 2 = 바위
// 3 = 보
// random = () => {
//   var randomnumber = (Math.floor(Math.random() * 3) + 1)
// }
//
// // var, let, const
//   r = () => {
//     if (random.randomnumber == 1){
//
//     }
//
//     }

//   this.setState(prevState => ({ number : temparray })  )
//
//
// }

// <Button title = "down" color="#000088" onPress={this.button2}/>

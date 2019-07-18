

var userInput = "rock"
var comp = (Math.floor(Math.random() * 3) + 1)
// 1 = r
// 2 = s
// 3 = p

// function name() {
//   console.log("sdf")
//   return 0;
// }

  changetoNum = () => {
    var num = 0
    if (userInput === "scissor"){
      num = 2
    }
    else if (userInput === "rock"){
      num = 1
    }
    else if (userInput === "paper"){
      num = 3
    }
    return num
  }

  changetoName = () => {
    var name = 0
    if (comp == 1){
      name = "rock"
    }
    else if (comp == 2){
      name = "scissor"
    }
    else if (comp == 3){
      name = "paper"
    }
    return name
  }

  compare = () => {
    // changetoNum()
    // changetoName()
    var result = "default"
    if (changetoNum() % 3 + 1 == comp){
      result = "win"
    }
    else if (comp % 3 + 1 == changetoNum()){
      result = "lose"
    }
    else if (changetoNum() == comp){
      result = "draw"
    }
    console.log("computer: " + changetoName())
    console.log("You: " + userInput)
    console.log(result)
  }

  // computer = () => {
  //   var tempresult = 0
  //   if (comp == 1){
  //     tempresult = "draw"
  //     console.log("computer : 바위")
  //   }
  //   else if (comp == 2) {
  //     tempresult = "win"
  //     console.log("computer : 가위")
  //   }
  //   else if (comp == 3){
  //     tempresult = "lose"
  //     console.log("computer : 보")
  //   }
  //   console.log("you picked " + userInput)
  //   console.log(tempresult)
  // }
//  computer()
compare()

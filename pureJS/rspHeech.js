//
// rock = {
//   name : "rock",
//   num : 1,
//   print : () => console.log("my name is " + rock.name)
// }
//
// rock.print()

var rspArr = [ { name : "rock", num : 1},  { name : "scissors", num : 2},  { name : "paper", num : 3}]

var userInput = "scissors"
var compInput = (Math.floor(Math.random() * 3) + 1)
var result = "default"

var fight = (userI, computerI ) =>{
  userInum = ""
  computerIstr = ""
  // switch (userI) {
  //   case :
  // }
 rspArr.map( (rsp) => {if(rsp.name === userI) {userInum = rsp.num} } )
 rspArr.map( (rsp) => {if(rsp.num === computerI) {computerIstr = rsp.name} } )


 if (userInum % 3 + 1 == computerI){
   result = "win"
 }
 else if (computerI % 3 + 1 == userInum){
   result = "lose"
 }
 else if (userInum == computerI){
   result = "draw"
   }


console.log(`computer : ${computerIstr}`)
console.log(`You : ${userI}`)
console.log(result)

}


fight(userInput, compInput)

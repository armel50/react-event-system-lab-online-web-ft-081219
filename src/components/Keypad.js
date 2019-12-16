// Code Keypad Component Here
import React, {Component} from "react"
<<<<<<< HEAD
export default class Keypad extends Component{
    typing(){
        console.log("Entering password...")
    }
    render(){
       return( <div><input onKeyUp={this.typing} type= "password"></input></div>)
    }
=======
export class Keypad extends Component{
   render(){
   return(<div>This is a test </div>)
  }
>>>>>>> 6a205717acc95d632c046750c5cef324b9115ba6
}
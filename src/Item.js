import React, { Component } from "react";


class Item extends Component{
state = {name : "Mona",
age : 24,}
  handleClick = () =>{
  this.setState(
    {
   name: "Ali",
 age: '23',
}   )   }  

render() {
  return(
  <div>
  <h1>Hello</h1>
  <div>{this.state.name}</div>
  <div>{this.state.age}</div>
  <button onClick={this.handleClick}>Click</button>
  </div>
  )}}
export default Item
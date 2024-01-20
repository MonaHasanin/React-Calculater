import React from "react";
import { Component } from "react";
import Header from './Header';
import Calc from "./Calc/Calc";
import Footer from "./Footer";
//import Item from './Item';

class App extends Component{
  // state ={
  //   item:[  {  id:5,
  //     name: "Mona",    } ] };
  render(){
    return(
      // <div> <Item />       </div>
      <div><Header />
      <Calc />
      <Footer />
      </div>
      ); 
       }
}
export default App;
import React from "react";
// import { Component } from "react";
// import { ReactDOM } from 'react-dom/client';


function Header(props){
      
    return (
        <nav className="mainNav">
            <h1>Mona</h1>
            <ul>
                <li className="active">about</li>
                <li>contact us</li>
                <li>products</li>
                <li>home</li>
            </ul>
        </nav>
    );
}; 
 
 export default Header;
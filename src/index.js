// entry file of react
import React from "react";
import  ReactDOM  from "react-dom";
import App from "./App"
import "./style.css";




// js function{}
// const hello= ()=>{
//     return "hello";
// }

/* always start with a small letter 
  Always return a datatype
  we will call hello() */


 // component function 
// const Hello = ()=>{
//     return <h1>hello world</h1>
// }

/* always start with a capital letter
 always return particular html 
 we will call like <Hello></Hello> or <Hello/> */



//  const Hello = ()=>{
//     let a = 10;
//     let styleh1 = {textAlign:"center", border:"2px solid green"}
//     return (
//         <div className="hello">
//            {/* <h1 style={{textAlign:"center", border:"2px solid green"}}>hello world, {a}</h1> */}
//             <h1 style={styleh1}>hello world</h1>
//            <p>2+3+4+5</p>
//            <p>{2+3+4+5}</p>
//            <p>hey how r u </p>
          
           
//            </div>
//     ) 
//  }
  ReactDOM.render(<App/>,document.getElementById("root"));
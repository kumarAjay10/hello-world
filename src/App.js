import React from "react";
import Button from "./Components/Button";



const App = ()=>{
        let a = 10;
        // let styleh1 = {textAlign:"center", border:"2px solid green"}
        return (
            <div className="hello">
               <h1 style={{textAlign:"center", border:"2px solid green"}}>hello world, {a}</h1>
                {/* <h1 style={styleh1}>hello world</h1> */}
               <p>2+3+4+5</p>
               <p>{2+3+4+5}</p>
               <p>hey how r u </p>
              <Button name="Apple" color="green" price="50"/>
              <Button name="banana" color="yellow" price="100"/>
              <Button name="orange" color="orange" price="30"/>
             
              
              
               
               </div>
        ) 
     
}

export default App
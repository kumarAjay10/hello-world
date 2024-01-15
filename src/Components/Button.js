import React from "react"



// props:  properties 
// const Button = (props)=>{
//     console.log("props",props);
//     return(
//         <div>
//             <button>{props.name}</button>
//             <p>it is {props.color} in color</p>
           
//         </div>
//     )
// }


const Button = ({name,color,price})=>{
    
    return(
        <div>
            <button>{name}</button>
            <p>it is {color} in color</p>
            <p>cost :{price}</p>
           
        </div>
    )
}


export default Button



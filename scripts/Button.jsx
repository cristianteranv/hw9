import React from "react"

function Button(props){
   
    return (
        <button id="myButton" onClick={props.clickHandler}>{props.text}</button>
    )
}

export default Button
import React from "react"

function Input(props){
    
    function onKeyPress (e) {
    if(e.which === 13) {
      props.clickHandler()
    }
  }
    
  
    return (
        <input id="input" type="text" onKeyPress={onKeyPress}/>
    )
}

export default Input
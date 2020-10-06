import React, {useState} from 'react'
import List from './List'
import Input from './Input'
import Button from './Button'

function Content(){
    
    const [state, setState] = useState( {LIs: []} )
    
    function addLI (text){
        setState( prev => {
            const updatedLIs = prev.LIs.concat([text])
            
            return { LIs: updatedLIs }
            }
        )

    }
    
    function clickHandler(){
        const input = document.getElementById("input").value
        addLI(input)
       // console.log("from button: ", props.state.LIs)
       document.getElementById("input").value = ""
    }
    
    
    
    //console.log("from content: ", updatedLIs)
    //console.log("stateLIs after setState: ", state.LIs)    
    return (
        <div>
            <h1>List: </h1>
            <List LIs={state.LIs} />
            <hr />
            <Input clickHandler={clickHandler} /> <Button text="Submit" clickHandler={clickHandler} state={state}/>
        </div>
    )
}

export default Content
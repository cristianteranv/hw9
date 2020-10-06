import React from "react"
import ListItem from "./ListItem"

function List(props){
    
    const listItems = props.LIs.map(
        (text) => <ListItem val={text}/>
    )
    
    return (
        <ul>
            {listItems}
        </ul>
    )
}

export default List
import React from 'react'
import List from './List'
import Input from './Input'
import Button from './Button'

function Content(){
    return (
        <div>
            <h1>List goes here: </h1>
            <List />
            <hr />
            <Input /> <Button />
        </div>
    )
}

export default Content
import React, {useState} from 'react'
import './styles.css'

const Key = ({character, setSelectedCharacter, wrongKeys=[], correctKeys=[]}) => {
    const onPressKey = (key) => {
        setSelectedCharacter(key)
    }
    var type = 'default'
    if(wrongKeys.includes(character)){
        type='grey'
    }
    else if(correctKeys.includes(character)){
        type = 'green'
    }
    return(
        <button className={"key " + type} onClick={()=>{onPressKey(character)}}>{character}</button>
    )
}

export default Key
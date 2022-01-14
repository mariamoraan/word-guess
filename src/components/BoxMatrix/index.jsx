import React from 'react'
import './styles.css'

import Try from '../../classes/Try'

import BoxList from '../BoxList'
const BoxMatrix = ({tries_number=4, word, round, selectedCharacter, setSelectedCharacter, setAttempWord}) => {
    var lists = []
    for(let i = 1; i<=tries_number ; i++){
        lists.push(                
        <BoxList key={i} round={round} word={word} try_={new Try(i, word.length)} selectedCharacter={selectedCharacter} setSelectedCharacter={setSelectedCharacter} setAttempWord={setAttempWord}/>
        )
    }
    return(
        <div className="box-matrix">
            {lists}
        </div>
    )
}

export default BoxMatrix
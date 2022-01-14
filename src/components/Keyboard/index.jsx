import React from 'react'
import './styles.css'

import Key from '../Key'

const KeyBoard = ({setSelectedCharacter, wrongKeys, correctKeys}) => {
    const keys = 'QWERTYUIOPASDFGHJKLÑZXCVBNM'.split('')
    return(
        <div className="keyboard">
            {
                keys.map((key) => (
                    <Key character={key} key={key} setSelectedCharacter={setSelectedCharacter} wrongKeys={wrongKeys} correctKeys={correctKeys} />
                ))
            }
        </div>    
    )
}

export default KeyBoard
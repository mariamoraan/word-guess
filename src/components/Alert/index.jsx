import React, {useState, useEffect} from 'react'
import './styles.css'

const Alert = ({active=false, winner=false, onClick, word, tries}) => {
    const active_class = {true:'', false:'none'}
    const winner_class = {true:'winner', false:'losser'}
    return(
        <div className={"alert " + active_class[active] + ' ' + winner_class[winner]}>
            <h1>WORD GUESS</h1>
            {tries.map((t, key) => (
                <p className="result" key={key}>{t}</p>
            ))}
            {winner ? <p>Ganaste !</p> : <p>Perdiste :( </p>}
            {winner ? '' : <p>La palabra era <b>{word}</b></p>}
            <button onClick={onClick}>Nueva Partida</button>
        </div>
    )
}

export default Alert
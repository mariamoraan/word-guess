import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import {BiHelpCircle} from 'react-icons/bi'
import {FiSettings} from 'react-icons/fi'

import './styles.css'
import KeyBoard from '../../components/Keyboard'
import BoxMatrix from '../../components/BoxMatrix'
import Alert from '../../components/Alert'

import { words_ } from './words'


const words = words_
const MainPage = () => {
    const [tries_number, set_tries_number] = useState(6)
    var w = words[Math.floor(Math.random()*(words.length))]
    w = w.normalize("NFD").replace(/([aeio])\u0301|(u)[\u0301\u0308]/gi,"$1$2").normalize().toUpperCase()
    const [word, setWord] = useState(w)
    const [attempWord, setAttempWord] = useState('')
    const [round, setRound] = useState(0)
    const [selectedCharacter, setSelectedCharacter] = useState(null) 
    const [isEnded, setIsEnded] = useState(false)
    const [tries, setTries] = useState([])
    const [wrongKeys, setWrongKeys] = useState([])
    const [correctKeys, setCorrectKeys] = useState([])
    const nextRound = () => {
        if(attempWord.length == word.length){
            setRound(round+1)
            var try_result = ''
            for(let i = 0; i<attempWord.length ; i++){
                if(attempWord[i] == word[i]){
                    correctKeys.push(attempWord[i])
                    setCorrectKeys(correctKeys)
                    try_result = try_result + '🟩'
                }
                else if (word.includes(attempWord[i])){try_result = try_result + '🟨'}
                else {
                    wrongKeys.push(attempWord[i])
                    setWrongKeys(wrongKeys)
                    try_result = try_result + '⬛'
                }
            }
            tries.push(try_result)
            setTries(tries)
            if(attempWord == word || round == tries_number - 1){
                setIsEnded(true)
            }
        }
        else{
            alert("La palabra tiene que tener 5 letras")
        }
    }
    const startGame = () => {
        window.location.reload()
    }
    return(
        <section id="main-page">
            <nav>
                <Link to="/help"><BiHelpCircle/></Link>
                <h1>Word Guess</h1>
            </nav>
            <BoxMatrix tries_number={tries_number} word={word} round={round} selectedCharacter={selectedCharacter} setSelectedCharacter={setSelectedCharacter} setAttempWord={setAttempWord}/>
            <KeyBoard round={round} setSelectedCharacter={setSelectedCharacter} setSelectedCharacter={setSelectedCharacter} wrongKeys={wrongKeys}  correctKeys={correctKeys}/>
            <div className="main-page-buttons">
                <button onClick={nextRound}>Enter</button>
                <button onClick={()=>{setSelectedCharacter('')}}>Delete</button>
            </div>
            {isEnded && <Alert active={isEnded} winner={word==attempWord} onClick={startGame} word={word} tries={tries} />}
            
        </section>
        
    )
}

export default MainPage
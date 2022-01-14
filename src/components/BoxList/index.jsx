import React, {useEffect, useState} from 'react'
import './styles.css'

import Box from '../Box'


const BoxList = ({word, try_, selectedCharacter, setSelectedCharacter, round, setAttempWord}) => {
    const [attemp, setAttemp] = useState(try_)
    const [isEnded, setIsEnded] = useState(false)
    const [isActive, setIsActive] = useState(false)
    useEffect(() => {
        round == attemp.try_number - 1 ? setIsActive(true) : setIsActive(false)
        round >= attemp.try_number ? setIsEnded(true) : setIsEnded(false)
    }, [round])
    useEffect(()=>{
        if(isActive && selectedCharacter != null){
            var auxAttemp = attemp
            var i = auxAttemp.try_word.indexOf('')
            if(i == -1 && selectedCharacter!=''){
                i = auxAttemp.try_word.length -1
            }
            if(selectedCharacter==''){
                if(i == -1){
                    i = auxAttemp.try_word.length - 1
                }
                else{
                    i = i - 1
                }
            }
            auxAttemp.try_word[i] = selectedCharacter
            setAttemp(auxAttemp)
            setAttempWord(attemp.try_word.reduce((p,c) =>p + c))
            setSelectedCharacter(null)
        }
    }, [selectedCharacter])
    return(
        <div className="box-list">
            {
                attemp.try_word.map((key, value) => {
                    var type = 'default'
                    if(key == ''){
                        type = 'default'
                    }
                    else{
                        if(word[value] == key){
                            type='green'
                        }
                        else if(word.includes(key)){
                            type='yellow'
                        }
                        else{
                            type='grey'
                        }
                    }
                    return <Box character={key[0]} key={value} type={type} activeType={isEnded} />
                })
            }
        </div>
    )
}

export default BoxList
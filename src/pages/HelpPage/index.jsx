import React from 'react'
import { Link } from 'react-router-dom'
import BoxList from '../../components/BoxList'
import './styles.css'

import Try from '../../classes/Try'

const HelpPage = () => {
    var try1 = new Try((0, 'GATOS'.length))
    try1.setTryWord(['G','E','S','T','O'])
    return(
        <section className="help-page">
            <h1>Cómo Jugar</h1>
            <p>Word guess es una copia del famoso juego Wordle, pero permite jugar un número indefinido de veces al día</p>
            <p>El objetivo es adivinar la palabra en 6 intentos. Después de cada intento, las letras cambian de color para indicar los aciertos</p>
            <h2>Ejemplo:</h2>
            <BoxList word={'GATOS'} try_={try1} round={5} />
            <p>En este caso, la letra G está bien colocada, la letra E no está en la palabra y las letras S, T y O están descolocadas</p>
            <Link to="/">Jugar</Link>
        </section>
    )
}

export default HelpPage
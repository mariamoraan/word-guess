import React from 'react'
import './styles.css'

const Box = ({character='', type='default', activeType}) => {
    return(
        <div className={activeType ? "box " + type : "box default"}>{character}</div>
    )
}

export default Box
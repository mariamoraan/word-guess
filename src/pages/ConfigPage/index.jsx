import React from 'react'
import './styles.css'

const ConfigPage = () => {
    return(
        <section className="config-page">
            <h1>Settings</h1>
            <label htmlFor="adapted-color"></label>
            <input type="checkbox" name="adapted-color" />
        </section>
    )
}

export default ConfigPage
import './errorBox.css'
import React from 'react'

export const ErrorBox = ({ error }) => {
    
    return (

        <div className="error-box">
            <div className='div-wrap'>

                <p className="error-message">Error: {error}</p>
            </div>

        </div>
    )
}

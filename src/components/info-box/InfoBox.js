import './infoBox.css'
import React from 'react'

export const InfoBox = ({ title }) => {
    return (
        <div className="center">
            <div className="check">
                <i className="far fa-check-circle color"></i> &nbsp; &nbsp;
                <span>{title}</span>
            </div>
        </div>
    )
}

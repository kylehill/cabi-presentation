import React from "react"

import "./clock.css"

const Clock = (props) => {
    const className = props.showClock ? "clock-container-show" : "clock-container-hide"
    
    return (
        <div className={`clock-container ${className}`}>
            {props.time}
        </div>
    )
}

export default Clock
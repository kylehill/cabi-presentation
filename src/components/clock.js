import React from "react"

import "./clock.css"

const Clock = (props) => {
    if (props.showClock === false) {
        return null
    }

    return (
        <div className="clock-container">
            {props.time}
        </div>
    )
}

export default Clock
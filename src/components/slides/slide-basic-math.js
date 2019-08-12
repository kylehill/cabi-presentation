import React from "react"
import Stage from "../stage"

const Slide = (props) => {
    return (
        <div className="slide">
            <Stage on={1}>
                Target: <em>12.4</em> points/hour
            </Stage>
            <Stage on={2}>
                Walking is <em>slower</em><br/>
                than biking<br/>
                <span className="tiny">this is only a slide because I kept forgetting that fact</span>
            </Stage>
            <Stage on={3}>
                Record Attempt #1:<br/>
                <em>Monday, July 15th</em>
            </Stage>
        </div>
    )
}

Slide.stages = 3

export default Slide
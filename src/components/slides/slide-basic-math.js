import React from "react"
import Stage from "../stage"

const Slide = (props) => {
    return (
        <div className="slide">
            <Stage on={1}>
                Target: <em>12.4</em> points/hour
            </Stage>
            <Stage on={2}>
                Surprise, walking is slow
            </Stage>
            <Stage on={3}>
                Record Attempt #1:<br/>
                <br/>
                <em>Monday, July 15th</em>
            </Stage>
        </div>
    )
}

Slide.stages = 3

export default Slide
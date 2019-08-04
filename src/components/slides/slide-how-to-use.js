import React from "react"
import Stage from "../stage"

const Slide = (props) => {
    return (
        <div className="slide">
            <Stage on={1}>
                picture of station
            </Stage>
            <Stage on={2}>
                picture of t&c
            </Stage>
            <Stage on={3}>
                picture of code
            </Stage>
            <Stage from={4}>
                picture of bike in dock
            </Stage>
        </div>
    )
}

Slide.stages = 5
Stage.playSoundOnStage = 5

export default Slide
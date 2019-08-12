import React from "react"
import Stage from "../stage"

const Slide = (props) => {
    return (
        <div className="slide">
            <Stage on={1}>
                <img src="/IMG_2523.jpg" />
            </Stage>
            <Stage from={2}>
                <img src="/IMG_2524.jpg" />
            </Stage>
        </div>
    )
}

Slide.stages = 2

export default Slide
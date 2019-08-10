import React from "react"
import Stage from "../stage"

const Slide = (props) => {
    return (
        <div className="slide">
            <Stage on={1}>
                Logic is <em>attritional</em>
            </Stage>
            <Stage on={2}>
                screenshot of React app
            </Stage>
            <Stage on={3}>
                screenshot of React app, with recommendation
            </Stage>
            <Stage on={4}>
                So I made <em>myself</em> into an API
            </Stage>
            <Stage on={5}>
                Obviously this gets more terrible
            </Stage>
            <Stage on={6}>
                screenshot of Cabi member portal
            </Stage>
            <Stage on={7}>
                screenshot of text message
            </Stage>
        </div>
    )
}

Slide.stages = 7

export default Slide
import React from "react"
import Stage from "../stage"

const Slide = (props) => {
    return (
        <div className="slide">
            <Stage on={1}>
                <em>"What are you up to?"</em>
            </Stage>
            <Stage on={2}>
                Terrible ideas are <em>inscrutible</em>
            </Stage>
            <Stage on={3}>
                Terrible ideas are <em>yours</em><br/>
                and <em>yours alone</em>
            </Stage>
        </div>
    )
}

Slide.stages = 3

export default Slide
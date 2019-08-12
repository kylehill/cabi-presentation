import React from "react"
import Stage from "../stage"

const Slide = (props) => {
    return (
        <div className="slide slide-center">
            <Stage on={1}>
                Logic is <em>attritional</em>
            </Stage>
            <Stage on={2}>
                <img src="/carbon-react-app.png" />
            </Stage>
            <Stage on={3}>
                <img src="/member-portal.png" />
            </Stage>
            <Stage on={4}>
                <img src="/api-text.jpg" />
            </Stage>
            <Stage on={5}>
                <small>
                    If you dream <em>weird</em> enough,<br/>
                    you can become your own API
                </small>
            </Stage>
        </div>
    )
}

Slide.stages = 5

export default Slide
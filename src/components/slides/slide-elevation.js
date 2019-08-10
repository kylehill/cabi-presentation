import React from "react"
import Stage from "../stage"

const Slide = (props) => {
    return (
        <div className="slide">
            <Stage preload={true} on={1}>
                <img src="15th-street.png" />
            </Stage>
            <Stage preload={true} on={2}>
                <img src="IMG_2529.jpg" />
            </Stage>
            <Stage preload={true} on={3}>
                <img src="bike-angels-promo.jpg" />
            </Stage>
        </div>
    )
}

Slide.stages = 3

export default Slide
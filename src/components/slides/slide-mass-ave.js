import React from "react"
import Stage from "../stage"

const Slide = (props) => {
    return (
        <div className="slide">
            <Stage preload={true} on={1}>
                <img src="modern-dc-map.png" />
            </Stage>
            <Stage preload={true} on={2}>
                <img src="tall-buildings.png" />
            </Stage>
            <Stage on={3}>
                <span class="statehood">DC STATEHOOD NOW</span>
            </Stage>
            <Stage preload={true} on={4}>
                <img src="modern-dc-mass-ave.png" />
            </Stage>
            <Stage preload={true} on={5}>
                <img src="modern-dc-mass-ave2.png" />
            </Stage>
        </div>
    )
}

Slide.stages = 5

export default Slide
import React from "react"
import Stage from "../stage"

const Slide = (props) => {
    return (
        <div className="slide">
            <Stage on={1}>
                picture of crow flies distance measurement
            </Stage>
            <Stage preload={true} on={2}>
                <img src="bike-into-water.gif" />
            </Stage>
            <Stage on={3}>
                picture of reduced street map of DC
            </Stage>
            <Stage on={4}>
                picture of nodes in directed graph
            </Stage>
            <Stage preload={true} on={5}>
                <img src="open-elevation.png" />
            </Stage>
            <Stage on={6}>
                picture of nodes in directed graph with elevations
            </Stage>
            <Stage on={7}>
                picture of nodes in directed graph with combined metric
            </Stage>
            <Stage on={8}>
                <em>"just"</em>
            </Stage>
        </div>
    )
}

Slide.stages = 8

export default Slide
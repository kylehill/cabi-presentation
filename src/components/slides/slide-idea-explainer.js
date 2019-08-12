import React from "react"
import Stage from "../stage"

const Slide = (props) => {
    return (
        <div className="slide slide-center">
            <Stage on={1}>
                <small>An origin story, kind of</small>
            </Stage>
            <Stage on={2}>
                <strong><em>Technology</em></strong>
            </Stage>
            <Stage preload={true} on={3}>
                <img src="cabi-map-login.png" />
            </Stage>
            <Stage preload={true} on={4}>
                <img className="scale" src="2pt_vsmall.png" />
            </Stage>
            <Stage preload={true} on={5}>
                <img className="scale" src="1pt_vsmall.png" />
            </Stage>
            <Stage preload={true} on={6}>
                <img className="scale" src="3pt_vsmall.png" />
            </Stage>
            <Stage preload={true} on={7}>
                <img src="leaderboard.png" />
            </Stage>
            <Stage preload={true} on={8}>
                <img src="record-holders.png" />
            </Stage>
        </div>
    )
}

Slide.stages = 8

export default Slide
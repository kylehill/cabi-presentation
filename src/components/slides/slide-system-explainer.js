import React from "react"
import Stage from "../stage"

const Slide = (props) => {
    return (
        <div className="slide">
            <Stage on={1}>
                The DC government created <em>Capital Bikeshare</em> in 2010
            </Stage>
            <Stage from={2}>
                <em>564</em> stations across DC/MD/VA
                <br/>
                <small>(as of, like, an hour ago)</small>
            </Stage>
        </div>
    )
}

Slide.stages = 2

export default Slide
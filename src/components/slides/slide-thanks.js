import React from "react"
import Stage from "../stage"

const Slide = (props) => {
    return (
        <div className="slide">
            this has been a <strong><em>@kylehill</em></strong> catastrophe
            <br/><br/>
            please like and subscribe
        </div>
    )
}

Slide.stages = 1

export default Slide
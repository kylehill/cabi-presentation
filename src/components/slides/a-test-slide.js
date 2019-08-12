import React from "react"
import RoadDiagram from "../road-diagram"
import NodeDiagram from "../node-diagram"

const Slide = (props) => {
    return (
        <div className="slide">
            <NodeDiagram />
        </div>
    )
}

Slide.stages = 1

export default Slide
import React from "react"
import Stage from "../stage"
import RoadDiagram from "../road-diagram"
import NodeDiagram from "../node-diagram"

const Slide = (props) => {
    return (
        <div className="slide slide-center">
            <Stage on={1}>
                <RoadDiagram />
            </Stage>
            <Stage preload={true} on={2}>
                <img src="bike-into-water.gif" />
            </Stage>
            <Stage on={3}>
                <RoadDiagram onlyBikeLanes={true} />
            </Stage>
            <Stage on={4}>
                <NodeDiagram />
            </Stage>
            <Stage preload={true} on={5}>
                <img src="open-elevation.png" />
            </Stage>
            <Stage on={6}>
                <NodeDiagram withElevation={true} />
            </Stage>
            <Stage on={7} preload={true}>
                <img className="noborder" src="/carbon-effort-metric.png" />
            </Stage>
            <Stage on={8}>
                <em>"just"</em>
            </Stage>
        </div>
    )
}

Slide.stages = 8

export default Slide
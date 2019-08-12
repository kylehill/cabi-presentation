import React from "react"

import "./node-diagram.css"

const Circle = ({ circleClass, cx, cy, elevation = "" }) => {
    return (<React.Fragment>
        <circle cx={cx} cy={cy} r={15} className={circleClass} />
        {elevation ? 
            <text className="elevation" x={cx - 11} y={cy + 5}>
                {elevation}
            </text> : null}
    </React.Fragment>)
}

const Path = ({ type, x1, x2, y1, y2 }) => {
    switch (type) {
        case "left":
            y1 -= 5
            y2 -= 5
            break

        case "right":
            y1 += 5
            y2 += 5
            break

        case "up":
            x1 -= 5
            x2 -= 5
            break
        
        case "down":
            x1 += 5
            x2 += 5
            break
    }


    return (
        <path className={`path path-${type}`}
            d={`M ${x1},${y1} L ${x2},${y2}`} />
    )
}

const paths = [
    { x1: 0, y1: 120, x2: 100, y2: 120 },
    { x1: 100, y1: 120, x2: 180, y2: 120 },
    { skipLeft: true, x1: 180, y1: 120, x2: 240, y2: 120 },
    { skipLeft: true, x1: 240, y1: 120, x2: 440, y2: 120 },
    { skipLeft: true, x1: 440, y1: 120, x2: 600, y2: 120 },
    { x1: 0, y1: 280, x2: 100, y2: 280 },
    { x1: 100, y1: 280, x2: 180, y2: 280 },
    { x1: 180, y1: 280, x2: 350, y2: 280 },
    { x1: 350, y1: 280, x2: 440, y2: 280 },
    { x1: 440, y1: 280, x2: 600, y2: 280 },

    { ns: true, x1: 100, x2: 100, y1: 0, y2: 120 },
    { ns: true, x1: 100, x2: 100, y1: 120, y2: 180 },
    { ns: true, x1: 100, x2: 100, y1: 180, y2: 280 },
    { ns: true, x1: 100, x2: 100, y1: 280, y2: 400 },
    { ns: true, x1: 180, x2: 180, y1: 0, y2: 120 },
    { ns: true, x1: 180, x2: 180, y1: 120, y2: 280 },
    { ns: true, x1: 180, x2: 180, y1: 280, y2: 400 },
    { ns: true, x1: 440, x2: 440, y1: 0, y2: 120 },
    { ns: true, x1: 440, x2: 440, y1: 120, y2: 280 },
    { ns: true, x1: 440, x2: 440, y1: 280, y2: 400 },
]

const circles = [
    { x: 100, y: 120, elevation: 80, circleClass: "intersection" },
    { x: 180, y: 120, elevation: 83, circleClass: "intersection" },
    { x: 100, y: 280, elevation: 64, circleClass: "intersection" },
    { x: 180, y: 280, elevation: 62, circleClass: "intersection" },
    { x: 440, y: 280, elevation: 51, circleClass: "intersection" },
    { x: 240, y: 120, elevation: 89, circleClass: "station" },
    { x: 100, y: 180, elevation: 68, circleClass: "station" },
    { x: 440, y: 120, elevation: 75, circleClass: "station" },
    { x: 350, y: 280, elevation: 55, circleClass: "station" }
]

const NodeDiagram = (props) => {
    return (
        <div class="node-container">
            <svg className="diagram-container" width="600" height="400">
                {paths.map((p) => {
                    if (p.ns) {
                        return (<React.Fragment>
                            <Path type="up" {...p} />
                            <Path type="down" {...p} />
                        </React.Fragment>)
                    }
                    
                    return (<React.Fragment>
                        {p.skipLeft ? null : <Path type="left" {...p} /> }
                        {p.skipRight ? null : <Path type="right" {...p} /> }
                    </React.Fragment>)
                })}
                {circles.map((c) => {
                    return (<Circle 
                        cx={c.x} cy={c.y} circleClass={c.circleClass}
                        elevation={c.elevation} />)
                })}
            </svg>
        </div>
    )
}

export default NodeDiagram
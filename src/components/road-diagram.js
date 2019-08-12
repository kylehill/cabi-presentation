import React from "react"

import "./road-diagram.css"

const Road = ({ x1, x2, y1, y2, width, roadClass }) => {
    return (
        <line x1={x1} x2={x2} y1={y1} y2={y2}
            strokeWidth={width} className={roadClass} />
    )
}

const RoadNetwork = ({ roads, universalClass, shrink = 0 }) => {
    return (
        <g name="streets">
            {roads.map((road) => {
                return (
                    <Road x1={road.x1}
                        x2={road.x2}
                        y1={road.y1}
                        y2={road.y2}
                        width={road.width - shrink}
                        roadClass={`${universalClass} ${road.roadClass || ""}`} />
                )
            })}
        </g>
    )
}

const roadNetwork = [
    { x1: 0, x2: 600, y1: 50, y2: 50, width: 15 },
    { x1: 0, x2: 600, y1: 200, y2: 200, width: 30 },
    { x1: 0, x2: 600, y1: 360, y2: 360, width: 15 },
    { y1: 0, y2: 400, x1: 325, x2: 325, width: 30 },
    { y1: 0, y2: 400, x1: 550, x2: 550, width: 20 },
    { y1: -20, y2: 420, x1: 380, x2: 100, width: 15 },
    { y1: 200, y2: 420, x1: 325, x2: 620, width: 25 },

    { x1: 0, x2: 600, y1: 120, y2: 120, width: 15, roadClass: "bikelane" },
    { x1: 0, x2: 600, y1: 280, y2: 280, width: 15, roadClass: "bikelane" },
    
    { y1: 0, y2: 400, x1: 100, x2: 100, width: 15, roadClass: "bikelane" },
    { y1: 0, y2: 400, x1: 180, x2: 180, width: 20, roadClass: "bikelane" },
    { y1: 0, y2: 400, x1: 440, x2: 440, width: 15, roadClass: "bikelane" },
]

const RoadDiagram = (props) => {
    const boxClass = ["diagram-box"]
    let instanceRoads = roadNetwork

    if (props.onlyBikeLanes) {
        boxClass.push("diagram-hide-streets")
        // instanceRoads = roadNetwork.filter((road) => {
        //     return road.roadClass === "bikelane"
        // })
    }
    else {
        boxClass.push("diagram-show-streets")
    }

    return (
        <div class={boxClass.join(" ")}>
            <svg className="diagram-container" width="600" height="400">
                <RoadNetwork roads={instanceRoads} 
                    universalClass={"outline"} />
                <RoadNetwork roads={instanceRoads} 
                    universalClass={"street"} shrink={2} />
                <line y1={100} y2={290} x1={260} x2={350}
                    strokeDasharray="10,5"
                    className="crow-distance" />
                <polyline points="260 120, 180 120, 180 280, 350 280"
                    strokeDasharray="10,5"
                    className="path-distance" />
            </svg>
            <img src="/station-marker-full.png" 
                className="station-marker station-marker-1" />
            <img src="/station-marker.png" 
                className="station-marker station-marker-2" />
            <img src="/station-marker-full.png" 
                className="station-marker station-marker-3" />
            <img src="/station-marker.png" 
                className="station-marker station-marker-4" />
        </div>
    )
}

export default RoadDiagram
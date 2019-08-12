import React from "react"

const shapeDiamondDC = [
    739, 381,
    1039, 681,
    739, 981,
    439, 681
]

const shapeCurrentDC = [
    558, 562, 
    739, 381,
    1039, 681,
    795, 925
]

const transformPoints = (array, zoom) => {
    return array.map((pt) => {
        return `${pt * zoom}`
    }).join(" ")
}

const createGrid = (zoom) => {
    const lines = []
    for (let i = 0; i <= 40; i++) {
        let color = "#eee"
        if (i % 2 === 0) {
            color = "#ccc"
        }
        if (i % 4 === 0) {
            color = "#888"
        }
        if (i % 20 === 0) {
            color = "red"
        }
        lines.push(
            <line x1="0" x2={zoom * 1225}
                key={`x${i}`}
                stroke={color}
                strokeDasharray={i % 2 === 1 ? "3,3" : null} 
                y1={(25 * i * zoom)}
                y2={(25 * i * zoom)} />)
        lines.push(
            <line y1="0" y2={zoom * 1000}
                key={`y${i}`}
                stroke={color} 
                strokeDasharray={i % 2 === 1 ? "3,3" : null} 
                x1={(30.625 * i * zoom)}
                x2={(30.625 * i * zoom)} />)
    }
    return lines
}

const MapBackground = ({ zoom, showGrid }) => {
    return (
        <svg className="map-bg" height={zoom * 1000} width={zoom * 1225}>
            {showGrid ? createGrid(zoom) : null}
            <polygon fill="rgba(255,165,0,.2)" strokeWidth="1" stroke="#AAA"
                points={transformPoints(shapeDiamondDC, zoom)} />
        </svg>
    )
}

export default MapBackground
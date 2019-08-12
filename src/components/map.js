import React from "react"
import { connect } from "react-redux"
import MapBackground from "./map-background"

import meta from "../data/meta.json"
import hourly from "../data/hourly.json"

import "./map.css"

const boundingRect = meta.reduce((mem, stn) => {
    if (mem === null) {
        mem = {}
        mem.minX = mem.maxX = stn.lon
        mem.minY = mem.maxY = stn.lat
        return mem
    }

    mem.minX = Math.min(mem.minX, stn.lon)
    mem.maxX = Math.max(mem.maxX, stn.lon)
    mem.minY = Math.min(mem.minY, stn.lat)
    mem.maxY = Math.max(mem.maxY, stn.lat)
    return mem
}, null)

const xDelta = Number(((boundingRect.maxX - boundingRect.minX)).toFixed(6))
const yDelta = Number((boundingRect.maxY - boundingRect.minY).toFixed(6))

const xScale = (longitude) => {
    return 1 - (((longitude - boundingRect.minX)) / xDelta)
}
const yScale = (latitude) => {
    return ((latitude - boundingRect.minY) / yDelta)
}

const stations = meta.map((stn) => {
    const xPos = xScale(stn.lon)
    const yPos = yScale(stn.lat)

    return { ...stn, xPos, yPos }
})

class Map extends React.Component {
    constructor(props) {
        super(props)
        this.myRef = React.createRef()
    }

    componentDidMount(){
        const ref = this.myRef.current
        const width = ref.clientWidth
        const height = ref.clientHeight
        ref.scrollTo(
            height * this.zoom *.5, 
            width * this.zoom * .5
        )
    }

    createStation(stn) {
        const hour = (this.props.form.timeSlider % 24)
        const points = hourly[stn.id][hour]
        
        const stationSize = `${Math.round(4 * this.zoom * .75 * (1 + Math.abs(points)))}px`
        
        const red = (Math.max(0, points) * 100)
        const blue = (Math.max(0, -1 * points) * 100)
        const bgColor = `rgba(${red}, 0, ${blue}, ${Math.max(Math.abs(points), .1)})`
        
        const style = {
            top: `${stn.xPos * this.zoom * 1000}px`,
            left: `${stn.yPos * this.zoom * 1225}px`,
            height: stationSize,
            width: stationSize,
            background: bgColor
        }

        return (
            <div key={stn.id} 
                className="map-station" 
                style={style}
                onClick={() => { 
                    this.props.clickStation(stn, points) 
                }} />
        )
    }

    render() {
        this.zoom = this.props.slideState.zoom || 1

        return (
            <section ref={this.myRef} className="map-container">
                <div className="map-controls">
                    <button onClick={this.props.zoomIn}>
                        {"+"}
                    </button>
                    <button onClick={this.props.zoomOut}>
                        {"-"}
                    </button>
                </div>
                <MapBackground zoom={this.zoom} />
                <div className="map">
                    {stations.map((stn) => {
                        return this.createStation(stn)
                    })}
                </div>
            </section>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    zoomOut() {
        dispatch({
            type: "CLICK_MAP_ZOOM_OUT"
        })
    },
    zoomIn() {
        dispatch({
            type: "CLICK_MAP_ZOOM_IN"
        })
    },
    clickStation(stn, points) {
        dispatch({
            type: "CLICK_MAP_STATION",
            station: {...stn, points}
        })
    }
})

export default connect(a=>a, mapDispatchToProps)(Map)
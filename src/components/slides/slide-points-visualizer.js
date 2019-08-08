import React from "react"
import { connect } from "react-redux"
import Map from "../map"

const PointsVisualizer = (props) => {
    const handleSlide = (event) => {
        props.dispatch({
            type: "INPUT_CHANGE",
            control: "timeSlider",
            value: event.target.value
        })
    }

    const selectedStation = props.slideState.selectedStation
    
    return (
        <div>
            <input 
                type="range" 
                min="0" 
                max="23" 
                step="1"
                value={props.form.timeSlider}
                onChange={handleSlide} />
            <div>{`Current value: ${props.form.timeSlider}`}</div>
            {selectedStation ? 
                <div>
                    <div>
                        {`Currently selected: ${selectedStation.name}`}
                    </div>
                    <div>
                        {`Coords: ${(selectedStation.yPos * 1225).toFixed(2)}, ${(selectedStation.xPos * 1000).toFixed(2)}`}
                    </div>
                </div>
            : null}
            <Map />
        </div>
    )
}

export default connect(a=>a)(PointsVisualizer)
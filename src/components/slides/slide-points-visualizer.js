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

    const calculatedHour = ((props.form.timeSlider - 1) % 12) + 1
    const calculatedTime = `${calculatedHour || 12}:00 - ${calculatedHour || 12}:59`

    const selectedStation = props.slideState.selectedStation
    
    return (
        <div className="map-header">
            <input 
                type="range" 
                min="0" 
                max="24" 
                step="1"
                value={props.form.timeSlider}
                onChange={handleSlide}
                list="tickmarks"
                className="map-slider" />
            <datalist id="tickmarks">
                <option value="0" label="12am" />
                <option value="3" />
                <option value="6" label="6am" />
                <option value="9" />
                <option value="12" label="12pm" />
                <option value="15" />
                <option value="18" label="6pm" />
                <option value="21" />
                <option value="24" label="12am" />
            </datalist>
            <div className="map-time-name">
                {`Viewing weekday aggregate data: ${calculatedTime}`}
            </div>
            {selectedStation ? 
                <div className="map-selected-station">
                    <div className="selected-station-name">
                        {selectedStation.name}
                    </div>
                    <div className="selected-station-points">
                        {`Average: ${selectedStation.points.toFixed(3)}`}
                    </div>
                </div>
            : null}
            <Map />
        </div>
    )
}

export default connect(a=>a)(PointsVisualizer)
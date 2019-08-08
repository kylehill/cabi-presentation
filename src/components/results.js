import React from "react"
import { connect } from "react-redux";

import "./results.css"

const StationPoints = ({ out, value }) => {
    if (value) {
        if (out) {
            return <div className="points-bullet points-bullet-out">{value}</div>
        }

        return <div className="points-bullet points-bullet-in">{value}</div>
    }

    return null
}

const TripStation = ({ elapsed, minutes, display, location, points, out = false }) => {
    if (elapsed < minutes) {
        return (
            <div className="trip-station">
                <div className="trip-station-time">&nbsp;</div>
                <div className="trip-station-points"></div>
                <div className="trip-station-name">&nbsp;</div>
            </div>
        )
    }

    return (
        <div className="trip-station">
            <div className="trip-station-time">{display}</div>
            <div className="trip-station-points">
                <StationPoints out={out} value={points} />
            </div>
            <div className="trip-station-name">{location}</div>
        </div>
    )
}

const buildTripRow = (tripData, elapsed, i) => {
    const classNameObject = {
        "display-trip": true,
        "display-trip-hidden": (tripData.mS - elapsed) > 1,
        "display-trip-new": (tripData.mS - elapsed) === 1,
        "display-trip-active": (tripData.mS <= elapsed && tripData.mE > elapsed),
        "display-trip-finish": (tripData.mE === elapsed),
        "display-trip-done": (tripData.mE < elapsed)
    }
    const classNames = Object.keys(classNameObject)
        .filter((key) => classNameObject[key])
        .join(" ")

    return (
        <div className={classNames} key={i}>
            <TripStation
                out={true}
                elapsed={elapsed}
                minutes={tripData.mS}
                display={tripData.timeS}
                location={tripData.From}
                points={tripData.ptsOut} />
            <TripStation
                elapsed={elapsed}
                minutes={tripData.mE}
                display={tripData.timeE}
                location={tripData.To}
                points={tripData.ptsIn} />
        </div>
    )
}

const ResultsDisplay = (props) => {
    const prepopulatedMinutes = props.minutesElapsed || props.startAt || 0

    let [h, m] = props.startTime.split(":")
    m = Number(m) + prepopulatedMinutes
    h = (((Number(h) + Math.floor(m / 60)) - 1) % 12) + 1
    m = (m % 60).toString().padStart(2, "0")
    const clockTime = `${h}:${m}`

    const points = props.trips.reduce((mem, trip) => {
        if (trip.mE <= prepopulatedMinutes) {
            return mem + trip.Total
        }
        return mem
    }, 0)

    const tripRows = props.trips.map((trip, i) => {
        return buildTripRow(trip, prepopulatedMinutes, i)
    })

    const pph = (points / (prepopulatedMinutes || 1)) * 60

    return (
        <div className="display-results-container" onClick={() => { props.clickPlay(props) }}>
            <div className="display-stats">
                <div className="display-panel">{clockTime}</div>
                <div className="display-panel">
                    <div className="display-legend">Score</div>
                    {points}
                </div>
                <div className="display-panel">
                    <div className="display-legend">Points/Hour</div>
                    {pph.toFixed(2)}
                </div>
            </div>
            <div className="display-rows">
                {tripRows}
            </div>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => {
    return {
        trips: ownProps.trips,
        startTime: ownProps.startTime,
        acceleration: ownProps.acceleration,
        stopAt: ownProps.stopAt,
        startAt: ownProps.startAt,
        play: state.slideState.play,
        minutesElapsed: state.slideState.minutesElapsed,
    }
}

const mapDispatchToProps = (dispatch) => ({
    clickPlay(props){
        dispatch({
            type: "START_RESULTS_DISPLAY",
            acceleration: props.acceleration,
            stopAt: props.stopAt,
            startAt: props.startAt
        })
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(ResultsDisplay)
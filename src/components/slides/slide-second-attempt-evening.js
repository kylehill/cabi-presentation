import React from "react"
import ResultsDisplay from "../results"
import trips from "../../data/second-attempt.json"

const ordered = trips.reduce((mem, trip) => {
    return [trip, ...mem]
}, [])

const Slide = (props) => {
    return (
        <div className="slide slide-nocenter">
            <ResultsDisplay
                trips={ordered}
                acceleration={800}
                startAt={600}
                stopAt={690}
                startTime={"7:40"} />
        </div>
    )
}

Slide.resultsDisplay = true

export default Slide
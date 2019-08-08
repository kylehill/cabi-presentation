import React from "react"
import ResultsDisplay from "../results"
import trips from "../../data/first-attempt.json"

const ordered = trips.reduce((mem, trip) => {
    return [trip, ...mem]
}, [])

const Slide = (props) => {
    return (
        <div className="slide slide-nocenter">
            <ResultsDisplay
                trips={ordered}
                acceleration={700}
                stopAt={320}
                startAt={205}
                startTime={"8:50"} />
        </div>
    )
}

Slide.resultsDisplay = true

export default Slide
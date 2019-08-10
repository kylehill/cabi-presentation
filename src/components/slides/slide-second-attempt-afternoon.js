import React from "react"
import ResultsDisplay from "../results"
import trips from "../../data/second-attempt.json"
import Stage from "../stage"
import TheAlgorithm from "../the-algorithm"

const ordered = trips.reduce((mem, trip) => {
    return [trip, ...mem]
}, [])

const Slide = (props) => {
    return (
        <div className="slide slide-nocenter">
            <Stage on={1}>
                <ResultsDisplay
                    trips={ordered}
                    acceleration={300}
                    startAt={290}
                    stopAt={424}
                    startTime={"7:40"} />
            </Stage>
            <Stage on={2}>
                <TheAlgorithm
                    lines={[
                        "The Algorithm",
                        "Defends",
                        "Itself"
                    ]} />
            </Stage>
        </div>
    )
}

Slide.stages = 1

Slide.resultsDisplay = true

export default Slide
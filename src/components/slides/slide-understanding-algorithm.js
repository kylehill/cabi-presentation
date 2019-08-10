import React from "react"
import Stage from "../stage"

const Slide = (props) => {
    return (
        <div className="slide">
            <Stage on={1}>
                <em>125</em> / <em>6</em> = <em>20.8333333</em>
            </Stage>
            <Stage on={2}>
                picture of historical data CSV
            </Stage>
            <Stage on={3}>
                picture of endpoint response
            </Stage>
            <Stage on={4}>
                picture of empty station
            </Stage>
            <Stage on={5}>
                Something <em>sophisticated</em> is happening here
            </Stage>
            <Stage on={6}>
                <ul class="tiny">
                    <li>Rebalancing van visits</li>
                    <li>The day of the week</li>
                    <li>The weather</li>
                    <li>Historical demand at this time of day</li>
                    <li>Historical demand at this time of year</li>
                    <li>Stations within <em>500 meters</em></li>
                </ul>
            </Stage>
            <Stage on={7}>
                <em>Induction</em>, not deduction
            </Stage>
            <Stage on={8}>
                Play <em>against</em> the computer
            </Stage>
        </div>
    )
}

Slide.stages = 8

export default Slide
import React from "react"
import Stage from "../stage"

const Slide = (props) => {
    return (
        <div className="slide">
            <Stage on={1}>
                <em>125</em> / <em>6</em> = <br/>
                <em>20.8333333</em> rides (at least)
            </Stage>
            <Stage on={2}>
                <img className="noborder" src="/carbon-csv.png" />
            </Stage>
            <Stage on={3}>
            <img className="noborder" src="/carbon-api.png" />
            </Stage>
            <Stage on={4}>
                <div class="slide-center">
                    Something <em>sophisticated</em><br/>
                    is happening here
                </div>
            </Stage>
            <Stage on={5}>
                <ul class="tiny">
                    <li>Rebalancing van visits</li>
                    <li>The day of the week</li>
                    <li>The weather</li>
                    <li>Historical demand at this time of day</li>
                    <li>Historical demand at this time of year</li>
                    <li>Stations within <em>500 meters</em></li>
                </ul>
            </Stage>
            <Stage on={6}>
                <div className="slide-center">
                    <em>Induction</em>, not deduction
                </div>
            </Stage>
            <Stage on={7}>
                <div className="slide-center">
                    Play <em>against</em> the computer
                </div>
            </Stage>
        </div>
    )
}

Slide.stages = 7

export default Slide
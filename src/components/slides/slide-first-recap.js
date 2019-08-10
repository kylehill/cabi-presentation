import React from "react"
import Stage from "../stage"

const Slide = (props) => {
    return (
        <div className="slide">
            <Stage on={1}>
                Final score: <em>69</em> points<br/>
                <span class="tiny">don't say it</span>
            </Stage>
            <Stage on={2}>
                <small>
                    <ul>
                        <li>Started after morning rush ended</li>
                        <li>Didn't bring an extra phone battery</li>
                        <li>Was at bar until 12:30 the night prior</li>
                        <li>I mean, who needs to eat lunch, really</li>
                        <li>Holy shit, use sunblock my dude</li>
                    </ul>
                </small>
            </Stage>
            <Stage preload={true} on={3}>
                <img src="wapo-heat-wave.png" />
            </Stage>
            <Stage on={4}>
                <p>Can I do this?</p>
            </Stage>
            <Stage on={5}>
                <p><em>...yeah.</em><br/>I think I can.</p>
            </Stage>
        </div>
    )
}

Slide.stages = 5

export default Slide
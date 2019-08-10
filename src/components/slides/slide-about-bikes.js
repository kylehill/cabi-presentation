import React from "react"
import Stage from "../stage"

const Slide = (props) => {
    return (
        <div className="slide">
            <Stage on={1}>
                <small>
                    (the slides don't have to be, tho)
                </small>
            </Stage>
            <Stage on={2}>
                <small>
                    (that's 2x the weight that you're used to)
                </small>
            </Stage>
            <Stage on={3}>
                <small>
                    (they're somehow held in place by liquid tension)
                </small>
            </Stage>
            <Stage on={4}>
                <small>
                    (just a real "tragedy of the commons"-ass bike)
                </small>
            </Stage>
            <Stage on={5}>
                <small>
                    (basically it's Fred Flintstone's car)
                </small>
            </Stage>
            <Stage on={6}>
                <img src="IMG_2525.jpg" />
            </Stage>
            <Stage on={7}>
                <small>
                    [404 usage not found]
                </small>
            </Stage>
            <Stage preload={true} on={8}>
                <img src="Tourmalet.png" 
                    alt="A diagram showing elevation change on a mountain" />
            </Stage>
            <Stage preload={true} on={9}>
                <img src="601px-Elmer's_Glue-All_historic_packaging.jpeg" 
                    alt="A bottle of glue often used in arts and crafts" />
            </Stage>
            <Stage from={10}>
                <em>20,000</em> trips/day
                <br/>
                <span class="tiny">
                    [... on a weekday with nice weather, but still!]
                </span>
            </Stage>
        </div>
    )
}

Slide.stages = 10

export default Slide
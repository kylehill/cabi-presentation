import React from "react"
import Stage from "../stage"

const Slide = (props) => {
    return (
        <div className="slide">
            <Stage from={1} to={4}>
                <em>The bikes:</em>
                <br/>
                <br/>
                <ul>
                    <li>
                        <Stage from={2} to={4}>
                            They weigh like 40 pounds
                        </Stage>
                    </li>
                    <li>
                        <Stage from={3} to={4}>
                            Who needs to turn, really?
                        </Stage>
                    </li>
                    <li>
                        <Stage on={4}>
                            Basically Fred Flintstone's car
                        </Stage>
                    </li>
                </ul>
            </Stage>
            <Stage on={5}>
                <span class="tiny">look, the bikes kind of suck, okay?</span>
            </Stage>
            <Stage on={6}>
                picture of bike gears
            </Stage>
            <Stage on={7}>
                <small>[404 usage not found]</small>
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
                <span class="tiny">[... on a weekday with nice weather, but still!]</span>
            </Stage>
        </div>
    )
}

Slide.stages = 10

export default Slide
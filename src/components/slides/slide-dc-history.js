import React from "react"
import Stage from "../stage"

const Slide = (props) => {
    return (
        <div className="slide">
            <Stage on={1}>
                A <em>brief</em> historical dicussion
            </Stage>
            <Stage on={2}>
                <small>Article 1.8.15</small>
                <br/>
                <blockquote>
                    "To exercise exclusive Legislation in all Cases whatsoever, 
                    over such District (not exceeding ten Miles square) as may, 
                    by Cession of particular States, and the Acceptance of Congress, 
                    become the Seat of the Government of the United States, and to 
                    exercise like Authority over all Places purchased by the Consent 
                    of the Legislature of the State in which the Same shall be, for 
                    the Erection of Forts, Magazines, Arsenals, dock-Yards, and other 
                    needful Buildings"
                </blockquote>
            </Stage>
            <Stage preload={true} on={3}>
                <img src="1641px-Map_of_the_District_of_Columbia,_1835.jpg"
                    alt="An early map of the District of Columbia" />
            </Stage>
            <Stage preload={true} on={4}>
                <img className="scale" src="L_enfant.gif"
                    alt="A portrait of Pierre L'Enfant" />
            </Stage>
            <Stage preload={true} on={5}>
                <img src="LEnfant_plan.jpg"
                    alt="A hand-drawn map that would eventually become Washington DC" />
            </Stage>
            <Stage preload={true} on={6}>
                <img src="LEnfant_plan_1.png"
                    alt="The previous hand-drawn map with diagonal roads highlighted" />
            </Stage>
            <Stage preload={true} on={7}>
                <img src="stamp.jpg"
                    alt="A stamp depicting Benjamin Banneker" />
            </Stage>
            <Stage preload={true} on={8}>
                <img src="LEnfant_plan_2.png"
                    alt="The previous hand-drawn map with an additional road highlighted" />
            </Stage>
            <Stage preload={true} on={9}>
                <img src="fuck_this_weather.png"
                    alt="The weather forecast for DC in the summer" />
            </Stage>
            <Stage preload={true} on={10}>
                <img src="horse_sleep.jpg" />
            </Stage>
            <Stage preload={true} on={11}>
                <img src="British_Burning_Washington.jpg"
                    alt="A painting of the Battle of Washington in the War of 1812" />
            </Stage>
            <Stage preload={true} on={12}>
                <img src="map_of_dc.png"
                    alt="A screenshot of Google Maps depicting Washington DC" />
            </Stage>
            <Stage preload={true} on={13}>
                <img src="LEnfant_plan_3.png"
                    alt="The previous hand-drawn map, with unbuilt canals highlighted" />
            </Stage>
            <Stage preload={true} on={14}>
                <img src="LEnfant_plan_4.png"
                    alt="The previous hand-drawn map, with a bunch of train emoji covering a street" />
            </Stage>
            <Stage preload={true} on={15}>
                <img src="LEnfant_plan_5.png"
                    alt="The previous hand-drawn map, with the section that's now part of Virginia scribbled out" />
            </Stage>
            <Stage preload={true} on={16}>
                <img src="LEnfant_plan_6.png"
                    alt="The previous hand-drawn map, but surrounded by lots of emoji. This one is just a real cheap throwaway sight gag, trust me you're better off without it" />
            </Stage>
            <Stage preload={true} on={17}>
                <img src="ny-fla.png"
                    alt="The previous hand-drawn map, but zoomed in on a particular intersection" />
            </Stage>
            <Stage preload={true} on={18}>
                <img src="dave_thomas_circle.webp"
                    alt="A fast food restaurant in the middle of a traffic circle" />
            </Stage>
            <Stage preload={true} on={19}>
                <img src="toyota_corolla.png"
                    alt="A screenshot of a news article about a car crashing into the above restaurant" />
            </Stage>
        </div>
    )
}

Slide.stages = 19

export default Slide
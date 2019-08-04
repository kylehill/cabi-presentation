import React from "react"
import Stage from "../stage"

const Slide = (props) => {
    return (
        <div className="slide">
            <Stage on={1}>
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
            <Stage preload={true} on={2}>
                <img src="1641px-Map_of_the_District_of_Columbia,_1835.jpg" />
            </Stage>
            <Stage preload={true} on={3}>
                <img className="scale" src="L_enfant.gif" />
            </Stage>
            <Stage preload={true} on={4}>
                <img src="LEnfant_plan.jpg" />
            </Stage>
            <Stage preload={true} on={5}>
                <img src="LEnfant_plan_1.png" />
            </Stage>
            <Stage preload={true} on={6}>
                <img src="stamp.jpg" />
            </Stage>
            <Stage preload={true} on={7}>
                <img src="LEnfant_plan_2.png" />
            </Stage>
            <Stage preload={true} on={8}>
                <img src="fuck_this_weather.png" />
            </Stage>
            <Stage preload={true} on={9}>
                <img src="British_Burning_Washington.jpg" />
            </Stage>
            <Stage preload={true} on={10}>
                <img src="map_of_dc.png" />
            </Stage>
            <Stage preload={true} on={11}>
                <img src="LEnfant_plan_3.png" />
            </Stage>
            <Stage preload={true} on={12}>
                <img src="LEnfant_plan_4.png" />
            </Stage>
            <Stage preload={true} on={13}>
                <img src="LEnfant_plan_5.png" />
            </Stage>
            <Stage preload={true} on={14}>
                <img src="LEnfant_plan_6.png" />
            </Stage>
            <Stage preload={true} on={15}>
                <img src="ny-fla.png" />
            </Stage>
            <Stage preload={true} on={16}>
                <img src="dave_thomas_circle.webp" />
            </Stage>
            <Stage preload={true} on={17}>
                <img src="toyota_corolla.png" />
            </Stage>
        </div>
    )
}

Slide.stages = 17

export default Slide
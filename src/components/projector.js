import React from "react"
import { connect } from "react-redux"
import slides from "./slides"
import Clock from "./clock"

import "./projector.css"

const mapDispatchToProps = (dispatch) => {
    return {
        keyLeft() {
            dispatch({ type: "LAST_STAGE" })
        },
        keyRight() {
            dispatch({ type: "NEXT_STAGE" })
        },
        keyUp() {
            dispatch({ type: "LAST_SLIDE" })
        },
        keyDown() {
            dispatch({ type: "NEXT_SLIDE" })
        },
        toggleClock() {
            dispatch({ type: "TOGGLE_CLOCK" })
        },

        playChime() {
            const chime = document.querySelector("#chime")
            chime && chime.play()
        }
    }
}

class Projector extends React.Component {
    constructor(props) {
        super(props)
        this.keyListener = this.keyListener.bind(this)
    }

    componentDidMount(){
        document.addEventListener("keydown", this.keyListener, false)
    }

    componentWillUnmount(){
        document.removeEventListener("keydown", this.keyListener, false)
    }

    keyListener(event) {
        switch (event.keyCode) {
            case 37:
                this.props.keyLeft()
                break

            case 39:
                this.props.keyRight()
                break

            case 38:
                this.props.keyUp()
                break

            case 40:
                this.props.keyDown()
                break

            case 67: // C
                this.props.toggleClock()
                break

            case 83: // S
                this.props.playChime()
                break

            default:
                break
        }
    }

    render() {
        const Slide = slides[this.props.slide]

        return (
            <main>
                <div className="slide-container">
                    <Slide {...this.props} />
                </div>
                <Clock showClock={this.props.showClock} time={this.props.clockTime} />
            </main>
        )
    }
}

export default connect(a => a, mapDispatchToProps)(Projector)
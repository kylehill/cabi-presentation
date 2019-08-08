import React from "react"
import { connect } from "react-redux"

import "./the-algorithm.css"

const TheAlgorithm = ({ count, lines }) => {
    return (
        <div className="algorithm-container">
            <div className="algorithm-line">{count >= 0 ? lines[0] : null}</div>
            <div className="algorithm-line">{count >= 1 ? lines[1] : null}</div>
            <div className="algorithm-line">{count >= 2 ? lines[2] : null}</div>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => ({
    count: state.slideState.lines || 0,
    lines: ownProps.lines
})

export default connect(mapStateToProps)(TheAlgorithm)
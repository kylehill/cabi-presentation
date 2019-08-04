import React from "react"
import { connect } from "react-redux"

const preloadStage = (props) => {
    let visibility = "hidden"

    if (props.on !== undefined) {
        if (props.stage === props.on) {
            visibility = "visible"
        }
    }

    if (props.stage >= props.from) {
        if (!props.to || props.stage <= props.to) {
            visibility = "visible"
        }
    }

    const style = {
        visibility
    }
    return (
        <div style={style}>
            {props.children}
        </div>
    )
}

const Stage = (props) => {
    if (props.preload === true) {
        return preloadStage(props)
    }

    if (props.on !== undefined) {
        if (props.stage === props.on) {
            return (
                <React.Fragment>
                    {props.children}
                </React.Fragment>
            )
        }
    }

    if (props.stage >= props.from) {
        if (!props.to || props.stage <= props.to) {
            return (
                <React.Fragment>
                    {props.children}
                </React.Fragment>
            )
        }
    }

    return null
}

const mapStateToProps = (props, ownProps) => {
    return {
        stage: props.slideStage.current,
        from: ownProps.from,
        to: ownProps.to,
        on: ownProps.on
    }
}

export default connect(mapStateToProps)(Stage)
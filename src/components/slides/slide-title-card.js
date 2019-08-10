import React from "react"

const slideContent = (stage) => {
    switch(stage) {
        case 1:
            return (<div>
                <strong><em>Tour de Bikeshare</em></strong>
                <br />
                <br />
                Setting World Records with JavaScript
            </div>)

        case 2:
            return (<div>
                <p>Hey, I'm <em>Kyle Hill</em></p>
                <p>I'm from <em>Washington, D.C.</em></p>
            </div>)

        case 3:
            return (<div>
                <p>Hey, I'm <em>@kylehill</em></p>
                <p>I'm from <em>Washington, D.C.</em></p>
            </div>)

        case 4:
            return (<div>
                This is a story about <br/><em>terrible ideas</em>
            </div>)

        default:
            return null
    }
}

const TitleCard = (props) => {
    return (
        <div className="slide">
            {slideContent(props.slideStage.current)}
        </div>
    )
}

TitleCard.stages = 4

export default TitleCard
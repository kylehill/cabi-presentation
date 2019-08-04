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
                Hey, I'm <em>Kyle Hill</em>
            </div>)

        case 3:
            return (<div>
                Hey, I'm <em>@kylehill</em>
            </div>)

        case 4:
            return (<div>
                I'm from <em>Washington, D.C.</em>
            </div>)

        case 5:
            return (<div>
                And I work at <em>so, funny story about that</em>
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

TitleCard.stages = 5

export default TitleCard
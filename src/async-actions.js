export default {
    checkForAsync(slide, stage) {
        if (slide.algorithmStage === stage) {
            this.tickLineCount()
        }
    },

    tickResultsDisplay() {
        setTimeout(() => {
            window._store.dispatch({
                type: "UPDATE_TIME_DISPLAY"
            })
        }, 20)
    },

    tickClock() {
        setTimeout(() => {
            window._store.dispatch({
                type: "UPDATE_CLOCK"
            })
        }, 20)
    },

    tickLineCount() {
        setTimeout(() => {
            window._store.dispatch({
                type: "UPDATE_LINE_COUNT"
            })
        }, 1000)
    }
}
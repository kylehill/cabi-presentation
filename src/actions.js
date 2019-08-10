import asyncActions from "./async-actions"
import slides from "./components/slides"
const SLIDE_COUNT = (slides.length - 1)

export default {
    RESET_STATE() {
        return {
            slide: 0,
            slideStage: { 
                current: 1, 
                count: (slides[0].stages || 1) 
            },
            slideState: {},
            showClock: false,
            isClockRunning: false,
            clockStart: null,
            clockTime: 60,
            form: {
                timeSlider: 0
            }
        }
    },

    LAST_STAGE(state, action) {
        if (state.slideStage.current !== 1) {
            const newState = Object.assign({}, state, { 
                slideStage: Object.assign({}, state.slideStage, {
                    current: state.slideStage.current - 1
                })
            })

            asyncActions.checkForAsync(slides[state.slide], newState.slideStage.current)
            return newState
        }

        return this.LAST_SLIDE(state, action)
    },

    LAST_SLIDE(state, action) {
        const newSlideIndex = Math.max(state.slide - 1, 0)
        const newState = Object.assign({}, state, {
            slideState: {},
            slideStage: {
                current: 1,
                count: (slides[newSlideIndex].stages || 1)
            },
            slide: newSlideIndex
        })

        asyncActions.checkForAsync(slides[newSlideIndex], 1)

        return newState
    },
    
    NEXT_STAGE(state, action) {
        if (state.slideStage.current < state.slideStage.count) {
            const newState = Object.assign({}, state, { 
                slideStage: Object.assign({}, state.slideStage, {
                    current: state.slideStage.current + 1
                })
            })

            asyncActions.checkForAsync(slides[state.slide], newState.slideStage.current)
            return newState
        }

        return this.NEXT_SLIDE(state, action)
    },

    NEXT_SLIDE(state, action) {
        const newSlideIndex = Math.min(state.slide + 1, SLIDE_COUNT)
        const newState = Object.assign({}, state, { 
            slideState: {},
            slideStage: { 
                current: 1,
                count: (slides[newSlideIndex].stages || 1)
            },
            slide: newSlideIndex
        })

        asyncActions.checkForAsync(slides[newSlideIndex], 1)

        return newState
    },

    INPUT_CHANGE(state, action) {
        const newForm = Object.assign({}, state.form, {
            [action.control]: action.value
        })
        const newState = Object.assign({}, state, { 
            form: newForm 
        })
        return newState
    },

    CLICK_MAP_STATION(state, action) {
        const newSlideState = Object.assign({}, state.slideState, {
            selectedStation: action.station
        })
        const newState = Object.assign({}, state, {
            slideState: newSlideState
        })
        return newState
    },

    CLICK_MAP_ZOOM_OUT(state, action) {
        const newSlideState = Object.assign({}, state.slideState, {
            zoom: (state.slideState.zoom || 1) * 0.8
        })
        const newState = Object.assign({}, state, {
            slideState: newSlideState
        })
        return newState
    },

    CLICK_MAP_ZOOM_IN(state, action) {
        const newSlideState = Object.assign({}, state.slideState, {
            zoom: (state.slideState.zoom || 1) * 1.25
        })
        const newState = Object.assign({}, state, {
            slideState: newSlideState
        })
        return newState
    },

    TOGGLE_CLOCK(state, action) {
        if (state.showClock === false) {
            return Object.assign({}, state, {
                showClock: true
            })
        }

        if (state.isClockRunning === false) {
            asyncActions.tickClock()
            return Object.assign({}, state, {
                clockStart: Date.now(),
                isClockRunning: true
            })
        }

        return Object.assign({}, state, {
            showClock: false,
            isClockRunning: false,
            clockTime: 60
        })
    },

    START_RESULTS_DISPLAY(state, action) {
        asyncActions.tickResultsDisplay()

        const startTime = Date.now() - ((action.startAt || 0) * action.acceleration)

        return Object.assign({}, state, {
            slideState: {
                play: true,
                timeStart: startTime,
                minutesElapsed: (action.startAt || 0),
                stopAt: (action.stopAt || null),
                acceleration: action.acceleration
            }
        })
    },

    UPDATE_CLOCK(state, action) {
        if (state.showClock === false) {
            return state
        }

        const elapsed = Math.floor((Date.now() - state.clockStart) / 1050)

        asyncActions.tickClock()
        return Object.assign({}, state, {
            clockTime: Math.max(0, 60 - elapsed)
        })
    },

    UPDATE_TIME_DISPLAY(state, action) {
        if (state.slideState.play !== true) {
            return state
        }

        const elapsedMs = Date.now() - state.slideState.timeStart
        const minutes = Math.floor(elapsedMs / state.slideState.acceleration)

        if (state.slideState.stopAt) {
            if (minutes > state.slideState.stopAt) {
                return state
            }
        }

        asyncActions.tickResultsDisplay()
        return Object.assign({}, state, {
            slideState: Object.assign({}, state.slideState, {
                minutesElapsed: minutes
            })
        })
    },

    UPDATE_LINE_COUNT(state, action) {
        if (state.slideState.lines === 3) {
            return state
        }

        asyncActions.tickLineCount()
        return Object.assign({}, state, {
            slideState: Object.assign({}, state.slideState, {
                lines: (state.slideState.lines || 0) + 1
            })
        })
    }
}
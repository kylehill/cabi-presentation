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
        return newState
    },
    
    NEXT_STAGE(state, action) {
        if (state.slideStage.current < state.slideStage.count) {
            const newState = Object.assign({}, state, { 
                slideStage: Object.assign({}, state.slideStage, {
                    current: state.slideStage.current + 1
                })
            })
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

    UPDATE_CLOCK(state, action) {
        if (state.showClock === false) {
            return state
        }

        const elapsed = Math.floor((Date.now() - state.clockStart) / 1000)

        asyncActions.tickClock()
        return Object.assign({}, state, {
            clockTime: Math.max(0, 60 - elapsed)
        })
    }
}
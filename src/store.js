import { createStore } from "redux"
import actions from "./actions"


const newState = (() => actions.RESET_STATE())

const reducerFn = (state = newState(), action) => {
    if (actions[action.type]) {
        return actions[action.type](state, action)
    }

    return state
}

const store = createStore(reducerFn)

export default store
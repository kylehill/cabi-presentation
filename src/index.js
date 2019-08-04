import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import store from "./store"

import Projector from "./components/projector"

window._store = store

ReactDOM.render(
    <Provider store={store}>
        <Projector />
    </Provider>, 
    document.getElementById("root")
)
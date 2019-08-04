export default {
    tickClock() {
        setTimeout(() => {
            window._store.dispatch({
                type: "UPDATE_CLOCK"
            })
        })
    }
}
// All redux data store related initialization or store state hydration
// logic must be written here.

import thunk from "redux-thunk"
import { createStore, applyMiddleware } from "redux"
import moviesReducer from "./Containers/MoviesList/reducer"

const configureStore = preloadedState => {
	const store = createStore(
		moviesReducer,
		preloadedState,
		applyMiddleware(thunk),
		// eslint-disable-next-line
		typeof window !== "undefined" &&
			window.__REDUX_DEVTOOLS_EXTENSION__ &&
			window.__REDUX_DEVTOOLS_EXTENSION__()
	)
	return store
}

export default configureStore
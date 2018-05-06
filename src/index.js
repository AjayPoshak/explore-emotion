import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import configureStore from "./store"
import { injectGlobal } from "emotion"

import MoviesList from "./Containers/MoviesList"
// eslint-disable-next-line no-underscore-dangle
const preloadedState = window.__PRELOADED_STATE__
const store = configureStore(preloadedState) // Initial State can be passed here

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<Route path="/" component={MoviesList} />
		</BrowserRouter>
	</Provider>,
	document.getElementById("root")
)

injectGlobal`
* {
    box-sizing: border-box;
  }

	body {
		margin: 0;
	}
`

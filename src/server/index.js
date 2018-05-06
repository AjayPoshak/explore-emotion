require("babel-polyfill")
// Imports
import Koa from "koa"
import React from "react"
import bodyParser from "koa-bodyparser"
import serve from "koa-static"
import Router from "koa-router"
import axios from "axios"
import { Route } from "react-router-dom"
import { StaticRouter } from "react-router"
import { renderToString } from "react-dom/server"
import { createStore } from "redux"
import { Provider } from "react-redux"
import { renderStylesToString } from "emotion-server"

import moviesReducer from "../Containers/MoviesList/reducer"
import MoviesList from "../Containers/MoviesList"

const app = new Koa(),
	router = new Router()

app.use(serve("."))
app.use(bodyParser())

app.use(async (ctx, next) => {
	try {
		await next()
	} catch (err) {
		console.error(`Global error handling ${err}`)
	}
})

router.get("/", async (ctx, next) => {
	try {
		const response = await axios.get("http://localhost:3004/movies")

		const store = createStore(moviesReducer, { data: response.data }),
			preloadedState = store.getState(),
			context = {}

		const html = renderStylesToString(
			renderToString(
				<Provider store={store}>
					<StaticRouter location={ctx.request.url} context={context}>
						<Route path="/" component={MoviesList} />
					</StaticRouter>
				</Provider>
			)
		)

		if (context.url) {
			// Handle Redirection
			ctx.response.status(301, { Location: context.url })
		} else {
			ctx.body = renderFullPage(html, preloadedState)
		}
		await next()
	} catch (e) {
		console.error(e)
	}
})

app.use(router.routes()).use(router.allowedMethods())

app.listen(3000)

function renderFullPage(html, preloadedState) {
	return `
		<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<meta http-equiv="X-UA-Compatible" content="ie=edge">
		<title>CSS IN JS</title>
	</head>
	<body>
		<div id="root">${html}</div>
	</body>
	<script>
	window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, "\\u003c")}
	</script>
	<script src="http://localhost:8080/build/client/main.bundle.js"></script>
</html>
`
}

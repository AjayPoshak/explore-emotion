import React, { Component } from "react"
import axios from "axios"
import { connect } from "react-redux"
import { css } from "react-emotion"

import Card from "../../Components/Card"
import { dataLoaded, dataFailed } from "./Actions"

const CardWrapper = css`
	padding: 5px;
	background-color: #f2f2f2;
`

class MoviesList extends Component {
	constructor() {
		super()
		this.renderListing = this.renderListing.bind(this)
	}

	componentDidMount() {
		axios
			.get("http://localhost:3004/movies")
			.then(response => {
				console.log(response.data)
				this.props.dispatch(dataLoaded(response.data))
			})
			.catch(err => {
				console.error(err)
				this.props.dispatch(dataFailed(err))
			})
	}

	renderListing() {
		const { movies } = this.props
		if (movies && movies.data) {
			return movies.data.map((movie, index) => <Card data={movie} key={index} />)
		}
		return null
	}

	render() {
		const renderListing = this.renderListing()
		return <section className={CardWrapper}>{renderListing}</section>
	}
}

const mapStateToProps = state => {
	console.log(state)
	return { movies: state.data }
}

export default connect(mapStateToProps)(MoviesList)

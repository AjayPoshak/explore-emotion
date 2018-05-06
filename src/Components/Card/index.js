import React, { PureComponent } from "react"

import {
	CardContainer,
	PosterCard,
	PosterCardImg,
	Title,
	SubText,
	Pills,
	Button,
	MovieInfoWrapper,
} from "./style"

class Card extends PureComponent {
	render() {
		const imgUrl = `//in.bmscdn.com/iedb/movies/images/mobile/listing/medium/${
			this.props.data.ChildEvents[0].EventImageCode
		}.jpg`
		return (
			<CardContainer>
				<PosterCard>
					<PosterCardImg src={imgUrl} />
				</PosterCard>
				<Title fontSize={15}>{this.props.data.EventTitle}</Title>
				<MovieInfoWrapper>
					<div>
						<SubText>{this.props.data.languages.map(lang => lang)}</SubText>
						<span>
							{this.props.data.dimensions.map((dim, index) => (
								<Pills key={index}>{dim}</Pills>
							))}
						</span>
					</div>
					<Button>BOOK</Button>
				</MovieInfoWrapper>
			</CardContainer>
		)
	}
}

export default Card

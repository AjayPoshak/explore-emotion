import styled, { css } from "react-emotion"

/* 
* styled is a way to create React/Preact components that have styles attached to them.
* To use styled, need to install react-emotion
*/

export const CardContainer = styled.section`
	position: relative;
	width: 100%;
	padding: 6px 10px;
	background-color: #fff;
	margin: 15px 0;
`

export const PosterCard = styled.div`
	position: relative;
	width: 100%;
	padding: 0;
`

export const PosterCardImg = styled.img`
	width: 100%;
	height: 100%;
`

// Changing style of a component based on the props
export const Title = styled.header`
	font-size: ${props => props.fontSize || "15"}px;
	line-height: 18px;
	font-weight: 500;
	color: #333;
`
export const SubText = styled.span`
	display: inline-block;
	margin-right: 6px;
	color: #999;
	white-space: nowrap;
`

export const Pills = styled.span`
	display: inline-block;
	cursor: pointer;
	border: 1px solid #d1d1d1;
	color: #666;
	background-color: #fff;
	border-radius: 2px;
	padding: 1px 5px 0;
	white-space: nowrap;
`

// Style composition
const whiteText = css`
	color: #fff;
`

export const Button = styled.button`
	${whiteText};
	text-align: center;
	font-size: 14px;
	line-height: 18px;
	font-weight: 700;
	background-color: #fe2e55;
	outline: none;
	border: none;
	text-transform: uppercase;
	border-radius: 4px;
	letter-spacing: 1px;
	padding: 6px 12px;
	width: 72px;
	height: 30px;

	@media (min-width: 720px) {
		color: #fe2e55;
		background-color: #fff;
	}
`
/* Style as object literals
*	css properties are written in  camel case instead of kebab-case
*/
export const MovieInfoWrapper = styled("article")({
	display: "flex",
	justifyContent: "space-between",
	alignItems: "center",
})

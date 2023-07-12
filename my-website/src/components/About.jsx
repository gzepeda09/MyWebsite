import React, {useState} from 'react'
import {Container, Row, Col, Card, Figure} from 'react-bootstrap'
import styled from 'styled-components'
import {ArrowRightSquareFill, ArrowLeftSquareFill} from 'react-bootstrap-icons'
import {motion} from 'framer-motion'
import "../css/card.css"

export default function About() {

	const [currIndex, setCurrIndex] = useState(0);

	const StyledArrowRightSquareFill = styled(ArrowRightSquareFill) `
		color: #990011;
	`;

	const StyledArrowLeftSquareFill = styled(ArrowLeftSquareFill) `
		color: #990011;
	`;


	const image = [

		{url: "/src/images/1.jpg"},
		{url: "/src/images/2.png"},
		{url: "/src/images/3.png"},
		{url: "/src/images/4.jpg"},
		{url: "/src/images/5.jpg"},
		{url: "/src/images/6.png"},

	];

	const handleRight = () => {

		if (currIndex === 5)
		{
			setCurrIndex(0);
		}
		else {

			setCurrIndex(currIndex + 1);
		}

	};

	const handleLeft = () => {

		if (currIndex === 0)
		{
			setCurrIndex(image.length - 1);
		}
		else {

			setCurrIndex(currIndex - 1);
		}

	};

	return (
		<Container>

			<Row>

				<Col>
					<Container className="text-center imbg">
					<div className="parent">
					  <Figure>
					    <Figure.Image src={image[currIndex].url} className="imghold" fluid />
					  </Figure>

					  <div className="float-right">
					  	<motion.div whileHover={{scale: 1.2}} >
					    	<StyledArrowRightSquareFill size={50} onClick={ handleRight } className="curs" />
					    </motion.div>
					  </div>

					  <div className="float-left">
					    <motion.div whileHover={{scale: 1.2}} >
					    	<StyledArrowLeftSquareFill size={50} onClick={ handleLeft } className="curs" />
					    </motion.div>
					  </div>
					</div>
					</Container>
				</Col>


				<Col>

				<Card className="card1">

					<Card.Title> About </Card.Title>

				</Card>

				</Col>

			</Row>

		</Container>
	)
}
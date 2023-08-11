import React, {useState} from 'react'
import {Row, Col, Container, Card, ListGroup, Image} from 'react-bootstrap'
import {ChevronCompactDown, ChevronCompactUp, ArrowsMove, ArrowLeftRight} from 'react-bootstrap-icons'

import {motion, AnimatePresence} from 'framer-motion'
import "../css/internship.css"


export default function Internship() {
	const[doExpand, setDoExpand] = useState(false);
	const[doExpandBLM, setDoExpandBLM] = useState(false);
	const [isDraggable, setIsDraggable] = useState(false);
	const[currIndex, setCurrIndex] = useState(0);


	const handleExpand = () => {
		setDoExpand(!doExpand);
		setIsDraggable(false);
	}

	const constraints = {
	  top: 0,
	  right: 0,
	  bottom: 0,
	  left: 0,
	};


	console.log(doExpand);



	const chevImg = [

		{url: "/src/images/chev1.png"},
		{url: "/src/images/chev2.png"},
		{url: "/src/images/chev3.png"},
	];
	return (
		<div>
			
			<Container fluid className="  ">

				<Row>
					<Col  xs={3} sm={2} md={12} lg={12}>

							<motion.div className="bg" drag={isDraggable} dragConstraints={constraints}  dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
                dragElastic={{top:0, bottom:0, right: 0.5, left:0.5 }}>
								<Card className={ doExpand ? "expCard" : "chevCard"} >



									<Card.Title className="headBord"> 
										<Container>
											<Row>
												<Col xs={12} sm={12} md={11} lg={11} >
													<h1 className="txtColor"> 

														Chevron SURE

													</h1>
												</Col>


												{ doExpand &&
													<Col xs={1} sm={1} md={1} lg={1}>

														{isDraggable ? <ArrowLeftRight className="mt-3" size={25}  onClick={() => setIsDraggable(!isDraggable)}  style={{cursor: isDraggable ? "grab" : "pointer"}} /> :
														<ArrowsMove className="mt-3" size={25}  onClick={() => setIsDraggable(!isDraggable)}  style={{cursor: isDraggable ? "grab" : "pointer"}} />
														}
													</Col>
												}

											</Row>
										</Container>
									
									</Card.Title>

									{
										doExpand && 

										<Card.Body>

											<Container>

												<Row>
													<Col xs={12} sm={12} md={12} lg={12}>
														<motion.div className="d-flex justify-content-center">  <Image src={chevImg[currIndex].url} fluid className="chevIm "  />
														</motion.div>
													</Col>
												</Row>

												<Row className="mt-3">
													<Col xs={6} sm={6} md={6} lg={6}>
														
														<Card className="bgDCard">

															<Card.Title>
															<h1 className="fnts">Description</h1>
															</Card.Title>


															<div className="blur"> </div>
														</Card>
														
													</Col>

													<Col xs={6} sm={6} md={6} lg={6}>
														<Card className="bgDCard">

															<Card.Title>
															<h1 className="fnts">What I did</h1>
															</Card.Title>


															<div className="blur"> </div>
														</Card>
													</Col>

												</Row>


											</Container>


										</Card.Body>

									}

									<Card.Footer className="d-flex justify-content-center mt-auto cfoot">
									<AnimatePresence>
									<motion.div key={0} whileHover={{ scale: 1.5, cursor: "pointer"}} whileTap={{scale: 1}}>

									{ doExpand ? <ChevronCompactUp size={30}  className="arrOh " onClick={() => handleExpand()}/ > : <ChevronCompactDown onClick={() => handleExpand()} size={30} className="arrOh " /> }

									</motion.div>
									</AnimatePresence>
									</Card.Footer>

								</Card>


							</motion.div>


					</Col>


				</Row>

				<Row className="mt-5 mb-5">

					<Col > 
					<AnimatePresence>
					<motion.div whileHover={{ scale: 1.2 }} whileTap={{scale: 1}} key={1} >
						<Card className={ doExpandBLM ? null : "chevCard"}>

							<Card.Title> 
								<h1 className="txtColor"> 

									BLM 

								</h1>
							</Card.Title>

						</Card>

						</motion.div>
						</AnimatePresence>
					</Col>

				</Row>

				<div className="blur">

				</div>

			</Container>
			
		</div>
	)
}
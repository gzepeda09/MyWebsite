import React, {useState, useRef, useEffect} from 'react'
import {Container, Row, Col, Card, Figure, Carousel, Image} from 'react-bootstrap'
import styled from 'styled-components'
import {ArrowRightSquareFill, ArrowLeftSquareFill, Circle, CircleFill, CaretRightFill} from 'react-bootstrap-icons'
import {motion, AnimatePresence} from 'framer-motion'
import "../css/card.css"

export default function Projects() {
	

	  const containerRef = useRef(null);
	  const [isOverflowing, setIsOverflowing] = useState(false);
	  const [currIndex, setCurrIndex] = useState(0);



	  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
	  const [viewportHeight, setViewportHeight] = useState(window.innerHeight);

	  const image = [

	  	{url: "/src/images/rh1.jpg"},
	  	{url: "/src/images/rh2.png"},
	  	{url: "/src/images/rh3.png"},
	  	{url: "/src/images/rh4.png"},
	  	{url: "/src/images/rh5.png"},
	  ];


	   useEffect(() => {
	     // Function to update viewport size on window resize
	     const updateViewportSize = () => {
	       setViewportWidth(window.innerWidth);
	       setViewportHeight(window.innerHeight);
	     };

	     // Add event listener for window resize
	     window.addEventListener('resize', updateViewportSize);

	     // Clean up the event listener on component unmount
	     return () => {
	       window.removeEventListener('resize', updateViewportSize);
	     };
	   }, []); // Empty dependency array to ensure the effect runs only once on mount
	   console.log(viewportWidth);
	   console.log(viewportHeight);

	  useEffect(() => {
	    const container = containerRef.current;
	    setIsOverflowing(container.scrollWidth > container.clientWidth || container.scrollHeight > container.clientHeight);
	    console.log(isOverflowing);
	}, []);
	

	const [projNo, setProjNo] = useState(1);


	const handleRight = () => {

		if(projNo === 4)
		{
			setProjNo(1);
		}
		else 
		{
			setProjNo(projNo + 1);
		}

	};

	const handleNext = (chosenIndex) => {

		setCurrIndex(chosenIndex);
		console.log("clicked");
	};


	const handleLeft = () => {

		if(projNo === 1)
		{
			setProjNo(4);
		}
		else 
		{
			setProjNo(projNo - 1);
		}

	};


	const StyledArrowRightSquareFill = styled(ArrowRightSquareFill) `
		color: #990011;
	`;

	const StyledCircleFill = styled(CircleFill) `
		color: #990011;
	`;

	const StyledCaretFill = styled(CaretRightFill) `
		color: #990011;
	`;

	const StyledArrowLeftSquareFill = styled(ArrowLeftSquareFill) `
		color: #990011;
	`;
	const paragraphs = [
	   "Informative website that uses the LAMP tech stack. This website was developed by Geno Zepeda, Edward Kyles, Alexis Torres, and David Mesa",
	   "My role was to work with the frontend of this website and develop the UI using tools like jQuery and Bootstrap.",
	   "Was able to work on Backend as well and gained a strong understanding of PHP and SQL",
	   "Improved my communication skills and taught me the importance of consistent communication.",
	   "Obtained a deep understanding of bootstrap grid and Ajax api.",
	 ];


	return (
		<Container fluid>


		<Row>
			<Col>

			{
				projNo === 1 ? (<h1 className="ttle d-flex justify-content-center"> Project 1: RowdyHealth </h1>) : null
			}

			</Col>


		</Row>

		<Row>


			<Col xs={8} sm={12} md={11} className="mx-5">

				<div className="d-flex justify-content-center parent mt-5" >




				{
				   
				     projNo === 1 ? (
				       			<div>
						        



						         	<Container>

					         				<Row>


					         				<motion.div className="tp align-items-center offIm"
					         									initial={{ x: -1000, opacity: 0 }} // Initial position of the image (off the screen to the left) with opacity 0
					         									animate={{ x: viewportWidth > 1724 ? currIndex > 0 ? -300 : -400 : -150,
					         											   y: viewportWidth > 1724 ? 0 : 25,  opacity: 1, scale: currIndex > 0 ? 1.1 : 0.75}}>


					         					<Col>
										      		<Image src={image[currIndex].url} className="img-fluid" />
										      	</Col>


										      	</motion.div>

										    </Row>


											<Row className="d-flex justify-content-center">

											<motion.div initial={{opacity: 0,
																		y: -2000}} 
														animate={{y: viewportWidth > 1724 ? viewportHeight - 850 : viewportHeight > 2000 ? viewportHeight - 100 : viewportHeight - 500,
																  x: viewportWidth > 1724 ? viewportWidth - 2250 : currIndex >= 1 ? viewportWidth - 1480 : viewportWidth < 1000 ? viewportWidth - 1200 : viewportWidth - 1400,
																  opacity: 1}}				>
											
  			             					<Col md={1} className="d-flex justify-content-center ">
  			    					      	
  			    					      		<motion.span className="curs" whileHover= {{scale: 1.5 }} onClick={() => handleNext(0) } >
  			    					      		{
  			    					      			currIndex === 0 ?  <StyledCaretFill size={35} />
  			    					      			: <Circle size={13} />
  			    					      		}
  			    					      		</motion.span>

  			    					      	</Col>



  		      	         					<Col md={1} className="d-flex justify-content-center">
  		      						      	
  		      						      		<motion.span className="curs" whileHover= {{scale: 1.5}}>
  		      						      		

  		      						      		{
  			    					      			currIndex === 1 ?  <StyledCaretFill size={35} />
  			    					      			: <Circle onClick={() => handleNext(1) } size={13} />
  			    					      		}
  		      						      		</motion.span>

  		      						      	</Col>


        		             					<Col md={1} className="d-flex justify-content-center">
        		    					      	
        		    					      		<motion.span className="curs"whileHover= {{scale: 1.5}}>

        		    					      		

        		    					      		{
	  			    					      			currIndex === 2 ?  <StyledCaretFill size={35} />
	  			    					      			: <Circle onClick={() => handleNext(2) } size={13} />
  			    					      			}
        		    					      		</motion.span>

        		    					      	</Col>


        	      	
        	      	         					<Col md={1} className="d-flex justify-content-center">
        	      						      	
        	      						      		<motion.span className="curs" whileHover= {{scale: 1.5}} >
        	      						      		

        	      						      		{
	  			    					      			currIndex === 3 ?  <StyledCaretFill size={35} />
	  			    					      			: <Circle onClick={() => handleNext(3) } size={13} />
  			    					      			}
        	      						      		</motion.span>

        	      						      	</Col>

  		      	         					<Col md={1} className="d-flex justify-content-center">
  		      						      	
  		      						      		<motion.span className="curs" whileHover= {{scale: 1.5}}>
  		      						      		
  		      						      		{
	  			    					      			currIndex === 4 ?  <StyledCaretFill size={35} />
	  			    					      			: <Circle onClick={() => handleNext(4) } size={13} />
  			    					      		}
  		      						      		</motion.span>

  		      						      	</Col>
  		      						      
  		      						    </motion.div>


  			    					    </Row>

											</Container>
											   



  			    					</div> ) : projNo === 2 ? (<p> hello </p>) : null




				     
				  
				 }
				 <AnimatePresence>
				 <motion.div
				 			key={currIndex}
         					initial={{ x: 1000, opacity: 0 }} 
         					animate={{ x: viewportWidth > 1724 ?  currIndex > 0 ? 100 : 0 : 120,
         							   y: viewportWidth > 1724 ? 140 : currIndex === 4 ? -100: -150,  opacity: 1, scale: viewportWidth > 1724 ? 0.8 : 0.6
         							   }}
         					transition={{delay: 0.11}}
         		 >

				<Card  className="pcard reSze"  ref={containerRef}>
					

					<Card.Title>
					{
						projNo === 1 ? ( <AnimatePresence> <motion.div initial={{ opacity:0 , 
					     															y: -50}}
  													animate={{ opacity:1 ,
  																	y: 0}} 
  													transition={{ duration: 0.5, delay: 0.1 }}
  													exit={{ x: "-100vh", opacity: 0 }}
  													className="text-center"><h1>RowdyHealth</h1></motion.div> < /AnimatePresence>):null


					     
					  
					 }
					</Card.Title>


					
					<Card.Body>

					

	 					{
	 						// projNo === 1 ? ( <AnimatePresence ><motion.p  
	 						// 						key = {0}
	 						// 						initial={{ opacity:0 ,
							// 										y: 50}}
  							// 						animate={{ opacity:1 ,
  							// 									y: 0}} 
  							// 						transition={{ duration: 0.5, delay: 0.1 }}
							// 		className="text-center ctent">
							// 		{ currIndex === 0 ? <motion.p key = {0} initial= {{opacity: 0}}
							// 							 							   animate={{opacity: 1}}
							// 							 							   transition={{delay: 0.12}}> {paragraphs[currIndex]} </motion.p>
							// 							 : currIndex === 1 ? <motion.p key={1}initial= {{opacity: 0}}
							// 							 							   animate={{opacity: 1}}
							// 							 							   transition={{delay: 0.12}}> {paragraphs[currIndex]} </motion.p>
							// 							 : currIndex === 2 ? "Was able to work on Backend as well and gained a strong understanding of PHP and SQL " 
							// 							 : currIndex === 3 ? "Improved my communication skills and taught me the importance of consistent communication." 
							// 							 : currIndex === 4 ? "Obtained a deep understanding of bootstrap grid and Ajax api." : null
							// 			 } </motion.p></AnimatePresence> ):null

	 						projNo === 1 ? (<AnimatePresence ><motion.p  
	 												key = {currIndex}
	 												initial={{ opacity:0 ,
																	y: 50}}
  													animate={{ opacity:1 ,
  																y: 0}} 
  													transition={{ duration: 0.5, delay: 0.15 }}
									className="text-center ctent">
										{paragraphs[currIndex]}
										</motion.p></AnimatePresence>) : null
						}
	 					     
	 					  
	 					 



	 				

					</Card.Body>


				</Card>

				</motion.div>
				</AnimatePresence>

				<div className="float-right">
					<motion.div whileHover={{scale: 1.2}} >
				  	<StyledArrowRightSquareFill size={50}  onClick = {() => handleRight() } className="curs" />
				  </motion.div>
				</div>

				<div className="float-left">
				  <motion.div whileHover={{scale: 1.2}} >
				  	<StyledArrowLeftSquareFill size={50} onClick = {() => handleLeft() } className="curs" />
				  </motion.div>
				</div>

				
				</div>

			</Col>


		</Row>


		</Container>
	)
}
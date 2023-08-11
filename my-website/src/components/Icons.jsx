import React, {useState} from 'react'
import { Container, Row, Col, Button, Card} from 'react-bootstrap'
import { InfoCircle, Code, Briefcase, PersonCircle} from 'react-bootstrap-icons'
import { motion } from 'framer-motion'
import { MDBTypography, MDBIcon } from 'mdb-react-ui-kit'
import styled from 'styled-components'
import About from "./About.jsx"
import Side from "./Sidebar.jsx"
import Projects from "./Projects.jsx"
import Internship from "./Internship.jsx"
import "../css/navbar.css"

export default function Icons() {

	const [mode, setMode] = useState("initial")

	const StyledPersonCircle = styled(PersonCircle)`
	  color: #990011; 
	`;

	const StyledInfoCircle = styled(InfoCircle)`
	  color: #990011; 
	`;

	const StyledCode = styled(Code)`
	  color: #990011; 
	`;

	const StyledBriefcase = styled(Briefcase)`
	  color: #990011; 
	`;

	console.log(mode);

	return (
		<Container>

		  <Row>

		  	<Col sm={1} md={1} lg={1} >

		  		<Side />

		  	</Col>

		    <Col className="d-flex justify-content-between mt-5">

		      {/*About*/}
		      <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 1.0 }}  className="mx-3 c1" onClick = {() => setMode("about")}

		      > <StyledPersonCircle size={50} /> 		     
		               <MDBTypography> <MDBTypography tag='em' > <p> About Me </p> </MDBTypography> </MDBTypography> </motion.div>



		      

		      {/*Projects*/}
		      <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 1.0 }} className="mx-3 c1"><StyledCode onClick = {() => setMode("projects")} size={50}/> </motion.div>
		      

		      {/*Internships*/}
		      <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 1.0 }} className="mx-3 c1"><StyledBriefcase onClick = {() => setMode("intern")} size={50}/> </motion.div>
		     

		      {/*Education, Skills, Contact form*/}
		      <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 1.0 }} className="mx-3 c1"><StyledInfoCircle onClick = {() => setMode("info")} size={50}/></motion.div>


		    </Col>

		  </Row>

		  <Row className="justify-content-md-center">

		  	<Col>
		  		{mode === "about" &&
		  			<About />
		  		}

		  		{mode === "projects" &&
		  			<Projects />
		  		}
		  		
		  		{mode === "intern" &&
		  			<Internship />
		  		}

		  		{mode === "info" &&
		  			<h1 className="abt"> put info about education skills and a link to a contact form </h1>
		  		}
		  	</Col>


		  </Row>


		</Container>
	)
}
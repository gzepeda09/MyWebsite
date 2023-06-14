import React, { useRef, useState } from 'react';
import { Container, Row, Col, Nav, Navbar, NavDropdown, Offcanvas} from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/navbar.css';
import logoImage from '../images/ppic.png';
import Projects from './Projects.jsx';
import { ArrowDown } from 'react-bootstrap-icons';


const Body = () => {
  const sectionRefs = useRef([]);
  const [show, setShow] = useState(false);

  const handleShow = () => {

    setShow(true);

  };

  const closeShow = () => {

    setShow(false);
  };

  const scrollToSection = (index) => {
    sectionRefs.current[index].scrollIntoView({ behavior: 'smooth' });
  };

  console.log(show);
  return (
   <Container fluid>
     <div className="mx-auto">
      <ArrowDown color="royalblue" size={15} onClick = { handleShow }/>
     </div>

      <Offcanvas show={show} onHide={closeShow} responsive="lg" placement='top'>
             <Offcanvas.Header closeButton>
               <Offcanvas.Title>Responsive offcanvas</Offcanvas.Title>
             </Offcanvas.Header>
             <Offcanvas.Body>
                <ul>
                  <li onClick={() => { scrollToSection(0);
                                       closeShow(); }}>Section 1</li>
                  <li onClick={() => { scrollToSection(1);
                                       closeShow(); }}>Section 2</li>
                  <li onClick={() => { scrollToSection(2);
                                       closeShow(); }}>Section 3</li>
                  <li onClick={() => { scrollToSection(3);
                                       closeShow(); }}>Section 4</li>
                </ul>
             </Offcanvas.Body>
      </Offcanvas>

     <Row>
       <Col md={2} lg={2} sm={1}>


         <Navbar /*expand="md"*/>

         <div className="d-flex flex-column align-items-center">

         <Navbar.Brand >
           <img src={logoImage} alt="Logo" className="rounded-image" />
         </Navbar.Brand>

         <Navbar.Collapse id="sidebar-nav">

           <Nav className="flex-column">
             <Nav.Link onClick={() => scrollToSection(0)}>Section 1</Nav.Link>
             <Nav.Link onClick={() => scrollToSection(1)}>Section 2</Nav.Link>
             <Nav.Link onClick={() => scrollToSection(2)}>Section 3</Nav.Link>
             <Nav.Link onClick={() => scrollToSection(3)}>Section 4</Nav.Link>
           </Nav>
           </Navbar.Collapse>
           </div>
         </Navbar >
       </Col>
       <Col>
         <div ref={(ref) => (sectionRefs.current[0] = ref)}>
           <h1>Section 1</h1>
           <p>This is the first section of the webpage.</p>
         </div>
         <div ref={(ref) => (sectionRefs.current[1] = ref)}>
           <h1>Projects</h1>

           <Projects />
         </div>
         <div ref={(ref) => (sectionRefs.current[2] = ref)}>
           <h1>Section 3</h1>
           <p>This is the third section of the webpage.</p>
         </div>
         <div ref={(ref) => (sectionRefs.current[3] = ref)}>
           <h1>Section 4</h1>
           <p>This is the fourth section of the webpage.</p>
         </div>
       </Col>
     </Row>
   </Container>
  );
};

export default Body;
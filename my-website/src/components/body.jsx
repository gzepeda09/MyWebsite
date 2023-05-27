import React, { useRef } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const body = () => {
  const sectionRefs = useRef([]);

  const scrollToSection = (index) => {
    sectionRefs.current[index].scrollIntoView({ behavior: 'smooth' });
  };

  return (
   <Container>
     <Row>
       <Col md={4}>
         <nav>
           <ul>
             <li onClick={() => scrollToSection(0)}>Section 1</li>
             <li onClick={() => scrollToSection(1)}>Section 2</li>
             <li onClick={() => scrollToSection(2)}>Section 3</li>
             <li onClick={() => scrollToSection(3)}>Section 4</li>
           </ul>
         </nav>
       </Col>
       <Col md={8} sm={4}>
         <div ref={(ref) => (sectionRefs.current[0] = ref)}>
           <h1>Section 1</h1>
           <p>This is the first section of the webpage.</p>
         </div>
         <div ref={(ref) => (sectionRefs.current[1] = ref)}>
           <h1>Section 2</h1>
           <p>This is the second section of the webpage.</p>
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

export default body;
import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const NavBar = () => {
  return (
    <Navbar bg="dark" expand="lg" className="flex-column" fixed="bottom">
      <Navbar.Brand href="#">Logo</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto flex-column">
          <Nav.Link href="#" className="text-white">Home</Nav.Link>
          <Nav.Link href="#" className="text-white">About</Nav.Link>
          <Nav.Link href="#" className="text-white">Projects</Nav.Link>
          <Nav.Link href="#" className="text-white">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
import React from 'react';
import { Container, Nav , Navbar, NavDropdown } from 'react-bootstrap';
import './Header.css';


const Header = () => {
    return (
    <div>
<Navbar className="custom-top" collapseOnSelect expand="lg" variant="dark" >
  <Container className="bg-dark mt--5">
  <Navbar.Brand href="#home" className>Print-In-London </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">

    
    </Nav>
    <Nav>
            <Nav.Link className="custom-hover text-white" href="#features">Home</Nav.Link>
      <Nav.Link className="custom-hover text-white" href="#pricing">Our services</Nav.Link>
      <Nav.Link className="custom-hover text-white" href="#pricing">How to place order</Nav.Link>
      <Nav.Link className="custom-hover text-white" href="#pricing">About</Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar> 

    </div>
    );
};

export default Header;
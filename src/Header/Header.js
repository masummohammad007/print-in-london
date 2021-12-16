import React from 'react';
import { Container, Nav , Navbar,} from 'react-bootstrap';
import './Header.css';
import { Link } from "react-router-dom";


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
      < Link className="custom-hover text-white m-2" to="/home">Home</Link>
      < Link className="custom-hover text-white m-2" to="/services">Services</Link>
      < Link className="custom-hover text-white m-2" to="/how-to-place-order">How to place order</Link>
      < Link className="custom-hover text-white m-2" to="/about">About</Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar> 

    </div>
    );
};

export default Header;
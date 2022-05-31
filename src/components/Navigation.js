import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

import Logo from '../images/logo.png';

const Navigation = () => {
    return (
        <Navbar sticky="top" className='navigation' variant="dark" >
            <Container className='sticky-navbar'>
              <Navbar.Brand href="#home">
              <img src={Logo} className="app-logo" alt="logo" /></Navbar.Brand>
              <Navbar.Brand href="#home">Soundwave</Navbar.Brand>
              <Nav.Link className='nav-link' href="#Discover">Discover</Nav.Link>
              <Nav.Link href="#Join">Join</Nav.Link>
            </Container>
        </Navbar>
    /*<Navbar bg="dark" variant="dark" className="navigation">
  <Container>
    <a><img src={Logo} className="App-logo" alt="logo" /></a>
    <a><Navbar.Brand href="#home">Soundwave</Navbar.Brand></a>
    
    <a><Nav.Link href="#Discover">Discover</Nav.Link></a>
    <a><Nav.Link href="#Join">Join</Nav.Link></a>
    
  </Container>
</Navbar>*/
    )
}

export default Navigation;
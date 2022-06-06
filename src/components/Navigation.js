import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

import Logo from '../images/logo.png';

const Navigation = () => {
    return (
        <Navbar sticky="top" className='navigation' variant="dark" >
            <Container className='sticky-navbar'>
              <a> <Navbar.Brand Link className='brand' href="#home">
              <img src={Logo} className="app-logo" alt="logo" /></Navbar.Brand></a>
              <a><Navbar.Brand Link href="#home">Soundwave</Navbar.Brand></a>
              <a><Nav.Link className='nav-link my-2 my-lg-0' href="#Discover">Discover</Nav.Link></a>
              <a><Nav.Link className='nav-link my-2 my-lg-0' href="#Join">Join</Nav.Link></a>
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
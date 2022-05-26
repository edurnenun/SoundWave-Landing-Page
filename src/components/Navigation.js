import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

import Logo from '../images/logo.png';

const Navigation = () => {
    return (
        <Navbar>
  <Container>
    <img src={Logo} className="App-logo" alt="logo" />
    <Navbar.Brand href="#home">Soundwave</Navbar.Brand>
    
        <Nav.Link href="#Discover">Discover</Nav.Link>
        <Nav.Link href="#Join">Join</Nav.Link>
    
  </Container>
</Navbar>
    )
}

export default Navigation;
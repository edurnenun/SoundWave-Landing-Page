import React from 'react';

import PageGirl from '../images/landing-page-girl.png'
import { Container } from 'react-bootstrap';

const Mujer = () => (
  <Container className='girl-container'>
    <div className="girl">
    <img src={PageGirl} className="girl-image" alt="chica de perfil" />

 
    </div>
  </Container>
    
  );



export default Mujer;
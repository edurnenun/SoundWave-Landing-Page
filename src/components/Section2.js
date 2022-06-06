import React from "react";

import Microphone from '../images/albums.svg';
import Albums from '../images/microphone.svg';
import More from '../images/more.svg';
import Covers from '../images/covers.jpg';
import { Container } from "react-bootstrap";

const Section2 = () => (
  <div className="discover">
    <Container className="discover-container" id="Discover">
      <h1>Discover new music</h1>

      <div className="div-discover-icons">
        <div className="discover-card-icon"> 
          <img src={Microphone} className="discover-icons" alt="microphone icon" />
          <a><p className="p-icons">Charts</p></a>
        </div> 
        <div className="discover-card-icon">
          <img src={Albums} className="discover-icons" alt="albuns icon" />
          <a><p className="p-icons">Albums</p></a>
        </div>
        <div className="discover-card-icon">
          <img src={More} className="discover-icons" alt="more icon" /> 
          <a><p className="p-icons">More</p></a>
        </div> 
      </div>
    
      <p className="discover-p">
        By joining you can benefit by listening to the latest albums released
      </p>
    </Container>
    <div className="covers">
      <img src={Covers}  alt="covers" />
    </div> 
  </div>
);



export default Section2;
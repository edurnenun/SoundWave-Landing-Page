import React from "react";

import Microphone from '../images/albums.svg';
import Albums from '../images/microphone.svg';
import More from '../images/more.svg';
import Covers from '../images/covers.jpg';

const Section2 = () => (
  <div className="discover">

    <h1>Discover new music</h1>

    <div className="div-discover-icons">
      <div className="discover-card-icon"> 
        <img src={Microphone} className="discover-icons" alt="microphone icon" />
        <p className="p-icons">Charts</p>
      </div> 
      <div className="discover-card-icon">
        <img src={Albums} className="discover-icons" alt="albuns icon" />
        <p className="p-icons">Albums</p>
      </div>
      <div className="discover-card-icon">
        <img src={More} className="discover-icons" alt="more icon" /> 
        <p className="p-icons">More</p>
      </div> 
    </div>

    <p className="discover-p">
      By joining you can benefit by listening to the latest albums released
    </p>

    <div className="covers">
      <img src={Covers}  alt="covers" />
    </div> 
  </div>
);



export default Section2;
import React from "react";

import Mujer from "./Mujer.js";
import CirculoAzulPeq from "./CirculoAzulPeq.js";
import CirculoAzulBig from  "./CirculoAzulBig.js";
import CirculoMorado from "./CirculoMorado.js";


const Hero = () => (
  <div className="hero" id="Home">
    <CirculoAzulPeq />
    <Mujer />
    <div className="hero-card">
      <h1>Feel The Music</h1> 
      <h3>Stream over 20 thounsand songs with one click</h3>
      <a Link href="#Join"><button className="hero-button">Join Now</button></a>
    </div>
    
      <CirculoMorado />
      <CirculoAzulBig />
    
  </div>
);



export default Hero;
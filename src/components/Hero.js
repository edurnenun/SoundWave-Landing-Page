import React from "react";

import CirculoAzulPeq from "./CirculoAzulPeq.js";
import CirculoAzulBig from  "./CirculoAzulBig.js";
import CirculoMorado from "./CirculoMorado.js";


const Hero = () => (
  <div className="hero">
    <CirculoAzulPeq />
    
    <div className="hero-card">
      <h1>Feel The Music</h1> 
      <h3>Stream over 20 thounsand songs with one click</h3>
      <button className="hero-button">Join Now</button>
    </div>
    
      <CirculoMorado />
      <CirculoAzulBig />
    
  </div>
);



export default Hero;
import React from "react";

import Twitter from '../images/twitter.svg';
import Facebook from '../images/facebook.svg';

const Footer = () => (
  <div className="footer">
    <ul>
              <li className="list-unstyled">
                <a href="#!">About Us</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Contact</a>
              </li>
              <li className="list-unstyled social">
              <img src={Twitter} className="app-icon" alt="Twitter" /><a href="#!">Twitter</a>
              </li>
              <li className="list-unstyled social">
              <img src={Facebook} className="app-icon" alt="Facebook" /><a href="#!">Facebook</a>
              </li>
            </ul>
  </div>
);

export default Footer;
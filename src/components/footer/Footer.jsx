import { IoLogoLinkedin } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import './Footer.css'
import { NavLink } from "react-router-dom";
const Footer = () => {
  return (
    <div className="footer">
      <div className="row">
          <a href="https://www.linkedin.com/in/ayush-agrawal-875279235/"><IoLogoLinkedin className="i" /></a>
          <a href="https://www.instagram.com/mr.agrawal_1733?igsh=cmNmN2lseTZ6YjM5"><FaInstagram  className= "i"/></a>
          <a href="https://github.com/ayushagrawal2806"><FaGithub className="i"/></a>
      </div>

    <div className="row">
      <ul>
        <li><NavLink to={"/"}>Home</NavLink></li>
        <li><NavLink to={"/ContactUs"}>Contact us</NavLink></li>
      </ul>
    </div>

    <div className="row">
      CINE FUSION Copyright © 2024 Cine Fusion - All rights reserved || Designed By: Ayush 
    </div>

  </div>
  
  )
}

export default Footer
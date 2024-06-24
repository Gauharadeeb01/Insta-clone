import React from 'react'
import logo from "../img/images.png";
import "./Navbar.css" ;
import {Link} from "react-router-dom";    
export default function Navbar() {
  return (
    <div className="navbar">
  <img src={logo} alt="" />
  <ul className="nav-menu">
   <Link to="/SignUp">
        <li>SignUp</li> 
   </Link>
   <Link to="/SignIn">
        <li>SignIn</li> 
   </Link>
   <Link to="/Profile">
        <li>Profile</li> 
   </Link>
  </ul>
  </div> 
  );
}

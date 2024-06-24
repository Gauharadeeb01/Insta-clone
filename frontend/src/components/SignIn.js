import React from 'react';
import "./SignIn.css";
import logo from "../img/images.png";
import { Link } from "react-router-dom"; // Corrected import statement

export default function SignIn() {
  return (
    <div className="signIn">
      <div>
        <div className="loginForm">
          <img className="signUpLogo" src={logo} alt=""/>
          <div><input type="email" name="email" id="email" placeholder="Email"/></div>
          <div><input type="password" name="password" id="password" placeholder="Password"/></div>
          <input type="submit" id="login-btn" value="SignIn"/>
        </div>
        <div className="loginForm2">
          Don't have an account? 
          <Link to="/signUp">
            <span style={{color: "blue", cursor: "pointer"}}>Sign Up</span> {/* Corrected text */}
          </Link>
        </div>
      </div>
    </div>
  );
}

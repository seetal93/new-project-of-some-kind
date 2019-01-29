import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';



const Navbar = () => {

    return (
      //<Router>
      <nav className="nav-wrapper yellow darken-3">
      <div className = "container">
      <a className="brand-logo">Home For Dogs</a>

      <ul className= "left">
      <li><a href="/">Home</a></li>
      <li><a href="/about">About</a></li>
      <li><a href="/contact">Contact</a></li>
      <li><a href="/logIn">Log In</a></li>
      <li><a href="/signUp">Sign Up</a></li>
      </ul>

      </div>

      </nav>
      //</Router>
    );

}

export default Navbar;

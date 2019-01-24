import React, { Component } from 'react';
import './App.css';

class Header extends Component {
  render() {
    return (
      <nav>
        <a href="/html/">Our Centres</a>
        <a href="/jquery/">Sign up/Sign in</a>
        <a href="/js/">Contact</a>
        <a href="/css/">About Us</a>
      </nav>
    );
  }
}

export default Header;

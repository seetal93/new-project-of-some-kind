import React, { Component } from 'react';
import './App.css';


class Navbar extends Component {
  render() {
    return (
      <ul>
      <li><a href="default.asp">Rehoming</a></li>
      <li><a href="news.asp">Sponsor</a></li>
      <li><a href="contact.asp">Get Involved</a></li>
      <li><a href="about.asp">Help & advice</a></li>
      </ul>

    );
  }
}

export default Navbar;

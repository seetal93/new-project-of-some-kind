import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import SignIn from './Components/SignIn.js';


class Navbar extends Component {
  render() {
    return (
      <Router>

      <div className = "Navbar">
        <Link to = '/SignIn'>Sign In</Link>



      <Route path="/SignIn" component={SignIn} />
      </div>
      </Router>
    );
  }
}

export default Navbar;

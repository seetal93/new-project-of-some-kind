import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import SignIn from './Components/SignIn.js';


class Navbar extends Component {
  render() {
    return (
      <Router>
      <nav>
      <div className = "Navbar">
      <Link to = '/Components/SignIn'>Sign In</Link>

      <Route exact path="/Components/SignIn" component={SignIn} />
      </div>
      </nav>
      </Router>



    );
  }
}

export default Navbar;

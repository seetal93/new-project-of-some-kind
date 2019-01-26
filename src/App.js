import React, { Component } from 'react';
import './App.css';
import Navbar from './Navbar.js';
import dog from './dog.jpg';
import DogNames from './DogNames.js';
import SignIn from './Components/SignIn.js';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class App extends Component {
  render() {
    const title = 'Home For Dogs';
    const tagLine = 'Rehoming Dogs in Manchester';
    return (

      <Router>
      <div className="App">
      <Navbar />
      
      <h1 id="header"> {title} </h1>
      <img src={dog} alt="main dog" height="239" width="194"/>
      <h4> {tagLine} </h4>
      <DogNames />
      <body>
      </body>
      </div>
      </Router>



    );
  }
}

export default App;

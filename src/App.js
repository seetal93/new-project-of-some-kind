import React, { Component } from 'react';
import './App.css';
import Navbar from './Navbar.js';
import dog from './dog.jpg';
import DogNames from './DogNames.js';

class App extends Component {
  render() {
    const title = 'Home For Dogs';
    const tagLine = 'Rehoming Dogs in Manchester';
    return (
      <div className="App">
      <Navbar />

      <h1 id="header"> {title} </h1>
      <img src={dog} alt="main dog" height="239" width="194"/>
      <h4> {tagLine} </h4>
      <DogNames />
      <body>
      </body>
      </div>

    );
  }
}

export default App;

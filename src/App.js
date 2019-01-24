import React, { Component } from 'react';
import './App.css';
import Navbar from './Navbar.js';
import Dog from './Dog.js';
import Header from './Header.js';
import DogNames from './DogNames.js';

class App extends Component {
  render() {
    const title = 'Home For Dogs';
    const tagLine = 'Rehoming Dogs in the UK';
    const tagLine2 = 'Find A Dog to Rehome';
    return (
      <div className="App">
      <Header />
      <Navbar />
      <h1 id="header"> {title} </h1>
      <Dog />
      <h4> {tagLine} </h4>
      <DogNames />
      <body>
      </body>
      </div>

    );
  }
}

export default App;

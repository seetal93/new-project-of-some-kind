import React, { Component } from 'react';
import './App.css';
import Navbar from './Navbar.js';
import Dog from './Dog.js';
import Header from './Header.js';

class App extends Component {
  render() {
    const title = 'Home For Dogs';
    const tagLine = 'Rehoming Dogs in the UK'
    const tagLine2 = 'Find a dog to rehome'
    return (
      <div className="App">
      <Header />
      <Navbar />
      <h1> {title} </h1>
      <Dog />
      <h4> {tagLine} </h4>
      <section>
      {tagLine2}
      </section>
      <body>
      </body>
      </div>

    );
  }
}

export default App;

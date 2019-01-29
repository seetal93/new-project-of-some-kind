import React, { Component } from 'react';
import './App.css';
import Navbar from './Components/Navbar'
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'
import Login from'./Components/Login'


class App extends Component {
  render() {
    const tagLine = 'Rehoming Dogs in Manchester';
    return (
      <BrowserRouter>
      <div className="App">
      <Navbar />
      <Route exact path='/' component={Home} />
      <Route path='/about' component={About} />
      <Route path='/contact' component={Contact} />
      <Route path='/login' component={Login} />
      </div>
      </BrowserRouter>
    );
  }
}

export default App;

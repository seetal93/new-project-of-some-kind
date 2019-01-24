import React, { Component } from 'react';
import './App.css';
import dog from './dog.jpg';


class Dog extends Component {
  render() {
    return (

    <img src={dog} height="259" width="194"/>

    )
  };
}
export default Dog;

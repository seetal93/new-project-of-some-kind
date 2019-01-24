import React, { Component } from 'react';
import './App.css';
import fluffy from './fluffy.jpg';
import pinscher from './pinscher.jpg';
import welshcorgi from './welshcorgi.jpg';
import fluffy2 from './fluffy2.jpg';

class DogNames extends Component {
  render() {
    return (
    <div class="row">
    <div class="column">
    <img src={fluffy}  height="170" width="225"/>
    </div>
    <div class="column">
      <img src={pinscher}  height="170" width="225"/>
    </div>
    <div class="column">
      <img src={welshcorgi}  height="170" width="225"/>
    </div>
    <div class="column">
      <img src={fluffy2}  height="170" width="225"/>
    </div>
  </div>



    )
  };
}
export default DogNames;

import React, { Component } from 'react';

import fluffy from '../Images/fluffy.jpg';
import pinscher from '../Images/pinscher.jpg';
import welshcorgi from '../Images/welshcorgi.jpg';
import fluffy2 from '../Images/fluffy2.jpg';
import frenchbulldog from '../Images/frenchbulldog.jpg';

class DogNames extends Component {
  render() {
    return (
    <div className="row">
    <div className="column dog-card">
    <img src={fluffy} alt="fluffy" height="170" width="225"/>
    <span className="dog-image-name">Steve</span>
    <span className="dog-image-breed">Fluffy Shit</span>
    </div>
    <div className="column dog-card">
      <img src={pinscher} alt="pinscher"  height="170" width="225"/>
      <span className="dog-image-name">Bob</span>
      <span className="dog-image-breed">Pitbull</span>
    </div>
    <div className="column dog-card">
      <img src={welshcorgi} alt="welshcorgi"  height="170" width="225"/>
      <span className="dog-image-name">Gareth</span>
      <span className="dog-image-breed">Australian Shepard</span>
    </div>
    <div class="column dog-card">
      <img src={fluffy2} alt="fluffy2"  height="170" width="225"/>
      <span className="dog-image-name">Fluffy</span>
      <span className="dog-image-breed">Chow Chow</span>
    </div>
    <div class="column dog-card">
      <img src={frenchbulldog} alt="frenchbulldog"  height="170" width="225"/>
      <span className="dog-image-name">Harley</span>
      <span className="dog-image-breed">French Bulldog</span>
    </div>
  </div>



    )
  };
}
export default DogNames;

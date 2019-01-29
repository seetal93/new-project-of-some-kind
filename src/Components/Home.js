import React from 'react';
import DogNames from '../Components/DogNames'
import dog from '../Images/dog.jpg';

const Home = () => {
  const tagline = "Rehoming Dogs In Manchester"
  const intro = "A few of our residents.."
  return (
    <div className="homeContainer">
    <p></p>
    <img src = {dog} alt= "main" width="225px" height="170px"/>
    <h4> {tagline} </h4>
    <h4 id="cute"> {intro} </h4>
    <DogNames />
  
    </div>


  );
}

export default Home;

import React from 'react';

import Block from '../components/Block';
import Carousel from '../components/Carousel';

class HomePage extends React.Component {

  componentDidMount() {
    var text = document.getElementById('text');
    var word = text.getElementsByTagName('span');

    var i = 0;

    function rotator(){
      word[i].style.display = 'none';
      i = (i + 1) % word.length;
      word[i].style.display = 'initial';
    }

    setInterval(rotator, 1500);
  }

 render() {
  return(
  <div className="home-page-content">
    <h2 id="text" className="rotator">
      Be 
      <div className="rotating-words">
        <span className="rotator-word" style={{display: 'initial'}}> Determined</span>
        <span className="rotator-word"> Creative</span>
        <span className="rotator-word"> Focused</span>
        <span className="rotator-word"> Unique</span>
        <span className="rotator-word"> Ambitious</span>
        <span className="rotator-word"> Awesome</span>
      </div>
   
    </h2>

    <Carousel />

  </div>
  )
 } 
}

export default HomePage;
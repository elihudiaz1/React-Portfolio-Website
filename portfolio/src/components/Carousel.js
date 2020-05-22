import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import Card from '../components/Card';

import teeth from '../assets/images/teeth.png';
import car from '../assets/images/car.png';
import unicorn from '../assets/images/unicorn.png';


class Carousel extends React.Component {
 constructor(props) {
  super(props)
  this.state = {
   items: [
    {
     id: 0,
     title: 'University Parking',
     subTitle: 'A mobile application for students that keeps track of parking garages at their universities in order to help them decide where to park. \n\nThis project uses Google\'s Cloud Firestore service as the backend architecture along with the React Native Framework for the frontend user interface.',
     imgSrc: teeth,
     link: 'https://github.com/elihudiaz1/react-parking',
     selected: false
    },
    {
     id: 1,
     title: 'Project 2',
     subTitle: 'Description 2',
     imgSrc: car,
     link: 'https://www.google.com/',
     selected: false
    },
    {
     id: 2,
     title: 'Project 3',
     subTitle: 'Description 3',
     imgSrc: unicorn,
     link: 'https://www.google.com/',
     selected: false
    },
   ]
  }
 };



 makeItems = (items) =>{
  return items.map(item => {
   return <Card item={item} />
  })
 }


 render() {
  return(
   <div className="carousel-container">
     {this.makeItems(this.state.items)}
   </div>
  )
 }


}

export default Carousel;
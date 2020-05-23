import React from 'react';

import Card from '../components/Card';

import parking from '../assets/images/parking-garage.jpg';
import paper from '../assets/images/paper.jpg';


class Carousel extends React.Component {
 constructor(props) {
  super(props)
  this.state = {
   items: [
    {
     id: 0,
     title: 'University Parking',
     subTitle: 'A mobile application for students that keeps track of parking garages at their universities in order to help them decide where to park. \n\nThis project uses Google\'s Cloud Firestore service as the backend architecture along with the React Native Framework for the frontend user interface.',
     imgSrc: parking,
     link: 'https://github.com/elihudiaz1/react-parking',
     selected: false
    },
    {
     id: 1,
     title: 'Portfolio Website',
     subTitle: 'This website was built with a backend server that uses Node.js + Express for REST APIs and a front-end side that uses the React Framework with React Router & Axios. The \'Contact\' page implements the SendGrid API for sending emails seamlessly to the host. Feel free to let me know what you think, just click on the Contact tab in the navigation bar!',
     imgSrc: paper,
     link: 'https://github.com/elihudiaz1/React-Portfolio-Website',
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
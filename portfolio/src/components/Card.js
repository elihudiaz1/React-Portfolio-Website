import React from 'react';

import CardInfo from '../components/CardInfo';


function Card(props) {
 return(

  <div className="root">
   <div class="container">
    <div className="box">
     <div className="imgBx">
      <img src={props.item.imgSrc} />
     </div>
     <div className="layer layer1"></div>
     <div className="layer layer2"></div>
     <div className="contentBx">
      <div>
       <CardInfo title={props.item.title} subTitle={props.item.subTitle} link={props.item.link}/>
      </div>
     </div>
    </div>
   </div>

   <div className="mobile-display-details">
    <CardInfo title={props.item.title} subTitle={props.item.subTitle} link={props.item.link}/>
   </div>
  </div>
 
 )

}

export default Card;
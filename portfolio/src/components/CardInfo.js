import React from 'react';

function CardInfo(props) {
 

 return(
  <div className="e-card-info">
   <p className="e-card-title">{props.title}</p>
   <p className="e-card-sub-title">{props.subTitle}</p>
   <a href={props.link} target="_blank" rel="noopener noreferrer" className="e-card-link">View Code</a>
  </div>
  
 )

}

export default CardInfo;
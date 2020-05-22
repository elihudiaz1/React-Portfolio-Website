import React from 'react';

function InfoItem({ label, value }) {
 return(
  <div className="info-item">
   <label>{label}</label>
   <span>{value}</span>
  </div>

 )

}

export default InfoItem;
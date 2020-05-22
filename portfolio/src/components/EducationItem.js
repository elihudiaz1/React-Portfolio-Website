import React from 'react';

function EducationItem({ dateAchieved, achievement, institution }) {
 return(
  <li>
   <span>{dateAchieved}</span>
   <div><p><strong color="red">{achievement}</strong> - {institution}</p></div>
  </li>
 )
}

export default EducationItem;
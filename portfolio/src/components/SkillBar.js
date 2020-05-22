import React from 'react';

function SkillBar({ name, value }) {
 return(
  <div className="skillbar-container">
   <div className="skills">
    <span className="Name">{name}</span>
    <div className="percent">
     <div className="progress" style={{ width: value }}></div>
    </div>
    <span className="Value">{value}</span>
   </div>
  </div>

 )
}

export default SkillBar;
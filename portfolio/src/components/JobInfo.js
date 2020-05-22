import React from 'react';

function JobInfo({ company, role, dateHired, endDate }) {
 return(
  <li>
   <span>{dateHired} - {endDate}</span>
   <div><p><strong>{role}</strong> - {company}</p></div>
 </li>
 )
}

export default JobInfo;
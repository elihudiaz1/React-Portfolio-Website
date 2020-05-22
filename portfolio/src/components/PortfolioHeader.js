import React from 'react';

function PortfolioHeader({ title, children}) {

 return(
  <section>
   <h3>{title}</h3>
   <div className="header-content">
    {children}
   </div>
 </section>
 )

}

export default PortfolioHeader;
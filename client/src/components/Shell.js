import React from 'react';
import PrimaryNav from './PrimaryNav';

let Shell =  ({children}) => 
  <div className="Site">
    <div className="Site-content">
      {children}
    </div>
    <PrimaryNav />
  </div>



export default Shell;
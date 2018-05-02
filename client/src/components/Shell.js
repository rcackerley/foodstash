import React from 'react';
import PrimaryNav from './PrimaryNav';
import Header from './Header';

let Shell =  ({children}) => 
  <div className="Site">
    <div className="Site-content">
      <Header/>
      {children}
      <PrimaryNav/>
    </div>
    
  </div>



export default Shell;
import React from 'react';
import AddRecipeForm from './AddRecipeForm';
import Header from './Header';
import PrimaryNav from './PrimaryNav';

let AddScreen =  () => 
  <div className="flex-app">
    <div>
      <Header />
    </div>
    <div className="flex-content">
      <AddRecipeForm />
    </div>
    <PrimaryNav />
  </div>

export default AddScreen;
import React from 'react';
import AddRecipeForm from './AddRecipeForm';
import AddDerivedRecipeForm from './AddDerivedRecipeForm';
import Header from './Header';
import PrimaryNav from './PrimaryNav';
import {
  Route,
  Switch
} from 'react-router-dom';

let AddScreen =  () => 
  <div className="flex-app">
    <div>
      <Header />
    </div>
    <div className="flex-content">
      <Switch>
    <Route exact path="/add" component={AddRecipeForm} />
    <Route exact path="/add/derived" component={AddDerivedRecipeForm} />
    </Switch>
      {/* <AddRecipeForm /> */}
    </div>
    <PrimaryNav />
  </div>

export default AddScreen;
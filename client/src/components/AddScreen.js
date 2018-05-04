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
    <Route path="/add" exact component={AddRecipeForm} />
    <Route path="/add/derived" exact component={AddDerivedRecipeForm} />
    </Switch>
      <AddRecipeForm />
    </div>
    <PrimaryNav />
  </div>

export default AddScreen;
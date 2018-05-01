import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import AccountScreen from './components/AccountScreen';
import CategoryScreen from './components/CategoryScreen';
import IngredientsScreen from './components/IngredientsScreen';
import RecipesList from './components/RecipesList';
import RecipeScreen from './components/RecipeScreen';


let HomeScreen = () => {
  return (
    <Router>
        <div className="container" >

            <Route path="/" exact component={CategoryScreen} />
            <Route path="/by-ingredients" component={IngredientsScreen} />
            <Route path="/add-recipe" component={AddRecipeScreen} />
            <Route path="/#/product/:product" component={Recipe} />
        </div>
    </Router>
);
}

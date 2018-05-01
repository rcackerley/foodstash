import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomeScreen from './components/HomeScreen';
import AccountScreen from './components/AccountScreen';
import CategoryScreen from './components/CategoryScreen';
import IngredientsScreen from './components/IngredientsScreen';
import RecipesList from './components/RecipesList';
import RecipeScreen from './components/RecipeScreen';
import RecipesScreen from './components/RecipeScreen';

// import Category from './Category';

let Router = () =>
    <div>
        <Switch>
            <Route path="/" component={HomeScreen} />
            <Route path="/account" component={AccountScreen} />
            <Route path="/categories" component={CategoryScreen} />
            <Route path="/ingredients" component={IngredientsScreen} />
            <Route path="/recipes" component={RecipesScreen} />
            <Route path="/#/recipes/:recipe" component={RecipeScreen} />
        </Switch>
  </div>;

  export default Router;

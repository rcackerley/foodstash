import React from 'react';
import {
  HashRouter,
  Route,
  Switch
} from 'react-router-dom';
import AccountScreen from './components/AccountScreen';
import CategoryScreen from './components/CategoryScreen';
import IngredientsScreen from './components/IngredientsScreen';
import RecipeList from './components/RecipeList';
import PrimaryNav from './components/PrimaryNav';
import SecondaryNav from './components/PrimaryNav';
import RecipeScreen from './components/RecipeScreen';

let Router = () =>
  <HashRouter>
        <Switch>
            <Route path="/" component={RecipeScreen} />
            <Route path="/account" component={AccountScreen} />
            <Route path="/categories" component={CategoryScreen} />
            <Route path="/ingredients" component={IngredientsScreen} />
            <Route path="/recipes" component={RecipeList} />
            <Route path="/#/recipes/:recipe"  />
        </Switch>
</HashRouter>;

export default Router;


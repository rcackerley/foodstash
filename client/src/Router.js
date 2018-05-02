import React from 'react';
import {
  HashRouter,
  Route,
  Switch
} from 'react-router-dom';
import AccountScreen from './components/AccountScreen';
import CategoryListScreen from './components/CategoryListScreen';
import IngredientListScreen from './components/IngredientListScreen';
import PrimaryNav from './components/PrimaryNav';
import SecondaryNav from './components/PrimaryNav';
import RecipeListScreen from './components/RecipeListScreen';


let Router = () =>
  <HashRouter>
        <Switch>
            <Route path="/categories" component={CategoryListScreen} />
            <Route path="/ingredients" component={IngredientListScreen}/>
            <Route path="/account" component={AccountScreen} />
            <Route path="/recipes" component={RecipeListScreen} />
            <Route path="/#/recipes/:recipe"  />
        </Switch>
</HashRouter>;

export default Router;

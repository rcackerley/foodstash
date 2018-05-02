import React from 'react';
import {
  HashRouter,
  Route,
  Switch
} from 'react-router-dom';
import AccountScreen from './components/AccountScreen';
import CategoryListScreen from './components/CategoryListScreen';
import IngredientListScreen from './components/IngredientListScreen';
import RecipeListScreen from './components/RecipeListScreen';
import RecipeScreen from './components/RecipeScreen';
import AddScreen from './components/AddScreen';
import PrimaryNav from './components/PrimaryNav';
import SecondaryNav from './components/PrimaryNav';

let Router = () =>
  <HashRouter>
        <Switch>
            <Route path="/categories" component={CategoryListScreen} />
            <Route path="/ingredients" component={IngredientListScreen}/>
            <Route path="/account" component={AccountScreen} />
            <Route path="/recipes" component={RecipeListScreen} />
            <Route path="/add-recipe" component={AddScreen} />
            <Route path="/#/recipes/:recipe"  />
        </Switch>
</HashRouter>;

export default Router;

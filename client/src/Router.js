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
import SearchScreen from './components/SearchScreen';
import SearchResultsScreen from './components/SearchResultsScreen';
import RecipeScreen from './components/RecipeScreen';


let Router = () =>
  <HashRouter>
        <Switch>
            <Route path="/categories" component={CategoryListScreen} />  
            <Route path="/ingredients" component={IngredientListScreen}/> 
            <Route path="/recipes" exact component={RecipeListScreen} />
            <Route path="/recipes/1" component={RecipeScreen} />  
            <Route path="/account" component={AccountScreen} />  
            <Route path="/search-results" component={SearchResultsScreen} />
            <Route path="/#/recipes/:recipe"  />
        </Switch>
</HashRouter>;

export default Router;

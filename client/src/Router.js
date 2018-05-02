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
import SearchScreen from './components/SearchScreen';
import SearchResultsScreen from './components/SearchResultsScreen';
import RecipeScreen from './components/RecipeScreen';
import AddDerivedRecipeForm from './components/AddDerivedRecipeForm';
import RecipeScreen from './components/RecipeScreen';
import AddScreen from './components/AddScreen';

let Router = () =>
  <HashRouter>
        <Switch>
            <Route path="/categories" component={CategoryListScreen} />  
            <Route path="/ingredients" component={IngredientListScreen}/> 
            <Route path="/recipes" exact component={RecipeListScreen} />
            <Route path="/recipes/1" component={RecipeScreen} />  
            <Route path="/account" component={AccountScreen} />  
            <Route path="/search-results" component={SearchResultsScreen} /
            <Route path="/categories" component={CategoryListScreen} />
            <Route path="/ingredients" component={IngredientListScreen}/>
            <Route path="/account" component={AccountScreen} />
            <Route path="/add" component={AddScreen} />
            <Route path="/add-derived" component={AddDerivedRecipeForm} />
            <Route path="/#/recipes/:recipe"  />
        </Switch>
</HashRouter>;

export default Router;

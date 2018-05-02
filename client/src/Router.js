import React from 'react';
import {
  HashRouter,
  Route,
  Switch
} from 'react-router-dom';
import AccountScreen from './components/AccountScreen';
import CategoryListScreen from './components/CategoryListScreen';
import IngredientListScreen from './components/IngredientListScreen';
<<<<<<< HEAD
import RecipeListScreen from './components/RecipeListScreen';
// import PrimaryNav from './components/PrimaryNav';
// import SecondaryNav from './components/PrimaryNav';
import RecipeScreen from './components/RecipeScreen';
import AddScreen from './components/AddScreen';
=======
import PrimaryNav from './components/PrimaryNav';
import SecondaryNav from './components/PrimaryNav';
import RecipeListScreen from './components/RecipeListScreen';
>>>>>>> 4dbcdeff50e3a44c109644a3bd3eab13ca6ccea9
import SearchScreen from './components/SearchScreen';
import SearchResultsScreen from './components/SearchResultsScreen';


let Router = () =>
  <HashRouter>
        <Switch>
            <Route path="/categories" component={CategoryListScreen} />  
            <Route path="/ingredients" component={IngredientListScreen}/> 
            <Route path="/account" component={AccountScreen} />  
            <Route path="/recipes" component={RecipeListScreen} />
<<<<<<< HEAD
            <Route path="/add-recipe" component={AddScreen} />
=======
            <Route path="/search-results" component={SearchResultsScreen} />
>>>>>>> 4dbcdeff50e3a44c109644a3bd3eab13ca6ccea9
            <Route path="/#/recipes/:recipe"  />
        </Switch>
</HashRouter>;

export default Router;

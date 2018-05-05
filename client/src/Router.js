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
import AddDerivedRecipeForm from './components/AddDerivedRecipeForm';
import AddScreen from './components/AddScreen';
import RegisterScreen from './components/RegisterScreen';
import LoginScreen from './components/LoginScreen';
import PrivateRoute from './components/PrivateRoute';

let Router = () =>
      <HashRouter>
        <Switch>
            <Route path="/register" component={RegisterScreen} />
            <Route path="/login" component={LoginScreen} />
            <PrivateRoute path="/ingredients" component={IngredientListScreen}/>
            <PrivateRoute path="/recipes/:type/:id" exact component={RecipeListScreen} />
            <PrivateRoute path="/account" component={AccountScreen} />
            <PrivateRoute path="/categories" exact component={CategoryListScreen} />
            <PrivateRoute path="/ingredients" component={IngredientListScreen}/>
            <PrivateRoute path="/account" component={AccountScreen} />
            <PrivateRoute path="/add" component={AddScreen} />
            <PrivateRoute path="/add-derived" component={AddDerivedRecipeForm} />
            <PrivateRoute path="/recipes/:recipeId" exact component={RecipeScreen} />
        </Switch>
      </HashRouter>

export default Router;

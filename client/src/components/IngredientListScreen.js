import React from 'react';
import IngredientCard from './IngredientCard';
import { connect } from 'react-redux';
import Shell from './Shell';
import SecondaryNav from './SecondaryNav';
import SearchBar from './SearchBar';
import PrimaryNav from './PrimaryNav';

let IngredientListScreen =  ({ ingredients }) => 
  <div className="flex-app">
    <SecondaryNav />
    <div className="flex-content">
      <SearchBar />
      <div className="ingredient-list">
        {ingredients.map(ingredient =>
          <IngredientCard ingredient={ingredient} />
        )}
      </div>
    </div>
    <PrimaryNav />
  </div>

let mapStateToProps = (state, props) => {
  let { ingredients } = state;
  return { ingredients: ingredients };
};

let IngredientListScreenState = connect(
  mapStateToProps
)(IngredientListScreen);

export default IngredientListScreenState;
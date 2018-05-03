import React, { Component } from 'react';
import IngredientCard from './IngredientCard';
import { connect } from 'react-redux';
import Shell from './Shell';
import SecondaryNav from './SecondaryNav';
import SearchBar from './SearchBar';
import PrimaryNav from './PrimaryNav';
import Header from './Header';

import { updateIngredients } from '../actions/index';
import { getAllIngredients } from '../ajax/index';
  
class IngredientListScreen extends Component {
  async componentDidMount() {
    let { updateIngredients } = this.props;
    let ingredients = await getAllIngredients();
    console.log(ingredients);
    updateIngredients(ingredients);
  }
 
  render() {
    let { ingredients } = this.props;
    return (
      <div className="flex-app">
        <div>
          <Header />
          <SearchBar />
        </div>
        <div className="flex-content">
          <SecondaryNav />
          <div className="ingredient-list">
            {ingredients.map(ingredient =>
              <IngredientCard ingredient={ingredient} />
            )}
          </div>
        </div>
        <PrimaryNav />
      </div>
    );
  }
}

let mapDispatchToProps = dispatch => ({ updateIngredients: ingredients => dispatch(updateIngredients(ingredients)) })

let mapStateToProps = (state, props) => {
  let { ingredients } = state;
  return { ingredients: ingredients };
};

let IngredientListScreenState = connect(
  mapStateToProps,
  mapDispatchToProps
)(IngredientListScreen);

export default IngredientListScreenState;
import React from 'react';
import RecipeList from './RecipeList';
import { connect } from 'react-redux';

let RecipeScreen = ({ recipes }) =>
    <RecipeList recipes={recipes} />
    // <h1> h1 </h1>

let mapStateToProps = (state, props) => {
    let { recipes } = state;
    return { recipes: recipes };
};

let RecipeScreenState = connect(
    mapStateToProps
)(RecipeScreen);

export default RecipeScreenState; 
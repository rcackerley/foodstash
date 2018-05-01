import React from 'react';
import { Link } from 'react-router-dom';

let RecipeScreen = ({ recipeData }) =>
  <div className="catagoryCard card" data-id={recipeData.id}>
    <img className="recipe-image" src={recipeData.image_url} />
    <div className="recipe-top">
      <span>{recipeData.title}</span>
    </div>
  </div>


export default RecipeScreen;
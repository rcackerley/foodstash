import React from 'react';
import { Link } from 'react-router-dom';

let IngredientCard = ({ ingredient }) =>
  <Link className="ingredient-card-link" to={`/categories/${ingredient.id}`} >
    <div className="ingredient-card">
      <img className="ingredient-hero" src={ingredient.image_url} />
      <div className="ingredient-card-top">
        <span>{ingredient.name}</span>
      </div>
    </div>
  </Link>

export default IngredientCard;
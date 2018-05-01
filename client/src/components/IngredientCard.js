import React from 'react';
import { Link } from 'react-router-dom';

let IngredientCard = ({ ingredientData }) =>
<Link to={`/ingredients/${ingredientData.id}`} >
  <div className="ingredientCard card" data-id={ingredientData.id}>
    <img className="item-hero" src={ingredientData.image_url} />
    <div className="card-top">
      <span>{ingredientData.title}</span>
    </div>
  </div>
  </Link>

export default IngredientCard;
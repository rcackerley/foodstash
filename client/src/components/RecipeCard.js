import React from 'react';
import Stars from './Stars';
import { Link } from 'react-router-dom';

let RecipeCard = ({ recipe, match }) =>
    <Link className="ingredient-card-link" to={`/recipes/${recipe.id}`} >
    <div className="recipe-card">
        <img className="recipe-hero" src={recipe.image_url} />     
        <div className="recipe-card-right">
            <div className="flex-spread">
                <span>{recipe.title}</span>
                <div>
                    <img className="recipe-add-item" src="https://cdn3.iconfinder.com/data/icons/navigation-icons-1/32/add-512.png" />
                </div>
            </div>
            <div className="flex-spread">
                <Stars/>
                <div className="recipe-prep-time">
                    <span> {recipe.prepmins}m </span>
                    {/* <img src="https://cdn2.iconfinder.com/data/icons/pittogrammi/142/10-512.png" /> */}
                </div>
            </div>
        </div>
    </div>
    </Link>

export default RecipeCard;

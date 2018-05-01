import React from 'react';
import Stars from './Stars';
import { Link } from 'react-router-dom';

let RecipeCard = ({ recipe }) =>
    <div className="recipe-card">
        <div className="recipe-card-top">
            <span>{recipe.title}</span>
            <img className="recipe-add-item" src="https://cdn3.iconfinder.com/data/icons/navigation-icons-1/32/add-512.png" />
        </div>
        <img className="recipe-hero" src={recipe.img_main} />
        <div className="recipe-card-bottom">
            <Stars/>
            <div className="recipe-prep-time"> 
                <img src="https://cdn2.iconfinder.com/data/icons/pittogrammi/142/10-512.png" />
                <span> {recipe.prepmins}m </span>
            </div>
        </div>
    </div>

export default RecipeCard;
import React from 'react';
import Stars from './Stars';
import { Link } from 'react-router-dom';

let ProductItem = ({ recipeData }) =>
    <div className="card" data-id={recipeData.id}>
        <div className="card-top">
            <span>{recipeData.title}</span>
            <img className="add-item" src="https://cdn3.iconfinder.com/data/icons/navigation-icons-1/32/add-512.png" />
        </div>
        <img className="item-hero" src={recipeData.image_url} />
        <div className="card-bottom">
            <Stars/>
            <div className="prep-time"> 
                <img src="https://cdn2.iconfinder.com/data/icons/pittogrammi/142/10-512.png" />
                <span> {recipeData.prepmins}m </span>
            </div>
        </div>
    </div>

export default ProductItem;
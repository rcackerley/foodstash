import React from 'react';
import { Link } from 'react-router-dom';

let CategoryCard = ({ categoryData }) =>
<Link to={`/categories/${categoryData.id}`} >
  <div className="catagoryCard card" data-id={categoryData.id}>
    <img className="item-hero" src={categoryData.image_url} />
    <div className="card-top">
      <span>{categoryData.title}</span>
    </div>
  </div>
  </Link>

export default CategoryCard;
import React from 'react';
import { Link } from 'react-router-dom';

let CategoryCard = ({ category }) =>
  <Link className="category-card-link"to={`/categories/${category.id}`} >
    <div className="category-card">
      <img className="category-hero" src={category.img_main} />
      <div className="category-card-top">
        <span>{category.title}</span>
      </div>
    </div>
  </Link>

export default CategoryCard;
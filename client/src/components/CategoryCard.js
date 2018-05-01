import React from 'react';
import { Link } from 'react-router-dom';

let CategoryCard = ({ category }) =>
  <Link className="category-card-link"to={`/categories/${category.id}`} >
    <div className="category-card">
      <div className="category-card-top">
        <span>{category.title}</span>
      </div>
      <img className="category-hero" src={category.img_main} />
    </div>

  </Link>

export default CategoryCard;
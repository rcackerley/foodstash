import React from 'react';
import CategoryCard from './CategoryCard';
import { connect } from 'react-redux';
import Shell from './Shell';

let CategoryListScreen =  ({ categories }) => 
  <Shell>
    <div className="category-list">
      {categories.map(category =>
        <CategoryCard category={category} />
        )}
    </div> 
  </Shell>   
    
let mapStateToProps = (state, props) => {
  let { categories } = state;
  return { categories: categories };
};

let CategoryListScreenState = connect(
  mapStateToProps
)(CategoryListScreen);

export default CategoryListScreenState; 

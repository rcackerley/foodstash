import React from 'react';
import CategoryCard from './CategoryCard';
import { connect } from 'react-redux';
import Shell from './Shell';
import SecondaryNav from './SecondaryNav';
import SearchBar from './SearchBar';
import PrimaryNav from './PrimaryNav';

let CategoryListScreen =  ({ categories }) => 
    <div className="flex-app">
      <SecondaryNav/>
      <div className="flex-content">
        <SearchBar/>
        <div className="category-list">
          {categories.map(category =>
            <CategoryCard category={category} />
            )}
        </div> 
      </div>
      <PrimaryNav />
    </div>

let mapStateToProps = (state, props) => {
  let { categories } = state;
  return { categories: categories };
};

let CategoryListScreenState = connect(
  mapStateToProps
)(CategoryListScreen);

export default CategoryListScreenState; 

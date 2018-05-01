import React from 'react';
import CategoryCard from './CategoryCard';

let IngredientScreen = ( ({ categories }) => {
  let renderCategoriesCardList = ( categories ) => {
  categories.foreach((category) =>  <CategoryCard props={ category } /> );
  }
  return renderCategoriesCardList();
})

export default IngredientScreen;
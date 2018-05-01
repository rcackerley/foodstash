import React from 'react';
import CategoriesCard from './CategoryCard';

let IngredientScreen = ( ({ categories }) => {
  let renderCategoriesCardList = ( categories ) => {
  categories.foreach((category) =>  <CategoriesCard props={ category } /> );
  }
  return renderCategoriesCardList();
})

export default IngredientScreen;

import React from 'react';

let IngredientScreen = ( ({ categories }) => {
  let renderCategoriesCardList = ( categories ) => {
  categories.foreach((category) =>  <CategoriesCard props={ category } /> );
  }
  return renderCategoriesCardList();
})
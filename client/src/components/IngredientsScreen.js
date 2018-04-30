import React from 'react';

let IngredientScreen = ( ({ ingredients }) => {
  let renderIngredientsCardList = ( ingredients ) => {
  ingredients.foreach((ingredient) =>  <IngredientsCard props={ ingredient } /> );
  }
  return renderIngredientsCardList();
})

export default IngredientScreen;
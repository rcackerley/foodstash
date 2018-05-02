
export const setSearchResultRecipes = recipes =>
  ({
    type: setSearchResultRecipes.toString(),
    payload: recipes
  });

export const addRecipe = recipe =>
  ({
    type: addRecipe.toString(),
    payload: recipe
  })

addRecipe.toString = () => 'ADD_RECIPE';
setSearchResultRecipes.toString = () => 'SET_SEARCH_RESULTS_RECIPES';
=======


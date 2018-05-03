
export const setSearchResultRecipes = recipes =>
  ({
    type: setSearchResultRecipes.toString(),
    payload: recipes
  });

export const addRecipe = recipe =>
  ({
    type: addRecipe.toString(),
    payload: recipe
  });

  export const setActiveRecipe = recipeId =>
  ({
    type: setActiveRecipe.toString(),
    payload: recipeId
  });

addRecipe.toString = () => 'ADD_RECIPE';
setSearchResultRecipes.toString = () => 'SET_SEARCH_RESULTS_RECIPES';
setActiveRecipe.toString = () => 'SET_ACTIVE_RECIPE';
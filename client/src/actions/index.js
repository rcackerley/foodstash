
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

export const setToken = token =>
  ({
    type: setToken.toString(),
    payload: token
  })

addRecipe.toString = () => 'ADD_RECIPE';
setSearchResultRecipes.toString = () => 'SET_SEARCH_RESULTS_RECIPES';
setActiveRecipe.toString = () => 'SET_ACTIVE_RECIPE';
setToken.toString = () => 'SET_TOKEN';

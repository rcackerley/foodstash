
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

export const updateCategories = categories =>
  ({
    type: updateCategories.toString(),
    payload: categories
  })

export const updateIngredients = ingredients =>
  ({
    type: updateIngredients.toString(),
    payload: ingredients
  })

addRecipe.toString = () => 'ADD_RECIPE';
setSearchResultRecipes.toString = () => 'SET_SEARCH_RESULTS_RECIPES';
updateCategories.toString = () => 'UPDATE_CATEGORIES';
updateIngredients.toString = () => 'UPDATE_INGREDIENTS';
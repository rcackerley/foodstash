export const setSearchResultRecipes = recipes =>
  ({
    type: setSearchResultRecipes.toString(),
    payload: recipes
  });

  setSearchResultRecipes.toString = () => 'SET_SEARCH_RESULTS_RECIPES';

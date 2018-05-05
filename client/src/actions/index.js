import {
  getUserData,
  getRecipesByCategory,
  getRecipesBySearch,
  getRecipeById,
} from '../ajax/index';


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

export const updateUser = async (dispatch, token) => {
    try {
      let userData = await getUserData(token);
      dispatch({
        type: updateUser.toString(),
        payload: (userData && userData[0])? userData[0] : null
      });
    } catch (e) {
      console.error(e);
    }
}

export const getRecipeByIdAC = async (dispatch, id) => {
  try {
    let recipe = await getRecipeById(id);
    dispatch({
      type: getRecipeByIdAC.toString(),
      payload: recipe
    });
  } catch (e) {
    console.error(e);
  }
}

export const updateRecipesAC = async (dispatch, type, id) => {
  console.log("yoyoaction");
  try {
    let recipes = [];
    switch(type) {
      case 'categories': recipes = await getRecipesByCategory(id); break;
      case 'search': recipes = await getRecipesBySearch(id); break;
      default: console.log('errorr');
    }
    dispatch({
      type: updateRecipesAC.toString(),
      payload: recipes
    });
  } catch (e) {
    console.error(e);
  }
}


  export const updateRecipes = recipes =>
  ({
    type: updateRecipes.toString(),
    payload: recipes
  })

export const setToken = token =>
  ({
    type: setToken.toString(),
    payload: token

  })

addRecipe.toString = () => 'ADD_RECIPE';
setSearchResultRecipes.toString = () => 'SET_SEARCH_RESULTS_RECIPES';
setActiveRecipe.toString = () => 'SET_ACTIVE_RECIPE';
updateCategories.toString = () => 'UPDATE_CATEGORIES';
updateIngredients.toString = () => 'UPDATE_INGREDIENTS';
updateRecipesAC.toString = () => 'UPDATE_RECIPES_AC';
setToken.toString = () => 'SET_TOKEN';
updateUser.toString = () => 'UPDATE_USER';
getRecipesByCategory.toString = () => 'GET_RECIPES_BY_CATEGORY';
getRecipeByIdAC.toString = () => 'GET_RECIPE_BY_ID_AC';


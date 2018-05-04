import {getUserData} from '../ajax/index';


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
      let userData = await getUserData(token.token);
      dispatch({
        type: updateUser.toString(),
        payload: (userData && userData[0])? userData[0] : null
      });
    } catch (e) {
      console.error(e);
    }
}

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
setToken.toString = () => 'SET_TOKEN';
updateUser.toString = () => 'UPDATE_USER';

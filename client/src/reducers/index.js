
import db from './db'
import {  
  setSearchResultRecipes, 
  addRecipe, 
  setToken, 
  updateCategories, 
  updateIngredients, 
  setActiveRecipe,
  updateRecipesAC, 
  updateUser,
  getRecipeByIdAC
} from '../actions/index';


const initialState = {
  // db.recipes
  recipes: [],
  categories: [],
  ingredients: [],
  token: null,
  user: null,
  activeRecipe: 1
};

const reducerRoutes = {

  [setSearchResultRecipes]: (state, action) => ({
    ...state, recipes: action.payload
  }),
  [ addRecipe ]: (state, action) => ({
    ...state, recipes: state.recipes.concat([action.payload])
  }),
  [ setActiveRecipe ]: (state, action) => ({
    ...state, activeRecipe: action.payload //payload is id
  }),
  [updateCategories]: (state, action) => ({
    ...state, categories: action.payload
  }),
  [updateIngredients]: (state, action) => ({
    ...state, ingredients: action.payload
  }),
  [updateUser]: (state, action) => ({
    ...state, user: action.payload
  }),
  [updateRecipesAC]: (state, action) => ({
    ...state, recipes: action.payload
  }),
  [getRecipeByIdAC]: (state, action) => ({
    ...state, recipes: action.payload
  }),
  [ setToken ]: (state, action) => ({
    ...state, token: action.payload
  }),
  default: (state, action) => state
}

const rootReducer = (state = initialState, action) => {
  let reducerAction = reducerRoutes[action.type] || reducerRoutes.default
  return reducerAction(state, action)
}

export default rootReducer;

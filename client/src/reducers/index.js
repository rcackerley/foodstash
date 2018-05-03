
import db from './db'
import {setSearchResultRecipes, addRecipe, setToken, updateCategories, updateIngredients} from '../actions/index';

const initialState = {
  recipes: db.recipes,
  categories: [],
  ingredients: [],
  token: null,
  user: null
};

const reducerRoutes = {

  [setSearchResultRecipes]: (state, action) => ({
    ...state, recipes: action.payload
  }),
  [ addRecipe ]: (state, action) => ({
    ...state, recipes: state.recipes.concat[action.payload]
  }),
  [updateCategories]: (state, action) => ({
    ...state, categories: action.payload
  }),
  [updateIngredients]: (state, action) => ({
    ...state, ingredients: action.payload
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


import db from './db'
import {setSearchResultRecipes, addRecipe, setToken, setActiveRecipe} from '../actions/index';

const initialState = {
  recipes: db.recipes,
  categories: db.categories,
  ingredients: db.ingredients,
  activeRecipe: 1,
  token: null,
  user: null
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

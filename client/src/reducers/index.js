
import db from './db'
import {setSearchResultRecipes, addRecipe, setToken} from '../actions/index';

const initialState = {
  recipes: db.recipes,
  categories: db.categories,
  ingredients: db.ingredients,
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

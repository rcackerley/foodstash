
import db from './db'
import {setSearchResultRecipes, updateCategories} from '../actions/index';
import  {addRecipe} from '../actions';

const initialState = {
  recipes: db.recipes,
  categories: [],
  ingredients: []
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
  default: (state, action) => state
}

const rootReducer = (state = initialState, action) => {
  let reducerAction = reducerRoutes[action.type] || reducerRoutes.default
  return reducerAction(state, action)
}

export default rootReducer;

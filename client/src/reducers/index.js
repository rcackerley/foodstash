
import db from './db'
import {setSearchResultRecipes} from '../actions/index';
import  {addRecipe} from '../actions';

const initialState = {
  recipes: db.recipes,
  categories: db.categories,
  ingredients: db.ingredients
};

const reducerRoutes = {

  [setSearchResultRecipes]: (state, action) => ({
    ...state, recipes: action.payload
  }),
  [ addRecipe ]: (state, action) => ({
    ...state, recipes: state.recipes.concat[action.payload]
  }),
  default: (state, action) => state
}

const rootReducer = (state = initialState, action) => {
  let reducerAction = reducerRoutes[action.type] || reducerRoutes.default
  return reducerAction(state, action)
}

export default rootReducer;

export const addRecipe = recipe =>
  ({
    type: addRecipe.toString(),
    payload: recipe
  })

addRecipe.toString = () => 'ADD_RECIPE';
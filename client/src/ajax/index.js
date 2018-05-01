export let getAllRecipes = () =>
  fetch('/all-recipes')
  .then(res => res.json())

export let getMyRecipes = (token) =>
  fetch('/recipes', {
    headers: { authorization: token }
  })
  .then(res => res.json())

export let getMyCookBooks = (token) =>
  fetch('/cookbooks', {
    headers: {authorization: token}
  })
  .then(res => res.json())

export let postRecipe = (recipe, token) =>
  fetch('/recipes', {
    method: 'POST',
    headers: {authorization: token,
    'content-type': 'application/json'
  }
  })

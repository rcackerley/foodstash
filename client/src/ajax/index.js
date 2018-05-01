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
    body: recipe,
    method: 'POST',
    headers: {authorization: token,
    'content-type': 'application/json'
  }
  })
  .then(res => res.json())

export let createCookbook = (cookbook, token) =>
  fetch('/cookbooks', {
    body: cookbook,
    method: 'POST',
    headers: {
      authorization: token,
      'content-type': 'application/json'
    }
  })
  .then(res => res.json())

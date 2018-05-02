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


export let getRecipeById = (id) =>
  fetch('/recipe', {
    method: 'GET',
    headers: {
      id: id,
      'content-type': 'application/json'
    }
  })
  .then(res => res.json())

export let getRecipesBySearch = (searchLibrary) => {
  console.log(searchLibrary)
  return fetch('/search-recipes', {
    method: 'POST',
    body: searchLibrary,
    headers: {
      'content-type': 'application/json'
    }
  })
  .then(res => res.json())
  .then(res => console.log(res))
}

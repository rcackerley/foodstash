let getAllRecipes = () =>
  fetch('/all-recipes')
  .then(res => res.json())

let getMyRecipes = (token) =>
  fetch('/recipes', {
    headers: { authorization: token }
  })
  .then(res => res.json())

let getMyCookBooks = (token) =>
  fetch('/cookboks', {
    headers: {authorization: token}
  })
  .then(res => res.json())

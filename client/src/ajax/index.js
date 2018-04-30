

let getMyRecipes = (token) =>
  fetch('/recipes')
  .then(res => res.json())
  .then(recipes => recipes)

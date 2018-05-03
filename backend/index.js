const express = require('express');
const app = express();
const fs = require('fs');
const db = require('./database.js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const signature = '@!3$%%^&1ed^&*!l@#^&***()R0441';
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;

//db queries
let createUser = (user) =>
  db.query(`INSERT into users (email, password, username, firstname, lastname) VALUES ('${user.email}', '${user.password}', '${user.username}', '${user.firstname}', '${user.lastname}') RETURNING id;`)

let getMyRecipesFromDB = (id) =>
  db.query(`SELECT * from recipes WHERE id = ${id};`)

let getAllRecipes = (req, res) =>
  db.query(`SELECT * from recipes`)
  .then(recipes => res.send(recipes))

let getMyCookBooksFromDB = (id) =>
  db.query(`SELECT * from cookbooks WHERE id = ${id};`)

let searchTerms = (req, res) =>
  db.query(`SELECT title from recipes;`)
  .then(terms => res.send(terms))
  .catch(err => res.send(err))

let postRecipeToDB = (recipe) =>
  db.query(`INSERT INTO "public"."recipes"("title", "ver", "prepmins", "cookmins",
  "descr", "user_id", "ingredients", "directions", "servings")
  VALUES('${recipe.title}', ${recipe.ver}, ${recipe.prepmins}, ${recipe.cookmins}, '${recipe.descr}', ${recipe.user_id},
  '${recipe.ingredients}', '${recipe.directions}', ${recipe.servings})
  RETURNING "id", "title", "ver", "derived_id", "prepmins", "cookmins", "createdon",
  "descr", "tag", "user_id", "ingredients", "directions", "servings", "image_url";`)

//new recipe  
let postNewRecipeToDB = (recipe) =>
  db.query(`INSERT INTO "public"."recipes"("title", "ver", "prepmins", "cookmins",
  "descr", "user_id", "ingredients", "directions", "servings")
  VALUES('${recipe.title}', '1', ${recipe.prepmins}, ${recipe.cookmins}, '${recipe.descr}', ${recipe.user_id},
  '${recipe.ingredients}', '${recipe.directions}', ${recipe.servings})
  RETURNING "id", "title", "ver", "derived_id", "prepmins", "cookmins", "createdon",
  "descr", "tag", "user_id", "ingredients", "directions", "servings", "image_url";`)

//post new recipe from old recipes
let postForkedRecipeToDB = (recipe) =>
  db.query(`INSERT INTO "public"."recipes"("title", "ver", "derived_id", prepmins", "cookmins",
  "descr", "user_id", "ingredients", "directions", "servings")
  VALUES('${recipe.title}', ${recipe.ver}, ${recipe.derived_id}, ${recipe.prepmins}, ${recipe.cookmins}, '${recipe.descr}', ${recipe.user_id},
  '${recipe.ingredients}', '${recipe.directions}', ${recipe.servings})
  RETURNING "id", "title", "ver", "derived_id", "prepmins", "cookmins", "createdon",
  "descr", "tag", "user_id", "ingredients", "directions", "servings", "image_url";`)

let getRatings = (rating) =>
  db.query(`SELECT AVG(rating_val), COUNT(rating_val) FROM ratings WHERE recipe_id = ${rating.recipe_id};`);

let postRating = (rating) =>
  db.query(`INSERT INTO "public"."ratings"("rating_val", "recipe_id") VALUES(${rating.value}, ${rating.recipe_id};`);

let createCookBookInDB = (cookbook) => {
  db.query(`INSERT into "public"."cookbooks"("user_id", "recipe_id") VALUES(${cookbook.user_id}, ${cookbook_recipe_id};`);
}


let getRecipeFromDB = (id) => {
  console.log(id);
  return db.query(`SELECT * from recipes where id = ${id};`)

}


//authorization
let createToken = (userId) => {
  let tokenPayload = {userId: userId};
  tokenPayload.token = jwt.sign({userId: userId}, signature, {expiresIn: '7d'});
  return JSON.stringify(tokenPayload)
}

let validateCredentials = (res, email, password) => {
  let userId
  let userQuery = db.query(`SELECT email, password, id from users WHERE email = '${email}';`)
  .then(users => {userId = users[0].id; return users[0]})
  .then(user => bcrypt.compare(password, user.password))
  .then(response => response ? userId : error)
  .then(userId => createToken(userId))
  .then(token => { console.log(token); return res.send(token)})
  .catch(error => res.send(error));
}

let tokenValidator = (token) =>
  jwt.verify(token, signature)

//handlers
let signIn = (req, res) => {
  let credentials = req.body;
  let {email, password} = credentials;
  validateCredentials(res, email, password);
}
let postUser = (req, res) => {
let credentials = req.body;
let hash = await bcrypt.hash(credentials.password, 10);
let user = Object.assign({}, credentials, {password: hash})
let arrayWithIdObject = await createUser(user);
let id = arrayWithIdObject[0].id;
let token = createToken(id);
res.send(token);
}

let getMyRecipes = (req, res) => {
  let authorization = req.headers.authorization;
  let payload = jwt.verify(authorization, signature);
  return (
    getMyRecipesFromDB(payload.userId)
    .then(recipes => res.send(recipes))
  )
}

let getMyCookBooks = (req, res) => {
  let authorization = req.headers.authorization;
  let payload = jwt.verify(authorization, signature);
  return(
      getMyCookBooksFromDB(payload.userId)
      .then(cookbooks => res.send(cookbooks))
  )
}

let postRecipe = (req, res) => {
  let recipe = req.body
  let token = req.headers.authorization;
  let validation = tokenValidator(token);
  return (
    postRecipeToDB(recipe)
    .then(response => res.send(response))
    .catch(err => res.send(err))
  )
}

let postCookBook = (req, res) => {
  let cookbook = req.bodyParser
  let token = req.headers.authorization;
  let validation = tokenValidator(token);
  return (
    createCookBookInDB(cookbook)
    .then(response => res.send(response))
    .catch(err => res.send(err))
  )
}

let getRecipeByID = (req, res) => {
  let id = req.headers.id;
  // console.log(id);
  getRecipeFromDB(id)
  .then(response => res.send(response))
  .catch(err => res.send(err))
}

//Middleware
app.use(bodyParser.json());
app.get('/', function(req, res) {
  res.send("Welcome to NodeJS app on Heroku!");
});
app.get('/recipes', getMyRecipes)
app.post('/recipes', postRecipe)
app.get('/all-recipes', getAllRecipes)
app.get('/cookbooks', getMyCookBooks)
app.post('/cookbooks', postCookBook)
app.post('/users', postUser)
app.post('/signin', signIn)
app.get('/recipe', getRecipeByID)
app.get('/search', searchTerms)


app.listen(port, () => console.log('Recipes running on 3000'));

const express = require('express');
const app = express();
const fs = require('fs');
const db = require('./db.js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const signature = '@!3$%%^&1ed^&*!l@#^&***()R0441';
const bodyParser = require('body-parser');

//db queries
let createUser = (user) =>
  db.query(`INSERT into users (email, password, username, fname, lname) VALUES ('${user.email}', '${user.password}', '${user.username}', '${user.fname}', '${lname}') RETURNING id;`)

let getMyRecipesFromDB = (id) =>
  db.query(`SELECT * from recipes WHERE id = ${id}`)

let getAllRecipes = (req, res) =>
  db.query(`SELECT * from recipes`)
  .then(recipes => res.send(recipes))

let getMyCookBooks = (id) =>
  db.query(`SELECT * from cookbooks WHERE id = ${id}`)
  
//authorization
let createToken = (userId) => {
  console.log(userId);
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

//handlers
let signIn = (req, res) => {
  let credentials = req.body;
  let {email, password} = credentials;
  validateCredentials(res, email, password);
}
let postUser = (req, res) => {
  let credentials = req.body;
  bcrypt.hash(credentials.password, 10)
  .then(hash => Object.assign({}, credentials, {password: hash}))
  .then(user => createUser(user))
  .then(arrayWithIdObject => arrayWithIdObject[0].id)
  .then(id => createToken(id))
  .then(token => res.send(token))
  .catch(error => res.send(error));
}

let getMyRecipes = (req, res) => {
  let token = req.headers;
  return (
    jwt.verify(token.token, signature)
    .then(res => getMyRecipesFromDB(token.id))
    .then(res => res.send(res))
  )
}

let getMyCookBooks = (req, res) => {
  let token = req.headers;
  return(
      jwt.verify(token.token, signature)
      .then(res => getMyCookBooksFromDB(token.id))
      .then(res => res.send(res))
  )

}

//Middleware
app.use(bodyParser.json());
app.get('/recipes', getMyRecipes)
app.get('/all-recipes', getAllRecipes)
app.get('/cookbooks', getMyCookBooks)


app.listen(3000, () => console.log('Recipes running on 3000'))

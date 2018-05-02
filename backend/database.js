const bcrypt = require('bcrypt');
const pg = require('pg-promise')();
const dbConfig = 'postgres://kboot@localhost:5432/recipes';
const db = pg(dbConfig);

let getAllRecipes = () => db.query('SELECT * FROM recipes;');

let getOneRecipe = () => db.query(`SELECT * FROM recipes WHERE id = ${id}`);

let generateILike = (column, data) => {
  let whereString = "(";
  data.forEach((item, index) => {
    whereString += `${column} ILIKE '%${item}%'`;
    if (index !== data.length - 1) {
      whereString += ' OR ';
    };
  });
  whereString += ')';
  return whereString;
};

let searchRecipes = (queryParams) => {
  let where = ""
  where += generateILike('title', queryParams);
  where += ' OR ';
  where += generateILike('tag', queryParams);
  where += ' OR (';
  queryParams.forEach((item, index) => {
    where += `ingredients @> '[{"item": "${item.toLowerCase()}"}]'`;
    if (index !== queryParams.length - 1) {
      where += ' OR ';
    };
  });
  where += ')';
  console.log(where);
  return db.query(`SELECT * FROM recipes WHERE ${where};`);
};

let addRecipe = (recipe) => {
  console.log(recipe);
  let { title, ver, derived_id, prepmins, cookmins, createdon, descr,
  tag, user_id, ingredients, directions, servings, image_url } = recipe;
  return db.query(`INSERT INTO recipes
    (title, ver, derived_id, prepmins, cookmins, createdon,
    descr, tag, user_id, ingredients, directions, servings, image_url)
    VALUES ('${title}', ${ver}, '${derived_id}', ${prepmins},
    ${cookmins}, '${createdon}', '${descr}', '${tag}', ${user_id},
    '${JSON.stringify(ingredients)}', '${JSON.stringify(directions)}',
    ${servings}, '${image_url}');`);
};

let addNewUser = async (username, password, email, fname, lname) => {
  let hpass = await bcrypt.hash(password, 10);
  return db.query(`INSERT INTO users (username, hpass, email, fname, lname) VALUES ('${username}', '${hpass}', '${email}', '${fname}', '${lname}')`);
}

let findUserByEmail = async (email) => {
  return db.query(`SELECT * FROM users WHERE email='${email}'`);
}

module.exports = db;
// module.exports = {
//   getAllRecipes,
//   getOneRecipe,
//   searchRecipes,
//   addRecipe,
//   findUserByEmail,
//   addNewUser
// };

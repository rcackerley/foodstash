# Foodstash

> Foodstash is a platform for storing, sharing, and iterating on beloved recipes.
<br>

![foodstash](https://user-images.githubusercontent.com/19500679/39670024-25e3a836-50c9-11e8-943c-3f9887be8bda.png)
---

## Table of Contents
- [Setup](#setup)
- [Features](#features)
- [Libraries/APIs](#external)
- [Todos](#todos)
- [Contributors](#contributors)
- [License](#license)

---
## Setup

> Install dependies for both frontend and backend and setup postgres database using sql file
```shell
$ git clone git@github.com:rcackerley/recipes.git
$
$ #frontend
$ yarn install 
$ yarn start
$
$ #postgres
$ createdb recipes 
$ cat db.sql | psql recipes
$
$ #backend
$ yarn install 
$ node server.js

```

## Features

* Custom predictive search bar to query for recipes
* Add recipe to database
* Search for recipes based on category
* Authentication using JSON web tokens and bcrypt
* Client-side routing with react router
* State management with redux
* Responsive mobile-first CSS Grid/ Flexbox Layout

## External
> Libraries and APIs used within the application
* [React](https://reactjs.org/)
* [React Router](https://github.com/ReactTraining/react-router)
* [Redux](https://redux.js.org/)
* [Node](https://nodejs.org/)
* [JSON Web Token (JWT)](https://jwt.io/)
* [Express](https://expressjs.com/)


## Todos/ in progress
* Search for recipes based on ingredients
* Improve form submission for adding a recipe - include remianing fields
* Convert submission of ingredients and steps into multiple fields, pass in as array of strinngs.
* Make rating system for recipes operational
* Make derived version of recipes within recipe page to iterate on an existing recipe
* Add more user data within user settings such as avatar, backgorund color, ect.
* Create and add recipes to a cookbook

## Contributors
* [Robby](https://github.com/rcackerley)
* [James](https://github.com/jamesnmcdowell)
* [Chris](https://github.com/chrisgoodell)
* [Node](https://github.com/kbooth1000)

---

## License

[![License](http://img.shields.io/:license-mit-blue.svg?style=flat-square)](http://badges.mit-license.org)

- **[MIT license](https://github.com/jamesnmcdowell/griddle/blob/master/LICENSE)**

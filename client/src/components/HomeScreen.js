import React from 'react';
import { Link } from 'react-router-dom';

let HomeScreen = () => {
  return (
    <Router>
        <div className="container" >
            <Header />
            <Route path="/" exact component={CategoryScreen} />
            <Route path="/by-ingredients" component={IngredientsScreen} />
            <Route path="/add-recipe" component={AddRecipeScreen} />
            <Route path="/#/product/:product" component={Recipe} />
        </div>
    </Router>
);
}
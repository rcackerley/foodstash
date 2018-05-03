import React from 'react';
import { connect } from 'react-redux';
import RecipeCard from './RecipeCard';
import Shell from './Shell';
import SecondaryNav from './SecondaryNav';
import SearchBar from './SearchBar';
import PrimaryNav from './PrimaryNav';
import Header from './Header';

let RecipeListScreen = ({ recipes }) =>
    <div className="flex-app">
        <div>
            <Header />
            {/* <SecondaryNav /> */}
        </div>
        <div className="flex-content">
            {/* <SearchBar/> */}
            <div className="recipe-list">
                {recipes.map(recipe =>
                    <RecipeCard recipe={recipe} />
                )}
            </div> 
        </div>
        <PrimaryNav />
    </div>

let mapStateToProps = (state, props) => {
    let { recipes } = state;
    return { recipes: recipes };
};

let RecipeListScreenState = connect(
    mapStateToProps
)(RecipeListScreen);

export default RecipeListScreenState; 
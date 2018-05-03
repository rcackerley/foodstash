import React from 'react';
import { connect } from 'react-redux';
import RecipeCard from './RecipeCard';
import Shell from './Shell';
import SecondaryNav from './SecondaryNav';
import SearchBar from './SearchBar';
import PrimaryNav from './PrimaryNav';
import Header from './Header';
import Stars from './Stars';
import Tabs from './Tabs';

class RecipeScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = { active: "aTab" };
    }
    render() {
        let {recipe} = this.props;
        const content = {
            aTab: recipe.ingredients,
            bTab: recipe.directions,
            cTab: recipe.notes
        };
    return (
    <div className="flex-app">
        <Header />
        <div className="flex-content">
            <div className="r-screen">
                <div className="r-screen-hero">
                    <img src={recipe.img_url} />
                </div>
                <div className="r-screen-info">
                    <span className="r-screen-title">{recipe.title}</span>
                    <div>
                        <Stars/>
                    </div>
                    <div className="r-screen-info-columns">
                        <div> 
                            <span>prep time </span>
                            <span>{recipe.prepmins} min </span>
                        </div>
                        <div>
                            <span>cook time </span>
                            <span>{recipe.cookmins} min</span>
                        </div>
                        <div>
                            <span>servings </span>
                            <span>{recipe.servings} </span>
                        </div>          
                    </div>
                </div>
                <div className="r-screen-description">
                    <p>{recipe.desc} </p>
                    <div className="r-screen-tag-container">
                        {recipe.tags.map(tag =>
                            <div className="r-screen-tag">
                                <span>{tag}</span>
                            </div>
                        )}   
                    </div>
                </div>
                <div className="r-screen-tabs">
                    <Tabs
                        active={this.state.active}
                        onChange={active => this.setState({ active })}
                    >
                        <div key="aTab">Ingredients</div>
                        <div key="bTab">Instructions</div>
                        <div key="cTab">Notes</div>
                    </Tabs>
                    <div className="tab-container">
                    <ol>
                    {content[this.state.active].map(tag =>
                      <li> {tag} </li>
                    )}         
                    </ol>
                    </div>
                </div>
            </div>
        </div>
        <PrimaryNav />
    </div>
    );
}
}

let mapStateToProps = (state, props) => {
    let { recipes } = state;
    let firstRecipe = recipes[0];
    return { recipe: firstRecipe };
};

let RecipeScreenState = connect(
    mapStateToProps
)(RecipeScreen);

export default RecipeScreenState;



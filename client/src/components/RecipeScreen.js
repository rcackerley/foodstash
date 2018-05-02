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
            aTab: "Tab A fdfggggkdkfdkdkfkdfdkkfkddfkk",
            bTab: "Tab B",
            cTab: "Tab C"
        };
    return (
    <div className="flex-app">
        <Header />
        <div className="flex-content">
            <div className="r-screen">
                <div className="r-screen-hero">
                    <img src={recipe.img_main} />
                </div>
                <div className="r-screen-info">
                    <span className="r-screen-title">{recipe.title}</span>
                    <div>
                        <Stars/>
                    </div>
                    <div className="r-screen-info-columns">
                        <div> 
                            <span>prep mins </span>
                            <span>20 </span>
                        </div>
                        <div>
                            <span>prep mins </span>
                            <span>20 </span>
                        </div>
                        <div>
                            <span>prep mins </span>
                            <span>20 </span>
                        </div>          
                    </div>
                </div>
                <div className="r-screen-description">
                    <p>Cras metus sapien, rhoncus et sagittis eget, efficitur at ligula. Morbi sollicitudin,
                            massa in consectetur iaculis, neque augue semper ligula, sed viverra arcu diam non
                            risus. Nunc eu purus nunc. Nulla et libero id enim finibus dapibus vitae at nunc. </p>
                    <div className="r-screen-tag-container">
                        <div className="r-screen-tag">
                            <span>dinner </span>
                        </div>
                        <div className="r-screen-tag">
                            <span>italian </span>
                        </div>
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
                    <h2>Content</h2>
                    <p>{content[this.state.active]}</p>
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



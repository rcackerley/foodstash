import React, { Component } from 'react';
import { connect } from 'react-redux';
import RecipeCard from './RecipeCard';
import Shell from './Shell';
import SecondaryNav from './SecondaryNav';
import SearchBar from './SearchBar';
import PrimaryNav from './PrimaryNav';
import Header from './Header';
import { updateRecipesAC } from '../actions/index';

class RecipeListScreen extends Component {
    constructor(props) {
        super(props);
        this.state = { isLoading: true };
    }
    componentDidMount() {
        let { type, id } = this.props.match.params;
        updateRecipesAC(this.props.dispatch, type, id);
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.state.isLoading && this.props.recipes.length > 0) {
            this.setState({ isLoading: false });
        }
      if (this.state.isLoading && this.props.recipes !== prevProps.recipes ) {
            this.setState({ isLoading: false });
        }
    }
    // async getDerivedStateFromProps(nextProps, prevState) {
    //     console.dir(prevState);
    //     console.log(nextProps);
    //     let { type, id  } = this.props.match.params;
    //     let { type: prevType , id: prevId } = prevProps.match.params;
    //     console.log("rabbitbefore");
    //     updateRecipesAC(this.props.dispatch, type, id);   
    // }

    render() {
        let {isLoading} = this.state;
        let { recipes } = this.props;
        return (
            <div className="flex-app">
                <div>
                    <Header />
                    {/* <SecondaryNav /> */}
                </div>
                <div className="flex-content">
                    {/* <SearchBar/> */}
                    <div className="recipe-list">
                        {isLoading ? <h1>loading </h1> : recipes.length > 0 ? 
                            recipes.map((recipe, i) => <RecipeCard key={`${recipe.id}_${i}`} recipe={recipe} />) :
                            <p>no recipes found </p>        
                          
                        }
                    </div>
                </div>
                <PrimaryNav />
            </div>    
        );
    }
}

let mapStateToProps = (state, props) => {
    let { recipes } = state;
    return { recipes: recipes };
};

let RecipeListScreenState = connect(
    mapStateToProps
)(RecipeListScreen);

export default RecipeListScreenState; 
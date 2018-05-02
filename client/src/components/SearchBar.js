import React from 'react';
import {Link} from 'react-router-dom';
import {setSearchResultRecipes} from '../actions/index';
import {connect} from 'react-redux';
import {getRecipeById, getRecipesBySearch} from '../ajax/index';

// Let's create a "real-time search" component

class SearchBar extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      searchString: '',
      libraries: []
    }
  }

  componentDidMount() {
      fetch('/search')
      .then(res => res.json())
      .then(terms => this.setState({libraries: terms}))
  }

  render() {
    let {libraries} = this.state;
    let {setSearchResultRecipes} = this.props
    let searchString = this.state.searchString.trim().toLowerCase();

    let handleChange = (event) => {
      this.setState({searchString: event.target.value});
    }

    if (searchString.length > 0){
      libraries = libraries.filter((term) => {
        return term.title.toLowerCase().match( searchString );
      });

    }

    return (
      <form className="search-form">
        <input className="search" type="text" value={this.state.searchString} onChange={ event => handleChange(event)} placeholder="Search for categories, recipes, or ingredients" />
        <button className="search-button" onClick={event =>
          getRecipesBySearch(libraries)
          .then(recipes => setSearchResultRecipes(recipes))
        }>Search</button>
        <ul className="suggestions">
          { libraries.map((term) =>
              <Link onClick={event => {
                return getRecipeById(term.id)
                .then(recipe => setSearchResultRecipes(recipe))
              }} to="/recipes"><li>{term.title}</li></Link>
          ) }
        </ul>
      </form>
    )
  }
}

let mapDispatchToProps = dispatch => ({setSearchResultRecipes: recipes => dispatch(setSearchResultRecipes(recipes))})
let mapStateToProps = state => state;
let SearchBarContainer = connect(mapStateToProps, mapDispatchToProps)(SearchBar)
export default SearchBarContainer;

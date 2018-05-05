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

    if (searchString.length > 0) libraries = libraries.filter((c) => c.title.toLowerCase().match(searchString));
    // getRecipesBySearch(libraries)
    //   .then(recipes => setSearchResultRecipes(recipes))
    return (
      <div className="search-form-container">
      <form className="search-form">
        <input className="search" type="text" value={this.state.searchString}  onChange={ event => handleChange(event)} placeholder="Search for categories, recipes, or ingredients" />
          <Link to={`/recipes/search/_${this.state.searchString}`}>
          <button className="search-button" >Search</button>
        </Link>
        { searchString.length >= 1 &&
        <ul className="suggestions">
          { libraries.map((term) =>
              <Link onClick={event => {
                return getRecipeById(term.id)
                .then(recipe => setSearchResultRecipes(recipe))
              }} to={`/recipes/${term.id}`}><li>{term.title}</li></Link>
          ) }  

        </ul>
        }
      </form>
      </div>
    )
  }
}

let mapDispatchToProps = dispatch => ({setSearchResultRecipes: recipes => dispatch(setSearchResultRecipes(recipes))})
let mapStateToProps = state => state;
let SearchBarContainer = connect(mapStateToProps, mapDispatchToProps)(SearchBar)
export default SearchBarContainer;

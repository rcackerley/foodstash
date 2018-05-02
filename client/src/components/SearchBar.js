import React from 'react';
import {Link} from 'react-router-dom';

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
        <ul className="suggestions">
          { libraries.map((term) =>
              <Link params={term} to="#"><li>{term.title}</li></Link>
          ) }
        </ul>
      </form>
    )
  }
}

export default SearchBar;

import React from 'react';


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
      <div>
        <input type="text" value={this.state.searchString} onChange={ event => handleChange(event)} placeholder="Search" />
        <ul>
          { libraries.map((term) => {
              return <li>{term.title}</li>
          }) }
        </ul>
      </div>
    )
  }
}

export default SearchBar;

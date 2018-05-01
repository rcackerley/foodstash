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
      libraries = libraries.filter((l) => {
        return l.title.toLowerCase().match( searchString );
      });

    }

    return (
      <div>
        <input type="text" value={this.state.searchString} onChange={ event => handleChange(event)} placeholder="Search" />
        <ul>
          { libraries.map(function(l){
              return <li>{l.title}</li>
          }) }
        </ul>
      </div>
    )
  }
}




// class SearchBar extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       terms: [],
//       updatedList: [],
//     }
//   }
//
//   componentDidMount() {
//       fetch('/search')
//       .then(res => res.json())
//       .then(terms => this.setState({terms: terms, updatedList: terms}))
//   }
//
//   render() {
//     let {updatedList, terms} = this.state;
//     let filterList = (searchString) => {
//       console.log(searchString)
//       if (searchString === '') {
//           this.setState({updatedList: terms});
//           return
//       }
//       let matchingItems = updatedList;
//       let filteredList = matchingItems.filter(listItemObject => listItemObject.title.toLowerCase().includes(searchString.toLowerCase()))
//       this.setState({updatedList: filteredList})
//     }
//
//     return (
//       <div className="filter-list">
//         <form>
//         <fieldset className="form-group">
//         <input type="text" className="form-control form-control-lg" placeholder="Search" onChange={ event => filterList(event.target.value)}/>
//         </fieldset>
//         </form>
//       </div>
//     )
//   }
// }


export default SearchBar;

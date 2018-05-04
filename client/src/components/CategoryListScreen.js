import React, { Component } from 'react';
import CategoryCard from './CategoryCard';
import { connect } from 'react-redux';
import Shell from './Shell';
import SecondaryNav from './SecondaryNav';
import SearchBar from './SearchBar';
import PrimaryNav from './PrimaryNav';
import Header from './Header';
import { updateCategories } from '../actions/index';
import { getAllCategories } from '../ajax/index';

class CategoryListScreen extends Component {
  async componentDidMount() {
    let { updateCategories } = this.props;
    let categories = await getAllCategories();
    updateCategories(categories);
  }
  async doSomething() {
    
  }

  render() {
    let { categories } = this.props;
    return (
      <div className="flex-app">
        <div>
          <Header />
          <SearchBar />
        </div>
        <div className="flex-content">
          <SecondaryNav />
          <div className="category-list">
            {categories.map(category =>
              <CategoryCard category={category} />
            )}
          </div>
        </div>
        <PrimaryNav />
      </div>
    );
  }
}

let mapDispatchToProps = dispatch => ({ updateCategories: categories => dispatch(updateCategories(categories)) })

let mapStateToProps = (state, props) => {
  let { categories } = state;
  return { categories: categories };
};

let CategoryListScreenState = connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoryListScreen);

export default CategoryListScreenState;

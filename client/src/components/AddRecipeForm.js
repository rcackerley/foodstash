import React, { Component } from 'react';
import rootReducer from '../reducers/index';
import { connect } from 'react-redux';
import { postRecipe } from '../ajax/index';
import store from '../store';
import {addRecipe, setActiveRecipe} from '../actions/index';


// let addRecipe = rootReducer.addRecipe;
// let setActiveRecipe = rootReducer.setActiveRecipe;
console.log('addRecipe: ', addRecipe);


// ("title", "ver", "prepmins", "cookmins",
//   "descr", "user_id", "ingredients", "directions", "servings"

class AddRecipeForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      ver: 0,
      image_url: '',
      descr: '',
      user_id: 0,
      tag: '',
      prepmins: 0,
      cookmins: 0,
      directions: [],
      categories_id: 0,
      ingredients: [],
      servings: 0,
      derived_id: 0,
      activeRecipe: 1

    }

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

  }


  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) { 
    e.preventDefault();
   console.log('hey');


   
    let recipeData = {
      title: this.state.title,
      image_url: this.state.image_url,
      descr: this.state.descr,
      tag: this.state.tag,
      prepmins: this.state.prepmins,
      cookmins: this.state.cookmins,
      directions: this.state.directions,
      categories_id: this.state.categories_id,
      ingredients: this.state.ingredients,
      servings: this.state.servings,
      ver: 0,
      user_id: 0,
      derived_id: 0
    }
    console.log('recipeData: ', recipeData);
    
    console.log('props: ', this.props);

    store.dispatch( setActiveRecipe(2) );
    store.dispatch( addRecipe(recipeData) );
    

    postRecipe(recipeData)

    .then((res) =>{
    console.log('res.data: ', recipeData);}
    )
    .catch(err => console.log('DB error: '+ err) );
    // this.props.addRecipe(recipeData);
  }

  render() {
    console.log('props: ', this.props);

    const categoryOptions = this.props.categories.map(cat =>
      ({ label: cat.title, value: cat.id }));
    categoryOptions.push({ label: '** Recipe Category **', value: 0 })

    const SelectListGroup = ({ name, value, onChange, options }) => {
      const selectOptions = categoryOptions.map(option => (
        <option key={option.label} value={option.value}>
          {option.label}
        </option>
      ));
      return (
        <div className="form-group">
          <select
            name={name}
            value={value}
            onChange={onChange}
          >
            {selectOptions}
          </select>
        </div>
      );
    };

    return (
      <div className="add-recipe-form">
        <form onSubmit={ event => this.onSubmit(event)}>
          <ul>
            <li>
              <label className="description hug-top" htmlFor="title">Title </label>
              <div>
                <input
                  id="title"
                  name="title"
                  className=""
                  type="text"
                  maxLength="255"
                  value={this.state.title}
                  onChange={this.onChange} />
              </div>
            </li>

            <li>
              <label className="description" htmlFor="descr">Description</label>
              <div>
                <textarea
                  id="descr"
                  name="descr"
                  className=""
                  value={this.state.desc}
                  onChange={this.onChange}>
                </textarea>
              </div>
            </li>

            <SelectListGroup
              id="categories_id"
              name="categories_id"
              className=""
              options={categoryOptions}
              value={this.state.categories_id}
              onChange={this.onChange}
            />

            <li>
              <label className="description" htmlFor="image_url">Add an Image </label>
              <div>
                <input id="image_url"
                  name="image_url"
                  className=""
                  type="file"
                  value={this.state.image_url}
                  onChange={this.onChange} />
              </div>
            </li>

            <li>
              <label className="description" htmlFor="preptime">Prep Time (mins) </label>
              <div>
                <input id="prepmins"
                  name="prepmins"
                  className=""
                  type="text"
                  value={this.state.prepmins}
                  onChange={this.onChange} />
              </div>
            </li>

            <li>
              <label className="description" htmlFor="cooktime">Cook Time (mins) </label>
              <div>
                <input
                  id="cookmins"
                  name="cookmins"
                  className=""
                  type="text"
                  value={this.state.cookmins}
                  onChange={this.onChange} />
              </div>
            </li>

            <li>
              <label className="description" htmlFor="servings">Servings </label>
              <div>
                <input
                  id="servings"
                  name="servings"
                  className=""
                  type="text"
                  value={this.state.servings}
                  onChange={this.onChange}
                />
              </div>
            </li>

            <li>
              <label className="description" htmlFor="ingredients">Ingredients </label>
              <div>
                <textarea
                  id="ingredients"
                  name="ingredients"
                  className=""
                  value={this.state.ingredients}
                  onChange={this.onChange}>
                </textarea>
              </div>
            </li>

            <li>
              <label className="description" htmlFor="directions">Directions </label>
              <div>
                <textarea
                  id="directions"
                  name="directions"
                  className=""
                  value={this.state.directions}
                  onChange={this.onChange}>
                </textarea>
              </div>
            </li>

            <li className="button">
              <input id="saveForm" onClick={this.onSubmit} className="button_text" type="button" name="submit" value="Submit" />
            </li>
          </ul>
        </form>
        <div id="footer"></div>
      </div>)
  }
};

let mapStateToProps = state => state;

export default connect(mapStateToProps, { addRecipe })(
  AddRecipeForm
);
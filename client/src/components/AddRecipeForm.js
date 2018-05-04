import React, { Component } from 'react';
import rootReducer from '../reducers/index';
import { connect } from 'react-redux';
import { postRecipe } from '../ajax/index';
import store from '../store';
import { addRecipe, setActiveRecipe } from '../actions/index';

class AddRecipeForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      version: 0,
      prepmins: 0,
      cookmins: 0,
      description: '',
      tag: '',
      user_id: 0,
      ingredients: [],
      directions: [],
      servings: 0,
      image_url: '',
      categories_id: 0,
      notes: '',
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

    let recipeData = {
      title: this.state.title.toString(),
      version: this.state.version.toString(),
      prepmins: this.state.prepmins.toString(),
      cookmins: this.state.cookmins.toString(),
      description: this.state.description.toString(),
      tag: this.state.tag.toString(),
      user_id: this.state.user_id.toString(),
      ingredients: this.state.ingredients.toString(),
      directions: this.state.directions.toString(),
      servings: this.state.servings.toString(),
      image_url: this.state.image_url.toString(),
      categories_id: this.state.categories_id.toString(),
      notes: this.state.notes.toString(),
      derived_id: this.state.derived_id.toString(),
      activeRecipe: this.state.activeRecipe.toString()
    }
    console.log('recipeData: ', recipeData);

    console.log('props: ', this.props);
let {addRecipe,setActiveRecipe} = this.props;

    setActiveRecipe(2);
    addRecipe(recipeData)

    postRecipe(recipeData, this.props.token.token)

      .then((res) => {
        console.log('res.data: ', recipeData);
      }
      )
      .catch(err => console.log('DB error: ' + err));
    // this.props.addRecipe(recipeData);
  }

  render() {
    console.log('props: ', this.props);

    const categoryOptions = this.props.categories.map(cat =>
      ({ label: cat.title, value: cat.id }));
    categoryOptions.unshift({ label: '** Recipe Category **', value: 0 })

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
        <form onSubmit={event => this.onSubmit(event)}>
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
                  <label className="description hug-top" htmlFor="img_url">
                or enter an image url</label>
                <input
                  id="img_url_txt"
                  name="img_url_txt"
                  className=""
                  type="text"
                  value={this.state.img_url_text}
                  onChange={this.onChange}
                />
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
let mapDispatchToProps = dispatch => ({
  addRecipe: recipe => dispatch(addRecipe(recipe)),
  setActiveRecipe: id => dispatch(setActiveRecipe(id))
  })
let mapStateToProps = state => state;

export default connect(mapStateToProps, mapDispatchToProps)(
  AddRecipeForm
);
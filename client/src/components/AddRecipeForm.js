import React, { Component } from 'react';
import rootReducer from '../reducers/index';
import { connect } from 'react-redux';
import { postRecipe } from '../ajax/index';
import store from '../store';

let addRecipe = rootReducer.addRecipe;



class AddRecipeForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      image_url: '',
      desc: '',
      tag: '',
      prepmins: 0,
      cookmins: 0,
      directions: [],
      categories_id: 0,
      ingredients: []

    }

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  onSubmit(e) {
    e.preventDefault();

    const recipeData = {
      recipe: this.state.recipe
    };

    postRecipe(recipeData)
      .then(res =>
        store.dispatch({
          type: addRecipe,
          payload: res.data
        })
      )

    this.props.addRecipe(recipeData);
  }
  render() {

    return (
      <div className="add-recipe-form">

        <h2>Add a Recipe</h2>
        <form onSubmit={this.onSubmit}>
          <ul>
            <li>
              <label className="description" htmlFor="title">Title </label>
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
              <label className="description" htmlFor="desc">Description</label>
              <div>
                <textarea
                  id="desc"
                  name="desc"
                  className=""
                  value={this.state.desc}
                  onChange={this.onChange}>
                </textarea>
              </div>
            </li>

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

            {/*   // SERVINGS NOT IN DATABASE 
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
            </li>*/}

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
              <input id="saveForm" className="button_text" type="button" name="submit" value="Submit" />
            </li>
          </ul>
        </form>
        <div id="footer"></div>
      </div>)
  }
};

{/* 
<script src="form.js" type="application/javascript"></script> 

// let mapStateToProps = state => ({
//   recipes: state.recipes
//   });
*/ }
export default connect(null, { addRecipe })(
  AddRecipeForm
);
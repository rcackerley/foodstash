import React, { Component } from 'react';
import { addRecipe } from './actions';
import { connect } from 'react-redux';
import { postRecipe } from './ajax/index';





class AddRecipeForm extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  onFormSubmit(e) {
    e.preventDefault();

    const recipeData = {
      recipe: this.state.recipe
    };

    postRecipe(recipeData)
      .then(res =>
        dispatch({
          type: addRecipe,
          payload: res.data
        })
      )

    this.props.addRecipe(recipeData);
  }
  render() {

    return
    <div className="add-recipe-form">

      <h2>Add a Recipe</h2>
      <form id="form_123" onSubmit={this.onFormSubmit} enctype="multipart/form-data" method="post" action="">
        <ul>
          <li>
            <label className="description" for="title">Title </label>
            <div>
              <input id="title" name="title" className="" type="text" maxlength="255" value="" />
            </div>
          </li>

          <li>
            <label className="description" for="description">Description</label>
            <div>
              <textarea id="description" name="description" className=""></textarea>
            </div>
          </li>

          <li>
            <label className="description" for="image">Add an Image </label>
            <div>
              <input id="image" name="image" className="" type="file" />
            </div>
          </li>

          <li>
            <label className="description" for="preptime">Prep Time (mins) </label>
            <div>
              <input id="preptime" name="preptime" className="" type="text" value="" />
            </div>
          </li>

          <li>
            <label className="description" for="cooktime">Cook Time (mins) </label>
            <div>
              <input id="cooktime" name="cooktime" className="" type="text" value="" />
            </div>
          </li>

          <li>
            <label className="description" for="servings">Servings </label>
            <div>
              <input id="servings" name="servings" className="" type="text" value="" />
            </div>
          </li>

          <li>
            <label class="description" for="ingredients">Ingredients </label>
            <div>
              <textarea id="ingredients" name="ingredients" class=""></textarea>
            </div>
          </li>

          <li>
            <label class="description" for="directions">Directions </label>
            <div>
              <textarea id="directions" name="directions" class=""></textarea>
            </div>
          </li>

          <li class="button">
            <input id="saveForm" class="button_text" type="button" name="submit" value="Submit" />
          </li>
        </ul>
      </form>
      <div id="footer"></div>
    </div>
  }
};


{/* <script src="form.js" type="application/javascript"></script> */ }

// let mapStateToProps = state => ({
//   recipes: state.recipes
//   });

export default connect({ addRecipe })(
  AddRecipeForm
);
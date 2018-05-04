import React, { Component } from 'react';
import rootReducer from '../reducers/index';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { postRecipe } from '../ajax/index';
import store from '../store';
import { addRecipe, setActiveRecipe, updateCategories, updateRecipes } from '../actions/index';
import { getAllCategories, getAllRecipes } from '../ajax/index';

class AddDerivedRecipeForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      version: '0',
      image_url: '',
      description: '',
      user_id: '0',
      tag: '',
      prepmins: '0',
      cookmins: '0',
      directions: '',
      categories_id: '0',
      ingredients: '',
      servings: '0',
      derived_id: '0',
      notes: '',
      activeRecipe: '1',
      token: ''
    }



    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

  }

  componentDidMount() {
    async () => {
      let { updateCategories, updateRecipes } = this.props;
      let categories = await getAllCategories();
      let recipes = await getAllRecipes();
      console.log('categories, categories');
      updateCategories(categories);
      console.log('recipes==', recipes);
      updateRecipes(recipes);
    }
  }


  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

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
      ver: "0",
      user_id: "0",
      derived_id: '$1'
    }
    let { addRecipe, setActiveRecipe, token, history } = this.props;

    setActiveRecipe(2);
    addRecipe(recipeData)

    postRecipe(recipeData, token.token)

      .then((res) => {
        history.push('/recipes')
      }
      )
      .catch(err => console.log('DB error: ' + err));
  }


  render() {
    let parentRecipeId = this.state.activeRecipe;
    console.log('parentRecipeId: ', parentRecipeId);

    let { recipes, categories } = this.props;
    // this.props.activeRecipe ? this.props.activeRecipe : this.state.activeRecipe ;
    console.log('recipes ', recipes);
    console.log('categories ', categories);
    console.log('props: ', this.props);

    let parentRecipe = recipes.find(ptRecipe => ptRecipe.id.toString() === parentRecipeId.toString());
    console.log('parentRecipe1: ', parentRecipe);
    let imageUrl = parentRecipe.image_url && parentRecipe.image_url.toString();
    let picStyles = { width: '85px', height: '65px', backgroundImage: 'url(' + imageUrl + ')', backgroundSize: 'cover' }
    console.log('props: ', this.props);

    const categoryOptions = categories.map(cat =>
      ({ label: cat.title, value: cat.categories_id }));
    categoryOptions.unshift({ label: '** Recipe Category **', value: 0 })

    const SelectListGroup = ({ name, value, onChange, options }) => {
      console.log('parentRecipe2: ', parentRecipe);

      let selectedCat = categories.find(cat => cat.id.toString() === parentRecipe.categories_id.toString());
      console.log('selectedCat: ', selectedCat);


      const optionTags = categoryOptions.map(option => (
        <option key={option.label} value={option.label}>
          {option.label}
        </option>
      ));
      return (
        <div className="form-group">
          <select
            name={name} defaultValue={selectedCat.name} className="selectList"
            onChange={onChange}
          >
            {optionTags}
          </select>
        </div>
      );
    };

    return (
      <div className="add-recipe-form">

        <h2>Edit this Recipe</h2>
        <form onSubmit={event => this.onSubmit(event)}>
          <ul>
            <li>
              <label className="description hug-top" htmlFor="title">
                Title
              </label>
              <div>
                <input
                  id="title"
                  name="title"
                  className=""
                  type="text"
                  maxLength="255"
                  value={this.state.title ? this.state.title : parentRecipe.title}
                  onChange={this.onChange}
                />
              </div>
            </li>

            <li>
              <label className="description" htmlFor="descr">
                Description
              </label>
              <div>
                <textarea
                  id="descr"
                  name="descr"
                  className=""
                  value={this.state.desc}
                  onChange={this.onChange}
                >{parentRecipe.desc}
                </textarea>
              </div>
            </li>
            <label className="description" htmlFor="image_url">
              Recipe Category
              </label>
            <SelectListGroup
              id="categories_id"
              name="categories_id"
              className=""
              options={categoryOptions}
              value={this.state.categories_id}
              onChange={this.onChange}
            />

            <li>
              <label className="description" htmlFor="image_url">
                Main Image
              </label>
              <div className="currentRecipePic" style={picStyles}></div>
              <div>
                <input id="image_url"
                  name="image_url"
                  className=""
                  type="file"
                  value={this.state.image_url}
                  onChange={this.onChange}
                  placeholder={parentRecipe.image_url && parentRecipe.image_url.toString()}
                />
                <label className="description hug-top" htmlFor="image_url">
                  or enter an image url</label>
                <span style={{ fontSize: '11px', color: '#777' }} ><br />{parentRecipe.image_url && parentRecipe.image_url.toString()}</span>
                <input
                  id="image_url_txt"
                  name="image_url_txt"
                  className=""
                  type="text"
                  value={this.state.image_url_text}
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
                  value={this.state.prepmins ? this.state.prepmins : parentRecipe.prepmins}
                  onChange={this.onChange}
                />
              </div>
            </li>

            <li>
              <label className="description" htmlFor="cooktime">
                Cook Time (mins)
              </label>
              <div>
                <input
                  id="cookmins"
                  name="cookmins"
                  className=""
                  type="text"
                  value={this.state.cookmins ? this.state.cookmins : parentRecipe.cookmins}
                  onChange={this.onChange}
                />
              </div>
            </li>

            <li>
              <label className="description" htmlFor="servings">
                Servings
              </label>
              <div> <input
                id="servings"
                name="servings"
                className=""
                type="text"
                value={this.state.servings ? this.state.servings : parentRecipe.servings}
                onChange={this.onChange}
              />
              </div>
            </li>

            <li>
              <label className="description" htmlFor="ingredients">
                Ingredients
              </label>
              <div>
                <textarea
                  id="ingredients"
                  name="ingredients"
                  className=""
                  value={this.state.desc}
                  onChange={this.onChange}
                >{parentRecipe.desc}
                </textarea>
              </div>
            </li>

            <li>
              <label className="description" htmlFor="directions">
                Directions
              </label>
              <div>
                <textarea
                  id="directions"
                  name="directions"
                  className=""
                  value={this.state.directions}
                  onChange={this.onChange}
                >{parentRecipe.directions}
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
  setActiveRecipe: id => dispatch(setActiveRecipe(id)),
  updateCategories: categories => dispatch(updateCategories(categories)),
  updateRecipes: recipes => dispatch(updateRecipes(recipes))
})
let mapStateToProps = state => ({ token: state.token, recipes: state.recipes, categories: state.categories, activeRecipe: state.activeRecipe })

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(
  AddDerivedRecipeForm
));
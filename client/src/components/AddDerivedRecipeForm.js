import React, { Component } from 'react';
import rootReducer from '../reducers/index';
import { connect } from 'react-redux';
import { postRecipe } from '../ajax/index';
import store from '../store';

let addRecipe = rootReducer.addRecipe;
console.log('addRecipe: ', addRecipe);


// ("title", "ver", "prepmins", "cookmins",
//   "descr", "user_id", "ingredients", "directions", "servings"

class AddDerivedRecipeForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      ver: 0,
      img_url: '',
      descr: '',
      user_id: 0,
      tag: '',
      prepmins: 0,
      cookmins: 0,
      directions: [],
      categories_id: 0,
      ingredients: [],
      servings: 0,
      derived_id: 0

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
      img_url: this.state.img_url,
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

    postRecipe(recipeData)
    .then(res =>
      store.dispatch({
        type: addRecipe,
        payload: res.data
      })
    )
    .then((res) =>{
    console.log('res.data: ', recipeData);}
    )
    .catch(err => console.log('DB error: '+ err) );
    // this.props.addRecipe(recipeData);
  }


  


  render() {
    let parentRecipeId = 1;
    let parentRecipe = this.props.recipes.find(ptRecipe => ptRecipe.id === parentRecipeId);
    console.log('## ', parentRecipe.title);
    
      // parentRecipe.id === parentRecipe);

  //   this.props.recipes.forEach(recipe => {
  //     recipe.find(parentRecipe => parentRecipe.id === parentRecipe)
  // });

    // console.log('parentRecipe: ', parentRecipe);
    
    let imageUrl = parentRecipe.img_url && parentRecipe.img_url.toString();
    let picStyles = {width:'85px', height:'65px', backgroundImage:'url('+ imageUrl + ')', backgroundSize:'cover'}
    console.log('props: ', this.props);

    const categoryOptions = this.props.categories.map(cat =>
      ({ label: cat.title, value: cat.categories_id }));
    categoryOptions.unshift({ label: '** Recipe Category **', value: 0 })

    const SelectListGroup = ({ name, value, onChange, options }) => {
      let selectedCat = this.props.recipes[parentRecipeId].title;
      
      const optionTags = categoryOptions.map(option => (
        <option key={option.label} value={option.label}>
          {option.label}
        </option>
      ));
      return (
        <div className="form-group">
          <select
            name={name} defaultValue={selectedCat} className="selectList"
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
        <form onSubmit={ event => this.onSubmit(event)}>
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
                  onChange={this.onChange}
                  placeholder={parentRecipe.title}
                   />
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
                  onChange={this.onChange}
                  placeholder={this.props.recipes[parentRecipeId].desc}
                  >
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
              <label className="description" htmlFor="img_url">Main Image </label>

              
              <div className="currentRecipePic" style={picStyles}></div>
              <div>
                <input id="img_url"
                  name="img_url"
                  className=""
                  type="file"
                  value={this.state.img_url}
                  onChange={this.onChange}
                  placeholder={this.props.recipes[parentRecipeId].img_url && this.props.recipes[parentRecipeId].img_url.toString()}
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
                  onChange={this.onChange}
                  placeholder={this.props.recipes[parentRecipeId].prepmins}
                   />
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
                  onChange={this.onChange}
                  placeholder={ parentRecipe.cookmins && parentRecipe.cookmins.toString() }
                   />
              </div>
            </li>

            <li>
              <label className="description" htmlFor="servings">Servings </label>
              <div>
                <textarea
                  id="servings"
                  name="servings"
                  className=""
                  type="text"
                  value={this.state.servings}
                  onChange={this.onChange}
                  placeholder={parentRecipe.servings && parentRecipe.servings.toString() }
                ></textarea>
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
                  onChange={this.onChange}
                  placeholder={ Object.values(parentRecipe.ingredients) }
                  >
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
                  onChange={this.onChange}
                  placeholder={ Object.values(parentRecipe.directions) }
                  >
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
  AddDerivedRecipeForm
);
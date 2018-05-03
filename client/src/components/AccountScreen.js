import React from 'react';
import AddRecipeForm from './AddRecipeForm';
import Header from './Header';
import PrimaryNav from './PrimaryNav';
import { Link } from 'react-router-dom';
import recipeIcon from '../recipe-icon.svg';
import addIcon from '../add-icon.svg'

let AccountScreen =  ({ ingredients }) => 
  <div className="flex-app">
    <div>
      <Header />
    </div>
    <div className="flex-content">
      <div className="account-hero">
        <img src="https://avatars2.githubusercontent.com/u/19500679?s=460&v=4" />
        <span className="account-name">James Jacobs </span>
        <span className="account-rank"> master chef </span>
        <div className="account-details">
          <div> 
            <span>Recipes </span>
            <span className="account-num"> 24 </span>
          </div>
          <div>
            <span>CookBooks</span>
            <span className="account-num">5 </span>
          </div>
          <div>
            <span>Followers</span>
            <span className="account-num">2 </span>
          </div>
          
        </div>
      </div>
      <div className="account-actions">
        <div>
          <img className="cookbook-icon" src={recipeIcon}/>
          <span>Create CookBook</span>
        </div>
        <div>
          <img className="add-icon"src={addIcon} />
          <span>Add Recipe</span>
        </div>
      </div>
      <div className="account-links">
        <Link to="/categories"> <span> My Recipes </span> </Link>
        <Link to="/categories"><span> Cookbooks </span> </Link>
        <Link to="/categories"><span> Favorited Recipes </span> </Link>
        <Link to="/categories"><span> Shopping list </span> </Link>
        <Link to="/categories"><span> Settings </span> </Link>
      </div>
    </div>
    <PrimaryNav />
  </div>


export default AccountScreen;
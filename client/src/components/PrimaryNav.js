import React from 'react';
import { Link } from 'react-router-dom';
import recipeIcon from '../recipe-icon.svg';
import accountIcon from '../account-icon.svg';
import addIcon from '../add-icon.svg'

let PrimaryNav = () =>
  <div className="primary-nav">
    <div className="primary-nav-container">
      <div className="primary-nav-links">
          <Link to="/categories">
            <img src={recipeIcon}/>
            <span>Recipes </span>
          </Link>
          <Link to="/categories">
            <img src={addIcon} />
            <span>Add Recipe</span>
          </Link>
          <Link to="/categories">
            <img src={accountIcon} />
            <span>Account</span>
          </Link>
      </div>
    </div>
  </div>;

export default PrimaryNav;
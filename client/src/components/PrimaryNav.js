import React from 'react';
import { Link } from 'react-router-dom';
import recipeIcon from '../recipe-icon.svg';
import accountIcon from '../account-icon.svg';
import addIcon from '../add-icon.svg'

let PrimaryNav = () =>
  <div className="primary-nav">
      <div className="primary-nav-links">
          <Link to="/categories">
            <div>
              <img src={recipeIcon}/>
              <span>Recipes </span>
            </div>
          </Link>
          <Link to="/add">
            <div>
              <img src={addIcon} />
              <span>Add Recipe</span>
            </div>
          </Link>
          <Link to="/account">
            <div>
              <img src={accountIcon} />
              <span>Account</span>
            </div>
          </Link>
      </div>
  </div>;

export default PrimaryNav;
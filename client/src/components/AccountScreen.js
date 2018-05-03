import React from 'react';
import AddRecipeForm from './AddRecipeForm';
import Header from './Header';
import PrimaryNav from './PrimaryNav';
import { Link } from 'react-router-dom';

let AccountScreen =  ({ ingredients }) => 
  <div className="flex-app">
    <div>
      <Header />
    </div>
    <div className="flex-content">
      <div className="account-hero">
        <span>Mike Smith </span>
      </div>
      <div className="account-links">
        <Link to="/categories"> <span> My Recipes </span> </Link>
        <Link to="/categories"><span> Cookbooks </span> </Link>
        <Link to="/categories"><span> Favorited Recipes </span> </Link>
        <Link to="/categories"><span> Shopping spanst </span> </Link>
        <Link to="/categories"><span> Settings </span> </Link>
      </div>
    </div>
    <PrimaryNav />
  </div>


export default AccountScreen;
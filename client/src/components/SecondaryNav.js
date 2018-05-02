import React from 'react';
import { Link } from 'react-router-dom';

let SecondaryNav = () => 
    <div className="secondary-nav">
        <div className="secondary-nav-links">
            <Link to="/categories">
                <span>Categories </span>
            </Link>
            <Link to="/ingredients">
                <span>Ingredients</span>
            </Link>
        </div>
    </div>;

export default SecondaryNav;
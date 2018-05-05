import React from 'react';
import {
    Route,
    Redirect
} from 'react-router-dom';
import { getTokenFromLocalStorage } from '../lib/index';

let PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (
        getTokenFromLocalStorage()
            ? <Component {...props} />
            : <Redirect to='/login' />
    )} />
)

export default PrivateRoute;


// email
// :
// "kyle@kyle.com"
// firstname
// :
// "Kyle"
// id
// :
// 4
// lastname
// :
// "Booth"
// password
// :
// "ABC"
// username
// :
// "kyle"
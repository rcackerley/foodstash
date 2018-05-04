import React, { Component } from 'react';
import EnhanceForm from './EnhanceForm';
import {Link, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {createAccount} from '../ajax/index';
import {setToken} from '../actions/index';

export const RegisterForm = ({ state, handleSubmit, handleChange, history }) =>
    <form className="login-form" onSubmit={handleSubmit}>
        <label> Email </label>
        <div>
            <input
                type="text" name="email"
                value={state.email}
                onChange={handleChange}
                required="" />
        </div>
        <br />
        <label> Password </label>
        <div>
            <input
                type="text"
                name="password"
                value={state.password}
                onChange={handleChange}
                required="" />
        </div>
        <br />
        <label> Username </label>
        <div>
            <input
                type="text"
                name="username"
                value={state.username}
                onChange={handleChange}
                required="" />
        </div>
        <br />
        <label> First Name </label>
        <div>
            <input
                type="text"
                name="firstname"
                value={state.firstname}
                onChange={handleChange}
                required="" />
        </div>
        <br />
        <label> Last Name </label>
        <div>
            <input
                type="text"
                name="lastname"
                value={state.lastname}
                onChange={handleChange}
                required="" />
        </div>
        <br />
        <button onClick={event => createAccount({
          email: state.email,
          password: state.password,
          username: state.username,
          firstname: state.firstname,
          lastname: state.lastname
          })
          .then(token => {localStorage.setItem('token', JSON.stringify(token)); return token})
          .then(token => setToken(token))
          .then(res => history.push('/categories'))
          .catch(err => console.log(err))
          } >Create Account</button>
        <br />
        <Link className="login-btn" to="/login">Login</Link>
    </form>

let mapStateToProps = state => state;
let mapDispatchToProps = dispatch => ({setToken: (token) => dispatch(setToken(token))});
let RegisterFormContainer = connect(mapStateToProps, mapDispatchToProps)(RegisterForm)
const EnhancedFormContainer = EnhanceForm(withRouter(RegisterFormContainer));
export default EnhancedFormContainer;

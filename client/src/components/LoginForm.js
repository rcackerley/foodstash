import React, { Component } from 'react';
import EnhanceForm from './EnhanceForm';
import { Link, withRouter } from 'react-router-dom';
import {signIn} from '../ajax/index';
import {setToken} from '../actions/index';
import {connect} from 'react-redux';

export const LoginForm = ({ state, handleSubmit, handleChange, history }) =>
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
        <button onClick={
          event => signIn({email: state.email, password: state.password})
          .then(token => setToken(token))
          .then(res => history.push('/categories'))
          .catch(err => console.log(err))
        }>Sign In</button>
        <br />
        <Link className="create-account-btn" to="/register">Create Account</Link>
    </form>

let mapDispatchToProps = dispatch => ({setToken: token => dispatch(setToken(token))})
let mapStateToProps = state => state;
const LoginFormContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(LoginForm))
const EnhancedForm = EnhanceForm(LoginFormContainer);

export default EnhancedForm;

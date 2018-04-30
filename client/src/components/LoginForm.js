import React, { Component } from 'react';
import EnhanceForm from './EnhanceForm';
import { Link } from 'react-router-dom';

export const LoginForm = ({ state, handleSubmit, handleChange }) =>
    <form className="login-form" onSubmit={handleSubmit}>
        <label> Email </label>
        <div>
            <input
                type="text" name="email"
                value={state.email}
                onChange={handleChange}
                required=""/>
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
        <button>Sign In</button>
        <br/>
        <Link className="create-account-btn" to="/register">Create Account</Link>
    </form>

const EnhancedForm = EnhanceForm(LoginForm);

export default EnhancedForm;

import React from 'react';
import EnhancedForm from './LoginForm'
import Header from './Header';

let LoginScreen = () =>
<div>
    <Header /> 
    <EnhancedForm
        initialState={{
            email: '',
            password: ''
        }} />
</div>

export default LoginScreen;
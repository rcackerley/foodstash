import React from 'react';
import EnhancedForm from './RegisterForm';
import Header from './Header';

let RegisterScreen = () =>
    <div>
        <Header /> 
        <EnhancedForm
            initialState={{
                email: '',
                password: ''
            }} />
    </div>

export default RegisterScreen;
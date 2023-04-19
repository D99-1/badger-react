import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';
import './login.css';
import Login from './login';
import {AuthProvider} from './contexts/AuthContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthProvider.provider>
    <Login />
  </AuthProvider.provider>
);



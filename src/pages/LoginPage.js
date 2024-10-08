
// src/pages/LoginPage.js
import React from 'react';
import './LoginPage.css';
import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import LoginForm from '../components/LoginForm';

const LoginPage = () => {
    return (
        <div className="login-page">
            <div className="background-image" />
            <div className="overlay" />
            <Navbar />
            <Banner />
            <LoginForm />
        </div>
    );
};

export default LoginPage;





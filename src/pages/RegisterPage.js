
// src/pages/LoginPage.js
import React from 'react';
import './RegisterPage.css';
import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import RegisterForm from '../components/RegisterForm';

const RegisterPage = () => {
    return (
        <div className="register-page">
            <div className="background-image" />
            <div className="overlay" />
            <Navbar />
            <RegisterForm />
        </div>
    );
};

export default RegisterPage;



import React from 'react';
import './AuthPage.css';
import BannerAuth from '../components/BannerAuth';
import Navbar from '../components/Navbar';


const AuthPage = () => {
    return (
        <div className="login-page">
            <div className="background-image" />
            <div className="overlay" />
            <Navbar />
            <BannerAuth />
        </div>
    );
};

export default AuthPage;

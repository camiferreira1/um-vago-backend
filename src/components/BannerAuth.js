// src/components/Banner.js
import React from 'react';
import './BannerAuth.css';

const BannerAuth = () => {
    return (
        <div className="banner">
            <h1 className="title">Bienvenido a UM VAGO</h1>
            <p className="tagline">Le hemos enviado un mail al correo de su institución. Verifique para poder activar su cuenta</p>
        </div>
    );
};

export default BannerAuth;  // Changed from Banner to BannerAuth


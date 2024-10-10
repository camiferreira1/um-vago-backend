import React from 'react';
import Navbar from '../components/Navbar'; // Navbar ya hecho
import Sidebar from '../components/HomePage/Sidebar';
import MainContent from '../components/HomePage/MainContent'; // Contenido principal o los posts

import './HomePage.css';
function HomePage() {
    return (
        <div className="homepage-container">
            <Navbar />

            <div className="homepage-layout">
                <Sidebar />
                <MainContent />
            </div>
        </div>
    );
}

export default HomePage;

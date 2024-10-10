
import React from 'react';
import Navbar from '../components/Navbar';
import Publicar from '../components/Postear/Publicar';
import './PostPage.css';


const PostPage = () => {
    return (
        <div className="login-page">
            <Navbar />
            <Publicar />
        </div>
    );
};

export default PostPage;

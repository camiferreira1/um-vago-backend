import React from 'react';
import Post from './PostType/Post';

import image from '../../assets/images/computadora.png';
function PostList() {
    return (
        <div className="post-list">
            <Post
                user="jmares"
                title="Título del Post Principal"
                description="Descripción del post principal."
                imageUrl={image}
                type="main"
            />

            <Post
                user="anonimo"
                description="Descripción de la respuesta."
                imageUrl={image}
                type="response"
            />

        </div>
    );
}

export default PostList;

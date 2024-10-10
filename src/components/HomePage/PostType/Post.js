import React, { useState } from 'react';
import './Post.css';
const image = require('../../../assets/images/logo.png');

function Post({ user, title, description, imageUrl, type }) {
    const [liked, setLiked] = useState(false);
    const [likeCount, setLikeCount] = useState(0);

    const handleLike = () => {
        if (!liked) {
            setLiked(true);
            setLikeCount(likeCount + 1);
        }
    };

    // Añadir una clase especial si el post es de tipo respuesta
    const postClass = type === 'response' ? 'post-container response' : 'post-container';

    return (
        <div className={postClass}>
            <div className="post-header">
                <span className="post-user">@{user}</span>
            </div>
            <div className="post-title">{title}</div>
            <div className="post-description">{description}</div>
            <div className="post-image">
                {imageUrl && (
                    <img src={image} alt="Post" className='post-image' />
                )}
            </div>

            <div className="post-footer">
                <span className="like-count">{likeCount}</span>

                <button
                    className={`like-button ${liked ? 'liked' : ''}`}
                    onClick={handleLike}
                    disabled={liked}
                >
                    👍
                </button>

                <span className="response-count">2 Respuestas</span>
            </div>
        </div>
    );
}

export default Post;

// UserPage.js
import React from "react";
import { useParams, useLocation } from "react-router-dom";

const UserPage = () => {

  const { username } = useParams();
  

  const { state } = useLocation();
  const user = state?.user;
  const post = state?.post;

  
  if (!user || !post) {
    return <div>Данные не найдены</div>;
  }

  return (
    <div className="user-page">
      <div className="user-header">
        <img 
          src={user.avatar} 
          alt="User avatar" 
          className="user-avatar"
        />
        <h2 className="username">{username}</h2>
        
        <div className="user-stats">
          <button className="stat-btn">Подписчики</button>
          <button className="stat-btn">Подписки</button>
        </div>

        <div className="user-actions">
          <button className="action-btn">Подписаться</button>
          <button className="action-btn">Написать</button>
        </div>
      </div>

      <div className="user-post">
        <img 
          src={post.img} 
          alt="Post content" 
          className="post-image"
        />
        <div className="post-content">
          <p className="post-text">{post.text}</p>
          <button className="likes-btn">
            {post.likes} ❤️
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserPage;
import React, { useState } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";

const UserPage = () => {
  const navigate = useNavigate();
  const { username } = useParams();
  const { state } = useLocation();
  const user = state?.user;
  const post = state?.post;
  const [postLike, setPostLike] = useState(post?.likes || 0);
  const [isLike,setIsLike]=useState(false);
  if (!user || !post) {
    return <div>Данные не найдены</div>;
  }

  const handleStartChat = () => {
    navigate(`/chat/${user.name}`, { state: { user } });
  };

  const handleSubscribers = () => {
    navigate(`/subs`);
  };

  const handleLike = () => {
    setIsLike(!isLike);
   if(!isLike) setPostLike(prev => prev + 1);
   else{
    setPostLike(prev => prev - 1);
   }
  };

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
          <button className="stat-btn" onClick={handleSubscribers}>
            Подписчики
          </button>
          <button className="stat-btn" onClick={handleSubscribers}>
            Подписки
          </button>
        </div>

        <div className="user-actions">
          <button className="action-btn">Подписаться</button>
          <button className="action-btn" onClick={handleStartChat}>
            Написать
          </button>
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
          <button className="likes-btn" onClick={handleLike}>
            {postLike} ❤️
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserPage;
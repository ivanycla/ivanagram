import React, { useState } from "react";
import Comment from "../Comment/Comment";
import UseUserPostPhoto from "../../Hooks/UseUserPostPhoto/useUserPostPhoto";
import { useNavigate } from "react-router-dom";

const Post = () => {
    const [likes, setLikes] = useState(() => Math.floor(Math.random() * 100) + 1);
    const [commentFlag, setCommentFlag] = useState(false);
    const navigate=useNavigate();
    
    const { photo, postText, user, loading, error } = UseUserPostPhoto();

    if (loading) return <div className="loading">Загрузка поста...</div>;
    if (error) return <div className="error">Ошибка: {error}</div>;
    const handleViewUser = () => {
        navigate(`/userProfile/${user.name}`, {
          state: {
            user: user,
            post: {
              text: postText,
              img: photo,
              likes: likes
            }
          }
        });
      };
    return (
        <div className="post">
            {user && (
                <div className="post-header">
                    <img 
                        src={user.avatar} 
                        alt="User avatar" 
                        className="user-avatar"
                        onClick={handleViewUser}
                    />
                    <p className="user-name">{user.name}</p>
                </div>
            )}
            
            {photo && (
                <img 
                    src={photo} 
                    alt="Post content" 
                    className="post-image"
                />
            )}

            <div className="post-content">
                <p className="post-text">{postText}</p>
                
                <div className="post-actions">
                    <button className="likes-button">
                        {likes} ❤️
                    </button>
                    
                    <button 
                        onClick={() => setCommentFlag(!commentFlag)}
                        className="comments-toggle"
                    >
                        {commentFlag ? 'Скрыть' : 'Показать'} комментарии
                    </button>
                </div>

                {commentFlag && (
                    <Comment
                        postText={postText}
                        likes={likes}
                        photo={photo}
                    />
                )}
            </div>
        </div>
    );
};

export default Post;
import React, { useEffect, useState } from "react";
import Comment from "../Comment/Comment";
import UseUserPostPhoto from "../../Hooks/UseUserPostPhoto/useUserPostPhoto";
import { useNavigate } from "react-router-dom";

const UserPost = ({img,bio,postKey}) => {
    const [likes, setLikes] = useState(() => Math.floor(Math.random() * 100) + 1);
    const [commentFlag, setCommentFlag] = useState(false);
    const [users,setUsers]=useState([]);
    const navigate=useNavigate();
    const [isLike,setIsLike]=useState(false)
    

    const handleLike = () => {
        setIsLike(!isLike);
       if(!isLike) setLikes(prev => prev + 1);
       else{
        setLikes(prev => prev - 1);
       }
      };

    return (
        <div className="post">

                <img 
                    src={img} 
                    alt="Post content" 
                    className="post-image"
                />
            <div className="post-content">
                <p className="post-text">{bio}</p>
                
                <div className="post-actions">
                    <button className="likes-button" 
                    
                    onClick={handleLike}>
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
                        postText={bio}
                        likes={likes}
                        photo={img}
                    />
                )}
            </div>
        </div>
    );
};

export default UserPost;
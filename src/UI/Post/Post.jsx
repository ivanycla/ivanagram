import React, { useEffect, useState } from "react";
import Comment from "../Comment/Comment";
import UseUserPostPhoto from "../../Hooks/UseUserPostPhoto/useUserPostPhoto";
import { useNavigate } from "react-router-dom";
import styles from "./Post.module.css";

const Post = () => {
    const [likes, setLikes] = useState(() => Math.floor(Math.random() * 100) + 1);
    const [commentFlag, setCommentFlag] = useState(false);
    const navigate = useNavigate();
    const [isLike, setIsLike] = useState(false);
    const { photo, postText, user, loading, error } = UseUserPostPhoto();

    const handleLike = () => {
        setIsLike(!isLike);
        if (!isLike) setLikes(prev => prev + 1);
        else setLikes(prev => prev - 1);
    };

    if (loading) return <div className={styles.loading}>Загрузка поста...</div>;
    if (error) return <div className={styles.error}>Ошибка: {error}</div>;

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
        <div className={styles.post}>
            {user && (
                <div className={styles.postHeader} onClick={handleViewUser}>
                    <img
                        src={user.avatar}
                        alt="User avatar"
                        className={styles.userAvatar}
                    />
                    <div className={styles.userInfo}>
                        <span className={styles.userName}>{user.name}</span>
                    </div>
                </div>
            )}

            {photo && (
                <img
                    src={photo}
                    alt="Post content"
                    className={styles.postImage}
                />
            )}

            <div className={styles.postContent}>
                <p className={styles.postText}>{postText}</p>

                <div className={styles.postActions}>
                    <button
                        className={styles.likesButton}
                        onClick={handleLike}
                        data-liked={isLike}
                    >
                        {likes} ❤️
                    </button>

                    <button
                        onClick={() => setCommentFlag(!commentFlag)}
                        className={styles.commentsToggle}
                    >
                        {commentFlag ? 'Скрыть' : 'Показать'} комментарии
                    </button>
                </div>

                {commentFlag && <Comment postText={postText} likes={likes} 
                username={user.name}
                photo={photo} />}
            </div>
        </div>
    );
};

export default Post;
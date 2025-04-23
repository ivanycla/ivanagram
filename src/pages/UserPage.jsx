import React, { useState, useEffect } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import styles from '../styles/UserPage.module.css';
import Photo from "../API/Photo/Photo";
import getPost from "../API/getPost/getPost";

const UserPage = () => {
  const navigate = useNavigate();
  const { username } = useParams();
  const { state } = useLocation();
  const [user, setUser] = useState(state?.user || JSON.parse(localStorage.getItem("currentUser")));
  const [post, setPost] = useState(state?.post);
  const [postLike, setPostLike] = useState(post?.likes || 0);
  const [isLike, setIsLike] = useState(false);
  const [randomSubs] = useState(Math.floor(Math.random() * 100));

  useEffect(() => {
    const loadPostData = async () => {
      if (!post) {
        try {
          const photoResponse = await fetch(Photo());
          const photo = await photoResponse.url;
          const postResponse = await fetch(getPost());
          const text = await postResponse.json();
          
          setPost({
            img: photo,
            text: text,
            likes: 0
          });
        } catch (error) {
          console.error("Error loading post:", error);
        }
      }
    };
    
    if (!user) {
      const savedUser = JSON.parse(localStorage.getItem("subscribers"))?.find(u => u.name === username);
      if (savedUser) setUser(savedUser);
    }
    
    loadPostData();
  }, [username, post, user]);

  const handleSubscribers = () => {
    navigate('/subs', {
      state: {
        randomSize: randomSubs
      }
    });
  };

  const handleStartChat = () => {
    navigate(`/Chat/${user.name}`, {
      state: {
        user: user,
        post: post
      }
    });
  };

  const handleLike = () => {
    setIsLike(!isLike);
    setPostLike(prev => isLike ? prev - 1 : prev + 1);
  };



  if (!user) {
    return <div>Данные не найдены</div>;
  }

  return (
    <div className={styles.userPage}>
      <div className={styles.userHeader}>
        <img 
          src={user.avatar} 
          alt="User avatar" 
          className={styles.userAvatar}
        />
        <h2 className={styles.username}>{username}</h2>
        
        <div className={styles.userStats}>
          <button className={styles.statBtn} onClick={handleSubscribers}>
            Подписчики
          </button>
          <button className={styles.statBtn} onClick={handleSubscribers}>
            Подписки
          </button>
        </div>

        <div className={styles.userActions}>
          <button className={styles.actionBtn} >
            Подписаться
          </button>
          <button className={styles.actionBtn} onClick={handleStartChat}>
            Написать
          </button>
        </div>
      </div>

      {post && (
        <div className={styles.userPost}>
          <img 
            src={post.img} 
            alt="Post content" 
            className={styles.postImage}
          />
          <div className={styles.postContent}>
            <p className={styles.postText}>{post.text}</p>
            <button className={styles.likesBtn} onClick={handleLike}>
              {postLike} ❤️
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserPage;
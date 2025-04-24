import React, { useEffect, useState } from "react";
import Comments from "../../API/Comments/Comments";
import styles from "./Comment.module.css";

const Comment = ({ postText, photo, likes, onClose,username }) => {
  const [newCommentText, setNewCommentText] = useState("");
  const [comments, setComments] = useState([]);
  const [botComment, setBotComment] = useState("");

  useEffect(() => {
    const fetchComment = async () => {
      try {
        const text = await Comments();
        setBotComment(text);
      } catch (error) {
        console.error("Error loading comment:", error);
      }
    };
    fetchComment();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newCommentText.trim()) {
      setComments(prev => [{ 
        text: newCommentText, 
        id: Date.now(),
        likes: 0,
        time: "Только что",
        user: {
          name: "Вы",
          avatar: "https://example.com/user-avatar.png"
        }
      }, ...prev]);
      setNewCommentText("");
    }
  };

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <button className={styles.closeButton} onClick={onClose}>×</button>
        
        <div className={styles.imageContainer}>
          <img 
            src={photo} 
            alt="Post content" 
            className={styles.postImage}
          />
        </div>

        <div className={styles.commentsSection}>
          <div className={styles.commentsList}>
            {/* Основной комментарий */}
            <div className={styles.commentItem}>
              <div className={styles.userAvatar}>
                <img src={photo} alt="User avatar" />
              </div>
              <div className={styles.commentContent}>
                <div className={styles.commentHeader}>
                  <span className={styles.userName}>{username}</span>
                  <span className={styles.commentTime}>16 ч.</span>
                </div>
                <p className={styles.commentText}>{postText}</p>
                <div className={styles.commentActions}>
                  <button className={styles.likeButton}>{likes}</button>
                </div>
              </div>
            </div>

            {/* Список комментариев */}
            {comments.map(comment => (
              <div key={comment.id} className={styles.commentItem}>
                <div className={styles.userAvatar}>
                  <img src={comment.user.avatar} alt="User avatar" />
                </div>
                <div className={styles.commentContent}>
                  <div className={styles.commentHeader}>
                    <span className={styles.userName}>{comment.user.name}</span>
                    <span className={styles.commentTime}>{comment.time}</span>
                  </div>
                  <p className={styles.commentText}>{comment.text}</p>
                  <div className={styles.commentActions}>
                    <button className={styles.likeButton}>{comment.likes}</button>
                    {comment.user.name === "Вы" ? (
                      <button className={styles.deleteButton}>Удалить</button>
                    ) : (
                      <button className={styles.replyButton}>Ответить</button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          
          <form onSubmit={handleSubmit} className={styles.commentForm}>
            <input
              type="text"
              placeholder="Добавьте комментарий..."
              value={newCommentText}
              onChange={(e) => setNewCommentText(e.target.value)}
              className={styles.commentInput}
            />
            <button 
              type="submit" 
              className={styles.submitButton}
              disabled={!newCommentText.trim()}
            >
              Опубликовать
            </button>
          </form>
        </div>
      </div>
    </div>
);}

export default Comment;
import React, { useEffect, useState } from "react";
import Comments from "../../API/Comments/Comments";

const Comment = ({ postText, photo, likes }) => {
  const [newCommentText, setNewCommentText] = useState(""); // Переименовано для ясности
  const [comments, setComments] = useState([]); // Новое состояние для хранения комментариев
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
      // Добавляем новый комментарий в начало массива
      setComments(prev => [{ text: newCommentText, id: Date.now() }, ...prev]);
      setNewCommentText(""); // Очищаем поле ввода
    }
  };

  return (
    <div>
      <div>
        <img src={photo} alt="Post content" />
        <div className="post-content">
          <p>{postText}</p>
          <button className="likes-button">{likes} ❤️</button>
        </div>
      </div>
      
      
      {botComment && (
        <div key="bot-comment">
          <p>{botComment}</p>
        </div>
      )}

      
      {comments.map(comment => (
        <div key={comment.id}>
          <p>{comment.text}</p>
        </div>
      ))}

     
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Напишите комментарий"
          value={newCommentText}
          onChange={(e) => setNewCommentText(e.target.value)}
        />
        <button type="submit">Отправить комментарий</button>
      </form>
    </div>
  );
};

export default Comment;
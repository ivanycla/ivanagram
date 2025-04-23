import React, { useState } from "react";
import { useLocation,useNavigate } from "react-router-dom";
import getPost from "../API/getPost/getPost";
import styles from "../styles/Chat.module.css"; 

const Chat = () => {
    const [messages, setMessages] = useState([]);
    const [inputMessage, setInputMessage] = useState("");
    const { state } = useLocation();
    const user = state?.user;
    const post=state?.post;
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!inputMessage.trim()) return;

        try {
            setMessages(prev => [...prev, { text: inputMessage, isBot: false }]);
            const botResponse = await getPost();
            setMessages(prev => [...prev, { text: botResponse, isBot: true }]);
            setInputMessage("");
        } catch (err) {
            alert("Ошибка: " + err.message);
        }
    }
    const handleViewUser = () =>{
        navigate(`/userProfile/${user.name}`, {
            state: {
              user: user,
              post: post
            }
          });
    }
    if (!user) {
        return <div>Пользователь не выбран</div>;
    }

    return (
        <div className={styles.container}>
            <div className={styles.userInfo}>
                <img 
                    onClick={handleViewUser}
                    src={user.avatar} 
                    alt="User Avatar" 
                    className={styles.userAvatar}
                />
                <p className={styles.userName}>{user.name}</p>
            </div>

            <div className={styles.messagesContainer}>
                {messages.map((message, index) => (
                    <div 
                        key={index}
                        className={`${styles.message} ${
                            message.isBot ? styles.messageBot : styles.messageUser
                        }`}
                    >
                        <p>{message.text}</p>
                    </div>
                ))}
            </div>

            <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.inputGroup}>
                    <input
                        type="text"
                        value={inputMessage}
                        onChange={(e) => setInputMessage(e.target.value)}
                        placeholder="Введите сообщение"
                        className={styles.inputField}
                    />
                    <button 
                        type="submit" 
                        className={styles.submitButton}
                    >
                        Отправить
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Chat;
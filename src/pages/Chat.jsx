import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import getPost from "../API/getPost/getPost";

const Chat = () => {
    const [messages, setMessages] = useState([]);
    const [inputMessage, setInputMessage] = useState("");
    const { state } = useLocation();
    const user = state?.user;

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

    if (!user) {
        return <div>Пользователь не выбран</div>;
    }

    return (
        <div>
            <div>
                <img src={user.avatar} alt="User Avatar" />
                <p>{user.name}</p>
            </div>

            <div>
                {messages.map((message, index) => (
                    <div key={index}>
                        <p style={{ color: message.isBot ? "blue" : "green" }}>
                            {message.text}
                        </p>
                    </div>
                ))}
            </div>

            <div>
                <form onSubmit={handleSubmit}>
                    <div>
                        <input
                            type="text"
                            value={inputMessage}
                            onChange={(e) => setInputMessage(e.target.value)}
                            placeholder="Введите сообщение"
                        />
                        <button type="submit">Отправить</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Chat;
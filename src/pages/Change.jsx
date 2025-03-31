import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Change = () => {
    // 1. Исправлено получение и парсинг пользователя
    const [oldUser] = useState(JSON.parse(localStorage.getItem("user")) || {});
    const [bio, setBio] = useState(oldUser?.bio || "");
    const [name, setName] = useState(oldUser?.name || "");
    const [photo, setPhoto] = useState(oldUser?.photo || "");
    const navigate = useNavigate();

    
    useEffect(() => {
        const savedUser = JSON.parse(localStorage.getItem("user"));
        if (savedUser) {
            setName(savedUser.name);
            setBio(savedUser.bio);
            setPhoto(savedUser.photo);
        }
    }, []);

    
    const handleSubmit = (e) => {
        e.preventDefault();
        const newUser = {
            bio: bio,
            name: name,
            photo: photo
        };
        
        if (name && bio) {
            localStorage.setItem("user", JSON.stringify(newUser));
            navigate("/profile");
        }
    };

    
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (!file) return;
        
        const reader = new FileReader();
        reader.onloadend = () => setPhoto(reader.result);
        reader.readAsDataURL(file);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
              
                <input 
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                />
                
                <p>Ник</p>
               
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Введите новый ник"
                />
                
                <p>Инфо</p>
                <input
                    type="text"
                    value={bio}
                    onChange={(e) => setBio(e.target.value)}
                    placeholder="Введите новую информацию"
                />
                
                <button type="submit">Изменить</button>
            </form>
        </div>
    );
};

export default Change;
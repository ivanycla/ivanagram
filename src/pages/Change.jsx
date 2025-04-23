import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/Change.module.css"
const Change = () => {
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
        <div className={styles.container}>
            <div className={styles.formContainer}>
                <h1 className={styles.title}>Изменить профиль</h1>
                
                {photo && (
                    <img 
                        src={photo} 
                        alt="Preview" 
                        className={styles.previewImage} 
                    />
                )}
                
                <form onSubmit={handleSubmit}>
                    <div className={styles.fileInputContainer}>
                        <input 
                            type="file"
                            id="photoInput"
                            accept="image/*"
                            onChange={handleFileChange}
                            style={{ display: 'none' }}
                        />
                        <label 
                            htmlFor="photoInput" 
                            className={styles.fileInputLabel}
                        >
                            {photo ? "Изменить фото" : "Загрузить фото"}
                        </label>
                    </div>

                    <div className={styles.inputGroup}>
                        <label>Ник</label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Введите новый ник"
                            className={styles.input}
                        />
                    </div>

                    <div className={styles.inputGroup}>
                        <label>Инфо</label>
                        <input
                            type="text"
                            value={bio}
                            onChange={(e) => setBio(e.target.value)}
                            className={styles.input}
                            placeholder="Введите новую информацию"
                        />
                    </div>
                    
                    <button 
                        type="submit"
                        className={styles.button}
                    >
                        Сохранить изменения
                    </button>
                </form>
            </div>
        </div>
    )}

export default Change;
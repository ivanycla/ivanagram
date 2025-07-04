import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/Login.module.css";

const Login = () => {
    const [photo, setPhoto] = useState(null);
    const [name, setName] = useState("");
    const [bio, setBio] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const user = {
            bio: bio,
            name: name,
            photo: photo
        }
        if (bio && name && photo) {
            navigate("/profile");
            localStorage.setItem("user", JSON.stringify(user));
        }
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setPhoto(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.formContainer}>
                <h1 className={styles.title}>Ivanagram</h1>
                
                {photo && (
                    <img 
                        src={photo} 
                        alt="Preview" 
                        className={styles.previewImage} 
                    />
                )}

                <form onSubmit={handleSubmit} style={{ width: '100%' }}>
                    <input
                        type="text"
                        placeholder="Создай свой ник"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className={styles.input}
                        required
                    />

                    <textarea
                        placeholder="Напиши что-нибудь о себе"
                        value={bio}
                        onChange={(e) => setBio(e.target.value)}
                        className={styles.input}
                        rows="4"
                        required
                    />

                    <div className={styles.fileInputContainer}>
                        <label 
                            htmlFor="photo" 
                            className={styles.fileInputLabel}
                        >
                            {photo ? "Изменить фото" : "Загрузить фото"}
                        </label>
                        <input
                            type="file"
                            id="photo"
                            accept="image/*"
                            onChange={handleFileChange}
                            style={{ display: 'none' }}
                        />
                    </div>

                    <button 
                        type="submit" 
                        className={styles.button}
                    >
                        Создать профиль
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;
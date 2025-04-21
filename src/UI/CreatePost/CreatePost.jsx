import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./CreatePost.module.css"

const CreatePost = ({createPostFlag,onClose}) => {
    const [photo, setPhoto] = useState(null);

    const [bio, setBio] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const post = {
            bio: bio,
            photo: photo
        }
        if (bio && photo) {
            
            const existingPosts = JSON.parse(localStorage.getItem("userPost")) || [];
            const updatedPosts = [...existingPosts, post];
            localStorage.setItem("userPost", JSON.stringify(updatedPosts));
            onClose(); 
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
                
                
                {photo && (
                    <img 
                        src={photo} 
                        alt="Preview" 
                        className={styles.previewImage} 
                    />
                )}

                <form onSubmit={handleSubmit} style={{ width: '100%' }}>
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
                <button type="submit" className={styles.button}>
                Создать Пост
                </button>

                </form>
            </div>
        </div>
    );
};

export default CreatePost;
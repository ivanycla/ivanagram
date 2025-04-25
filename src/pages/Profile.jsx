import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/Profile.module.css";
import CreatePost from "../UI/CreatePost/CreatePost";
import UserPost from "../UI/UserPost/UserPost";

const Profile = () => {
    const [user, setUser] = useState({});
    const navigate = useNavigate();
    const [posts,setPosts]=useState([]);
    const [createPostFlag,setCreatePostFlag]=useState(false);
    const [randomSubs,setRandomSubs]=useState(Math.floor(Math.random()*10));
    const [subscribe,setSubscribe]=useState([localStorage.getItem("subscriber")]);
    useEffect(() => {
        const savedUser = JSON.parse(localStorage.getItem("user"));
        if (savedUser) setUser(savedUser);
    }, []);
    useEffect(() => {
        
        const savedSubs = JSON.parse(localStorage.getItem("subscriber")) || [];
        setSubscribe(savedSubs);
    }, []); 

    useEffect(() => {  
        const savedPosts = JSON.parse(localStorage.getItem("userPost")) || [];  
        setPosts(Array.isArray(savedPosts) ? savedPosts : [savedPosts]);  
    }, []);
    return(
        <div className={styles.container}>
            <div className={styles.infoContainer}>
                <img 
                    src={user.photo || '/default-avatar.png'} 
                    alt="Profile" 
                    className={styles.userImage}
                />
                
                <div>
                    <h1 className={styles.username}>
                        {user.name || "Stephen hurry 😊"}
                       
                    </h1>
                    
                    <div className={styles.stats}>
                        <div className={styles.statItem}>
                            
                        </div>
                        <div className={styles.statItem}>
                            
                            <button 
                            onClick={()=>navigate('/subs',{state:{
                                randomSize:randomSubs
                            }})}
                            className={styles.button}
                            >подписчиков{randomSubs}</button>
                        </div>
                        <div className={styles.statItem}>
                            <button 
                            onClick={()=>navigate("/yourSubs")}
                            className={styles.button}>подписок {subscribe.length||0}</button>
                        </div>
                    </div>

                    <p className={styles.bio}>{user.bio}</p>
                </div>
            </div>
           
            <div className={styles.buttonContainer}>
                <button 
                    onClick={() => navigate("/change")}
                    className={styles.button}
                >
                    Редактировать профиль
                </button>
                <button
                className={styles.button}
                onClick={()=>setCreatePostFlag(!createPostFlag)}
                > 
                    Создать пост
                </button>
                {createPostFlag && (
                <CreatePost
                createPostFlag={createPostFlag}
                onClose={()=>setCreatePostFlag(!createPostFlag)}
                />
                )}
                <button 
                    onClick={() => navigate("/main")}
                    className={styles.button}
                >
                    Лента
                </button>
            </div>
            <hr />
                <div>
                <h2>Посты</h2>
                {posts.length > 0 ? (
    posts.map((post, index) => (
        <UserPost 
            key={index} 
            bio={post.bio}
            img={post.photo} 
        />
    ))
) : (
    <p>У вас нет постов</p>
)}
        </div>
    </div>

)}
export default Profile;
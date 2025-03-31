import React, { useState, useEffect } from "react";
import getPost from "../../API/getPost/getPost";
import Photo from "../../API/Photo/Photo";
import Comment from "../Comment/Comment";
const Post = () => {
    const [likes, setLikes] = useState(() => Math.floor(Math.random() * 100) + 1);
    const [photo, setPhoto] = useState("");
    const [postText, setPostText] = useState("");
    const [commentFlag,setCommentFlag]=useState(false);
    useEffect(() => {
        
        const fetchPhoto = async () => {
            try {
                const photoUrl = await Photo();
                setPhoto(photoUrl);
            } catch (error) {
                console.error("Error loading photo:", error);
            }
        };

      
        const fetchPost = async () => {
            try {
                const text = await getPost();
                setPostText(text);
            } catch (error) {
                console.error("Error loading post:", error);
            }
        };

        fetchPhoto();
        fetchPost();
    }, []);

    return (
        <div className="post">
            {photo && <img src={photo} alt="Post content" />}
            <div className="post-content">
                <p>{postText}</p>
                <button className="likes-button">{likes} ❤️</button>
                <button onClick={() => setCommentFlag(!commentFlag)}>
                    {commentFlag ? 'Скрыть' : 'Показать'} комментарии
                </button>

                {commentFlag&&(
                    <Comment
                    postText={postText}
                    likes={likes}
                    photo={photo}
                    />
                )}
            </div>
        </div>
    );
};

export default Post;
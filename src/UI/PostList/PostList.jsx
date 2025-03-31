import React from 'react';  
import Post from '../Post/Post';

const PostsList = () => {  
    return (  
        <div>  
            {[...Array(100)].map((_, i) => (  
                <Post key={i} />  
            ))}  
        </div>  
    );  
};  

export default PostsList;  
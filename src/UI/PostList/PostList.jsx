import React, { useEffect, useState } from 'react';  
import Post from '../Post/Post';

const PostsList = () => {
    
   
    return (  
        <div> 
          
            
            {[...Array(70)].map((_, i) => (  
                <Post key={i} />  
            ))}  
        </div>  
    );  
};  

export default PostsList;  
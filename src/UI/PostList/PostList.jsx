import React, { useState } from 'react';
import Post from '../Post/Post';
import styles from './PostList.module.css';

const PostsList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5); 

  
  const totalPosts = 70;
  
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  
 
  const currentPosts = Array.from({length: postsPerPage}, (_, i) => i + indexOfFirstPost);


  const totalPages = Math.ceil(totalPosts / postsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className={styles.postsContainer}>
      <div className={styles.postsList}>
        {currentPosts.map((index) => (
          <Post key={index} postId={index} />
        ))}
      </div>
      
      <div className={styles.pagination}>
        <button 
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Назад
        </button>
        
        <span>
          Страница {currentPage} из {totalPages}
        </span>
        
        <button 
          onClick={() => paginate(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Вперед
        </button>
      </div>
    </div>
  );
};

export default PostsList;
import React, { useState, useEffect } from "react";
import UseUserPostPhoto from "../../Hooks/UseUserPostPhoto/useUserPostPhoto";
import { useNavigate } from "react-router-dom";
import styles from "./Subs.module.css";

const Subs = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();
  const { photo, postText, user, loading, error } = UseUserPostPhoto();

  const handleViewUser = () => {
    navigate(`/userProfile/${user.name}`, {
      state: {
        user: user,
        post: {
          text: postText,
          img: photo,
        }
      }
    });
  };

  if (loading) {
    return <div className={styles.loading}>Loading subscribers...</div>;
  }

  if (error) {
    return <div className={styles.error}>Error: {error}</div>;
  }

  return (
    <div className={styles.subscribersList}>
      {user && (
        <div className={styles.postHeader}>
          <img 
            src={user.avatar} 
            alt="User avatar" 
            className={styles.userAvatar}
            onClick={handleViewUser}
          />
          <p className={styles.userName} onClick={handleViewUser}>
            {user.name}
          </p>
        </div>
      )}
    </div>
  );
};

export default Subs;
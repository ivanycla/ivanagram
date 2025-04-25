import React from "react";
import UseUserPostPhoto from "../../Hooks/UseUserPostPhoto/useUserPostPhoto";
import { useNavigate } from "react-router-dom";
import styles from "./DirectParticipant.module.css"
const DirectParticipant = ()=>{
    const { photo, postText, user, loading,error } = UseUserPostPhoto();
    const navigate= useNavigate();
    const handleChat = () => {
        navigate(`/Chat/${user.name}`, {
          state: {
            user: user,
            post: {
              text: postText,
              img: photo,
              
            }
          }
        });
      };
      const handleViewUser = () => {
        navigate(`/UserProfile/${user.name}`, {
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
    return <div>Loading ...</div>;
  }
  return (
    <div className={styles.container}>
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
          <button className={styles.chatButton} onClick={handleChat}>
            чат
          </button>
        </div>
      )}
    </div>
  );
};

export default DirectParticipant
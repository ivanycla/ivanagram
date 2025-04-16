import React, { useState, useEffect } from "react";
import UseUserPostPhoto from "../../Hooks/UseUserPostPhoto/useUserPostPhoto";
import { useNavigate } from "react-router-dom";
const Subs = () => {
  const [users, setUsers] = useState([]);
  const navigate= useNavigate();
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
  const { photo, postText, user, loading,error } = UseUserPostPhoto();



  if (loading) {
    return <div>Loading subscribers...</div>;
  }

  return (
    <div className="subscribers-list">
      
       {user && (
                <div className="post-header">
                
                    <img 
                        src={user.avatar} 
                        alt="User avatar" 
                        className="user-avatar"
                        onClick={handleViewUser}
                    />
                    <p className="user-name">{user.name}</p>
                </div>
        
       )}
    </div>
  );
};

export default Subs;
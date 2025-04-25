import React from "react";
import PostsList from "../UI/PostList/PostList";
import { useNavigate } from "react-router-dom";

const Main = () => {
  const navigate = useNavigate();


  const buttonStyle = {
    padding: '12px 24px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '25px',
    cursor: 'pointer',
    fontSize: '16px',
    fontWeight: '600',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    marginBottom: '20px',
    transition: 'all 0.3s ease',
    display: 'block',
    width: '100%',
    maxWidth: '200px',
    marginLeft: 'auto',
    marginRight: 'auto'
  };

  const hoverStyle = {
    backgroundColor: '#0056b3',
    transform: 'translateY(-2px)',
    boxShadow: '0 4px 8px rgba(0,0,0,0.15)'
  };

  return (
    <div>
      <button 
        onClick={() => navigate("/direct")}
        style={buttonStyle}
        onMouseEnter={e => Object.assign(e.target.style, hoverStyle)}
        onMouseLeave={e => {
          e.target.style.backgroundColor = buttonStyle.backgroundColor;
          e.target.style.transform = 'none';
          e.target.style.boxShadow = buttonStyle.boxShadow;
        }}
      >
        Директ
      </button>
      <PostsList />
    </div>
  );
};

export default Main;
import React, { useEffect, useState } from "react";

const YourSubs = () => {
    const [sub, setSub] = useState([]);
    
    useEffect(() => {
        const savedSubs = JSON.parse(localStorage.getItem("subscribers")) || [];
        setSub(savedSubs);
      }, []);

    return (
        <div>
            {sub.map((user, index) => (
                <div key={`user-${index}`}>
                    <p>{user?.name}</p>
                    <img src={user?.avatar} alt="avatar" style={{width: 50, height: 50}} />
                </div>
            ))}
        </div>
    );
};

export default YourSubs;
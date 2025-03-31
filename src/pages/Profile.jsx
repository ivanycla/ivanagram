import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


const Profile =()=>{
    const [user,setUser]=useState({});
    const navigate=useNavigate()
    const handleChange = (e) =>{
        e.preventDefault();
        navigate("/change")
    }
    const handleMainPage=()=>{
        navigate("/main");
    }
    useEffect(() => {
        const savedUser = JSON.parse(localStorage.getItem("user"));
        if (savedUser) setUser(savedUser);
    }, []);
return(
    <div>
        <img src={user.photo} alt="у вас нету фото " />
        <div>
            <p>Имя:{user.name}</p>
            <p>Инфо:{user.bio}</p>
            
        </div>
        <button onClick={handleChange}>Изменить профиль</button>
        <div>
        <button onClick={handleMainPage}>Лента</button>
        </div>
    </div>

)
}

export default Profile
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


const Login =()=>{
    const [photo,setPhoto]=useState();
    const [name,setName]=useState("");
    const [bio,setBio]=useState("");
    const navigate = useNavigate();
    const handleSubmut= (e)=>{
        e.preventDefault();
        const user={
            bio:bio,
            name:name,
            photo:photo
        }
        if(bio!=="" && name!==""){
            navigate("/profile");
            localStorage.setItem("user",JSON.stringify(user));
        }  
    }
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setPhoto(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };
return(
    <div>
        <form action="" onSubmit={handleSubmut}>
            
        <input type="file"
        name="photo" 
        id="photo"  
        accept="image/*"
        onChange={handleFileChange} 
        />
        <input 
        name="name"
        id="name"
        type="text" 
        placeholder="Создай свой ник" 
        onChange={(e)=>setName(e.target.value)} 
        required
        />

        <input type="text"  
        name="bio"
        id="name"
        placeholder="Напиши что нибудь о себе"
        required  
        onChange={(e)=>setBio(e.target.value)}
        />

        <button>Перейти в профиль</button>
        </form>
    </div>

)
}

export default Login
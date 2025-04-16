import React, { useState } from "react";


const Search = () =>{
    const [search,setSearch]=useState("");

    return(
    <div>
        <p>Поиск друзей</p>
        <input type="text"  onChange={(e)=>setSearch(e.target.value)} placeholder="найти друга"/>
        
    </div>
    )
}

export default Search
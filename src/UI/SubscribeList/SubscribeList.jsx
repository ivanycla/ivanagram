import React from "react";
import { useLocation } from "react-router-dom";
import Subs from "../Subscribers/Subs";
const SubscribeList= () =>{
    const location = useLocation();
  const randomSize = Number(location.state?.randomSize) || 0;
return(
    <div>
    {[...Array(randomSize)].map((_, i) => (  
        <Subs key={i} />  
    ))}  
    </div>
)
}

export default SubscribeList
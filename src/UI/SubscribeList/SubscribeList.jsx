import React from "react";
import Subscribers from "../../pages/Subscribers";
import Subs from "../Subscribers/Subs";
const SubscribeList= () =>{
return(
    <div>
    {[...Array(70)].map((_, i) => (  
        <Subs key={i} />  
    ))}  
    </div>
)
}

export default SubscribeList
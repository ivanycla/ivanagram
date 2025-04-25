import React from "react";
import SubscribeList from "../UI/SubscribeList/SubscribeList";
import DirectList from "../UI/DirectList/DirectList";


const Direct = () =>{
    const randomSize=Math.floor(Math.random()*5);
    return(
        <div>
            <DirectList
            randomSize={randomSize}
            />
        </div>
    )
}


export default Direct;
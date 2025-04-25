import React from "react";
import DirectParticipant from "../DirectParticipant/DirectParticipant";
import styles from "./DirectList.module.css"

const DirectList= ({randomSize}) =>{
    return(
        <div className={styles.DirectList}>
    {[...Array(randomSize)].map((_, i) => (  
        <DirectParticipant key={i} />  
    ))}  
        </div>
    )
}


export default DirectList
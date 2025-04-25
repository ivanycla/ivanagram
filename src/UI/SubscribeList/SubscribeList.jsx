import React from "react";
import { useLocation } from "react-router-dom";
import Subs from "../Subscribers/Subs";
import styles from "./SubscribeList.module.css";

const SubscribeList = () => {
  const location = useLocation();
  const randomSize = Number(location.state?.randomSize) || 0;

  return (
    <div className={styles.container}>
      {[...Array(randomSize)].map((_, i) => (  
        <Subs key={i} />  
      ))}
    </div>
  );
};

export default SubscribeList;
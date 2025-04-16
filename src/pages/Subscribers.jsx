import React, { useState, useEffect } from "react";
import SubscribeList from "../UI/SubscribeList/SubscribeList";
import getUser from "../API/User/getUser";
import UseUserPostPhoto from "../Hooks/UseUserPostPhoto/useUserPostPhoto";
import { useNavigate } from "react-router-dom";
const Subscribers = () => {
  

  return (
    <div className="subscribers-list">
    <SubscribeList/>
     </div>
  );
};

export default Subscribers;
import { Avatar } from '@material-ui/core'
import './SidebarChat.css'
import React, { useEffect, useState } from "react";
import "./SidebarChat.css";
import { Link } from "react-router-dom";

function SidebarChat({id,name}) {
    console.log({name})
    return (
        <Link to={`/rooms/${id}`} >
        <div className="sidebarChat">
            <Avatar/>
            <div className="sidebarChat_info">
                <h2>{name}</h2>
            
            </div>
            
        </div>
        </Link>
    )
   
}



export default SidebarChat

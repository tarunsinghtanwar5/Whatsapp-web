import React, { useState, useEffect } from 'react'
import './Sidebar.css'
import { Avatar, IconButton } from '@material-ui/core'
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchOutLined from '@material-ui/icons/SearchOutlined';
import SidebarChat from './SidebarChat';
import { database } from './firebase';
import Chats from "./Chat.js";
import { collection, onSnapshot } from "firebase/firestore";


function Sidebar() {
    const [rooms, setrooms] = useState([]);
    useEffect(() => {
        const unsubsctibe = database.collection("rooms").onSnapshot((snapshot) =>
            setrooms(
                snapshot.docs.map((doc) => ({
                    id: doc.id,
                    data: doc.data(),
                }))
            )
        );

        return () => {
            unsubsctibe();
        };
    }, []);

    
    console.log({rooms})



        return (
            <div className="sidebar">
                <div className="sidebar__header">
                    <Avatar />
                    <div className="sidebar_headerRight">
                        <IconButton>
                            <DonutLargeIcon />
                        </IconButton>

                        <IconButton>
                            <ChatIcon />
                        </IconButton>

                        <IconButton>
                            <MoreVertIcon />
                        </IconButton>
                    </div>
                </div>
                <div className="sidebar__search">
                    <div className="sidebar__searchContainer">
                        <SearchOutLined />
                        <input placeholder="Search Something" type="text" />
                    </div>
                </div>
                <div className="sidebar__chats">
                    
                    {rooms.map((room) => (
                        <SidebarChat key={room.id} id={room.id} name={room.data.name} />
                    ))}

                </div>
            </div>
        )
                    }

export default Sidebar;





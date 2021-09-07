import { Avatar } from '@material-ui/core'
import React from 'react'
import "./Chat.css"
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MicIcon from '@material-ui/icons/Mic';
import {useState,useEffect} from 'react'
import SendIcon from "@material-ui/icons/Send";
import {useParams} from 'react-router-dom'


function Chat() {
    const [input,setInput]=useState("")
    const {roomId} = useParams();
    const sendMessage=(e)=>{
        e.preventDefault();
        console.log(input);
        setInput("");
    };
    return (
        <div className="chat">
            <div className="chat__headerInfo">
                       <Avatar />
                       <p>Last Seen 9:69pm</p>
            </div>
            <div className="chat__body">
            
                <p className="chat__message">
                    <span className="chat__username">Tarun Singh</span>
                    Hey guys</p>
            </div>
            <div className="chat__footer">
                 <InsertEmoticonIcon />
                 <form >
                     <input type="text" value={input} onChange={(e)=>setInput(e.target.value)} placeholder="Type a message"/>
                    <button onClick={sendMessage} type="submit"><SendIcon /></button>
                 </form>
                 <MicIcon />
            </div>
        </div>
    )
}

export default Chat

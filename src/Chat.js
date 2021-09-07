import { Avatar } from '@material-ui/core';
import React from 'react';
import './Chat.css';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MicIcon from '@material-ui/icons/Mic';
import { useState, useEffect } from 'react';
import SendIcon from '@material-ui/icons/Send';
import { useParams } from 'react-router-dom';
import { database } from './firebase';
import { useStateValue } from './StateProvider';

function Chat() {
	const [ input, setInput ] = useState('');
	const { roomId } = useParams();
	const [ roomName, setRoomName ] = useState('');
	const [ message, setmessages ] = useState([]);
	const [ { user }, dispatch ] = useStateValue();

	useEffect(
		() => {
			if (roomId) {
				database.collection('rooms').doc(roomId).onSnapshot((snapshot) => setRoomName(snapshot.data().name));
				database
					.collection('rooms')
					.doc(roomId)
					.collection('messages')
					.onSnapshot((snapshot) => setmessages(snapshot.docs.map((doc) => doc.data())));
			}
		},
		[ roomId ]
	);

	const sendMessage = (e) => {
		e.preventDefault();
		database.collection('rooms').doc(roomId).collection('messages').add({
			message: input,
			name: user.displayName
		});
		setInput('');
	};
	return (
		<div className="chat">
			<div className="chat__headerInfo">
				<Avatar />
				<h3>{roomName}</h3>

				<p>Last Seen 9:69pm</p>
			</div>
			<div className="chat__body">
				{message.map((message) => (
					<p className={`chat__message ${message.name === user.displayName}`}>
						<span className="chat__username">{message.name}</span>
						{message.message}
					</p>
				))}
			</div>

			<div className="chat__footer">
				<InsertEmoticonIcon />
				<form>
					<input
						type="text"
						value={input}
						onChange={(e) => setInput(e.target.value)}
						placeholder="Type a message"
					/>
					<button onClick={sendMessage} type="submit">
						<SendIcon />
					</button>
				</form>
				<MicIcon />
			</div>
		</div>
	);
}

export default Chat;

import './Chat.css';
import { getMatches, addMessage } from '../InMemoryData/Matches/Matches.jsx';
import BottomNavbar from '../Shared/BottomNavbar/BottomNavbar';
import { useState } from 'react';

function Chat() {
  const [chats, setChats] = useState(getMatches(1));
  const [message, setMessage] = useState('');

  const refreshChats = () => {
    setChats(getMatches(1));
  }

  const sendMessage = () => {
    addMessage(1, message);
    setMessage('');
    refreshChats();
  }

  return (
    <div>
      <h1>Potential Roommates</h1>
      <div className='chat-wrapper'>
        {chats.map((chat, index) => (
            <div key={ index } className={ chat.source ? 'message receiver-message' : 'message sender-message'}>
              {chat.message}
            </div>
        ))}
      </div>
      <div className='send-bar'>
          <input placeholder='Message' className='new-message' value={message} onChange={e => setMessage(e.target.value)}></input>
          <p><box-icon type='solid' name='up-arrow-circle' onClick={sendMessage} className='send-button'></box-icon></p>
        </div>
      <BottomNavbar></BottomNavbar>
    </div>
  )
}

export default Chat

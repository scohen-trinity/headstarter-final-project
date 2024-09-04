import './Chat.css';
import getMatches from '../InMemoryData/Matches/Matches.jsx';
import BottomNavbar from '../Shared/BottomNavbar/BottomNavbar';

function Chat() {
  const chats = getMatches(1);

  const refreshChats = () => {
    console.log('clicked');
    getMatches(1);
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
          <input placeholder='Message' className='new-message'></input>
          <p><box-icon type='solid' name='up-arrow-circle' onClick={refreshChats} className='send-button'></box-icon></p>
        </div>
      <BottomNavbar></BottomNavbar>
    </div>
  )
}

export default Chat

import './Home.css'
import users from '../InMemoryData/Users/UserList';
import { useState } from 'react';

function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
    
  const removeProfile = () => {
    moveToNextProfile();
  };

  const matchProfile = () => {
    moveToNextProfile();
  }

  const moveToNextProfile = () => {
    currentIndex < users.length - 1 ? setCurrentIndex(currentIndex + 1) : setCurrentIndex(0);
  }

  return (
    <div className='home-wrapper'>
      <div>
        <h1>Home Page</h1>
      </div>
      <div className='profile-card'>
        <h2>{users[currentIndex].name}</h2>
        <div className='flags'>
            <p>{users[currentIndex].budget}</p>
            <p>{users[currentIndex].lifestyle}</p>
            <p>{users[currentIndex].school}</p>
            <p>{users[currentIndex].residencyType}</p>
        </div>
        <div className='swipe-bar'>
            <p className='match'><button onClick={removeProfile}>no</button></p>
            <p className='pass'><button onClick={matchProfile}>yes</button></p>
        </div>
      </div>
    </div>
  )
}

export default Home

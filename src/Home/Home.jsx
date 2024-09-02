import { useState } from 'react';

import './Home.css'
import users from '../InMemoryData/Users/UserList';

import 'boxicons'

function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
    
  const matchProfile = () => {
    moveToNextProfile();
  }
  
  const removeProfile = () => {
    moveToNextProfile();
  };

  const moveToNextProfile = () => {
    currentIndex < users.length - 1 ? setCurrentIndex(currentIndex + 1) : setCurrentIndex(0);
  }

  return (
    <div className='home-wrapper'>
      <div>
        <h1>Discover Page</h1>
      </div>
      <div className='profile-card'>
        <h2 className='name-tag'>{users[currentIndex].name}</h2>
        <div className='tags'>
            <p className='tag'>{users[currentIndex].school}</p>
            <p className='tag'>${users[currentIndex].budget}</p>
            <p className='tag'>{users[currentIndex].residencyType}</p>
            <p className='tag'>{users[currentIndex].lifestyle}</p>
        </div>
        <div className='swipe-bar'>
            <p><box-icon name='x-circle' onClick={removeProfile} animation='tada-hover'></box-icon></p>
            <p><box-icon name='check-circle' onClick={matchProfile} animation='tada-hover'></box-icon></p>
        </div>
      </div>
    </div>
  )
}

export default Home

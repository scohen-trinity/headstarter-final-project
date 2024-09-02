import './Home.css'
import profiles from '../InMemoryData/Users/Profiles';
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
    currentIndex < profiles.length - 1 ? setCurrentIndex(currentIndex + 1) : setCurrentIndex(0);
  }

  return (
    <div className='home-wrapper'>
      <div>
        <h1>Home Page</h1>
      </div>
      <div className='profile-card'>
        <h2>{profiles[currentIndex].name}</h2>
        <div className='flags'>
            <p>{profiles[currentIndex].budget}</p>
            <p>{profiles[currentIndex].lifestyle}</p>
            <p>{profiles[currentIndex].location}</p>
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

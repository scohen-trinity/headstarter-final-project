import React from 'react';
import { Link } from 'react-router-dom';
import './BottomNavbar.css';
import 'boxicons';

function BottomNavbar() {
  // Retrieve the current user from localStorage
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  return (
    <div className='bottom-wrapper'>
      <Link to={"/home"}><div><box-icon name='home-smile'></box-icon></div></Link>
      <Link to={"/chat"}><div><box-icon name='comment-dots'></box-icon></div></Link>
      {/* Update the profile link to include the username */}
      <Link to={`/profile/${currentUser?.username}`}><div><box-icon name='user-circle'></box-icon></div></Link>
    </div>
  );
}

export default BottomNavbar;

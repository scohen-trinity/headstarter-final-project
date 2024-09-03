import { Link } from 'react-router-dom'
import './BottomNavbar.css'

import 'boxicons'

function BottomNavbar() {
  return (
    <div className='bottom-wrapper'>
      <Link to={"/home"}><div><box-icon name='home-smile'></box-icon></div></Link>
      <Link to={"/chat"}><div><box-icon name='comment-dots'></box-icon></div></Link>
      <Link to={"/profile"}><div><box-icon name='user-circle'></box-icon></div></Link>
    </div>
  )
}

export default BottomNavbar

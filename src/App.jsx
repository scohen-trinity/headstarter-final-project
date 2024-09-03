import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from './Home/Home'
import Chat from './Chat/Chat.jsx'
import Login from './Login/Login.jsx'
import Landing from './Landing/Landing.jsx'
import Profile from './Profile/Profile.jsx'

import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landing />}></Route>
        <Route path='/chat' element={<Chat />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/profile' element={<Profile />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App

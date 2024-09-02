import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import Landing from './Landing/Landing.jsx'
import App from './App.jsx'
// import Home from './Home/Home.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <Home /> */}
  </StrictMode>,
)

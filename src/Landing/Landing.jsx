import React from 'react';
import { Link } from 'react-router-dom';
import './Landing.css';


function Landing() {
 return (
   <div className="landing-wrapper">
     <header className="landing-header">
       <h1>Welcome to RoommateFinder</h1>
     </header>
     <main className="landing-main">
       <section className="landing-hero">
         <h2>Find Your Perfect Roommate</h2>
         <p>Connect with compatible roommates based on your lifestyle, budget, and preferences.</p>
       </section>
       <section className="landing-features">
         <div className="feature-card">
           <span className="feature-icon">🔍</span>
           <h3>Discover</h3>
           <p>Browse through potential roommates</p>
         </div>
         <div className="feature-card">
           <span className="feature-icon">💰</span>
           <h3>Budget-Friendly</h3>
           <p>Find matches within your price range</p>
         </div>
         <div className="feature-card">
           <span className="feature-icon">🏠</span>
           <h3>Lifestyle Match</h3>
           <p>Connect based on shared interests</p>
         </div>
       </section>
       <Link to="/login" className="login-button">Login</Link>
     </main>
     <footer className="landing-footer">
       <p>&copy; 2024 RoommateFinder. All rights reserved.</p>
     </footer>
   </div>
 );
}


export default Landing;

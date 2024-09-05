import React, { useState } from 'react';
import './Landing.css';
import Login from '../Login/Login';

const LandingPage = () => {
  const [showLogin, setShowLogin] = useState(false);

  const toggleLogin = () => {
    setShowLogin(!showLogin);
  };

  return (
    <div className="landing-page">
      <header className="header">
        <h1 className="brand">Roomie</h1>
        <button className="login-btn" onClick={toggleLogin}>Login</button>
      </header>
      <main className="main-content">
        <section className="hero-section">
          <h2 className="hero-title">Find Your Perfect Roommate</h2>
          <p className="hero-slogan">Discover compatible living partners with ease</p>
          <button className="cta-btn">Get Started</button>
        </section>
        <section className="features-section">
          <div className="feature-card">
            <h3 className="feature-title">Smart Matching</h3>
            <p className="feature-description">Our algorithm finds your ideal roommate</p>
          </div>
          <div className="feature-card">
            <h3 className="feature-title">Verified Profiles</h3>
            <p className="feature-description">All users are verified for your safety</p>
          </div>
          <div className="feature-card">
            <h3 className="feature-title">Easy Communication</h3>
            <p className="feature-description">Chat with potential roommates in-app</p>
          </div>
        </section>
      </main>
      <footer className="footer">
        <p>&copy; 2024 Roomie. All rights reserved.</p>
      </footer>
      {showLogin && <Login onClose={toggleLogin} />}
    </div>
  );
};

export default LandingPage;
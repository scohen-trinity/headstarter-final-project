import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

const users = [
  {
 name: 'Sam',
 username: 'sam123',
 password: 'sam_pass',
 budget: 800,
 school: 'Trinity University',
 lifestyle: 'party',
 residencyType: 'Apartment',
  },
  {
 name: 'Praneet',
 username: 'praneet123',
 password: 'praneet_pass',
 budget: 1000,
 school: 'UT Dallas',
 lifestyle: 'homebody',
 residencyType: 'Dorm',
  },
  {
 name: 'Bob',
 username: 'bob123',
 password: 'bob_pass',
 budget: 950,
 school: 'UT Dallas',
 lifestyle: 'mostly homebody',
 residencyType: 'Dorm',
  },
  {
 name: 'Joe',
 username: 'joe123',
 password: 'joe_pass',
 budget: 1200,
 school: 'Trinity University',
 lifestyle: 'sometimes party',
 residencyType: 'Apartment',
  },
 ];

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    const user = users.find(
      (user) => user.username === username && user.password === password
    );
    if (user) {
      // Store user data in localStorage
      localStorage.setItem("currentUser", JSON.stringify(user));
      // Redirect to the user's profile page
      navigate(`/profile/${user.username}`);
    } else {
      alert("Invalid username or password");
    }
  };

  return (
    <div className="login-container">
      <h2 className="login-title">Login</h2>
      <div className="login-form">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="login-input"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="login-input"
        />
        <button onClick={handleLogin} className="login-button">Login</button>
      </div>
      <Link to="/create-account" className="create-account-link">
        Create an account
      </Link>
    </div>
  );
}

export default Login;
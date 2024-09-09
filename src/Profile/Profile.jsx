import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import BottomNavbar from "../Shared/BottomNavbar/BottomNavbar";
import "./Profile.css";

function Profile() {
  const [user, setUser] = useState(null);
  const { username } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const getCurrentUser = () => {
      const currentUser = JSON.parse(localStorage.getItem("currentUser"));
      if (currentUser) {
        setUser(currentUser);
      } else {
        // If no user data is found, redirect to login
        navigate("/login");
      }
    };

    getCurrentUser();
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    navigate("/");
  };

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="profile-container">
      <h1>{user.name}'s Profile</h1>
      <div className="profile-details">
        <p><strong>Username:</strong> {user.username}</p>
        <p><strong>Budget:</strong> ${user.budget}</p>
        <p><strong>School:</strong> {user.school}</p>
        <p><strong>Lifestyle:</strong> {user.lifestyle}</p>
        <p><strong>Residency Type:</strong> {user.residencyType}</p>
      </div>
      <button className="logout-button" onClick={handleLogout}>Logout</button>
      <BottomNavbar />
    </div>
  );
}

export default Profile;

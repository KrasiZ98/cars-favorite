import './profile.css'
import React, { useContext } from 'react'
import { UserContext } from '../../context/UserContext'

export const Profile = () => {
  const { user, userLogout } = useContext(UserContext);
  
  return (
    <>
      <header className='profile_header'>
        <h1>Profile Page</h1>
      </header>

      <div className="profile_container">
        <h2>Your Profile</h2>

        <div className="profile-info">
          <div className="avatar">
            <img src={user.image} alt="User Avatar" />
          </div>

          <div className="user-details">
            <h3>{user.username}</h3>
            <p>Email: {user.email}</p>

          </div>
        </div>

        <button onClick={userLogout} className="logout-btn">Logout</button>
      </div>
    </>
  )
}

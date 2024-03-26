import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import "../style/components.css"
export default function MyProfile() {
  const userData = useSelector(state => state)  
  console.log(userData)
  return (
    <div class="main">
      <h1>My Profile</h1>
      <img src={userData.user.image}/>
      <h3>{userData.user.name}</h3>
    </div>
  )
}

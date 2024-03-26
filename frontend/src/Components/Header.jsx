import React from 'react';
import logo from '../assets/foodmi.png';
import '../style/components.css';
import {NavLink , Link, useNavigate} from 'react-router-dom';
import { FaUser } from "react-icons/fa";
import { TbHeart } from "react-icons/tb";
import {FaSearch} from 'react-icons/fa'; 
import { useDispatch, useSelector } from 'react-redux';
import { logoutRedux } from '../redux/userSlicer';

export default function Header() {
  const userData = useSelector(state => state.user)  
  console.log(userData)
  const navigate = useNavigate();

  const dispatch = useDispatch()
  const handleLogout = () => {
    dispatch(logoutRedux());
    alert("Logout successfully");
  };
  return (
    <div class='header'>
      <Link to={""}><img src={logo} alt='Foodmi'/></Link>
        <h1>Foo Studio</h1>
        <div class="menu">
          <nav>
            <ul>
              <li>
                <NavLink to={""}>HOME</NavLink>
              </li>
              <li>
                <NavLink to={"/MealPlanner"}>MEAL PLANNER</NavLink>
              </li>
              <li>
              <NavLink to={"/AboutUS"}>ABOUT US</NavLink>   
              </li>
              <li>
              <NavLink to={"/Search"}><FaSearch /></NavLink>  
              </li>
              <li>
              <NavLink to={"/Favourites"}><TbHeart/></NavLink>
              </li>
              <li>
              <NavLink to={"/MyProfile"}><FaUser /></NavLink>  
              </li>
              <li>
              {(userData._id) ? <p onClick={handleLogout}>LOG OUT</p> : <Link to={"/login"}>LOGIN</Link> }              
             </li>
            </ul>
            <button type='button' onClick={()=>navigate('/Createnewrecipe')}>CREATE RECIPE</button>
          </nav>
        </div>
    </div>
  )
}

import React, { useState } from 'react'
import logo from '../assets/foodmi.png';
import  '../style/Login.css';
import { Link , useNavigate} from 'react-router-dom';
import axios from'axios';
import {toast} from 'react-hot-toast';
import { loginRedux } from '../redux/userSlicer';
import { useDispatch, useSelector } from 'react-redux';
export default function Login() {
  const[data, setData] = useState({
    email : "",
    password : "",
  })

  const userData = useSelector(state => state)
  
  const dispatch = useDispatch()

  const navigate = useNavigate()

  const handleInput =(e)=>{
    const {name, value} = e.target
        setData((prev)=>{
            return{
                ...prev,
                [name] : value
            }
        })
  }

  const handleSubmit =(e)=>{
    e.preventDefault()
    axios.post('http://localhost:5000/Login',data)
    .then(result => {
      console.log(result)
      if(result.data.alert){
        alert(result.data.message)
        setTimeout(()=>{
          navigate("/")
        },1000)
        dispatch(loginRedux(result.data))
      }
      else{
        alert(result.data.message)
      }
      })
    .catch(err => console.log(err))
  }
  

  return (
    <body class='bd'>
        <div class="container">
            <div class="login">
              <form onSubmit={handleSubmit}>
                <input type='email' name ="email" placeholder='email' onChange={handleInput}/> <br />
                <input type='password'name="password" placeholder='password' onChange={handleInput}/> <br />
                <button type='submit'> Log In</button> <br />
                <p>Not a user? <Link exact to="/SignUp">Sign Up</Link></p>
              </form>
            </div>
        </div>
    </body>
  )
}

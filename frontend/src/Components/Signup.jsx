import React from 'react'
import logo from '../assets/foodmi.png';
import  '../style/Login.css';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from "axios"
import ImagetoBase64 from '../utils/ImagetoBase64';

export default function Signup() {

    const navigate = useNavigate()
    const[Data, setData] = useState({
        name: "",
        email : "",
        password : "",
        confirmpassword:"",
        image : ""
      })


    const [Formerrors, setFormerrors] = useState({
        name :"",
        email :"",
        password:"",
        confirmpassword:""
    })

    const Validate =(e)=>{
        let errors = {};
        if(Data.name===''){
            errors.name = "please enter name"
        }

        if(!Data.email.trim()){
            errors.email = 'Email is required';
        }
        else if(!/^\S+@\S+\.\S+$/.test(Data.email)){
            errors.email = 'Invalid email format'
        }
        if (Data.password.length < 6) {
            errors.password = 'Password must be at least 6 characters long';
        }
        else if(Data.password !== Data.confirmpassword){
            errors.password = 'Passwords donot match ❌';
        }

        
        setFormerrors(errors);
        return Object.keys(errors).length === 0;
    }
    console.log(Formerrors)

    const handleChange =(e)=>{
        const {name, value} = e.target
        setData((prev)=>{
            return{
                ...prev,
                [name] : value
            }
        })
    }
    console.log(process.env.REACT_APP_SERVER_DOMIN)

    // const handleSubmit = async(e)=>{
    //     e.preventDefault();
    //     if(Validate()){
    //         const fetchData = await fetch(`${process.env.REACT_APP_SERVER_DOMIN}/SignUp`,{
    //             method : "POST",
    //             headers : {
    //               "content-type" : "application/json"
    //             },
    //             body : JSON.stringify(Data)
    //           })
    
    //           const dataRes = await fetchData.json()
    //     }
    //     else{
    //         console.log('form has errors')
    //     }
    // }

    const handleSubmit =async(e)=>{
        e.preventDefault();
        if(Validate()){
            axios.post('http://localhost:5000/SignUp', Data)
            .then(result =>{
                console.log(result);
                if(!result.data.message){
                    alert("SignUp sucessfull")
                    setTimeout(()=>{
                        navigate("/Login")
                      },1000)
                }
                else{
                    alert(result.data.message)
                }
            })
            .catch(err=> console.log(err))
        }
        else{
            console.log('form has errors')
        }
    }

    const HandleUploadpicture= async(e)=>{
        const data = await ImagetoBase64(e.target.files[0])
        console.log(data)
        setData((prev)=>{
            return{
                ...prev,
                image : data
            }
        })
    }
    console.log(Data)
    return (
    <body class="bd">
        <div class="container">
            <form onSubmit={handleSubmit}>
            <div class="login">
                <div class="uploadimg">
                    <img src={Data.image ? Data.image: logo} alt="profile"/>
                    <div class="uploadtext">
                   
                    </div>

                </div>
                <input type="file" id="aavatar" name="avatar" accept="image/png, image/jpeg" onChange={HandleUploadpicture}></input>

                <input type='text' name="name" value ={Data.name} onChange={handleChange} placeholder='name'/> <br />
                {Formerrors.name && (<span className='error'>{Formerrors.name}</span>)}
                <input type='email' name ="email" value={Data.email} onChange={handleChange} placeholder='email'/> <br />
                {Formerrors.email && <span className='error'>{Formerrors.email}</span>}
                <input type='password' name="password" value={Data.password} onChange={handleChange} placeholder='password'/> <br />
                {Formerrors.password && (<span className='error'>{Formerrors.password}</span>)}
                <input type='password' name="confirmpassword" value={Data.confirmpassword} onChange={handleChange} placeholder='confirm password'/> <br />
                <button type='submit'>Sign Up </button> <br />
                <p>Already Have an account ? <Link exact to="/login">Log In</Link> </p>
            </div>
            </form>
        </div>
    </body>
  )
}